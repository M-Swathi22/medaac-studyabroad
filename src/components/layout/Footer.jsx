import { FaInstagram, FaFacebookF, FaYoutube, FaWhatsapp } from "react-icons/fa";
import logo from "../../assets/images/logo-footer.png";

function Footer() {
    const navLinks = [
        { label: "Home", href: "/" },
        { label: "About", href: "/about" },
        { label: "Courses", href: "/courses" },
        { label: "Study India", href: "/study-india" },
        { label: "Study Abroad", href: "/study-abroad" },
        { label: "MBBS Abroad", href: "/mbbs-abroad" },
        { label: "Blog", href: "/blog" },
    ];

    return (
        <footer
            className="pt-12 md:pt-16 pb-8"
            style={{
                background: "linear-gradient(135deg, #121212 0%, #1A1A1A 60%, #2A0A1A 100%)",
                fontFamily: "var(--font-main)",
            }}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-16 xl:px-24">

                {/* TOP GRID */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-10 mb-10 md:mb-12">

                    {/* BRAND */}
                    <div className="sm:col-span-2 md:col-span-1">
                        <img src={logo} alt="logo" className="h-9 mb-4" />

                        <p className="text-sm text-gray-400 leading-relaxed max-w-sm">
                            Helping students achieve their dream of studying abroad with
                            complete guidance — from admission to visa support.
                        </p>

                        {/* SOCIALS */}
                        <div className="flex gap-4 mt-5">
                            {[FaInstagram, FaFacebookF, FaYoutube, FaWhatsapp].map((Icon, i) => (
                                <div
                                    key={i}
                                    className="w-10 h-10 flex items-center justify-center rounded-full cursor-pointer transition hover:scale-105"
                                    style={{
                                        background: "rgba(255,255,255,0.08)",
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
                        <h3 className="font-semibold mb-4 text-white">Quick Links</h3>
                        <ul className="space-y-2 text-sm text-gray-400">
                            {navLinks.map((item) => (
                                <li key={item.label}>
                                    <a href={item.href} className="hover:text-[var(--primary)] transition">
                                        {item.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* COURSES */}
                    <div>
                        <h3 className="font-semibold mb-4 text-white">Courses</h3>
                        <ul className="space-y-2 text-sm text-gray-400">
                            {["MBBS Abroad", "Nursing", "Paramedical"].map((item) => (
                                <li key={item}>
                                    <span className="hover:text-[var(--primary)] transition cursor-pointer">
                                        {item}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* CONTACT */}
                    <div>
                        <h3 className="font-semibold mb-4 text-white">Contact</h3>
                        <ul className="space-y-2 text-sm text-gray-400">
                            <li>📍 Tamil Nadu, India</li>
                            <li>📞 +91 98765 43210</li>
                            <li>✉️ info@medaac.com</li>
                        </ul>
                    </div>
                </div>

                {/* DIVIDER */}
                <div className="h-[1px] bg-gray-700 mb-6" />

                {/* BOTTOM */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-3 text-sm text-gray-500">

                    <p>© 2026 MEDAAC. All rights reserved.</p>

                    <div className="flex gap-4">
                        <span className="cursor-pointer hover:text-white">Privacy Policy</span>
                        <span className="cursor-pointer hover:text-white">Terms & Conditions</span>
                    </div>
                </div>

            </div>
        </footer>
    );
}

export default Footer;