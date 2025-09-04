// CMS Configuration for Optimizely SaaS
export const cmsConfig = {
  // Application configuration
  app: {
    name: 'nextjs',
    apiId: 'nextjs',
    url: 'https://localhost:3000'
  },
  
  // Content types that can be managed in CMS
  contentTypes: {
    pages: {
      home: {
        name: 'Home Page',
        path: '/',
        component: 'HomePage',
        fields: ['title', 'description', 'heroImage', 'ctaText']
      },
      about: {
        name: 'About Page',
        path: '/about',
        component: 'AboutPage',
        fields: ['title', 'description', 'companyInfo', 'teamMembers']
      },
      services: {
        name: 'Services Page',
        path: '/services',
        component: 'ServicesPage',
        fields: ['title', 'description', 'servicesList', 'pricing']
      },
      contact: {
        name: 'Contact Page',
        path: '/contact',
        component: 'ContactPage',
        fields: ['title', 'description', 'contactInfo', 'formFields']
      }
    },
    
    components: {
      hero: {
        name: 'Hero Section',
        component: 'HeroSection',
        fields: ['title', 'subtitle', 'image', 'ctaButton']
      },
      serviceCard: {
        name: 'Service Card',
        component: 'ServiceCard',
        fields: ['title', 'description', 'icon', 'link']
      },
      contactForm: {
        name: 'Contact Form',
        component: 'ContactForm',
        fields: ['formFields', 'submitText', 'successMessage']
      }
    }
  },
  
  // Preview configuration
  preview: {
    baseUrl: '/preview',
    parameters: {
      key: 'preview_key',
      version: 'ver',
      locale: 'loc',
      context: 'ctx'
    }
  },
  
  // API configuration
  api: {
    tokenPrefix: 'Bearer'
  }
};

// Content structure for CMS
export const contentStructure = {
  root: {
    children: ['home', 'about', 'services', 'contact']
  },
  home: {
    type: 'page',
    template: 'home',
    children: ['hero', 'features', 'cta']
  },
  about: {
    type: 'page',
    template: 'about',
    children: ['companyInfo', 'team', 'values']
  },
  services: {
    type: 'page',
    template: 'services',
    children: ['servicesList', 'pricing', 'testimonials']
  },
  contact: {
    type: 'page',
    template: 'contact',
    children: ['contactInfo', 'contactForm', 'map']
  }
};

// Field definitions for CMS content types
export const fieldDefinitions = {
  title: {
    type: 'string',
    required: true,
    maxLength: 100
  },
  description: {
    type: 'text',
    required: false,
    maxLength: 500
  }
};
