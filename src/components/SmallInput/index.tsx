import React from "react";
import { TextInput, TextInputProps } from "react-native";

import { styles } from "./styles";

export function SmallInput({ ...props }: TextInputProps) {
  return <TextInput style={styles.container} keyboardType="numeric" {...props} />;
}
