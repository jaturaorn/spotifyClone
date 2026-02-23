export interface Track {
  id: string;
  title: string;
  artist: string;
  albumCover: string;
  previewUrl: string;
}

export interface iTunesResult {
  trackId: number;
  trackName: string;
  artistName: string;
  artworkUrl100: string;
  previewUrl: string;
}
