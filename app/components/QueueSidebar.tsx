// components/QueueSidebar.tsx

import Image from "next/image";
import { usePlayerStore } from "../store/usePlayerStore";

export const QueueSidebar = () => {
  const { queue, currentIndex, setTrack, removeFromQueue } = usePlayerStore();

  return (
    <div className="w-80 bg-black/40 backdrop-blur-xl border-l border-gray-800 p-6 overflow-y-auto h-[calc(100vh-90px)]">
      <h3 className="text-xl font-bold mb-6 text-white">ถัดไปในคิว</h3>
      <div className="space-y-4">
        {queue.length === 0 ? (
          <p className="text-gray-500 text-sm">ยังไม่มีเพลงในคิว</p>
        ) : (
          queue.slice(currentIndex + 1).map((track) => (
            <div
              key={track.id}
              className="flex items-center gap-3 group cursor-pointer"
              onClick={() => setTrack(track)}
            >
              <Image
                src={track.albumCover}
                width={300}
                height={300}
                className="w-12 h-12 rounded shadow-lg"
                alt=""
              />
              <div className="flex-1 min-w-0">
                <h4 className="text-sm font-medium text-white truncate">
                  {track.title}
                </h4>
                <p className="text-xs text-gray-400 truncate">{track.artist}</p>
              </div>
              <button
                onClick={() => removeFromQueue(track.id)}
                className="opacity-0 group-hover:opacity-100 p-2 text-gray-400 hover:text-red-500 transition"
              >
                ✕
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};
