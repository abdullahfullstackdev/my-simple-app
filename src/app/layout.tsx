import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { getServerContext } from "@remkoj/optimizely-cms-react/rsc";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Optimizely CMS SaaS Integration",
  description: "Next.js application integrated with Optimizely CMS SaaS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const context = getServerContext();
  
  return (
    <html lang={context.locale ?? "en"}>
      <body className={inter.className}>
        {children}
        <Script
          id="visual-builder-integration"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              // Visual Builder integration for direct editing
              (function() {
                // Initialize Visual Builder when in edit mode
                function initializeVisualBuilder() {
                  const urlParams = new URLSearchParams(window.location.search);
                  const context = urlParams.get('ctx');
                  
                  if (context === 'edit' || context === 'edit:200') {
                    console.log('Visual Builder edit mode detected');
                    
                    // Enable direct editing for elements with data-epi-property-name
                    const editableElements = document.querySelectorAll('[data-epi-property-name]');
                    editableElements.forEach(element => {
                      element.style.cursor = 'pointer';
                      element.style.border = '1px dashed transparent';
                      element.style.transition = 'border-color 0.2s ease';
                      
                      // Add hover effect
                      element.addEventListener('mouseenter', function() {
                        this.style.borderColor = '#3b82f6';
                        this.style.backgroundColor = 'rgba(59, 130, 246, 0.05)';
                      });
                      
                      element.addEventListener('mouseleave', function() {
                        this.style.borderColor = 'transparent';
                        this.style.backgroundColor = 'transparent';
                      });
                      
                      // Add click handler for direct editing
                      element.addEventListener('click', function(e) {
                        e.preventDefault();
                        e.stopPropagation();
                        
                        const propertyName = this.getAttribute('data-epi-property-name');
                        const currentValue = this.textContent.trim();
                        
                        console.log('Direct editing clicked for property:', propertyName, 'Current value:', currentValue);
                        
                        // Show inline editor
                        showInlineEditor(this, propertyName, currentValue);
                      });
                    });
                  }
                }
                
                // Show inline editor for direct editing
                function showInlineEditor(element, propertyName, currentValue) {
                  // Create overlay
                  const overlay = document.createElement('div');
                  overlay.style.cssText = \`
                    position: fixed;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background: rgba(0, 0, 0, 0.5);
                    z-index: 10000;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                  \`;
                  
                  // Create editor modal
                  const modal = document.createElement('div');
                  modal.style.cssText = \`
                    background: white;
                    padding: 20px;
                    border-radius: 8px;
                    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
                    min-width: 400px;
                    max-width: 600px;
                  \`;
                  
                  modal.innerHTML = \`
                    <h3 style="margin: 0 0 15px 0; color: #1f2937;">Edit \${propertyName}</h3>
                    <textarea 
                      id="inline-editor" 
                      style="width: 100%; height: 100px; padding: 10px; border: 1px solid #d1d5db; border-radius: 4px; resize: vertical;"
                      placeholder="Enter new value..."
                    >\${currentValue}</textarea>
                    <div style="margin-top: 15px; text-align: right;">
                      <button id="cancel-edit" style="margin-right: 10px; padding: 8px 16px; border: 1px solid #d1d5db; background: white; border-radius: 4px; cursor: pointer;">Cancel</button>
                      <button id="save-edit" style="padding: 8px 16px; background: #3b82f6; color: white; border: none; border-radius: 4px; cursor: pointer;">Save</button>
                    </div>
                  \`;
                  
                  overlay.appendChild(modal);
                  document.body.appendChild(overlay);
                  
                  // Focus on textarea
                  const textarea = modal.querySelector('#inline-editor');
                  textarea.focus();
                  textarea.select();
                  
                  // Handle save
                  modal.querySelector('#save-edit').addEventListener('click', async function() {
                    const newValue = textarea.value.trim();
                    if (newValue !== currentValue) {
                      // Show loading state
                      const saveButton = this;
                      const originalText = saveButton.textContent;
                      saveButton.textContent = 'Saving...';
                      saveButton.disabled = true;
                      
                      try {
                        // Get content ID from URL
                        const urlParams = new URLSearchParams(window.location.search);
                        const contentId = urlParams.get('key') || '256816101bdd459687a487910c3da818';
                        
                        // Save to CMS via API
                        const response = await fetch('/api/cms/save-content', {
                          method: 'POST',
                          headers: {
                            'Content-Type': 'application/json',
                          },
                          body: JSON.stringify({
                            contentId: contentId,
                            propertyName: propertyName,
                            newValue: newValue,
                            oldValue: currentValue
                          })
                        });
                        
                        const result = await response.json();
                        
                        if (result.success) {
                          // Update the element
                          element.textContent = newValue;
                          
                          // Trigger content save event
                          const saveEvent = new CustomEvent('optimizely:cms:contentChanged', {
                            detail: {
                              propertyName: propertyName,
                              newValue: newValue,
                              oldValue: currentValue,
                              element: element,
                              contentId: contentId
                            }
                          });
                          window.dispatchEvent(saveEvent);
                          
                          console.log('Content saved successfully:', result);
                          
                          // Show success message
                          saveButton.textContent = 'Saved!';
                          saveButton.style.background = '#10b981';
                          
                          setTimeout(() => {
                            document.body.removeChild(overlay);
                          }, 1000);
                        } else {
                          throw new Error(result.message || 'Failed to save content');
                        }
                      } catch (error) {
                        console.error('Error saving content:', error);
                        
                        // Show error state
                        saveButton.textContent = 'Error';
                        saveButton.style.background = '#ef4444';
                        
                        // Reset button after delay
                        setTimeout(() => {
                          saveButton.textContent = originalText;
                          saveButton.style.background = '#3b82f6';
                          saveButton.disabled = false;
                        }, 2000);
                      }
                    } else {
                      document.body.removeChild(overlay);
                    }
                  });
                  
                  // Handle cancel
                  modal.querySelector('#cancel-edit').addEventListener('click', function() {
                    document.body.removeChild(overlay);
                  });
                  
                  // Handle escape key
                  overlay.addEventListener('keydown', function(e) {
                    if (e.key === 'Escape') {
                      document.body.removeChild(overlay);
                    }
                  });
                }
                
                // Real-time updates for Optimizely CMS
                window.addEventListener('optimizely:cms:contentSaved', (event) => {
                  console.log('Content saved event received:', event.detail);
                  const message = event.detail;
                  const newPreviewUrl = message.previewUrl;
                  if (newPreviewUrl) {
                    const urlParams = new URLSearchParams(newPreviewUrl);
                    const newPreviewToken = urlParams.get('preview_token');
                    console.log('New preview token:', newPreviewToken);
                    if (newPreviewToken) {
                      window.location.reload();
                    }
                  }
                });
                
                window.addEventListener('optimizely:cms:contentPublished', (event) => {
                  console.log('Content published event received:', event.detail);
                  window.location.reload();
                });
                
                // Initialize when DOM is ready
                if (document.readyState === 'loading') {
                  document.addEventListener('DOMContentLoaded', initializeVisualBuilder);
                } else {
                  initializeVisualBuilder();
                }
                
                console.log('Visual Builder integration loaded');
              })();
            `,
          }}
        />
      </body>
    </html>
  );
}
