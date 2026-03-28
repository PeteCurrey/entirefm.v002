import { Document, Text, View } from '@react-pdf/renderer';
import { globalStyles, pdfColors } from '../../styles';
import { PDFBaseLayout } from '../../components/PDFBaseLayout';
import { PDFCoverSection } from '../../components/PDFCoverSection';
import { PDFContactCTA } from '../../components/PDFContactCTA';
import React from 'react';

export const VaultBuildingComplianceChecklistPDF = ({ referenceNumber, generatedDate }: { referenceNumber: string, generatedDate: string }) => {
  const checklists = [
    {
      title: 'Fire Safety & Evacuation',
      items: [
        'Fire Risk Assessment (FRA) completed and reviewed annually',
        'Fire Alarm system serviced quarterly (BS 5839)',
        'Emergency Lighting flick tested monthly and serviced annually',
        'Fire Extinguishers serviced annually (BS 5306)',
        'Fire doors inspected and recorded semi-annually',
        'Evacuation routes clear and signage illuminated'
      ]
    },
    {
      title: 'Water Hygiene (Legionella)',
      items: [
        'Legionella Risk Assessment current (reviewed every 2 years)',
        'Monthly remote temperature monitoring recorded',
        'Quarterly shower head descaling completed and logged',
        'Annual Water Tank inspection and micro-biological sampling',
        'Written scheme of control readily available on site'
      ]
    },
    {
      title: 'Electrical & Gas Compliance',
      items: [
        'Fixed Wire Testing (EICR) valid (commercial: every 5 years)',
        'Portable Appliance Testing (PAT) completed for relevant items',
        'Commercial Gas Safety Certificate (CP12) valid for all boilers',
        'Lightning protection system tested annually',
        'Electrical intake rooms free of combustible storage'
      ]
    },
    {
      title: 'Lifting & Mechanical',
      items: [
        'Passenger Lifts: LOLER thorough examination (every 6 months)',
        'Passenger Lifts: Routine maintenance completed (monthly/quarterly)',
        'HVAC: F-Gas leak testing completed for applicable chillers/AC units',
        'Local Exhaust Ventilation (LEV) tested every 14 months if applicable'
      ]
    },
    {
      title: 'Health & Safety Management',
      items: [
        'General Health & Safety Policy displayed and signed',
        'Asbestos Register present on site (or written proof of no asbestos)',
        'First Aid kits fully stocked and in date',
        'Accident Book present and easily accessible',
        'Contractor signing-in protocol and induction records maintained'
      ]
    }
  ];

  return (
    <Document title="Building Compliance Audit Checklist" author="EntireFM">
      <PDFBaseLayout 
        documentTitle="Compliance Checklist" 
        referenceNumber={referenceNumber} 
        generatedDate={generatedDate}
        showDisclaimer={true}
      >
        <PDFCoverSection 
          title="Building Compliance Audit Checklist"
          subtitle="Statutory Audit Framework"
          generatedFor="[Enter Facility Name]"
          generatedDate={generatedDate}
          documentType="Compliance Audit Tool"
          referenceNumber={referenceNumber}
        />

        <View style={globalStyles.sectionBox}>
          <Text style={globalStyles.body}>
            Use this checklist to perform a self-audit of your facility's core statutory compliance obligations. Ensure that for every ticked box, corresponding certification is physically available on-site for inspection.
          </Text>
        </View>

        {checklists.map((list, i) => (
          <View key={i} style={{ marginBottom: 20 }} wrap={false}>
            <View style={{ backgroundColor: pdfColors.navy, padding: 6, flexDirection: 'row', justifyContent: 'space-between' }}>
              <Text style={{ color: pdfColors.white, fontSize: 9, fontWeight: 'bold', textTransform: 'uppercase' }}>{list.title}</Text>
              <Text style={{ color: pdfColors.white, fontSize: 8 }}>COMPLIANT?</Text>
            </View>
            
            <View style={{ flexDirection: 'row', backgroundColor: pdfColors.lightGrey, borderBottomWidth: 1, borderBottomColor: pdfColors.navy }}>
              <Text style={{ ...globalStyles.tableHeaderCell, width: '60%', backgroundColor: 'transparent', color: pdfColors.navy }}>Audit Item</Text>
              <Text style={{ ...globalStyles.tableHeaderCell, width: '25%', backgroundColor: 'transparent', color: pdfColors.navy }}>Last Serviced</Text>
              <Text style={{ ...globalStyles.tableHeaderCell, width: '15%', backgroundColor: 'transparent', color: pdfColors.navy, textAlign: 'center' }}>[ ✓ / ✗ ]</Text>
            </View>

            {list.items.map((item, j) => (
              <View key={j} style={{ flexDirection: 'row', borderBottomWidth: 1, borderBottomColor: pdfColors.borderColour, minHeight: 32, alignItems: 'center' }}>
                <View style={{ width: '60%', ...globalStyles.tableBodyCell }}>
                  <Text>{item}</Text>
                </View>
                <View style={{ width: '25%', ...globalStyles.tableBodyCell, borderLeftWidth: 1, borderLeftColor: pdfColors.borderColour }}>
                  <Text style={{ color: pdfColors.borderColour }}>DD/MM/YYYY</Text>
                </View>
                <View style={{ width: '15%', ...globalStyles.tableBodyCell, borderLeftWidth: 1, borderLeftColor: pdfColors.borderColour, height: '100%' }} />
              </View>
            ))}
          </View>
        ))}

        <View style={{ marginTop: 20 }}>
          <PDFContactCTA documentType="compliance audit" customText="Struggling to locate your statutory certificates? EntireFM provides comprehensive compliance gap-analysis audits and cloud-based document portals to ensure you remain 100% compliant." />
        </View>
      </PDFBaseLayout>
    </Document>
  );
};
