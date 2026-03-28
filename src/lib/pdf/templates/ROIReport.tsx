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
  <Document title="TCO & ROI Report" author="EntireFM">
    <PDFBaseLayout 
      documentTitle="ROI Report" 
      referenceNumber={data.referenceNumber} 
      generatedDate={data.generatedDate}
      showDisclaimer={true}
    >
      <PDFCoverSection 
        title="FM Total Cost of Ownership Report"
        generatedFor={data.generatedFor}
        generatedDate={data.generatedDate}
        documentType="ROI Report"
        referenceNumber={data.referenceNumber}
      />

      <View style={{ backgroundColor: pdfColors.navy, padding: 16, marginBottom: 20, borderRadius: 8 }} wrap={false}>
        <Text style={{ color: pdfColors.gold, fontSize: 8, fontWeight: 'bold', letterSpacing: 2, marginBottom: 8, textTransform: 'uppercase' }}>Executive Summary</Text>
        <Text style={{ color: pdfColors.white, fontSize: 10, lineHeight: 1.6 }}>{data.summary}</Text>
      </View>

      <View style={{ flexDirection: 'row', gap: 15, marginBottom: 24 }} wrap={false}>
        {/* Current Costs */}
        <View style={{ flex: 1, borderWidth: 1, borderColor: pdfColors.borderColour, borderRadius: 8, overflow: 'hidden' }}>
          <View style={{ backgroundColor: pdfColors.lightGrey, padding: 10, borderBottomWidth: 1, borderBottomColor: pdfColors.borderColour }}>
            <Text style={{ fontSize: 9, fontWeight: 'bold', color: pdfColors.navy }}>Estimated Current TCO</Text>
          </View>
          <View style={{ padding: 10 }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 6 }}>
              <Text style={globalStyles.small}>Visible Spend</Text>
              <Text style={{ fontSize: 8 }}>{data.currentCosts.visible}</Text>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10 }}>
              <Text style={globalStyles.small}>Est. Hidden Costs</Text>
              <Text style={{ fontSize: 8, color: pdfColors.red }}>{data.currentCosts.hidden}</Text>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', borderTopWidth: 1, borderTopColor: pdfColors.borderColour, paddingTop: 6 }}>
              <Text style={{ fontSize: 9, fontWeight: 'bold' }}>Total Run Rate</Text>
              <Text style={{ fontSize: 9, fontWeight: 'bold' }}>{data.currentCosts.total}</Text>
            </View>
          </View>
        </View>
        
        {/* EntireFM Costs */}
        <View style={{ flex: 1, borderWidth: 1, borderColor: pdfColors.gold, borderRadius: 8, overflow: 'hidden' }}>
          <View style={{ backgroundColor: '#fff8e1', padding: 10, borderBottomWidth: 1, borderBottomColor: pdfColors.gold }}>
            <Text style={{ fontSize: 9, fontWeight: 'bold', color: pdfColors.navy }}>EntireFM Managed TCO</Text>
          </View>
          <View style={{ padding: 10 }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 6 }}>
              <Text style={globalStyles.small}>Baseline PPM</Text>
              <Text style={{ fontSize: 8 }}>{data.entireFMCosts.ppm}</Text>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10 }}>
              <Text style={globalStyles.small}>Reactive Spend</Text>
              <Text style={{ fontSize: 8 }}>{data.entireFMCosts.reactive}</Text>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', borderTopWidth: 1, borderTopColor: pdfColors.borderColour, paddingTop: 6 }}>
              <Text style={{ fontSize: 9, fontWeight: 'bold', color: pdfColors.navy }}>Total Run Rate</Text>
              <Text style={{ fontSize: 9, fontWeight: 'bold', color: pdfColors.green }}>{data.entireFMCosts.total}</Text>
            </View>
          </View>
        </View>
      </View>

      <View style={{ backgroundColor: pdfColors.lightGrey, padding: 16, borderRadius: 8, alignItems: 'center', marginBottom: 30, borderWidth: 1, borderColor: pdfColors.borderColour }} wrap={false}>
        <Text style={{ fontSize: 10, fontWeight: 'bold', color: pdfColors.navy, marginBottom: 8, textTransform: 'uppercase', letterSpacing: 1 }}>Projected Annual Saving</Text>
        <Text style={{ fontSize: 40, fontWeight: 'bold', color: pdfColors.gold, marginBottom: 12 }}>{data.annualSaving}</Text>
        <View style={{ flexDirection: 'row', gap: 15 }}>
          <Text style={{ fontSize: 11, fontWeight: 'bold', color: pdfColors.green }}>{data.roiPercentage} ROI</Text>
          <Text style={{ fontSize: 11, color: pdfColors.borderColour }}>|</Text>
          <Text style={{ fontSize: 11, fontWeight: 'bold', color: pdfColors.navy }}>Payback: {data.paybackMonths}</Text>
        </View>
      </View>

      <View wrap={false} style={{ marginBottom: 20 }}>
        <Text style={globalStyles.h2}>5-Year Savings Projection</Text>
        <PDFGoldDivider />
        <View style={{ flexDirection: 'row', backgroundColor: pdfColors.navy }}>
          <Text style={{ ...globalStyles.tableHeaderCell, width: '15%' }}>Year</Text>
          <Text style={{ ...globalStyles.tableHeaderCell, width: '25%' }}>Current TCO</Text>
          <Text style={{ ...globalStyles.tableHeaderCell, width: '30%' }}>EntireFM TCO</Text>
          <Text style={{ ...globalStyles.tableHeaderCell, width: '30%' }}>Cumul. Savings</Text>
        </View>
        {data.projection.map((row, i) => (
          <View key={i} style={{ flexDirection: 'row', backgroundColor: i % 2 === 0 ? pdfColors.white : '#fafafa' }}>
            <View style={{ width: '15%', ...globalStyles.tableBodyCell }}>
              <Text style={{ fontWeight: 'bold' }}>{row.year}</Text>
            </View>
            <View style={{ width: '25%', ...globalStyles.tableBodyCell }}>
              <Text>{row.currentMode}</Text>
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
        documentType="TCO analysis" 
        customText="These figures are based on advanced algorithmic modeling of industry benchmarks. A formal site survey allows EntireFM to validate these metrics and provide a precise, contractually-binding proposal for your estate."
      />
    </PDFBaseLayout>
  </Document>
);
