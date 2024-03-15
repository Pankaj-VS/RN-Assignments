import { StyleSheet, ViewStyle } from 'react-native'

import { Spacing } from '../../theme/spacing'
import { COLORS } from '../../theme/colors'

interface IStyles {
  container: ViewStyle
  subContainer: ViewStyle
  listContainer: ViewStyle
}

export const styles = StyleSheet.create<IStyles>({
  container: {
    flex: Spacing.space_1,
    marginBottom: Spacing.space_88,
    backgroundColor: COLORS.white,
  },
  subContainer: { flex: Spacing.space_1 },
  listContainer: {
    marginTop: Spacing.space_16,
  },
})
