import { type OptimizelyNextPage as CmsComponent } from "@remkoj/optimizely-cms-nextjs";
import { NewsListingDataFragmentDoc, type NewsListingDataFragment } from "@/gql/graphql";

/**
 * NewsListing Page
 * 
 */
export const NewsListingPage : CmsComponent<NewsListingDataFragment> = ({ data, children }) => {
    const componentName = 'NewsListing Page'
    const componentInfo = ''
    return <div className="mx-auto px-2 container">
        <div className="font-bold italic">{ componentName }</div>
        <div>{ componentInfo }</div>
        { Object.getOwnPropertyNames(data).length > 0 && <pre className="w-full overflow-x-hidden font-mono text-sm bg-slate-200 p-2 rounded-sm border border-solid border-slate-900 text-slate-900">{ JSON.stringify(data, undefined, 4) }</pre> }
        { children && <div className="flex flex-col mt-4 mx-4">{ children }</div>}
    </div>
}
NewsListingPage.displayName = "NewsListing Page (Page/NewsListing)"
NewsListingPage.getDataFragment = () => ['NewsListingData', NewsListingDataFragmentDoc]
NewsListingPage.getMetaData = async () => {
    // Add your metadata logic here
    return {}
}

export default NewsListingPage