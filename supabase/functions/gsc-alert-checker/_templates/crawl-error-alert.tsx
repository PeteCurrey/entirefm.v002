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

interface CrawlErrorAlertProps {
  siteUrl: string;
  errors: Array<{ url: string; type: string; count: number }>;
  dashboardUrl: string;
}

export const CrawlErrorAlert = ({
  siteUrl,
  errors,
  dashboardUrl,
}: CrawlErrorAlertProps) => (
  <Html>
    <Head />
    <Preview>GSC Alert: Crawl errors detected on {siteUrl}</Preview>
    <Body style={main}>
      <Container style={container}>
        <Heading style={h1}>🔴 Crawl Errors Detected</Heading>
        
        <Text style={text}>
          Google has encountered crawl errors while accessing <strong>{siteUrl}</strong>.
        </Text>

        <Section style={alertBox}>
          <Text style={{ ...text, margin: 0, fontWeight: 'bold' }}>
            {errors.length} crawl error{errors.length > 1 ? 's' : ''} detected
          </Text>
        </Section>

        <Heading style={h2}>Error Summary:</Heading>
        
        {errors.slice(0, 10).map((error, idx) => (
          <Section key={idx} style={errorItem}>
            <Text style={{ ...text, margin: '0 0 4px 0', fontWeight: 'bold', color: '#dc2626' }}>
              {error.type}
            </Text>
            <Text style={{ ...text, margin: 0, fontSize: '14px' }}>
              <Link href={error.url} style={link}>{error.url}</Link>
            </Text>
            {error.count > 1 && (
              <Text style={{ ...text, margin: '4px 0 0 0', fontSize: '12px', color: '#666' }}>
                Occurred {error.count} time{error.count > 1 ? 's' : ''}
              </Text>
            )}
          </Section>
        ))}

        {errors.length > 10 && (
          <Text style={text}>
            ...and {errors.length - 10} more errors
          </Text>
        )}

        <Section style={buttonContainer}>
          <Link href={dashboardUrl} style={button}>
            View Full Report in Dashboard
          </Link>
        </Section>

        <Text style={{ ...text, marginTop: '32px', fontSize: '12px', color: '#666' }}>
          You're receiving this email because you enabled GSC alerts in your dashboard.
          To manage your alert preferences, visit your dashboard settings.
        </Text>
      </Container>
    </Body>
  </Html>
);

export default CrawlErrorAlert;

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

const alertBox = {
  backgroundColor: '#fee2e2',
  border: '2px solid #dc2626',
  borderRadius: '6px',
  padding: '16px',
  margin: '20px 0',
};

const errorItem = {
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