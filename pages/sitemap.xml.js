export async function getServerSideProps(context) {
  const xml = await generateSiteMap();
  context.res.end(xml);

  return {
    props: {},
  };
}

async function generateSiteMap() {
  try {
    // Generate dynamic sitemap
    let currentDate = new Date().toISOString();
    let baseUrl = "https://hawkflit.com";

    const xml = `<?xml version="1.0" encoding="UTF-8"?>
            <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
            <url>
            <loc>${baseUrl}</loc>
            <lastmod>${currentDate}</lastmod>
            <priority>1</priority>
          </url>
            </urlset>`;
    return xml;
  } catch (error) {
    // Handle errors here
    console.error("Error generating sitemap:", error);
    return error;
  }
}

export default function Sitemap() {
  return null;
}
