"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { CheckCircle2, XCircle } from "lucide-react";

export type Question = {
  id: number;
  text: string;
  options: { label: string; text: string }[];
  answer: string;
};

export default function InteractiveQuiz({ questions }: { questions: Question[] }) {
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [revealed, setRevealed] = useState(false);

  const handleSelect = (questionId: number, optionLabel: string) => {
    if (submitted) return; // Prevent changing answers after submission
    setSelectedAnswers((prev) => ({ ...prev, [questionId]: optionLabel }));
  };

  const calculateScore = () => {
    let score = 0;
    questions.forEach((q) => {
      if (selectedAnswers[q.id] === q.answer) score++;
    });
    return score;
  };

  return (
    <div className="space-y-12">
      <div className="space-y-8">
        {questions.map((q) => {
          const isCorrect = selectedAnswers[q.id] === q.answer;
          const isAnswered = selectedAnswers[q.id] !== undefined;

          return (
            <div key={q.id} className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-semibold mb-4 text-slate-800 dark:text-slate-100">
                {q.id}. {q.text}
              </h3>
              <div className="space-y-3">
                {q.options.map((opt) => {
                  const isSelected = selectedAnswers[q.id] === opt.label;
                  const isCorrectOption = q.answer === opt.label;
                  
                  let optionClass = "border-slate-200 dark:border-slate-700 hover:border-sky-300 dark:hover:border-sky-700 hover:bg-sky-50 dark:hover:bg-sky-900/30";
                  let icon = null;

                  if (isSelected && !revealed) {
                    optionClass = "border-sky-500 bg-sky-50 dark:bg-sky-900/30 ring-1 ring-sky-500";
                  } else if (revealed) {
                    if (isCorrectOption) {
                      optionClass = "border-green-500 bg-green-50 dark:bg-green-900/30 ring-1 ring-green-500";
                      icon = <CheckCircle2 className="w-5 h-5 text-green-600 dark:text-green-400" />;
                    } else if (isSelected && !isCorrectOption) {
                      optionClass = "border-red-500 bg-red-50 dark:bg-red-900/30 ring-1 ring-red-500";
                      icon = <XCircle className="w-5 h-5 text-red-600 dark:text-red-400" />;
                    } else {
                      optionClass = "opacity-50 border-slate-200 dark:border-slate-800";
                    }
                  }

                  return (
                    <button
                      key={opt.label}
                      onClick={() => handleSelect(q.id, opt.label)}
                      disabled={submitted}
                      className={`w-full text-left px-4 py-3 rounded-lg border transition-all flex items-center justify-between ${optionClass}`}
                    >
                      <span className="flex items-start">
                        <span className="font-bold mr-3 text-slate-500 dark:text-slate-400">{opt.label})</span>
                        <span className="text-slate-700 dark:text-slate-300">{opt.text}</span>
                      </span>
                      {icon}
                    </button>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>

      <div className="sticky bottom-6 flex flex-col sm:flex-row items-center justify-between bg-white/80 dark:bg-slate-900/80 backdrop-blur-md p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xl">
        <div className="mb-4 sm:mb-0">
          {submitted ? (
            <div className="text-2xl font-bold">
              Score: <span className="text-sky-500">{calculateScore()}</span> / {questions.length}
            </div>
          ) : (
            <div className="text-sm text-slate-500 dark:text-slate-400">
              Answer all questions, then submit quiz.
            </div>
          )}
        </div>
        <div className="flex gap-4">
          {revealed && (
            <Button
              variant="outline"
              onClick={() => {
                setSelectedAnswers({});
                setSubmitted(false);
                setRevealed(false);
              }}
            >
              Reset Quiz
            </Button>
          )}
          {!submitted && (
            <Button
              className="bg-sky-500 hover:bg-sky-600 text-white"
              onClick={() => setSubmitted(true)}
            >
              Submit Quiz
            </Button>
          )}
          {submitted && !revealed && (
            <Button
              className="bg-slate-800 hover:bg-slate-900 text-white dark:bg-slate-100 dark:hover:bg-white dark:text-slate-900"
              onClick={() => setRevealed(true)}
            >
              Reveal Answers
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
