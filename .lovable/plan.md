

## Make Team Members Configurable from Admin Settings

Store the team members list in the `admin_settings` table (which already exists and supports JSONB values) and load it dynamically in the Contact Submissions page.

---

### Changes

**1. Seed a default `team_members` setting (database migration)**
- Insert a row into `admin_settings` with:
  - `setting_key`: `team_members`
  - `category`: `general`
  - `setting_value`: `["John", "Sarah", "Mike", "Emma", "David"]`
  - `description`: `List of team members available for contact assignment`

**2. Add Team Members management UI to General Settings (`src/components/admin/settings/GeneralSettings.tsx`)**
- Add a new "Team Members" card below the existing settings cards
- Display the current list of team members as removable badges/chips
- Include an input field + "Add" button to add new members
- Include a "Save" button that upserts the `team_members` key in `admin_settings`
- Load the initial list from the existing `admin-settings` query (already fetches all settings)

**3. Update Contact Submissions to load team members dynamically (`src/pages/admin/ContactSubmissions.tsx`)**
- Remove the hardcoded `TEAM_MEMBERS` constant
- Add a query to fetch the `team_members` setting from `admin_settings`
- Prepend "Unassigned" to the fetched list at runtime
- Use the dynamic list in both the bulk-assign dropdown and the detail panel's assignment select

---

### Technical Details

- **No new tables needed** -- uses the existing `admin_settings` table with its JSONB `setting_value` column
- **Existing RLS** on `admin_settings` already restricts access to admin users only
- **Query key**: Reuses `["admin-settings"]` in GeneralSettings; ContactSubmissions will use `["admin-settings", "team_members"]` for a targeted fetch
- The `setting_value` field stores a JSON array of strings (e.g., `["John", "Sarah"]`)
- Fallback: if the setting doesn't exist yet, default to `["Unassigned"]`
