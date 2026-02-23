"use client";

import { PlayerBar } from "./components/PlayerBar";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans relative ">
      <PlayerBar />
    </div>
  );
}
