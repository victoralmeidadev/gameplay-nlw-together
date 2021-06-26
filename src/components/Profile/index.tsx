import React, { useMemo } from "react";
import { View, Text } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import { useAuth } from "../../hooks/auth";
import { Avatar } from "../Avatar";

import { styles } from "./styles";

type Props = {
  handleShowSignOut: () => void;
};
export function Profile({ handleShowSignOut }: Props) {
  const getMessage = useMemo(() => {
    const messages = ["Hoje é dia de vitória", "Bora finalizar o dia invicto?", "Ouse desafiar"];
    const message = messages[Math.floor(Math.random() * messages.length)];
    return message;
  }, []);
  const { user } = useAuth();

  return (
    <View style={styles.container}>
      <RectButton onPress={handleShowSignOut}>
        <Avatar urlImage={user.avatar} />
      </RectButton>
      <View>
        <View style={styles.user}>
          <Text style={styles.greeting}>Olá,</Text>
          <Text style={styles.username}>{user.firstName}</Text>
        </View>
        <Text style={styles.message}>{getMessage}</Text>
      </View>
    </View>
  );
}
