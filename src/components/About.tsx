import Reveal from "./Ui/Reveal";
import AccentBar from "./Ui/AccentBar";
import { FaHeart, FaMusic, FaExternalLinkAlt } from "react-icons/fa";
import { getTrack } from "../lib/last-fm";
import type { Track } from "../lib/last-fm";
import { useEffect, useState } from "react";

export const About = () => {
  const [track, setTrack] = useState<Track | null>(null);

  useEffect(() => {
    const fetchTrack = async () => {
      const track = await getTrack();
      setTrack(track);
    };
    fetchTrack();
    const interval = setInterval(fetchTrack, 5000);
    return () => clearInterval(interval);
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

              <div className="md:col-span-2 grid gap-4 content-start">
                <div className="relative rounded-xl border border-gray-200 bg-gray-50 p-4 overflow-hidden">
                  <AccentBar />
                  <p className="text-sm text-gray-500">What I value:</p>
                  <p className="mt-1 font-semibold text-gray-900 flex items-center gap-2">
                    <FaHeart className="text-rose-500" /> Love • Knowledge •
                    Growth
                  </p>
                </div>
                {/* <div className="relative rounded-xl border border-gray-200 bg-gray-50 p-4 overflow-hidden">
                  <AccentBar />
                  <p className="text-sm text-gray-500">Last movie watched</p>

                  <div className="mt-2 flex items-center gap-3">
                    <div className="w-12 h-12 rounded-lg bg-white border flex items-center justify-center">
                      <FaFilm className="text-gray-700" />
                    </div>
                    <div className="flex-1 text-gray-600 text-sm"></div>
                  </div>
                </div> */}
                <div className="relative rounded-xl border border-gray-200 bg-gray-50 p-4 overflow-hidden">
                  <AccentBar />
                  <p className="text-sm text-gray-500 mb-2">
                    {track?.nowPlaying
                      ? "Now Listening to:"
                      : "Last Listened to:"}
                  </p>

                  <div className="flex items-center gap-3">
                    <div className="w-15 h-15 rounded-lg bg-gray-50 shadow-inner flex items-center justify-center overflow-hidden">
                      {track ? (
                        <img
                          src={track.image}
                          className="w-12 h-12 rounded-lg object-fill"
                          alt={track.title}
                        />
                      ) : (
                        <FaMusic className="text-blue-500 text-lg" />
                      )}
                    </div>
                    {track ? (
                      <div className="flex flex-col">
                        <a
                          href={track.songUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group font-semibold text-gray-900 hover:underline flex items-center gap-1"
                        >
                          {track.title}
                          <FaExternalLinkAlt className="ml-1 text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                        </a>
                        <span className="text-sm text-gray-500 font-normal ml-0">
                          {track.artist}
                        </span>
                      </div>
                    ) : (
                      <span>Loading...</span>
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
