import { promises as fs } from 'fs';
import path from 'path';
import { notFound } from 'next/navigation';
import InteractiveQuiz, { Question } from '@/components/InteractiveQuiz';

export async function generateStaticParams() {
  return [
    { topic: 'terminal' },
    { topic: 'git' },
    { topic: 'web' },
    { topic: 'ai' },
  ];
}

function parseQuizMarkdown(markdown: string): Question[] {
  const questions: Question[] = [];
  
  // Extract answers section
  const answersSectionMatch = markdown.match(/### Answers\n+([\s\S]*)/);
  const answersMap: Record<number, string> = {};
  if (answersSectionMatch) {
    const answersText = answersSectionMatch[1];
    const answerLines = answersText.split('\n');
    answerLines.forEach(line => {
      const match = line.match(/^(\d+)\.\s+([A-D])/);
      if (match) {
        answersMap[parseInt(match[1], 10)] = match[2];
      }
    });
  }

  // Extract questions
  const questionBlocks = markdown.split(/### \d+\.\s+/).slice(1);
  
  questionBlocks.forEach((block, index) => {
    const id = index + 1;
    const lines = block.split('\n').filter(l => l.trim() !== '');
    
    // First line is the question text
    const text = lines[0].trim();
    
    // Next lines that start with A), B), C), D) are options
    const options: { label: string; text: string }[] = [];
    for (let i = 1; i < lines.length; i++) {
      const optionMatch = lines[i].match(/^([A-D])\)\s+(.*)/);
      if (optionMatch) {
        options.push({
          label: optionMatch[1],
          text: optionMatch[2].trim()
        });
      } else if (lines[i].startsWith('---') || lines[i].startsWith('### Answers')) {
        break; // Reached the end of questions
      }
    }

    if (text && options.length > 0) {
      questions.push({
        id,
        text,
        options,
        answer: answersMap[id] || 'A' // Fallback to 'A' if not found, though our files have answers
      });
    }
  });

  return questions;
}

export default async function CourseQuizPage({
  params
}: {
  params: { topic: string }
}) {
  const { topic } = params;
  
  try {
    const filePath = path.join(process.cwd(), 'content', topic, 'quiz.md');
    const content = await fs.readFile(filePath, 'utf8');
    
    const questions = parseQuizMarkdown(content);

    return (
      <div className="max-w-3xl mx-auto py-8">
        <div className="mb-8 border-b border-slate-200 dark:border-slate-800 pb-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-4 capitalize">
            {topic} Knowledge Check
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            Test your understanding of the concepts. Click on your answers and hit reveal to see your score!
          </p>
        </div>
        
        <InteractiveQuiz questions={questions} />
      </div>
    );
  } catch (error) {
    notFound();
  }
}
