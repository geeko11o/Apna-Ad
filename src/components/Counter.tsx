"use client";
import { useEffect, useState, useRef } from "react";
import { useInView, motion, useSpring, useTransform } from "framer-motion";

interface CounterProps {
    value: number;
    duration?: number;
    suffix?: string;
    prefix?: string;
}

export default function Counter({ value, duration = 2, suffix = "", prefix = "" }: CounterProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const spring = useSpring(0, {
        duration: duration * 1000,
        bounce: 0,
    });

    const display = useTransform(spring, (current) =>
        Math.floor(current).toLocaleString()
    );

    useEffect(() => {
        if (isInView) {
            spring.set(value);
        }
    }, [isInView, value, spring]);

    return (
        <span ref={ref}>
            {prefix}
            <motion.span>{display}</motion.span>
            {suffix}
        </span>
    );
}
