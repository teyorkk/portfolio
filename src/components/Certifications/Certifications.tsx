import { useEffect, useMemo, useRef, useState } from "react";
import { gsap } from "gsap";
import CertificationCard, { type Certification } from "./CertificationCard";
import data from "../../data/certifications.json";
import Reveal from "../Ui/Reveal";
import Modal from "../Ui/Modal";
import CertificationModal from "./CertificationModal";

const Certifications = () => {
  const items: Certification[] = data as unknown as Certification[];
  const [selectedCertification, setSelectedCertification] =
    useState<Certification | null>(null);

  // Duplicate items to create a seamless loop
  const loopItems = useMemo(() => {
    const base = items.length ? items : [];
    return [...base, ...base, ...base];
  }, [items]);

  const trackRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    // Reset any previous transforms
    gsap.set(track, { x: 0 });

    const totalWidth = track.scrollWidth / 3; // width of one sequence
    const duration = totalWidth / 50; // Adjust speed (50 pixels per second)

    // Create seamless infinite scroll animation
    const tween = gsap.to(track, {
      x: -totalWidth,
      duration: duration,
      ease: "none",
      repeat: -1,
      onComplete: () => {
        gsap.set(track, { x: 0 });
      },
    });

    return () => {
      tween.kill();
    };
  }, []);

  return (
    <>
      <section className="py-16" id="certifications">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-900 dark:text-gray-100">
            Certifications
          </h2>

          {/* Marquee container */}
          <Reveal>
            <div className="relative overflow-hidden">
              <div
                ref={trackRef}
                className="flex items-stretch gap-4 will-change-transform"
                aria-live="off"
              >
                {loopItems.map((c, idx) => (
                  <div key={`${c.title}-${idx}`} className="shrink-0">
                    <CertificationCard
                      certification={c}
                      onClick={() => setSelectedCertification(c)}
                    />
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <Modal
        isOpen={selectedCertification !== null}
        onClose={() => setSelectedCertification(null)}
      >
        {selectedCertification && (
          <CertificationModal
            title={selectedCertification.title}
            issuer={selectedCertification.issuer}
            date={selectedCertification.date}
            image={selectedCertification.image}
            link={selectedCertification.link}
            description={selectedCertification.description}
            skills={selectedCertification.skills}
          />
        )}
      </Modal>
    </>
  );
};

export default Certifications;
