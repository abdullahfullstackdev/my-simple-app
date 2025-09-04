export * from "./fragment-masking";
export * from "./gql";

// Create a simple getSdk function for the components
export function getSdk(client: any) {
  return {
    // Add any SDK methods that components might need
    client
  };
}