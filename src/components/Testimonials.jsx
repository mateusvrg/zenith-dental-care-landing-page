import React from "react";

function Testimonials() {

    const testimonials = [
        {
            text: "The best dental experience I've ever had. The facility is modern and the staff is incredibly professional. My veneers look amazing!",
            name: "James Sullivan",
            role: "Tech Entrepreneur",
            initials: "JS"
        },
        {
            text: "Online booking was so easy. I scheduled my appointment at 10 PM and was seen the next morning. Highly recommend Zenith!",
            name: "Maria Anderson",
            role: "Graphic Designer",
            initials: "MA"
        },
        {
            text: "A truly premium clinic. They explained every step of my implant procedure. I felt safe and very well taken care of.",
            name: "Robert Brown",
            role: "College Professor",
            initials: "RB"
        }
    ];

    return (
        <section id="testimonials" className="py-20 bg-brand-50">
            <div className="max-w-6xl mx-auto px-8">

                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-brand-900">
                        What Our Patients Say
                    </h2>

                    <div className="flex justify-center mt-4 space-x-1">
                        {[...Array(5)].map((_, i) => (
                            <span key={i} className="text-yellow-400 text-xl">★</span>
                        ))}
                        <span className="ml-2 text-slate-600 font-medium">4.9/5 Rating</span>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

                    {testimonials.map((t, index) => (
                        <div
                            key={index}
                            className="bg-white p-8 rounded-2xl shadow-sm border border-brand-100"
                        >

                            <p className="text-slate-600 italic mb-6">
                                "{t.text}"
                            </p>

                            <div className="flex items-center">

                                <div className="w-12 h-12 bg-brand-100 rounded-full flex items-center justify-center text-brand-700 font-bold mr-4">
                                    {t.initials}
                                </div>

                                <div>
                                    <h4 className="font-bold text-brand-900">
                                        {t.name}
                                    </h4>

                                    <p className="text-sm text-slate-500">
                                        {t.role}
                                    </p>
                                </div>

                            </div>

                        </div>
                    ))}

                </div>

            </div>
        </section>
    );
}

export default Testimonials;