import { FaInstagram, FaFacebookF, FaYoutube, FaWhatsapp } from "react-icons/fa";
import logo from "../../assets/images/logo-footer.png";

function Footer() {
    return (
        <footer
            className="pt-12 md:pt-16 pb-8"
            style={{
                background: "linear-gradient(135deg, var(--primary) 0%, var(--primary) 100%)",
                fontFamily: "var(--font-main)",
            }}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-16 xl:px-24">

                {/* TOP GRID */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-10 mb-10 md:mb-12">

                    {/* BRAND */}
                    <div className="sm:col-span-2 md:col-span-1">
                        <div className="flex items-center gap-3 mb-4">
                            <img
                                src={logo}
                                alt="logo"
                                className="h-8 md:h-9 w-auto object-contain"
                            />
                        </div>

                        <p
                            className="text-sm leading-relaxed max-w-sm"
                            style={{ color: "rgba(255,255,255,0.75)" }}
                        >
                            Helping students achieve their dream of studying abroad with
                            complete guidance — from admission to visa support.
                        </p>

                        {/* SOCIALS */}
                        <div className="flex gap-3 md:gap-4 mt-5">
                            {[FaInstagram, FaFacebookF, FaYoutube, FaWhatsapp].map((Icon, i) => (
                                <div
                                    key={i}
                                    className="w-10 h-10 md:w-9 md:h-9 flex items-center justify-center rounded-full cursor-pointer transition hover:scale-105 active:scale-95"
                                    style={{
                                        background: "rgba(255,255,255,0.1)",
                                        color: "white",
                                    }}
                                >
                                    <Icon size={14} />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* QUICK LINKS */}
                    <div>
                        <h3 className="font-semibold mb-3 md:mb-4 text-white">
                            Quick Links
                        </h3>

                        <ul className="space-y-2 text-sm">
                            {["Home", "About", "Courses", "Study Abroad", "Blog"].map((item) => (
                                <li
                                    key={item}
                                    className="cursor-pointer transition hover:text-white active:opacity-70"
                                    style={{ color: "rgba(255,255,255,0.7)" }}
                                >
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* COURSES */}
                    <div>
                        <h3 className="font-semibold mb-3 md:mb-4 text-white">
                            Courses
                        </h3>

                        <ul className="space-y-2 text-sm">
                            {["MBBS Abroad", "Nursing", "Paramedical"].map((item) => (
                                <li
                                    key={item}
                                    className="cursor-pointer transition hover:text-white active:opacity-70"
                                    style={{ color: "rgba(255,255,255,0.7)" }}
                                >
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* CONTACT */}
                    <div>
                        <h3 className="font-semibold mb-3 md:mb-4 text-white">
                            Contact
                        </h3>

                        <ul className="space-y-2 text-sm">
                            <li style={{ color: "rgba(255,255,255,0.75)" }}>
                                📍 Tamil Nadu, India
                            </li>
                            <li style={{ color: "rgba(255,255,255,0.75)" }}>
                                📞 +91 98765 43210
                            </li>
                            <li style={{ color: "rgba(255,255,255,0.75)" }}>
                                ✉️ info@medaac.com
                            </li>
                        </ul>
                    </div>
                </div>

                {/* DIVIDER */}
                <div
                    className="h-[1px] mb-5 md:mb-6"
                    style={{ background: "rgba(255,255,255,0.15)" }}
                />

                {/* BOTTOM */}
                <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-3 text-sm">

                    <p style={{ color: "rgba(255,255,255,0.65)" }}>
                        © 2026 MEDAAC. All rights reserved.
                    </p>

                    <div className="flex flex-wrap justify-center md:justify-end gap-4">
                        <span
                            className="cursor-pointer hover:text-white"
                            style={{ color: "rgba(255,255,255,0.65)" }}
                        >
                            Privacy Policy
                        </span>
                        <span
                            className="cursor-pointer hover:text-white"
                            style={{ color: "rgba(255,255,255,0.65)" }}
                        >
                            Terms & Conditions
                        </span>
                    </div>
                </div>

            </div>
        </footer>
    );
}

export default Footer;