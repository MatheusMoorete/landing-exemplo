"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { EditableText } from "@/components/admin/EditableText";
import { useAdmin } from "@/components/admin/AdminProvider";

export function FAQ() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const [openIndex, setOpenIndex] = useState<number | null>(null);
    const { content } = useAdmin();

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, ease: "easeOut" as const },
        },
    };

    return (
        <section
            ref={ref}
            className="pt-5 pb-20 bg-cream-dark"
            id="faq"
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
                        <EditableText contentKey="faq.badge" />
                    </motion.span>
                    <motion.h2 variants={itemVariants} className="mb-6 font-display text-charcoal">
                        <EditableText contentKey="faq.title" />
                    </motion.h2>
                    <motion.p
                        variants={itemVariants}
                        className="mx-auto max-w-2xl text-charcoal-light"
                    >
                        <EditableText contentKey="faq.description" multiline />
                    </motion.p>
                </motion.div>

                {/* FAQ accordion */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    className="mx-auto max-w-3xl"
                >
                    {content.faq.items.map((_, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            className="mb-3 overflow-hidden rounded-xl bg-white shadow-sm"
                        >
                            <button
                                onClick={() =>
                                    setOpenIndex(openIndex === index ? null : index)
                                }
                                className="group flex w-full items-center justify-between p-5 text-left transition-all hover:bg-sage-50"
                                aria-expanded={openIndex === index}
                            >
                                <span className="pr-8 font-medium text-charcoal">
                                    <EditableText contentKey={`faq.items.${index}.question`} />
                                </span>
                                <motion.span
                                    animate={{ rotate: openIndex === index ? 45 : 0 }}
                                    transition={{ duration: 0.2 }}
                                    className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-sage-100 text-sage-700 transition-colors group-hover:bg-sage-200"
                                >
                                    <svg
                                        className="h-4 w-4"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M12 4v16m8-8H4"
                                        />
                                    </svg>
                                </motion.span>
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
                                <div className="border-t border-sage-100 px-5 pb-5 pt-4">
                                    <p className="text-charcoal-light">
                                        <EditableText contentKey={`faq.items.${index}.answer`} multiline />
                                    </p>
                                </div>
                            </motion.div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Still have questions */}
                <motion.div
                    variants={itemVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    className="mt-12 text-center"
                >
                    <p className="mb-4 text-charcoal-muted">
                        <EditableText contentKey="faq.footerLabel" />
                    </p>
                    <a
                        href={content.faq.whatsappLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-full bg-sage-100 px-6 py-3 font-medium text-sage-700 transition-colors hover:bg-sage-200"
                    >
                        <svg
                            className="h-5 w-5"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                        </svg>
                        <EditableText contentKey="faq.whatsappCta" />
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
