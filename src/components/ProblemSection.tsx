"use client";
import { motion } from "framer-motion";
import Section from "./Section";
import { Ban, Clock, Inbox, Wallet } from "lucide-react";

const problems = [
    {
        icon: <Clock className="text-red-500" />,
        title: "Spending 5 hours/day sending DMs to strangers?",
        description: "You're exhausted from manually reaching out to hundreds of cold prospects who barely respond. Your time is being wasted on unqualified leads.",
    },
    {
        icon: <Inbox className="text-red-500" />,
        title: "Getting blocked or ignored by 'unskilled' leads?",
        description: "Most people you reach don't understand the business model. They ask basic questions like 'Work kya hai?' and never convert.",
    },
    {
        icon: <Ban className="text-red-500" />,
        title: "Facebook Ad Account getting banned every time you try to scale?",
        description: "You've tried running ads yourself, but Meta keeps suspending your account. You're scared to test ads again and lose money.",
    },
    {
        icon: <Wallet className="text-red-500" />,
        title: "Leads having 'No Money' to join your platform?",
        description: "Even when someone shows interest, they say 'Paisa nahi hai' or 'Next month sochenge.' You're tired of time-wasters.",
    },
];

const ProblemSection = () => {
    return (
        <Section className="bg-brand-bg-dark rounded-[2rem] md:rounded-[4rem] my-12 px-4 md:px-12 py-16 md:py-24 border border-white/5">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-6xl font-outfit font-black mb-6 leading-tight">
                    Is Your Affiliate Business <br className="md:hidden" />
                    <span className="text-red-500">Stuck Here?</span>
                </h2>
                <p className="text-gray-400 text-base md:text-xl max-w-2xl mx-auto">
                    If you're nodding yes to any of these, you don't have a lead problem. You have a <span className="text-brand-yellow font-bold glow-text">System Problem.</span>
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
                {problems.map((p, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="premium-card p-6 md:p-10 rounded-2xl md:rounded-3xl flex flex-col gap-4 md:gap-6 group"
                    >
                        <div className="w-12 h-12 md:w-16 md:h-16 bg-white/5 rounded-xl md:rounded-2xl flex items-center justify-center group-hover:bg-brand-yellow/10 transition-colors">
                            {p.icon}
                        </div>
                        <h3 className="text-lg md:text-2xl font-black font-outfit leading-tight">{p.title}</h3>
                        <p className="text-gray-400 text-sm md:text-lg leading-relaxed">{p.description}</p>
                    </motion.div>
                ))}
            </div>

            <div className="mt-16 md:mt-24 text-center">
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="text-xl md:text-3xl font-black font-outfit"
                >
                    → If yes, you don't have a lead problem. <br />
                    You have a <span className="text-red-500 underline decoration-brand-yellow decoration-4 underline-offset-8">System Problem.</span>
                </motion.p>
            </div>
        </Section>
    );
};

export default ProblemSection;
