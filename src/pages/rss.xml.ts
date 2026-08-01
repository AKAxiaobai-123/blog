import rss from '@astrojs/rss';
import { getAllPosts } from '../lib/posts';

export async function GET(context: { site: URL }) {
  const posts = await getAllPosts();
  return rss({
    title: 'Blog',
    description: '一个安静、耐看的个人博客。',
    site: context.site,
    items: posts.map((post) => ({
      title: post.title,
      description: post.description,
      pubDate: post.date,
      link: `/posts/${post.slug}/`,
    })),
    customData: '<language>zh-cn</language>',
  });
}
