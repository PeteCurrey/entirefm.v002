

## Admin Panel CRM Enhancement Plan

This plan transforms the existing admin panel into a comprehensive CRM and business management hub by enhancing operational features, marketing capabilities, and adding a robust settings system.

---

### Overview of Current State

The admin panel currently includes:
- **Dashboard** with basic stats for proposals and contacts
- **Proposals Dashboard** for managing incoming quote requests
- **Contact Submissions** management
- **CAFM Jobs** and **Helpdesk Jobs** with detail views, status workflows, activity logs, and PDF export
- **Marketing Hub** with AI content generation, social media scheduling, SEO tools, and media studio
- **Page Management** for dynamic pages
- **Client Logos** management
- **Search Analytics** and **Link Health** monitoring

---

### Part 1: New Database Tables

#### 1.1 System Settings Table
```sql
CREATE TABLE admin_settings (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  setting_key TEXT NOT NULL UNIQUE,
  setting_value JSONB NOT NULL,
  category TEXT NOT NULL DEFAULT 'general',
  description TEXT,
  updated_at TIMESTAMPTZ DEFAULT now(),
  updated_by UUID REFERENCES auth.users(id)
);
```

Settings will include:
- `job_number_prefix`: Default prefix for job references (e.g., "EFM-")
- `job_number_next`: Next sequential number
- `invoice_prefix`: Invoice number prefix
- `invoice_next`: Next invoice number
- `company_email`: Default notification email
- `notification_settings`: Email notification preferences

#### 1.2 API Integrations Table
```sql
CREATE TABLE api_integrations (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  service_type TEXT NOT NULL,
  credentials JSONB,
  is_active BOOLEAN DEFAULT true,
  last_tested TIMESTAMPTZ,
  test_status TEXT,
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);
```

Supported integrations:
- Google Search Console (already partially implemented)
- Resend (email - already configured)
- Social media platforms (LinkedIn, Twitter, Facebook)
- Google Analytics
- Custom webhooks

#### 1.3 Email Templates Table
```sql
CREATE TABLE email_templates (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  subject TEXT NOT NULL,
  body_html TEXT NOT NULL,
  body_text TEXT,
  template_type TEXT NOT NULL,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);
```

---

### Part 2: Enhanced Admin Dashboard

#### 2.1 Improved Dashboard Layout
- **Revenue Pipeline Widget**: Show proposals by stage with estimated values
- **Recent Activity Feed**: Real-time updates from all modules (jobs, contacts, proposals)
- **Quick Actions Grid**: One-click access to common tasks
- **System Health Panel**: API status, email delivery rates, link health score
- **Calendar Widget**: Upcoming scheduled content and social posts

#### 2.2 New Dashboard Components
```text
+------------------------------------------+
|  Admin Dashboard                         |
+------------------------------------------+
| [Revenue Pipeline]  | [System Health]    |
| New: 5   Won: 12    | Emails: OK         |
| Value: £125k        | APIs: 2/3 Active   |
+---------------------+--------------------+
| [Quick Stats - 6 cards as today]         |
+------------------------------------------+
| [Activity Feed]     | [Calendar]         |
| - New proposal...   | Feb 5: Blog post   |
| - Job completed...  | Feb 7: Social post |
+---------------------+--------------------+
```

---

### Part 3: Operational Enhancements

#### 3.1 Proposals CRM Enhancement
- **Pipeline View**: Kanban board showing proposals by status
- **Estimated Value Field**: Add revenue tracking
- **Follow-up Reminders**: Scheduled task tracking
- **Email Templates**: Quick responses to proposals
- **Conversion Analytics**: Win rate, average deal size, time to close

#### 3.2 Contacts Enhancement
- **Contact Timeline**: All interactions with a contact in one view
- **Lead Scoring**: Automatic scoring based on engagement
- **Tagging System**: Categorize contacts by source, interest, priority
- **Bulk Actions**: Mass email, status updates, export

#### 3.3 Supplier Applications Management
A new page to manage supplier applications:
- List view with status filtering
- Detail view with document downloads
- Approval workflow
- Notes and communication history

#### 3.4 Jobs Enhancement
- **Bulk Export**: Export multiple jobs to PDF or CSV
- **Assignment Tracking**: Who is handling each job
- **SLA Monitoring**: Track response times against targets
- **Recurring Job Templates**: For PPM schedules

---

### Part 4: Marketing Enhancements

#### 4.1 Content Calendar
- Visual calendar view of all content and social posts
- Drag-and-drop rescheduling
- Content status at a glance
- Publishing queue management

#### 4.2 Email Campaign Manager
- Create email campaigns using templates
- Track open rates and click rates
- Segment contacts for targeting
- A/B testing support

#### 4.3 Analytics Dashboard
- Consolidate Google Search Console data
- Content performance metrics
- Social engagement tracking
- Lead source attribution

---

### Part 5: Settings Page (`/admin/settings`)

#### 5.1 General Settings Tab
```text
+------------------------------------------+
| General Settings                         |
+------------------------------------------+
| Company Information                      |
| - Company Name: [input]                  |
| - Primary Email: [input]                 |
| - Support Email: [input]                 |
+------------------------------------------+
| Job Numbering                            |
| - Prefix: [EFM-]   Next Number: [0045]   |
| [Preview: EFM-0045]                      |
+------------------------------------------+
| Invoice Numbering                        |
| - Prefix: [INV-]   Next Number: [0001]   |
| [Preview: INV-0001]                      |
+------------------------------------------+
```

