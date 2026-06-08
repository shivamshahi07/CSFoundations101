import { promises as fs } from 'fs';
import path from 'path';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  return [
    { topic: 'terminal' },
    { topic: 'git' },
    { topic: 'web' },
    { topic: 'ai' },
  ];
}

export default async function CourseTopicPage({
  params
}: {
  params: { topic: string }
}) {
  const { topic } = params;
  
  try {
    const filePath = path.join(process.cwd(), 'content', topic, 'theory.md');
    const content = await fs.readFile(filePath, 'utf8');

    return (
      <div className="prose prose-slate dark:prose-invert prose-headings:font-bold prose-a:text-sky-500 hover:prose-a:text-sky-600 max-w-none">
        <Markdown remarkPlugins={[remarkGfm]}>{content}</Markdown>
      </div>
    );
  } catch (error) {
    notFound();
  }
}
