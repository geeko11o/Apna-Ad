import { ReactNode } from "react";

interface ButtonProps {
    children: ReactNode;
    className?: string;
    onClick?: () => void;
    variant?: "primary" | "secondary" | "outline";
}

const Button = ({ children, className = "", onClick, variant = "primary" }: ButtonProps) => {
    const base = "font-bold py-4 px-8 rounded-xl transition-all duration-300 hover:scale-105 active:scale-95 text-center flex items-center justify-center gap-2 cursor-pointer";
    const variants = {
        primary: "bg-brand-yellow text-black hover:bg-yellow-400 shadow-[0_0_20px_rgba(250,204,21,0.3)]",
        secondary: "bg-brand-blue text-white hover:bg-blue-600",
        outline: "border-2 border-brand-yellow text-brand-yellow hover:bg-brand-yellow hover:text-black",
    };

    return (
        <button onClick={onClick} className={`${base} ${variants[variant]} ${className}`}>
            {children}
        </button>
    );
};

export default Button;
