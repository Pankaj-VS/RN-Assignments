import {StyleSheet, ViewStyle, TextStyle, ImageStyle} from 'react-native';

interface Styles {
  noNotificationsContainer: ViewStyle;
  imageContainer: ImageStyle;
  contentContainer: ViewStyle;
  headingContainer: TextStyle;
  subHeadingContainer: ViewStyle;
  subHeading: TextStyle;
}

export const styles = StyleSheet.create<Styles>({
  noNotificationsContainer: {
    flex: 1,
    marginHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 27,
    marginTop: 184,
  },
  imageContainer: {
    width: 154,
    height: 154,
  },
  contentContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8,
  },
  headingContainer: {
    fontFamily: 'Fraunces_72pt-Bold',
    fontWeight: '200',
    color: '#454545',
    fontSize: 24,
  },
  subHeadingContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  subHeading: {
    fontFamily: 'Quicksand-Medium',
    fontWeight: '500',
    fontSize: 16,
    color: '#292F36',
  },
});
