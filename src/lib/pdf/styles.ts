import { StyleSheet, Font } from '@react-pdf/renderer';

// Register standard fonts
Font.register({
  family: 'Inter',
  fonts: [
    { src: 'https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZ9hiA.woff2', fontWeight: 400 },
    { src: 'https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuI6fAZ9hiA.woff2', fontWeight: 500 },
    { src: 'https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuGKYAZ9hiA.woff2', fontWeight: 700 }
  ]
});

// Brand Colours
export const pdfColors = {
  navy: '#1a2e4a',
  gold: '#f5a623',
  white: '#ffffff',
  lightGrey: '#f8f9fa',
  bodyText: '#333333',
  mutedText: '#666666',
  borderColour: '#e0e0e0',
  red: '#d32f2f',
  amber: '#ffa000',
  green: '#388e3c'
};

// Global StyleSheet
export const globalStyles = StyleSheet.create({
  page: {
    size: 'A4',
    paddingTop: 80,
    paddingBottom: 100,
    paddingLeft: 50,
    paddingRight: 50,
    fontFamily: 'Inter',
    backgroundColor: pdfColors.white
  },
  header: {
    position: 'absolute',
    top: 0, 
    left: 0, 
    right: 0,
    height: 60,
    backgroundColor: pdfColors.navy,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 50
  },
  footer: {
    position: 'absolute',
    bottom: 0, 
    left: 0, 
    right: 0,
    height: 50,
    borderTopWidth: 1,
    borderTopColor: pdfColors.borderColour,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 50
  },
  h1: {
    fontSize: 24,
    fontWeight: 700,
    color: pdfColors.navy,
    marginBottom: 12
  },
  h2: {
    fontSize: 16,
    fontWeight: 700,
    color: pdfColors.navy,
    marginBottom: 8,
    marginTop: 20
  },
  h3: {
    fontSize: 13,
    fontWeight: 600,
    color: pdfColors.navy,
    marginBottom: 6,
    marginTop: 14
  },
  body: {
    fontSize: 10,
    lineHeight: 1.6,
    color: pdfColors.bodyText,
    marginBottom: 8
  },
  small: {
    fontSize: 8,
    color: pdfColors.mutedText,
    lineHeight: 1.5
  },
  goldBar: {
    height: 3,
    backgroundColor: pdfColors.gold,
    marginBottom: 20
  },
  sectionBox: {
    backgroundColor: pdfColors.lightGrey,
    borderRadius: 4,
    padding: 16,
    marginBottom: 16
  },
  tableHeaderCell: {
    backgroundColor: pdfColors.navy,
    color: pdfColors.white,
    fontSize: 9,
    fontWeight: 700,
    padding: 8
  },
  tableBodyCell: {
    fontSize: 9,
    padding: 8,
    borderBottomWidth: 1,
    borderBottomColor: pdfColors.borderColour,
    color: pdfColors.bodyText
  },
  badge: {
    borderRadius: 3,
    paddingVertical: 3,
    paddingHorizontal: 8,
    fontSize: 8,
    fontWeight: 600
  }
});
