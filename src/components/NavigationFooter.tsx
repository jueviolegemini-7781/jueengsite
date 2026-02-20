import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { getNextPrev } from '../data/navigation';
import { cn } from '../lib/utils';

interface NavigationFooterProps {
  currentPath: string;
}

export function NavigationFooter({ currentPath }: NavigationFooterProps) {
  const { prev, next } = getNextPrev(currentPath);

  return (
    <div className="mt-12 flex items-center justify-between border-t pt-6 dark:border-slate-800">
      {prev ? (
        <Link
          to={prev.path}
          className={cn(
            'group flex items-center gap-2 rounded-lg border px-4 py-3 text-sm transition-colors',
            'border-slate-200 bg-white text-slate-700 hover:border-indigo-300 hover:bg-indigo-50',
            'dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300 dark:hover:border-indigo-700 dark:hover:bg-indigo-900/20'
          )}
        >
          <ChevronLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
          <div className="flex flex-col items-start">
            <span className="text-xs text-slate-500 dark:text-slate-400">Previous</span>
            <span className="font-medium">{prev.title}</span>
          </div>
        </Link>
      ) : (
        <div />
      )}

      {next ? (
        <Link
          to={next.path}
          className={cn(
            'group flex items-center gap-2 rounded-lg border px-4 py-3 text-sm transition-colors',
            'border-slate-200 bg-white text-slate-700 hover:border-indigo-300 hover:bg-indigo-50',
            'dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300 dark:hover:border-indigo-700 dark:hover:bg-indigo-900/20'
          )}
        >
          <div className="flex flex-col items-end">
            <span className="text-xs text-slate-500 dark:text-slate-400">Next</span>
            <span className="font-medium">{next.title}</span>
          </div>
          <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
      ) : (
        <div />
      )}
    </div>
  );
}
