"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { EditableText } from "@/components/admin/EditableText";

export function Hero() {
    return (
        <section className="relative min-h-screen overflow-hidden bg-cream">
            {/* Background subtle pattern */}
            <div className="absolute inset-0 opacity-30">
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage: `radial-gradient(circle at 1px 1px, var(--sage-200) 1px, transparent 0)`,
                        backgroundSize: "40px 40px",
                    }}
                />
            </div>

            <div className="container-narrow relative z-10">
                <div className="grid min-h-screen items-center gap-12 py-0 lg:grid-cols-2 lg:gap-16 lg:py-8">
                    {/* Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="order-1 lg:order-1"
                    >
                        {/* Badge */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="mb-6"
                        >
                            <span className="badge">
                                <EditableText contentKey="hero.badge" />
                            </span>
                        </motion.div>

                        {/* Headline */}
                        <h1 className="mb-6 font-display text-charcoal">
                            <EditableText contentKey="hero.titlePart1" />{" "}
                            <span className="relative">
                                <span className="relative z-10">
                                    <EditableText contentKey="hero.titleHighlight" />
                                </span>
                                <motion.span
                                    initial={{ scaleX: 0 }}
                                    animate={{ scaleX: 1 }}
                                    transition={{ duration: 0.8, delay: 0.6 }}
                                    className="absolute -bottom-1 left-0 right-0 h-3 origin-left bg-terracotta-300 opacity-40"
                                />
                            </span>{" "}
                            <EditableText contentKey="hero.titlePart2" />
                        </h1>

                        {/* Subheadline */}
                        <p className="mb-8 max-w-lg text-lg text-charcoal-light lg:text-xl">
                            <EditableText contentKey="hero.subheadline" multiline />
                        </p>

                        {/* CTA */}
                        <div className="flex flex-col gap-4 sm:flex-row">
                            <motion.a
                                href="#inscricao"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="btn-primary"
                            >
                                <EditableText contentKey="hero.primaryCta" />
                                <svg
                                    className="h-5 w-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                                    />
                                </svg>
                            </motion.a>
                            <a
                                href="#conteudo"
                                className="btn-secondary"
                            >
                                <EditableText contentKey="hero.secondaryCta" />
                            </a>
                        </div>

                        {/* Trust indicators */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5, delay: 1 }}
                            className="mt-10 flex flex-wrap items-center gap-6 text-sm text-charcoal-muted"
                        >
                        </motion.div>
                    </motion.div>

                    {/* Image */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="hidden lg:order-2 lg:block"
                    >
                        <div className="relative">
                            {/* Decorative elements */}
                            <div className="absolute -right-4 -top-4 h-72 w-72 rounded-full bg-sage-100 opacity-60 blur-3xl" />
                            <div className="absolute -bottom-8 -left-8 h-48 w-48 rounded-full bg-terracotta-300 opacity-30 blur-2xl" />

                            {/* Main image */}
                            <motion.div
                                className="relative overflow-hidden rounded-2xl shadow-xl cursor-pointer"
                                whileHover={{
                                    scale: 1.03,
                                    boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
                                }}
                                transition={{ duration: 0.4, ease: "easeOut" }}
                            >
                                <motion.div
                                    whileHover={{ scale: 1.1 }}
                                    transition={{ duration: 0.6, ease: "easeOut" }}
                                >
                                    <Image
                                        src="/hero-cake.png"
                                        alt="Bolo contemporâneo com decoração minimalista e flores naturais"
                                        width={600}
                                        height={700}
                                        priority
                                        className="h-auto w-full object-cover transition-all duration-500"
                                        sizes="(max-width: 768px) 100vw, 50vw"
                                    />
                                </motion.div>
                            </motion.div>

                            {/* Floating badge */}
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6, delay: 1.2 }}
                                className="absolute -right-4 bottom-8 rounded-xl bg-white p-4 shadow-lg lg:-right-8"
                            >
                                <div className="flex items-center gap-3">
                                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-sage-100">
                                        <svg
                                            className="h-6 w-6 text-sage-700"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                                            />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="text-sm font-semibold text-charcoal">
                                            <EditableText contentKey="hero.floatingBadge" />
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 1.5 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2"
            >
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="flex flex-col items-center gap-2"
                >
                    <span className="text-xs text-charcoal-muted">Rolar para baixo</span>
                    <svg
                        className="h-5 w-5 text-charcoal-muted"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 14l-7 7m0 0l-7-7m7 7V3"
                        />
                    </svg>
                </motion.div>
            </motion.div>
        </section>
    );
}
