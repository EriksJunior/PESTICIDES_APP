import { StyleSheet } from "react-native"

export const s = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%'
  },
  header: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 0.5,
    borderBottomColor: '#3f3f3f',
    borderBottomStyle: 'solid',
  }
})