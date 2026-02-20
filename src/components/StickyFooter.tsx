"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Gift } from "lucide-react";

const StickyFooter = () => {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                // If any main CTA is visible, hide the sticky footer
                const isAnyCtaVisible = entries.some(entry => entry.isIntersecting);
                setIsVisible(!isAnyCtaVisible);
            },
            { threshold: 0.1 } // Trigger when 10% of the button is visible
        );

        // Track all main CTA buttons
        const ctaButtons = document.querySelectorAll('.cta-button-trigger');
        ctaButtons.forEach(btn => observer.observe(btn));

        return () => observer.disconnect();
    }, []);

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 100, opacity: 0 }}
                    transition={{ type: "spring", stiffness: 260, damping: 20 }}
                    className="fixed bottom-0 left-0 w-full z-50 sticky-footer border-t border-brand-yellow/20 px-4 py-3 md:py-5"
                >
                    <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
                        <div className="flex items-center gap-2 md:gap-4 text-black">
                            <div className="hidden sm:flex w-10 h-10 md:w-12 md:h-12 bg-black/10 rounded-full items-center justify-center">
                                <Gift className="text-black animate-bounce" size={20} />
                            </div>
                            <div>
                                <p className="font-black text-xs md:text-xl leading-none md:mb-1">
                                    ₹5,000 Bonus Bundle for <span className="text-sm md:text-2xl font-black underline decoration-2">₹49!</span>
                                </p>
                                <p className="hidden md:block text-[10px] md:text-xs font-bold uppercase opacity-60 tracking-wider">Limited to next 7 slots only</p>
                            </div>
                        </div>

                        <button className="bg-black text-white px-5 md:px-10 py-3 md:py-4 rounded-xl md:rounded-2xl font-black text-xs md:text-xl hover:scale-[1.05] active:scale-95 transition-all flex items-center justify-center gap-2 shadow-xl shrink-0 group">
                            Claim Bundle <span className="hidden sm:inline">Now</span>
                            <span className="group-hover:translate-x-1 transition-transform">→</span>
                        </button>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default StickyFooter;
