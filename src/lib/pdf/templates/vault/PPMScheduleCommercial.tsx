import { Document, Text, View } from '@react-pdf/renderer';
import { globalStyles, pdfColors } from '../../styles';
import { PDFBaseLayout } from '../../components/PDFBaseLayout';
import { PDFCoverSection } from '../../components/PDFCoverSection';
import { PDFContactCTA } from '../../components/PDFContactCTA';
import React from 'react';

export const VaultPPMScheduleCommercialPDF = ({ referenceNumber, generatedDate }: { referenceNumber: string, generatedDate: string }) => {
  const categories = [
    {
      name: 'FIRE & LIFE SAFETY',
      items: [
        { asset: 'Fire Alarm System', frequency: 'Q', tasks: 'Test full system, battery check, zone verification', stat: true },
        { asset: 'Emergency Lighting', frequency: 'M', tasks: 'Flick test, visual inspection of luminaires', stat: true },
        { asset: 'Fire Extinguishers', frequency: 'A', tasks: 'Weight check, pin verification, visible damage inspection', stat: true },
        { asset: 'Sprinkler System', frequency: '6M', tasks: 'Pump test, flow switch verification, pressure checks', stat: true },
      ]
    },
    {
      name: 'HVAC & MECHANICAL',
      items: [
        { asset: 'Air Handling Units (AHU)', frequency: 'Q', tasks: 'Filter replacement, belt tension check, coil cleaning', stat: false },
        { asset: 'Chillers', frequency: '6M', tasks: 'Refrigerant leak leak check, compressor oil analysis, condenser clean', stat: true },
        { asset: 'Boilers (Gas)', frequency: 'A', tasks: 'CP12 certification, combustion analysis, flue check', stat: true },
        { asset: 'Fan Coil Units (FCU)', frequency: '6M', tasks: 'Filter clean/replace, condensate drip tray sanitization', stat: false },
      ]
    },
    {
      name: 'ELECTRICAL SYSTEMS',
      items: [
        { asset: 'Fixed Wire Testing (EICR)', frequency: '5Y', tasks: 'Full installation test and certification (20% per annum)', stat: true },
        { asset: 'Emergency Generator', frequency: 'Q', tasks: 'Off-load test, battery check, fluid level verification', stat: true },
        { asset: 'UPS Systems', frequency: '6M', tasks: 'Battery impedance test, bypass switch verification', stat: false },
        { asset: 'Lightning Protection', frequency: 'A', tasks: 'Earth resistance test, visual inspection of conductors', stat: true },
      ]
    },
    {
      name: 'WATER & PLUMBING',
      items: [
        { asset: 'Legionella Risk Assessment', frequency: '2Y', tasks: 'Full system review, schematic update, risk evaluation', stat: true },
        { asset: 'Temperature Monitoring', frequency: 'M', tasks: 'Sentinel tap temps (hot >50°C, cold <20°C)', stat: true },
        { asset: 'Shower Descaling', frequency: 'Q', tasks: 'Dismantle, descale and sanitize all shower heads', stat: true },
        { asset: 'Cold Water Storage Tanks', frequency: 'A', tasks: 'Visual inspection, temperature check, microbiological sampling', stat: true },
      ]
    }
  ];

  return (
    <Document title="PPM Schedule - Commercial Estate" author="EntireFM">
      <PDFBaseLayout 
        documentTitle="PPM Template" 
        referenceNumber={referenceNumber} 
        generatedDate={generatedDate}
        showDisclaimer={true}
      >
        <PDFCoverSection 
          title="SFG20 Aligned PPM Schedule"
          subtitle="Typical Commercial Office Building"
          generatedFor="[Enter Company Name]"
          generatedDate={generatedDate}
          documentType="PPM Template"
          referenceNumber={referenceNumber}
        />

        <View style={globalStyles.sectionBox}>
          <Text style={globalStyles.body}>This document provides a foundational Planned Preventative Maintenance (PPM) schedule for a standard commercial office environment. It outlines technical core statutory obligations and recommended best practices.</Text>
        </View>

        {categories.map((cat, i) => (
          <View key={i} style={{ marginBottom: 20 }} wrap={false}>
            <View style={{ backgroundColor: pdfColors.navy, padding: 6 }}>
              <Text style={{ color: pdfColors.white, fontSize: 9, fontWeight: 'bold' }}>{cat.name}</Text>
            </View>
            <View style={{ flexDirection: 'row', backgroundColor: pdfColors.lightGrey, borderBottomWidth: 1, borderBottomColor: pdfColors.navy }}>
              <Text style={{ ...globalStyles.tableHeaderCell, width: '30%', backgroundColor: 'transparent', color: pdfColors.navy }}>Asset</Text>
              <Text style={{ ...globalStyles.tableHeaderCell, width: '10%', backgroundColor: 'transparent', color: pdfColors.navy, textAlign: 'center' }}>Freq</Text>
              <Text style={{ ...globalStyles.tableHeaderCell, width: '45%', backgroundColor: 'transparent', color: pdfColors.navy }}>Core SFG20 Tasks</Text>
              <Text style={{ ...globalStyles.tableHeaderCell, width: '15%', backgroundColor: 'transparent', color: pdfColors.navy, textAlign: 'center' }}>Status</Text>
            </View>
            {cat.items.map((item, j) => (
              <View key={j} style={{ flexDirection: 'row', borderBottomWidth: 1, borderBottomColor: pdfColors.borderColour, minHeight: 32, alignItems: 'center' }}>
                <View style={{ width: '30%', ...globalStyles.tableBodyCell }}>
                  <Text style={{ fontWeight: item.stat ? 'bold' : 'normal' }}>{item.asset}</Text>
                </View>
                <View style={{ width: '10%', ...globalStyles.tableBodyCell, alignItems: 'center' }}>
                  <Text style={{ fontWeight: 'bold' }}>{item.frequency}</Text>
                </View>
                <View style={{ width: '45%', ...globalStyles.tableBodyCell }}>
                  <Text>{item.tasks}</Text>
                </View>
                <View style={{ width: '15%', ...globalStyles.tableBodyCell, alignItems: 'center', justifyContent: 'center' }}>
                  <Text style={{ 
                    ...globalStyles.badge, 
                    backgroundColor: item.stat ? pdfColors.amber : pdfColors.mutedText,
                    color: pdfColors.white,
                    fontSize: 6
                  }}>
                    {item.stat ? 'STATUTORY' : 'RECOMMEND'}
                  </Text>
                </View>
              </View>
            ))}
          </View>
        ))}

        <View style={{ marginTop: 20 }}>
          <PDFContactCTA documentType="commercial maintenance" />
        </View>
      </PDFBaseLayout>
    </Document>
  );
};
