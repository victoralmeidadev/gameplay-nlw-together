import React, { useCallback } from "react";
import { View, Text, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { ButtonIcon } from "../../components/ButtonIcon";
import IllustrationImage from "../../assets/illustration.png";
import { styles } from "./styles";

export function SignIn() {
  const navigation = useNavigation();

  const handleSignIn = useCallback(() => {
    navigation.navigate("Home");
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Image source={IllustrationImage} style={styles.image} resizeMode="stretch" />
      <View style={styles.content}>
        <Text style={styles.title}>
          Conecte-se {`\n`} e organize suas {`\n`} jogatinas
        </Text>
        <Text style={styles.subtitle}>
          Crie grupos para jogar seus games {`\n`}
          favoritos com seus amigos
        </Text>
        <ButtonIcon title="Entrar com discord" activeOpacity={0.7} onPress={handleSignIn} />
      </View>
    </View>
  );
}
