'use client';

import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';

interface TypingTextProps {
  strings: string[];
  className?: string;
  typeSpeed?: number;
  backSpeed?: number;
  loop?: boolean;
  showCursor?: boolean;
  cursorChar?: string;
}

export default function TypingText({
  strings,
  className = '',
  typeSpeed = 50,
  backSpeed = 30,
  loop = true,
  showCursor = true,
  cursorChar = '|'
}: TypingTextProps) {
  const el = useRef<HTMLSpanElement>(null);
  const typed = useRef<Typed | null>(null);

  useEffect(() => {
    if (el.current) {
      typed.current = new Typed(el.current, {
        strings,
        typeSpeed,
        backSpeed,
        loop,
        showCursor,
        cursorChar,
      });
    }

    return () => {
      if (typed.current) {
        typed.current.destroy();
      }
    };
  }, [strings, typeSpeed, backSpeed, loop, showCursor, cursorChar]);

  return (
    <span
      ref={el}
      className={className}
    />
  );
}
