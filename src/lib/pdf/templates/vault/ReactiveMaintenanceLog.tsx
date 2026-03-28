import { Document, Text, View } from '@react-pdf/renderer';
import { globalStyles, pdfColors } from '../../styles';
import { PDFBaseLayout } from '../../components/PDFBaseLayout';
import { PDFCoverSection } from '../../components/PDFCoverSection';
import { PDFGoldDivider } from '../../components/PDFGoldDivider';
import React from 'react';

export const VaultReactiveMaintenanceLogPDF = ({ referenceNumber, generatedDate }: { referenceNumber: string, generatedDate: string }) => {
  const emptyRows = Array.from({ length: 18 }, (_, i) => i);

  return (
    <Document title="Reactive Maintenance Logbook - EntireFM" author="EntireFM">
      {/* PAGE 1: COVER */}
      <PDFBaseLayout 
        documentTitle="Reactive Logbook" 
        referenceNumber={referenceNumber} 
        generatedDate={generatedDate}
        wrap={false}
      >
        <PDFCoverSection 
          title="Reactive Maintenance Logbook"
          subtitle="Site Defect Registration & Rectification"
          generatedFor="[Location / Facility Reception]"
          generatedDate={generatedDate}
          documentType="Logbook Tool"
          referenceNumber={referenceNumber}
        />

        <View style={globalStyles.sectionBox}>
          <Text style={{ ...globalStyles.h3, marginTop: 0, color: pdfColors.navy, fontSize: 9 }}>Operational Protocols:</Text>
          <Text style={globalStyles.small}>1. Log every defect immediately upon discovery with a unique Job Reference.</Text>
          <Text style={globalStyles.small}>2. Record the exact location and a concise technical description of the fault.</Text>
          <Text style={globalStyles.small}>3. Ensure attending contractors sign the log upon completion of the works.</Text>
        </View>

        <View style={{ flex: 1, borderStyle: 'dashed', borderWidth: 2, borderColor: '#cbd5e1', justifyContent: 'center', alignItems: 'center', marginTop: 30, backgroundColor: '#f8fafc' }}>
          <Text style={{ fontSize: 10, color: '#94a3b8', letterSpacing: 3, fontWeight: 'bold' }}>OFFICIAL SITE RECORD — RETAIN IN RECEPTION</Text>
        </View>
      </PDFBaseLayout>

      {/* PAGE 2: LOG SHEET (Landscape) */}
      <PDFBaseLayout 
        documentTitle="Reactive Log Sheet" 
        referenceNumber={referenceNumber} 
        generatedDate={generatedDate}
        orientation="landscape"
      >
        <Text style={{ ...globalStyles.h2, marginTop: 0 }}>Incident Registration Grid</Text>
        <PDFGoldDivider />

        {/* Table Header */}
        <View style={{ flexDirection: 'row', backgroundColor: pdfColors.navy, borderBottomWidth: 2, borderBottomColor: pdfColors.gold }}>
          <Text style={{ ...globalStyles.tableHeaderCell, width: '8%', fontSize: 7 }}>Job Ref</Text>
          <Text style={{ ...globalStyles.tableHeaderCell, width: '10%', fontSize: 7 }}>Date</Text>
          <Text style={{ ...globalStyles.tableHeaderCell, width: '15%', fontSize: 7 }}>Location</Text>
          <Text style={{ ...globalStyles.tableHeaderCell, width: '25%', fontSize: 7 }}>Defect Description</Text>
          <Text style={{ ...globalStyles.tableHeaderCell, width: '12%', fontSize: 7 }}>Contractor</Text>
          <Text style={{ ...globalStyles.tableHeaderCell, width: '18%', fontSize: 7 }}>Action / Resolution</Text>
          <Text style={{ ...globalStyles.tableHeaderCell, width: '12%', fontSize: 7 }}>Sign-Off</Text>
        </View>

        {/* Empty Rows */}
        {emptyRows.map((_, i) => (
          <View key={i} style={{ flexDirection: 'row', borderBottomWidth: 1, borderBottomColor: '#f1f5f9', minHeight: 38, alignItems: 'center' }} wrap={false}>
            <View style={{ width: '8%', borderRightWidth: 1, borderRightColor: '#f1f5f9', height: '100%' }} />
            <View style={{ width: '10%', borderRightWidth: 1, borderRightColor: '#f1f5f9', height: '100%' }} />
            <View style={{ width: '15%', borderRightWidth: 1, borderRightColor: '#f1f5f9', height: '100%' }} />
            <View style={{ width: '25%', borderRightWidth: 1, borderRightColor: '#f1f5f9', height: '100%' }} />
            <View style={{ width: '12%', borderRightWidth: 1, borderRightColor: '#f1f5f9', height: '100%' }} />
            <View style={{ width: '18%', borderRightWidth: 1, borderRightColor: '#f1f5f9', height: '100%' }} />
            <View style={{ width: '12%', height: '100%' }} />
          </View>
        ))}
      </PDFBaseLayout>
    </Document>
  );
};
