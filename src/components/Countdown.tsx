"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Button from "./Button";
import Section from "./Section";

const Countdown = () => {
    const [timeLeft, setTimeLeft] = useState({
        hours: 4,
        minutes: 30,
        seconds: 31,
    });

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(prev => {
                if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
                if (prev.minutes > 0) return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
                if (prev.hours > 0) return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
                return prev;
            });
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    return (
        <Section className="text-center px-4">
            <div className="bg-brand-bg-dark rounded-[2.5rem] md:rounded-[4rem] py-16 md:py-24 px-4 md:px-12 border border-white/5 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-red-500 to-transparent" />

                <div className="py-2 px-4 md:px-6 bg-red-500/10 border border-red-500/20 text-red-500 text-[10px] md:text-sm font-black uppercase tracking-[0.2em] rounded-full inline-flex items-center gap-2 mb-8 md:mb-12">
                    <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
                    URGENT: Limited Slots Remaining
                </div>

                <h2 className="text-3xl md:text-7xl font-outfit font-black mb-6 md:mb-10 leading-tight">
                    Only <span className="text-red-500 drop-shadow-[0_0_15px_rgba(239,68,68,0.3)]">7 Slots</span> Left <br className="hidden md:block" /> for This Week
                </h2>

                <p className="text-gray-400 text-base md:text-xl mb-12 md:mb-20 font-medium">Don't miss out on this life-changing opportunity</p>

                <div className="flex justify-center gap-3 md:gap-8 mb-16 md:mb-24 scale-90 md:scale-100">
                    {Object.entries(timeLeft).map(([key, val]) => (
                        <div key={key}>
                            <div className="w-20 md:w-36 h-20 md:h-36 bg-gradient-to-b from-white/10 to-white/5 rounded-2xl md:rounded-3xl border border-white/10 flex items-center justify-center text-3xl md:text-7xl font-black text-brand-yellow font-outfit shadow-2xl relative overflow-hidden">
                                <div className="absolute inset-0 bg-brand-yellow/5" />
                                <span className="relative z-10">{val.toString().padStart(2, '0')}</span>
                            </div>
                            <p className="mt-4 text-[10px] md:text-xs font-black uppercase tracking-[0.3em] text-gray-500">{key}</p>
                        </div>
                    ))}
                </div>

                <Button className="cta-button-trigger mx-auto text-xl md:text-3xl px-10 md:px-20 py-6 md:py-8 h-auto w-full md:w-auto shadow-[0_20px_40px_rgba(250,204,21,0.2)] group">
                    Secure My Slot for ₹49 <span className="group-hover:translate-x-2 transition-transform">→</span>
                </Button>

                <div className="mt-12 md:mt-20 flex flex-col md:flex-row flex-wrap justify-center gap-4 md:gap-8 text-[10px] md:text-sm text-gray-500 font-black uppercase tracking-widest opacity-60">
                    <span className="flex items-center justify-center gap-2">✅ 100% Money-Back Guarantee</span>
                    <span className="flex items-center justify-center gap-2">✅ Instant Course Access</span>
                    <span className="flex items-center justify-center gap-2">✅ Keep Bonuses Forever</span>
                </div>
            </div>
        </Section>
    );
};

export default Countdown;
