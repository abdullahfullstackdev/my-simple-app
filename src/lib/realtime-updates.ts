// Real-time updates for Optimizely CMS
// This handles the optimizely:cms:contentSaved event for live preview updates

export function setupRealtimeUpdates() {
  if (typeof window === 'undefined') return;

  // Listen for content save events from Optimizely CMS
  window.addEventListener('optimizely:cms:contentSaved', (event: any) => {
    console.log('Content saved event received:', event.detail);
    
    const message = event.detail;
    const newPreviewUrl = message.previewUrl;
    
    if (newPreviewUrl) {
      const urlParams = new URLSearchParams(newPreviewUrl);
      const newPreviewToken = urlParams.get('preview_token');
      
      console.log('New preview token:', newPreviewToken);
      
      // Update the current page with new content
      if (newPreviewToken) {
        // Force a page refresh to get the latest content
        window.location.reload();
      }
    }
  });

  // Listen for content publish events
  window.addEventListener('optimizely:cms:contentPublished', (event: any) => {
    console.log('Content published event received:', event.detail);
    
    // Force a page refresh to get the latest published content
    window.location.reload();
  });

  console.log('Real-time updates listener set up');
}

// Initialize real-time updates when the script loads
if (typeof window !== 'undefined') {
  setupRealtimeUpdates();
}
