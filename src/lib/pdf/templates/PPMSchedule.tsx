import { Document, Page, Text, View } from '@react-pdf/renderer';
import { globalStyles, pdfColors } from '../styles';
import { PDFHeader } from '../components/PDFHeader';
import { PDFFooter } from '../components/PDFFooter';
import { PDFWatermark } from '../components/PDFWatermark';
import { PDFCoverSection } from '../components/PDFCoverSection';
import { PDFInfoBox } from '../components/PDFInfoBox';
import { PDFGoldDivider } from '../components/PDFGoldDivider';
import { PDFContactCTA } from '../components/PDFContactCTA';
import { PDFDisclaimer } from '../components/PDFDisclaimer';

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
  // Group assets by category
  const groupedAssets = data.assets.reduce((acc, asset) => {
    if (!acc[asset.category]) {
      acc[asset.category] = [];
    }
    acc[asset.category].push(asset);
    return acc;
  }, {} as Record<string, typeof data.assets>);

  return (
    <Document title="Planned Preventative Maintenance Schedule" author="EntireFM">
      {/* PAGE 1: COVER & LEGEND */}
      <Page size="A4" style={globalStyles.page} wrap={false}>
        <PDFWatermark />
        <PDFHeader documentTitle="PPM Schedule" documentRef={data.referenceNumber} />
        
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
          This PPM schedule has been prepared for {data.buildingName} in line with SFG20 maintenance standards and UK statutory requirements. It sets out the recommended maintenance frequencies for all identified building assets, distinguishing between statutory requirements (legally required) and recommended best practice activities. All frequencies should be reviewed annually or following significant changes to the building or its systems.
        </Text>

        <View style={{ flexDirection: 'row', gap: 10, marginTop: 20, marginBottom: 30 }}>
          <View style={{ flex: 1, backgroundColor: pdfColors.lightGrey, padding: 16, borderRadius: 4, borderTopWidth: 3, borderTopColor: pdfColors.navy }}>
            <Text style={{ fontSize: 9, color: pdfColors.mutedText, marginBottom: 4 }}>Total Assets</Text>
            <Text style={{ fontSize: 24, fontWeight: 700, color: pdfColors.navy }}>{data.totalAssets}</Text>
          </View>
          <View style={{ flex: 1, backgroundColor: '#fff8e1', padding: 16, borderRadius: 4, borderTopWidth: 3, borderTopColor: pdfColors.amber }}>
            <Text style={{ fontSize: 9, color: pdfColors.mutedText, marginBottom: 4 }}>Statutory Requirements</Text>
            <Text style={{ fontSize: 24, fontWeight: 700, color: pdfColors.amber }}>{data.statutoryCount}</Text>
          </View>
          <View style={{ flex: 1, backgroundColor: '#e3f2fd', padding: 16, borderRadius: 4, borderTopWidth: 3, borderTopColor: '#1976d2' }}>
            <Text style={{ fontSize: 9, color: pdfColors.mutedText, marginBottom: 4 }}>Recommended Activities</Text>
            <Text style={{ fontSize: 24, fontWeight: 700, color: '#1976d2' }}>{data.recommendedCount}</Text>
          </View>
        </View>

        <View style={globalStyles.sectionBox}>
          <Text style={{ fontSize: 10, fontWeight: 700, color: pdfColors.navy, marginBottom: 10 }}>SCHEDULE LEGEND</Text>
          
          <View style={{ flexDirection: 'row', marginBottom: 12 }}>
            <View style={{ width: 80 }}>
              <Text style={{ ...globalStyles.badge, backgroundColor: pdfColors.amber, color: pdfColors.white, alignSelf: 'flex-start' }}>STATUTORY</Text>
            </View>
            <Text style={{ flex: 1, ...globalStyles.small, color: pdfColors.bodyText }}>
              Legally required maintenance governed by UK law (e.g. Fire Safety, Gas, Lifting Operations). Non-compliance can result in severe regulatory action, fines, or invalidation of insurance.
            </Text>
          </View>
          
          <View style={{ flexDirection: 'row', marginBottom: 16 }}>
             <View style={{ width: 80 }}>
              <Text style={{ ...globalStyles.badge, backgroundColor: pdfColors.mutedText, color: pdfColors.white, alignSelf: 'flex-start' }}>RECOMMENDED</Text>
            </View>
            <Text style={{ flex: 1, ...globalStyles.small, color: pdfColors.bodyText }}>
              Best practice maintenance aligned with SFG20 standards designed to optimize asset lifespan, prevent breakdowns, and maintain operational efficiency.
            </Text>
          </View>

          <View style={{ flexDirection: 'row', borderTopWidth: 1, borderTopColor: pdfColors.borderColour, paddingTop: 12 }}>
            <Text style={{ ...globalStyles.small, width: '20%' }}><Text style={{ fontWeight: 700 }}>M</Text> = Monthly</Text>
            <Text style={{ ...globalStyles.small, width: '20%' }}><Text style={{ fontWeight: 700 }}>Q</Text> = Quarterly</Text>
            <Text style={{ ...globalStyles.small, width: '20%' }}><Text style={{ fontWeight: 700 }}>6M</Text> = Six-Monthly</Text>
            <Text style={{ ...globalStyles.small, width: '20%' }}><Text style={{ fontWeight: 700 }}>A</Text> = Annual</Text>
            <Text style={{ ...globalStyles.small, width: '20%' }}><Text style={{ fontWeight: 700 }}>2Y</Text> = Two-Yearly</Text>
          </View>
        </View>

        <PDFFooter generatedDate={data.generatedDate} />
      </Page>

      {/* SCHEDULE PAGES */}
      {Object.entries(groupedAssets).map(([category, assets]) => {
        const hasStatutory = assets.some(a => a.statutory);
        
        return (
          <Page key={category} size="A4" style={globalStyles.page} wrap>
            <PDFWatermark />
            <PDFHeader documentTitle="PPM Schedule" documentRef={data.referenceNumber} />
            
            <View style={{ backgroundColor: pdfColors.navy, padding: 8, paddingHorizontal: 12, marginBottom: 8 }} wrap={false}>
              <Text style={{ color: pdfColors.white, fontSize: 12, fontWeight: 700 }}>{category.toUpperCase()}</Text>
            </View>

            <View style={{ marginBottom: 20 }}>
              {/* Table Header */}
              <View style={{ flexDirection: 'row', backgroundColor: pdfColors.lightGrey, borderBottomWidth: 2, borderBottomColor: pdfColors.navy }} fixed>
                <Text style={{ ...globalStyles.tableHeaderCell, width: '25%', backgroundColor: 'transparent', color: pdfColors.navy }}>Asset</Text>
                <Text style={{ ...globalStyles.tableHeaderCell, width: '15%', backgroundColor: 'transparent', color: pdfColors.navy }}>Frequency</Text>
                <Text style={{ ...globalStyles.tableHeaderCell, width: '35%', backgroundColor: 'transparent', color: pdfColors.navy }}>Key Tasks</Text>
                <Text style={{ ...globalStyles.tableHeaderCell, width: '25%', backgroundColor: 'transparent', color: pdfColors.navy, textAlign: 'right' }}>Standard / Status</Text>
              </View>
              
              {/* Table Rows */}
              {assets.map((asset, index) => (
                <View key={index} style={{ flexDirection: 'row', backgroundColor: index % 2 === 0 ? pdfColors.white : '#fafafa' }} wrap={false}>
                  <View style={{ width: '25%', ...globalStyles.tableBodyCell }}>
                    <Text style={{ fontWeight: asset.statutory ? 700 : 400, color: pdfColors.navy }}>{asset.assetName}</Text>
                  </View>
                  <View style={{ width: '15%', ...globalStyles.tableBodyCell }}>
                    <Text style={{ fontWeight: 700 }}>{asset.frequency}</Text>
                  </View>
                  <View style={{ width: '35%', ...globalStyles.tableBodyCell }}>
                    {asset.tasks.slice(0, 3).map((task, i) => (
                      <Text key={i} style={{ marginBottom: 2 }}>• {task}</Text>
                    ))}
                    {asset.tasks.length > 3 && <Text style={{ color: pdfColors.mutedText, fontStyle: 'italic' }}>+ {asset.tasks.length - 3} more</Text>}
                  </View>
                  <View style={{ width: '25%', ...globalStyles.tableBodyCell, alignItems: 'flex-end', justifyContent: 'flex-start' }}>
                    <Text style={{ fontSize: 7, color: pdfColors.mutedText, marginBottom: 4 }}>{asset.standard}</Text>
                    <Text style={{ 
                      ...globalStyles.badge, 
                      backgroundColor: asset.statutory ? pdfColors.amber : pdfColors.mutedText, 
                      color: pdfColors.white 
                    }}>
                      {asset.statutory ? 'STATUTORY' : 'RECOMMENDED'}
                    </Text>
                  </View>
                </View>
              ))}
            </View>

            {hasStatutory && (
              <PDFInfoBox 
                type="warning" 
                title="Statutory Compliance Note" 
                body="Statutory requirements in this category carry legal obligations. Failure to perform these tasks at the required frequencies and maintain accurate records may result in regulatory action or invalidation of building insurance." 
              />
            )}

            <PDFFooter generatedDate={data.generatedDate} />
          </Page>
        );
      })}

      {/* FINAL NOTES PAGE */}
      <Page size="A4" style={globalStyles.page} wrap={false}>
        <PDFWatermark />
        <PDFHeader documentTitle="PPM Schedule" documentRef={data.referenceNumber} />
        
        <Text style={globalStyles.h2}>Important Notes & Methodology</Text>
        <PDFGoldDivider />
        
        <View style={{ marginBottom: 20 }}>
          <Text style={{ ...globalStyles.body, marginBottom: 12 }}>
            <Text style={{ fontWeight: 700, color: pdfColors.navy }}>1. Based on Provided Information: </Text>
            This schedule has been dynamically generated based solely on the asset and building information provided during the estimation process. It is a guide and should not substitute a physical site survey.
          </Text>
          <Text style={{ ...globalStyles.body, marginBottom: 12 }}>
            <Text style={{ fontWeight: 700, color: pdfColors.navy }}>2. Minimum Recommendations: </Text>
            SFG20 schedules constitute minimum recommended maintenance frequencies. Local site conditions, heavy usage, environmental factors, or manufacturer warranties may dictate more frequent servicing intervals.
          </Text>
          <Text style={{ ...globalStyles.body, marginBottom: 12 }}>
            <Text style={{ fontWeight: 700, color: pdfColors.navy }}>3. Qualified Personnel: </Text>
            All maintenance, particularly statutory compliance tasks (Gas safely, Electrical, Fire, Lifting), MUST be carried out by suitably qualified, certified, and competent engineers.
          </Text>
          <Text style={{ ...globalStyles.body, marginBottom: 12 }}>
            <Text style={{ fontWeight: 700, color: pdfColors.navy }}>4. Record Keeping: </Text>
            Comprehensive records, service sheets, and certification of all PPM visits must be securely retained (typically for a minimum of 3 to 5 years) to evidence statutory compliance.
          </Text>
        </View>

        <PDFContactCTA documentType="PPM schedule requirements" />
        <PDFDisclaimer />
        
        <PDFFooter generatedDate={data.generatedDate} />
      </Page>

    </Document>
  );
};
