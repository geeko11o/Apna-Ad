"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Section from "./Section";
import { ChevronDown } from "lucide-react";

const faqs = [
    {
        k: "Is my Ad Account safe?",
        a: "Absolutely! My proven system focuses on compliant ads that follow Meta's policies. I teach you how to build authority with Facebook so they don't ban your account even when you scale.",
    },
    {
        k: "What if I don't like the call?",
        a: "We offer a 100% Money-Back Guarantee. If you feel the strategic growth call didn't add value to your business, just let us know and we will refund your ₹49 instantly. No questions asked.",
    },
    {
        k: "Do I need a big ad budget?",
        a: "Not at all. You can start with as low as ₹200-500 per day. The system is designed to maximize ROI regardless of your budget size.",
    },
    {
        k: "Will this work for my platform?",
        a: "Yes, this strategy works for iDigitalPreneur, Bizgurukul, Leadsguru, or any other affiliate/network marketing platform.",
    },
    {
        k: "I'm a complete beginner. Can I do this?",
        a: "Yes! The roadmap is step-by-step. Even if you have never run an ad before, you can follow the instructions and set up your automated system in 24 hours.",
    },
    {
        k: "Why only ₹49? What's the catch?",
        a: "No catch. My goal is to build a massive community of successful affiliates. I want to make it accessible to everyone, but keep the 'freebie-seekers' away.",
    },
];

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <Section>
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-outfit font-bold mb-4">
                    FAQ & <span className="text-brand-yellow">Risk Reversal</span>
                </h2>
                <p className="text-gray-400 text-lg">Got questions? Here are the answers you need.</p>
            </div>

            <div className="max-w-3xl mx-auto space-y-4">
                {faqs.map((f, i) => (
                    <div key={i} className="rounded-2xl border border-white/5 overflow-hidden">
                        <button
                            onClick={() => setOpenIndex(openIndex === i ? null : i)}
                            className="w-full flex items-center justify-between p-6 text-left hover:bg-white/5 transition-colors"
                        >
                            <span className={`font-bold text-lg ${openIndex === i ? 'text-brand-yellow' : ''}`}>{f.k}</span>
                            <ChevronDown className={`transition-transform duration-300 ${openIndex === i ? 'rotate-180 text-brand-yellow' : ''}`} />
                        </button>
                        <AnimatePresence>
                            {openIndex === i && (
                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: "auto", opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    className="overflow-hidden"
                                >
                                    <p className="p-6 pt-0 text-gray-400 border-t border-white/5 bg-white/[0.02]">
                                        {f.a}
                                    </p>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                ))}
            </div>
        </Section>
    );
};

export default FAQ;
