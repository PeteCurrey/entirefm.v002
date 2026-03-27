import { Document, Page, Text, View } from '@react-pdf/renderer';
import { globalStyles, pdfColors } from '../../styles';
import { PDFHeader } from '../../components/PDFHeader';
import { PDFFooter } from '../../components/PDFFooter';
import { PDFWatermark } from '../../components/PDFWatermark';
import { PDFCoverSection } from '../../components/PDFCoverSection';
import { PDFContactCTA } from '../../components/PDFContactCTA';
import { PDFDisclaimer } from '../../components/PDFDisclaimer';

export const VaultBuildingComplianceChecklistPDF = ({ referenceNumber, generatedDate }: { referenceNumber: string, generatedDate: string }) => {
  const checklists = [
    {
      title: 'FIRE SAFETY & EVACUATION',
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
      title: 'WATER HYGIENE (LEGIONELLA)',
      items: [
        'Legionella Risk Assessment current (reviewed every 2 years)',
        'Monthly remote temperature monitoring recorded',
        'Quarterly shower head descaling completed and logged',
        'Annual Water Tank inspection and micro-biological sampling',
        'Written scheme of control readily available on site'
      ]
    },
    {
      title: 'ELECTRICAL & GAS COMPLIANCE',
      items: [
        'Fixed Wire Testing (EICR) valid (commercial: every 5 years)',
        'Portable Appliance Testing (PAT) completed for relevant items',
        'Commercial Gas Safety Certificate (CP12) valid for all boilers',
        'Lightning protection system tested annually',
        'Electrical intake rooms free of combustible storage'
      ]
    },
    {
      title: 'LIFTING & MECHANICAL',
      items: [
        'Passenger Lifts: LOLER thorough examination (every 6 months)',
        'Passenger Lifts: Routine maintenance completed (monthly/quarterly)',
        'HVAC: F-Gas leak testing completed for applicable chillers/AC units',
        'Local Exhaust Ventilation (LEV) tested every 14 months if applicable'
      ]
    },
    {
      title: 'HEALTH & SAFETY MANAGEMENT',
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
      <Page size="A4" style={globalStyles.page} wrap>
        <PDFWatermark />
        <PDFHeader documentTitle="Compliance Checklist" documentRef={referenceNumber} />
        
        <PDFCoverSection 
          title="Building Compliance Audit Checklist"
          subtitle="Statutory Audit Framework"
          generatedFor="[ENTER FACILITY NAME HERE]"
          generatedDate={generatedDate}
          documentType="Checklist"
          referenceNumber={referenceNumber}
        />

        <Text style={{ ...globalStyles.body, marginBottom: 20 }}>
          Use this checklist to perform a self-audit of your facility's core statutory compliance obligations. Ensure that for every ticked box, corresponding certification or logs are physically or digitally available on-site for inspection by the HSE, Environmental Health, or Fire Authority.
        </Text>

        {checklists.map((list, i) => (
          <View key={i} style={{ marginBottom: 20 }} wrap={false}>
            <View style={{ backgroundColor: pdfColors.navy, padding: 8, flexDirection: 'row', justifyContent: 'space-between' }}>
              <Text style={{ color: pdfColors.white, fontSize: 10, fontWeight: 700 }}>{list.title}</Text>
              <Text style={{ color: pdfColors.white, fontSize: 10 }}>COMPLIANT?</Text>
            </View>
            
            <View style={{ flexDirection: 'row', backgroundColor: pdfColors.lightGrey, borderBottomWidth: 1, borderBottomColor: pdfColors.navy }}>
              <Text style={{ ...globalStyles.tableHeaderCell, width: '60%', color: pdfColors.navy, backgroundColor: 'transparent' }}>Audit Item</Text>
              <Text style={{ ...globalStyles.tableHeaderCell, width: '25%', color: pdfColors.navy, backgroundColor: 'transparent' }}>Last Serviced Date</Text>
              <Text style={{ ...globalStyles.tableHeaderCell, width: '15%', color: pdfColors.navy, backgroundColor: 'transparent', textAlign: 'center' }}>[ ✓ / ✗ ]</Text>
            </View>

            {list.items.map((item, j) => (
              <View key={j} style={{ flexDirection: 'row', borderBottomWidth: 1, borderBottomColor: pdfColors.borderColour, minHeight: 30, alignItems: 'center' }}>
                <View style={{ width: '60%', ...globalStyles.tableBodyCell }}>
                  <Text>{item}</Text>
                </View>
                <View style={{ width: '25%', ...globalStyles.tableBodyCell, borderLeftWidth: 1, borderLeftColor: pdfColors.borderColour }}>
                  <Text style={{ color: pdfColors.borderColour }}>DD/MM/YYYY</Text>
                </View>
                <View style={{ width: '15%', ...globalStyles.tableBodyCell, borderLeftWidth: 1, borderLeftColor: pdfColors.borderColour, height: '100%' }}>
                  {/* Empty box for manual ticking */}
                </View>
              </View>
            ))}
          </View>
        ))}

        <View wrap={false}>
          <PDFContactCTA documentType="compliance audit" customText="Struggling to locate your statutory certificates? EntireFM provides comprehensive compliance gap-analysis audits and cloud-based document portals to ensure you remain 100% compliant." />
          <PDFDisclaimer />
        </View>
        <PDFFooter generatedDate={generatedDate} />
      </Page>
    </Document>
  );
};
