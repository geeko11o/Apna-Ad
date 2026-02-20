"use client";
import { motion } from "framer-motion";
import Button from "./Button";
import { Play } from "lucide-react";

const Hero = () => {
    return (
        <section className="relative pt-40 md:pt-64 pb-16 md:pb-32 overflow-hidden px-4">
            {/* Background Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[300px] md:h-[600px] bg-brand-blue/15 blur-[80px] md:blur-[120px] rounded-full -z-10" />

            <div className="max-w-7xl mx-auto text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <span className="inline-block py-1.5 px-4 rounded-full bg-brand-yellow/10 border border-brand-yellow/20 text-brand-yellow text-[10px] md:text-xs font-bold uppercase tracking-wider mb-8">
                        ✨ Limited Time Offer - 99% OFF!
                    </span>

                    <h1 className="text-3xl md:text-7xl font-outfit font-black leading-[1.1] mb-6 tracking-tight">
                        Stop Wasting Time on <br className="hidden md:block" />
                        <span className="text-red-500 relative">Junk Leads!
                            <svg className="absolute -bottom-2 left-0 w-full h-2 md:h-3 text-brand-yellow/40" viewBox="0 0 100 10" preserveAspectRatio="none">
                                <path d="M0 5 Q 25 0, 50 5 T 100 5" stroke="currentColor" strokeWidth="4" fill="none" />
                            </svg>
                        </span> <br />
                        Scale Your Affiliate Business <br className="hidden md:block" />
                        <span className="text-brand-yellow drop-shadow-[0_0_15px_rgba(250,204,21,0.3)]">3X Faster</span>
                    </h1>

                    <p className="text-base md:text-xl text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed px-2">
                        Copy the exact strategy I used to generate <span className="text-white font-bold">₹50 Lakh+</span> in Commissions.
                        <span className="hidden md:inline"> No Cold DMs. No Account Bans. Just Highly Interested Leads.</span>
                    </p>

                    <div className="flex flex-col items-center justify-center gap-6 mb-16 md:mb-24">
                        <Button className="cta-button-trigger w-full md:w-auto px-10 py-5 text-lg md:text-xl rounded-2xl group">
                            Get the ₹50 Lakh Blueprint for ₹49
                            <span className="group-hover:translate-x-1 transition-transform">→</span>
                        </Button>
                        <div className="flex items-center gap-4 text-xs md:text-sm text-gray-500">
                            <span className="flex items-center gap-1.5 font-medium">⚡ Instant Access</span>
                            <span className="w-1 h-1 bg-gray-700 rounded-full" />
                            <span className="flex items-center gap-1.5 font-medium">🔒 Secure Payment</span>
                        </div>
                    </div>

                    {/* Video Section */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.98 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.4, duration: 1 }}
                        className="relative max-w-5xl mx-auto aspect-video rounded-2xl md:rounded-[2.5rem] overflow-hidden border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] group"
                    >
                        <video
                            src="/videos/hero-video.mp4"
                            className="w-full h-full object-cover"
                            controls
                            poster="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200"
                        >
                            Your browser does not support the video tag.
                        </video>

                        {/* Overlay elements that disappear when video starts could be added, 
                            but a standard video tag with 'controls' is best for usability. */}
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
