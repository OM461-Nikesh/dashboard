import { createTheme } from '@mui/material'

const theme = createTheme()

export const ThemeTypography = {
  h1: {
    fontSize: '2.375em', // 38px
    lineHeight: 1.21, // 46px,
    fontWeight: 700,
  },
  h2: {
    fontSize: '1.875em', // 30px
    lineHeight: 1.27, // 38px,
    fontWeight: 500,
  },
  h3: {
    fontSize: '1.5em', // 24px
    lineHeight: 1.33, // 32px
    fontWeight: 500,
    [theme.breakpoints.down('lg')]: {
      fontSize: '1.25em', // 20px
      lineHeight: 1.4,
    },
  },
  h4: {
    fontSize: '1.25em', // 20px
    lineHeight: 1.4, // 28px
    fontWeight: 500,
  },
  h5: {
    fontSize: '1em', // 16px
    lineHeight: 1.5, // 24px
    fontWeight: 500,
  },
  h6: {
    fontSize: '0.875rem', // 14px
    lineHeight: 1.57, // 22px
    fontWeight: 500,
  },
  body1: {
    fontSize: '1em', // 16px
    lineHeight: 1.5, // 24px
    fontWeight: 400,
  },
  body2: {
    fontSize: '0.875rem', // 14px
    lineHeight: 1.57, // 22px
    fontWeight: 400,
  },
  subtitle1: {
    fontSize: '1em', // 16px
    lineHeight: 1.5, // 24px
    fontWeight: 500,
  },
  subtitle2: {
    fontSize: '0.875rem', // 14px
    lineHeight: 1.57, // 22px,
    fontWeight: 400,
  },
  caption: {
    fontSize: '0.75em', // 12px
    lineHeight: 1.66, // 20px,
    fontWeight: 400,
  },
}
