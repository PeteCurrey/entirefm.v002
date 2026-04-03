import { StyleSheet, Font } from '@react-pdf/renderer';

export const pdfColors = {
  navy: '#020617',
  slate800: '#1e293b',
  slate600: '#475569',
  gold: '#f5a623',
  white: '#ffffff',
  lightGrey: '#f8fafc',
  border: '#1e293b',
  textMain: '#f8fafc',
  textDark: '#0f172a',
  muted: '#64748b',
  red: '#ef4444',
  amber: '#f59e0b',
  green: '#10b981'
};
// Removed all borderRadius references to satisfy strict renderer requirement

// Global StyleSheet
export const globalStyles = StyleSheet.create({
  page: {
    size: 'A4',
    paddingTop: 80,
    paddingBottom: 80,
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
    height: 60,
    backgroundColor: pdfColors.navy,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 40,
    zIndex: 100,
    borderBottomWidth: 2,
    borderBottomColor: '#f5a623'
  },
  footer: {
    position: 'absolute',
    bottom: 0, 
    left: 0, 
    right: 0,
    height: 40,
    borderTopWidth: 1,
    borderTopColor: '#e2e8f0',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 40,
    backgroundColor: pdfColors.white,
    zIndex: 100
  },
  h1: {
    fontSize: 26,
    fontWeight: 'bold',
    color: pdfColors.navy,
    marginBottom: 12,
    letterSpacing: -0.5
  },
  h2: {
    fontSize: 18,
    fontWeight: 'bold',
    color: pdfColors.navy,
    marginBottom: 8,
    marginTop: 20,
    textTransform: 'uppercase',
    letterSpacing: 1.5
  },
  h3: {
    fontSize: 13,
    fontWeight: 'bold',
    color: pdfColors.navy,
    marginBottom: 6,
    marginTop: 14
  },
  body: {
    fontSize: 10,
    lineHeight: 1.6,
    color: '#334155',
    marginBottom: 8
  },
  small: {
    fontSize: 8,
    color: pdfColors.muted,
    lineHeight: 1.5
  },
  goldBar: {
    height: 3,
    backgroundColor: pdfColors.gold,
    marginBottom: 20,
    width: 60
  },
  sectionBox: {
    backgroundColor: pdfColors.lightGrey,
    padding: 20,
    marginBottom: 20,
    borderLeftWidth: 4,
    borderLeftColor: '#f5a623'
  },
  tableHeaderCell: {
    backgroundColor: pdfColors.navy,
    color: pdfColors.white,
    fontSize: 8,
    fontWeight: 'bold',
    padding: 10,
    textTransform: 'uppercase',
    letterSpacing: 1.2
  },
  tableBodyCell: {
    fontSize: 9,
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f1f5f9',
    color: '#334155',
    lineHeight: 1.4
  },
  badge: {
    paddingVertical: 4,
    paddingHorizontal: 10,
    fontSize: 7,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    letterSpacing: 0.8
  }
});
