import { StyleSheet, Font } from '@react-pdf/renderer';

// Note: Using standard fonts (Helvetica, Times, Courier) for server-side stability 
// as custom web fonts can cause timeout/rendering issues in serverless environments.

// Brand Colours
export const pdfColors = {
  navy: '#0f172a',
  charcoal: '#1a2e4a',
  gold: '#f5a623',
  primary: '#f5a623',
  white: '#ffffff',
  lightGrey: '#f8f9fa',
  bodyText: '#334155',
  mutedText: '#64748b',
  borderColour: '#e2e8f0',
  red: '#dc2626',
  amber: '#d97706',
  green: '#16a34a'
};

// Global StyleSheet
export const globalStyles = StyleSheet.create({
  page: {
    size: 'A4',
    paddingTop: 70,
    paddingBottom: 70,
    paddingLeft: 40,
    paddingRight: 40,
    fontFamily: 'Helvetica',
    backgroundColor: pdfColors.white,
    position: 'relative'
  },
  header: {
    position: 'absolute',
    top: 0, 
    left: 0, 
    right: 0,
    height: 50,
    backgroundColor: pdfColors.navy,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 40,
    zIndex: 100
  },
  footer: {
    position: 'absolute',
    bottom: 0, 
    left: 0, 
    right: 0,
    height: 40,
    borderTopWidth: 1,
    borderTopColor: pdfColors.borderColour,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 40,
    backgroundColor: pdfColors.white,
    zIndex: 100
  },
  h1: {
    fontSize: 28,
    fontWeight: 'bold',
    color: pdfColors.navy,
    marginBottom: 10,
    letterSpacing: -1
  },
  h2: {
    fontSize: 18,
    fontWeight: 'bold',
    color: pdfColors.navy,
    marginBottom: 6,
    marginTop: 16
  },
  h3: {
    fontSize: 14,
    fontWeight: 'bold',
    color: pdfColors.navy,
    marginBottom: 4,
    marginTop: 12
  },
  body: {
    fontSize: 10,
    lineHeight: 1.5,
    color: pdfColors.bodyText,
    marginBottom: 6
  },
  small: {
    fontSize: 8,
    color: pdfColors.mutedText,
    lineHeight: 1.4
  },
  goldBar: {
    height: 2,
    backgroundColor: pdfColors.gold,
    marginBottom: 16
  },
  sectionBox: {
    backgroundColor: pdfColors.lightGrey,
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: pdfColors.borderColour
  },
  tableHeaderCell: {
    backgroundColor: pdfColors.navy,
    color: pdfColors.white,
    fontSize: 8,
    fontWeight: 'bold',
    padding: 8,
    textTransform: 'uppercase'
  },
  tableBodyCell: {
    fontSize: 9,
    padding: 8,
    borderBottomWidth: 1,
    borderBottomColor: pdfColors.borderColour,
    color: pdfColors.bodyText
  },
  badge: {
    borderRadius: 4,
    paddingVertical: 2,
    paddingHorizontal: 6,
    fontSize: 7,
    fontWeight: 'bold',
    textTransform: 'uppercase'
  }
});
