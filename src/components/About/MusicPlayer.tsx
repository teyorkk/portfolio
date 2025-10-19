import { FaExternalLinkAlt, FaMusic } from "react-icons/fa";
import AccentBar from "../Ui/AccentBar";
import type { Track } from "../../lib/last-fm";

interface MusicPlayerProps {
  track: Track | null;
}

const MusicPlayer = ({ track }: MusicPlayerProps) => {
  return (
    <div className="md:col-span-2 flex flex-col gap-3 xs:gap-4 max-w-xs xs:max-w-sm w-full mx-auto md:mx-0">
      <div className="relative rounded-xl xs:rounded-2xl overflow-hidden aspect-[4/3] sm:aspect-[5/4] md:aspect-square bg-gray-900 dark:bg-gray-950 flex items-end justify-start group border border-gray-200 dark:border-gray-700 shadow-md ring-1 ring-black/5 dark:ring-white/5">
        <AccentBar />
        {track?.image ? (
          <img
            src={track.image}
            alt={
              track.title
                ? `${track.artist} – ${track.title} cover`
                : "Track cover"
            }
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            decoding="async"
          />
        ) : (
          <div className="absolute inset-0 flex flex-col items-center justify-center text-gray-400 dark:text-gray-500 gap-2 xs:gap-3">
            <FaMusic className="w-10 h-10 xs:w-12 xs:h-12 sm:w-14 sm:h-14 opacity-70" />
            <span className="text-[10px] xs:text-xs tracking-wide">
              Loading…
            </span>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/15 to-transparent" />
        <div className="relative z-10 w-full p-2 xs:p-3 sm:p-4 flex flex-col">
          <div className="inline-block rounded-lg xs:rounded-xl bg-black/55 backdrop-blur-sm px-2 xs:px-3 sm:px-4 py-1.5 xs:py-2 shadow-lg ring-1 ring-white/10 max-w-full">
            {track ? (
              <a
                href={track.songUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[10px] xs:text-xs sm:text-sm md:text-base font-semibold text-white tracking-wide flex items-center gap-1 xs:gap-2 truncate focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:ring-offset-2 focus-visible:ring-offset-black/40 rounded-lg"
                title={`${track.artist} - ${track.title}`}
                aria-label={`Open Last.fm page for ${track.artist} - ${track.title}`}
              >
                <span className="truncate">
                  {track.artist} - {track.title}
                </span>
                <FaExternalLinkAlt className="text-[8px] xs:text-[10px] sm:text-xs opacity-70 shrink-0" />
              </a>
            ) : (
              <span className="text-xs xs:text-sm text-gray-200 dark:text-gray-300">
                Loading track…
              </span>
            )}
          </div>
          {track && (
            <p className="mt-1.5 xs:mt-2 sm:mt-3 text-[8px] xs:text-[10px] sm:text-xs uppercase tracking-wide text-gray-300 dark:text-gray-400 font-medium">
              {track.nowPlaying ? "Now Listening to:" : "Last Listened to:"}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default MusicPlayer;
