import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#8B5CF6", // Modern purple
      light: "#A78BFA",
      dark: "#7C3AED",
    },
    secondary: {
      main: "#F43F5E", // Modern rose
      light: "#FB7185",
      dark: "#E11D48",
    },
    background: {
      default: "#F8FAFC",
      paper: "#FFFFFF",
    },
    text: {
      primary: "#1E293B", // Slate-800
      secondary: "#64748B", // Slate-500
      hint: "#94A3B8", // Slate-400
    },
    success: {
      main: "#10B981", // Emerald-500
      light: "#34D399",
      dark: "#059669",
      contrastText: "#FFFFFF",
    },
    error: {
      main: "#EF4444", // Red-500
      light: "#F87171",
      dark: "#DC2626",
      contrastText: "#FFFFFF",
    },
    warning: {
      main: "#F59E0B", // Amber-500
      light: "#FBBF24",
      dark: "#D97706",
      contrastText: "#FFFFFF",
    },
    info: {
      main: "#3B82F6", // Blue-500
      light: "#60A5FA",
      dark: "#2563EB",
      contrastText: "#FFFFFF",
    },
  },
  typography: {
    fontFamily: '"Poppins", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 700,
      fontSize: "2.5rem",
      lineHeight: 1.2,
      letterSpacing: "-0.01562em",
      color: "#1E293B", // Slate-800
      marginBottom: "0.5em",
    },
    h2: {
      fontWeight: 700,
      fontSize: "2rem",
      lineHeight: 1.3,
      letterSpacing: "-0.00833em",
      color: "#1E293B",
      marginBottom: "0.5em",
    },
    h3: {
      fontWeight: 600,
      fontSize: "1.5rem",
      lineHeight: 1.4,
      letterSpacing: "0em",
      color: "#1E293B",
      marginBottom: "0.5em",
    },
    h4: {
      fontWeight: 600,
      fontSize: "1.25rem",
      lineHeight: 1.4,
      letterSpacing: "0.00735em",
      color: "#1E293B",
      marginBottom: "0.5em",
    },
    subtitle1: {
      fontSize: "1.125rem",
      fontWeight: 500,
      lineHeight: 1.5,
      color: "#475569", // Slate-600
      marginBottom: "0.35em",
    },
    subtitle2: {
      fontSize: "0.875rem",
      fontWeight: 500,
      lineHeight: 1.57,
      color: "#64748B", // Slate-500
      letterSpacing: "0.00714em",
    },
    body1: {
      fontSize: "1rem",
      lineHeight: 1.5,
      color: "#475569", // Slate-600
      letterSpacing: "0.00938em",
    },
    body2: {
      fontSize: "0.875rem",
      lineHeight: 1.43,
      color: "#64748B", // Slate-500
      letterSpacing: "0.01071em",
    },
    button: {
      textTransform: "none",
      fontWeight: 600,
      fontSize: "0.9375rem",
      letterSpacing: "0.02857em",
    },
    caption: {
      fontSize: "0.75rem",
      lineHeight: 1.66,
      color: "#94A3B8", // Slate-400
      letterSpacing: "0.03333em",
    },
    overline: {
      fontSize: "0.75rem",
      fontWeight: 600,
      lineHeight: 2.66,
      color: "#64748B", // Slate-500
      letterSpacing: "0.08333em",
      textTransform: "uppercase",
    },
  },
  shape: {
    borderRadius: 12,
  },
  overrides: {
    MuiButton: {
      root: {
        textTransform: "none",
        borderRadius: 12,
        padding: "10px 20px",
        fontWeight: 500,
        fontSize: "0.9375rem",
      },
      contained: {
        boxShadow: "none",
        "&:hover": {
          boxShadow: "0px 4px 8px rgba(99, 102, 241, 0.15)",
        },
      },
      containedPrimary: {
        "&:hover": {
          boxShadow: "0px 4px 8px rgba(99, 102, 241, 0.25)",
        },
      },
      outlined: {
        borderWidth: "1.5px",
        "&:hover": {
          borderWidth: "1.5px",
        },
      },
    },
    MuiPaper: {
      rounded: {
        borderRadius: 12,
        boxShadow: "0px 4px 16px rgba(0, 0, 0, 0.05)",
      },
      elevation1: {
        boxShadow: "0px 4px 16px rgba(0, 0, 0, 0.05)",
      },
    },
    MuiCard: {
      root: {
        borderRadius: 12,
        boxShadow: "0px 4px 16px rgba(0, 0, 0, 0.05)",
        "&:hover": {
          boxShadow: "0px 8px 24px rgba(0, 0, 0, 0.08)",
        },
      },
    },
    MuiTextField: {
      root: {
        "& .MuiOutlinedInput-root": {
          borderRadius: 12,
          "& fieldset": {
            borderWidth: "1.5px",
          },
          "&:hover fieldset": {
            borderWidth: "1.5px",
          },
          "&.Mui-focused fieldset": {
            borderWidth: "2px",
          },
        },
      },
    },
    MuiInputBase: {
      input: {
        fontSize: "1rem",
        lineHeight: 1.5,
      },
    },
    MuiChip: {
      root: {
        borderRadius: 8,
        height: 32,
      },
      label: {
        fontSize: "0.875rem",
        fontWeight: 500,
      },
    },
    MuiAppBar: {
      root: {
        boxShadow: "0px 1px 3px rgba(0, 0, 0, 0.05)",
      },
    },
    MuiTooltip: {
      tooltip: {
        backgroundColor: "#1F2937",
        fontSize: "0.8125rem",
        padding: "8px 12px",
        borderRadius: 8,
      },
    },
  },
});

export default theme;
