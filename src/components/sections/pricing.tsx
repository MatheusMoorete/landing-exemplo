"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export function Pricing() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" as const },
        },
    };

    const included = [
        "E-book completo em PDF",
        "120+ páginas ilustradas",
        "Download imediato",
        "Acesso vitalício",
        "Guia de Precificação (R$ 97)",
        "Templates de Cardápio (R$ 67)",
        "Receitas Extras (R$ 47)",
        "Atualizações futuras gratuitas",
    ];

    return (
        <section
            ref={ref}
            className="pt-5 pb-20 relative overflow-hidden bg-charcoal"
            id="inscricao"
        >
            {/* Background decoration */}
            <div className="absolute inset-0 opacity-10">
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)`,
                        backgroundSize: "32px 32px",
                    }}
                />
            </div>
            <div className="absolute -left-32 top-1/4 h-64 w-64 rounded-full bg-terracotta-500 opacity-20 blur-3xl" />
            <div className="absolute -right-32 bottom-1/4 h-64 w-64 rounded-full bg-sage-500 opacity-20 blur-3xl" />

            <div className="container-narrow relative z-10">
                {/* Section header */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    className="mb-16 text-center"
                >
                    <motion.span
                        variants={itemVariants}
                        className="mb-2 inline-block text-sm font-semibold uppercase tracking-widest text-sage-300"
                    >
                        Oferta Especial
                    </motion.span>
                    <motion.h2
                        variants={itemVariants}
                        className="mb-6 font-display"
                        style={{ color: '#ffffff' }}
                    >
                        <span className="text-terracotta-400">Hoje</span>
                    </motion.h2>
                    <motion.p
                        variants={itemVariants}
                        className="mx-auto max-w-2xl"
                        style={{ color: '#ffffff' }}
                    >
                        Investimento único com acesso vitalício e todos os bônus incluídos.
                    </motion.p>
                </motion.div>

                {/* Pricing card */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    className="mx-auto max-w-2xl"
                >
                    <motion.div
                        variants={itemVariants}
                        className="relative overflow-hidden rounded-3xl bg-white p-8 shadow-2xl lg:p-12"
                    >
                        {/* Popular badge */}
                        <div className="absolute -right-12 top-8 rotate-45 bg-terracotta-500 px-16 py-2 text-sm font-bold text-white">
                            MAIS VENDIDO
                        </div>

                        {/* Price */}
                        <div className="mb-8 text-center">
                            <p className="mb-2 text-charcoal-muted">
                                De{" "}
                                <span className="text-lg line-through">R$ 697,00</span>
                            </p>
                            <p className="text-sm font-semibold uppercase tracking-widest text-sage-500">
                                Por apenas
                            </p>
                            <div className="my-4 flex items-baseline justify-center gap-2">
                                <span className="text-2xl text-charcoal">R$</span>
                                <span className="font-display text-7xl font-bold text-charcoal">
                                    197
                                </span>
                                <span className="text-2xl text-charcoal">,00</span>
                            </div>
                            <p className="text-charcoal-muted">
                                ou 12x de{" "}
                                <span className="font-semibold text-charcoal">R$ 19,58</span>
                            </p>
                        </div>

                        {/* Divider */}
                        <div className="divider mb-8" />

                        {/* What's included */}
                        <div className="mb-8">
                            <h3 className="mb-6 text-center font-display text-lg font-semibold text-charcoal">
                                O que está incluído:
                            </h3>
                            <ul className="grid gap-3 sm:grid-cols-2">
                                {included.map((item, index) => (
                                    <li
                                        key={index}
                                        className="flex items-start gap-3 text-sm text-charcoal"
                                    >
                                        <svg
                                            className="mt-0.5 h-5 w-5 shrink-0 text-sage-500"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M5 13l4 4L19 7"
                                            />
                                        </svg>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* CTA */}
                        <motion.a
                            href="#"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="mb-6 flex w-full items-center justify-center gap-3 rounded-xl bg-terracotta-500 py-5 text-lg font-bold text-white shadow-lg transition-colors hover:bg-terracotta-600"
                        >
                            Quero Baixar o E-book
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

                        {/* Guarantee */}
                        <div className="flex items-center justify-center gap-3 rounded-xl bg-sage-50 p-4">
                            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-sage-100">
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
                                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                                    />
                                </svg>
                            </div>
                            <div>
                                <p className="font-semibold text-charcoal">
                                    7 dias de garantia incondicional
                                </p>
                                <p className="text-sm text-charcoal-muted">
                                    Não gostou? Devolvemos 100% do seu dinheiro.
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>

                {/* Trust badges */}
                <motion.div
                    variants={itemVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    className="mt-12 flex flex-wrap items-center justify-center gap-8"
                >
                    <div className="flex items-center gap-3 text-white/60">
                        <svg
                            className="h-8 w-8"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={1.5}
                                d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                            />
                        </svg>
                        <span className="text-sm">Pagamento Seguro</span>
                    </div>
                    <div className="flex items-center gap-3 text-white/60">
                        <svg
                            className="h-8 w-8"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={1.5}
                                d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                            />
                        </svg>
                        <span className="text-sm">Parcelamento em 12x</span>
                    </div>
                    <div className="flex items-center gap-3 text-white/60">
                        <svg
                            className="h-8 w-8"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={1.5}
                                d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                            />
                        </svg>
                        <span className="text-sm">Garantia de 7 dias</span>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
