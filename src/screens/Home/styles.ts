import { StyleSheet } from "react-native";

import { getStatusBarHeight } from "react-native-iphone-x-helper";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    width: "100%",
    paddingHorizontal: 24,
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: getStatusBarHeight() + 26,
    marginBottom: 42,
  },
  content: {
    marginTop: 42,
  },
  matches: {
    marginTop: 24,
    marginLeft: 24,
  },
  signoutWrapper: {
    paddingHorizontal: 24,
    paddingVertical: 38,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: theme.colors.secondary100,
  },
  signoutMessage: { fontFamily: theme.fonts.title700, color: theme.colors.heading, fontSize: 20 },
  signoutMessagePrimary: { fontFamily: theme.fonts.title700, color: theme.colors.primary, fontSize: 20 },
  signoutButtonsWrapper: {
    marginTop: 31,
    flexDirection: "row",
    alignItems: "center",
  },
  cancelButton: {
    height: 56,
    width: 160,
    backgroundColor: "transparent",
    borderColor: theme.colors.secondary30,
    borderWidth: 1,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    margin: 5,
  },
  confirmButton: {
    height: 56,
    width: 160,
    backgroundColor: theme.colors.primary,
    borderWidth: 1,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    margin: 5,
  },
  buttonText: {
    fontFamily: theme.fonts.text500,
    color: theme.colors.heading,
    fontSize: 15,
  },
});
