import Reveal from "./Ui/Reveal";
import AccentBar from "./Ui/AccentBar";
import { FaExternalLinkAlt, FaMusic } from "react-icons/fa";
import { getTrack } from "../lib/last-fm";
import type { Track } from "../lib/last-fm";
import { useEffect, useState } from "react";

export const About = () => {
  const [track, setTrack] = useState<Track | null>(null);
  useEffect(() => {
    const load = async () => {
      const t = await getTrack();
      setTrack(t);
    };
    load();
    const int = setInterval(load, 8000);
    return () => clearInterval(int);
  }, []);

  return (
    <section className="py-16" id="about">
      <div className="max-w-5xl mx-auto px-4">
        <Reveal>
          <div className="relative overflow-hidden rounded-2xl bg-white shadow-lg border border-gray-200">
            <AccentBar />

            <div className="relative p-6 sm:p-8 grid gap-8 md:grid-cols-5">
              <div className="md:col-span-3">
                <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-gray-900">
                  About Me
                </h2>
                <div className="mt-5 space-y-3 text-gray-700 text-base sm:text-lg">
                  <p>
                    Hey there! I’m Moises, a BSIT student who loves turning
                    ideas into real, usable products. I’m a big fan of
                    accessibility and performance. Lately, I’ve been exploring
                    Next.js, end-to-end testing, and the concept of cloud
                    computing. Outside of coding, you’ll probably find me
                    checking out new tech tools, listening to music and watching
                    films.
                  </p>
                  <p>
                    I’m always open to new ideas and collaborations. So, if you
                    have something in mind, let’s build it together!
                  </p>
                </div>
              </div>

              <div className="md:col-span-2 flex flex-col gap-4">
                <div className="relative rounded-2xl overflow-hidden aspect-square bg-gray-900 flex items-end justify-start group border border-gray-200 shadow-md ring-1 ring-black/5">
                  <AccentBar />
                  {track?.image ? (
                    <img
                      src={track?.image}
                      alt={track?.title || "Track Cover"}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                      decoding="async"
                    />
                  ) : (
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-gray-400 gap-3">
                      <FaMusic className="w-14 h-14 opacity-70" />
                      <span className="text-xs tracking-wide">Loading…</span>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/15 to-transparent" />
                  <div className="relative z-10 w-full p-4 flex flex-col">
                    <div className="inline-block rounded-xl bg-black/55 px-4 py-2 shadow-lg ring-1 ring-white/10 max-w-full">
                      {track ? (
                        <a
                          href={track.songUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm md:text-base font-semibold text-white tracking-wide flex items-center gap-2 truncate"
                          title={`${track.artist} - ${track.title}`}
                        >
                          <span className="truncate">
                            {track.artist} - {track.title}
                          </span>
                          <FaExternalLinkAlt className="text-xs opacity-70 shrink-0" />
                        </a>
                      ) : (
                        <span className="text-sm text-gray-200">
                          Loading track…
                        </span>
                      )}
                    </div>
                    {track && (
                      <p className="mt-3 text-xs uppercase tracking-wide text-gray-300 font-medium">
                        {track.nowPlaying
                          ? "Now Listening to:"
                          : "Last Listened to:"}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
