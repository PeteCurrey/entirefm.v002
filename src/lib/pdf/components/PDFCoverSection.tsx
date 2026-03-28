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
  <View style={{ marginBottom: 40 }}>
    <View style={{
      backgroundColor: pdfColors.navy,
      padding: 40,
      paddingTop: 60,
      paddingBottom: 40,
      marginBottom: 0,
      borderLeftWidth: 8,
      borderLeftColor: pdfColors.gold
    }}>
      <Text style={{ 
        color: pdfColors.white, 
        fontSize: 28, 
        fontWeight: 'bold',
        marginBottom: subtitle ? 10 : 0,
        letterSpacing: -0.5
      }}>
        {title}
      </Text>
      {subtitle && (
        <Text style={{ 
          color: pdfColors.gold, 
          fontSize: 14, 
          fontWeight: 'medium',
          textTransform: 'uppercase',
          letterSpacing: 2
        }}>
          {subtitle}
        </Text>
      )}
    </View>
    
    <View style={{
      flexDirection: 'row',
      backgroundColor: pdfColors.lightGrey,
      padding: 15,
      paddingHorizontal: 40,
      borderBottomWidth: 1,
      borderBottomColor: '#cbd5e1'
    }}>
      {generatedFor && (
        <View style={{ marginRight: 25 }}>
          <Text style={{ fontSize: 7, color: pdfColors.muted, textTransform: 'uppercase', letterSpacing: 1, marginBottom: 2 }}>Prepared for</Text>
          <Text style={{ fontSize: 9, fontWeight: 'bold', color: pdfColors.navy }}>{generatedFor}</Text>
        </View>
      )}
      <View style={{ marginRight: 25 }}>
        <Text style={{ fontSize: 7, color: pdfColors.muted, textTransform: 'uppercase', letterSpacing: 1, marginBottom: 2 }}>Publication Date</Text>
        <Text style={{ fontSize: 9, fontWeight: 'bold', color: pdfColors.navy }}>{generatedDate}</Text>
      </View>
      <View>
        <Text style={{ fontSize: 7, color: pdfColors.muted, textTransform: 'uppercase', letterSpacing: 1, marginBottom: 2 }}>Control Reference</Text>
        <Text style={{ fontSize: 9, fontWeight: 'bold', color: pdfColors.navy, fontFamily: 'Courier' }}>{referenceNumber}</Text>
      </View>
    </View>
  </View>
);
