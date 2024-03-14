import { StyleSheet, ViewStyle } from 'react-native'

import { Spacing } from '../../theme/spacing'

interface IStyles {
  container: ViewStyle
  subContainer: ViewStyle
  listContainer: ViewStyle
}

export const styles = StyleSheet.create<IStyles>({
  container: {
    flex: Spacing.space_1,
  },
  subContainer: { flex: Spacing.space_1 },
  listContainer: {
    marginTop: Spacing.space_16,
  },
})
