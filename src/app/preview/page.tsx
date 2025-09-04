import React from "react";
import { CmsFactory } from "@/components/cms";
import { getContentById } from "@/lib/cms-client";

export default async function PreviewPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  // Await searchParams for Next.js 15.5.2 compatibility
  const resolvedSearchParams = await searchParams;
  
  // Get the preview key from CMS
  const key = resolvedSearchParams.key as string;
  const context = resolvedSearchParams.ctx as string;
  
  if (!key) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Preview Error</h1>
          <p className="text-gray-600">No preview key provided</p>
        </div>
      </div>
    );
  }

  // Get content by ID for preview
  const content = await getContentById(key);
  
  if (!content) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Content Not Found</h1>
          <p className="text-gray-600">Could not find content for preview</p>
          <p className="text-sm text-gray-500 mt-2">Key: {key}</p>
        </div>
      </div>
    );
  }

  // DEBUG: Show what we received
  console.log('Preview Debug:', {
    key,
    context,
    contentType: content.type,
    contentData: content.data
  });

  // Find the component in CmsFactory array
  const componentName = content.type;
  const componentEntry = CmsFactory.find(entry => entry.type === componentName);
  
  if (!componentEntry) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Component Not Found</h1>
          <p className="text-gray-600">Could not find component: {componentName}</p>
          <p className="text-sm text-gray-500 mt-2">Available types: {CmsFactory.map(e => e.type).join(', ')}</p>
          <p className="text-sm text-gray-500 mt-2">Received key: {key}</p>
          <p className="text-sm text-gray-500 mt-2">Received type: {content.type}</p>
        </div>
      </div>
    );
  }

  // Render the component directly with the content data
  const Component = componentEntry.component as React.ComponentType<{ data: unknown; children?: React.ReactNode }>;
  return (
    <Component data={content.data}>
      {content.children || []}
    </Component>
  );
}
