export function createExcerpt({ text, length = 150 }: { text: string; length?: number }): string {
  return text
    .split('', length)
    .concat(['...'])
    .join('');
}

export async function getContent({ context, prefix }): Promise<{ slug: string; title: string }[]> {
  const slugs: string[] = [];
  const content: { slug: string; title: string, date: string, tag: string, image: string }[] = [];

  // Get slugs
  for (let index = 0; index < context.keys().length; index += 1) {
    const slug = context.keys()[index].replace(/^.\/|.json$/g, '');
    slugs.push(slug);
  }

  // Get content
  for (let index = (slugs.length - 1); index >= 0; index -= 1) {
    const slug = slugs[index];

    const entry = require(`@/content/${prefix}/${slug}.json`);

    // Add the slug to the post object
    Object.assign(entry, { slug });

    content.push({
      slug,
      title: entry.title,
      image: entry.featuredImage,
      date: entry.publishedAt,
      tag: entry.tag,
      ...(prefix === 'blog' && {
        excerpt: createExcerpt({ text: entry.content }),
      }),
    });
  }

  return content;
}
