"use client";
import { motion } from "framer-motion";

const Navbar = () => {
    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className="fixed top-12 md:top-10 left-1/2 -translate-x-1/2 z-[100] w-[95%] max-w-7xl"
        >
            <div className="bg-brand-dark/50 backdrop-blur-2xl border border-white/10 rounded-3xl px-6 py-4 flex items-center justify-between shadow-2xl">
                <div className="flex items-center gap-3">
                    <div className="relative w-10 h-10 md:w-12 md:h-12 flex items-center justify-center">
                        <img
                            src="/assets/images/logo.png"
                            alt="Apna Ad Logo"
                            className="w-full h-full object-contain drop-shadow-[0_0_12px_rgba(59,130,246,0.6)]"
                        />
                    </div>
                    <div>
                        <span className="text-2xl md:text-3xl font-logo text-brand-blue block leading-none -mb-1">apna ad</span>
                        <span className="text-[7px] md:text-[8px] uppercase tracking-[0.3em] text-gray-400 font-black">your growth matters</span>
                    </div>
                </div>

                <div className="hidden md:flex items-center gap-8">
                    <a href="#problems" className="text-sm font-bold text-gray-400 hover:text-white transition-colors">Problems</a>
                    <a href="#results" className="text-sm font-bold text-gray-400 hover:text-white transition-colors">Results</a>
                    <a href="#offer" className="text-sm font-bold text-gray-400 hover:text-white transition-colors">Offer</a>
                    <button className="bg-brand-yellow text-black px-6 py-2.5 rounded-xl font-black text-sm hover:scale-105 transition-transform shadow-lg shadow-brand-yellow/20">
                        Join Now
                    </button>
                </div>

                <button className="md:hidden bg-brand-yellow text-black px-4 py-2 rounded-lg font-black text-xs">
                    Get Started
                </button>
            </div>
        </motion.nav>
    );
};

export default Navbar;
