# Analytics Setup Guide

This portfolio includes Google Analytics 4 (GA4) tracking to monitor visitor behavior, page views, and custom events.

## Features Tracked

### Automatic Tracking
- **Page Views**: Every page visit is tracked
- **User Sessions**: Number of unique visitors and session duration
- **Device & Browser**: What devices and browsers visitors use
- **Geographic Location**: Where visitors are from

### Custom Events
- **Resume Downloads**: Track when users download your CV
- **Tab Changes**: Monitor which sections users view most (Me, Projects, Skills, etc.)
- **Project Views**: Track carousel navigation through projects
- **Project Link Clicks**: See which project links users click
- **Chat Interactions**: Monitor chat usage (user messages and AI responses)
- **Social Link Clicks**: Track clicks to LinkedIn, GitHub, Twitter

## Setup Instructions

### 1. Create Google Analytics Account

**Important**: You need **Google Analytics 4 (GA4)**, NOT Google Tag Manager. These are different services.

1. Go to [Google Analytics](https://analytics.google.com) (NOT tagmanager.google.com)
2. Sign in with your Google account
3. Click "Start measuring" or "Admin" > "Create Account"
4. Fill in account details:
   - Account name: "Portfolio Analytics" (or your preference)
   - Check data sharing settings as desired
5. Click "Next"

### 2. Set up a Property

1. Property name: "Dennis Atonya Portfolio" (or your preference)
2. Reporting time zone: Select your timezone
3. Currency: Select your currency
4. Click "Next"

### 3. Configure Business Information

1. Industry category: "Technology"
2. Business size: Select appropriate size
3. How you plan to use Analytics: Check relevant boxes
4. Click "Create"

### 4. Accept Terms of Service

1. Select your country
2. Check both boxes to accept terms
3. Click "Accept"

### 5. Set up Data Stream

1. Select "Web" as the platform
2. Website URL: `https://dentonya.github.io`
3. Stream name: "Portfolio Website"
4. Click "Create stream"

### 6. Get Your Measurement ID

1. After creating the stream, you'll see your **Measurement ID**
2. It looks like: `G-XXXXXXXXXX` (starts with "G-", not "GTM-")
3. **Note**: If you see "GTM-XXXXXX", you're in Google Tag Manager (wrong service)
4. Copy this ID

### 7. Add Measurement ID to Your Project

1. In your `ai-portfolio` folder, create or edit `.env.local`:
   ```bash
   NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
   ```
2. Replace `G-XXXXXXXXXX` with your actual Measurement ID
3. Save the file

### 8. Deploy Your Changes

```bash
cd ai-portfolio
npm run build
npm run deploy
```

Wait 1-2 minutes for GitHub Pages to update, then visit your site.

## Setting Up Email Reports

**Important**: Set up email reports AFTER deploying your site and collecting some data (wait 24-48 hours).

### Option 1: Quick Setup - Automated Insights (Recommended for Beginners)

1. In Google Analytics, go to **Admin** (bottom left, gear icon)
2. Under **Property** column, click **Property Settings**
3. Scroll down and look for **Email notifications** section
4. Toggle on **Insights notifications**
5. Enter your email address: `denatonya@gmail.com`
6. Google will automatically send you insights about:
   - Unusual traffic changes
   - New user trends
   - Popular pages/sections
   - Custom events (resume downloads, chat usage, etc.)

### Option 2: Custom Daily/Weekly Reports

1. In Google Analytics, click on **Reports** (left sidebar)
2. Go to **Library** at the bottom left
3. Click **Create new report** or use a template
4. Build your custom report with metrics you care about:
   - **Users**: Total visitors
   - **Sessions**: Number of visits
   - **Events**: Resume downloads, tab changes, project views, chat messages
   - **Pages**: Most viewed sections
5. Once report is ready, click **Share** (top right)
6. Select **Schedule email delivery**
7. Configure:
   - **Frequency**: Daily, Weekly, or Monthly
   - **Day/Time**: When you want to receive it (e.g., Every Monday at 9 AM)
   - **Recipients**: `denatonya@gmail.com`
   - **Format**: PDF (visual) or CSV (data)
   - **Subject**: "Portfolio Analytics Report"
8. Click **Schedule**

### Option 3: Real-time Alerts

1. Go to **Admin** > **Custom Definitions** > **Custom metrics**
2. Set up alerts for specific events:
   - When someone downloads your resume
   - When chat is used 5+ times in a day
   - When a project link is clicked
3. Google will email you when these thresholds are met

### Custom Reports for Specific Events

1. Go to **Reports** > **Engagement** > **Events**
2. You'll see all custom events:
   - `download` (Resume downloads)
   - `tab_change` (Section navigation)
   - `view_project` (Project carousel views)
   - `click_project_link` (Project link clicks)
   - `chat_message` (Chat interactions)
   - `click_social` (Social media clicks)
3. Click on any event to see details
4. Click **Share** > **Schedule email** to get daily reports for specific events

### Using GA4 Dashboard

Visit [analytics.google.com](https://analytics.google.com) to see:

- **Real-time**: Current active users on your site
- **Life cycle > Acquisition**: How users found your site
- **Life cycle > Engagement**: What pages/sections users viewed
- **Life cycle > Monetization**: (Not applicable for portfolio)
- **User > Demographics**: Age, gender, location of visitors
- **User > Tech**: Devices, browsers, screen resolutions

## Tracked Events Reference

| Event Name | Category | Description |
|------------|----------|-------------|
| `download` | Resume | User downloaded CV |
| `tab_change` | Navigation | User switched tabs |
| `view_project` | Projects | User viewed project in carousel |
| `click_project_link` | Projects | User clicked "Visit" on project |
| `chat_message` | Chat | User or AI sent a message |
| `click_social` | Social | User clicked social media link |

## Privacy Considerations

- GA4 is GDPR compliant when configured properly
- User data is anonymized by default
- No personally identifiable information (PII) is tracked
- Consider adding a privacy policy to your site

## Troubleshooting

### Analytics not working?

1. Check that `.env.local` has the correct Measurement ID
2. Verify the format: `NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX`
3. Rebuild and redeploy: `npm run build && npm run deploy`
4. Wait 24-48 hours for data to appear in GA4 (real-time view works immediately)
5. Check browser console for errors
6. Ensure ad blockers are disabled when testing

### Not seeing custom events?

1. Go to **Admin** > **Events** > **Create event**
2. Create custom event conversions if needed
3. Events may take 24 hours to appear in reports
4. Check **Real-time** > **Event count** to see immediate results

## Support

For more help:
- [GA4 Documentation](https://support.google.com/analytics/answer/9304153)
- [GA4 Event Tracking](https://support.google.com/analytics/answer/9267735)
- [Email Reports Setup](https://support.google.com/analytics/answer/1151300)
