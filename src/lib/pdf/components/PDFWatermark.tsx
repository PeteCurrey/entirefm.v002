import { Text, View } from '@react-pdf/renderer';
import { globalStyles, pdfColors } from '../styles';

export const PDFWatermark = () => (
  <View style={{
    position: 'absolute',
    top: 0, 
    left: 0, 
    right: 0, 
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: -1
  }}>
    <Text style={{
      fontSize: 96,
      fontWeight: 700,
      color: pdfColors.navy,
      opacity: 0.04,
      transform: 'rotate(-35deg)',
      textAlign: 'center',
      letterSpacing: 8
    }}>
      EntireFM
    </Text>
    <Text style={{
      fontSize: 42,
      fontWeight: 400,
      color: pdfColors.navy,
      opacity: 0.03,
      transform: 'rotate(-35deg)',
      textAlign: 'center',
      marginTop: -20,
      letterSpacing: 4
    }}>
      entirefm.com
    </Text>
  </View>
);
