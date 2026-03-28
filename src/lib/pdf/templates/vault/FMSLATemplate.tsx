import { Document, Text, View } from '@react-pdf/renderer';
import { globalStyles, pdfColors } from '../../styles';
import { PDFBaseLayout } from '../../components/PDFBaseLayout';
import { PDFCoverSection } from '../../components/PDFCoverSection';
import { PDFContactCTA } from '../../components/PDFContactCTA';
import { PDFGoldDivider } from '../../components/PDFGoldDivider';
import React from 'react';

export const VaultFMSLATemplatePDF = ({ referenceNumber, generatedDate }: { referenceNumber: string, generatedDate: string }) => {
  return (
    <Document title="Facilities Management SLA Template" author="EntireFM">
      <PDFBaseLayout 
        documentTitle="SLA Template" 
        referenceNumber={referenceNumber} 
        generatedDate={generatedDate}
        showDisclaimer={true}
      >
        <PDFCoverSection 
          title="Service Level Agreement (SLA)"
          subtitle="Hard & Soft Facilities Management Services"
          generatedFor="[Enter Client Company Name]"
          generatedDate={generatedDate}
          documentType="SLA Template"
          referenceNumber={referenceNumber}
        />

        <Text style={globalStyles.body}>
          This Service Level Agreement (SLA) template outlines the standard response times, Key Performance Indicators (KPIs), and operational expectations between a Facilities Management Provider and a Client. 
        </Text>

        <Text style={globalStyles.h2}>1. Priority Definitions & Response Times</Text>
        <PDFGoldDivider />
        <View style={{ marginBottom: 20 }}>
          <View style={{ flexDirection: 'row', backgroundColor: pdfColors.navy }}>
            <Text style={{ ...globalStyles.tableHeaderCell, width: '15%' }}>Priority</Text>
            <Text style={{ ...globalStyles.tableHeaderCell, width: '45%' }}>Definition</Text>
            <Text style={{ ...globalStyles.tableHeaderCell, width: '20%' }}>Response</Text>
            <Text style={{ ...globalStyles.tableHeaderCell, width: '20%' }}>Resolution</Text>
          </View>
          
          <View style={{ flexDirection: 'row', backgroundColor: pdfColors.white, borderBottomWidth: 1, borderBottomColor: pdfColors.borderColour, minHeight: 40, alignItems: 'center' }}>
            <Text style={{ ...globalStyles.tableBodyCell, width: '15%', fontWeight: 'bold', color: pdfColors.red }}>P1: Crisis</Text>
            <Text style={{ ...globalStyles.tableBodyCell, width: '45%' }}>Risk to life, major business interruption, or severe building damage.</Text>
            <Text style={{ ...globalStyles.tableBodyCell, width: '20%', fontWeight: 'bold' }}>2 Hours</Text>
            <Text style={{ ...globalStyles.tableBodyCell, width: '20%', fontWeight: 'bold' }}>4 Hours</Text>
          </View>

          <View style={{ flexDirection: 'row', backgroundColor: '#fafafa', borderBottomWidth: 1, borderBottomColor: pdfColors.borderColour, minHeight: 40, alignItems: 'center' }}>
            <Text style={{ ...globalStyles.tableBodyCell, width: '15%', fontWeight: 'bold', color: pdfColors.amber }}>P2: Urgent</Text>
            <Text style={{ ...globalStyles.tableBodyCell, width: '45%' }}>Significant operational impact but no immediate safety risk.</Text>
            <Text style={{ ...globalStyles.tableBodyCell, width: '20%', fontWeight: 'bold' }}>4 Hours</Text>
            <Text style={{ ...globalStyles.tableBodyCell, width: '20%', fontWeight: 'bold' }}>24 Hours</Text>
          </View>

          <View style={{ flexDirection: 'row', backgroundColor: pdfColors.white, borderBottomWidth: 1, borderBottomColor: pdfColors.borderColour, minHeight: 40, alignItems: 'center' }}>
            <Text style={{ ...globalStyles.tableBodyCell, width: '15%', fontWeight: 'bold', color: '#1976d2' }}>P3: Routine</Text>
            <Text style={{ ...globalStyles.tableBodyCell, width: '45%' }}>Minor disruption to normal operations (e.g. faulty light fitting).</Text>
            <Text style={{ ...globalStyles.tableBodyCell, width: '20%', fontWeight: 'bold' }}>48 Hours</Text>
            <Text style={{ ...globalStyles.tableBodyCell, width: '20%', fontWeight: 'bold' }}>5 Days</Text>
          </View>
        </View>

        <Text style={globalStyles.h2}>2. Key Performance Indicators (KPIs)</Text>
        <PDFGoldDivider />
        <View style={{ marginBottom: 20 }}>
          <Text style={{ ...globalStyles.body, marginBottom: 6 }}><Text style={{ fontWeight: 'bold' }}>KPI 1: Statutory Compliance</Text> - 100% adherence to all statutory certifications.</Text>
          <Text style={{ ...globalStyles.body, marginBottom: 6 }}><Text style={{ fontWeight: 'bold' }}>KPI 2: PPM Completion</Text> - 95% completion rate of planned tasks in the scheduled month.</Text>
          <Text style={{ ...globalStyles.body, marginBottom: 6 }}><Text style={{ fontWeight: 'bold' }}>KPI 3: Helpdesk Response</Text> - 98% of calls answered within 60 seconds.</Text>
        </View>

        <View wrap={false} style={{ marginTop: 20 }}>
          <Text style={globalStyles.h2}>3. Escalation Protocol</Text>
          <PDFGoldDivider />
          <View style={globalStyles.sectionBox}>
            <Text style={{ ...globalStyles.small, marginBottom: 6 }}>• Level 1: 24/7 Helpdesk [Enter Number]</Text>
            <Text style={{ ...globalStyles.small, marginBottom: 6 }}>• Level 2: Contract Manager [Enter Name]</Text>
            <Text style={{ ...globalStyles.small }}>• Level 3: Regional Operations Director [Enter Name]</Text>
          </View>

          <View style={{ marginTop: 10 }}>
            <PDFContactCTA documentType="FM contracts" customText="Need a robust, financially-backed SLA for your vital building services? EntireFM delivers comprehensive Hard and Soft FM solutions." />
          </View>
        </View>
      </PDFBaseLayout>
    </Document>
  );
};
