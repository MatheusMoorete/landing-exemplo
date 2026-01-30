"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { EditableText } from "@/components/admin/EditableText";
import { useAdmin } from "@/components/admin/AdminProvider";

export function Bonuses() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const { content } = useAdmin();

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
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

    const icons = [
        (
            <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
        ),
        (
            <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
            </svg>
        ),
        (
            <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
            </svg>
        )
    ];

    return (
        <section
            ref={ref}
            className="pt-5 pb-20 bg-cream"
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
                        <EditableText contentKey="bonuses.badge" />
                    </motion.span>
                    <motion.h2 variants={itemVariants} className="mb-6 font-display text-charcoal">
                        <EditableText contentKey="bonuses.title" />
                    </motion.h2>
                    <motion.p
                        variants={itemVariants}
                        className="mx-auto max-w-2xl text-charcoal-light"
                    >
                        <EditableText contentKey="bonuses.description" multiline />
                    </motion.p>
                </motion.div>

                {/* Bonuses grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    className="grid gap-6 md:grid-cols-2"
                >
                    {content.bonuses.items.map((bonus, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            whileHover={{ y: -4 }}
                            className="group relative overflow-hidden rounded-2xl border-2 border-sage-100 bg-white p-6 transition-all hover:border-sage-200 hover:shadow-lg"
                        >
                            {/* Free badge */}
                            <div className="absolute -right-8 top-6 rotate-45 bg-terracotta-500 px-10 py-1 text-xs font-bold text-white">
                                GRÁTIS
                            </div>

                            {/* Icon */}
                            <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-sage-100 text-sage-700 transition-colors group-hover:bg-sage-200">
                                {icons[index] || icons[0]}
                            </div>

                            {/* Content */}
                            <h3 className="mb-2 font-display text-lg font-semibold text-charcoal">
                                <EditableText contentKey={`bonuses.items.${index}.title`} />
                            </h3>
                            <p className="mb-4 text-sm text-charcoal-light">
                                <EditableText contentKey={`bonuses.items.${index}.description`} multiline />
                            </p>

                            {/* Value */}
                            <div className="flex items-center gap-2">
                                <span className="text-sm text-charcoal-muted line-through">
                                    <EditableText contentKey={`bonuses.items.${index}.value`} />
                                </span>
                                <span className="rounded-full bg-sage-100 px-3 py-1 text-sm font-semibold text-sage-700">
                                    Incluído
                                </span>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Total value */}
                <motion.div
                    variants={itemVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    className="mt-12 flex justify-center"
                >
                    <div className="inline-flex items-center gap-4 rounded-full bg-terracotta-100 px-8 py-4 text-charcoal">
                        <span className="text-lg text-terracotta-700">
                            <EditableText contentKey="bonuses.totalValueLabel" />
                        </span>
                        <span className="text-2xl font-bold text-terracotta-600">
                            <EditableText contentKey="bonuses.totalValue" />
                        </span>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
