import {StyleSheet} from 'react-native';
import {SPACING} from '../../theme/spacing';
import {Typography} from '../../theme/typography';

export const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  image: {
    width: SPACING.space_176,
    height: SPACING.space_179,
  },
  text: {
    lineHeight: SPACING.space_34,
    textAlign: 'center',
    color: '#FF647C',
  },
  imageContainer: {
    alignItems: 'center',
  },
  imageTextContainer: {
    flex: SPACING.space_1,
    alignItems: 'center',
    marginTop: SPACING.space_176,
  },
  bottomText: {
    lineHeight: SPACING.space_18,
    textAlign: 'center',
    marginBottom: SPACING.space_52,
  },
});
