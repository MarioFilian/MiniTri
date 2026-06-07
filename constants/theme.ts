/**
 * Paleta de colores de la Selección Ecuatoriana de Fútbol.
 * Basada en el escudo oficial de la FEF y los colores de la bandera.
 */

import { Platform } from 'react-native';

// Colores principales de la selección
export const EcuadorColors = {
  navyBlue: '#1B2A4A',
  darkNavy: '#0D1B2A',
  gold: '#C5A55A',
  goldLight: '#D4B96E',
  yellow: '#FFD100',
  flagBlue: '#1C2C6C',
  red: '#CE1126',
  white: '#FFFFFF',
  offWhite: '#F5F5F0',
  grayLight: '#E8E8E8',
  grayMedium: '#8A8A8A',
};

const tintColorLight = EcuadorColors.navyBlue;
const tintColorDark = EcuadorColors.gold;

export const Colors = {
  light: {
    text: '#11181C',
    background: EcuadorColors.offWhite,
    tint: tintColorLight,
    icon: EcuadorColors.navyBlue,
    tabIconDefault: EcuadorColors.grayMedium,
    tabIconSelected: tintColorLight,
    card: EcuadorColors.white,
    cardBorder: EcuadorColors.gold,
    cardTitle: EcuadorColors.navyBlue,
    sectionTitle: EcuadorColors.navyBlue,
    accent: EcuadorColors.gold,
    headerBackground: EcuadorColors.navyBlue,
    headerText: EcuadorColors.white,
  },
  dark: {
    text: '#ECEDEE',
    background: EcuadorColors.darkNavy,
    tint: tintColorDark,
    icon: EcuadorColors.goldLight,
    tabIconDefault: '#6B7280',
    tabIconSelected: tintColorDark,
    card: '#1A2744',
    cardBorder: EcuadorColors.gold,
    cardTitle: EcuadorColors.goldLight,
    sectionTitle: EcuadorColors.goldLight,
    accent: EcuadorColors.gold,
    headerBackground: EcuadorColors.darkNavy,
    headerText: EcuadorColors.white,
  },
};

export const Fonts = Platform.select({
  ios: {
    /** iOS `UIFontDescriptorSystemDesignDefault` */
    sans: 'system-ui',
    /** iOS `UIFontDescriptorSystemDesignSerif` */
    serif: 'ui-serif',
    /** iOS `UIFontDescriptorSystemDesignRounded` */
    rounded: 'ui-rounded',
    /** iOS `UIFontDescriptorSystemDesignMonospaced` */
    mono: 'ui-monospace',
  },
  default: {
    sans: 'normal',
    serif: 'serif',
    rounded: 'normal',
    mono: 'monospace',
  },
  web: {
    sans: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
    serif: "Georgia, 'Times New Roman', serif",
    rounded: "'SF Pro Rounded', 'Hiragino Maru Gothic ProN', Meiryo, 'MS PGothic', sans-serif",
    mono: "SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace",
  },
});
