import { useLocation } from 'react-router-dom';
import { ContentRenderer } from '../components/ContentRenderer';
import { NavigationFooter } from '../components/NavigationFooter';
import { getContentById } from '../data/contentData';
import { BookOpen } from 'lucide-react';

export function ContentPage() {
  const location = useLocation();
  const path = location.pathname;
  
  // Extract content ID from path
  let contentId = '';
  let sectionName = '';
  
  if (path === '/foreword') {
    contentId = 'foreword';
    sectionName = 'Front Matter';
  } else if (path === '/preface') {
    contentId = 'preface';
    sectionName = 'Front Matter';
  } else if (path.includes('/unit1/')) {
    sectionName = 'Unit 1: Techniques and Methods';
    const match = path.match(/chapter(\d+)/);
    if (match) contentId = `ch${match[1]}`;
  } else if (path.includes('/unit2/')) {
    sectionName = 'Unit 2: Development of Basic Skills';
    const match = path.match(/chapter(\d+)/);
    if (match) contentId = `ch${match[1]}`;
  } else if (path.includes('/unit3/')) {
    sectionName = 'Unit 3: Evaluation Techniques';
    const match = path.match(/chapter(\d+)/);
    if (match) contentId = `ch${match[1]}`;
  } else if (path.includes('/reference/')) {
    sectionName = 'Reference Material';
    if (path.includes('speaking-skills')) contentId = 'ch25';
    else if (path.includes('proverbs')) contentId = 'ch26';
    else if (path.includes('lesson-plans')) contentId = 'ch27';
  }

  const content = getContentById(contentId);

  if (!content) {
    return (
      <div className="flex min-h-[60vh] flex-col items-center justify-center px-4">
        <BookOpen className="h-16 w-16 text-slate-300 dark:text-slate-600" />
        <h2 className="mt-4 text-2xl font-bold text-slate-900 dark:text-slate-100">
          Content Coming Soon
        </h2>
        <p className="mt-2 text-center text-slate-600 dark:text-slate-400">
          This chapter is being prepared. Please check back later.
        </p>
      </div>
    );
  }

  return (
    <article className="mx-auto max-w-4xl px-4 sm:px-6">
      {/* Breadcrumb */}
      <nav className="mb-6 text-sm text-slate-500 dark:text-slate-400">
        <ol className="flex flex-wrap items-center gap-2">
          <li>
            <a href="/" className="hover:text-indigo-600 dark:hover:text-indigo-400">
              Home
            </a>
          </li>
          <li className="text-slate-400">/</li>
          {sectionName && (
            <>
              <li>
                <span className="text-slate-500 dark:text-slate-400">{sectionName}</span>
              </li>
              <li className="text-slate-400">/</li>
            </>
          )}
          <li className="text-slate-700 dark:text-slate-300 font-medium">{content.title}</li>
        </ol>
      </nav>

      {/* Title */}
      <header className="mb-8 border-b border-slate-200 pb-6 dark:border-slate-800">
        <h1 className="text-2xl font-bold leading-tight tracking-tight text-slate-900 dark:text-slate-100 sm:text-3xl lg:text-4xl">
          {content.title}
        </h1>
      </header>

      {/* Content */}
      <div className="prose prose-slate max-w-none dark:prose-invert prose-headings:scroll-mt-20">
        <ContentRenderer content={content.content} />
      </div>

      {/* Navigation */}
      <NavigationFooter currentPath={path} />
    </article>
  );
}
