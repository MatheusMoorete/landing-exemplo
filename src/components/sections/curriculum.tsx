"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { EditableText } from "@/components/admin/EditableText";
import { useAdmin } from "@/components/admin/AdminProvider";

export function Curriculum() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const [openIndex, setOpenIndex] = useState<number | null>(0);
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

    return (
        <section
            ref={ref}
            className="bg-cream pb-20 pt-5"
            id="conteudo"
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
                        <EditableText contentKey="curriculum.badge" />
                    </motion.span>
                    <motion.h2 variants={itemVariants} className="mb-6 font-display text-charcoal">
                        <EditableText contentKey="curriculum.title" />
                    </motion.h2>
                    <motion.p
                        variants={itemVariants}
                        className="mx-auto max-w-2xl text-charcoal-light"
                    >
                        <EditableText contentKey="curriculum.description" multiline />
                    </motion.p>
                </motion.div>

                {/* Chapters accordion */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    className="mx-auto max-w-4xl"
                >
                    {content.curriculum.chapters.map((chapter, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            className="mb-4"
                        >
                            <button
                                onClick={() =>
                                    setOpenIndex(openIndex === index ? null : index)
                                }
                                className="group flex w-full items-center justify-between rounded-xl bg-white p-6 text-left shadow-sm transition-all hover:shadow-md"
                            >
                                <div className="flex items-center gap-6">
                                    <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-sage-100 font-display text-xl font-bold text-sage-700 transition-colors group-hover:bg-sage-200">
                                        <EditableText contentKey={`curriculum.chapters.${index}.number`} />
                                    </span>
                                    <div>
                                        <h3 className="font-display text-lg font-semibold text-charcoal lg:text-xl">
                                            <EditableText contentKey={`curriculum.chapters.${index}.title`} />
                                        </h3>
                                        <p className="text-sm text-charcoal-muted">
                                            <EditableText contentKey={`curriculum.chapters.${index}.pages`} />
                                        </p>
                                    </div>
                                </div>
                                <motion.svg
                                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="h-6 w-6 shrink-0 text-charcoal-muted"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M19 9l-7 7-7-7"
                                    />
                                </motion.svg>
                            </button>

                            <motion.div
                                initial={false}
                                animate={{
                                    height: openIndex === index ? "auto" : 0,
                                    opacity: openIndex === index ? 1 : 0,
                                }}
                                transition={{ duration: 0.3, ease: "easeOut" }}
                                className="overflow-hidden"
                            >
                                <div className="rounded-b-xl bg-white px-6 pb-6">
                                    <div className="border-t border-sage-100 pt-6">
                                        <p className="mb-4 text-charcoal-light">
                                            <EditableText contentKey={`curriculum.chapters.${index}.description`} multiline />
                                        </p>
                                        <ul className="grid gap-2 sm:grid-cols-2">
                                            {chapter.topics.map((topic, topicIndex) => (
                                                <li
                                                    key={topicIndex}
                                                    className="flex items-center gap-2 text-sm text-charcoal"
                                                >
                                                    <svg
                                                        className="h-4 w-4 shrink-0 text-sage-500"
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
                                                    <EditableText contentKey={`curriculum.chapters.${index}.topics.${topicIndex}`} />
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Total pages badge */}
                <motion.div
                    variants={itemVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    className="mt-12 flex justify-center"
                >
                    <div className="inline-flex items-center gap-3 rounded-full bg-sage-100 px-6 py-3">
                        <svg
                            className="h-5 w-5 text-sage-700"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                            />
                        </svg>
                        <span className="font-medium text-sage-700">
                            <EditableText contentKey="curriculum.footerBadge" />
                        </span>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
