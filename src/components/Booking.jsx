import React from "react";

function Booking() {
    return (
        <section id="booking" className="py-32 bg-white">
            <div className="max-w-4xl mx-auto px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-brand-900">
                        Book Your Consultation
                    </h2>
                    <p className="text-slate-600 mt-4 text-lg">
                        Select a convenient time for your visit.
                    </p>
                </div>

                {/* Container Premium Largo com correção de barra */}
                <div className="rounded-3xl border border-slate-100 shadow-2xl overflow-hidden bg-white flex flex-col min-h-125 max-w-5xl mx-auto">
                    {/* Linha decorativa no topo */}
                    <div className="h-1.5 bg-brand-600 w-full shrink-0"></div>

                    <div className="relative w-full h-150 md:h-187.5">
                        <iframe
                            src="https://calendly.com/mateuspopolim2/30min?hide_event_type_details=1&hide_gdpr_banner=1"
                            width="100%"
                            height="100%"
                            title="Calendly Scheduling"
                            className="absolute inset-0 w-full h-full border-none"
                            style={{ colorScheme: 'light', border: "0", overflow: "hidden" }}
                        ></iframe>
                    </div>
                </div>

                {/* Indicador de Status abaixo do Card */}
                <div className="mt-8 flex items-center justify-center gap-2 text-slate-400">
                    <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                    <p className="text-sm">Available slots for this week</p>
                </div>
            </div>
        </section>
    );
}

export default Booking;