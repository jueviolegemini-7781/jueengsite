import { useState, useEffect, useRef, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, X, FileText, BookOpen } from 'lucide-react';
import Fuse from 'fuse.js';
import { getAllContentForSearch } from '../data/contentData';
import { getAllPaths } from '../data/navigation';
import { cn } from '../lib/utils';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface SearchResult {
  id: string;
  title: string;
  content: string;
  section: string;
  path: string;
}

export function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  const allContent = useMemo(() => getAllContentForSearch(), []);
  const allPaths = useMemo(() => getAllPaths(), []);

  const fuse = useMemo(
    () =>
      new Fuse(allContent, {
        keys: ['title', 'content'],
        threshold: 0.3,
        includeMatches: true,
        minMatchCharLength: 2,
      }),
    [allContent]
  );

  useEffect(() => {
    if (isOpen) {
      inputRef.current?.focus();
      setQuery('');
      setResults([]);
      setSelectedIndex(0);
    }
  }, [isOpen]);

  useEffect(() => {
    if (query.trim().length < 2) {
      setResults([]);
      return;
    }

    const searchResults = fuse.search(query);
    const mappedResults: SearchResult[] = searchResults.slice(0, 10).map((result) => {
      const pathItem = allPaths.find((p) => p.title === result.item.title);
      return {
        id: result.item.id,
        title: result.item.title,
        content: result.item.content.slice(0, 200) + '...',
        section: result.item.section,
        path: pathItem?.path || '/',
      };
    });

    setResults(mappedResults);
    setSelectedIndex(0);
  }, [query, fuse, allPaths]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      onClose();
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev + 1) % results.length);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev - 1 + results.length) % results.length);
    } else if (e.key === 'Enter' && results[selectedIndex]) {
      navigate(results[selectedIndex].path);
      onClose();
    }
  };

  const handleResultClick = (result: SearchResult) => {
    navigate(result.path);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-[20vh] p-4">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative w-full max-w-2xl rounded-lg border bg-white shadow-2xl dark:border-slate-700 dark:bg-slate-900">
        {/* Search input */}
        <div className="flex items-center border-b px-4 py-3 dark:border-slate-700">
          <Search className="h-5 w-5 text-slate-400" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Search chapters, topics, or content..."
            className="ml-3 flex-1 bg-transparent text-slate-900 placeholder:text-slate-400 focus:outline-none dark:text-slate-100"
          />
          <button
            onClick={onClose}
            className="ml-2 rounded-md p-1 hover:bg-slate-100 dark:hover:bg-slate-800"
          >
            <X className="h-5 w-5 text-slate-400" />
          </button>
        </div>

        {/* Results */}
        <div className="max-h-[60vh] overflow-y-auto">
          {query.trim().length < 2 ? (
            <div className="p-8 text-center text-slate-500 dark:text-slate-400">
              <Search className="mx-auto h-8 w-8 mb-3 opacity-50" />
              <p>Type at least 2 characters to search</p>
              <p className="text-sm mt-1">Search through all chapters and content</p>
            </div>
          ) : results.length === 0 ? (
            <div className="p-8 text-center text-slate-500 dark:text-slate-400">
              <FileText className="mx-auto h-8 w-8 mb-3 opacity-50" />
              <p>No results found for "{query}"</p>
              <p className="text-sm mt-1">Try different keywords</p>
            </div>
          ) : (
            <ul className="py-2">
              {results.map((result, index) => (
                <li
                  key={result.id}
                  onClick={() => handleResultClick(result)}
                  className={cn(
                    'cursor-pointer px-4 py-3 transition-colors',
                    index === selectedIndex
                      ? 'bg-indigo-50 dark:bg-indigo-900/20'
                      : 'hover:bg-slate-50 dark:hover:bg-slate-800'
                  )}
                >
                  <div className="flex items-start gap-3">
                    <BookOpen className="mt-0.5 h-4 w-4 flex-shrink-0 text-indigo-600 dark:text-indigo-400" />
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-slate-900 dark:text-slate-100">
                        {result.title}
                      </p>
                      <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                        {result.section}
                      </p>
                      <p className="text-sm text-slate-600 dark:text-slate-300 mt-1 line-clamp-2">
                        {result.content}
                      </p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Footer */}
        <div className="border-t px-4 py-2 text-xs text-slate-500 dark:border-slate-700 dark:text-slate-400">
          <div className="flex items-center justify-between">
            <span>
              {results.length > 0 ? `${results.length} results` : 'Start typing to search'}
            </span>
            <div className="flex items-center gap-3">
              <span className="flex items-center gap-1">
                <kbd className="rounded bg-slate-100 px-1.5 py-0.5 font-mono dark:bg-slate-800">↑↓</kbd>
                to navigate
              </span>
              <span className="flex items-center gap-1">
                <kbd className="rounded bg-slate-100 px-1.5 py-0.5 font-mono dark:bg-slate-800">↵</kbd>
                to select
              </span>
              <span className="flex items-center gap-1">
                <kbd className="rounded bg-slate-100 px-1.5 py-0.5 font-mono dark:bg-slate-800">esc</kbd>
                to close
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
