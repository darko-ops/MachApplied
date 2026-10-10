"use client";

import { useSyncExternalStore } from "react";

function subscribe(onTick: () => void) {
  const id = setInterval(onTick, 1000);
  return () => clearInterval(id);
}

const now = () => new Date().toISOString().slice(11, 19) + "Z";
// Server and hydration render a placeholder so the markup matches
const placeholder = () => "--:--:--Z";

/** Live UTC clock, ticking every second */
export default function UtcClock() {
  const time = useSyncExternalStore(subscribe, now, placeholder);
  return <time className="tabular text-text">{time}</time>;
}
