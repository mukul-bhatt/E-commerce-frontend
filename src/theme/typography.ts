import { Platform } from 'react-native';

/**
 * Cross-platform font family names.
 * - Android uses the filename (without extension) as the font family name.
 * - iOS uses the PostScript name embedded in the font file.
 *
 * Use this object with inline `style={{ fontFamily: fonts.girassol }}`
 * for reliable cross-platform font rendering.
 */
export const fonts = {
  girassol: Platform.select({
    ios: 'Girassol-Regular',
    android: 'Girassol_400Regular',
    default: 'Girassol_400Regular',
  })!,
  cormorantGaramond: Platform.select({
    ios: 'CormorantGaramond-Medium',
    android: 'CormorantGaramond_500Medium',
    default: 'CormorantGaramond_500Medium',
  })!,
  gidugu: Platform.select({
    ios: 'Gidugu-Regular',
    android: 'Gidugu_400Regular',
    default: 'Gidugu_400Regular',
  })!,
};

// Keep fontFamily export compatible with existing JS imports
export const fontFamily = {
  girassol: 'Girassol_400Regular',
  cormorantGaramond: 'CormorantGaramond_500Medium',
  gidugu: 'Gidugu_400Regular',
};
