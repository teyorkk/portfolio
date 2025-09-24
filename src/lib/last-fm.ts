export interface Track {
  artist: string;
  title: string;
  image: string;
  nowPlaying: boolean;
  songUrl: string;
}

export function getTrack(): Promise<Track | null> {
  const apiKey = import.meta.env.VITE_LASTFM_API_KEY;
  const user = import.meta.env.VITE_LASTFM_USER;
  const url = `https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=${user}&api_key=${apiKey}&format=json&limit=1`;
  return fetch(url)
    .then((response) => response.json())
    .then((data) => {
      if (data && data.recenttracks && data.recenttracks.track) {
        const track = data.recenttracks.track[0];
        return {
          artist: track.artist["#text"],
          title: track.name,
          image: track.image[2]["#text"],
          nowPlaying: track["@attr"] && track["@attr"].nowplaying === "true",
          songUrl: track.url,
        };
      }
      return null;
    });
}
