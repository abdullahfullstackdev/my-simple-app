import { type OptimizelyNextPage as CmsComponent } from "@remkoj/optimizely-cms-nextjs";
import { getFragmentData } from "@/gql/fragment-masking";
import { NewsListingDataFragmentDoc, type NewsListingDataFragment } from "@/gql/graphql";
import { CmsEditable } from "@remkoj/optimizely-cms-react/rsc";

export const NewsListingPage : CmsComponent<NewsListingDataFragment> = ({ data, ctx }) => {
  const newsData = getFragmentData(NewsListingDataFragmentDoc, data);
  
  // Debug: Log the data to see what we're receiving
  console.log('NewsListingPage received data:', newsData);
  console.log('NewsListingPage context:', ctx);
  
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <CmsEditable 
              as="h1" 
              className="text-4xl font-bold text-gray-900 mb-4" 
              cmsFieldName="NewsTitle" 
              ctx={ctx}
              data-epi-edit="NewsTitle"
              data-epi-property-name="NewsTitle"
              data-epi-property-type="string"
              data-epi-property-display-name="News Title"
            >
              {newsData?.NewsTitle || "Tested"}
            </CmsEditable>
            <CmsEditable 
              as="p" 
              className="text-lg text-gray-600 max-w-3xl mx-auto" 
              cmsFieldName="NewsDescription" 
              ctx={ctx}
              data-epi-edit="NewsDescription"
              data-epi-property-name="NewsDescription"
              data-epi-property-type="string"
              data-epi-property-display-name="News Description"
            >
              {newsData?.NewsDescription || "Tested"}
            </CmsEditable>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Sample news items */}
            <div className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="text-sm text-gray-500 mb-2">December 15, 2024</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Company Milestone Reached</h3>
              <p className="text-gray-600">We&apos;re excited to announce that we&apos;ve reached a significant milestone in our company&apos;s growth.</p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="text-sm text-gray-500 mb-2">December 10, 2024</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">New Product Launch</h3>
              <p className="text-gray-600">Introducing our latest product that will revolutionize the industry.</p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="text-sm text-gray-500 mb-2">December 5, 2024</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Team Expansion</h3>
              <p className="text-gray-600">We&apos;re growing our team with talented professionals joining our mission.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

NewsListingPage.displayName = "News Listing (Page/NewsListing)";
NewsListingPage.getDataFragment = () => ['NewsListingData', NewsListingDataFragmentDoc];

export default NewsListingPage;