#### 5.2 User Management Tab
- List all admin users
- Add/remove admin role
- View user activity
- Manage permissions (future: role-based access)

```text
+------------------------------------------+
| User Management                          |
+------------------------------------------+
| [Search users...]                        |
+------------------------------------------+
| Email           | Role  | Last Login     |
+------------------------------------------+
| admin@...       | Admin | 2 hours ago    |
| user@...        | Admin | 5 days ago     |
+------------------------------------------+
| [+ Add Admin User]                       |
+------------------------------------------+
```

#### 5.3 Email Configuration Tab
- Sender name and email
- Email footer settings
- Notification preferences (which events trigger emails)
- Email template management

#### 5.4 Integrations Tab
```text
+------------------------------------------+
| API Integrations                         |
+------------------------------------------+
| [Google Search Console]                  |
| Status: Connected | [Test] [Disconnect]  |
+------------------------------------------+
| [Resend Email]                           |
| Status: Connected | [Test]               |
| API Key: ••••••••••                      |
+------------------------------------------+
| [LinkedIn]                               |
| Status: Not Connected | [Connect]        |
+------------------------------------------+
| [Twitter/X]                              |
| Status: Not Connected | [Connect]        |
+------------------------------------------+
| [Google Analytics]                       |
| Status: Not Connected | [Connect]        |
| Measurement ID: [input]                  |
+------------------------------------------+
```

#### 5.5 Notifications Tab
- Configure which events trigger email notifications
- Set up webhook endpoints for external integrations
- Alert preferences for system issues

---

### Part 6: Implementation Files

#### New Pages
| File | Purpose |
|------|---------|
| `src/pages/admin/Settings.tsx` | Main settings page with tabs |
| `src/pages/admin/SupplierApplications.tsx` | Supplier application management |
| `src/pages/admin/ContentCalendar.tsx` | Visual content scheduling |
| `src/pages/admin/EmailCampaigns.tsx` | Email campaign management |

#### New Components
| File | Purpose |
|------|---------|
| `src/components/admin/settings/GeneralSettings.tsx` | Company and numbering config |
| `src/components/admin/settings/UserManagement.tsx` | Admin user management |
| `src/components/admin/settings/EmailSettings.tsx` | Email configuration |
| `src/components/admin/settings/IntegrationsSettings.tsx` | API key management |
| `src/components/admin/settings/NotificationSettings.tsx` | Alert configuration |
| `src/components/admin/dashboard/ActivityFeed.tsx` | Recent activity component |
| `src/components/admin/dashboard/PipelineWidget.tsx` | Revenue pipeline display |
| `src/components/admin/dashboard/SystemHealth.tsx` | API status monitor |
| `src/components/admin/proposals/ProposalKanban.tsx` | Pipeline kanban board |

#### Edge Functions
| Function | Purpose |
|----------|---------|
| `supabase/functions/test-integration/index.ts` | Test API connections |
| `supabase/functions/send-campaign-email/index.ts` | Bulk email sending |

---

### Part 7: Navigation Updates

Update `AdminLayout.tsx` to include new navigation items:

```text
Dashboard
Proposals (→ with Kanban view toggle)
Contacts
Helpdesk Jobs
CAFM Jobs
Suppliers (NEW)
Marketing
  ├── Dashboard
  ├── Content
  ├── Calendar (NEW)
  ├── Social Media
  ├── Email Campaigns (NEW)
  ├── AI Media
  └── SEO Tools
Pages
Client Logos
Analytics
  ├── Search Analytics
  └── Link Health
Settings (NEW)
  ├── General
  ├── Users
  ├── Email
  ├── Integrations
  └── Notifications
```

---

### Part 8: Route Configuration

Add to `App.tsx`:
```typescript
// Settings Routes
<Route path="settings" element={<Settings />} />
<Route path="settings/users" element={<UserManagement />} />
<Route path="settings/integrations" element={<IntegrationsSettings />} />

// New Operational Routes
<Route path="suppliers" element={<SupplierApplications />} />

// New Marketing Routes
<Route path="marketing/calendar" element={<ContentCalendar />} />
<Route path="marketing/campaigns" element={<EmailCampaigns />} />
```

---

### Technical Notes

1. **All data is real** - no mock data. Components will query the database directly using Supabase client.

2. **Settings storage** - The `admin_settings` table uses JSONB for flexible value storage, allowing different setting types (strings, numbers, objects).

3. **Integration credentials** - Stored securely in the `api_integrations` table with sensitive fields. For production secrets like API keys, the existing Supabase secrets mechanism is used.

4. **User management** - Leverages the existing `user_roles` table and `has_role()` function for admin verification.

5. **Activity logging** - Extends the existing `job_activity_logs` pattern to track changes across all modules.

6. **Email system** - Uses the existing Resend integration with new templates for campaigns.

---

### Security Considerations

- All new tables will have RLS policies requiring admin role
- API credentials stored in database are encrypted at rest by Supabase
- Sensitive operations logged in activity tables
- User management restricted to existing admins only

