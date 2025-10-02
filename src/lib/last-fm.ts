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
        const images = (track.image || []).filter((i: any) => i["#text"]);
        const bestImg = images.length ? images[images.length - 1]["#text"] : "";
        return {
          artist: track.artist["#text"],
          title: track.name,
          image: bestImg,
          nowPlaying: track["@attr"] && track["@attr"].nowplaying === "true",
          songUrl: track.url,
        };
      }
      return null;
    });
}

export function getRecentTracks(limit = 6): Promise<Track[]> {
  const apiKey = import.meta.env.VITE_LASTFM_API_KEY;
  const user = import.meta.env.VITE_LASTFM_USER;
  const url = `https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=${user}&api_key=${apiKey}&format=json&limit=${limit}`;
  return fetch(url)
    .then((r) => r.json())
    .then((data) => {
      if (!data?.recenttracks?.track) return [];
      return data.recenttracks.track.map((t: any) => {
        const imgs = (t.image || []).filter((i: any) => i["#text"]);
        const largest = imgs.length ? imgs[imgs.length - 1]["#text"] : "";
        return {
          artist: t.artist["#text"],
          title: t.name,
          image: largest,
          nowPlaying: Boolean(t["@attr"] && t["@attr"].nowplaying === "true"),
          songUrl: t.url,
        } as Track;
      });
    })
    .catch(() => []);
}
