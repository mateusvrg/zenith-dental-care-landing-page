import React from "react";
import { motion } from "framer-motion";
import imgClinica from "../assets/dentalCareImage.png";

function Hero() {
    return (
        <header className="px-8 py-16 md:py-24 bg-linear-to-b from-brand-50 to-white overflow-hidden">
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className="text-5xl md:text-7xl font-extrabold text-brand-900 leading-tight">
                        Your Smile, <br />
                        <span className="text-brand-600 tracking-tight">
                            Reimagined.
                        </span>
                    </h1>

                    <p className="mt-6 text-lg text-slate-600 leading-relaxed max-w-lg">
                        Experience state-of-the-art dental care in a comfortable environment.
                    </p>

                    <div className="mt-10 flex flex-col sm:flex-row gap-4">
                        <a
                            href="#booking"
                            className="bg-brand-600 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-xl shadow-brand-100 hover:bg-brand-700 hover:scale-105 transition-all text-center"
                        >
                            Schedule Online
                        </a>

                        <a
                            href="#services"
                            className="bg-white text-brand-700 border-2 border-brand-100 px-8 py-4 rounded-xl font-bold text-lg hover:border-brand-600 transition-all text-center"
                        >
                            Our Services
                        </a>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative"
                >
                    <div className="absolute -inset-4 bg-brand-200/30 rounded-full blur-3xl"></div>

                    <div className="relative w-full h-125 rounded-3xl shadow-2xl overflow-hidden border-3 border-white">
                        <img
                            src={imgClinica}
                            alt="Modern dental clinic interior"
                            className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                        />
                    </div>
                </motion.div>

            </div>
        </header>
    );
}

export default Hero;