import { Document, Text, View } from '@react-pdf/renderer';
import { globalStyles, pdfColors } from '../styles';
import { PDFBaseLayout } from '../components/PDFBaseLayout';
import { PDFCoverSection } from '../components/PDFCoverSection';
import { PDFContactCTA } from '../components/PDFContactCTA';
import { PDFGoldDivider } from '../components/PDFGoldDivider';
import { PDFInfoBox } from '../components/PDFInfoBox';
import React from 'react';

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
  <Document title="PPM Cost Estimate - EntireFM" author="EntireFM">
    <PDFBaseLayout 
      documentTitle="Cost Estimate" 
      referenceNumber={data.referenceNumber} 
      generatedDate={data.generatedDate}
      showDisclaimer={true}
    >
      <PDFCoverSection 
        title="Asset Maintenance Cost Estimate"
        subtitle={`${data.buildingType} | SFG20 Aligned`}
        generatedFor={data.generatedFor}
        generatedDate={data.generatedDate}
        documentType="Cost Estimate"
        referenceNumber={data.referenceNumber}
      />

      <View style={{ marginBottom: 40, alignItems: 'center', backgroundColor: pdfColors.navy, padding: 30, borderBottomWidth: 4, borderBottomColor: pdfColors.gold }}>
        <Text style={{ fontSize: 9, color: 'rgba(255,255,255,0.6)', textTransform: 'uppercase', letterSpacing: 2, marginBottom: 10, fontWeight: 'bold' }}>Estimated Annual Portfolio Budget</Text>
        <Text style={{ fontSize: 32, fontWeight: 'bold', color: pdfColors.white, marginBottom: 15 }}>{data.costRange}</Text>
        <View style={{ backgroundColor: 'rgba(245,166,35,0.1)', padding: 8, paddingHorizontal: 20, borderWidth: 1, borderColor: pdfColors.gold }}>
          <Text style={{ fontSize: 8, color: pdfColors.gold, fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: 1 }}>Target Reactive Saving: {data.reactiveSaving}</Text>
        </View>
      </View>

      <View style={{ flexDirection: 'row', gap: 20, marginBottom: 40 }} wrap={false}>
        <View style={{ flex: 1.2 }}>
          <Text style={[globalStyles.h3, { marginTop: 0, textTransform: 'uppercase', fontSize: 9, letterSpacing: 1 }]}>Integrated Service Scope</Text>
          <PDFGoldDivider />
          <View style={{ gap: 8 }}>
            {data.includedServices.map((service, i) => (
              <View key={i} style={{ flexDirection: 'row', alignItems: 'flex-start', gap: 8 }}>
                <View style={{ width: 8, height: 8, backgroundColor: pdfColors.gold, marginTop: 3 }} />
                <Text style={[globalStyles.body, { marginBottom: 0 }]}>{service}</Text>
              </View>
            ))}
          </View>
        </View>
        <View style={{ flex: 0.8, backgroundColor: pdfColors.lightGrey, padding: 20, borderLeftWidth: 3, borderLeftColor: pdfColors.navy }}>
          <Text style={[globalStyles.h3, { marginTop: 0, fontSize: 8, textTransform: 'uppercase' }]}>Technical Assumptions</Text>
          <View style={{ gap: 6, marginTop: 10 }}>
            {data.assumptions.map((assumption, i) => (
              <View key={i} style={{ flexDirection: 'row', gap: 6 }}>
                <Text style={{ color: pdfColors.gold, fontSize: 8 }}>•</Text>
                <Text style={[globalStyles.small, { flex: 1, color: '#475569' }]}>{assumption}</Text>
              </View>
            ))}
          </View>
        </View>
      </View>

      <View wrap={false} style={{ marginBottom: 30 }}>
        <Text style={globalStyles.h2}>5-Year Lifecycle Costing</Text>
        <PDFGoldDivider />
        <View style={{ flexDirection: 'row', backgroundColor: pdfColors.navy }}>
          <Text style={[globalStyles.tableHeaderCell, { width: '20%' }]}>Year</Text>
          <Text style={[globalStyles.tableHeaderCell, { width: '40%' }]}>Planned Managed Budget</Text>
          <Text style={[globalStyles.tableHeaderCell, { width: '40%' }]}>Unmanaged (Run-to-Fail)</Text>
        </View>
        {data.projection.map((row, i) => (
          <View key={i} style={{ flexDirection: 'row', borderBottomWidth: 1, borderBottomColor: '#f1f5f9', minHeight: 35, alignItems: 'center' }}>
            <View style={[{ width: '20%' }, globalStyles.tableBodyCell]}>
              <Text style={{ fontWeight: 'bold', color: pdfColors.navy }}>{row.year}</Text>
            </View>
            <View style={[{ width: '40%' }, globalStyles.tableBodyCell]}>
              <Text style={{ color: pdfColors.green, fontWeight: 'bold' }}>{row.planned}</Text>
            </View>
            <View style={[{ width: '40%' }, globalStyles.tableBodyCell]}>
              <Text style={{ color: pdfColors.red, fontWeight: 'medium' }}>{row.reactive}</Text>
            </View>
          </View>
        ))}
      </View>

      <PDFInfoBox 
        type="tip"
        title="Implementation Strategy"
        body="This estimate utilizes regional industry benchmarks. EntireFM's mobilization team will conduct a physical verification audit to finalize a fixed-price service level agreement for your portfolio."
      />

      <View style={{ marginTop: 20 }}>
        <PDFContactCTA documentType="commercial estimate" />
      </View>
    </PDFBaseLayout>
  </Document>
);
