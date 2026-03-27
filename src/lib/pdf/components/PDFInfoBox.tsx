import { Text, View } from '@react-pdf/renderer';
import { globalStyles, pdfColors } from '../styles';

interface PDFInfoBoxProps {
  title: string;
  body: string;
  type?: 'info' | 'warning' | 'tip';
}

export const PDFInfoBox = ({ title, body, type = 'info' }: PDFInfoBoxProps) => {
  let borderColor = pdfColors.navy;
  let bgColor = pdfColors.lightGrey;

  if (type === 'warning') {
    borderColor = pdfColors.amber;
    bgColor = '#fff8e1'; // Very light amber
  } else if (type === 'tip') {
    borderColor = pdfColors.green;
    bgColor = '#e8f5e9'; // Very light green
  } else {
    borderColor = '#1976d2'; // Info blue
    bgColor = '#e3f2fd'; // Very light blue
  }

  return (
    <View style={{
      backgroundColor: bgColor,
      borderLeftWidth: 4,
      borderLeftColor: borderColor,
      padding: 12,
      marginBottom: 16,
      borderRadius: 2
    }}>
      <Text style={{ 
        fontSize: 10, 
        fontWeight: 700, 
        color: pdfColors.navy,
        marginBottom: 4
      }}>
        {title}
      </Text>
      <Text style={{ 
        fontSize: 9, 
        color: pdfColors.bodyText,
        lineHeight: 1.5
      }}>
        {body}
      </Text>
    </View>
  );
};
