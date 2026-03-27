import { Text, View } from '@react-pdf/renderer';
import { globalStyles, pdfColors } from '../styles';

interface PDFHeaderProps {
  documentTitle: string;
  documentRef: string;
}

export const PDFHeader = ({ documentTitle, documentRef }: PDFHeaderProps) => (
  <View style={globalStyles.header} fixed>
    <Text style={{ color: pdfColors.white, fontSize: 14, fontWeight: 700, letterSpacing: 2 }}>
      EntireFM
    </Text>
    <View style={{ flexDirection: 'row', gap: 12 }}>
      <Text style={{ color: pdfColors.white, fontSize: 8, opacity: 0.8 }}>
        {documentTitle}
      </Text>
      <Text style={{ color: pdfColors.white, fontSize: 8, opacity: 0.5 }}>
        |
      </Text>
      <Text style={{ color: pdfColors.white, fontSize: 8, opacity: 0.8, fontFamily: 'Courier' }}>
        {documentRef}
      </Text>
    </View>
  </View>
);
