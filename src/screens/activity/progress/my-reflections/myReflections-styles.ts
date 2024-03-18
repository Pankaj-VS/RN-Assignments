import { StyleSheet, ViewStyle } from 'react-native'

import { Spacing } from '../../../../theme/spacing'

interface Istyles {
  container: ViewStyle
}
export const styles = StyleSheet.create<Istyles>({
  container: {
    flex: Spacing.space_1,
    gap: Spacing.space_16,
  },
})
