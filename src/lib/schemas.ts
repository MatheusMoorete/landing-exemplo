// JSON-LD Schema generators for SEO rich snippets

export function generateProductSchema() {
    return {
        "@context": "https://schema.org",
        "@type": "Product",
        name: "E-book Bolos Contemporâneos: Do Zero ao Design Moderno",
        description:
            "E-book completo de confeitaria moderna com técnicas profissionais de massas estruturadas, buttercream perfeito e decoração minimalista. Mais de 120 páginas ilustradas.",
        image: "https://bolos-contemporaneos.vercel.app/hero-cake.png",
        brand: {
            "@type": "Brand",
            name: "Bolos Contemporâneos",
        },
        offers: {
            "@type": "Offer",
            url: "https://bolos-contemporaneos.vercel.app",
            priceCurrency: "BRL",
            price: "197.00",
            priceValidUntil: "2026-12-31",
            availability: "https://schema.org/InStock",
            seller: {
                "@type": "Organization",
                name: "Bolos Contemporâneos",
            },
        },
        aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.9",
            reviewCount: "500",
            bestRating: "5",
            worstRating: "1",
        },
        review: [
            {
                "@type": "Review",
                reviewRating: {
                    "@type": "Rating",
                    ratingValue: "5",
                    bestRating: "5",
                },
                author: {
                    "@type": "Person",
                    name: "Marina Costa",
                },
                reviewBody:
                    "Transformou minha confeitaria! Os bolos ficam com acabamento profissional usando utensílios que eu já tinha em casa.",
            },
        ],
    };
}

export function generateFAQSchema() {
    return {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: [
            {
                "@type": "Question",
                name: "Preciso de batedeira planetária para fazer os bolos?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "Não! O e-book foi desenvolvido para ser acessível. Você pode fazer todos os bolos com uma batedeira comum ou até mesmo à mão. Ensinamos técnicas que compensam a falta de equipamentos industriais.",
                },
            },
            {
                "@type": "Question",
                name: "O e-book serve para iniciantes na confeitaria?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "Sim! O e-book começa do zero, com explicações detalhadas de cada técnica. Mesmo quem nunca fez um bolo consegue acompanhar e obter resultados profissionais.",
                },
            },
            {
                "@type": "Question",
                name: "Em qual formato recebo o e-book?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "Você receberá o e-book em formato PDF de alta qualidade, otimizado para leitura em qualquer dispositivo (celular, tablet ou computador). Você também pode imprimir se preferir.",
                },
            },
            {
                "@type": "Question",
                name: "Como funciona o download?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "Após a confirmação do pagamento, você recebe imediatamente um e-mail com o link para download. O acesso é vitalício, você pode baixar quantas vezes quiser.",
                },
            },
            {
                "@type": "Question",
                name: "O buttercream derrete no calor do Brasil?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "Ensinamos a receita do Buttercream Estabilizado, especialmente desenvolvida para resistir ao clima tropical brasileiro. Seus bolos ficarão perfeitos mesmo em dias quentes.",
                },
            },
        ],
    };
}

export function generateBreadcrumbSchema() {
    return {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
            {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: "https://bolos-contemporaneos.vercel.app",
            },
            {
                "@type": "ListItem",
                position: 2,
                name: "E-book Bolos Contemporâneos",
                item: "https://bolos-contemporaneos.vercel.app",
            },
        ],
    };
}
