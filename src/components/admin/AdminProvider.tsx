"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import initialData from "@/data/landing-content.json";

type AdminContextType = {
    content: typeof initialData;
    isAdminMode: boolean;
    setIsAdminMode: (value: boolean) => void;
    updateContent: (path: string, value: any) => void;
    saveChanges: () => Promise<void>;
    isSaving: boolean;
};

const AdminContext = createContext<AdminContextType | undefined>(undefined);

export function AdminProvider({ children }: { children: React.ReactNode }) {
    const [content, setContent] = useState(initialData);
    const [isAdminMode, setIsAdminMode] = useState(false);
    const [isSaving, setIsSaving] = useState(false);

    // Toggle admin mode with a keyboard shortcut (Alt + A)
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.altKey && e.key === "a") {
                setIsAdminMode((prev) => !prev);
            }
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, []);

    const updateContent = (path: string, value: any) => {
        setContent((prev) => {
            const next = { ...prev };
            const keys = path.split(".");
            let current: any = next;

            for (let i = 0; i < keys.length - 1; i++) {
                current = current[keys[i]];
            }

            current[keys[keys.length - 1]] = value;
            return next;
        });
    };

    const saveChanges = async () => {
        setIsSaving(true);
        try {
            const response = await fetch("/api/admin/save", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(content),
            });

            if (response.ok) {
                alert("Mudanças salvas com sucesso!");
            } else {
                alert("Erro ao salvar mudanças.");
            }
        } catch (error) {
            console.error(error);
            alert("Erro ao salvar mudanças.");
        } finally {
            setIsSaving(false);
        }
    };

    return (
        <AdminContext.Provider
            value={{
                content,
                isAdminMode,
                setIsAdminMode,
                updateContent,
                saveChanges,
                isSaving,
            }}
        >
            {children}

            {isAdminMode && (
                <div className="fixed bottom-6 left-1/2 z-[100] flex -translate-x-1/2 items-center gap-4 rounded-full bg-charcoal p-2 pl-6 shadow-2xl border border-white/10 animate-in fade-in slide-in-from-bottom-4">
                    <span className="text-sm font-medium text-white">Modo Edição Ativo</span>
                    <div className="h-4 w-px bg-white/20" />
                    <button
                        onClick={saveChanges}
                        disabled={isSaving}
                        className="rounded-full bg-terracotta-500 px-6 py-2 text-sm font-bold text-white transition-colors hover:bg-terracotta-600 disabled:opacity-50"
                    >
                        {isSaving ? "Salvando..." : "Salvar Mudanças"}
                    </button>
                    <button
                        onClick={() => setIsAdminMode(false)}
                        className="rounded-full bg-white/10 px-6 py-2 text-sm font-bold text-white transition-colors hover:bg-white/20"
                    >
                        Sair
                    </button>
                </div>
            )}
        </AdminContext.Provider>
    );
}

export const useAdmin = () => {
    const context = useContext(AdminContext);
    if (!context) {
        throw new Error("useAdmin must be used within an AdminProvider");
    }
    return context;
};
