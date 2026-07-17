import { useEffect, useRef } from "react";

export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement | null>(null);
  const ringRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;

    let dotX = 0,
      dotY = 0,
      ringX = 0,
      ringY = 0,
      mx = 0,
      my = 0;
    let started = false;
    let raf = 0;

    const loop = () => {
      // Higher lerp on dot = snappy; lower on ring = trailing fluid feel.
      dotX += (mx - dotX) * 0.9;
      dotY += (my - dotY) * 0.9;
      ringX += (mx - ringX) * 0.22;
      ringY += (my - ringY) * 0.22;
      const d = dotRef.current;
      const r = ringRef.current;
      if (d) d.style.transform = `translate3d(${dotX}px, ${dotY}px, 0) translate(-50%, -50%)`;
      if (r) r.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) translate(-50%, -50%)`;
      raf = requestAnimationFrame(loop);
    };

    const onMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
      if (!started) {
        dotX = ringX = mx;
        dotY = ringY = my;
        started = true;
      }
    };
    const onOver = (e: MouseEvent) => {
      const t = e.target as HTMLElement | null;
      const isInteractive = !!t?.closest(
        "a,button,[role='button'],input,textarea,select,label,[data-cursor='hover']",
      );
      dotRef.current?.classList.toggle("is-hover", isInteractive);
      ringRef.current?.classList.toggle("is-hover", isInteractive);
    };
    const onDown = () => ringRef.current?.classList.add("is-press");
    const onUp = () => ringRef.current?.classList.remove("is-press");
    const onLeave = () => {
      dotRef.current?.classList.add("is-hidden");
      ringRef.current?.classList.add("is-hidden");
    };
    const onEnter = () => {
      dotRef.current?.classList.remove("is-hidden");
      ringRef.current?.classList.remove("is-hidden");
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mouseover", onOver, { passive: true });
    window.addEventListener("mousedown", onDown, { passive: true });
    window.addEventListener("mouseup", onUp, { passive: true });
    document.documentElement.addEventListener("mouseleave", onLeave);
    document.documentElement.addEventListener("mouseenter", onEnter);
    raf = requestAnimationFrame(loop);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
      document.documentElement.removeEventListener("mouseleave", onLeave);
      document.documentElement.removeEventListener("mouseenter", onEnter);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <div ref={ringRef} className="vt-cursor-ring" aria-hidden />
      <div ref={dotRef} className="vt-cursor-dot" aria-hidden />
    </>
  );
}
