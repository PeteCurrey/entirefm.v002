import { Document, Page, Text, View } from '@react-pdf/renderer';
import { globalStyles, pdfColors } from '../styles';
import { PDFHeader } from '../components/PDFHeader';
import { PDFFooter } from '../components/PDFFooter';
import { PDFWatermark } from '../components/PDFWatermark';
import { PDFCoverSection } from '../components/PDFCoverSection';
import { PDFContactCTA } from '../components/PDFContactCTA';
import { PDFDisclaimer } from '../components/PDFDisclaimer';
import { PDFGoldDivider } from '../components/PDFGoldDivider';

export interface ComplianceReportData {
  buildingType: string;
  sector: string;
  overallRisk: 'Low' | 'Medium' | 'High';
  summary: string;
  obligations: {
    area: string;
    status: string;
    frequency: string;
    detail: string;
    urgency: string;
  }[];
  topRisks: string[];
  recommendation: string;
  generatedFor: string;
  generatedDate: string;
  referenceNumber: string;
}

export const ComplianceReportPDF = ({ data }: { data: ComplianceReportData }) => {
  const riskColor = 
    data.overallRisk === 'High' ? pdfColors.red : 
    data.overallRisk === 'Medium' ? pdfColors.amber : 
    pdfColors.green;

  return (
    <Document title="FM Compliance Report" author="EntireFM">
      <Page size="A4" style={globalStyles.page} wrap>
        <PDFWatermark />
        <PDFHeader documentTitle="Compliance Report" documentRef={data.referenceNumber} />
        
        <PDFCoverSection 
          title="FM Compliance Report"
          subtitle={`${data.buildingType} Sector`}
          generatedFor={data.generatedFor}
          generatedDate={data.generatedDate}
          documentType="Compliance Report"
          referenceNumber={data.referenceNumber}
        />

        <View style={{ backgroundColor: riskColor, padding: 16, borderRadius: 4, marginBottom: 20, alignItems: 'center' }} wrap={false}>
          <Text style={{ color: pdfColors.white, fontSize: 10, fontWeight: 700, letterSpacing: 1, marginBottom: 4 }}>OVERALL COMPLIANCE RISK</Text>
          <Text style={{ color: pdfColors.white, fontSize: 28, fontWeight: 700 }}>{data.overallRisk}</Text>
        </View>

        <View style={globalStyles.sectionBox} wrap={false}>
          <Text style={globalStyles.h3}>Executive Summary</Text>
          <Text style={globalStyles.body}>{data.summary}</Text>
        </View>

        <Text style={globalStyles.h2}>Key Compliance Obligations</Text>
        <PDFGoldDivider />

        <View style={{ marginBottom: 20 }}>
          <View style={{ flexDirection: 'row', backgroundColor: pdfColors.navy }} fixed>
            <Text style={{ ...globalStyles.tableHeaderCell, width: '25%' }}>Area</Text>
            <Text style={{ ...globalStyles.tableHeaderCell, width: '45%' }}>Detail</Text>
            <Text style={{ ...globalStyles.tableHeaderCell, width: '15%' }}>Frequency</Text>
            <Text style={{ ...globalStyles.tableHeaderCell, width: '15%', textAlign: 'center' }}>Urgency</Text>
          </View>
          
          {data.obligations.map((obs, i) => (
            <View key={i} style={{ flexDirection: 'row', backgroundColor: i % 2 === 0 ? pdfColors.white : '#fafafa' }} wrap={false}>
              <View style={{ width: '25%', ...globalStyles.tableBodyCell }}>
                <Text style={{ fontWeight: 700 }}>{obs.area}</Text>
              </View>
              <View style={{ width: '45%', ...globalStyles.tableBodyCell }}>
                <Text>{obs.detail}</Text>
              </View>
              <View style={{ width: '15%', ...globalStyles.tableBodyCell }}>
                <Text>{obs.frequency}</Text>
              </View>
              <View style={{ width: '15%', ...globalStyles.tableBodyCell, alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{ 
                  ...globalStyles.badge, 
                  backgroundColor: obs.urgency === 'High' ? pdfColors.red : (obs.urgency === 'Medium' ? pdfColors.amber : pdfColors.green),
                  color: pdfColors.white 
                }}>
                  {obs.urgency.toUpperCase()}
                </Text>
              </View>
            </View>
          ))}
        </View>

        <View wrap={false} style={{ marginBottom: 20 }}>
          <Text style={globalStyles.h2}>Top Identified Risks</Text>
          <PDFGoldDivider />
          <View style={{ flexDirection: 'row', gap: 10 }}>
            {data.topRisks.map((risk, i) => (
              <View key={i} style={{ flex: 1, backgroundColor: '#fff8e1', padding: 12, borderRadius: 4, borderTopWidth: 3, borderTopColor: pdfColors.amber }}>
                <Text style={{ fontSize: 9, color: pdfColors.bodyText, lineHeight: 1.4 }}>{risk}</Text>
              </View>
            ))}
          </View>
        </View>

        <View wrap={false} style={{ marginBottom: 20, padding: 16, borderWidth: 2, borderColor: pdfColors.gold, borderRadius: 4 }}>
          <Text style={{ ...globalStyles.h3, marginTop: 0, color: pdfColors.gold }}>EntireFM Recommendation</Text>
          <Text style={globalStyles.body}>{data.recommendation}</Text>
        </View>

        <PDFContactCTA documentType="compliance audit" />
        <PDFDisclaimer />
        
        <PDFFooter generatedDate={data.generatedDate} />
      </Page>
    </Document>
  );
};
