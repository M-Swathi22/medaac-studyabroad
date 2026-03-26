import { motion } from "framer-motion";
import heroImg from "../../assets/images/hero.avif";

function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-28 pb-16 px-4 sm:px-6 overflow-hidden">

      {/* BACKGROUND */}
      <div className="absolute inset-0 
        bg-gradient-to-r from-[var(--primary-light)] via-white to-[var(--primary-light)]" />

      {/* FOG */}
      <div className="absolute top-20 left-[-50px] w-80 sm:w-96 h-80 sm:h-96 bg-[var(--primary)] opacity-20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-[-50px] w-80 sm:w-96 h-80 sm:h-96 bg-[var(--secondary)] opacity-20 rounded-full blur-3xl"></div>
      <div className="absolute top-40 right-20 w-60 h-60 bg-[var(--secondary)] opacity-10 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">

        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6 text-center md:text-left"
        >

          {/* 🔥 CLEAN HEADING */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-[var(--dark)]">
            Start Your Journey with{" "}
            <span className="text-[var(--primary)]">
              MBBS Abroad
            </span>
          </h1>

          <p className="text-gray-600 text-sm sm:text-base md:text-lg max-w-xl mx-auto md:mx-0 leading-relaxed">
            We guide you in choosing the right country, university, and support you through
            admission, visa, and everything in between.
          </p>

          {/* SEARCH (SMOKY GLOW KEPT) */}
          <div className="relative max-w-md sm:max-w-lg mx-auto md:mx-0">

            <div className="absolute inset-0 rounded-full 
              bg-[var(--secondary)] opacity-30 blur-lg">
            </div>

            <div className="relative flex items-center bg-white shadow-md rounded-full overflow-hidden">
              <input
                type="text"
                placeholder="Search countries..."
                className="flex-1 px-5 py-3 outline-none text-sm"
              />
              <button className="bg-[var(--secondary)] text-white px-6 py-3">
                🔍
              </button>
            </div>

          </div>

          {/* TRUST */}
          <div className="flex items-center justify-center md:justify-start gap-4 pt-2">
            <div className="flex -space-x-3">
              <img src="https://i.pravatar.cc/50?img=1" className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border-2 border-white" />
              <img src="https://i.pravatar.cc/50?img=2" className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border-2 border-white" />
              <img src="https://i.pravatar.cc/50?img=3" className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border-2 border-white" />
            </div>
            <p className="text-xs sm:text-sm text-gray-600">
              Trusted by{" "}
              <span className="font-semibold text-[var(--dark)]">2000+</span> students
            </p>
          </div>

        </motion.div>

        {/* RIGHT */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative flex justify-center mt-10 md:mt-0"
        >

          <img
            src={heroImg}
            alt="students"
            className="rounded-2xl shadow-xl w-full max-w-[420px] sm:max-w-[500px] md:max-w-[580px] object-cover"
          />

          <div className="
            absolute 
            -bottom-10 sm:-bottom-12 md:-bottom-14
            bg-white shadow-xl rounded-xl 
            px-5 sm:px-7 md:px-8 
            py-4 sm:py-5 
            flex gap-6 sm:gap-8 md:gap-10 
            text-center
          ">
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-[var(--primary)]">10+</h3>
              <p className="text-xs sm:text-sm text-gray-600">Countries</p>
            </div>

            <div>
              <h3 className="text-lg sm:text-xl font-bold text-[var(--secondary)]">500+</h3>
              <p className="text-xs sm:text-sm text-gray-600">Universities</p>
            </div>

            <div>
              <h3 className="text-lg sm:text-xl font-bold text-[var(--primary)]">95%</h3>
              <p className="text-xs sm:text-sm text-gray-600">Success Rate</p>
            </div>
          </div>

        </motion.div>

      </div>
    </section>
  );
}

export default Hero;