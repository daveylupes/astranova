import { createContext, useState, useMemo } from 'react';
import { createTheme } from '@mui/material/styles';

// Color design tokens
export const tokens = (mode) => ({
  ...(mode === 'dark'
    ? {
        primary: {
          100: "#293319",
          200: "#536633",
          300: "#7c984c",
          400: "#a6cb66",
          500: "#cffe7f",
          600: "#d9fe99",
          700: "#e2feb2",
          800: "#ecffcc",
          900: "#f5ffe5",
        },
        black: {
          100: "#010200",
          200: "#020300",
          300: "#020501",
          400: "#030601",
          500: "#040801",
          600: "#363934",
          700: "#686b67",
          800: "#9b9c99",
          900: "#cdcecc",
        },
        blackAccent: {
          100: "#020401",
          200: "#050702",
          300: "#070b02",
          400: "#0a0e03",
          500: "#0c1204",
          600: "#3d4136",
          700: "#6d7168",
          800: "#9ea09b",
          900: "#ced0cd",
        },
        limeAcc: {
          100: "#293318",
          200: "#526630",
          300: "#7b9849",
          400: "#a4cb61",
          500: "#cdfe79",
          600: "#d7fe94",
          700: "#e1feaf",
          800: "#ebffc9",
          900: "#f5ffe4",
        },
        Lime: {
          100: "#242c16",
          200: "#48582b",
          300: "#6b8541",
          400: "#8fb156",
          500: "#b3dd6c",
          600: "#c2e489",
          700: "#d1eba7",
          800: "#e1f1c4",
          900: "#f0f8e2",
        },
      }
    : {
        primary: {
          100: "#f5ffe5",
          200: "#ecffcc",
          300: "#e2feb2",
          400: "#d9fe99",
          500: "#cffe7f",
          600: "#a6cb66",
          700: "#7c984c",
          800: "#536633",
          900: "#293319",
        },
        black: {
          100: "#cdcecc",
          200: "#9b9c99",
          300: "#686b67",
          400: "#363934",
          500: "#040801",
          600: "#030601",
          700: "#020501",
          800: "#020300",
          900: "#010200",
        },
        blackAccent: {
          100: "#ced0cd",
          200: "#9ea09b",
          300: "#6d7168",
          400: "#3d4136",
          500: "#0c1204",
          600: "#0a0e03",
          700: "#070b02",
          800: "#050702",
          900: "#020401",
        },
        limeAcc: {
          100: "#f5ffe4",
          200: "#ebffc9",
          300: "#e1feaf",
          400: "#d7fe94",
          500: "#cdfe79",
          600: "#a4cb61",
          700: "#7b9849",
          800: "#526630",
          900: "#293318",
        },
        Lime: {
          100: "#f0f8e2",
          200: "#e1f1c4",
          300: "#d1eba7",
          400: "#c2e489",
          500: "#b3dd6c",
          600: "#8fb156",
          700: "#6b8541",
          800: "#48582b",
          900: "#242c16",
        },
      }),
});

// MUI theme settings
export const themeSettings = (mode) => {
  const colors = tokens(mode);

  return {
    palette: {
      mode: mode,
      primary: {
        main: colors.primary[500],
      },
      secondary: {
        main: colors.limeAcc[500],
      },
      neutral: {
        dark: colors.black[700],
        main: colors.black[500],
        light: colors.black[100],
      },
      background: {
        default: mode === 'dark' ? colors.primary[500] : colors.primary[100],
      },
    },
    typography: {
      fontFamily: ["Source Ubuntu", "sans-serif"].join(","),
      fontSize: 12,
      h1: {
        fontFamily: ["Source Ubuntu", "sans-serif"].join(","),
        fontSize: 40,
      },
      h2: {
        fontFamily: ["Source Ubuntu", "sans-serif"].join(","),
        fontSize: 32,
      },
      h3: {
        fontFamily: ["Source Ubuntu", "sans-serif"].join(","),
        fontSize: 24,
      },
      h4: {
        fontFamily: ["Source Ubuntu", "sans-serif"].join(","),
        fontSize: 20,
      },
      h5: {
        fontFamily: ["Source Ubuntu", "sans-serif"].join(","),
        fontSize: 16,
      },
      h6: {
        fontFamily: ["Source Ubuntu", "sans-serif"].join(","),
        fontSize: 14,
      },
    },
  };
};

// Context for color mode
export const ColorModeContext = createContext({
  toggleColorMode: () => {},
});

export const useMode = () => {
  const [mode, setMode] = useState('dark');

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () =>
        setMode((prev) => (prev === 'light' ? 'dark' : 'light')),
    }),
    []
  );

  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);

  return { mode, colorMode, theme };
};
