import { useEffect, useState } from "react";

type Props = { words: string[] };

export default function TypingText({ words }: Props) {
  const [index, setIndex] = useState(0);
  const [sub, setSub] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const mql = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onChange = () => setReduceMotion(mql.matches);
    onChange();
    mql.addEventListener?.("change", onChange);
    return () => mql.removeEventListener?.("change", onChange);
  }, []);

  useEffect(() => {
    if (reduceMotion) return;
    const current = words[index % words.length];
    const speed = deleting ? 180 : 200;
    const t = setTimeout(() => {
      if (!deleting) {
        setSub((s) => s + 1);
        if (sub + 1 === current.length) setDeleting(true);
      } else {
        setSub((s) => s - 1);
        if (sub === 0) {
          setDeleting(false);
          setIndex((i) => (i + 1) % words.length);
        }
      }
    }, speed);
    return () => clearTimeout(t);
  }, [sub, deleting, index, words, reduceMotion]);

  const text = words[index % words.length].slice(0, sub);

  return (
    <span className="font-semibold">
      {text}
      <span className="ml-1 inline-block w-[1ch] animate-pulse">|</span>
    </span>
  );
}
