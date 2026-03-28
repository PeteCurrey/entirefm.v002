import { Document, Text, View, Page } from '@react-pdf/renderer';
import { globalStyles, pdfColors } from '../styles';
import { PDFBaseLayout } from '../components/PDFBaseLayout';
import { PDFCoverSection } from '../components/PDFCoverSection';
import { PDFGoldDivider } from '../components/PDFGoldDivider';
import { PDFInfoBox } from '../components/PDFInfoBox';
import { PDFContactCTA } from '../components/PDFContactCTA';
import React from 'react';

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

export const PPMSchedulePDF = ({ data }: { data: PPMScheduleData }) => {
  const groupedAssets = data.assets.reduce((acc, asset) => {
    if (!acc[asset.category]) acc[asset.category] = [];
    acc[asset.category].push(asset);
    return acc;
  }, {} as Record<string, typeof data.assets>);

  return (
    <Document title="Planned Preventative Maintenance Schedule" author="EntireFM">
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
          documentType="PPM Schedule"
          referenceNumber={data.referenceNumber}
        />
        
        <PDFGoldDivider />

        <Text style={globalStyles.body}>
          This PPM schedule has been prepared for {data.buildingName} in line with SFG20 maintenance standards and UK statutory requirements. It sets out the recommended maintenance frequencies for all identified building assets, distinguishing between statutory requirements (legally required) and recommended best practice activities.
        </Text>

        {/* Stats Grid */}
        <View style={{ flexDirection: 'row', gap: 10, marginTop: 20, marginBottom: 30 }}>
          <View style={{ flex: 1, backgroundColor: pdfColors.lightGrey, padding: 12, borderRadius: 4, borderTopWidth: 2, borderTopColor: pdfColors.navy }}>
            <Text style={{ fontSize: 7, color: pdfColors.mutedText, marginBottom: 4 }}>Total Assets</Text>
            <Text style={{ fontSize: 18, fontWeight: 'bold', color: pdfColors.navy }}>{data.totalAssets}</Text>
          </View>
          <View style={{ flex: 1, backgroundColor: '#fff8e1', padding: 12, borderRadius: 4, borderTopWidth: 2, borderTopColor: pdfColors.amber }}>
            <Text style={{ fontSize: 7, color: pdfColors.mutedText, marginBottom: 4 }}>Statutory</Text>
            <Text style={{ fontSize: 18, fontWeight: 'bold', color: pdfColors.amber }}>{data.statutoryCount}</Text>
          </View>
          <View style={{ flex: 1, backgroundColor: '#e3f2fd', padding: 12, borderRadius: 4, borderTopWidth: 2, borderTopColor: '#1976d2' }}>
            <Text style={{ fontSize: 7, color: pdfColors.mutedText, marginBottom: 4 }}>Best Practice</Text>
            <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#1976d2' }}>{data.recommendedCount}</Text>
          </View>
        </View>

        <View style={globalStyles.sectionBox}>
          <Text style={{ fontSize: 8, fontWeight: 'bold', color: pdfColors.navy, marginBottom: 8, textTransform: 'uppercase' }}>Schedule Legend</Text>
          <View style={{ flexDirection: 'row', gap: 10, flexWrap: 'wrap' }}>
            <Text style={globalStyles.small}>• M: Monthly</Text>
            <Text style={globalStyles.small}>• Q: Quarterly</Text>
            <Text style={globalStyles.small}>• 6M: 6-Monthly</Text>
            <Text style={globalStyles.small}>• A: Annual</Text>
            <Text style={globalStyles.small}>• 2Y: 2-Yearly</Text>
          </View>
        </View>
      </PDFBaseLayout>

      {/* SCHEDULE PAGES */}
      {Object.entries(groupedAssets).map(([category, assets]) => (
        <PDFBaseLayout 
          key={category}
          documentTitle="PPM Schedule" 
          referenceNumber={data.referenceNumber} 
          generatedDate={data.generatedDate}
        >
          <View style={{ backgroundColor: pdfColors.navy, padding: 6, marginBottom: 10 }}>
            <Text style={{ color: pdfColors.white, fontSize: 10, fontWeight: 'bold', textTransform: 'uppercase' }}>{category}</Text>
          </View>

          <View style={{ flexDirection: 'row', backgroundColor: pdfColors.lightGrey, borderBottomWidth: 1, borderBottomColor: pdfColors.navy }}>
            <Text style={{ ...globalStyles.tableHeaderCell, width: '30%' }}>Asset</Text>
            <Text style={{ ...globalStyles.tableHeaderCell, width: '15%' }}>Freq</Text>
            <Text style={{ ...globalStyles.tableHeaderCell, width: '40%' }}>SLA Task Definition</Text>
            <Text style={{ ...globalStyles.tableHeaderCell, width: '15%', textAlign: 'right' }}>Status</Text>
          </View>

          {assets.map((asset, idx) => (
            <View key={idx} style={{ flexDirection: 'row', borderBottomWidth: 1, borderBottomColor: pdfColors.borderColour, minHeight: 40 }} wrap={false}>
              <View style={{ width: '30%', ...globalStyles.tableBodyCell }}>
                <Text style={{ fontWeight: 'bold', color: pdfColors.navy }}>{asset.assetName}</Text>
                <Text style={{ fontSize: 6, color: pdfColors.mutedText, marginTop: 2 }}>{asset.standard}</Text>
              </View>
              <View style={{ width: '15%', ...globalStyles.tableBodyCell }}>
                <Text style={{ fontWeight: 'bold' }}>{asset.frequency}</Text>
              </View>
              <View style={{ width: '40%', ...globalStyles.tableBodyCell }}>
                {asset.tasks.slice(0, 4).map((t, i) => (
                  <Text key={i} style={{ fontSize: 7, marginBottom: 1 }}>• {t}</Text>
                ))}
                {asset.tasks.length > 4 && <Text style={{ fontSize: 6, color: pdfColors.mutedText, fontStyle: 'italic' }}>+ {asset.tasks.length - 4} more tasks</Text>}
              </View>
              <View style={{ width: '15%', ...globalStyles.tableBodyCell, alignItems: 'flex-end', justifyContent: 'center' }}>
                <Text style={{ 
                  ...globalStyles.badge, 
                  backgroundColor: asset.statutory ? pdfColors.amber : pdfColors.mutedText,
                  color: pdfColors.white
                }}>
                  {asset.statutory ? 'STATUTORY' : 'RECOM'}
                </Text>
              </View>
            </View>
          ))}
          
          {assets.some(a => a.statutory) && (
            <View style={{ marginTop: 20 }}>
              <PDFInfoBox type="warning" title="Compliance Notice" body="Statutory tasks marked in amber are legally required. Failure to perform these may result in fines or insurance invalidation." />
            </View>
          )}
        </PDFBaseLayout>
      ))}

      {/* FINAL PAGE */}
      <PDFBaseLayout 
        documentTitle="PPM Schedule" 
        referenceNumber={data.referenceNumber} 
        generatedDate={data.generatedDate}
        showDisclaimer={true}
      >
        <Text style={globalStyles.h2}>Important Notes & Methodology</Text>
        <PDFGoldDivider />
        <View style={{ gap: 10 }}>
          <Text style={globalStyles.body}>1. Values are based on SFG20 industry standards and statutory requirements as of March 2024.</Text>
          <Text style={globalStyles.body}>2. This schedule is dynamic and depends on the asset information provided. A physical site survey is recommended to validate these frequencies.</Text>
          <Text style={globalStyles.body}>3. All statutory maintenance must be completed by suitably qualified and competent engineers with up-to-date certification.</Text>
        </View>
        <View style={{ marginTop: 40 }}>
          <PDFContactCTA documentType="maintenance schedule" />
        </View>
      </PDFBaseLayout>
    </Document>
  );
};
