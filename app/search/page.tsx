"use client";

import { useState } from "react";
import { usePlayerStore } from "../store/usePlayerStore";
import Image from "next/image";

export default function SearchPage() {
  const [query, setQuery] = useState("");
  const { searchTracks, searchResults, setTrack } = usePlayerStore();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    searchTracks(query);
  };

  return (
    <div className="p-8 bg-black min-h-screen text-white">
      <h1 className="text-4xl font-bold mb-8">ค้นหาเพลง</h1>

      {/* ช่องค้นหา */}
      <form onSubmit={handleSearch} className="mb-10 max-w-md">
        <div className="relative">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="อยากฟังเพลงอะไรดี?"
            className="w-full bg-gray-800 py-3 px-6 rounded-full outline-none focus:ring-2 focus:ring-green-500 transition"
          />
          <button
            type="submit"
            className="absolute right-4 top-3 text-gray-400"
          >
            🔍
          </button>
        </div>
      </form>

      {/* รายการผลลัพธ์ */}
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {searchResults.map((track) => (
          <div
            key={track.id}
            className="bg-gray-900/50 p-4 rounded-xl hover:bg-gray-800 transition group cursor-pointer"
            onClick={() => setTrack(track)}
          >
            <Image
              src={track.albumCover}
              className="w-full aspect-square object-cover rounded-lg mb-4 shadow-lg"
              alt=""
            />
            <h3 className="font-bold truncate text-sm">{track.title}</h3>
            <p className="text-xs text-gray-400 truncate">{track.artist}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
