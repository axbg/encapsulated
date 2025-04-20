import fs from 'fs';
import path from 'path';
import RSS from 'rss';

export type FeedOptions = {
  title: string;
  description: string;
  feed_url: string;
  site_url: string;
  language: string;
}

export async function generateFeed(feedOptions: FeedOptions) {
  console.log("Generating RSS XML feed");

  const feed = new RSS(feedOptions);

  const contentPath = "./app/content/blog";

  fs.readdir(contentPath, async (_err, filenames) => {
    filenames.map(filename => {
      const filePath = path.join(contentPath, filename);

      const fileContent = fs.readFileSync(filePath);
      const data = JSON.parse(fileContent);

      const { title, tag, seoMetaImage, seoDescription } = data;

      feed.item({
        title: title.split("-")[1].trim(),
        description: seoDescription,
        url: `${feedOptions.site_url}/${slugify(title)}`,
        guid: `${feedOptions.site_url}/${slugify(title)}`,
        categories: tag ? [tag] : [],
        enclosure: seoMetaImage ? {
          url: seoMetaImage.startsWith("https") ? seoMetaImage : feedOptions.site_url + seoMetaImage,
          type: 'image/jpeg'
        } : undefined
      });
    });

    fs.writeFileSync("./app/static/feed.xml", feed.xml({ indent: true }));

    console.log("Generated RSS XML feed in static/feed.xml");
  })
}

function slugify(text) {
  return "blog/" + String(text)
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')
    .replace(/[^\w\-]+/g, '')
    .replace(/\-\-+/g, '-');
}
