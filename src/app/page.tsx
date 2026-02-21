import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProblemSection from "@/components/ProblemSection";
import ValueStack from "@/components/ValueStack";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Countdown from "@/components/Countdown";
import StickyFooter from "@/components/StickyFooter";
import Footer from "@/components/Footer";
import Counter from "@/components/Counter";

export default function Home() {
    return (
        <main className="min-h-screen">
            <Navbar />
            {/* Top Banner */}
            <div className="bg-brand-yellow text-black py-2 px-4 text-center font-bold text-[9px] md:text-xs tracking-[0.05em] uppercase fixed top-0 w-full z-[110] shadow-md">
                ⚡ Attention: iDigitalPreneur, Bizgurukul & Affiliate Marketers – Stop Chasing, Start Closing!
            </div>

            <Hero />
            <ProblemSection />

            {/* Trust Section */}
            <section className="pt-4 pb-8 md:py-32 bg-white/[0.02] border-y border-white/5 overflow-hidden px-4">
                <div className="max-w-7xl mx-auto text-center">
                    <h2 className="text-xl md:text-3xl font-black mb-6 md:mb-20 uppercase tracking-[0.3em] text-gray-500 opacity-80">
                        I Don't Just Teach, <br className="md:hidden" /> I Have <span className="text-white">Done It</span>
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-8 px-8 md:px-0">
                        <div className="premium-card p-4 md:p-12 rounded-[1.5rem] md:rounded-[3rem] border border-white/10 group">
                            <p className="text-4xl md:text-7xl font-black text-brand-yellow mb-2 tracking-tighter group-hover:scale-110 transition-transform">
                                <Counter value={50} prefix="₹" suffix="L+" duration={1} />
                            </p>
                            <p className="text-gray-500 font-black uppercase text-[8px] md:text-xs tracking-[0.2em] leading-relaxed">In Real Affiliate <br /> Commissions Generated</p>
                        </div>
                        <div className="premium-card p-4 md:p-12 rounded-[1.5rem] md:rounded-[3rem] border border-white/10 group">
                            <p className="text-4xl md:text-7xl font-black text-brand-blue mb-2 tracking-tighter group-hover:scale-110 transition-transform">
                                <Counter value={1000} suffix="+" duration={1} />
                            </p>
                            <p className="text-gray-500 font-black uppercase text-[8px] md:text-xs tracking-[0.2em] leading-relaxed">Students Mentored <br /> To Success Locally</p>
                        </div>
                        <div className="premium-card p-4 md:p-12 rounded-[1.5rem] md:rounded-[3rem] border border-white/10 group">
                            <p className="text-4xl md:text-7xl font-black text-green-500 mb-2 tracking-tighter group-hover:scale-110 transition-transform">
                                <Counter value={100} suffix="%" duration={1} />
                            </p>
                            <p className="text-gray-500 font-black uppercase text-[8px] md:text-xs tracking-[0.2em] leading-relaxed">Practical No-Fluff <br /> System Implementation</p>
                        </div>
                    </div>
                </div>
            </section>

            <ValueStack />
            <Testimonials />
            <FAQ />
            <Countdown />
            <Footer />
            <StickyFooter />
        </main>
    );
}
