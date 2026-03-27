import { Document, Page, Text, View } from '@react-pdf/renderer';
import { globalStyles, pdfColors } from '../styles';
import { PDFHeader } from '../components/PDFHeader';
import { PDFFooter } from '../components/PDFFooter';
import { PDFWatermark } from '../components/PDFWatermark';
import { PDFCoverSection } from '../components/PDFCoverSection';
import { PDFContactCTA } from '../components/PDFContactCTA';
import { PDFDisclaimer } from '../components/PDFDisclaimer';
import { PDFGoldDivider } from '../components/PDFGoldDivider';

export interface ROIReportData {
  summary: string;
  currentCosts: {
    visible: string;
    hidden: string;
    total: string;
  };
  entireFMCosts: {
    ppm: string;
    reactive: string;
    total: string;
  };
  annualSaving: string;
  roiPercentage: string;
  paybackMonths: string;
  projection: {
    year: string;
    currentMode: string;
    entireFMMode: string;
    cumulativeSavings: string;
  }[];
  savingsBreakdown: { title: string; percentage: string }[];
  generatedFor: string;
  generatedDate: string;
  referenceNumber: string;
}

export const ROIReportPDF = ({ data }: { data: ROIReportData }) => (
  <Document title="TCO & ROI Report" author="EntireFM">
    <Page size="A4" style={globalStyles.page} wrap>
      <PDFWatermark />
      <PDFHeader documentTitle="ROI Report" documentRef={data.referenceNumber} />
      
      <PDFCoverSection 
        title="FM Total Cost of Ownership Report"
        generatedFor={data.generatedFor}
        generatedDate={data.generatedDate}
        documentType="ROI Report"
        referenceNumber={data.referenceNumber}
      />

      <View style={{ backgroundColor: pdfColors.navy, padding: 20, marginBottom: 20, borderRadius: 4 }} wrap={false}>
        <Text style={{ color: pdfColors.gold, fontSize: 10, fontWeight: 700, letterSpacing: 2, marginBottom: 8 }}>EXECUTIVE SUMMARY</Text>
        <Text style={{ color: pdfColors.white, fontSize: 11, lineHeight: 1.6 }}>{data.summary}</Text>
      </View>

      <View style={{ flexDirection: 'row', gap: 20, marginBottom: 24 }} wrap={false}>
        {/* Current Costs */}
        <View style={{ flex: 1, borderWidth: 1, borderColor: pdfColors.borderColour, borderRadius: 4 }}>
          <View style={{ backgroundColor: pdfColors.lightGrey, padding: 12, borderBottomWidth: 1, borderBottomColor: pdfColors.borderColour }}>
            <Text style={{ fontSize: 10, fontWeight: 700, color: pdfColors.navy }}>Estimated Current TCO</Text>
          </View>
          <View style={{ padding: 12 }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 8 }}>
              <Text style={globalStyles.small}>Visible Spend</Text>
              <Text style={{ fontSize: 9 }}>{data.currentCosts.visible}</Text>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 12 }}>
              <Text style={globalStyles.small}>Est. Hidden Costs (Downtime/Admin)</Text>
              <Text style={{ fontSize: 9, color: pdfColors.red }}>{data.currentCosts.hidden}</Text>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', borderTopWidth: 1, borderTopColor: pdfColors.borderColour, paddingTop: 8 }}>
              <Text style={{ fontSize: 10, fontWeight: 700 }}>Total Run Rate</Text>
              <Text style={{ fontSize: 10, fontWeight: 700 }}>{data.currentCosts.total}</Text>
            </View>
          </View>
        </View>
        
        {/* EntireFM Costs */}
        <View style={{ flex: 1, borderWidth: 2, borderColor: pdfColors.gold, borderRadius: 4 }}>
          <View style={{ backgroundColor: '#fff8e1', padding: 12, borderBottomWidth: 2, borderBottomColor: pdfColors.gold }}>
            <Text style={{ fontSize: 10, fontWeight: 700, color: pdfColors.navy }}>EntireFM Managed TCO</Text>
          </View>
          <View style={{ padding: 12 }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 8 }}>
              <Text style={globalStyles.small}>Baseline PPM + Soft FM</Text>
              <Text style={{ fontSize: 9 }}>{data.entireFMCosts.ppm}</Text>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 12 }}>
              <Text style={globalStyles.small}>Est. Reduced Reactive Spend</Text>
              <Text style={{ fontSize: 9 }}>{data.entireFMCosts.reactive}</Text>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', borderTopWidth: 1, borderTopColor: pdfColors.borderColour, paddingTop: 8 }}>
              <Text style={{ fontSize: 10, fontWeight: 700, color: pdfColors.navy }}>Total Run Rate</Text>
              <Text style={{ fontSize: 10, fontWeight: 700, color: pdfColors.green }}>{data.entireFMCosts.total}</Text>
            </View>
          </View>
        </View>
      </View>

      <View style={{ backgroundColor: pdfColors.lightGrey, padding: 20, borderRadius: 4, alignItems: 'center', marginBottom: 30 }} wrap={false}>
        <Text style={{ fontSize: 11, fontWeight: 700, color: pdfColors.navy, marginBottom: 8 }}>PROJECTED ANNUAL SAVING</Text>
        <Text style={{ fontSize: 48, fontWeight: 700, color: pdfColors.gold, marginBottom: 16 }}>{data.annualSaving}</Text>
        <View style={{ flexDirection: 'row', gap: 20 }}>
          <Text style={{ fontSize: 12, fontWeight: 700, color: pdfColors.green }}>{data.roiPercentage} ROI</Text>
          <Text style={{ fontSize: 12, color: pdfColors.bodyText }}>|</Text>
          <Text style={{ fontSize: 12, fontWeight: 700, color: pdfColors.navy }}>Payback: {data.paybackMonths}</Text>
        </View>
      </View>

      <View wrap={false} style={{ marginBottom: 20 }}>
        <Text style={globalStyles.h2}>5-Year Cumulative Savings Projection</Text>
        <PDFGoldDivider />
        <View style={{ flexDirection: 'row', backgroundColor: pdfColors.navy }}>
          <Text style={{ ...globalStyles.tableHeaderCell, width: '15%' }}>Year</Text>
          <Text style={{ ...globalStyles.tableHeaderCell, width: '25%' }}>Status Quo TCO</Text>
          <Text style={{ ...globalStyles.tableHeaderCell, width: '30%' }}>EntireFM TCO</Text>
          <Text style={{ ...globalStyles.tableHeaderCell, width: '30%', color: pdfColors.gold }}>Cumulative Savings</Text>
        </View>
        {data.projection.map((row, i) => (
          <View key={i} style={{ flexDirection: 'row', backgroundColor: i % 2 === 0 ? pdfColors.white : '#fafafa' }}>
            <View style={{ width: '15%', ...globalStyles.tableBodyCell }}>
              <Text style={{ fontWeight: 700 }}>{row.year}</Text>
            </View>
            <View style={{ width: '25%', ...globalStyles.tableBodyCell }}>
              <Text>{row.currentMode}</Text>
            </View>
            <View style={{ width: '30%', ...globalStyles.tableBodyCell }}>
              <Text style={{ color: pdfColors.navy, fontWeight: 700 }}>{row.entireFMMode}</Text>
            </View>
            <View style={{ width: '30%', ...globalStyles.tableBodyCell }}>
              <Text style={{ color: pdfColors.green, fontWeight: 700 }}>{row.cumulativeSavings}</Text>
            </View>
          </View>
        ))}
      </View>

      <PDFContactCTA 
        documentType="TCO analysis" 
        customText="These figures are based on advanced algorithmic modeling of industry benchmarks. A formal site survey allows EntireFM to validate these metrics and provide a precise, contractually-binding proposal for your estate."
      />
      <PDFDisclaimer />
      
      <PDFFooter generatedDate={data.generatedDate} />
    </Page>
  </Document>
);
