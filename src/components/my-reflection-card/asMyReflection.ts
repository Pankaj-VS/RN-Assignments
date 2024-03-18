import { StyleSheet } from 'react-native'
import { Typography } from '../../theme/typography'

export const styles = StyleSheet.create({
  mainContainer: {
    paddingVertical: 12,
    paddingHorizontal: 20,
    gap: 4,
    borderBottomWidth: 0.5,
    borderBottomColor: '#D0F7F1',
  },
  subContainer1: {
    fontFamily: Typography.secondary.bold,
    fontSize: 16,
    lineHeight: 22,
    textAlign: 'left',
  },
  subContainer2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    fontFamily: Typography.primary.bold,
    fontSize: 14,
    lineHeight: 21,
    color: '#E84C8D',
  },
  img: {
    height: 16,
    width: 16,
  },
})
