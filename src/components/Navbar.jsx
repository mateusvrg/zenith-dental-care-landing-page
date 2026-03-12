import React from "react";

function Navbar() {
    return (
        <nav className="sticky top-0 z-50 flex items-center justify-between px-8 py-4 bg-white/80 backdrop-blur-md border-b border-slate-100">
            <a
                href="#"
                className="text-2xl font-bold text-brand-700 tracking-tight hover:opacity-80 transition-opacity cursor-pointer"
                onClick={(e) => {
                    e.preventDefault();
                    window.scrollTo({ top: 0, behavior: "smooth" });
                }}
            >
                Zenith<span className="text-slate-400 font-light">Dental</span>
            </a>

            <div className="hidden md:flex space-x-8 text-slate-600 font-medium">
                {[
                    { label: "Services", id: "services" },
                    { label: "Testimonials", id: "testimonials" },
                ].map((item) => (
                    <a
                        key={item.id}
                        href={`#${item.id}`}
                        className="relative hover:text-brand-600 transition-colors group"
                    >
                        {item.label}
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-600 transition-all group-hover:w-full"></span>
                    </a>
                ))}
            </div>

            <a
                className="bg-brand-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-brand-700 hover:scale-105 active:scale-95 transition-all shadow-md cursor-pointer"
                href="#booking"
            >
                Book Now
            </a>
        </nav>
    );
}

export default Navbar;