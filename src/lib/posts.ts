import { getCollection } from 'astro:content';

export interface Post {
  slug: string;
  title: string;
  description: string;
  date: Date;
  tags: string[];
}

export async function getAllPosts(): Promise<Post[]> {
  const entries = await getCollection('posts', ({ data }) => !data.draft);
  return entries
    .map((entry) => ({
      slug: entry.id,
      title: entry.data.title,
      description: entry.data.description,
      date: entry.data.date,
      tags: entry.data.tags,
    }))
    .sort((a, b) => b.date.getTime() - a.date.getTime());
}

export function formatDate(date: Date): string {
  return new Intl.DateTimeFormat('zh-CN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(date);
}

export function readingTime(body: string): number {
  const cjkChars = (body.match(/[\u4e00-\u9fff]/g) ?? []).length;
  const words = body
    .replace(/[\u4e00-\u9fff]/g, ' ')
    .trim()
    .split(/\s+/)
    .filter(Boolean).length;
  return Math.max(1, Math.ceil(cjkChars / 400 + words / 200));
}
