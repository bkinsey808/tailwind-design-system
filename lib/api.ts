import { createClient } from "contentful";

const space = process.env.CONTENTFUL_SPACE_ID ?? "";
const accessToken = process.env.CONTENTFUL_ACCESS_TOKEN;
const previewToken = process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN;

let client: any;
let previewClient: any;

if (accessToken) {
  client = createClient({
    space,
    accessToken,
  });
}

if (previewToken) {
  previewClient = createClient({
    space,
    accessToken: previewToken,
    host: "preview.contentful.com",
  });
}

async function fetchPreviewEntries(contentType: string, slug: string) {
  if (previewToken) {
    const entries = await previewClient.getEntries({
      content_type: contentType,
      "fields.slug": slug,
      include: 5,
    });
    if (entries.items) return entries.items;
    console.log(`Error getting Entries for ${contentType}.`);
  }
  console.log(`Access Token is undefined`);
}

export async function fetchPreviewXDLandingEntriesBySlug(
  slug: string = "home"
) {
  return await fetchPreviewEntries("xdLandingPage", slug);
}

async function fetchEntries(contentType: string, slug: string) {
  if (accessToken) {
    const entries = await client.getEntries({
      content_type: contentType,
      "fields.slug": slug,
      include: 5,
    });
    if (entries.items) return entries.items;
    console.log(`Error getting Entries for ${contentType}.`);
  }
  console.log(`Access Token is undefined`);
}

export async function fetchXDLandingEntriesBySlug(
  preview: boolean,
  slug: string = "home"
) {
  if (preview) {
    console.log("Fetching Previews");
    return fetchPreviewEntries("xdLandingPage", slug);
  }
  console.log("Fetching Published");
  return await fetchEntries("xdLandingPage", slug);
}

export async function fetchAllXDLandingEntries() {
  if (accessToken) {
    const entries = await client.getEntries({
      content_type: "xdLandingPage",
    });
    if (entries.items) {
      return entries.items.map((landingPage: any) => {
        return {
          params: {
            slug: landingPage.fields.slug,
          },
        };
      });
    }
    console.log(`Error getting Entries for xdLandingPage.`);
  }
  console.log(`Access Token is undefined`);
}
