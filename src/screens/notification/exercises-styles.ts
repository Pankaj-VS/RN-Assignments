import {StyleSheet, ViewStyle, TextStyle} from 'react-native';

interface Styles {
  container: ViewStyle;
  pageHeading: ViewStyle;
  headingText: TextStyle;
  cardsContainer: ViewStyle;
  cardsSubContainer: ViewStyle;
}

export const styles = StyleSheet.create<Styles>({
  container: {
    flex: 1,
  },
  pageHeading: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 64,
    paddingVertical: 16,
  },
  headingText: {
    color: '#292F36',
    fontFamily: 'Fraunces_72pt-Bold',
    fontSize: 18,
    fontWeight: '600',
  },
  cardsContainer: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 24,
  },
  cardsSubContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 24,
  },
});
