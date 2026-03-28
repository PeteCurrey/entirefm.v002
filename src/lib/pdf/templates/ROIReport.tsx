import { Document, Text, View } from '@react-pdf/renderer';
import { globalStyles, pdfColors } from '../styles';
import { PDFBaseLayout } from '../components/PDFBaseLayout';
import { PDFCoverSection } from '../components/PDFCoverSection';
import { PDFContactCTA } from '../components/PDFContactCTA';
import { PDFGoldDivider } from '../components/PDFGoldDivider';
import React from 'react';

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
  <Document title="TCO & ROI Analysis - EntireFM" author="EntireFM">
    <PDFBaseLayout 
      documentTitle="ROI Analysis" 
      referenceNumber={data.referenceNumber} 
      generatedDate={data.generatedDate}
      showDisclaimer={true}
    >
      <PDFCoverSection 
        title="FM Total Cost of Ownership Report"
        subtitle="Financial Efficiency & ROI Analysis"
        generatedFor={data.generatedFor}
        generatedDate={data.generatedDate}
        documentType="ROI Report"
        referenceNumber={data.referenceNumber}
      />

      <View style={{ backgroundColor: pdfColors.navy, padding: 20, marginBottom: 30, borderLeftWidth: 4, borderLeftColor: pdfColors.gold }} wrap={false}>
        <Text style={{ color: pdfColors.gold, fontSize: 8, fontWeight: 'bold', letterSpacing: 2, marginBottom: 10, textTransform: 'uppercase' }}>Executive Financial Summary</Text>
        <Text style={{ color: pdfColors.white, fontSize: 10, lineHeight: 1.6, fontWeight: 'light' }}>{data.summary}</Text>
      </View>

      <View style={{ flexDirection: 'row', gap: 20, marginBottom: 30 }} wrap={false}>
        {/* Current Costs */}
        <View style={{ flex: 1, borderWidth: 1, borderColor: '#e2e8f0', backgroundColor: '#fff' }}>
          <View style={{ backgroundColor: '#f1f5f9', padding: 12, borderBottomWidth: 1, borderBottomColor: '#e2e8f0' }}>
            <Text style={{ fontSize: 8, fontWeight: 'bold', color: pdfColors.navy, textTransform: 'uppercase', letterSpacing: 1 }}>Current Portfolio TCO</Text>
          </View>
          <View style={{ padding: 15 }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 8 }}>
              <Text style={globalStyles.small}>Visible Expenditure</Text>
              <Text style={{ fontSize: 9 }}>{data.currentCosts.visible}</Text>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 15 }}>
              <Text style={globalStyles.small}>Estimated Hidden Costs</Text>
              <Text style={{ fontSize: 9, color: pdfColors.red, fontWeight: 'bold' }}>{data.currentCosts.hidden}</Text>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', borderTopWidth: 1, borderTopColor: '#e2e8f0', paddingTop: 10 }}>
              <Text style={{ fontSize: 10, fontWeight: 'bold', color: pdfColors.navy }}>Total Run Rate</Text>
              <Text style={{ fontSize: 10, fontWeight: 'bold', color: pdfColors.navy }}>{data.currentCosts.total}</Text>
            </View>
          </View>
        </View>
        
        {/* EntireFM Costs */}
        <View style={{ flex: 1, borderWidth: 2, borderColor: pdfColors.navy, backgroundColor: '#fff' }}>
          <View style={{ backgroundColor: pdfColors.navy, padding: 12 }}>
            <Text style={{ fontSize: 8, fontWeight: 'bold', color: pdfColors.white, textTransform: 'uppercase', letterSpacing: 1 }}>EntireFM Managed TCO</Text>
          </View>
          <View style={{ padding: 15 }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 8 }}>
              <Text style={globalStyles.small}>Strategic PPM</Text>
              <Text style={{ fontSize: 9 }}>{data.entireFMCosts.ppm}</Text>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 15 }}>
              <Text style={globalStyles.small}>Optimized Reactive</Text>
              <Text style={{ fontSize: 9 }}>{data.entireFMCosts.reactive}</Text>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', borderTopWidth: 1, borderTopColor: '#eee', paddingTop: 10 }}>
              <Text style={{ fontSize: 11, fontWeight: 'bold', color: pdfColors.navy }}>New Managed Rate</Text>
              <Text style={{ fontSize: 11, fontWeight: 'bold', color: pdfColors.green }}>{data.entireFMCosts.total}</Text>
            </View>
          </View>
        </View>
      </View>

      <View style={{ backgroundColor: pdfColors.lightGrey, padding: 25, borderWidth: 1, borderColor: '#e2e8f0', alignItems: 'center', marginBottom: 40, borderBottomWidth: 4, borderBottomColor: pdfColors.gold }} wrap={false}>
        <Text style={{ fontSize: 9, fontWeight: 'bold', color: pdfColors.navy, marginBottom: 12, textTransform: 'uppercase', letterSpacing: 2 }}>Projected Annual Managed Savings</Text>
        <Text style={{ fontSize: 42, fontWeight: 'bold', color: pdfColors.navy, marginBottom: 15 }}>{data.annualSaving}</Text>
        <View style={{ flexDirection: 'row', gap: 20, alignItems: 'center' }}>
          <View style={{ backgroundColor: pdfColors.green, paddingVertical: 4, paddingHorizontal: 12 }}>
            <Text style={{ fontSize: 10, fontWeight: 'bold', color: pdfColors.white }}>{data.roiPercentage} ROI</Text>
          </View>
          <Text style={{ fontSize: 14, color: '#94a3b8' }}>|</Text>
          <Text style={{ fontSize: 11, fontWeight: 'bold', color: pdfColors.navy }}>Capital Payback: {data.paybackMonths}</Text>
        </View>
      </View>

      <View wrap={false} style={{ marginBottom: 30 }}>
        <Text style={globalStyles.h2}>5-Year Savings Projection</Text>
        <PDFGoldDivider />
        <View style={{ flexDirection: 'row', backgroundColor: pdfColors.navy }}>
          <Text style={{ ...globalStyles.tableHeaderCell, width: '15%' }}>Year</Text>
          <Text style={{ ...globalStyles.tableHeaderCell, width: '25%' }}>Pre-EntireFM</Text>
          <Text style={{ ...globalStyles.tableHeaderCell, width: '30%' }}>Managed TCO</Text>
          <Text style={{ ...globalStyles.tableHeaderCell, width: '30%' }}>Cumul. Profit</Text>
        </View>
        {data.projection.map((row, i) => (
          <View key={i} style={{ flexDirection: 'row', borderBottomWidth: 1, borderBottomColor: '#f1f5f9', minHeight: 35, alignItems: 'center' }}>
            <View style={{ width: '15%', ...globalStyles.tableBodyCell }}>
              <Text style={{ fontWeight: 'bold', color: pdfColors.navy }}>{row.year}</Text>
            </View>
            <View style={{ width: '25%', ...globalStyles.tableBodyCell }}>
              <Text style={{ color: '#64748b' }}>{row.currentMode}</Text>
            </View>
            <View style={{ width: '30%', ...globalStyles.tableBodyCell }}>
              <Text style={{ color: pdfColors.navy, fontWeight: 'bold' }}>{row.entireFMMode}</Text>
            </View>
            <View style={{ width: '30%', ...globalStyles.tableBodyCell }}>
              <Text style={{ color: pdfColors.green, fontWeight: 'bold' }}>{row.cumulativeSavings}</Text>
            </View>
          </View>
        ))}
      </View>

      <PDFContactCTA 
        documentType="financial TCO analysis" 
        customText="These projections are modeled using cross-sector industry benchmarks. To validate these savings against your actual expenditure and asset register, EntireFM will conduct a zero-cost financial discovery audit."
      />
    </PDFBaseLayout>
  </Document>
);
