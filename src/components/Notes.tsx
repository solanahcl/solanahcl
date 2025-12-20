import { ReactNode } from 'react';

interface NotesProps {
  content: string;
  title?: string;
}

export default function Notes({ content, title }: NotesProps) {
  const formatText = (text: string): ReactNode => {
    // Handle bold text **text**
    const parts: ReactNode[] = [];
    let remaining = text;
    let key = 0;

    // Process bold text
    const boldRegex = /\*\*(.+?)\*\*/g;
    let lastIndex = 0;
    let match;

    while ((match = boldRegex.exec(text)) !== null) {
      // Add text before the match
      if (match.index > lastIndex) {
        const beforeText = text.substring(lastIndex, match.index);
        parts.push(...formatLinks(beforeText, key));
        key += 100;
      }
      // Add bold text
      parts.push(
        <strong key={key++} className="text-white font-semibold">
          {match[1]}
        </strong>
      );
      lastIndex = match.index + match[0].length;
    }

    // Add remaining text
    if (lastIndex < text.length) {
      const afterText = text.substring(lastIndex);
      parts.push(...formatLinks(afterText, key));
    }

    return parts.length > 0 ? <>{parts}</> : text;
  };

  const formatLinks = (text: string, startKey: number): ReactNode[] => {
    // Handle markdown links [text](url)
    const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
    const parts: ReactNode[] = [];
    let lastIndex = 0;
    let match;
    let key = startKey;

    while ((match = linkRegex.exec(text)) !== null) {
      if (match.index > lastIndex) {
        parts.push(text.substring(lastIndex, match.index));
      }
      parts.push(
        <a
          key={`link-${key++}`}
          href={match[2]}
          target="_blank"
          rel="noopener noreferrer"
          className="text-solana-green hover:underline"
        >
          {match[1]}
        </a>
      );
      lastIndex = match.index + match[0].length;
    }

    if (lastIndex < text.length) {
      parts.push(text.substring(lastIndex));
    }

    return parts.length > 0 ? parts : [text];
  };

  const parseNotes = (text: string): ReactNode[] => {
    const elements: ReactNode[] = [];
    const lines = text.split('\n');
    let currentParagraph: string[] = [];
    let currentList: string[] = [];
    let key = 0;

    const flushParagraph = () => {
      if (currentParagraph.length > 0) {
        const paragraph = currentParagraph.join(' ').trim();
        if (paragraph) {
          elements.push(
            <p key={`p-${key++}`} className="text-gray-300 mb-4 leading-relaxed">
              {formatText(paragraph)}
            </p>
          );
        }
        currentParagraph = [];
      }
    };

    const flushList = () => {
      if (currentList.length > 0) {
        elements.push(
          <ul key={`ul-${key++}`} className="mb-4 space-y-2 ml-6 list-disc">
            {currentList.map((item, idx) => (
              <li key={`li-${key}-${idx}`} className="text-gray-300">
                {formatText(item)}
              </li>
            ))}
          </ul>
        );
        currentList = [];
      }
    };

    lines.forEach((line) => {
      const trimmed = line.trim();

      if (!trimmed) {
        flushParagraph();
        flushList();
        return;
      }

      // Handle list items
      if (trimmed.startsWith('- ')) {
        flushParagraph();
        const listItem = trimmed.substring(2).trim();
        currentList.push(listItem);
        return;
      }

      // Handle note callouts (lines starting with **NOTE or * The)
      if (trimmed.startsWith('**NOTE') || trimmed.startsWith('* The')) {
        flushParagraph();
        flushList();
        elements.push(
          <div key={`note-${key++}`} className="mt-4 p-4 bg-solana-green bg-opacity-10 border-l-4 border-solana-green rounded-r-lg">
            <p className="text-gray-200 flex items-start">
              <svg className="w-5 h-5 text-solana-green mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>{formatText(trimmed)}</span>
            </p>
          </div>
        );
        return;
      }

      // Regular paragraph text
      flushList();
      currentParagraph.push(trimmed);
    });

    flushParagraph();
    flushList();

    return elements;
  };

  return (
    <div className="mb-12">
      {title && (
        <div className="flex items-center mb-4">
          <svg className="w-6 h-6 text-solana-green mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          <h2 className="text-2xl font-bold text-white">{title}</h2>
        </div>
      )}
      <div className="p-6 bg-solana-dark-alt rounded-lg border border-solana-dark-border">
        <div className="space-y-4">
          {parseNotes(content)}
        </div>
      </div>
    </div>
  );
}
