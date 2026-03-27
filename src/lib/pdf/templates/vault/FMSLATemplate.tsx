import { Document, Page, Text, View } from '@react-pdf/renderer';
import { globalStyles, pdfColors } from '../../styles';
import { PDFHeader } from '../../components/PDFHeader';
import { PDFFooter } from '../../components/PDFFooter';
import { PDFWatermark } from '../../components/PDFWatermark';
import { PDFCoverSection } from '../../components/PDFCoverSection';
import { PDFContactCTA } from '../../components/PDFContactCTA';
import { PDFDisclaimer } from '../../components/PDFDisclaimer';
import { PDFGoldDivider } from '../../components/PDFGoldDivider';

export const VaultFMSLATemplatePDF = ({ referenceNumber, generatedDate }: { referenceNumber: string, generatedDate: string }) => {
  return (
    <Document title="Facilities Management SLA Template" author="EntireFM">
      <Page size="A4" style={globalStyles.page} wrap>
        <PDFWatermark />
        <PDFHeader documentTitle="Service Level Agreement" documentRef={referenceNumber} />
        
        <PDFCoverSection 
          title="Service Level Agreement (SLA)"
          subtitle="Hard & Soft Facilities Management Services"
          generatedFor="[CLIENT COMPANY NAME]"
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
          
          <View style={{ flexDirection: 'row', backgroundColor: pdfColors.white, borderBottomWidth: 1, borderBottomColor: pdfColors.borderColour }}>
            <Text style={{ ...globalStyles.tableBodyCell, width: '15%', fontWeight: 700, color: pdfColors.red }}>P1: Emergency</Text>
            <Text style={{ ...globalStyles.tableBodyCell, width: '45%' }}>Risk to life, major business interruption, or severe building damage (e.g. major leak, total power loss, fire alarm failure).</Text>
            <Text style={{ ...globalStyles.tableBodyCell, width: '20%', fontWeight: 700 }}>2 Hours</Text>
            <Text style={{ ...globalStyles.tableBodyCell, width: '20%', fontWeight: 700 }}>Make Safe: 4H</Text>
          </View>

          <View style={{ flexDirection: 'row', backgroundColor: '#fafafa', borderBottomWidth: 1, borderBottomColor: pdfColors.borderColour }}>
            <Text style={{ ...globalStyles.tableBodyCell, width: '15%', fontWeight: 700, color: pdfColors.amber }}>P2: Urgent</Text>
            <Text style={{ ...globalStyles.tableBodyCell, width: '45%' }}>Significant operational impact but no immediate safety risk (e.g. heating failure in winter, localized power loss, lift failure).</Text>
            <Text style={{ ...globalStyles.tableBodyCell, width: '20%', fontWeight: 700 }}>4 Hours</Text>
            <Text style={{ ...globalStyles.tableBodyCell, width: '20%', fontWeight: 700 }}>24 Hours</Text>
          </View>

          <View style={{ flexDirection: 'row', backgroundColor: pdfColors.white, borderBottomWidth: 1, borderBottomColor: pdfColors.borderColour }}>
            <Text style={{ ...globalStyles.tableBodyCell, width: '15%', fontWeight: 700, color: '#1976d2' }}>P3: Routine</Text>
            <Text style={{ ...globalStyles.tableBodyCell, width: '45%' }}>Minor disruption to normal operations (e.g. broken door handle, faulty light fitting, minor plumbing issue).</Text>
            <Text style={{ ...globalStyles.tableBodyCell, width: '20%', fontWeight: 700 }}>48 Hours</Text>
            <Text style={{ ...globalStyles.tableBodyCell, width: '20%', fontWeight: 700 }}>5 Days</Text>
          </View>

          <View style={{ flexDirection: 'row', backgroundColor: '#fafafa', borderBottomWidth: 1, borderBottomColor: pdfColors.borderColour }}>
            <Text style={{ ...globalStyles.tableBodyCell, width: '15%', fontWeight: 700, color: pdfColors.mutedText }}>P4: Planned</Text>
            <Text style={{ ...globalStyles.tableBodyCell, width: '45%' }}>Aesthetic issues, planned minor projects, or requests with no operational impact.</Text>
            <Text style={{ ...globalStyles.tableBodyCell, width: '20%', fontWeight: 700 }}>5 Days</Text>
            <Text style={{ ...globalStyles.tableBodyCell, width: '20%', fontWeight: 700 }}>By Agreement</Text>
          </View>
        </View>

        <Text style={globalStyles.h2}>2. Key Performance Indicators (KPIs)</Text>
        <PDFGoldDivider />
        <View style={{ marginBottom: 20 }}>
          <Text style={{ ...globalStyles.body, marginBottom: 4 }}><Text style={{ fontWeight: 700 }}>KPI 1: Statutory Compliance</Text> - 100% of statutory compliance certificates to be valid and uploaded to the portal at all times.</Text>
          <Text style={{ ...globalStyles.body, marginBottom: 4 }}><Text style={{ fontWeight: 700 }}>KPI 2: PPM Completion</Text> - 95% of Planned Preventative Maintenance tasks completed within the scheduled calendar month.</Text>
          <Text style={{ ...globalStyles.body, marginBottom: 4 }}><Text style={{ fontWeight: 700 }}>KPI 3: Reactive SLA Adherence</Text> - 90% of reactive calls attended and resolved within the priority timeframes outlined above.</Text>
          <Text style={{ ...globalStyles.body, marginBottom: 4 }}><Text style={{ fontWeight: 700 }}>KPI 4: Helpdesk Response</Text> - 98% of helpdesk calls answered within 60 seconds; all emails acknowledged within 30 minutes during standard hours.</Text>
        </View>

        <View wrap={false}>
          <Text style={globalStyles.h2}>3. Escalation Protocol</Text>
          <PDFGoldDivider />
          <View style={{ backgroundColor: pdfColors.lightGrey, padding: 16, borderRadius: 4, marginBottom: 20 }}>
            <Text style={{ ...globalStyles.small, marginBottom: 8 }}><Text style={{ fontWeight: 700 }}>Level 1 (Immediate Issue):</Text> 24/7 Helpdesk [ENTER HELPDESK NUMBER]</Text>
            <Text style={{ ...globalStyles.small, marginBottom: 8 }}><Text style={{ fontWeight: 700 }}>Level 2 (Within 2 Hours):</Text> Account / Contract Manager [ENTER NAME & NUMBER]</Text>
            <Text style={{ ...globalStyles.small, marginBottom: 8 }}><Text style={{ fontWeight: 700 }}>Level 3 (Within 4 Hours):</Text> Regional Operations Director [ENTER NAME & NUMBER]</Text>
            <Text style={{ ...globalStyles.small }}><Text style={{ fontWeight: 700 }}>Level 4 (Within 12 Hours):</Text> Managing Director [ENTER NAME]</Text>
          </View>

          <PDFContactCTA documentType="FM contracts" customText="Need a robust, financially-backed SLA for your vital building services? EntireFM delivers comprehensive Hard and Soft FM solutions with guaranteed reaction times nationwide." />
          <PDFDisclaimer />
        </View>
        
        <PDFFooter generatedDate={generatedDate} />
      </Page>
    </Document>
  );
};
