import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  Date: { input: string; output: string; }
  DateTime: { input: string; output: string; }
  Decimal: { input: number; output: number; }
  Long: { input: number; output: number; }
  Time: { input: string; output: string; }
};

export type About = {
  __typename?: 'About';
  _metadata: _Metadata;
};

export type ArticleBlock = {
  __typename?: 'ArticleBlock';
  _metadata: _Metadata;
};

export type BlankExperience = {
  __typename?: 'BlankExperience';
  _metadata: _Metadata;
};

export type Composition = {
  __typename?: 'Composition';
  _metadata: _Metadata;
};

export type CompositionData = {
  __typename?: 'CompositionData';
  _metadata: _Metadata;
};

export type Contact = {
  __typename?: 'Contact';
  _metadata: _Metadata;
};

export type Experience = {
  __typename?: 'Experience';
  _metadata: _Metadata;
};

export type ExperienceData = {
  __typename?: 'ExperienceData';
  _metadata: _Metadata;
  composition?: Maybe<Composition>;
};

export type Home = {
  __typename?: 'Home';
  _metadata: _Metadata;
};

export type NewsListing = {
  __typename?: 'NewsListing';
  NewsDescription?: Maybe<Scalars['String']['output']>;
  NewsTitle?: Maybe<Scalars['String']['output']>;
  _metadata: _Metadata;
};

export type Query = {
  __typename?: 'Query';
  about?: Maybe<About>;
  articleBlock?: Maybe<ArticleBlock>;
  blankExperience?: Maybe<BlankExperience>;
  contact?: Maybe<Contact>;
  experience?: Maybe<Experience>;
  home?: Maybe<Home>;
  newsListing?: Maybe<NewsListing>;
  services?: Maybe<Services>;
};

export type Services = {
  __typename?: 'Services';
  _metadata: _Metadata;
};

export type _Metadata = {
  __typename?: '_Metadata';
  key: Scalars['String']['output'];
};

export type ArticleBlockDataFragment = { __typename?: 'ArticleBlock', empty: { __typename?: '_Metadata', key: string } } & { ' $fragmentName'?: 'ArticleBlockDataFragment' };

export type BlankExperienceDataFragment = { __typename?: 'BlankExperience', _metadata: { __typename?: '_Metadata', key: string } } & { ' $fragmentName'?: 'BlankExperienceDataFragment' };

export type AboutDataFragment = { __typename?: 'About', empty: { __typename?: '_Metadata', key: string } } & { ' $fragmentName'?: 'AboutDataFragment' };

export type ContactDataFragment = { __typename?: 'Contact', empty: { __typename?: '_Metadata', key: string } } & { ' $fragmentName'?: 'ContactDataFragment' };

export type HomeDataFragment = { __typename?: 'Home', empty: { __typename?: '_Metadata', key: string } } & { ' $fragmentName'?: 'HomeDataFragment' };

export type NewsListingDataFragment = { __typename?: 'NewsListing', NewsTitle?: string | null, NewsDescription?: string | null } & { ' $fragmentName'?: 'NewsListingDataFragment' };

export type ServicesDataFragment = { __typename?: 'Services', empty: { __typename?: '_Metadata', key: string } } & { ' $fragmentName'?: 'ServicesDataFragment' };

export const ArticleBlockDataFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ArticleBlockData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ArticleBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"empty"},"name":{"kind":"Name","value":"_metadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}}]}}]}}]} as unknown as DocumentNode<ArticleBlockDataFragment, unknown>;
export const BlankExperienceDataFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BlankExperienceData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"BlankExperience"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_metadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}}]}}]}}]} as unknown as DocumentNode<BlankExperienceDataFragment, unknown>;
export const AboutDataFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AboutData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"About"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"empty"},"name":{"kind":"Name","value":"_metadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}}]}}]}}]} as unknown as DocumentNode<AboutDataFragment, unknown>;
export const ContactDataFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ContactData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Contact"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"empty"},"name":{"kind":"Name","value":"_metadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}}]}}]}}]} as unknown as DocumentNode<ContactDataFragment, unknown>;
export const HomeDataFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"HomeData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Home"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"empty"},"name":{"kind":"Name","value":"_metadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}}]}}]}}]} as unknown as DocumentNode<HomeDataFragment, unknown>;
export const NewsListingDataFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"NewsListingData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"NewsListing"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"NewsTitle"}},{"kind":"Field","name":{"kind":"Name","value":"NewsDescription"}}]}}]} as unknown as DocumentNode<NewsListingDataFragment, unknown>;
export const ServicesDataFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ServicesData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Services"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"empty"},"name":{"kind":"Name","value":"_metadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}}]}}]}}]} as unknown as DocumentNode<ServicesDataFragment, unknown>;