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
    <Document title="Compliance Audit Checklist - EntireFM" author="EntireFM">
      <PDFBaseLayout 
        documentTitle="Compliance Audit" 
        referenceNumber={referenceNumber} 
        generatedDate={generatedDate}
        showDisclaimer={true}
      >
        <PDFCoverSection 
          title="Building Compliance Audit Checklist"
          subtitle="Statutory Minimum Standards"
          generatedFor="[Property Manager / Duty Holder]"
          generatedDate={generatedDate}
          documentType="Compliance Audit Tool"
          referenceNumber={referenceNumber}
        />

        <View style={globalStyles.sectionBox}>
          <Text style={globalStyles.body}>
            Use this professional audit tool to perform a self-assessment of your facility's core statutory compliance obligations. Ensure that for every ticked box, corresponding certification is physically or digitally available on-site for regulatory inspection.
          </Text>
        </View>

        {checklists.map((list, i) => (
          <View key={i} style={{ marginBottom: 25 }} wrap={false}>
            <View style={{ backgroundColor: pdfColors.navy, padding: 8, flexDirection: 'row', justifyContent: 'space-between', borderLeftWidth: 4, borderLeftColor: pdfColors.gold }}>
              <Text style={{ color: pdfColors.white, fontSize: 10, fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: 1 }}>{list.title}</Text>
              <Text style={{ color: pdfColors.gold, fontSize: 8, fontWeight: 'bold' }}>COMPLIANCE STATUS</Text>
            </View>
            
            <View style={{ flexDirection: 'row', backgroundColor: pdfColors.lightGrey, borderBottomWidth: 2, borderBottomColor: pdfColors.navy }}>
              <Text style={[globalStyles.tableHeaderCell, { width: '60%', backgroundColor: 'transparent', color: pdfColors.navy }]}>Statutory Audit Item</Text>
              <Text style={[globalStyles.tableHeaderCell, { width: '25%', backgroundColor: 'transparent', color: pdfColors.navy }]}>Last Certification</Text>
              <Text style={[globalStyles.tableHeaderCell, { width: '15%', backgroundColor: 'transparent', color: pdfColors.navy, textAlign: 'center' }]}>[ ✓ ]</Text>
            </View>

            {list.items.map((item, j) => (
              <View key={j} style={{ flexDirection: 'row', borderBottomWidth: 1, borderBottomColor: '#f1f5f9', minHeight: 35, alignItems: 'center' }}>
                <View style={[{ width: '60%' }, globalStyles.tableBodyCell]}>
                  <Text>{item}</Text>
                </View>
                <View style={{ width: '25%', ...globalStyles.tableBodyCell, borderLeftWidth: 1, borderLeftColor: '#f1f5f9' }}>
                  <Text style={{ color: '#cbd5e1' }}>DD / MM / YYYY</Text>
                </View>
                <View style={{ width: '15%', ...globalStyles.tableBodyCell, borderLeftWidth: 1, borderLeftColor: '#f1f5f9', height: '100%' }} />
              </View>
            ))}
          </View>
        ))}

        <View style={{ marginTop: 20 }}>
          <PDFContactCTA documentType="statutory compliance" customText="Struggling to track your certificates? EntireFM provides cloud-based compliance portals that automate your documentation and alert you before expirations." />
        </View>
      </PDFBaseLayout>
    </Document>
  );
};
