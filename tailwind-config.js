tailwind.config = {
    darkMode: "class",
    theme: {
        extend: {
            "colors": {
                // Core Brand & Background
                "background": "#0A0A0A", // Merged deeper black
                "surface": "#0A0A0A",    // Merged deeper black
                "primary": "#ffffff",
                "primary-container": "#86f400",
                "primary-fixed": "#86f400",
                "primary-fixed-dim": "#abd600",
                "on-primary-fixed": "#0A0A0A", // Force text on lime-green to be black
                "on-primary-container": "#0A0A0A", // Force text on lime-green to be black
                "on-primary": "#0A0A0A",       // Force text on white/brand to be black
                
                // Secondary & Tertiary Accents
                "secondary": "#b5d25e",
                "secondary-container": "#5d7602",
                "tertiary": "#ffffff",
                "tertiary-container": "#d2e5f5",
                
                // Neutral Containers (Surface Palette)
                "surface-bright": "#3a3939",
                "surface-dim": "#131313",
                "surface-container-lowest": "#0e0e0e",
                "surface-container-low": "#1c1b1b",
                "surface-container": "#201f1f",
                "surface-container-high": "#2a2a2a",
                "surface-container-highest": "#353534",
                "surface-variant": "#353534",
                
                // Typography & Outline
                "on-background": "#e5e2e1",
                "on-surface": "#e5e2e1",
                "on-surface-variant": "#c4c9ac",
                "outline": "#8e9379",
                "outline-variant": "#444933",
                
                // Functional Colors
                "error": "#ffb4ab",
                "on-error": "#690005",
                "error-container": "#93000a",
                "on-error-container": "#ffdad6",

                // Inside tailwind.config.theme.extend.colors:
            },
            "borderRadius": {
                "DEFAULT": "0.125rem",
                "lg": "0.25rem",
                "xl": "0.5rem",
                "full": "0.75rem"
            },
            "fontFamily": {
                "headline": ["Space Grotesk", "sans-serif"],
                "body": ["Manrope", "sans-serif"],
                "label": ["Manrope", "sans-serif"]
            },
            // Integrated Animations from Merged CSS
            "keyframes": {
                fadeInUp: {
                    "0%": { opacity: "0", transform: "translateY(20px)" },
                    "100%": { opacity: "1", transform: "translateY(0)" },
                }
            },
            "animation": {
                "fade-in-up": "fadeInUp 0.6s ease-out forwards",
            }
        },
    },
}