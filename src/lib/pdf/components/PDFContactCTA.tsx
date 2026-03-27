import { Text, View } from '@react-pdf/renderer';
import { globalStyles, pdfColors } from '../styles';

interface PDFContactCTAProps {
  documentType?: string;
  customText?: string;
}

export const PDFContactCTA = ({ documentType = 'document', customText }: PDFContactCTAProps) => {
  const bodyText = customText || `If you'd like EntireFM to review your ${documentType} or discuss how we can manage your building's maintenance and compliance, our team is happy to help.`;

  return (
    <View style={{
      marginTop: 40,
      borderTopWidth: 1,
      borderTopColor: pdfColors.navy,
      paddingTop: 20,
      marginBottom: 20
    }} wrap={false}>
      <Text style={{ 
        fontSize: 8, 
        fontWeight: 700, 
        color: pdfColors.navy,
        letterSpacing: 1,
        marginBottom: 8
      }}>
        NEED HELP IMPLEMENTING THIS?
      </Text>
      
      <Text style={{ 
        fontSize: 9, 
        color: pdfColors.mutedText,
        lineHeight: 1.5,
        marginBottom: 12,
        maxWidth: '80%'
      }}>
        {bodyText}
      </Text>

      <View style={{ flexDirection: 'row', gap: 20 }}>
        <Text style={{ fontSize: 9, color: pdfColors.navy, fontWeight: 500 }}>
          <Text style={{ fontWeight: 700 }}>T:</Text> 0800 999 7668
        </Text>
        <Text style={{ fontSize: 9, color: pdfColors.navy, fontWeight: 500 }}>
          <Text style={{ fontWeight: 700 }}>E:</Text> info@entirefm.com
        </Text>
        <Text style={{ fontSize: 9, color: pdfColors.navy, fontWeight: 500 }}>
          <Text style={{ fontWeight: 700 }}>W:</Text> entirefm.com
        </Text>
      </View>
    </View>
  );
};
