import {StyleSheet} from 'react-native';
import {SPACING} from '../../theme/spacing';

export const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems:"center",
  },
  hamburger: {
    width: SPACING.space_28,
    height: SPACING.space_28,
    marginLeft:SPACING.space_14,
  },
  user: {
    width: SPACING.space_28,
    height: SPACING.space_28,
    marginRight:SPACING.space_14,
  },
  text: {
    lineHeight: SPACING.space_22,
    fontSize:SPACING.space_18,
    color:"#151522",
  },
});
