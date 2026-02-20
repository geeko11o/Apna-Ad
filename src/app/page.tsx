import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProblemSection from "@/components/ProblemSection";
import ValueStack from "@/components/ValueStack";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Countdown from "@/components/Countdown";
import StickyFooter from "@/components/StickyFooter";
import Footer from "@/components/Footer";

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
            <section className="py-20 md:py-32 bg-white/[0.02] border-y border-white/5 overflow-hidden px-4">
                <div className="max-w-7xl mx-auto text-center">
                    <h2 className="text-xl md:text-3xl font-black mb-12 md:mb-20 uppercase tracking-[0.3em] text-gray-500 opacity-80">
                        I Don't Just Teach, <br className="md:hidden" /> I Have <span className="text-white">Done It</span>
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
                        <div className="premium-card p-8 md:p-12 rounded-[2rem] md:rounded-[3rem] border border-white/10 group">
                            <p className="text-5xl md:text-7xl font-black text-brand-yellow mb-4 tracking-tighter group-hover:scale-110 transition-transform">₹50L+</p>
                            <p className="text-gray-500 font-black uppercase text-[10px] md:text-xs tracking-[0.2em] leading-relaxed">In Real Affiliate <br /> Commissions Generated</p>
                        </div>
                        <div className="premium-card p-8 md:p-12 rounded-[2rem] md:rounded-[3rem] border border-white/10 group">
                            <p className="text-5xl md:text-7xl font-black text-brand-blue mb-4 tracking-tighter group-hover:scale-110 transition-transform">1000+</p>
                            <p className="text-gray-500 font-black uppercase text-[10px] md:text-xs tracking-[0.2em] leading-relaxed">Students Mentored <br /> To Success Locally</p>
                        </div>
                        <div className="premium-card p-8 md:p-12 rounded-[2rem] md:rounded-[3rem] border border-white/10 group">
                            <p className="text-5xl md:text-7xl font-black text-green-500 mb-4 tracking-tighter group-hover:scale-110 transition-transform">100%</p>
                            <p className="text-gray-500 font-black uppercase text-[10px] md:text-xs tracking-[0.2em] leading-relaxed">Practical No-Fluff <br /> System Implementation</p>
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
