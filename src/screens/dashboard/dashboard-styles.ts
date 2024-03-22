import { StyleSheet, ViewStyle } from 'react-native'
import { COLORS } from '../../theme/colors'
import { Spacing } from '../../theme/spacing'

interface IStyles {
  FlatList: ViewStyle
  flatListContainer: ViewStyle
  flatlistItem: ViewStyle
  masteryOftheDayCard: ViewStyle
}

export const styles = StyleSheet.create<IStyles>({
  masteryOftheDayCard: {
    backgroundColor: COLORS.primary[50],
  },
  FlatList: {
    marginBottom: Spacing.space_88,
    marginHorizontal: Spacing.space_20,
    marginVertical: Spacing.space_16,
  },
  flatListContainer: {
    backgroundColor: COLORS.white,
    flex: Spacing.space_1,
  },
  flatlistItem: {
    borderRadius: Spacing.space_16,
    gap: Spacing.space_16,
    justifyContent: 'center',
    marginBottom: Spacing.space_16,
  },
})
