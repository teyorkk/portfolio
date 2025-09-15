import Reveal from "./Reveal";

export const About = () => {
  return (
    <section className="py-16 " id="about">
      <div className="max-w-4xl mx-auto px-4">
        <Reveal>
          <div className="bg-gray-50 rounded-2xl shadow-lg p-8 flex flex-col gap-10 md:flex-row items-center">
            <div className="flex-1">
              <h2 className="text-4xl font-extrabold mb-4 text-gray-900">
                About Me
              </h2>
              <p className="text-lg text-gray-700 mb-4">
                I am a dedicated developer with a passion for creating beautiful
                and functional web experiences. My journey in tech has equipped
                me with a strong foundation in modern web technologies and a
                drive to keep learning and growing.
              </p>
              <p className="text-md text-gray-600 mb-6">
                I enjoy solving problems, collaborating with others, and
                building projects that make a difference.
              </p>

              {/* Specialties */}
              <div className="mt-6 bg-white rounded-xl shadow p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Specialties
                </h3>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  <li>
                    Frontend Development (React, TypeScript, Tailwind CSS)
                  </li>
                  <li>Responsive & Modern UI Design</li>
                  <li>JavaScript</li>
                  <li>Version Control (Git & GitHub)</li>
                </ul>
              </div>

              <div className="mt-6 bg-white rounded-xl shadow p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Currently Learning
                </h3>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  <li>Next.js</li>
                  <li>Supabase</li>
                </ul>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
