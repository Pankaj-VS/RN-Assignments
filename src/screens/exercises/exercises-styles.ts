import {StyleSheet, ViewStyle, TextStyle} from 'react-native';

import {SPACING} from '../../theme/spacing';
import {COLORS} from '../../theme/colors';
import {FONT_FAMILY} from '../../theme/typography';

interface Styles {
  container: ViewStyle;
  header: ViewStyle;
  text: TextStyle;
  cardsContainer: ViewStyle;
  subContainer: ViewStyle;
}

export const styles = StyleSheet.create<Styles>({
  container: {
    flex: SPACING.space_1,
  },
  header: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: SPACING.space_64,
    paddingVertical: SPACING.space_16,
  },
  text: {
    fontSize: SPACING.space_18,
    fontFamily: FONT_FAMILY.fraunces,
    color: COLORS.neutral700,
  },
  cardsContainer: {
    paddingVertical: SPACING.space_24,
    paddingHorizontal: SPACING.space_24,
    flex: SPACING.space_1,
  },
  subContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: SPACING.space_24,
  },
});
