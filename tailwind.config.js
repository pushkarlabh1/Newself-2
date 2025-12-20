module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,html,mdx}"],
  darkMode: "class",
  theme: {
    screens: {
      sm: '640px',   
      md: '768px',    
      lg: '1024px',   
      xl: '1280px',
      '2xl': '1536px'
    },
    extend: {
      colors: {
        // Primary Healthcare Colors
        primary: {
          background: "var(--primary-background)",
          light: "var(--primary-light)",
          lighter: "var(--primary-lighter)",
          accent: "var(--primary-accent)"
        },
        // Secondary Brand Colors
        secondary: {
          background: "var(--secondary-background)",
          green: "var(--secondary-green)",
          sage: "var(--secondary-sage)",
          mint: "var(--secondary-mint)"
        },
        // Accent Colors
        accent: {
          highlight: "var(--accent-highlight)",
          success: "var(--accent-success)",
          error: "var(--accent-error)",
          errorBg: "var(--accent-error-bg)"
        },
        // Neutral Colors
        neutral: {
          white: "var(--neutral-white)",
          whiteOpacity: "var(--neutral-white-opacity)",
          light: "var(--neutral-light)",
          cream: "var(--neutral-cream)",
          warm: "var(--neutral-warm)",
          beige: "var(--neutral-beige)",
          sageLight: "var(--neutral-sage-light)",
          mintLight: "var(--neutral-mint-light)"
        },
        // Text Colors
        text: {
          primary: "var(--text-primary)",
          secondary: "var(--text-secondary)",
          secondaryOpacity: "var(--text-secondary-opacity)",
          tertiary: "var(--text-tertiary)",
          quaternary: "var(--text-quaternary)",
          muted: "var(--text-muted)",
          warm: "var(--text-warm)",
          warmLight: "var(--text-warm-light)",
          brown: "var(--text-brown)"
        },
        // Border Colors
        border: {
          primary: "var(--border-primary)",
          secondary: "var(--border-secondary)",
          tertiary: "var(--border-tertiary)",
          accent: "var(--border-accent)",
          warm: "var(--border-warm)",
          white: "var(--border-white)"
        },
        // Component Specific Colors
        header: {
          background: "var(--header-background)"
        },
        button: {
          primaryBg: "var(--button-primary-bg)",
          accentBg: "var(--button-accent-bg)",
          secondaryBg: "var(--button-secondary-bg)"
        },
        footer: {
          background: "var(--footer-background)"
        },
        expandHeader: {
          background: "var(--expand-header-bg)"
        },
        editText: {
          background: "var(--edit-text-bg)"
        }
      },
      fontSize: {
        'xs': 'var(--font-size-xs)',
        'sm': 'var(--font-size-sm)',
        'base': 'var(--font-size-base)',
        'md': 'var(--font-size-md)',
        'lg': 'var(--font-size-lg)',
        'xl': 'var(--font-size-xl)',
        '2xl': 'var(--font-size-2xl)',
        '3xl': 'var(--font-size-3xl)',
        '4xl': 'var(--font-size-4xl)',
        '5xl': 'var(--font-size-5xl)',
        '6xl': 'var(--font-size-6xl)',
        '7xl': 'var(--font-size-7xl)',
        '8xl': 'var(--font-size-8xl)',
        '9xl': 'var(--font-size-9xl)'
      },
      fontWeight: {
        'extralight': 'var(--font-weight-extralight)',
        'light': 'var(--font-weight-light)',
        'normal': 'var(--font-weight-normal)',
        'medium': 'var(--font-weight-medium)',
        'semibold': 'var(--font-weight-semibold)',
        'bold': 'var(--font-weight-bold)',
        'black': 'var(--font-weight-black)'
      },
      lineHeight: {
        'xs': 'var(--line-height-xs)',
        'sm': 'var(--line-height-sm)',
        'base': 'var(--line-height-base)',
        'md': 'var(--line-height-md)',
        'lg': 'var(--line-height-lg)',
        'xl': 'var(--line-height-xl)',
        '2xl': 'var(--line-height-2xl)',
        '3xl': 'var(--line-height-3xl)',
        '4xl': 'var(--line-height-4xl)',
        '5xl': 'var(--line-height-5xl)',
        '6xl': 'var(--line-height-6xl)',
        '7xl': 'var(--line-height-7xl)',
        '8xl': 'var(--line-height-8xl)',
        '9xl': 'var(--line-height-9xl)'
      },
      spacing: {
        'xs': 'var(--spacing-xs)',
        'sm': 'var(--spacing-sm)',
        'base': 'var(--spacing-base)',
        'md': 'var(--spacing-md)',
        'lg': 'var(--spacing-lg)',
        'xl': 'var(--spacing-xl)',
        '2xl': 'var(--spacing-2xl)',
        '3xl': 'var(--spacing-3xl)',
        '4xl': 'var(--spacing-4xl)',
        '5xl': 'var(--spacing-5xl)',
        '6xl': 'var(--spacing-6xl)',
        '7xl': 'var(--spacing-7xl)',
        '8xl': 'var(--spacing-8xl)',
        '9xl': 'var(--spacing-9xl)'
      },
      borderRadius: {
        'none': 'var(--radius-none)',
        'sm': 'var(--radius-sm)',
        'md': 'var(--radius-md)',
        'lg': 'var(--radius-lg)',
        'xl': 'var(--radius-xl)',
        '2xl': 'var(--radius-2xl)',
        '3xl': 'var(--radius-3xl)',
        'full': 'var(--radius-full)'
      },
      fontFamily: {
        'satoshi': ['Satoshi', 'sans-serif'],
        'dm': ['DM Sans', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
       
      }
    }
  },
  plugins: []
};