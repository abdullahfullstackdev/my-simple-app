// Simple content mapping for CMS components
// This will be replaced by real GraphQL queries once we have the proper setup

interface ContentData {
  type: string;
  data: unknown;
  children: unknown[];
}

// CMS Content ID to Page Type Mapping
// This maps the actual content IDs from your CMS to the correct page types
const CMS_CONTENT_MAPPING: Record<string, string> = {
  // Home Page (My Company)
  '2064230fb0ee4a1493ffabc71b991b84': 'Page/Home',
  
  // About Page
  '4428457cd5a14f9dac808ce5c4e76211': 'Page/About',
  
  // Contact Page
  '85790617303449f68a56aa201a9efef7': 'Page/Contact',
  
  // Services Page
  '10122d697db64ba6b9780ef48b7f8e4f': 'Page/Services',
  
  // NewsListing Page (child of Home page)
  '256816101bdd459687a487910c3da818': 'Page/NewsListing',
};

// Get content by path
export async function getContentByPath(path: string): Promise<ContentData | null> {
  try {
    // Map paths to content types (using the prefixed types from CmsFactory)
    const contentMap: Record<string, ContentData> = {
      'home': {
        type: 'Page/Home',
        data: {
          empty: { key: 'home' }
        },
        children: []
      },
      'about': {
        type: 'Page/About',
        data: {
          empty: { key: 'about' }
        },
        children: []
      },
      'services': {
        type: 'Page/Services',
        data: {
          empty: { key: 'services' }
        },
        children: []
      },
      'contact': {
        type: 'Page/Contact',
        data: {
          empty: { key: 'contact' }
        },
        children: []
      }
    };

    // Handle root path
    if (path === '' || path === 'home') {
      return contentMap['home'];
    }

    return contentMap[path] || null;
  } catch (error) {
    console.error('Error fetching content:', error);
    return null;
  }
}

// Get content by ID (for preview mode)
export async function getContentById(id: string): Promise<ContentData | null> {
  try {
    console.log('getContentById called with ID:', id);
    
    // First, check if we have a direct mapping for this content ID
    if (CMS_CONTENT_MAPPING[id]) {
      const pageType = CMS_CONTENT_MAPPING[id];
      console.log('Found direct mapping for ID:', id, '→', pageType);
      
      // For NewsListing, try to fetch real data from CMS
      if (pageType === 'Page/NewsListing') {
        try {
          // Import GraphQL client and use direct query
          const { createClient } = await import('@remkoj/optimizely-graph-client');
          const { gql } = await import('graphql-request');
          const client = createClient();
          
          console.log('Attempting direct GraphQL query for NewsListing with ID:', id);
          
          // Use the same query that works in your playground
          const query = gql`
            query GetNewsListing($id: String!) {
              NewsListing(where: { _metadata: { key: { eq: $id } } }) {
                items {
                  NewsTitle
                  NewsDescription
                  _metadata {
                    key
                  }
                }
              }
            }
          `;
          
          const result = await client.request(query, { id });
          console.log('Direct GraphQL query result:', result);
          
          if (result?.NewsListing?.items?.[0]) {
            const item = result.NewsListing.items[0];
            console.log('Fetched real CMS data:', item);
            console.log('NewsTitle:', item.NewsTitle);
            console.log('NewsDescription:', item.NewsDescription);
            
            return {
              type: 'Page/NewsListing',
              data: {
                NewsTitle: item.NewsTitle || 'Fallback Title',
                NewsDescription: item.NewsDescription || 'Fallback Description'
              },
              children: []
            };
          } else {
            console.log('No items found in direct GraphQL result');
          }
        } catch (graphqlError) {
          console.error('Direct GraphQL fetch failed:', graphqlError);
          console.log('Using fallback data instead');
        }
        
        // Fallback to mock data that matches CMS fields
        console.log('Using fallback data for NewsListing');
        return {
          type: 'Page/NewsListing',
          data: { 
            NewsTitle: 'FALLBACK: Tested',
            NewsDescription: 'FALLBACK: Tested'
          },
          children: []
        };
      }
      
      // Return the appropriate content based on the page type for other pages
      const contentMap: Record<string, ContentData> = {
        'Page/Home': {
          type: 'Page/Home',
          data: { empty: { key: 'home' } },
          children: []
        },
        'Page/About': {
          type: 'Page/About',
          data: { empty: { key: 'about' } },
          children: []
        },
        'Page/Services': {
          type: 'Page/Services',
          data: { empty: { key: 'services' } },
          children: []
        },
        'Page/Contact': {
          type: 'Page/Contact',
          data: { empty: { key: 'contact' } },
          children: []
        }
      };
      
      return contentMap[pageType];
    }
    
    console.log('No direct mapping found for ID:', id);
    
    // Fallback: try to determine from the ID itself (old logic)
    const lowerId = id.toLowerCase();
    if (lowerId.includes('about') || lowerId.includes('about page')) {
      console.log('ID suggests About page, returning Page/About');
      return {
        type: 'Page/About',
        data: { empty: { key: 'about' } },
        children: []
      };
    } else if (lowerId.includes('services') || lowerId.includes('services page')) {
      console.log('ID suggests Services page, returning Page/Services');
      return {
        type: 'Page/Services',
        data: { empty: { key: 'services' } },
        children: []
      };
    } else if (lowerId.includes('contact') || lowerId.includes('contact page')) {
      console.log('ID suggests Contact page, returning Page/Contact');
      return {
        type: 'Page/Contact',
        data: { empty: { key: 'contact' } },
        children: []
      };
    } else if (lowerId.includes('home') || lowerId.includes('home page')) {
      console.log('ID suggests Home page, returning Page/Home');
      return {
        type: 'Page/Home',
        data: { empty: { key: 'home' } },
        children: []
      };
    }

    // If still no match, return home as default
    console.log('No content type determined, returning default home page');
    return {
      type: 'Page/Home',
      data: { empty: { key: 'home' } },
      children: []
    };
  } catch (error) {
    console.error('Error fetching content by ID:', error);
    return null;
  }
}
