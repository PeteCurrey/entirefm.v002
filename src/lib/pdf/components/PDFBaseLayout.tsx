import { Page, View } from '@react-pdf/renderer';
import { globalStyles } from '../styles';
import { PDFHeader } from './PDFHeader';
import { PDFFooter } from './PDFFooter';
import { PDFWatermark } from './PDFWatermark';
import { PDFDisclaimer } from './PDFDisclaimer';
import React from 'react';

interface PDFBaseLayoutProps {
  children: React.ReactNode;
  documentTitle: string;
  referenceNumber: string;
  generatedDate: string;
  showDisclaimer?: boolean;
  wrap?: boolean;
  orientation?: 'portrait' | 'landscape';
}

export const PDFBaseLayout = ({ 
  children, 
  documentTitle, 
  referenceNumber, 
  generatedDate, 
  showDisclaimer = false,
  wrap = true,
  orientation = 'portrait'
}: PDFBaseLayoutProps) => (
  <Page size="A4" orientation={orientation} style={globalStyles.page} wrap={wrap}>
    <PDFWatermark />
    <PDFHeader documentTitle={documentTitle} documentRef={referenceNumber} />
    
    <View style={{ flex: 1 }}>
      {children}
    </View>

    {showDisclaimer && <PDFDisclaimer />}
    <PDFFooter generatedDate={generatedDate} />
  </Page>
);
