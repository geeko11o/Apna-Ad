"use client";
import { motion } from "framer-motion";
import Section from "./Section";
import { Phone, FileText, CheckSquare, TrendingUp } from "lucide-react";

const bonuses = [
    {
        icon: <Phone className="text-brand-yellow" />,
        title: "1-on-1 Strategic Growth Call",
        worth: "₹1,999",
        description: "60-minute deep-dive session where I'll audit your current strategy and give you a personalized action plan.",
        tip: "Get clarity on exactly what's blocking your growth and how to fix it in the next 30 days.",
    },
    {
        icon: <FileText className="text-brand-yellow" />,
        title: "The Millionaire Closing Script",
        worth: "₹999",
        description: "EXACT words to say when a lead shows interest. This script has closed ₹50+ Lakhs in sales.",
        tip: "Isse aapki 10 mein se 4 leads bina kisi objection ke join karengi. No more 'Sochke batata hu!'",
    },
    {
        icon: <CheckSquare className="text-brand-yellow" />,
        title: "Daily 10X Growth Checklist",
        worth: "₹499",
        description: "Morning routine + mindset framework used by 6-figure affiliate marketers.",
        tip: "Stay consistent and scale your business without feeling overwhelmed or burned out.",
    },
    {
        icon: <TrendingUp className="text-brand-yellow" />,
        title: "6-Figure/Month Income Roadmap",
        worth: "₹1,499",
        description: "Step-by-step blueprint from ₹0 to ₹1 Lakh+ per month in affiliate marketing.",
        tip: "A proven path that works even if you're starting from scratch with zero experience.",
    },
];

const ValueStack = () => {
    return (
        <Section className="px-4 pt-4">
            <div className="text-center mb-7 md:mb-24">
                <span className="py-1.5 px-4 rounded-full bg-brand-yellow text-black text-[12px] md:text-sm font-black uppercase tracking-wider mb-5 inline-block">
                    🎁 INSANE VALUE STACK!
                </span>
                <h2 className="text-3xl md:text-7xl font-outfit font-black mb-6 leading-[1.1]">
                    Get My ₹4,999 Growth <br className="md:hidden" /> Bundle for the Price of <br className="md:hidden" />
                    <span className="text-brand-yellow glow-text">a Cutting Chai!</span>
                </h2>
                <p className="text-gray-400 text-base md:text-xl max-w-2xl mx-auto">Everything you need to go from struggling affiliate to 6-figure earner</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 mb-12 md:mb-32">
                {bonuses.map((b, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0.98 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="premium-card p-6 md:p-10 rounded-2xl md:rounded-3xl relative overflow-hidden group"
                    >
                        <div className="absolute top-0 right-0 py-1.5 px-4 bg-brand-yellow text-black text-[10px] md:text-xs font-bold rounded-bl-2xl">
                            Worth {b.worth}
                        </div>

                        <div className="w-12 h-12 md:w-16 md:h-16 bg-white/5 rounded-xl md:rounded-2xl flex items-center justify-center mb-6 border border-white/10 group-hover:bg-brand-yellow/10 transition-colors">
                            {b.icon}
                        </div>

                        <h3 className="text-xl md:text-3xl font-black mb-4 font-outfit leading-tight">{b.title}</h3>
                        <p className="text-gray-400 text-sm md:text-lg mb-8 leading-relaxed">{b.description}</p>

                        <div className="bg-brand-blue/10 border border-brand-blue/20 p-4 md:p-5 rounded-xl md:rounded-2xl flex gap-3 italic text-xs md:text-sm text-blue-300 items-center">
                            <span className="text-brand-blue font-black text-lg">⚡</span>
                            {b.tip}
                        </div>
                    </motion.div>
                ))}
            </div>

            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-brand-yellow rounded-3xl md:rounded-[4rem] p-7 md:p-20 text-center text-black shadow-[0_30px_60px_rgba(250,204,21,0.3)] relative overflow-hidden"
            >
                {/* Decorative Elements */}
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/20 blur-3xl rounded-full" />
                <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-black/10 blur-3xl rounded-full" />

                <div className="relative z-10">
                    <div className="flex items-center justify-center gap-6 md:gap-12 mb-4 md:mb-12">
                        <div className="text-center">
                            <p className="uppercase font-black tracking-[0.1em] text-[10px] md:text-sm mb-1 opacity-50">Total Value:</p>
                            <p className="text-3xl md:text-xl font-black line-through opacity-30 tracking-tighter leading-none">₹4,996</p>
                        </div>

                        <div className="w-[1px] h-12 md:h-20 bg-black/10 mx-2" />

                        <div className="text-center">
                            <p className="uppercase font-black tracking-[0.1em] text-[10px] md:text-sm mb-1">Today's Price:</p>
                            <p className="text-5xl md:text-7xl font-black drop-shadow-2xl tracking-tighter leading-none">₹49</p>
                        </div>
                    </div>
                    <p className="text-[11px] md:text-xl font-bold max-w-2xl mx-auto mb-4 opacity-80 leading-relaxed px-2">
                        Why ₹49? To keep the time-wasters away and <br className="md:hidden" /> only talk to serious action-takers like you.
                    </p>
                    <motion.div
                        animate={{ rotate: [0, -1, 1, -1, 1, 0], scale: [1, 1.03, 1], y: [0, -4, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 2, ease: "easeInOut" }}
                        className="w-full flex justify-center"
                    >
                        <button className="cta-button-trigger w-full md:w-auto bg-black text-white px-8 md:px-16 py-5 md:py-8 rounded-2xl text-lg md:text-3xl font-black uppercase tracking-tight hover:scale-[1.03] active:scale-95 transition-all flex items-center justify-center mx-auto shadow-2xl relative overflow-hidden group">
                            <span className="relative z-10">Claim This Deal Now</span>
                            {/* Shimmer Effect */}
                            <motion.div
                                animate={{ x: ['-100%', '200%'] }}
                                transition={{ repeat: Infinity, duration: 2, repeatDelay: 1, ease: "linear" }}
                                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 z-0"
                            />
                        </button>
                    </motion.div>
                    <p className="mt-1 text-[8px] md:text-xs font-bold uppercase tracking-[0.2em] opacity-40">Limited Time Offer • Secure Checkout</p>
                </div>
            </motion.div>
        </Section>
    );
};

export default ValueStack;
