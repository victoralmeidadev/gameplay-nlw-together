import React, { useMemo } from "react";
import { View, Text } from "react-native";
import { useAuth } from "../../hooks/auth";
import { Avatar } from "../Avatar";

import { styles } from "./styles";

export function Profile() {
  const getMessage = useMemo(() => {
    const messages = ["Hoje é dia de vitória", "Bora finalizar o dia invicto?", "Ouse desafiar"];
    const message = messages[Math.floor(Math.random() * messages.length)];
    return message;
  }, []);
  const { user } = useAuth();
  return (
    <View style={styles.container}>
      <Avatar urlImage={user.avatar} />
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
