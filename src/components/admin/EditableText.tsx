"use client";

import React, { useState, useEffect, useRef } from "react";
import { useAdmin } from "./AdminProvider";

type EditableTextProps = {
    contentKey: string;
    className?: string;
    as?: "p" | "span" | "h1" | "h2" | "h3" | "h4" | "div";
    multiline?: boolean;
};

export function EditableText({
    contentKey,
    className = "",
    as: Component = "span",
    multiline = false,
}: EditableTextProps) {
    const { content, isAdminMode, updateContent } = useAdmin();
    const [isEditing, setIsEditing] = useState(false);
    const textareaRef = useRef<HTMLTextAreaElement>(null);

    // Get value from content object using dot notation
    const getValue = (path: string) => {
        const keys = path.split(".");
        let current: any = content;
        for (const key of keys) {
            current = current[key];
        }
        return current;
    };

    const value = getValue(contentKey);

    useEffect(() => {
        if (isEditing && textareaRef.current) {
            textareaRef.current.focus();
            textareaRef.current.style.height = "auto";
            textareaRef.current.style.height = textareaRef.current.scrollHeight + "px";
        }
    }, [isEditing]);

    if (!isAdminMode) {
        return <Component className={className}>{value}</Component>;
    }

    if (isEditing) {
        return (
            <textarea
                ref={textareaRef}
                value={value}
                onChange={(e) => updateContent(contentKey, e.target.value)}
                onBlur={() => setIsEditing(false)}
                className={`w-full bg-sage-50 p-2 border-2 border-terracotta-400 rounded outline-none focus:ring-0 resize-none overflow-hidden ${className}`}
                rows={1}
                style={{ minHeight: "1.5em" }}
            />
        );
    }

    return (
        <Component
            className={`cursor-edit group relative inline-block min-h-[1.5em] min-w-[20px] hover:bg-terracotta-50 hover:outline hover:outline-2 hover:outline-terracotta-200 rounded ${className}`}
            onClick={() => setIsEditing(true)}
            title="Clique para editar"
        >
            {value}
            <span className="absolute -right-2 -top-2 hidden group-hover:flex h-5 w-5 items-center justify-center rounded-full bg-terracotta-500 text-[10px] text-white">
                ✎
            </span>
        </Component>
    );
}
