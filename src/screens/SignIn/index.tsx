import React, { useCallback } from "react";
import { View, Text, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { styles } from "./styles";

import IllustrationImage from "../../assets/illustration.png";

import { ButtonIcon } from "../../components/ButtonIcon";
import { Background } from "../../components/Background";

export function SignIn() {
  const navigation = useNavigation();

  const handleSignIn = useCallback(() => {
    navigation.navigate("Home");
  }, [navigation]);

  return (
    <Background>
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
    </Background>
  );
}
