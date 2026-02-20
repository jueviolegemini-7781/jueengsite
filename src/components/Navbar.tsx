import { Link } from 'react-router-dom';
import { Menu, X, Sun, Moon, Search, BookOpen } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import { bookInfo } from '../data/navigation';

interface NavbarProps {
  onMenuClick: () => void;
  onSearchClick: () => void;
  isSidebarOpen: boolean;
}

export function Navbar({ onMenuClick, onSearchClick, isSidebarOpen }: NavbarProps) {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:bg-slate-900/95 dark:border-slate-800 dark:supports-[backdrop-filter]:bg-slate-900/60">
      <div className="flex h-14 items-center px-4 lg:px-6">
        {/* Left section - Menu button and Logo */}
        <div className="flex items-center gap-2 lg:gap-4">
          <button
            onClick={onMenuClick}
            className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-slate-200 bg-transparent p-0 text-sm font-medium transition-colors hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:border-slate-700 dark:hover:bg-slate-800 dark:focus:ring-slate-400 dark:focus:ring-offset-slate-900"
            aria-label={isSidebarOpen ? 'Close sidebar' : 'Open sidebar'}
          >
            {isSidebarOpen ? (
              <X className="h-4 w-4" />
            ) : (
              <Menu className="h-4 w-4" />
            )}
          </button>
          
          <Link to="/" className="flex items-center gap-2">
            <BookOpen className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
            <span className="hidden font-semibold text-slate-900 dark:text-slate-100 sm:inline-block">
              {bookInfo.title}
            </span>
          </Link>
        </div>

        {/* Center section - Book info (hidden on mobile) */}
        <div className="hidden lg:flex flex-1 items-center justify-center">
          <span className="text-sm text-slate-500 dark:text-slate-400">
            by {bookInfo.author}
          </span>
        </div>

        {/* Right section - Search, Theme toggle */}
        <div className="flex items-center gap-2 ml-auto">
          <button
            onClick={onSearchClick}
            className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-slate-200 bg-transparent p-0 text-sm font-medium transition-colors hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:border-slate-700 dark:hover:bg-slate-800 dark:focus:ring-slate-400 dark:focus:ring-offset-slate-900"
            aria-label="Search"
          >
            <Search className="h-4 w-4" />
          </button>

          <button
            onClick={toggleTheme}
            className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-slate-200 bg-transparent p-0 text-sm font-medium transition-colors hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:border-slate-700 dark:hover:bg-slate-800 dark:focus:ring-slate-400 dark:focus:ring-offset-slate-900"
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {theme === 'dark' ? (
              <Sun className="h-4 w-4" />
            ) : (
              <Moon className="h-4 w-4" />
            )}
          </button>
        </div>
      </div>
    </nav>
  );
}
