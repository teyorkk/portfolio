import { useEffect, useState } from "react";
import Reveal from "./Ui/Reveal";
import AccentBar from "./Ui/AccentBar";
import AboutContent from "./About/AboutContent";
import MusicPlayer from "./About/MusicPlayer";
import { getTrack } from "../lib/last-fm";
import type { Track } from "../lib/last-fm";

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
    <section className="py-8 xs:py-12 sm:py-16" id="about">
      <div className="max-w-5xl mx-auto px-3 xs:px-4 sm:px-6">
        <Reveal>
          <div className="relative overflow-hidden rounded-xl xs:rounded-2xl bg-white dark:bg-gray-800 shadow-lg border border-gray-200 dark:border-gray-700">
            <AccentBar />
            <div className="relative p-4 xs:p-5 sm:p-8 grid gap-6 xs:gap-8 sm:gap-10 md:gap-8 md:grid-cols-5 items-start">
              <AboutContent />
              <MusicPlayer track={track} />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
