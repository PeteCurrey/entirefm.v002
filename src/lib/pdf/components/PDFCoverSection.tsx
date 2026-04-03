import { Text, View, Image } from '@react-pdf/renderer';
import { globalStyles, pdfColors } from '../styles';

interface PDFCoverSectionProps {
  title: string;
  subtitle?: string;
  generatedFor?: string;
  generatedDate: string;
  documentType: string;
  referenceNumber: string;
  heroImage?: string;
}

export const PDFCoverSection = ({ 
  title, 
  subtitle, 
  generatedFor, 
  generatedDate, 
  referenceNumber,
  heroImage
}: PDFCoverSectionProps) => (
  <View style={{ marginBottom: 40 }}>
    <View style={{
      backgroundColor: pdfColors.navy,
      borderLeftWidth: 8,
      borderLeftColor: pdfColors.gold,
      height: 200, // Fixed height for hero section
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Background Image */}
      {heroImage && (
        <Image 
          src={heroImage}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            opacity: 0.4
          }}
        />
      )}
      
      {/* Content Overlay */}
      <View style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        padding: 40,
        paddingTop: 60,
        justifyContent: 'flex-start'
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
