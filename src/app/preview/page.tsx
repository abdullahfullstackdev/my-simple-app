import React from "react";
import { CmsFactory } from "@/components/cms";
import { getContentById } from "@/lib/cms-client";

type CmsComponent = React.ComponentType<{
  data: unknown;
  ctx: string;
  children?: React.ReactNode;
}>;

export default async function PreviewPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const resolvedSearchParams = await searchParams;
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

  const Component = componentEntry.component as CmsComponent;
  return (
    <Component 
      data={content.data} 
      ctx={context}
    >
      {content.children || []}
    </Component>
  );
}
