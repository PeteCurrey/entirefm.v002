import { Text, View } from '@react-pdf/renderer';
import { globalStyles, pdfColors } from '../styles';

export const PDFDisclaimer = () => (
  <View style={{
    marginTop: 'auto', // Pushes to bottom of available space before footer
    paddingTop: 20,
    borderTopWidth: 1,
    borderTopColor: pdfColors.border }}>
    <Text style={{ 
      fontSize: 7, 
      color: pdfColors.muted,
      lineHeight: 1.4,
      textAlign: 'justify'
    }}>
      This document has been prepared by EntireFM as a general guide. Specific compliance requirements vary by building type, location, and sector. EntireFM recommends obtaining professional advice before implementing any maintenance or compliance programme. EntireFM Limited — Registered in England & Wales — entirefm.com
    </Text>
  </View>
);
