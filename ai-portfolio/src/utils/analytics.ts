// Google Analytics event tracking utilities

declare global {
  interface Window {
    gtag?: (
      command: string,
      targetId: string,
      config?: Record<string, any>
    ) => void;
  }
}

// Track page view
export const trackPageView = (url: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || '', {
      page_path: url,
    });
  }
};

// Track custom events
export const trackEvent = (
  action: string,
  category: string,
  label?: string,
  value?: number
) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

// Track resume download
export const trackResumeDownload = () => {
  trackEvent('download', 'Resume', 'CV Download', 1);
};

// Track tab changes
export const trackTabChange = (tabName: string) => {
  trackEvent('tab_change', 'Navigation', tabName);
};

// Track project view
export const trackProjectView = (projectName: string) => {
  trackEvent('view_project', 'Projects', projectName);
};

// Track project link click
export const trackProjectLinkClick = (projectName: string, url: string) => {
  trackEvent('click_project_link', 'Projects', `${projectName} - ${url}`);
};

// Track chat interaction
export const trackChatMessage = (messageType: 'user' | 'assistant') => {
  trackEvent('chat_message', 'Chat', messageType);
};

// Track social link click
export const trackSocialClick = (platform: string, url: string) => {
  trackEvent('click_social', 'Social', `${platform} - ${url}`);
};
