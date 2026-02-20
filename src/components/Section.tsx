import { ReactNode } from "react";

interface SectionProps {
    children: ReactNode;
    className?: string;
    id?: string;
}

const Section = ({ children, className = "", id }: SectionProps) => {
    return (
        <section id={id} className={`py-12 md:py-20 px-4 md:px-6 max-w-7xl mx-auto ${className}`}>
            {children}
        </section>
    );
};

export default Section;
