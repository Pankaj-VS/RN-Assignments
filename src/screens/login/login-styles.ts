import {StyleSheet} from 'react-native';
import {SPACING} from '../../theme/spacing';

export const styles = StyleSheet.create({
  mainContainer: {
    flex: SPACING.space_1,
  },
  imageContainer: {
    alignItems: 'center',
  },
  image: {
    height: SPACING.space_179,
    width: SPACING.space_176,
    marginTop: SPACING.space_176,
  },
  title: {
    textAlign: 'center',
    lineHeight: SPACING.space_34,
    color: '#FF647C',
  },
  text: {
    lineHeight: SPACING.space_24,
  },
  textInput: {
    height: SPACING.space_56,
    borderWidth: SPACING.space_1,
    borderRadius: SPACING.space_18,
  },
  subContainer: {
    marginHorizontal: SPACING.space_8,
  },
  loginButtonText: {
    textAlign: 'center',
    color: 'white',
  },
  loginButton: {
    backgroundColor: '#FF647C',
    height: SPACING.space_50,
    justifyContent: 'center',
    borderRadius: SPACING.space_8,
    marginHorizontal: SPACING.space_8,
  },
  errorMessage: {
    lineHeight: SPACING.space_24,
    color: '#D7402B',
  },
});
