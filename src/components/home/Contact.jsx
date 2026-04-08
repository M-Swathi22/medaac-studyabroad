import { Phone, MessageCircle, MapPin, Mail } from "lucide-react";

function Contact() {
  return (
    <section
      className="min-h-[auto] md:min-h-screen py-16 md:py-20 relative overflow-hidden"
      style={{ fontFamily: "var(--font-main)" }}
    >

      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-gradient-to-br 
        from-[var(--primary-light)] via-white to-[var(--secondary)/20]
        animate-[gradientMove_10s_ease-in-out_infinite]" />

      <div className="absolute -top-32 -left-32 w-[300px] md:w-[400px] h-[300px] md:h-[400px] 
        bg-[var(--primary)] opacity-30 rounded-full blur-3xl 
        animate-[float1_12s_ease-in-out_infinite]" />

      <div className="absolute bottom-[-80px] md:bottom-[-100px] right-[-60px] md:right-[-80px] 
        w-[260px] md:w-[350px] h-[260px] md:h-[350px] 
        bg-[var(--secondary)] opacity-30 rounded-full blur-3xl 
        animate-[float2_14s_ease-in-out_infinite]" />

      {/* HEADER */}
      <div className="relative z-10 text-center max-w-3xl mx-auto mb-12 md:mb-16 px-5">
        <h2
          className="font-extrabold"
          style={{ fontSize: "clamp(1.8rem,4vw,2.8rem)", color: "var(--dark)" }}
        >
          Book a <span style={{ color: "var(--secondary)" }}>FREE</span> Counselling Session
        </h2>

        <p className="mt-3 text-sm md:text-base" style={{ color: "var(--gray)" }}>
          Get in touch today, and make your Study Abroad dreams a reality!
        </p>
      </div>

      {/* GRID */}
      <div className="relative z-10 max-w-6xl mx-auto px-5 grid md:grid-cols-2 gap-10 md:gap-12">

        {/* FORM */}
        <div
          className="p-6 md:p-8"
          style={{
            background: "var(--primary)",
            borderRadius: "24px",
            border: "1px solid rgba(255,255,255,0.15)",
          }}
        >
          <h3 className="text-base md:text-lg font-semibold mb-5 md:mb-6 text-white">
            Fill in the form below
          </h3>

          <form className="space-y-4">

            <input
              type="text"
              placeholder="Name*"
              required
              className="w-full px-5 py-3 rounded-full outline-none transition text-sm md:text-base"
              style={{ background: "white", touchAction: "manipulation" }}
              onFocus={(e) => (e.target.style.boxShadow = "0 0 0 2px var(--secondary)")}
              onBlur={(e) => (e.target.style.boxShadow = "none")}
            />

            <input
              type="tel"
              placeholder="Phone Number*"
              required
              className="w-full px-5 py-3 rounded-full outline-none transition text-sm md:text-base"
              style={{ background: "white", touchAction: "manipulation" }}
              onFocus={(e) => (e.target.style.boxShadow = "0 0 0 2px var(--secondary)")}
              onBlur={(e) => (e.target.style.boxShadow = "none")}
            />

            <input
              type="email"
              placeholder="Email"
              className="w-full px-5 py-3 rounded-full outline-none transition text-sm md:text-base"
              style={{ background: "white", touchAction: "manipulation" }}
              onFocus={(e) => (e.target.style.boxShadow = "0 0 0 2px var(--secondary)")}
              onBlur={(e) => (e.target.style.boxShadow = "none")}
            />

            <textarea
              placeholder="Any other details..."
              rows="4"
              className="w-full px-5 py-3 rounded-2xl outline-none transition text-sm md:text-base"
              style={{ background: "white", touchAction: "manipulation" }}
              onFocus={(e) => (e.target.style.boxShadow = "0 0 0 2px var(--secondary)")}
              onBlur={(e) => (e.target.style.boxShadow = "none")}
            />

            <button
              type="submit"
              className="w-full py-3 rounded-full transition active:scale-95"
              style={{
                background: "var(--secondary)",
                color: "white",
                fontWeight: 600,
              }}
              onMouseEnter={(e) => (e.target.style.opacity = "0.9")}
              onMouseLeave={(e) => (e.target.style.opacity = "1")}
            >
              Submit
            </button>

          </form>
        </div>

        {/* CONTACT INFO */}
        <div className="space-y-6 md:space-y-8">

          <div className="flex items-start md:items-center gap-4">
            <Phone style={{ color: "var(--primary)" }} />
            <div>
              <h4 className="font-semibold text-[var(--dark)] text-sm md:text-base">Call Us</h4>
              <p className="text-xs md:text-sm text-[var(--gray)]">
                Give a call to get a one to one counselling session.
              </p>
              <a href="tel:+919876543210" className="mt-1 block text-sm text-[var(--dark)]">
                +91 98765 43210
              </a>
            </div>
          </div>

          <hr className="border-gray-200" />

          <div className="flex items-start md:items-center gap-4">
            <MessageCircle style={{ color: "var(--primary)" }} />
            <div>
              <h4 className="font-semibold text-[var(--dark)] text-sm md:text-base">WhatsApp</h4>
              <p className="text-xs md:text-sm text-[var(--gray)]">
                Chat with us on WhatsApp.
              </p>
              <a
                href="https://wa.me/919876543210"
                target="_blank"
                className="mt-1 block text-sm text-[var(--dark)]"
              >
                +91 98765 43210
              </a>
            </div>
          </div>

          <hr className="border-gray-200" />

          <div className="flex items-start md:items-center gap-4">
            <MapPin style={{ color: "var(--primary)" }} />
            <div>
              <h4 className="font-semibold text-[var(--dark)] text-sm md:text-base">
                Visit our office
              </h4>
              <p className="text-xs md:text-sm text-[var(--gray)]">
                Medaac Education
              </p>
              <p className="text-xs md:text-sm text-[var(--gray)]">
                Coimbatore, Tamil Nadu, India
              </p>
              <a
                href="https://maps.google.com"
                target="_blank"
                className="inline-block mt-2 text-sm"
                style={{ color: "var(--secondary)" }}
              >
                Google Maps →
              </a>
            </div>
          </div>

          <hr className="border-gray-200" />

          <div className="flex items-start md:items-center gap-4">
            <Mail style={{ color: "var(--primary)" }} />
            <div>
              <h4 className="font-semibold text-[var(--dark)] text-sm md:text-base">
                Contact us by email
              </h4>
              <p className="text-xs md:text-sm text-[var(--gray)]">
                Prefer the written word? Drop us an email.
              </p>
              <a href="mailto:info@medaac.com" className="mt-1 block text-sm text-[var(--dark)]">
                info@medaac.com
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* ANIMATIONS */}
      <style jsx>{`
        @keyframes float1 {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(30px, 40px); }
        }
        @keyframes float2 {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(-40px, -30px); }
        }
        @keyframes gradientMove {
          0%, 100% { filter: hue-rotate(0deg); }
          50% { filter: hue-rotate(15deg); }
        }
      `}</style>

    </section>
  );
}

export default Contact;