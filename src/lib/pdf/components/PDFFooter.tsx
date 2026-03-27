import { Text, View } from '@react-pdf/renderer';
import { globalStyles, pdfColors } from '../styles';

interface PDFFooterProps {
  generatedDate: string;
}

export const PDFFooter = ({ generatedDate }: PDFFooterProps) => (
  <View style={globalStyles.footer} fixed>
    <Text style={{ fontSize: 8, color: pdfColors.mutedText }}>
      EntireFM — entirefm.com — Confidential FM Document
    </Text>
    <Text style={{ fontSize: 8, color: pdfColors.mutedText }} render={({ pageNumber, totalPages }) => (
      `Page ${pageNumber} of ${totalPages}`
    )} />
    <Text style={{ fontSize: 8, color: pdfColors.mutedText }}>
      Generated: {generatedDate}
    </Text>
  </View>
);
