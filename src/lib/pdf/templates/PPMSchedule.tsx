import { Document, Text, View, Image } from '@react-pdf/renderer';
import { globalStyles, pdfColors } from '../styles';
import { PDFBaseLayout } from '../components/PDFBaseLayout';
import { PDFCoverSection } from '../components/PDFCoverSection';
import { PDFGoldDivider } from '../components/PDFGoldDivider';
import { PDFInfoBox } from '../components/PDFInfoBox';
import { PDFContactCTA } from '../components/PDFContactCTA';
import React from 'react';
import path from 'path';

const heroPath = path.join(process.cwd(), 'public/images/hero-tfm.png');

export interface PPMScheduleData {
  buildingName: string;
  buildingType: string;
  generatedFor: string;
  assets: {
    category: string;
    assetName: string;
    frequency: string;
    tasks: string[];
    standard: string;
    statutory: boolean;
    nextDueMonth: string;
  }[];
  totalAssets: number;
  statutoryCount: number;
  recommendedCount: number;
  generatedDate: string;
  referenceNumber: string;
}

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

const getVisitMap = (frequency: string) => {
  const f = frequency.toLowerCase();
  const map = new Array(12).fill(false);
  
  if (f.includes('monthly')) return new Array(12).fill(true);
  if (f.includes('quarterly')) return map.map((_, i) => i % 3 === 0);
  if (f.includes('6-monthly')) return map.map((_, i) => i % 6 === 0);
  if (f.includes('annual')) {
    map[0] = true;
    return map;
  }
  map[0] = true; // Default to first month
  return map;
};

