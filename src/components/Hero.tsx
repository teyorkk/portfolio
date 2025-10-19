import Reveal from "./Ui/Reveal";
import ProfileImage from "./Hero/ProfileImage";
import HeroContent from "./Hero/HeroContent";

const Hero = () => {
  return (
    <section
      className="flex flex-col items-center justify-center min-h-screen py-16 px-4"
      id="hero"
      style={{ minHeight: "100dvh" }}
    >
      <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-16 w-full max-w-6xl">
        <Reveal delay={80}>
          <ProfileImage />
        </Reveal>

        <Reveal delay={160}>
          <HeroContent />
        </Reveal>
      </div>
    </section>
  );
};

export default Hero;
