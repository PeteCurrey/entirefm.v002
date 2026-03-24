"use client";

import { useState } from "react";
import {
  DndContext,
  DragEndEvent,
  DragOverlay,
  DragStartEvent,
  PointerSensor,
  useSensor,
  useSensors,
  closestCenter,
} from "@dnd-kit/core";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { format } from "date-fns";
import { Building2, Mail, Phone, Calendar, GripVertical, PoundSterling } from "lucide-react";
import { cn } from "@/lib/utils";

type ProposalStatus = 'new' | 'reviewing' | 'contacted' | 'quoted' | 'won' | 'lost';

interface ProposalRequest {
  id: string;
  created_at: string;
  updated_at: string;
  status: ProposalStatus;
  company_name: string;
  contact_name: string | null;
  email: string;
  phone: string | null;
  business_type: string | null;
  sites: Array<{ city: string; buildings: number; is24_7: boolean }>;
  services: string[];
  urgency_level: string | null;
  estimated_value: number | null;
  follow_up_date: string | null;
}

interface ProposalKanbanProps {
  proposals: ProposalRequest[];
  onStatusChange: (id: string, status: ProposalStatus) => void;
  onProposalClick: (id: string) => void;
}

const columns: { id: ProposalStatus; label: string; color: string }[] = [
  { id: 'new', label: 'New', color: 'bg-blue-500' },
  { id: 'reviewing', label: 'Reviewing', color: 'bg-yellow-500' },
  { id: 'contacted', label: 'Contacted', color: 'bg-purple-500' },
  { id: 'quoted', label: 'Quoted', color: 'bg-orange-500' },
  { id: 'won', label: 'Won', color: 'bg-green-500' },
  { id: 'lost', label: 'Lost', color: 'bg-red-500' },
];

function ProposalCard({ 
  proposal, 
  isDragging = false,
  onClick 
}: { 
  proposal: ProposalRequest; 
  isDragging?: boolean;
  onClick: () => void;
}) {
  return (
    <Card 
      className={cn(
        "p-3 cursor-grab active:cursor-grabbing transition-all hover:shadow-md",
        isDragging && "opacity-50 rotate-2 shadow-lg"
      )}
      onClick={onClick}
    >
      <div className="flex items-start gap-2">
        <GripVertical className="h-4 w-4 text-muted-foreground flex-shrink-0 mt-0.5" />
        <div className="flex-1 min-w-0">
          <h4 className="font-medium text-sm truncate">{proposal.company_name}</h4>
          {proposal.contact_name && (
            <p className="text-xs text-muted-foreground truncate">{proposal.contact_name}</p>
          )}
          
          <div className="mt-2 space-y-1">
            <div className="flex items-center gap-1 text-xs text-muted-foreground">
              <Mail className="h-3 w-3" />
              <span className="truncate">{proposal.email}</span>
            </div>
            {proposal.estimated_value && (
              <div className="flex items-center gap-1 text-xs font-medium text-green-600">
                <PoundSterling className="h-3 w-3" />
                <span>{proposal.estimated_value.toLocaleString()}</span>
              </div>
            )}
          </div>

          <div className="mt-2 flex flex-wrap gap-1">
            {proposal.services.slice(0, 2).map((service, idx) => (
              <Badge key={idx} variant="secondary" className="text-[10px] px-1 py-0">
                {service}
              </Badge>
            ))}
            {proposal.services.length > 2 && (
              <Badge variant="outline" className="text-[10px] px-1 py-0">
                +{proposal.services.length - 2}
              </Badge>
            )}
          </div>

          <div className="mt-2 flex items-center justify-between text-[10px] text-muted-foreground">
            <span>{format(new Date(proposal.created_at), 'MMM d')}</span>
            {proposal.urgency_level && (
              <Badge 
                variant={proposal.urgency_level === 'urgent' ? 'destructive' : 'outline'}
                className="text-[10px] px-1 py-0"
              >
                {proposal.urgency_level}
              </Badge>
            )}
          </div>
        </div>
      </div>
    </Card>
  );
}

