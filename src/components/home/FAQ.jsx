import { useState } from "react";
import { Plus, X, Phone, MessageCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  { q: "How long does the admission process take?", a: "Typically 2–4 weeks depending on university selection and document readiness." },
  { q: "Which countries do you provide guidance for?", a: "We guide students for MBBS and other courses in Russia, Georgia, Kazakhstan, Philippines, and more." },
  { q: "Is there any fee for counselling?", a: "No. Initial counselling and profile evaluation are completely free." },
  { q: "Do you help with visa processing?", a: "Yes, we provide complete visa assistance including documentation and interview preparation." },
  { q: "What documents are required?", a: "10th & 12th marksheets, NEET scorecard, valid passport, and passport-size photos." },
];

function FAQItem({ item, index, isOpen, onToggle }) {
  return (
    <div
      className="rounded-xl overflow-hidden transition-all duration-300"
      style={{
        background: isOpen ? "var(--primary)" : "white",
        border: "1px solid rgba(0,0,0,0.08)",
        boxShadow: isOpen ? "0 8px 25px rgba(224,17,127,0.25)" : "none",
      }}
    >
      <button
        onClick={() => onToggle(index)}
        className="w-full flex items-center justify-between px-4 sm:px-5 py-4"
      >
        <div className="flex items-center gap-3">

          {/* NUMBER */}
          <div
            className="min-w-[28px] h-[28px] flex items-center justify-center rounded-full text-xs font-bold"
            style={{
              background: isOpen
                ? "white"
                : "rgba(224,17,127,0.08)",
              color: isOpen
                ? "var(--primary)"
                : "var(--primary)",
            }}
          >
            {String(index + 1).padStart(2, "0")}
          </div>

          <span
            className="text-sm sm:text-[15px] font-medium text-left"
            style={{
              color: isOpen ? "white" : "var(--dark)",
            }}
          >
            {item.q}
          </span>
        </div>

        <Plus
          size={12}
          style={{
            color: isOpen ? "white" : "#555",
            transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
            transition: "0.2s",
          }}
        />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
          >
            <p
              className="px-4 sm:px-5 pb-4 text-sm"
              style={{
                color: "rgba(255,255,255,0.85)",
                paddingLeft: "48px",
              }}
            >
              {item.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);
  const [question, setQuestion] = useState("");

  return (
    <section
      className="py-16 sm:py-20"
      style={{ background: "var(--light)", fontFamily: "var(--font-main)" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-16">

        {/* HEADING */}
        <div className="text-center mb-10 sm:mb-14">
          <h2
            style={{
              fontSize: "clamp(1.6rem,4vw,2.6rem)",
              fontWeight: 800,
              color: "var(--dark)",
            }}
          >
            Frequently{" "}
            <span style={{ color: "var(--primary)" }}>
              Asked Questions
            </span>
          </h2>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-center">

          {/* LEFT */}
          <div className="flex flex-col gap-3">
            {faqs.map((item, i) => (
              <FAQItem
                key={i}
                item={item}
                index={i}
                isOpen={openIndex === i}
                onToggle={(i) =>
                  setOpenIndex(openIndex === i ? null : i)
                }
              />
            ))}
          </div>

          {/* RIGHT */}
          <div className="flex flex-col items-center text-center">

            {/* SHAPE */}
            <div className="relative mb-6 sm:mb-8 w-[180px] h-[180px] sm:w-[240px] sm:h-[240px] flex items-center justify-center">

              {/* GLOW */}
              <div
                className="absolute w-full h-full rounded-full blur-2xl"
                style={{ background: "rgba(224,17,127,0.25)" }}
              />

              {/* SHAPE */}
              <motion.svg
                viewBox="0 0 200 200"
                className="w-full h-full relative z-10"
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
              >
                <path
                  d="M100 20 L120 70 L180 70 L130 110 L150 170 L100 135 L50 170 L70 110 L20 70 L80 70 Z"
                  fill="var(--primary)"
                />
              </motion.svg>

              {/* CENTER TEXT */}
              <div className="absolute z-20 flex flex-col items-center">
                <span className="text-white text-lg sm:text-2xl font-bold">5000+</span>
                <span className="text-white text-[10px] sm:text-xs">Students</span>
              </div>

              {/* CALL */}
              <motion.div
                className="absolute top-0 left-[-5px] sm:left-[-10px] z-30 px-3 py-1.5 sm:px-4 sm:py-2 rounded-xl bg-white flex gap-2 items-center shadow"
                animate={{ y: [0, -6, 0] }}
                transition={{ repeat: Infinity, duration: 3 }}
              >
                <Phone size={12} />
                <span className="text-[10px] sm:text-xs">Call</span>
              </motion.div>

              {/* WHATSAPP */}
              <motion.div
                className="absolute bottom-0 right-[-5px] sm:right-[-10px] z-30 px-3 py-1.5 sm:px-4 sm:py-2 rounded-xl bg-white flex gap-2 items-center shadow"
                animate={{ y: [0, 6, 0] }}
                transition={{ repeat: Infinity, duration: 3 }}
              >
                <MessageCircle size={12} />
                <span className="text-[10px] sm:text-xs">WhatsApp</span>
              </motion.div>
            </div>

            {/* TEXT */}
            <h3 className="text-lg sm:text-xl font-bold mb-2">
              Still Confused?
            </h3>

            <p
              className="text-xs sm:text-sm mb-5 sm:mb-6"
              style={{ color: "var(--gray)" }}
            >
              Ask anything. We’ll answer fast.
            </p>

            {/* INPUT */}
            <div className="w-full max-w-sm">
              <div
                className="flex items-center rounded-lg overflow-hidden"
                style={{
                  border: "1px solid rgba(0,0,0,0.15)",
                  background: "white",
                }}
              >
                <input
                  value={question}
                  onChange={(e) => setQuestion(e.target.value)}
                  placeholder="Enter your question"
                  className="flex-1 px-4 py-2 text-sm outline-none"
                />
                {question && (
                  <button onClick={() => setQuestion("")} className="px-2">
                    <X size={14} />
                  </button>
                )}
              </div>

              <button
                className="mt-4 w-full py-3 rounded-full text-white font-semibold"
                style={{ background: "var(--secondary)" }}
              >
                Send Question
              </button>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

export default FAQ;