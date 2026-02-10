"use client";

import Image from "next/image";
import { usePlayerStore } from "../store/usePlayerStore";

export const PlayerBar = () => {
  const {
    currentTrack,
    isPlaying,
    togglePlay,
    volume,
    setVolume,
    playPrevious,
    playNext,
  } = usePlayerStore();

  if (!currentTrack) return null; // ไม่โชว์ถ้ายังไม่มีการเลือกเพลง

  return (
    <div className="fixed bottom-0 w-full bg-black text-white p-4 border-t border-gray-800 flex items-center justify-between">
      {/* ข้อมูลเพลง */}
      <div className="flex items-center gap-4 w-1/3">
        <Image
          src={currentTrack.albumCover}
          className="w-14 h-14 rounded-md"
          alt="cover"
        />
        <div>
          <h4 className="font-bold text-sm">{currentTrack.title}</h4>
          <p className="text-xs text-gray-400">{currentTrack.artist}</p>
        </div>
      </div>

      {/* ปุ่มควบคุม */}
      <div className="flex flex-col items-center gap-2 w-1/3">
        <div className="flex items-center gap-6">
          {/* ปุ่มย้อนกลับ */}
          <button
            onClick={playPrevious}
            className="text-gray-400 hover:text-white transition"
          >
            ⏪
          </button>

          {/* ปุ่มเล่น/หยุด */}
          <button onClick={togglePlay} className="...">
            {" "}
            {isPlaying ? "⏸️" : "▶️"}{" "}
          </button>

          {/* ปุ่มถัดไป */}
          <button
            onClick={playNext}
            className="text-gray-400 hover:text-white transition"
          >
            ⏭️
          </button>
        </div>
      </div>

      {/* แถบเสียง */}
      <div className="flex items-center gap-2 w-1/3 justify-end">
        <span>🔊</span>
        <input
          type="range"
          min="0"
          max="1"
          step="0.1"
          value={volume}
          onChange={(e) => setVolume(parseFloat(e.target.value))}
          className="w-24 accent-green-500"
        />
      </div>
    </div>
  );
};
