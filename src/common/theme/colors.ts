/*
 * Copyright (c) 2024 Omnie solutions Pvt Ltd
 *
 * Author: Omnie solutions Pvt Ltd
 *
 * ---------- --- ----------------------------------------------------------
 */

import { grey } from '@mui/material/colors'

const BrandColors = {
  black: 'rgba(0, 0, 0, 1)', // #000000
  white: 'rgba(255, 255, 255, 1)', // #ffffff

  background: 'rgba(247,248,248,1)', // #F7F8F8

  primaryLight: grey[100], // #f5f5f5
  primaryMain: grey[800], // #424242
  primaryDark: grey[900], // #212121

  secondaryLight: grey[50], // #fafafa
  secondaryMain: grey[300], // #e0e0e0
  secondaryDark: grey[700], // #616161

  darkGray: '#a1a1a1', // #a1a1a1
  textGray: 'rgba(112,112,112,1)', // #707070
  textGray2: 'rgba(96,96,96,1)', // #606060
  slateGray: 'rgba(91,95,108,1)', // #5b5f6c
  gray: 'rgba(88,89,91,1)', // #58595b
  gray2: 'rgba(188,190,192,1)', // #bcbec0
  gray3: 'rgba(219,219,219,1)', // #dbdbdb
  gray4: 'rgba(236,236,236,1)', // #ececec
  gray5: 'rgba(242,242,242,1)', // #f2f2f2
  gray6: 'rgba(246,246,246,1)', // #f6f6f6
  gray7: '#f1f1f1', // #f6f6f6
  red: '#d32f2f',
  tableBorder: 'rgba(0, 0, 0, 0.12)',
  link: '#006bd6',
} as const

export const ThemeColors = {
  ...BrandColors,
}
