import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Link,
  Preview,
  Section,
  Text,
} from 'npm:@react-email/components@0.0.22';
import * as React from 'npm:react@18.3.1';

interface PerformanceDropAlertProps {
  siteUrl: string;
  metrics: {
    clicksDrop: number;
    impressionsDrop: number;
    affectedPages: number;
  };
  topAffectedPages: Array<{ url: string; clicksChange: number; impressionsChange: number }>;
  dashboardUrl: string;
}

export const PerformanceDropAlert = ({
  siteUrl,
  metrics,
  topAffectedPages,
  dashboardUrl,
}: PerformanceDropAlertProps) => (
  <Html>
    <Head />
    <Preview>GSC Alert: Performance drop detected on {siteUrl}</Preview>
    <Body style={main}>
      <Container style={container}>
        <Heading style={h1}>📉 Performance Drop Detected</Heading>
        
        <Text style={text}>
          Google Search Console has detected a significant drop in search performance for <strong>{siteUrl}</strong>.
        </Text>

        <Section style={metricsContainer}>
          <Section style={metricBox}>
            <Text style={metricLabel}>Clicks</Text>
            <Text style={metricValue}>
              {metrics.clicksDrop > 0 ? '-' : '+'}{Math.abs(metrics.clicksDrop).toFixed(1)}%
            </Text>
          </Section>
          <Section style={metricBox}>
            <Text style={metricLabel}>Impressions</Text>
            <Text style={metricValue}>
              {metrics.impressionsDrop > 0 ? '-' : '+'}{Math.abs(metrics.impressionsDrop).toFixed(1)}%
            </Text>
          </Section>
          <Section style={metricBox}>
            <Text style={metricLabel}>Affected Pages</Text>
            <Text style={metricValue}>{metrics.affectedPages}</Text>
          </Section>
        </Section>

        <Heading style={h2}>Most Affected Pages:</Heading>
        
        {topAffectedPages.map((page, idx) => (
          <Section key={idx} style={pageItem}>
            <Text style={{ ...text, margin: '0 0 4px 0', fontSize: '14px' }}>
              <Link href={page.url} style={link}>{page.url}</Link>
            </Text>
            <Text style={{ ...text, margin: 0, fontSize: '12px', color: '#666' }}>
              Clicks: {page.clicksChange > 0 ? '+' : ''}{page.clicksChange.toFixed(1)}% | 
              Impressions: {page.impressionsChange > 0 ? '+' : ''}{page.impressionsChange.toFixed(1)}%
            </Text>
          </Section>
        ))}

        <Section style={buttonContainer}>
          <Link href={dashboardUrl} style={button}>
            View Full Report in Dashboard
          </Link>
        </Section>

        <Section style={tipBox}>
          <Text style={{ ...text, margin: '0 0 8px 0', fontWeight: 'bold' }}>
            💡 Quick Actions:
          </Text>
          <Text style={{ ...text, margin: '0 0 4px 0', fontSize: '14px' }}>
            • Check for recent algorithm updates
          </Text>
          <Text style={{ ...text, margin: '0 0 4px 0', fontSize: '14px' }}>
            • Review content quality and freshness
          </Text>
          <Text style={{ ...text, margin: 0, fontSize: '14px' }}>
            • Analyze competitor rankings
          </Text>
        </Section>

        <Text style={{ ...text, marginTop: '32px', fontSize: '12px', color: '#666' }}>
          You're receiving this email because you enabled GSC alerts in your dashboard.
          To manage your alert preferences, visit your dashboard settings.
        </Text>
      </Container>
    </Body>
  </Html>
);

export default PerformanceDropAlert;

const main = {
  backgroundColor: '#f6f9fc',
  fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
};

const container = {
  backgroundColor: '#ffffff',
  margin: '0 auto',
  padding: '40px 20px',
  marginBottom: '64px',
  borderRadius: '8px',
  maxWidth: '600px',
};

const h1 = {
  color: '#1a1a1a',
  fontSize: '24px',
  fontWeight: 'bold',
  margin: '0 0 20px',
};

const h2 = {
  color: '#1a1a1a',
  fontSize: '18px',
  fontWeight: 'bold',
  margin: '24px 0 12px',
};

const text = {
  color: '#404040',
  fontSize: '16px',
  lineHeight: '24px',
  margin: '16px 0',
};

const metricsContainer = {
  display: 'flex',
  gap: '16px',
  margin: '24px 0',
};

const metricBox = {
  flex: '1',
  backgroundColor: '#f9fafb',
  border: '1px solid #e5e7eb',
  borderRadius: '8px',
  padding: '16px',
  textAlign: 'center' as const,
};

const metricLabel = {
  color: '#6b7280',
  fontSize: '12px',
  fontWeight: '600',
  textTransform: 'uppercase' as const,
  margin: '0 0 8px 0',
};

const metricValue = {
  color: '#dc2626',
  fontSize: '24px',
  fontWeight: 'bold',
  margin: 0,
};

const pageItem = {
  backgroundColor: '#f9fafb',
  border: '1px solid #e5e7eb',
  borderRadius: '6px',
  padding: '12px',
  marginBottom: '12px',
};

const link = {
  color: '#2563eb',
  textDecoration: 'underline',
  wordBreak: 'break-all' as const,
};

const buttonContainer = {
  textAlign: 'center' as const,
  margin: '32px 0',
};

const button = {
  backgroundColor: '#2563eb',
  borderRadius: '6px',
  color: '#fff',
  fontSize: '16px',
  fontWeight: 'bold',
  textDecoration: 'none',
  textAlign: 'center' as const,
  display: 'inline-block',
  padding: '12px 24px',
};

const tipBox = {
  backgroundColor: '#dbeafe',
  border: '1px solid #3b82f6',
  borderRadius: '6px',
  padding: '16px',
  margin: '24px 0',
};