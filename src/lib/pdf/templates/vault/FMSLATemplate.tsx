import { Document, Text, View } from '@react-pdf/renderer';
import { globalStyles, pdfColors } from '../../styles';
import { PDFBaseLayout } from '../../components/PDFBaseLayout';
import { PDFCoverSection } from '../../components/PDFCoverSection';
import { PDFContactCTA } from '../../components/PDFContactCTA';
import { PDFGoldDivider } from '../../components/PDFGoldDivider';
import React from 'react';

export const VaultFMSLATemplatePDF = ({ referenceNumber, generatedDate }: { referenceNumber: string, generatedDate: string }) => {
  return (
    <Document title="Facilities Management SLA Template - EntireFM" author="EntireFM">
      <PDFBaseLayout 
        documentTitle="SLA Framework" 
        referenceNumber={referenceNumber} 
        generatedDate={generatedDate}
        showDisclaimer={true}
      >
        <PDFCoverSection 
          title="Service Level Agreement (SLA)"
          subtitle="Hard & Soft FM Performance Standards"
          generatedFor="[Legal Entity / Client Name]"
          generatedDate={generatedDate}
          documentType="SLA Template"
          referenceNumber={referenceNumber}
        />

        <View style={{ marginBottom: 25 }}>
          <Text style={globalStyles.body}>
            This master Service Level Agreement (SLA) framework defines the technical performance requirements, response timeframes, and Key Performance Indicators (KPIs) expected from an EntireFM managed service contract.
          </Text>
        </View>

        <Text style={globalStyles.h2}>1. Reactive Priority Matrix</Text>
        <PDFGoldDivider />
        <View style={{ marginBottom: 30 }}>
          <View style={{ flexDirection: 'row', backgroundColor: pdfColors.navy }}>
            <Text style={[globalStyles.tableHeaderCell, { width: '20%' }]}>Priority</Text>
            <Text style={[globalStyles.tableHeaderCell, { width: '40%' }]}>Operational Definition</Text>
            <Text style={[globalStyles.tableHeaderCell, { width: '20%', textAlign: 'center' }]}>Response</Text>
            <Text style={[globalStyles.tableHeaderCell, { width: '20%', textAlign: 'center' }]}>Resolution</Text>
          </View>
          
          <View style={{ flexDirection: 'row', borderBottomWidth: 1, borderBottomColor: '#f1f5f9', minHeight: 45, alignItems: 'center' }}>
            <View style={[{ width: '20%' }, globalStyles.tableBodyCell]}>
              <Text style={{ fontWeight: 'bold', color: pdfColors.red }}>P1: Crisis</Text>
            </View>
            <View style={[{ width: '40%' }, globalStyles.tableBodyCell]}>
              <Text style={{ fontSize: 7, color: '#475569' }}>Risk to life, total power loss, or major server room cooling failure.</Text>
            </View>
            <View style={{ width: '20%', ...globalStyles.tableBodyCell, alignItems: 'center' }}>
              <Text style={{ fontWeight: 'bold', color: pdfColors.navy }}>2 Hours</Text>
            </View>
            <View style={{ width: '20%', ...globalStyles.tableBodyCell, alignItems: 'center' }}>
              <Text style={{ fontWeight: 'bold', color: pdfColors.navy }}>4 Hours</Text>
            </View>
          </View>

          <View style={{ flexDirection: 'row', borderBottomWidth: 1, borderBottomColor: '#f1f5f9', minHeight: 45, alignItems: 'center' }}>
            <View style={[{ width: '20%' }, globalStyles.tableBodyCell]}>
              <Text style={{ fontWeight: 'bold', color: pdfColors.amber }}>P2: Urgent</Text>
            </View>
            <View style={[{ width: '40%' }, globalStyles.tableBodyCell]}>
              <Text style={{ fontSize: 7, color: '#475569' }}>Significant operational impact but no immediate life-safety risk.</Text>
            </View>
            <View style={{ width: '20%', ...globalStyles.tableBodyCell, alignItems: 'center' }}>
              <Text style={{ fontWeight: 'bold', color: pdfColors.navy }}>4 Hours</Text>
            </View>
            <View style={{ width: '20%', ...globalStyles.tableBodyCell, alignItems: 'center' }}>
              <Text style={{ fontWeight: 'bold', color: pdfColors.navy }}>24 Hours</Text>
            </View>
          </View>

          <View style={{ flexDirection: 'row', borderBottomWidth: 1, borderBottomColor: '#f1f5f9', minHeight: 45, alignItems: 'center' }}>
            <View style={[{ width: '20%' }, globalStyles.tableBodyCell]}>
              <Text style={{ fontWeight: 'bold', color: pdfColors.slate600 }}>P3: Routine</Text>
            </View>
            <View style={[{ width: '40%' }, globalStyles.tableBodyCell]}>
              <Text style={{ fontSize: 7, color: '#475569' }}>Minor building fabric defects or aesthetic issues (e.g. faulty lamp).</Text>
            </View>
            <View style={{ width: '20%', ...globalStyles.tableBodyCell, alignItems: 'center' }}>
              <Text style={{ fontWeight: 'bold', color: pdfColors.navy }}>48 Hours</Text>
            </View>
            <View style={{ width: '20%', ...globalStyles.tableBodyCell, alignItems: 'center' }}>
              <Text style={{ fontWeight: 'bold', color: pdfColors.navy }}>5 Days</Text>
            </View>
          </View>
        </View>

        <View wrap={false} style={{ marginBottom: 30 }}>
          <Text style={globalStyles.h2}>2. Strategic Performance KPIs</Text>
          <PDFGoldDivider />
          <View style={{ gap: 10 }}>
            <View style={{ padding: 12, backgroundColor: pdfColors.lightGrey, borderLeftWidth: 3, borderLeftColor: pdfColors.gold }}>
              <Text style={{ fontSize: 9, fontWeight: 'bold', color: pdfColors.navy, marginBottom: 4 }}>KPI 1: Statutory Compliance (100% Target)</Text>
              <Text style={globalStyles.small}>Full adherence to building regulations with all certifications digitalized within 48 hours of service.</Text>
            </View>
            <View style={{ padding: 12, backgroundColor: pdfColors.lightGrey, borderLeftWidth: 3, borderLeftColor: pdfColors.gold }}>
              <Text style={{ fontSize: 9, fontWeight: 'bold', color: pdfColors.navy, marginBottom: 4 }}>KPI 2: PPM Effectiveness (95% Target)</Text>
              <Text style={globalStyles.small}>Scheduled preventative maintenance tasks to be completed within the specific calendar month of issue.</Text>
            </View>
          </View>
        </View>

        <View wrap={false} style={{ marginTop: 10 }}>
          <Text style={globalStyles.h2}>3. Governance & Escalation</Text>
          <PDFGoldDivider />
          <View style={globalStyles.sectionBox}>
            <Text style={[globalStyles.small, { marginBottom: 8 }]}><Text style={{ fontWeight: 'bold', color: pdfColors.navy }}>Level 1:</Text> 24/7 National Helpdesk — [Insert Regional Node Number]</Text>
            <Text style={[globalStyles.small, { marginBottom: 8 }]}><Text style={{ fontWeight: 'bold', color: pdfColors.navy }}>Level 2:</Text> Dedicated Account Manager — [Insert Name & Direct Dial]</Text>
            <Text style={globalStyles.small}><Text style={{ fontWeight: 'bold', color: pdfColors.navy }}>Level 3:</Text> Operations Director — [Escalation path via HQ]</Text>
          </View>

          <View style={{ marginTop: 20 }}>
            <PDFContactCTA documentType="SLA management" customText="Need a bespoke SLA backed by financial service credits? EntireFM delivers results-oriented FM partnerships that protect your building's value." />
          </View>
        </View>
      </PDFBaseLayout>
    </Document>
  );
};