export const PPMSchedulePDF = ({ data }: { data: PPMScheduleData }) => {
  const groupedAssets = data.assets.reduce((acc, asset) => {
    if (!acc[asset.category]) acc[asset.category] = [];
    acc[asset.category].push(asset);
    return acc;
  }, {} as Record<string, typeof data.assets>);

  // Pre-calculate calendar rows by category
  const calendarRows = Object.entries(groupedAssets).map(([category, assets]) => {
    // For the calendar, we show the highest frequency requirement for that category
    const categoryVisits = new Array(12).fill(false);
    assets.forEach(asset => {
      const assetVisits = getVisitMap(asset.frequency);
      assetVisits.forEach((v, i) => { if (v) categoryVisits[i] = true; });
    });
    return { category, visits: categoryVisits };
  });

  return (
    <Document title="PPM Schedule - EntireFM" author="EntireFM">
      {/* PAGE 1: COVER */}
      <PDFBaseLayout 
        documentTitle="PPM Schedule" 
        referenceNumber={data.referenceNumber} 
        generatedDate={data.generatedDate}
        wrap={false}
      >
        <PDFCoverSection 
          title="Planned Preventative Maintenance Schedule"
          subtitle={data.buildingName}
          generatedFor={data.generatedFor}
          generatedDate={data.generatedDate}
          documentType="Technical Asset Schedule"
          referenceNumber={data.referenceNumber}
          heroImage={heroPath}
        />
        
        <PDFGoldDivider />

        <Text style={globalStyles.body}>
          This comprehensive PPM schedule has been engineered specifically for <Text style={{ fontWeight: 'bold', color: pdfColors.navy }}>{data.buildingName}</Text>. It outlines a strategic lifecycle maintenance framework aligned with SFG20 standards and UK statutory compliance obligations.
        </Text>

        <View style={{ flexDirection: 'row', gap: 15, marginTop: 20, marginBottom: 30 }}>
          <View style={{ flex: 1, backgroundColor: pdfColors.navy, padding: 15, borderBottomWidth: 3, borderBottomColor: pdfColors.gold }}>
            <Text style={{ fontSize: 7, color: 'rgba(255,255,255,0.6)', marginBottom: 4, textTransform: 'uppercase', letterSpacing: 1 }}>Asset Inventory</Text>
            <Text style={{ fontSize: 20, fontWeight: 'bold', color: pdfColors.white }}>{data.totalAssets}</Text>
          </View>
          <View style={{ flex: 1, backgroundColor: pdfColors.lightGrey, padding: 15, borderBottomWidth: 3, borderBottomColor: pdfColors.amber }}>
            <Text style={{ fontSize: 7, color: pdfColors.muted, marginBottom: 4, textTransform: 'uppercase', letterSpacing: 1 }}>Compliance Core</Text>
            <Text style={{ fontSize: 20, fontWeight: 'bold', color: pdfColors.navy }}>{data.statutoryCount}</Text>
          </View>
          <View style={{ flex: 1, backgroundColor: pdfColors.lightGrey, padding: 15, borderBottomWidth: 3, borderBottomColor: '#3b82f6' }}>
            <Text style={{ fontSize: 7, color: pdfColors.muted, marginBottom: 4, textTransform: 'uppercase', letterSpacing: 1 }}>Best Practice</Text>
            <Text style={{ fontSize: 20, fontWeight: 'bold', color: pdfColors.navy }}>{data.recommendedCount}</Text>
          </View>
        </View>

        <View style={globalStyles.sectionBox}>
          <Text style={{ fontSize: 9, fontWeight: 'bold', color: pdfColors.navy, marginBottom: 10, textTransform: 'uppercase', letterSpacing: 1 }}>Strategic Maintenance Legend</Text>
          <View style={{ flexDirection: 'row', gap: 20, flexWrap: 'wrap' }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 4 }}>
              <View style={{ width: 6, height: 6, backgroundColor: pdfColors.gold }} />
              <Text style={globalStyles.small}>M: Monthly</Text>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 4 }}>
              <View style={{ width: 6, height: 6, backgroundColor: pdfColors.gold }} />
              <Text style={globalStyles.small}>Q: Quarterly</Text>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 4 }}>
              <View style={{ width: 6, height: 6, backgroundColor: pdfColors.gold }} />
              <Text style={globalStyles.small}>6M: 6-Monthly</Text>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 4 }}>
              <View style={{ width: 6, height: 6, backgroundColor: pdfColors.gold }} />
              <Text style={globalStyles.small}>A: Annual</Text>
            </View>
          </View>
        </View>
      </PDFBaseLayout>

      {/* PAGE 2: ANNUAL VISIT CALENDAR (LANDSCAPE) */}
      <PDFBaseLayout 
        documentTitle="PPM Calendar" 
        referenceNumber={data.referenceNumber} 
        generatedDate={data.generatedDate}
        orientation="landscape"
      >
        <Text style={globalStyles.h2}>12-Month Maintenance Forecast</Text>
        <PDFGoldDivider />
        <Text style={[globalStyles.body, { marginBottom: 20 }]}>Visual projection of scheduled maintenance attendance by asset category. Key visits are indicated with the EFM marker.</Text>

        <View style={{ marginTop: 10 }}>
          {/* Header */}
          <View style={{ flexDirection: 'row', backgroundColor: pdfColors.navy }}>
            <View style={[{ width: '22%' }, globalStyles.tableHeaderCell]}>
              <Text>Service Category</Text>
            </View>
            {MONTHS.map(m => (
              <View key={m} style={[{ width: '6.5%', textAlign: 'center' }, globalStyles.tableHeaderCell]}>
                <Text>{m}</Text>
              </View>
            ))}
          </View>

          {/* Body */}
          {calendarRows.map((row, i) => (
            <View key={i} style={{ flexDirection: 'row', backgroundColor: i % 2 === 0 ? '#fff' : pdfColors.lightGrey }}>
              <View style={[{ width: '22%', borderRightWidth: 1, borderRightColor: '#eee' }, globalStyles.tableBodyCell]}>
                <Text style={{ fontWeight: 'bold', color: pdfColors.navy }}>{row.category}</Text>
              </View>
              {row.visits.map((v, j) => (
                <View key={j} style={[{ width: '6.5%', alignItems: 'center', justifyContent: 'center', borderRightWidth: 1, borderRightColor: '#eee' }, globalStyles.tableBodyCell]}>
                  {v && (
                    <View style={{ width: 10, height: 10, backgroundColor: pdfColors.navy, borderWidth: 1, borderColor: pdfColors.gold }} />
                  )}
                </View>
              ))}
            </View>
          ))}
        </View>

        <View style={{ marginTop: 30, padding: 15, backgroundColor: '#fff8e1', borderWidth: 1, borderColor: pdfColors.gold }}>
          <Text style={{ fontSize: 8, color: '#92400e', lineHeight: 1.4 }}>
            <Text style={{ fontWeight: 'bold' }}>Scheduling Note:</Text> This calendar represents a theoretical distribution. Actual site visits are coordinated by the EntireFM Helpdesk to group activities where possible, minimizing business disruption and travel emissions.
          </Text>
        </View>
      </PDFBaseLayout>

      {/* DETAILED SCHEDULE PAGES */}
      {Object.entries(groupedAssets).map(([category, assets]) => (
        <PDFBaseLayout 
          key={category}
          documentTitle="Asset Register" 
          referenceNumber={data.referenceNumber} 
          generatedDate={data.generatedDate}
        >
          <View style={{ backgroundColor: pdfColors.navy, padding: 8, marginBottom: 15, borderLeftWidth: 4, borderLeftColor: pdfColors.gold }}>
            <Text style={{ color: pdfColors.white, fontSize: 11, fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: 1.5 }}>{category}</Text>
          </View>

          <View style={{ flexDirection: 'row', backgroundColor: pdfColors.lightGrey, borderBottomWidth: 2, borderBottomColor: pdfColors.navy }}>
            <Text style={[globalStyles.tableHeaderCell, { width: '30%', backgroundColor: 'transparent', color: pdfColors.navy }]}>Asset Detail</Text>
            <Text style={[globalStyles.tableHeaderCell, { width: '12%', backgroundColor: 'transparent', color: pdfColors.navy, textAlign: 'center' }]}>Freq</Text>
            <Text style={[globalStyles.tableHeaderCell, { width: '43%', backgroundColor: 'transparent', color: pdfColors.navy }]}>Core Maintenance Tasks</Text>
            <Text style={[globalStyles.tableHeaderCell, { width: '15%', backgroundColor: 'transparent', color: pdfColors.navy, textAlign: 'right' }]}>Status</Text>
          </View>

          {assets.map((asset, idx) => (
            <View key={idx} style={{ flexDirection: 'row', borderBottomWidth: 1, borderBottomColor: '#f1f5f9', minHeight: 45, alignItems: 'center' }} wrap={false}>
              <View style={[globalStyles.tableBodyCell, { width: '30%' }]}>
                <Text style={{ fontWeight: 'bold', color: pdfColors.navy, fontSize: 9 }}>{asset.assetName}</Text>
                <Text style={{ fontSize: 6, color: pdfColors.muted, marginTop: 3 }}>Standard: {asset.standard}</Text>
              </View>
              <View style={[globalStyles.tableBodyCell, { width: '12%', alignItems: 'center' }]}>
                <Text style={{ fontWeight: 'bold', color: pdfColors.navy }}>{asset.frequency}</Text>
              </View>
              <View style={[globalStyles.tableBodyCell, { width: '43%' }]}>
                {asset.tasks.slice(0, 4).map((t, i) => (
                  <Text key={i} style={{ fontSize: 7, marginBottom: 2, color: '#475569' }}>• {t}</Text>
                ))}
                {asset.tasks.length > 4 && <Text style={{ fontSize: 6, color: pdfColors.muted, fontStyle: 'italic' }}>+ {asset.tasks.length - 4} supplementary tasks</Text>}
              </View>
              <View style={[globalStyles.tableBodyCell, { width: '15%', alignItems: 'flex-end' }]}>
                <Text style={[
                  globalStyles.badge, 
                  { 
                    backgroundColor: asset.statutory ? pdfColors.amber : pdfColors.slate800,
                    color: pdfColors.white,
                    paddingVertical: 3,
                    paddingHorizontal: 8
                  }
                ]}>
                  {asset.statutory ? 'Statutory' : 'Best Practice'}
                </Text>
              </View>
            </View>
          ))}
          
          {assets.some(a => a.statutory) && (
            <View style={{ marginTop: 25 }}>
              <PDFInfoBox type="warning" title="Statutory Compliance" body="Items highlighted in amber are mandatory Building Regulations / Health & Safety obligations. EntireFM tracks all certifications digitally within your Client Portal." />
            </View>
          )}
        </PDFBaseLayout>
      ))}

      {/* FINAL PAGE */}
      <PDFBaseLayout 
        documentTitle="Summary" 
        referenceNumber={data.referenceNumber} 
        generatedDate={data.generatedDate}
        showDisclaimer={true}
      >
        <Text style={globalStyles.h2}>Framework Methodology</Text>
        <PDFGoldDivider />
        <View style={{ gap: 12 }}>
          <Text style={globalStyles.body}>
            This Planned Preventative Maintenance (PPM) schedule utilizes a technical risk-based approach to building services care. Our protocols are derived from industry-leading SFG20 specifications, adapted for the specific asset profiles identified at <Text style={{ fontWeight: 'bold' }}>{data.buildingName}</Text>.
          </Text>
          <View style={globalStyles.sectionBox}>
             <Text style={[globalStyles.body, { fontWeight: 'bold', marginBottom: 5 }]}>Next Steps & Implementation:</Text>
             <Text style={globalStyles.small}>• Site Validation: A physical audit is recommended prior to contract commencement.</Text>
             <Text style={globalStyles.small}>• Digital Onboarding: Asset tags will be applied to all equipment for QR-based tracking.</Text>
             <Text style={globalStyles.small}>• Compliance Audit: All historical certification should be uploaded for gap-analysis.</Text>
          </View>
        </View>
        <View style={{ marginTop: 30 }}>
          <PDFContactCTA documentType="PPM strategy" />
        </View>
      </PDFBaseLayout>
    </Document>
  );
};
