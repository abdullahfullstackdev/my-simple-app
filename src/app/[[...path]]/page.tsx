import { CmsFactory } from "@/components/cms";
import { getContentByPath } from "@/lib/cms-client";

export default async function DynamicPage({
  params
}: {
  params: Promise<{ path?: string[] }>
}) {
  // Handle root path and other paths - await params for Next.js 15.5.2
  const resolvedParams = await params;
  const path = resolvedParams.path || [];
  const pathString = path.length > 0 ? path.join('/') : 'home';

  const content = await getContentByPath(pathString);

  if (!content) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Page Not Found</h1>
          <p className="text-gray-600">The requested page could not be found.</p>
          <p className="text-sm text-gray-500 mt-2">Path: {pathString}</p>
        </div>
      </div>
    );
  }

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
        </div>
      </div>
    );
  }

  // Render the component directly with the content data
  const Component = componentEntry.component;
  return (
    <Component
      data={content.data}
      children={content.children || []}
    />
  );
}
