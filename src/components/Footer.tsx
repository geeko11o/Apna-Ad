import Section from "./Section";

const Footer = () => {
    return (
        <footer className="bg-black pt-10 pb-10">
            <Section className="py-0">
                <div className="flex flex-col items-center text-center">
                    {/* Logo Recreation */}
                    <div className="flex flex-col items-center mb-8">
                        <div className="relative w-20 h-20 mb-6 flex items-center justify-center">
                            <img
                                src="/assets/images/logo.png"
                                alt="Apna Ad Logo"
                                className="w-full h-full object-contain drop-shadow-[0_0_15px_rgba(59,130,246,0.5)]"
                            />
                        </div>
                        <h3 className="text-5xl md:text-6xl font-logo text-brand-blue block mb-2">apna ad</h3>
                        <p className="text-gray-500 text-[10px] md:text-xs font-bold uppercase tracking-[0.4em]">your growth matters</p>
                        <p className="text-gray-500 text-sm mt-8 max-w-sm font-medium leading-relaxed opacity-60">
                            Helping 1,000+ affiliate marketers scale with proven, bank-breaking Meta Ads strategies.
                        </p>
                    </div>

                    <div className="flex gap-8 text-gray-400 text-sm font-medium mb-12">
                        <a href="#" className="hover:text-brand-yellow transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-brand-yellow transition-colors">Terms of Service</a>
                        <a href="#" className="hover:text-brand-yellow transition-colors">Refund Policy</a>
                        <a href="#" className="hover:text-brand-yellow transition-colors">Contact Us</a>
                    </div>

                    <div className="pt-8 border-t border-white/5 w-full text-center">
                        <p className="text-gray-600 text-xs tracking-widest uppercase">
                            &copy; 2024 Apna Ad. All Rights Reserved.
                        </p>
                        <p className="text-gray-700 text-[10px] mt-4 max-w-2xl mx-auto leading-relaxed">
                            Disclaimer: This site is not a part of the Facebook website or Facebook Inc. Additionally, This site is NOT endorsed by Facebook in any way. FACEBOOK is a trademark of FACEBOOK, Inc. Results may vary and are not typical.
                        </p>
                    </div>
                </div>
            </Section>
        </footer>
    );
};

export default Footer;
