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

interface IndexationAlertProps {
  siteUrl: string;
  droppedPages: Array<{ url: string; previouslyIndexed: boolean }>;
  dashboardUrl: string;
}

export const IndexationAlert = ({
  siteUrl,
  droppedPages,
  dashboardUrl,
}: IndexationAlertProps) => (
  <Html>
    <Head />
    <Preview>GSC Alert: Indexation issues detected on {siteUrl}</Preview>
    <Body style={main}>
      <Container style={container}>
        <Heading style={h1}>⚠️ Indexation Issues Detected</Heading>
        
        <Text style={text}>
          Google Search Console has detected indexation issues for your site <strong>{siteUrl}</strong>.
        </Text>

        <Section style={alertBox}>
          <Text style={{ ...text, margin: 0, fontWeight: 'bold' }}>
            {droppedPages.length} page{droppedPages.length > 1 ? 's' : ''} dropped from Google's index
          </Text>
        </Section>

        <Heading style={h2}>Affected Pages:</Heading>
        
        {droppedPages.slice(0, 10).map((page, idx) => (
          <Text key={idx} style={{ ...text, marginBottom: '8px', fontSize: '14px' }}>
            • <Link href={page.url} style={link}>{page.url}</Link>
          </Text>
        ))}

        {droppedPages.length > 10 && (
          <Text style={text}>
            ...and {droppedPages.length - 10} more pages
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

export default IndexationAlert;

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
  backgroundColor: '#fef3c7',
  border: '2px solid #f59e0b',
  borderRadius: '6px',
  padding: '16px',
  margin: '20px 0',
};

const link = {
  color: '#2563eb',
  textDecoration: 'underline',
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