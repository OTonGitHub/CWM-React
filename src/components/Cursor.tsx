// components/Cursor.tsx
import { useEffect, useRef, useState } from 'react';
import styled, { createGlobalStyle } from 'styled-components';

const HideCursorGlobalStyle = createGlobalStyle`
  html,
  body,
  #root {
    height: 100%;
    width: 100%;
    margin: 0;
    padding: 0;
  }

  html, body, * {
    cursor: none !important;
  }
`;

const EmojiCursor = styled.div<{ visible: boolean }>`
  position: fixed;
  left: 0;
  top: 0;
  transform: translate(-50%, -50%);
  font-size: 24px;
  pointer-events: none;
  z-index: 9999;
  opacity: ${({ visible }) => (visible ? 1 : 0)};
  transition: opacity 0.1s;
`;

const Cursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      if (cursorRef.current) {
        cursorRef.current.style.left = `${e.clientX}px`;
        cursorRef.current.style.top = `${e.clientY}px`;
        setVisible(true);
      }
    };
    window.addEventListener('mousemove', move, { passive: true });
    return () => {
      window.removeEventListener('mousemove', move);
    };
  }, []);

  return (
    <>
      <HideCursorGlobalStyle />
      <EmojiCursor ref={cursorRef} visible={visible} aria-hidden='true'>
        <span aria-hidden='true'>✨</span>
      </EmojiCursor>
    </>
  );
};

export default Cursor;
