import {StyleSheet, ViewStyle, TextStyle} from 'react-native';

interface Styles {
  cardContainer: ViewStyle;
  ImageBackground: ViewStyle;
  imageHeadingContainer: ViewStyle;
  imageHeading: TextStyle;
}

export const styles = StyleSheet.create<Styles>({
  cardContainer: {
    borderRadius: 16,
    justifyContent: 'space-between',
    width: 335,
    height: 148,
    overflow: 'hidden',
  },
  ImageBackground: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  imageHeadingContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 118,
    paddingVertical: 8,
  },
  imageHeading: {
    fontFamily: 'Fraunces_72pt-Bold',
    fontSize: 15,
    fontWeight: '600',
  },
});
