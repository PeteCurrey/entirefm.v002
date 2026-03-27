import { Document, Page, Text, View } from '@react-pdf/renderer';
import { globalStyles, pdfColors } from '../styles';
import { PDFHeader } from '../components/PDFHeader';
import { PDFFooter } from '../components/PDFFooter';
import { PDFWatermark } from '../components/PDFWatermark';
import { PDFCoverSection } from '../components/PDFCoverSection';
import { PDFContactCTA } from '../components/PDFContactCTA';
import { PDFDisclaimer } from '../components/PDFDisclaimer';
import { PDFGoldDivider } from '../components/PDFGoldDivider';
import { PDFInfoBox } from '../components/PDFInfoBox';

export interface PPMEstimateData {
  buildingType: string;
  costRange: string;
  reactiveSaving: string;
  includedServices: string[];
  assumptions: string[];
  projection: {
    year: string;
    planned: string;
    reactive: string;
  }[];
  generatedFor: string;
  generatedDate: string;
  referenceNumber: string;
}

export const PPMEstimatePDF = ({ data }: { data: PPMEstimateData }) => (
  <Document title="PPM Cost Estimate" author="EntireFM">
    <Page size="A4" style={globalStyles.page} wrap>
      <PDFWatermark />
      <PDFHeader documentTitle="PPM Cost Estimate" documentRef={data.referenceNumber} />
      
      <PDFCoverSection 
        title="PPM Cost Estimate"
        subtitle={`For typical ${data.buildingType} facility`}
        generatedFor={data.generatedFor}
        generatedDate={data.generatedDate}
        documentType="Cost Estimate"
        referenceNumber={data.referenceNumber}
      />

      <View style={{ marginBottom: 30, alignItems: 'center' }} wrap={false}>
        <Text style={{ fontSize: 12, color: pdfColors.mutedText, textTransform: 'uppercase', letterSpacing: 2, marginBottom: 8, fontWeight: 700 }}>Estimated Annual PPM Cost</Text>
        <Text style={{ fontSize: 42, fontWeight: 700, color: pdfColors.navy, marginBottom: 16 }}>{data.costRange}</Text>
        <View style={{ backgroundColor: '#fff8e1', padding: 12, paddingHorizontal: 24, borderRadius: 100, borderWidth: 1, borderColor: pdfColors.amber }}>
          <Text style={{ fontSize: 11, color: pdfColors.amber, fontWeight: 700 }}>Potential reactive saving: {data.reactiveSaving}</Text>
        </View>
      </View>

      <View style={{ flexDirection: 'row', gap: 20, marginBottom: 30 }}>
        <View style={{ flex: 1 }}>
          <Text style={globalStyles.h3}>Included Services (SFG20 Base)</Text>
          <PDFGoldDivider />
          {data.includedServices.map((service, i) => (
            <View key={i} style={{ flexDirection: 'row', marginBottom: 6 }}>
              <Text style={{ color: pdfColors.gold, marginRight: 8 }}>✓</Text>
              <Text style={globalStyles.body}>{service}</Text>
            </View>
          ))}
        </View>
        <View style={{ flex: 1, backgroundColor: pdfColors.lightGrey, padding: 16, borderRadius: 4 }}>
          <Text style={{ ...globalStyles.h3, marginTop: 0 }}>Model Assumptions</Text>
          {data.assumptions.map((assumption, i) => (
            <View key={i} style={{ flexDirection: 'row', marginBottom: 6 }}>
              <Text style={{ color: pdfColors.mutedText, marginRight: 6 }}>•</Text>
              <Text style={{ ...globalStyles.small, flex: 1 }}>{assumption}</Text>
            </View>
          ))}
        </View>
      </View>

      <View wrap={false} style={{ marginBottom: 20 }}>
        <Text style={globalStyles.h2}>5-Year Cost Projection (vs Reactive)</Text>
        <PDFGoldDivider />
        <View style={{ flexDirection: 'row', backgroundColor: pdfColors.navy }}>
          <Text style={{ ...globalStyles.tableHeaderCell, width: '20%' }}>Year</Text>
          <Text style={{ ...globalStyles.tableHeaderCell, width: '40%' }}>Planned Maintenance (PPM)</Text>
          <Text style={{ ...globalStyles.tableHeaderCell, width: '40%' }}>Run-to-Fail (Reactive Only)</Text>
        </View>
        {data.projection.map((row, i) => (
          <View key={i} style={{ flexDirection: 'row', backgroundColor: i % 2 === 0 ? pdfColors.white : '#fafafa' }}>
            <View style={{ width: '20%', ...globalStyles.tableBodyCell }}>
              <Text style={{ fontWeight: 700 }}>{row.year}</Text>
            </View>
            <View style={{ width: '40%', ...globalStyles.tableBodyCell }}>
              <Text style={{ color: pdfColors.green, fontWeight: 700 }}>{row.planned}</Text>
            </View>
            <View style={{ width: '40%', ...globalStyles.tableBodyCell }}>
              <Text style={{ color: pdfColors.red }}>{row.reactive}</Text>
            </View>
          </View>
        ))}
      </View>

      <PDFInfoBox 
        type="tip"
        title="Next Steps"
        body="This is a baseline algorithmic estimate based on industry averages and SFG20 recommendations. To receive a precise, fixed-price proposal tailored to your specific building footprint and asset register, EntireFM will need to conduct a physical site survey."
      />

      <PDFContactCTA 
        documentType="estimate" 
        customText="To receive a precise PPM proposal based on a formal site survey, please contact our mobilization team to arrange a visit."
      />
      <PDFDisclaimer />
      
      <PDFFooter generatedDate={data.generatedDate} />
    </Page>
  </Document>
);
