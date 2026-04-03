import { Document, Text, View } from '@react-pdf/renderer';
import { globalStyles, pdfColors } from '../styles';
import { PDFBaseLayout } from '../components/PDFBaseLayout';
import { PDFCoverSection } from '../components/PDFCoverSection';
import { PDFContactCTA } from '../components/PDFContactCTA';
import { PDFGoldDivider } from '../components/PDFGoldDivider';
import React from 'react';

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
    <Document title="FM Compliance Report - EntireFM" author="EntireFM">
      <PDFBaseLayout 
        documentTitle="Compliance Audit" 
        referenceNumber={data.referenceNumber} 
        generatedDate={data.generatedDate}
        showDisclaimer={true}
      >
        <PDFCoverSection 
          title="Facility Compliance Risk Audit"
          subtitle={`${data.buildingType} | ${data.sector}`}
          generatedFor={data.generatedFor}
          generatedDate={data.generatedDate}
          documentType="Compliance Report"
          referenceNumber={data.referenceNumber}
        />

        <View style={{ flexDirection: 'row', gap: 20, marginBottom: 30 }} wrap={false}>
          <View style={{ flex: 1, backgroundColor: riskColor, padding: 20, borderBottomWidth: 4, borderBottomColor: pdfColors.navy }}>
            <Text style={{ color: pdfColors.white, fontSize: 7, fontWeight: 'bold', letterSpacing: 1.5, marginBottom: 6, textTransform: 'uppercase' }}>Overall Portfolio Risk</Text>
            <Text style={{ color: pdfColors.white, fontSize: 28, fontWeight: 'bold' }}>{data.overallRisk.toUpperCase()}</Text>
          </View>
          <View style={{ flex: 2, padding: 15, backgroundColor: pdfColors.lightGrey, borderLeftWidth: 3, borderLeftColor: pdfColors.navy }}>
            <Text style={[globalStyles.h3, { marginTop: 0, color: pdfColors.navy, textTransform: 'uppercase', fontSize: 8 }]}>Executive Summary</Text>
            <Text style={[globalStyles.body, { marginBottom: 0 }]}>{data.summary}</Text>
          </View>
        </View>

        <Text style={globalStyles.h2}>Statutory Compliance Matrix</Text>
        <PDFGoldDivider />

        <View style={{ marginBottom: 30 }}>
          <View style={{ flexDirection: 'row', backgroundColor: pdfColors.navy }}>
            <Text style={[globalStyles.tableHeaderCell, { width: '25%' }]}>Service Area</Text>
            <Text style={[globalStyles.tableHeaderCell, { width: '45%' }]}>Regulatory Detail</Text>
            <Text style={[globalStyles.tableHeaderCell, { width: '15%' }]}>Frequency</Text>
            <Text style={[globalStyles.tableHeaderCell, { width: '15%', textAlign: 'center' }]}>Urgency</Text>
          </View>
          
          {data.obligations.map((obs, i) => (
            <View key={i} style={{ flexDirection: 'row', borderBottomWidth: 1, borderBottomColor: '#f1f5f9', minHeight: 45, alignItems: 'center' }} wrap={false}>
              <View style={[{ width: '25%' }, globalStyles.tableBodyCell]}>
                <Text style={{ fontWeight: 'bold', color: pdfColors.navy }}>{obs.area}</Text>
              </View>
              <View style={[{ width: '45%' }, globalStyles.tableBodyCell]}>
                <Text style={{ color: '#475569', fontSize: 8 }}>{obs.detail}</Text>
              </View>
              <View style={[{ width: '15%' }, globalStyles.tableBodyCell]}>
                <Text style={{ fontWeight: 'bold' }}>{obs.frequency}</Text>
              </View>
              <View style={{ width: '15%', ...globalStyles.tableBodyCell, alignItems: 'center' }}>
                <View style={{ 
                  ...globalStyles.badge, 
                  backgroundColor: obs.urgency === 'High' ? pdfColors.red : (obs.urgency === 'Medium' ? pdfColors.amber : pdfColors.slate800),
                  color: pdfColors.white,
                  paddingVertical: 3,
                  paddingHorizontal: 10
                }}>
                  <Text>{obs.urgency.toUpperCase()}</Text>
                </View>
              </View>
            </View>
          ))}
        </View>

        <View wrap={false} style={{ marginBottom: 30 }}>
          <Text style={globalStyles.h2}>Critical Compliance Gaps</Text>
          <PDFGoldDivider />
          <View style={{ flexDirection: 'row', gap: 10 }}>
            {data.topRisks.map((risk, i) => (
              <View key={i} style={{ flex: 1, backgroundColor: '#fff8e1', padding: 15, borderTopWidth: 3, borderTopColor: pdfColors.amber, borderWidth: 1, borderColor: '#fef3c7' }}>
                <Text style={{ fontSize: 8, color: '#92400e', lineHeight: 1.5, fontWeight: 'medium' }}>• {risk}</Text>
              </View>
            ))}
          </View>
        </View>

        <View wrap={false} style={globalStyles.sectionBox}>
          <Text style={[globalStyles.h3, { marginTop: 0, color: pdfColors.navy, fontSize: 9 }]}>EntireFM Engineering Strategy</Text>
          <Text style={globalStyles.body}>{data.recommendation}</Text>
        </View>

        <View style={{ marginTop: 20 }}>
          <PDFContactCTA documentType="compliance audit" />
        </View>
      </PDFBaseLayout>
    </Document>
  );
};
