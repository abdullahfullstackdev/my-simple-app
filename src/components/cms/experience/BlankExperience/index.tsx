import { type OptimizelyNextPage as CmsComponent } from "@remkoj/optimizely-cms-nextjs";
import { getFragmentData } from "@/gql/fragment-masking";
import { ExperienceDataFragmentDoc, BlankExperienceDataFragmentDoc, type BlankExperienceDataFragment } from "@/gql/graphql";
import { OptimizelyComposition, isNode, CmsEditable } from "@remkoj/optimizely-cms-react/rsc";

export const BlankExperienceExperience : CmsComponent<BlankExperienceDataFragment> = ({ data, ctx }) => {
  const composition = getFragmentData(ExperienceDataFragmentDoc, data)?.composition
  return (
    <CmsEditable as="div" className="mx-auto px-2 container" cmsFieldName="unstructuredData" ctx={ctx}>
      { composition && isNode(composition) && <OptimizelyComposition node={composition} /> }
    </CmsEditable>
  )
}
BlankExperienceExperience.displayName = "Blank Experience (Experience/BlankExperience)"
BlankExperienceExperience.getDataFragment = () => ['BlankExperienceData', BlankExperienceDataFragmentDoc]

export default BlankExperienceExperience