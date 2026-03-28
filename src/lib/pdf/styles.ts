import { StyleSheet, Font } from '@react-pdf/renderer';

// Brand Colours from Website
export const pdfColors = {
  navy: '#020617', // Match bg-slate-950
  slate800: '#1e293b',
  slate600: '#475569',
  gold: '#f5a623',
  white: '#ffffff',
  lightGrey: '#f8fafc',
  border: '#1e293b',
  textMain: '#f8fafc', // For dark backgrounds
  textDark: '#0f172a', // For light backgrounds
  muted: '#64748b',
  red: '#ef4444',
  amber: '#f59e0b',
  green: '#10b981'
};

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
    borderBottomColor: pdfColors.gold
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
    fontSize: 24,
    fontWeight: 'bold',
    color: pdfColors.navy,
    marginBottom: 10,
    letterSpacing: -1
  },
  h2: {
    fontSize: 16,
    fontWeight: 'bold',
    color: pdfColors.navy,
    marginBottom: 6,
    marginTop: 16,
    textTransform: 'uppercase',
    letterSpacing: 1
  },
  h3: {
    fontSize: 12,
    fontWeight: 'bold',
    color: pdfColors.navy,
    marginBottom: 4,
    marginTop: 12
  },
  body: {
    fontSize: 9,
    lineHeight: 1.6,
    color: '#334155',
    marginBottom: 6
  },
  small: {
    fontSize: 8,
    color: pdfColors.muted,
    lineHeight: 1.4
  },
  goldBar: {
    height: 2,
    backgroundColor: pdfColors.gold,
    marginBottom: 16,
    width: 40
  },
  sectionBox: {
    backgroundColor: pdfColors.lightGrey,
    borderRadius: 0, // Sharp, professional edges prefered for premium look
    padding: 16,
    marginBottom: 16,
    borderLeftWidth: 3,
    borderLeftColor: pdfColors.gold
  },
  tableHeaderCell: {
    backgroundColor: pdfColors.navy,
    color: pdfColors.white,
    fontSize: 7,
    fontWeight: 'bold',
    padding: 8,
    textTransform: 'uppercase',
    letterSpacing: 1
  },
  tableBodyCell: {
    fontSize: 8,
    padding: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#f1f5f9',
    color: '#334155'
  },
  badge: {
    borderRadius: 0,
    paddingVertical: 2,
    paddingHorizontal: 6,
    fontSize: 6,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    letterSpacing: 0.5
  }
});
