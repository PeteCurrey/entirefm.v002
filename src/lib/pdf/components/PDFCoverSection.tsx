import { Text, View } from '@react-pdf/renderer';
import { globalStyles, pdfColors } from '../styles';

interface PDFCoverSectionProps {
  title: string;
  subtitle?: string;
  generatedFor?: string;
  generatedDate: string;
  documentType: string;
  referenceNumber: string;
}

export const PDFCoverSection = ({ 
  title, 
  subtitle, 
  generatedFor, 
  generatedDate, 
  referenceNumber 
}: PDFCoverSectionProps) => (
  <View style={{ marginBottom: 30 }}>
    <View style={{
      backgroundColor: pdfColors.navy,
      padding: 40,
      paddingTop: 60,
      marginBottom: 0
    }}>
      <Text style={{ 
        color: pdfColors.white, 
        fontSize: 32, 
        fontWeight: 700,
        marginBottom: subtitle ? 8 : 0
      }}>
        {title}
      </Text>
      {subtitle && (
        <Text style={{ 
          color: pdfColors.gold, 
          fontSize: 16, 
          fontWeight: 500 
        }}>
          {subtitle}
        </Text>
      )}
    </View>
    
    <View style={{
      flexDirection: 'row',
      backgroundColor: pdfColors.lightGrey,
      padding: 12,
      paddingHorizontal: 40,
      borderBottomWidth: 3,
      borderBottomColor: pdfColors.gold
    }}>
      {generatedFor && (
        <>
          <Text style={{ fontSize: 9, color: pdfColors.mutedText, marginRight: 15 }}>
            <Text style={{ fontWeight: 700, color: pdfColors.navy }}>Prepared for: </Text>
            {generatedFor}
          </Text>
          <Text style={{ fontSize: 9, color: pdfColors.borderColour, marginRight: 15 }}>|</Text>
        </>
      )}
      <Text style={{ fontSize: 9, color: pdfColors.mutedText, marginRight: 15 }}>
        <Text style={{ fontWeight: 700, color: pdfColors.navy }}>Date: </Text>
        {generatedDate}
      </Text>
      <Text style={{ fontSize: 9, color: pdfColors.borderColour, marginRight: 15 }}>|</Text>
      <Text style={{ fontSize: 9, color: pdfColors.mutedText }}>
        <Text style={{ fontWeight: 700, color: pdfColors.navy }}>Reference: </Text>
        {referenceNumber}
      </Text>
    </View>
  </View>
);
