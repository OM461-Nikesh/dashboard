'use client'

import { createTheme } from '@mui/material'
import { ThemeTypography } from './typography'
import { ThemeColors } from './colors'

const theme = createTheme({
  palette: {
    mode: 'light',
    background: {
      default: ThemeColors.background,
    },
    primary: {
      light: ThemeColors.primaryLight,
      main: ThemeColors.primaryDark,
      dark: ThemeColors.black,
    },
    secondary: {
      light: ThemeColors.secondaryLight,
      main: ThemeColors.secondaryMain,
      dark: ThemeColors.secondaryDark,
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 640,
      md: 940,
      lg: 1200,
      xl: 1600,
    },
  },
  typography: {
    htmlFontSize: 16,
    h1: ThemeTypography.h1,
    h2: ThemeTypography.h2,
    h3: ThemeTypography.h3,
    h4: ThemeTypography.h4,
    h5: ThemeTypography.h5,
    h6: ThemeTypography.h6,
    body1: ThemeTypography.body1,
    body2: ThemeTypography.body2,
    subtitle1: ThemeTypography.subtitle1,
    subtitle2: ThemeTypography.subtitle2,
    caption: ThemeTypography.caption,
    fontWeightBold: 700,
    fontWeightMedium: 500,
    fontWeightRegular: 400,
    fontWeightLight: 300,
    fontSize: 16,
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        '::selection': {
          color: ThemeColors.white,
          background: 'rgba(40, 36, 37, 0.5)',
        },
        html: {
          WebkitOverflowScrolling: 'touch',
        },
        body: {
          backgroundColor: ThemeColors.background,
        },
        Link: {
          color: 'red',
        },
      },
    },
    MuiAlert: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          ...(ownerState.severity === 'info' && {
            backgroundColor: '#60a5fa',
          }),
        }),
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: '15px',
          '& .MuiMenuItem-gutters': {
            fontSize: '0.875rem', // 14px
          },
          '& .MuiAutocomplete-listbox': {
            maxHeight: 250,
            '& .MuiAutocomplete-option': {
              overflowWrap: 'anywhere',
            },
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '24px',
          fontSize: '1em', // 16px
          letterSpacing: '1px',
          padding: '5px 16px',
          '@media(max-width: 1024px)': {
            fontSize: '0.75em', // 12px
          },
          '&.MuiButton-outlined': {
            padding: '4px 15px',
          },
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          '&.Mui-disabled': {
            opacity: 0.4,
          },
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          borderRadius: '4px',
          input: {
            padding: '16px 14px',
            lineHeight: '20px',
            height: 'auto',
            borderRadius: '4px',
          },
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: '4px',
          input: {
            padding: '16px 14px',
            lineHeight: '20px',
            height: 'auto',
            borderRadius: '4px',
          },
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: ThemeColors.textGray,
          '&.MuiInputLabel-animated': {
            background: ThemeColors.white,
            padding: '0 8px',
          },
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          color: ThemeColors.link,
          textDecoration: 'none',

          '&:hover': {
            textDecoration: 'underline',
          },
        },
      },
    },
  },
})

export default theme
