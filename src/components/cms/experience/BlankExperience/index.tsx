import { type OptimizelyNextPage as CmsComponent } from "@remkoj/optimizely-cms-nextjs";
import { BlankExperienceDataFragmentDoc, type BlankExperienceDataFragment } from "@/gql/graphql";

/**
 * BlankExperience Experience
 * 
 */
export const BlankExperienceComponent : CmsComponent<BlankExperienceDataFragment> = ({ data, children }) => {
    const componentName = 'BlankExperience Experience'
    const componentInfo = ''
    return <div className="mx-auto px-2 container">
        <div className="font-bold italic">{ componentName }</div>
        <div>{ componentInfo }</div>
        { Object.getOwnPropertyNames(data).length > 0 && <pre className="w-full overflow-x-hidden font-mono text-sm bg-slate-200 p-2 rounded-sm border border-solid border-slate-900 text-slate-900">{ JSON.stringify(data, undefined, 4) }</pre> }
        { children && <div className="flex flex-col mt-4 mx-4">{ children }</div>}
    </div>
}
BlankExperienceComponent.displayName = "BlankExperience Experience (Experience/BlankExperience)"
BlankExperienceComponent.getDataFragment = () => ['BlankExperienceData', BlankExperienceDataFragmentDoc]
BlankExperienceComponent.getMetaData = async () => {
    // Add your metadata logic here
    return {}
}

export default BlankExperienceComponent