import { create } from "zustand";
import { Track } from "../types/track";

interface PlayerState {
  currentTrack: Track | null;
  isPlaying: boolean;
  volume: number;
  audio: HTMLAudioElement | null;
  queue: Track[];
  currentIndex: number;

  // Actions
  setTrack: (track: Track) => void;
  togglePlay: () => void;
  setVolume: (value: number) => void;
  playNext: () => void;
  playPrevious: () => void;
}

export const usePlayerStore = create<PlayerState>((set, get) => ({
  currentTrack: null,
  isPlaying: false,
  volume: 0.5,
  audio: null,
  queue: [],
  currentIndex: 0,

  setTrack: (track) => {
    const { audio } = get();

    // 1. ถ้ามีเพลงเล่นอยู่ก่อนหน้า ให้หยุดและเคลียร์ทิ้ง
    if (audio) {
      audio.pause();
      audio.src = "";
    }

    // 2. สร้าง Audio object ใหม่
    const newAudio = new Audio(track.previewUrl);
    newAudio.volume = get().volume;

    // 3. เล่นเพลงทันที
    newAudio.play();

    set({
      currentTrack: track,
      audio: newAudio,
      isPlaying: true,
    });

    // 4. ดักเหตุการณ์เมื่อเพลงจบ
    newAudio.onended = () => set({ isPlaying: false });
  },

  togglePlay: () => {
    const { audio, isPlaying } = get();
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    set({ isPlaying: !isPlaying });
  },

  setVolume: (value) => {
    const { audio } = get();
    if (audio) audio.volume = value;
    set({ volume: value });
  },

  playNext: () => {
    const { queue, currentIndex, setTrack } = get();
    const nextIndex = currentIndex + 1;

    if (nextIndex < queue.length) {
      setTrack(queue[nextIndex]);
      set({ currentIndex: nextIndex });
    } else {
      console.log("หมดคิวแล้วครับ!");
    }
  },

  playPrevious: () => {
    const { queue, currentIndex, setTrack } = get();
    const prevIndex = currentIndex - 1;

    if (prevIndex >= 0) {
      setTrack(queue[prevIndex]);
      set({ currentIndex: prevIndex });
    } else {
      console.log("หมดคิวแล้วครับ!");
    }
  },
}));
