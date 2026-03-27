"use client";

import React, { useState, useEffect } from "react";
import { CheckSquare2, Square, RotateCcw } from "lucide-react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

interface ChecklistItemProps {
  title: string;
  items: { text: string; note?: string }[];
  id?: string;
}

export function ChecklistItem({ title, items, id }: ChecklistItemProps) {
  const pathname = usePathname();
  const slug = pathname.split("/").pop() || "";
  const baseKey = `checklist-${slug}-${id || title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`;

  const [checkedState, setCheckedState] = useState<boolean[]>(Array(items.length).fill(false));
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const saved = localStorage.getItem(baseKey);
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length === items.length) {
          setCheckedState(parsed);
        }
      } catch (e) {
        console.error("Failed to parsed checklist state", e);
      }
    }
  }, [baseKey, items.length]);

  const handleToggle = (index: number) => {
    const newState = [...checkedState];
    newState[index] = !newState[index];
    setCheckedState(newState);
    if (typeof window !== "undefined") {
      localStorage.setItem(baseKey, JSON.stringify(newState));
    }
  };

  const handleReset = () => {
    const newState = Array(items.length).fill(false);
    setCheckedState(newState);
    if (typeof window !== "undefined") {
      localStorage.setItem(baseKey, JSON.stringify(newState));
    }
  };

  const completedCount = checkedState.filter(Boolean).length;
  const isComplete = completedCount === items.length;

  if (!mounted) return null; // Avoid hydration mismatch

  return (
    <div className="w-full bg-white border border-gray-200 rounded-2xl shadow-sm my-10 overflow-hidden">
      <div className={cn("p-6 border-b flex items-center justify-between transition-colors duration-500", isComplete ? "bg-green-50 border-green-100" : "bg-gray-50 border-gray-100")}>
        <div>
          <h3 className="text-xl font-bold text-[#1a2e4a] m-0">{title}</h3>
          <p className={cn("text-sm font-semibold mt-1", isComplete ? "text-green-600" : "text-gray-500")}>
            {completedCount} of {items.length} completed
          </p>
        </div>
        {completedCount > 0 && (
          <button 
            onClick={handleReset}
            className="text-xs font-medium text-gray-400 hover:text-[#1a2e4a] flex items-center gap-1 bg-white px-3 py-1.5 rounded-full border border-gray-200 shadow-sm hover:shadow transition-all"
            title="Reset Checklist"
          >
            <RotateCcw className="w-3 h-3" /> Reset
          </button>
        )}
      </div>

      <div className="divide-y divide-gray-100">
        {items.map((item, index) => {
          const isChecked = checkedState[index];
          return (
            <button
              key={index}
              onClick={() => handleToggle(index)}
              className={cn("w-full text-left p-6 flex items-start gap-4 transition-colors duration-200 group hover:bg-gray-50", isChecked ? "bg-green-50/30" : "")}
            >
              <div className="shrink-0 mt-0.5">
                {isChecked ? (
                  <CheckSquare2 className="w-6 h-6 text-[#f5a623] drop-shadow-sm transition-transform duration-300 scale-110" />
                ) : (
                  <Square className="w-6 h-6 text-gray-300 group-hover:text-gray-400 transition-colors" />
                )}
              </div>
              <div className="min-w-0">
                <p className={cn("text-lg transition-colors duration-300 font-medium", isChecked ? "text-green-700 font-medium" : "text-gray-800")}>{item.text}</p>
                {item.note && (
                  <p className={cn("text-sm mt-1.5 italic font-light", isChecked ? "text-green-600/80" : "text-gray-500")}>
                    Note: {item.note}
                  </p>
                )}
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
