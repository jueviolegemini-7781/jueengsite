import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown, ChevronRight, BookOpen, Home } from 'lucide-react';
import { navigation, bookInfo } from '../data/navigation';
import { cn } from '../lib/utils';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export function Sidebar({ isOpen, onClose }: SidebarProps) {
  const location = useLocation();
  const [expandedSections, setExpandedSections] = useState<string[]>(['frontmatter', 'unit1']);

  const toggleSection = (sectionId: string) => {
    setExpandedSections((prev) =>
      prev.includes(sectionId)
        ? prev.filter((id) => id !== sectionId)
        : [...prev, sectionId]
    );
  };

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <aside
        className={cn(
          'fixed left-0 top-14 z-40 h-[calc(100vh-3.5rem)] w-72 transform border-r bg-white transition-transform duration-300 ease-in-out dark:border-slate-800 dark:bg-slate-900',
          isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0 lg:static'
        )}
      >
        <div className="flex h-full flex-col">
          {/* Navigation */}
          <nav className="flex-1 overflow-y-auto p-4">
            {/* Home link */}
            <Link
              to="/"
              onClick={onClose}
              className={cn(
                'flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors',
                isActive('/')
                  ? 'bg-indigo-50 text-indigo-700 dark:bg-indigo-900/20 dark:text-indigo-300'
                  : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-slate-100'
              )}
            >
              <Home className="h-4 w-4" />
              Home
            </Link>

            <div className="my-4 border-t dark:border-slate-800" />

            {/* Sections */}
            <div className="space-y-2">
              {navigation.map((section) => (
                <div key={section.id}>
                  <button
                    onClick={() => toggleSection(section.id)}
                    className="flex w-full items-center justify-between rounded-md px-3 py-2 text-sm font-semibold text-slate-900 transition-colors hover:bg-slate-100 dark:text-slate-100 dark:hover:bg-slate-800"
                  >
                    <span className="flex items-center gap-2">
                      <BookOpen className="h-4 w-4 text-indigo-600 dark:text-indigo-400" />
                      {section.title}
                    </span>
                    {expandedSections.includes(section.id) ? (
                      <ChevronDown className="h-4 w-4 text-slate-500" />
                    ) : (
                      <ChevronRight className="h-4 w-4 text-slate-500" />
                    )}
                  </button>

                  {expandedSections.includes(section.id) && (
                    <ul className="ml-4 mt-1 space-y-1 border-l border-slate-200 pl-4 dark:border-slate-700">
                      {section.items.map((item) => (
                        <li key={item.id}>
                          <Link
                            to={item.path}
                            onClick={onClose}
                            className={cn(
                              'block rounded-md px-3 py-2 text-sm transition-colors',
                              isActive(item.path)
                                ? 'bg-indigo-50 text-indigo-700 dark:bg-indigo-900/20 dark:text-indigo-300'
                                : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-slate-100'
                            )}
                          >
                            {item.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </nav>

          {/* Footer */}
          <div className="border-t p-4 dark:border-slate-800">
            <p className="text-xs text-slate-500 dark:text-slate-400">
              {bookInfo.title}
            </p>
            <p className="text-xs text-slate-400 dark:text-slate-500">
              {bookInfo.author}
            </p>
          </div>
        </div>
      </aside>
    </>
  );
}
