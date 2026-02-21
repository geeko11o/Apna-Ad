"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Gift } from "lucide-react";

const StickyFooter = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [hasScrolledPastHero, setHasScrolledPastHero] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const currentScroll = window.scrollY;
            const ctaButtons = document.querySelectorAll('.cta-button-trigger');
            let anyButtonVisible = false;

            ctaButtons.forEach(btn => {
                const rect = btn.getBoundingClientRect();
                // Check if button is within viewport
                if (rect.top < window.innerHeight && rect.bottom > 0) {
                    anyButtonVisible = true;
                }
            });

            // Show footer if scrolled 300px+ AND NO main CTA button is visible
            setIsVisible(currentScroll > 300 && !anyButtonVisible);
        };

        window.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', handleScroll);

        // Initial check
        handleScroll();

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleScroll);
        };
    }, []);

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 100, opacity: 0 }}
                    transition={{ type: "spring", stiffness: 260, damping: 20 }}
                    className="fixed bottom-0 left-0 w-full z-[100] bg-brand-yellow border-t border-black/5 px-4 py-3 md:py-4 shadow-[0_-10px_40px_rgba(0,0,0,0.15)]"
                >
                    <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
                        <div className="flex items-center gap-2 md:gap-4 text-black">
                            {/* Gift icon - now visible on mobile */}
                            <div className="flex w-8 h-8 md:w-12 md:h-12 bg-black/10 rounded-full items-center justify-center shrink-0">
                                <Gift className="text-black animate-bounce" size={18} />
                            </div>
                            <div className="flex flex-col min-w-0">
                                <p className="font-black text-xs md:text-xl leading-none md:mb-1 whitespace-nowrap">
                                    ₹5,000 Bonus Bundle for <span className="text-sm md:text-2xl font-black underline decoration-2">₹49!</span></p>
                                <p className="text-[8px] md:text-xs font-bold uppercase opacity-60 tracking-wider whitespace-nowrap">Limited to next 7 slots only</p>
                            </div>
                        </div>

                        <motion.button
                            animate={{
                                rotate: [0, -15, 15, -15, 15, 0],
                                scale: [1, 1.15, 1],
                                y: [0, -23, 0],
                            }}
                            transition={{
                                duration: 0.8,
                                repeat: Infinity,
                                repeatDelay: 2,
                                ease: "easeInOut"
                            }}
                            className="relative overflow-hidden bg-black text-white px-3 md:px-10 py-3 md:py-4 rounded-xl md:rounded-2xl font-black text-xs md:text-xl hover:scale-[1.1] active:scale-95 transition-all flex items-center justify-center gap-2 shadow-[0_20px_50px_rgba(0,0,0,0.4)] shrink-0 group z-10"
                        >
                            {/* Static Glow instead of flashing */}
                            <div className="absolute inset-0 bg-brand-yellow/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                            {/* Shimmer Effect */}
                            <motion.div
                                animate={{ x: ['-100%', '200%'] }}
                                transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 1 }}
                                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12"
                            />

                            <span className="relative z-10">Claim Bundle <span className="hidden sm:inline">Now</span></span>
                        </motion.button>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default StickyFooter;
