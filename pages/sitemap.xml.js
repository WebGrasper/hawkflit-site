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
            <priority>0.9</priority>
          </url>
          <url>
            <loc>${baseUrl}/services</loc>
            <lastmod>${currentDate}</lastmod>
            <priority>0.8</priority>
          </url>
          <url>
            <loc>${baseUrl}/portfolio</loc>
            <lastmod>${currentDate}</lastmod>
            <priority>0.8</priority>
          </url>
          <url>
            <loc>${baseUrl}/contact-us</loc>
            <lastmod>${currentDate}</lastmod>
            <priority>0.8</priority>
          </url>
          <url>
            <loc>${baseUrl}/terms-and-conditions</loc>
            <lastmod>${currentDate}</lastmod>
            <priority>0.8</priority>
          </url>
          <url>
            <loc>${baseUrl}/team</loc>
            <lastmod>${currentDate}</lastmod>
            <priority>0.8</priority>
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
