/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 * Learn more about it here: https://the-guild.dev/graphql/codegen/plugins/presets/preset-client#reducing-bundle-size
 */
type Documents = {
    "fragment ArticleBlockData on ArticleBlock {\n  empty: _metadata {\n    key\n  }\n}": typeof types.ArticleBlockDataFragmentDoc,
    "fragment BlankExperienceData on BlankExperience {\n  _metadata {\n    key\n  }\n}": typeof types.BlankExperienceDataFragmentDoc,
    "fragment AboutData on About {\n  empty: _metadata {\n    key\n  }\n}": typeof types.AboutDataFragmentDoc,
    "fragment ContactData on Contact {\n  empty: _metadata {\n    key\n  }\n}": typeof types.ContactDataFragmentDoc,
    "fragment HomeData on Home {\n  empty: _metadata {\n    key\n  }\n}": typeof types.HomeDataFragmentDoc,
    "fragment NewsListingData on NewsListing {\n  NewsTitle\n  NewsDescription\n}": typeof types.NewsListingDataFragmentDoc,
    "fragment ServicesData on Services {\n  empty: _metadata {\n    key\n  }\n}": typeof types.ServicesDataFragmentDoc,
};
const documents: Documents = {
    "fragment ArticleBlockData on ArticleBlock {\n  empty: _metadata {\n    key\n  }\n}": types.ArticleBlockDataFragmentDoc,
    "fragment BlankExperienceData on BlankExperience {\n  _metadata {\n    key\n  }\n}": types.BlankExperienceDataFragmentDoc,
    "fragment AboutData on About {\n  empty: _metadata {\n    key\n  }\n}": types.AboutDataFragmentDoc,
    "fragment ContactData on Contact {\n  empty: _metadata {\n    key\n  }\n}": types.ContactDataFragmentDoc,
    "fragment HomeData on Home {\n  empty: _metadata {\n    key\n  }\n}": types.HomeDataFragmentDoc,
    "fragment NewsListingData on NewsListing {\n  NewsTitle\n  NewsDescription\n}": types.NewsListingDataFragmentDoc,
    "fragment ServicesData on Services {\n  empty: _metadata {\n    key\n  }\n}": types.ServicesDataFragmentDoc,
};

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function gql(source: string): unknown;

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment ArticleBlockData on ArticleBlock {\n  empty: _metadata {\n    key\n  }\n}"): (typeof documents)["fragment ArticleBlockData on ArticleBlock {\n  empty: _metadata {\n    key\n  }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment BlankExperienceData on BlankExperience {\n  _metadata {\n    key\n  }\n}"): (typeof documents)["fragment BlankExperienceData on BlankExperience {\n  _metadata {\n    key\n  }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment AboutData on About {\n  empty: _metadata {\n    key\n  }\n}"): (typeof documents)["fragment AboutData on About {\n  empty: _metadata {\n    key\n  }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment ContactData on Contact {\n  empty: _metadata {\n    key\n  }\n}"): (typeof documents)["fragment ContactData on Contact {\n  empty: _metadata {\n    key\n  }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment HomeData on Home {\n  empty: _metadata {\n    key\n  }\n}"): (typeof documents)["fragment HomeData on Home {\n  empty: _metadata {\n    key\n  }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment NewsListingData on NewsListing {\n  NewsTitle\n  NewsDescription\n}"): (typeof documents)["fragment NewsListingData on NewsListing {\n  NewsTitle\n  NewsDescription\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment ServicesData on Services {\n  empty: _metadata {\n    key\n  }\n}"): (typeof documents)["fragment ServicesData on Services {\n  empty: _metadata {\n    key\n  }\n}"];

export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;