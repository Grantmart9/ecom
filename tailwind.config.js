/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: [
        './pages/**/*.{ts,tsx}',
        './components/**/*.{ts,tsx}',
        './app/**/*.{ts,tsx}',
        './src/**/*.{ts,tsx}',
    ],
    prefix: "",
    theme: {
        container: {
            center: true,
            padding: "2rem",
            screens: {
                "2xl": "1400px",
            },
        },
        extend: {
            colors: {
                border: "hsl(var(--border))",
                input: "hsl(var(--input))",
                ring: "hsl(var(--ring))",
                background: "hsl(var(--background))",
                foreground: "hsl(var(--foreground))",
                primary: {
                    DEFAULT: "hsl(var(--primary))",
                    foreground: "hsl(var(--primary-foreground))",
                },
                secondary: {
                    DEFAULT: "hsl(var(--secondary))",
                    foreground: "hsl(var(--secondary-foreground))",
                },
                destructive: {
                    DEFAULT: "hsl(var(--destructive))",
                    foreground: "hsl(var(--destructive-foreground))",
                },
                muted: {
                    DEFAULT: "hsl(var(--muted))",
                    foreground: "hsl(var(--muted-foreground))",
                },
                accent: {
                    DEFAULT: "hsl(var(--accent))",
                    foreground: "hsl(var(--accent-foreground))",
                },
                popover: {
                    DEFAULT: "hsl(var(--popover))",
                    foreground: "hsl(var(--popover-foreground))",
                },
                card: {
                    DEFAULT: "hsl(var(--card))",
                    foreground: "hsl(var(--card-foreground))",
                },
                // Enhanced vibrant color palette inspired by top e-commerce apps
                'layout-bg': '#000000',
                'layout-text': '#f0f7f7',
                'text-color': '#4A403C',
                'page-bg': '#ffffff',
                // Primary brand colors
                blue: "#1fb6ff",
                purple: "#7e5bef",
                pink: "#ff49db",
                orange: "#ff7849",
                green: "#13ce66",
                yellow: "#ffc82c",
                "gray-dark": "#273444",
                gray: "#8492a6",
                "gray-light": "#d3dce6",
                // Modern e-commerce color scheme
                'primary-blue': '#0066cc',
                'primary-purple': '#8b5cf6',
                'primary-pink': '#ec4899',
                'primary-orange': '#f97316',
                'primary-green': '#10b981',
                'primary-yellow': '#eab308',
                'secondary-cyan': '#06b6d4',
                'secondary-teal': '#14b8a6',
                'secondary-indigo': '#6366f1',
                'secondary-rose': '#f43f5e',
                'accent-lime': '#84cc16',
                'accent-emerald': '#22c55e',
                'neutral-warm': '#f3f4f6',
                'neutral-cool': '#e5e7eb',
                // Gradient colors
                'gradient-start': '#667eea',
                'gradient-middle': '#764ba2',
                'gradient-end': '#f093fb',
                'sunset-start': '#ff9a9e',
                'sunset-middle': '#fecfef',
                'sunset-end': '#fecfef',
                'ocean-start': '#667eea',
                'ocean-middle': '#764ba2',
                'ocean-end': '#667eea',
            },
            fontFamily: {
                sans: ["Geist", "system-ui", "sans-serif"],
                serif: ["Merriweather", "serif"],
            },
            borderRadius: {
                lg: "var(--radius)",
                md: "calc(var(--radius) - 2px)",
                sm: "calc(var(--radius) - 4px)",
                "4xl": "2rem",
            },
            keyframes: {
                "accordion-down": {
                    from: { height: "0" },
                    to: { height: "var(--radix-accordion-content-height)" },
                },
                "accordion-up": {
                    from: { height: "var(--radix-accordion-content-height)" },
                    to: { height: "0" },
                },
            },
            animation: {
                "accordion-down": "accordion-down 0.2s ease-out",
                "accordion-up": "accordion-up 0.2s ease-out",
            },
            spacing: {
                "8xl": "96rem",
                "9xl": "128rem",
            },
        },
    },
    plugins: [require("tailwindcss-animate")],
}