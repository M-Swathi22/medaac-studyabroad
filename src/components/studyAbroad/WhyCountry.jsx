import { motion } from "framer-motion";
import {
  GraduationCap,
  Globe2,
  Briefcase,
  DollarSign,
} from "lucide-react";

export default function WhyCountry({ country }) {
  const features = [
    {
      icon: GraduationCap,
      title: "Top Ranked Universities",
      desc: `Study in globally recognized universities across ${country.name} with modern infrastructure and advanced education systems.`,
    },

    {
      icon: Globe2,
      title: "International Exposure",
      desc: `Experience multicultural environments, global networking opportunities, and internationally accepted degrees.`,
    },

    {
      icon: DollarSign,
      title: "Affordable Tuition",
      desc: `${country.name} offers quality education with affordable tuition fees and budget-friendly living expenses.`,
    },

    {
      icon: Briefcase,
      title: "Career Opportunities",
      desc: `Build strong international career opportunities with globally valuable academic qualifications.`,
    },
  ];

  return (
    <section
      className="relative py-24 overflow-hidden"
      style={{
        background: "#FFF7FA",
        fontFamily: "var(--font-main)",
      }}
    >
      {/* BACKGROUND GLOW */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(225,10,111,0.08) 0%, transparent 70%)",
          filter: "blur(70px)",
        }}
      />

      <div className="relative max-w-[1320px] mx-auto px-6">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >

          <div
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-xs font-bold uppercase tracking-[0.2em] mb-6"
            style={{
              background: "rgba(225,10,111,0.08)",
              color: "var(--primary)",
              border: "1px solid rgba(225,10,111,0.12)",
            }}
          >
            Why Choose {country.name}
          </div>

          <h2
            className="text-[2.3rem] md:text-[3rem] font-extrabold leading-[1.1]"
            style={{
              color: "var(--dark)",
            }}
          >
            Benefits of Studying in{" "}
            <span style={{ color: "var(--primary)" }}>
              {country.name}
            </span>
          </h2>

          <p
            className="mt-5 text-[1rem] leading-[1.9]"
            style={{
              color: "var(--gray)",
            }}
          >
            Discover why thousands of students choose{" "}
            {country.name} every year for higher education,
            international exposure, and career growth.
          </p>

        </motion.div>

        {/* FEATURES GRID */}
        <div className="grid md:grid-cols-2 gap-7">

          {features.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.08,
                }}
                viewport={{ once: true }}
              >
                <div
                  className="h-full p-8 rounded-[28px] transition-all duration-300"
                  style={{
                    background: "var(--white)",
                    border: "1px solid rgba(225,10,111,0.08)",
                    boxShadow: "0 8px 30px rgba(0,0,0,0.04)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform =
                      "translateY(-6px)";
                    e.currentTarget.style.boxShadow =
                      "0 18px 40px rgba(225,10,111,0.12)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform =
                      "translateY(0px)";
                    e.currentTarget.style.boxShadow =
                      "0 8px 30px rgba(0,0,0,0.04)";
                  }}
                >

                  {/* ICON */}
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6"
                    style={{
                      background: "var(--primary-light)",
                    }}
                  >
                    <Icon
                      size={26}
                      color="var(--primary)"
                    />
                  </div>

                  {/* TITLE */}
                  <h3
                    className="text-[1.3rem] font-bold"
                    style={{
                      color: "var(--dark)",
                    }}
                  >
                    {item.title}
                  </h3>

                  {/* DESC */}
                  <p
                    className="mt-4 text-[0.96rem] leading-[1.9]"
                    style={{
                      color: "var(--gray)",
                    }}
                  >
                    {item.desc}
                  </p>

                </div>
              </motion.div>
            );
          })}

        </div>

      </div>
    </section>
  );
}