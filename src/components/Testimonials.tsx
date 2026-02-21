"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Section from "./Section";
import { Star, MessageCircle, PlayCircle } from "lucide-react";

const testimonials = [
    {
        name: "Rajesh Kumar",
        platform: "iDigitalPreneur",
        result: "₹1.5L/month",
        thumbnail: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=800",
        vimeoId: "56282283",
    },
    {
        name: "Priya Sharma",
        platform: "Bizgurukul",
        result: "₹85k/month",
        thumbnail: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800",
        vimeoId: "56282283",
    },
    {
        name: "Vikram Singh",
        platform: "Full-Time Affiliate",
        result: "₹2.3L/month",
        thumbnail: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800",
        vimeoId: "56282283",
    },
    {
        name: "Neha Patel",
        platform: "iDigitalPreneur",
        result: "₹1.2L/month",
        thumbnail: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=800",
        vimeoId: "56282283",
    },
];

const VideoCard = ({ t }: { t: any }) => {
    const [isPlaying, setIsPlaying] = useState(false);

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="premium-card p-3 rounded-[2.5rem] border border-white/5 group relative overflow-hidden"
        >
            <div className="relative aspect-[4/5] md:aspect-[3/4] rounded-[2rem] overflow-hidden bg-black shadow-2xl">
                {!isPlaying ? (
                    <div
                        className="absolute inset-0 z-10 cursor-pointer"
                        onClick={() => setIsPlaying(true)}
                    >
                        {/* Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10" />

                        <img
                            src={t.thumbnail}
                            alt={t.name}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        />

                        {/* Play Button */}
                        <div className="absolute inset-0 flex items-center justify-center z-20">
                            <div className="w-16 h-16 md:w-20 md:h-20 bg-brand-yellow rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(250,204,21,0.4)] group-hover:scale-110 transition-transform">
                                <PlayCircle className="text-black w-8 h-8 md:w-10 md:h-10" />
                            </div>
                        </div>

                        {/* Info */}
                        <div className="absolute bottom-6 left-6 right-6 z-20">
                            <div className="flex items-center gap-1.5 mb-2">
                                {[...Array(5)].map((_, i) => <Star key={i} size={12} fill="#FACC15" className="text-brand-yellow" />)}
                            </div>
                            <h4 className="text-xl md:text-2xl font-black text-white font-outfit mb-1">{t.name}</h4>
                            <div className="flex items-center justify-between">
                                <p className="text-xs md:text-sm text-gray-400 font-bold uppercase tracking-widest">{t.platform}</p>
                                <div className="bg-brand-yellow text-black text-[10px] md:text-xs font-black px-3 py-1 rounded-full uppercase tracking-widest border border-brand-yellow/20">
                                    {t.result}
                                </div>
                            </div>
                        </div>
                    </div>
                ) : (
                    <iframe
                        src={`https://player.vimeo.com/video/${t.vimeoId}?autoplay=1`}
                        className="absolute top-0 left-0 w-full h-full border-0"
                        allow="autoplay; fullscreen"
                        allowFullScreen
                    />
                )}
            </div>
        </motion.div>
    );
};

const Testimonials = () => {
    return (
        <Section className="px-4 pt-0">
            <div className="text-center mb-6 md:mb-16">
                <h2 className="text-2xl md:text-7xl font-outfit font-black mb-6 leading-tight">
                    See What Other <br className="md:hidden" />
                    <span className="text-brand-yellow glow-text">Affiliates Are Achieving...</span>
                </h2>
                <p className="text-gray-400 text-base md:text-xl max-w-2xl mx-auto italic">"Pehli baar Meta Ads se results aa rahe hain!"</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                {testimonials.map((t, i) => (
                    <VideoCard key={i} t={t} />
                ))}
            </div>
        </Section>
    );
};

export default Testimonials;
