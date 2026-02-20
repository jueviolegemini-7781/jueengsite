import { cn } from '../lib/utils';

interface ContentRendererProps {
  content: string;
  className?: string;
}

export function ContentRenderer({ content, className }: ContentRendererProps) {
  // Simple markdown-like parser optimized for mobile readability
  const renderContent = (text: string) => {
    const lines = text.split('\n');
    const elements: React.ReactNode[] = [];
    let key = 0;
    let inList = false;
    let listItems: string[] = [];
    let listType: 'ul' | 'ol' | null = null;

    const flushList = () => {
      if (listItems.length > 0 && listType) {
        const ListTag = listType;
        elements.push(
          <ListTag
            key={key++}
            className={cn(
              'my-4 sm:my-6 space-y-2 sm:space-y-3',
              listType === 'ul' ? 'ml-4 sm:ml-6 list-disc' : 'ml-4 sm:ml-6 list-decimal'
            )}
          >
            {listItems.map((item, idx) => (
              <li 
                key={idx} 
                className="text-sm sm:text-base leading-relaxed text-slate-700 dark:text-slate-300 pl-2"
              >
                {renderInlineFormatting(item)}
              </li>
            ))}
          </ListTag>
        );
        listItems = [];
        listType = null;
        inList = false;
      }
    };

    const renderInlineFormatting = (text: string): React.ReactNode => {
      // Bold text
      const parts: React.ReactNode[] = [];
      let lastIndex = 0;
      
      // Handle bold text with **
      const boldRegex = /\*\*(.+?)\*\*/g;
      let match;
      while ((match = boldRegex.exec(text)) !== null) {
        if (match.index > lastIndex) {
          parts.push(text.slice(lastIndex, match.index));
        }
        parts.push(
          <strong key={match.index} className="font-semibold text-slate-900 dark:text-slate-100">
            {match[1]}
          </strong>
        );
        lastIndex = match.index + match[0].length;
      }
      if (lastIndex < text.length) {
        parts.push(text.slice(lastIndex));
      }
      
      return parts.length > 0 ? parts : text;
    };

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      const trimmedLine = line.trim();

      // Skip empty lines - add spacing
      if (!trimmedLine) {
        flushList();
        elements.push(<div key={key++} className="h-3 sm:h-4" />);
        continue;
      }

      // Headers
      if (trimmedLine.startsWith('## ')) {
        flushList();
        elements.push(
          <h2
            key={key++}
            className="mt-8 sm:mt-10 mb-4 sm:mb-5 text-xl sm:text-2xl lg:text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-100 scroll-mt-24"
          >
            {trimmedLine.replace('## ', '')}
          </h2>
        );
        continue;
      }

      if (trimmedLine.startsWith('### ')) {
        flushList();
        elements.push(
          <h3
            key={key++}
            className="mt-6 sm:mt-8 mb-3 sm:mb-4 text-lg sm:text-xl lg:text-2xl font-semibold text-slate-900 dark:text-slate-100 scroll-mt-24"
          >
            {trimmedLine.replace('### ', '')}
          </h3>
        );
        continue;
      }

      if (trimmedLine.startsWith('#### ')) {
        flushList();
        elements.push(
          <h4
            key={key++}
            className="mt-5 sm:mt-6 mb-2 sm:mb-3 text-base sm:text-lg font-semibold text-slate-800 dark:text-slate-200 scroll-mt-24"
          >
            {trimmedLine.replace('#### ', '')}
          </h4>
        );
        continue;
      }

      // Blockquotes
      if (trimmedLine.startsWith('> ')) {
        flushList();
        const quoteLines: string[] = [];
        let j = i;
        while (j < lines.length && lines[j].trim().startsWith('> ')) {
          quoteLines.push(lines[j].trim().replace('> ', ''));
          j++;
        }
        elements.push(
          <blockquote
            key={key++}
            className="my-5 sm:my-6 border-l-4 border-indigo-500 bg-indigo-50/50 dark:bg-indigo-900/10 pl-4 sm:pl-5 pr-3 sm:pr-4 py-3 sm:py-4 italic text-sm sm:text-base text-slate-700 dark:text-slate-300 rounded-r-lg"
          >
            {quoteLines.map((q, idx) => (
              <p key={idx} className="mb-1 last:mb-0">{q}</p>
            ))}
          </blockquote>
        );
        i = j - 1;
        continue;
      }

      // Unordered lists
      if (trimmedLine.startsWith('- ') || trimmedLine.startsWith('* ')) {
        if (!inList || listType !== 'ul') {
          flushList();
          inList = true;
          listType = 'ul';
        }
        listItems.push(trimmedLine.replace(/^[-*] /, ''));
        continue;
      }

      // Numbered lists
      if (/^\d+\./.test(trimmedLine)) {
        if (!inList || listType !== 'ol') {
          flushList();
          inList = true;
          listType = 'ol';
        }
        listItems.push(trimmedLine.replace(/^\d+\.\s*/, ''));
        continue;
      }

      // Regular paragraph
      flushList();
      elements.push(
        <p
          key={key++}
          className="my-3 sm:my-4 text-sm sm:text-base leading-relaxed sm:leading-7 text-slate-700 dark:text-slate-300"
        >
          {renderInlineFormatting(trimmedLine)}
        </p>
      );
    }

    // Flush any remaining list
    flushList();

    return elements;
  };

  return (
    <div className={cn('space-y-1', className)}>
      {renderContent(content)}
    </div>
  );
}
