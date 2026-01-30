"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { EditableText } from "@/components/admin/EditableText";
import { useAdmin } from "@/components/admin/AdminProvider";

export function SocialProof() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const { content } = useAdmin();

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
            className="pt-5 pb-20 overflow-hidden bg-sage-50"
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
                        <EditableText contentKey="socialProof.badge" />
                    </motion.span>
                    <motion.h2 variants={itemVariants} className="mb-6 font-display text-charcoal">
                        <EditableText contentKey="socialProof.title" />
                    </motion.h2>
                    <motion.p
                        variants={itemVariants}
                        className="mx-auto max-w-2xl text-charcoal-light"
                    >
                        <EditableText contentKey="socialProof.description" />
                    </motion.p>
                </motion.div>
            </div>

            {/* Marquee testimonials */}
            <div className="relative">
                {/* Gradient masks */}
                <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-sage-50 to-transparent" />
                <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-sage-50 to-transparent" />

                {/* First row */}
                <div className="mb-6 flex">
                    <div className="animate-marquee flex gap-6">
                        {[...content.socialProof.testimonials, ...content.socialProof.testimonials].map((testimonial, index) => (
                            <div
                                key={index}
                                className="w-80 shrink-0 rounded-xl bg-white p-6 shadow-sm"
                            >
                                <div className="mb-4 flex">
                                    {[...Array(5)].map((_, i) => (
                                        <svg
                                            key={i}
                                            className="h-4 w-4 fill-terracotta-400"
                                            viewBox="0 0 20 20"
                                        >
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                    ))}
                                </div>
                                <p className="mb-4 text-sm leading-relaxed text-charcoal-light">
                                    &quot;<EditableText contentKey={`socialProof.testimonials.${index % content.socialProof.testimonials.length}.text`} />&quot;
                                </p>
                                <div className="flex items-center gap-3">
                                    <div className="h-10 w-10 rounded-full bg-sage-200" />
                                    <div>
                                        <p className="font-semibold text-charcoal">
                                            <EditableText contentKey={`socialProof.testimonials.${index % content.socialProof.testimonials.length}.name`} />
                                        </p>
                                        <p className="text-xs text-charcoal-muted">
                                            <EditableText contentKey={`socialProof.testimonials.${index % content.socialProof.testimonials.length}.location`} />
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Instructor section */}
            <div className="container-narrow">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    className="mt-20"
                >
                    <motion.div
                        variants={itemVariants}
                        className="grid items-center gap-12 rounded-2xl bg-white p-8 shadow-sm lg:grid-cols-2 lg:p-12"
                    >
                        {/* Instructor image */}
                        <div className="relative">
                            <div className="aspect-square overflow-hidden rounded-2xl bg-sage-100">
                                <div className="flex h-full items-center justify-center">
                                    <div className="text-center">
                                        <div className="mx-auto mb-4 flex h-32 w-32 items-center justify-center rounded-full bg-sage-200">
                                            <svg
                                                className="h-16 w-16 text-sage-500"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={1.5}
                                                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                                                />
                                            </svg>
                                        </div>
                                        <p className="text-sm text-sage-500">
                                            <EditableText contentKey="socialProof.instructor.name" />
                                        </p>
                                    </div>
                                </div>
                            </div>
                            {/* Floating stats */}
                            <div className="absolute -bottom-4 -right-4 rounded-xl bg-terracotta-500 p-4 text-white shadow-lg lg:-right-8">
                                <p className="text-2xl font-bold">
                                    <EditableText contentKey="socialProof.instructor.statsValue" />
                                </p>
                                <p className="text-sm opacity-90">
                                    <EditableText contentKey="socialProof.instructor.statsLabel" />
                                </p>
                            </div>
                        </div>

                        {/* Instructor bio */}
                        <div>
                            <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-widest text-sage-500">
                                <EditableText contentKey="socialProof.instructor.badge" />
                            </span>
                            <h3 className="mb-4 font-display text-2xl lg:text-3xl text-charcoal">
                                <EditableText contentKey="socialProof.instructor.name" />
                            </h3>
                            <p className="mb-4 text-charcoal-light">
                                <EditableText contentKey="socialProof.instructor.bio1" multiline />
                            </p>
                            <p className="mb-6 text-charcoal-light">
                                <EditableText contentKey="socialProof.instructor.bio2" multiline />
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <div className="flex items-center gap-2 rounded-full bg-sage-100 px-4 py-2 text-sm text-sage-700">
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
                                            d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                        />
                                    </svg>
                                    <EditableText contentKey="socialProof.instructor.tag1" />
                                </div>
                                <div className="flex items-center gap-2 rounded-full bg-sage-100 px-4 py-2 text-sm text-sage-700">
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
                                            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                                        />
                                    </svg>
                                    <EditableText contentKey="socialProof.instructor.tag2" />
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
