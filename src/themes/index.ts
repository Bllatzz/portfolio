// Theme configuration
export const theme = {
  colors: {
    primary: {
      cyan: '#4fc3f7',
      purple: '#a78bfa',
      pink: '#f472b6',
      orange: '#fb923c',
    },
    dark: {
      50: '#2a2a2a',
      100: '#222222',
      200: '#1a1a1a',
      300: '#151515',
      400: '#111111',
      500: '#0a0a0a',
    },
  },
  fonts: {
    sans: 'Space Grotesk, sans-serif',
    mono: 'JetBrains Mono, monospace',
  },
  breakpoints: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px',
  },
} as const

export type Theme = typeof theme

