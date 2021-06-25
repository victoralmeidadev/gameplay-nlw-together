import React, { ReactNode, useCallback } from "react";
import { Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { BorderlessButton } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import { Feather } from "@expo/vector-icons";

import { theme } from "../../global/styles/theme";
import { styles } from "./styles";

type Props = {
  title: string;
  action?: ReactNode;
};

export function Header({ title, action }: Props) {
  const { secondary100, secondary40, heading } = theme.colors;
  const navigation = useNavigation();

  const handleGoBack = useCallback(() => {
    navigation.goBack();
  }, [navigation]);
  return (
    <LinearGradient style={styles.container} colors={[secondary100, secondary40]}>
      <BorderlessButton onPress={handleGoBack}>
        <Feather name="arrow-left" size={24} color={heading} />
      </BorderlessButton>
      <Text style={styles.title}>{title}</Text>
      {action ? <View>{action}</View> : <View style={{ width: 24 }} />}
    </LinearGradient>
  );
}
