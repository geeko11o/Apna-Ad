"use client";
import { motion } from "framer-motion";
import Section from "./Section";
import { Star, MessageCircle, PlayCircle } from "lucide-react";

const testimonials = [
    {
        name: "Rajesh Kumar",
        platform: "iDigitalPreneur",
        result: "₹1.5L/month in 60 days",
        text: "Bhai ne mere ads account ko ban hone se bacha liya aur ab main consistently 40-50 leads daily le raha hu. Game changer!",
        image: "https://i.pravatar.cc/150?u=rajesh",
        type: "WhatsApp",
    },
    {
        name: "Priya Sharma",
        platform: "Bizgurukul",
        result: "₹85k/month",
        text: "I was scared of Meta Ads. Ab main apne ads khud run karti hu aur DM spam se completely free hu. Thank you so much!",
        image: "https://i.pravatar.cc/150?u=priya",
        type: "WhatsApp",
    },
    {
        name: "Vikram Singh",
        platform: "Full-Time Affiliate",
        result: "₹2.3L/month",
        text: "The closing script alone is worth ₹10k. Main ab 5-6 closings daily kar raha hu. Best investment ever!",
        image: "https://i.pravatar.cc/150?u=vikram",
        type: "Video",
    },
    {
        name: "Neha Patel",
        platform: "iDigitalPreneur",
        result: "₹1.2L/month",
        text: "Mujhe lagta tha ads complicated hai. But sir ne itna simple bana diya ki main pehle hi week se results dekhne lagi!",
        image: "https://i.pravatar.cc/150?u=neha",
        type: "WhatsApp",
    },
];

const Testimonials = () => {
    return (
        <Section className="px-4">
            <div className="text-center mb-16 md:mb-24">
                <h2 className="text-3xl md:text-7xl font-outfit font-black mb-6 leading-tight">
                    See What Other <br className="md:hidden" />
                    <span className="text-brand-yellow glow-text">Affiliates Are Achieving...</span>
                </h2>
                <p className="text-gray-400 text-base md:text-xl max-w-2xl mx-auto">Real people. Real results. Real transformations.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
                {testimonials.map((t, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="premium-card p-6 md:p-10 rounded-2xl md:rounded-[2.5rem] border border-white/5 relative group"
                    >
                        <div className="flex justify-between items-start mb-8">
                            <div className="flex gap-4 md:gap-6">
                                <div className="w-14 h-14 md:w-20 md:h-20 rounded-2xl overflow-hidden border-2 border-brand-yellow/20 group-hover:border-brand-yellow/50 transition-colors">
                                    <img src={t.image} alt={t.name} className="w-full h-full object-cover" />
                                </div>
                                <div>
                                    <h4 className="font-black text-lg md:text-2xl font-outfit tracking-tight">{t.name}</h4>
                                    <p className="text-xs md:text-sm text-gray-500 font-bold uppercase tracking-wider mb-2">{t.platform}</p>
                                    <div className="py-1 px-3 bg-brand-yellow/10 text-brand-yellow text-[10px] md:text-xs font-black rounded-lg uppercase tracking-widest border border-brand-yellow/10">
                                        {t.result}
                                    </div>
                                </div>
                            </div>
                            <div className={`flex items-center gap-1.5 py-1.5 px-3 rounded-full text-[10px] md:text-xs font-black uppercase tracking-wider ${t.type === 'WhatsApp' ? 'bg-green-500/10 text-green-500 border border-green-500/10' : 'bg-red-500/10 text-red-500 border border-red-500/10'}`}>
                                {t.type === 'WhatsApp' ? <MessageCircle size={14} /> : <PlayCircle size={14} />}
                                {t.type}
                            </div>
                        </div>

                        <div className="flex gap-1 mb-6 text-brand-yellow/60">
                            {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
                        </div>

                        <p className="text-gray-300 text-base md:text-xl leading-relaxed italic font-medium">
                            "{t.text}"
                        </p>
                    </motion.div>
                ))}
            </div>
        </Section>
    );
};

export default Testimonials;
