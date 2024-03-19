import { useState, type ReactElement } from 'react';
import { ChevronDown } from 'react-bootstrap-icons';

export function FaqItem({
  title,
  content,
}: {
  title: string;
  content: ReactElement;
}) {
  const [show, setShow] = useState(false);

  return (
    <div className="mt-6 rounded-2xl border border-[#303038]">
      <button className="flex w-full p-7" onClick={() => setShow(!show)}>
        <div className="flex-1 text-left font-bold">{title}</div>
        <ChevronDown
          className={`transition-transform ${!show && '-rotate-180'}`}
        />
      </button>
      <div
        className={`grid ${show ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}
        style={{ transition: 'grid-template-rows 0.3s ease-in-out' }}
      >
        <div className="overflow-hidden px-7 text-sm">
          {content}
          <br />
        </div>
      </div>
    </div>
  );
}