function KanbanColumn({ 
  column, 
  proposals,
  onProposalClick 
}: { 
  column: typeof columns[0]; 
  proposals: ProposalRequest[];
  onProposalClick: (id: string) => void;
}) {
  const totalValue = proposals.reduce((sum, p) => sum + (p.estimated_value || 0), 0);
  
  return (
    <div className="flex-1 min-w-[280px] max-w-[320px]">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <div className={cn("w-3 h-3 rounded-full", column.color)} />
          <h3 className="font-semibold text-sm">{column.label}</h3>
          <Badge variant="secondary" className="text-xs">
            {proposals.length}
          </Badge>
        </div>
        {totalValue > 0 && (
          <span className="text-xs font-medium text-muted-foreground">
            £{totalValue.toLocaleString()}
          </span>
        )}
      </div>
      
      <div 
        className="bg-muted/50 rounded-lg p-2 min-h-[500px] space-y-2"
        data-column={column.id}
      >
        {proposals.map((proposal) => (
          <div key={proposal.id} data-proposal-id={proposal.id}>
            <ProposalCard 
              proposal={proposal} 
              onClick={() => onProposalClick(proposal.id)}
            />
          </div>
        ))}
        {proposals.length === 0 && (
          <div className="text-center py-8 text-muted-foreground text-sm">
            No proposals
          </div>
        )}
      </div>
    </div>
  );
}

export default function ProposalKanban({ proposals, onStatusChange, onProposalClick }: ProposalKanbanProps) {
  const [activeId, setActiveId] = useState<string | null>(null);
  const { toast } = useToast();

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 8,
      },
    })
  );

  const activeProposal = activeId ? proposals.find(p => p.id === activeId) : null;

  const handleDragStart = (event: DragStartEvent) => {
    setActiveId(event.active.id as string);
  };

  const handleDragEnd = async (event: DragEndEvent) => {
    const { active, over } = event;
    setActiveId(null);

    if (!over) return;

    const proposalId = active.id as string;
    const overElement = document.elementFromPoint(
      event.activatorEvent instanceof PointerEvent ? event.activatorEvent.clientX : 0,
      event.activatorEvent instanceof PointerEvent ? event.activatorEvent.clientY : 0
    );
    
    // Find the column by looking for the data-column attribute
    const columnElement = overElement?.closest('[data-column]');
    const newStatus = columnElement?.getAttribute('data-column') as ProposalStatus;

    if (!newStatus) return;

    const proposal = proposals.find(p => p.id === proposalId);
    if (!proposal || proposal.status === newStatus) return;

    try {
      const { error } = await supabase
        .from('proposal_requests')
        .update({ status: newStatus })
        .eq('id', proposalId);

      if (error) throw error;

      onStatusChange(proposalId, newStatus);
      
      toast({
        title: "Status updated",
        description: `Moved to ${columns.find(c => c.id === newStatus)?.label}`,
      });
    } catch (error: any) {
      toast({
        title: "Error updating status",
        description: error.message,
        variant: "destructive",
      });
    }
  };

  const getProposalsByStatus = (status: ProposalStatus) => {
    return proposals.filter(p => p.status === status);
  };

  // Calculate pipeline totals
  const pipelineValue = proposals
    .filter(p => !['won', 'lost'].includes(p.status))
    .reduce((sum, p) => sum + (p.estimated_value || 0), 0);
  
  const wonValue = proposals
    .filter(p => p.status === 'won')
    .reduce((sum, p) => sum + (p.estimated_value || 0), 0);

  return (
    <div>
      {/* Pipeline Summary */}
      <div className="flex gap-4 mb-6">
        <Card className="p-4 flex-1">
          <div className="text-sm text-muted-foreground">Pipeline Value</div>
          <div className="text-2xl font-bold">£{pipelineValue.toLocaleString()}</div>
        </Card>
        <Card className="p-4 flex-1">
          <div className="text-sm text-muted-foreground">Won This Period</div>
          <div className="text-2xl font-bold text-green-600">£{wonValue.toLocaleString()}</div>
        </Card>
        <Card className="p-4 flex-1">
          <div className="text-sm text-muted-foreground">Total Proposals</div>
          <div className="text-2xl font-bold">{proposals.length}</div>
        </Card>
        <Card className="p-4 flex-1">
          <div className="text-sm text-muted-foreground">Conversion Rate</div>
          <div className="text-2xl font-bold">
            {proposals.length > 0 
              ? Math.round((proposals.filter(p => p.status === 'won').length / proposals.length) * 100)
              : 0}%
          </div>
        </Card>
      </div>

      {/* Kanban Board */}
      <DndContext
        sensors={sensors}
        collisionDetection={closestCenter}
        onDragStart={handleDragStart}
        onDragEnd={handleDragEnd}
      >
        <div className="flex gap-4 overflow-x-auto pb-4">
          {columns.map((column) => (
            <KanbanColumn
              key={column.id}
              column={column}
              proposals={getProposalsByStatus(column.id)}
              onProposalClick={onProposalClick}
            />
          ))}
        </div>

        <DragOverlay>
          {activeProposal ? (
            <ProposalCard 
              proposal={activeProposal} 
              isDragging 
              onClick={() => {}}
            />
          ) : null}
        </DragOverlay>
      </DndContext>
    </div>
  );
}
