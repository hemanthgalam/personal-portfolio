// Google Analytics (GA4) Event Tracking Telemetry Helper

declare global {
  interface Window {
    gtag?: (command: string, action: string, params?: Record<string, any>) => void;
  }
}

/**
 * Sends a custom event log to Google Analytics (GA4) if loaded,
 * or prints it in the developer console when running locally.
 * 
 * @param eventName Name of the event trigger (e.g. 'click_linkedin', 'view_project')
 * @param eventParams Optional dictionary of event details (e.g. { project_name: 'TODO Gpt' })
 */
export const trackEvent = (eventName: string, eventParams?: Record<string, any>) => {
  if (typeof window !== 'undefined' && window.gtag) {
    try {
      window.gtag('event', eventName, {
        event_category: 'portfolio_engagement',
        ...eventParams,
        // Include common telemetry indicators automatically
        screen_size: `${window.innerWidth}x${window.innerHeight}`,
        referrer_path: document.referrer || 'direct',
        timestamp: new Date().toISOString()
      });
    } catch (error) {
      console.warn('[GA4 Tracking Error]: Failed to dispatch event.', error);
    }
  }
};
