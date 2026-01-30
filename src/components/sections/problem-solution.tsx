"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export function ProblemSolution() {
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

    return (
        <section
            ref={ref}
            className="pt-5 pb-20 bg-cream-dark"
            id="transformacao"
        >
            <div className="container-narrow">
                {/* Section header */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    className="mb-16 text-center"
                >
                    <motion.span
                        variants={itemVariants}
                        className="mb-4 inline-block text-sm font-semibold uppercase tracking-widest text-sage-500"
                    >
                        A Nova Confeitaria
                    </motion.span>
                    <motion.h2 variants={itemVariants} className="mb-6 font-display">
                        Você Está Pronta Para a{" "}
                        <span className="text-terracotta-500">Transformação</span>?
                    </motion.h2>
                    <motion.p
                        variants={itemVariants}
                        className="mx-auto max-w-2xl text-charcoal-light"
                    >
                        Esqueça os bolos pesados, cheios de pasta americana e decorações
                        ultrapassadas. A confeitaria moderna é sobre elegância, leveza e
                        técnica.
                    </motion.p>
                </motion.div>

                {/* Comparison grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    className="grid gap-8 lg:grid-cols-2"
                >
                    {/* Before - Old Style */}
                    <motion.div
                        variants={itemVariants}
                        className="group relative overflow-hidden rounded-2xl bg-white p-8 shadow-sm transition-all duration-300 hover:shadow-md"
                    >
                        <div className="mb-6 flex items-center justify-between">
                            <span className="rounded-full bg-charcoal-muted/10 px-4 py-1.5 text-sm font-medium text-charcoal-muted">
                                Confeitaria Tradicional
                            </span>
                            <svg
                                className="h-6 w-6 text-charcoal-muted/40"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        </div>

                        <ul className="space-y-4">
                            {[
                                "Pasta americana pesada e enjoativa",
                                "Decorações excessivas e datadas",
                                "Massas densas e sem estrutura",
                                "Necessita equipamentos caros",
                                "Difícil de precificar corretamente",
                            ].map((item, index) => (
                                <li
                                    key={index}
                                    className="flex items-start gap-3 text-charcoal-light"
                                >
                                    <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-red-100 text-red-500">
                                        <svg
                                            className="h-3 w-3"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={3}
                                                d="M6 18L18 6M6 6l12 12"
                                            />
                                        </svg>
                                    </span>
                                    {item}
                                </li>
                            ))}
                        </ul>

                        {/* Decorative blur */}
                        <div className="absolute -bottom-20 -right-20 h-40 w-40 rounded-full bg-charcoal-muted/5 blur-3xl transition-all group-hover:bg-charcoal-muted/10" />
                    </motion.div>

                    {/* After - Modern Style */}
                    <motion.div
                        variants={itemVariants}
                        className="group relative overflow-hidden rounded-2xl border-2 border-sage-200 bg-white p-8 shadow-sm transition-all duration-300 hover:border-sage-300 hover:shadow-lg"
                    >
                        <div className="mb-6 flex items-center justify-between">
                            <span className="rounded-full bg-sage-100 px-4 py-1.5 text-sm font-medium text-sage-700">
                                Confeitaria Contemporânea
                            </span>
                            <svg
                                className="h-6 w-6 text-sage-500"
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
                        </div>

                        <ul className="space-y-4">
                            {[
                                "Buttercream leve e saboroso",
                                "Design minimalista e elegante",
                                "Massas amanteigadas estruturadas",
                                "Utensílios comuns de cozinha",
                                "Ticket médio alto garantido",
                            ].map((item, index) => (
                                <li
                                    key={index}
                                    className="flex items-start gap-3 text-charcoal"
                                >
                                    <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-sage-100 text-sage-700">
                                        <svg
                                            className="h-3 w-3"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={3}
                                                d="M5 13l4 4L19 7"
                                            />
                                        </svg>
                                    </span>
                                    {item}
                                </li>
                            ))}
                        </ul>

                        {/* Decorative blur */}
                        <div className="absolute -bottom-20 -right-20 h-40 w-40 rounded-full bg-sage-200/30 blur-3xl transition-all group-hover:bg-sage-300/50" />
                    </motion.div>
                </motion.div>

                {/* Visual showcase */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    className="mt-16"
                >
                    <motion.div
                        variants={itemVariants}
                        className="grid gap-6 md:grid-cols-3"
                    >
                        {[
                            { src: "/hero-cake.png", title: "Layer Cake Clássico", style: "Buttercream Suave" },
                            { src: "/bento-cake.png", title: "Bento Cake", style: "Pintado à Mão" },
                            { src: "/naked-cake.png", title: "Naked Cake", style: "Rústico Elegante" },
                        ].map((cake, index) => (
                            <motion.div
                                key={index}
                                whileHover={{ y: -8 }}
                                className="group overflow-hidden rounded-xl bg-white shadow-sm transition-shadow hover:shadow-lg"
                            >
                                <div className="aspect-square overflow-hidden">
                                    <Image
                                        src={cake.src}
                                        alt={cake.title}
                                        width={400}
                                        height={400}
                                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                </div>
                                <div className="p-4">
                                    <h3 className="font-display text-lg font-semibold text-charcoal">
                                        {cake.title}
                                    </h3>
                                    <p className="text-sm text-charcoal-muted">{cake.style}</p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
