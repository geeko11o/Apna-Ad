"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Button from "./Button";
import { Play } from "lucide-react";

const Hero = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [mounted, setMounted] = useState(false);

    // Ye isliye taaki animation sirf browser par chale aur crash na ho
    useEffect(() => {
        setMounted(true);
    }, []);

    // Yahan apni Vimeo Video ID daalein (Jab aapke paas ho)
    const VIMEO_ID = "56282283"; // Maine ek temporary ID dali hai check karne ke liye

    if (!mounted) return null;

    return (
        <section className="relative pt-36 md:pt-35 pb-0 md:pb-32 overflow-hidden px-4">
            {/* Background Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[300px] md:h-[600px] bg-brand-blue/15 blur-[80px] md:blur-[120px] rounded-full -z-10" />

            <div className="max-w-7xl mx-auto text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    {/* ==========================================================
                        DESKTOP VERSION (Only visible on Laptop/PC)
                    ========================================================== */}
                    <div className="hidden md:block">
                        <span className="inline-block py-1.5 px-4 rounded-full bg-brand-yellow/10 border border-brand-yellow/20 text-brand-yellow text-xs font-bold uppercase tracking-wider mb-8">
                            ✨ Limited Time Offer - 99% OFF!
                        </span>

                        <h1 className="text-7xl font-outfit font-black leading-[1.1] mb-6 tracking-tight text-white">
                            Stop Wasting Time on <br />
                            <span className="text-red-500 relative">Junk Leads!
                                <svg className="absolute -bottom-2 left-0 w-full h-3 text-brand-yellow/40" viewBox="0 0 100 10" preserveAspectRatio="none">
                                    <path d="M0 5 Q 25 0, 50 5 T 100 5" stroke="currentColor" strokeWidth="4" fill="none" />
                                </svg>
                            </span> <br />
                            Scale Your Affiliate Business <br />
                            <span className="text-brand-yellow drop-shadow-[0_0_15px_rgba(250,204,21,0.3)]">3X Faster</span>
                        </h1>

                        <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed">
                            Copy the exact strategy I used to generate <span className="text-white font-bold">₹50 Lakh+</span> in Commissions. <br />
                            <span className="block mt-2 text-lg opacity-80">
                                No Cold DMs. No Account Bans. Just Highly Interested Leads.🚀
                            </span>
                        </p>

                        {/* Desktop Video Section */}
                        <div className="relative max-w-5xl mx-auto aspect-video rounded-[2.5rem] overflow-hidden border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] bg-black group mb-16">
                            {!isPlaying ? (
                                <div className="absolute inset-0 z-20 cursor-pointer" onClick={() => setIsPlaying(true)}>
                                    <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 via-transparent to-transparent z-10" />
                                    <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200" alt="Dashboard Proof" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" />
                                    <div className="absolute inset-0 flex items-center justify-center z-20">
                                        <div className="w-24 h-24 bg-brand-yellow rounded-full flex items-center justify-center shadow-[0_0_40px_rgba(250,204,21,0.5)] group-hover:scale-110 transition-transform active:scale-95 duration-500">
                                            <Play className="fill-black w-10 h-10 ml-1" />
                                        </div>
                                    </div>
                                    <div className="absolute bottom-10 left-10 text-left z-20">
                                        <div className="flex items-center gap-2 mb-2">
                                            <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
                                            <p className="text-brand-yellow font-bold text-xs uppercase tracking-[0.2em]">Live Dashboard Reveal</p>
                                        </div>
                                        <p className="text-white text-3xl font-black">Watch: How I generated ₹50 Lakhs</p>
                                    </div>
                                </div>
                            ) : (
                                <iframe src={`https://player.vimeo.com/video/${VIMEO_ID}?autoplay=1`} className="absolute top-0 left-0 w-full h-full border-0" allow="autoplay; fullscreen" allowFullScreen />
                            )}
                        </div>

                        {/* Desktop Button */}
                        <div className="flex flex-col items-center justify-center gap-6 mt-12">
                            <motion.div
                                animate={{ rotate: [0, -1, 1, -1, 1, 0], scale: [1, 1.03, 1], y: [0, -4, 0] }}
                                transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 2, ease: "easeInOut" }}
                            >
                                <Button className="cta-button-trigger px-12 py-5 text-xl rounded-2xl md:rounded-3xl relative overflow-hidden shadow-[0_10px_30px_rgba(250,204,21,0.25)]">
                                    <span className="relative z-10">Get the ₹50 Lakh Blueprint →</span>
                                    <motion.div animate={{ x: ['-100%', '200%'] }} transition={{ repeat: Infinity, duration: 2, repeatDelay: 1 }} className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 z-0" />
                                </Button>
                            </motion.div>
                            <div className="flex items-center gap-6 text-sm text-gray-500">
                                <span className="font-medium">⚡ Instant Access</span>
                                <span className="w-1 h-1 bg-gray-700 rounded-full" />
                                <span className="font-medium">🔒 Secure Payment</span>
                            </div>
                        </div>
                    </div>


                    {/* ==========================================================
                        MOBILE VERSION (Only visible on Phones)
                    ========================================================== */}
                    <div className="block md:hidden">
                        <span className="inline-block py-1.5 px-4 rounded-full bg-brand-yellow/10 border border-brand-yellow/20 text-brand-yellow text-[10px] font-bold uppercase tracking-wider mb-5">
                            ✨ Limited Time Offer - 99% OFF!
                        </span>

                        <h1 className="text-3xl font-outfit font-black leading-[1.1] mb-2 tracking-tight text-white">
                            Stop Wasting Time on <br />
                            <span className="text-red-500 relative">Junk Leads!
                                <svg className="absolute -bottom-2 left-0 w-full h-2 text-brand-yellow/40" viewBox="0 0 100 10" preserveAspectRatio="none">
                                    <path d="M0 5 Q 25 0, 50 5 T 100 5" stroke="currentColor" strokeWidth="4" fill="none" />
                                </svg>
                            </span> <br />
                            Scale Your Affiliate Business <br />
                            <span className="text-brand-yellow drop-shadow-[0_0_15px_rgba(250,204,21,0.3)]">3X Faster</span>
                        </h1>

                        <p className="text-base text-gray-400 max-w-2xl mx-auto mb-3 leading-relaxed px-2">
                            Copy the exact strategy I used to generate <br />
                            <span className="text-white font-bold">₹50 Lakh+</span> in Commissions.
                        </p>

                        {/* Mobile Video Section */}
                        <div className="relative w-full aspect-video rounded-2xl overflow-hidden border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] bg-black mb-1">
                            {!isPlaying ? (
                                <div className="absolute inset-0 z-20" onClick={() => setIsPlaying(true)}>
                                    <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200" alt="Dashboard Proof" className="w-full h-full object-cover" />
                                    <div className="absolute inset-0 flex items-center justify-center z-20">
                                        <div className="w-16 h-16 bg-brand-yellow rounded-full flex items-center justify-center">
                                            <Play className="fill-black w-6 h-6 ml-1" />
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                <iframe src={`https://player.vimeo.com/video/${VIMEO_ID}?autoplay=1`} className="absolute top-0 left-0 w-full h-full border-0" allowFullScreen />
                            )}
                        </div>

                        {/* Mobile Only: Feature Text below video */}
                        <div className="mt-0 text-center px-2 mb-3">
                            <p className="text-[9px] text-gray-400 opacity-80 font-medium tracking-tight">
                                No Cold DMs. • No Account Bans. • <span className="font-semibold text-white opacity-95">Just Highly Interested Leads.🚀</span>
                            </p>
                        </div>

                        {/* Mobile Button */}
                        <div className="flex flex-col items-center justify-center gap-2">
                            <motion.div
                                animate={{ rotate: [0, -1, 1, -1, 1, 0], scale: [1, 1.03, 1], y: [0, -4, 0] }}
                                transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 2, ease: "easeInOut" }}
                                className="w-full flex justify-center"
                            >
                                <Button className="cta-button-trigger w-[85%] py-4 text-lg rounded-2xl relative overflow-hidden shadow-[0_10px_30px_rgba(250,204,21,0.25)]">
                                    <span className="relative z-10">Get the ₹50 Lakh Blueprint</span>
                                    <motion.div animate={{ x: ['-100%', '200%'] }} transition={{ repeat: Infinity, duration: 2, repeatDelay: 1 }} className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 z-0" />
                                </Button>
                            </motion.div>
                            <div className="flex items-center gap-4 text-xs text-gray-500">
                                <span className="font-medium">⚡ Instant Access</span>
                                <span className="w-1 h-1 bg-gray-700 rounded-full" />
                                <span className="font-medium">🔒 Secure Payment</span>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
