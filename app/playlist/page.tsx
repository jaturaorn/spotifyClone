"use client";

import Image from "next/image";
import { MOCK_PLAYLIST } from "../../Data/Mockplaylist";
import { usePlayerStore } from "../store/usePlayerStore";

export default function PlaylistPage() {
  // 1. ดึงฟังก์ชันที่จำเป็นมาจาก Zustand Store (ทิป: เราต้องการฟังก์ชันที่ใช้สั่งเล่นเพลง)
  const { setTrack } = usePlayerStore();

  return (
    <div className="p-8 bg-gradient-to-b from-blue-900 to-black min-h-screen text-white">
      <header className="flex items-end gap-6 mb-8">
        <div className="w-52 h-52 shadow-2xl bg-gray-800 flex items-center justify-center text-6xl">
          🎵
        </div>
        <div>
          <p className="text-xs uppercase font-bold">Playlist</p>
          <h1 className="text-7xl font-black mt-2 mb-6">My Favorites</h1>
          <p className="text-gray-300">สร้างสรรค์โดย คุณเอฟ • 3 เพลง</p>
        </div>
      </header>

      <div className="bg-black/20 backdrop-blur-md rounded-lg overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="text-gray-400 border-b border-gray-800 text-sm uppercase">
              <th className="p-4 w-12 text-center">#</th>
              <th className="p-4">ชื่อเพลง</th>
              <th className="p-4 hidden md:table-cell">อัลบั้ม/ศิลปิน</th>
              <th className="p-4 w-20 text-center">เล่น</th>
            </tr>
          </thead>
          <tbody>
            {MOCK_PLAYLIST.map((track, index) => (
              <tr
                key={track.id}
                className="hover:bg-white/10 transition-colors group cursor-pointer"
              >
                <td className="p-4 text-center text-gray-500">{index + 1}</td>
                <td className="p-4 flex items-center gap-3">
                  <Image
                    src={track.albumCover}
                    className="w-10 h-10 rounded"
                    alt=""
                  />
                  <span className="font-medium">{track.title}</span>
                </td>
                <td className="p-4 text-gray-400 hidden md:table-cell">
                  {track.artist}
                </td>
                <td className="p-4 flex gap-2 justify-center">
                  {/* ปุ่มเล่นทันที */}
                  <button
                    onClick={() => setTrack(track)}
                    className="w-8 h-8 rounded-full bg-green-500 text-black flex items-center justify-center opacity-0 group-hover:opacity-100 transition"
                  >
                    ▶️
                  </button>

                  {/* ปุ่มเพิ่มลงคิว (Add to Queue) */}
                  <button
                    onClick={() => {
                      // 🎯 ภารกิจ: เรียกใช้ฟังก์ชัน addToQueue ที่นี่
                      // ??? เขียนตรงนี้ ???
                    }}
                    className="w-8 h-8 rounded-full bg-gray-700 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition hover:bg-gray-600"
                  >
                    ➕
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
