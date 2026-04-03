import { Text, View, Image } from '@react-pdf/renderer';
import { globalStyles, pdfColors } from '../styles';
import path from 'path';

interface PDFHeaderProps {
  documentTitle: string;
  documentRef: string;
}

// In Next.js, we can resolve the logo from the public directory
const logoPath = path.join(process.cwd(), 'public/logo.png');

export const PDFHeader = ({ documentTitle, documentRef }: PDFHeaderProps) => (
  <View style={globalStyles.header} fixed>
    <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
      {/* Official Butterfly Logo */}
      <Image 
        src={logoPath} 
        style={{ width: 36, height: 36, objectFit: 'contain' }} 
      />
      <View>
        <Text style={{ color: pdfColors.white, fontSize: 13, fontWeight: 'bold', letterSpacing: 1.5 }}>
          EntireFM
        </Text>
        <Text style={{ color: pdfColors.gold, fontSize: 6, fontWeight: 'medium', letterSpacing: 1, textTransform: 'uppercase' }}>
          National Facilities Management
        </Text>
      </View>
    </View>

    <View style={{ alignItems: 'flex-end', borderLeftWidth: 1, borderLeftColor: 'rgba(255,255,255,0.1)', paddingLeft: 15 }}>
      <Text style={{ color: pdfColors.white, fontSize: 8, fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: 1, marginBottom: 2 }}>
        {documentTitle}
      </Text>
      <Text style={{ color: 'rgba(255,255,255,0.6)', fontSize: 7, fontFamily: 'Courier' }}>
        Ref: {documentRef}
      </Text>
    </View>
  </View>
);
