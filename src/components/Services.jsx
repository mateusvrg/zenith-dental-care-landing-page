import React from "react";
import { motion } from "framer-motion";
import { Stethoscope, Sparkles, ShieldCheck } from "lucide-react";

function Services() {

    const services = [
        {
            title: "General Dentistry",
            icon: <Stethoscope size={32} strokeWidth={1.5} />,
            desc: "Routine cleanings and exams."
        },
        {
            title: "Cosmetic Dentistry",
            icon: <Sparkles size={32} strokeWidth={1.5} />,
            desc: "Whitening and veneers."
        },
        {
            title: "Oral Surgery",
            icon: <ShieldCheck size={32} strokeWidth={1.5} />,
            desc: "Implants and extractions."
        }
    ];

    return (
        <section id="services" className="py-44 bg-white">
            <div className="max-w-6xl mx-auto px-8 text-center">

                <h2 className="text-3xl md:text-4xl font-bold text-brand-900 pb-32">
                    Our Services
                </h2>

                <div className="grid md:grid-cols-3 gap-8">

                    {services.map((service, idx) => (

                        <motion.div
                            key={idx}
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.2 }}
                            className="group p-8 rounded-3xl border border-slate-100 bg-white hover:border-brand-200 hover:shadow-2xl hover:shadow-brand-100 transition-all"
                        >

                            <div className="w-16 h-16 mx-auto bg-brand-50 text-brand-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-brand-600 group-hover:text-white transition-all">
                                {service.icon}
                            </div>

                            <h3 className="text-xl font-bold text-brand-900 mb-3">
                                {service.title}
                            </h3>

                            <p className="text-slate-600 leading-relaxed">
                                {service.desc}
                            </p>

                        </motion.div>

                    ))}

                </div>
            </div>
        </section>
    );
}

export default Services;