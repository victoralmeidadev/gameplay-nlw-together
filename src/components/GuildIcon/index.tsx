import React from "react";
import { Image } from "react-native";
import { RectButton, RectButtonProps } from "react-native-gesture-handler";
import { styles } from "./styles";

import DiscordImg from "../../assets/discord.png";

export function GuildIcon() {
  return (
    <Image
      source={{
        uri: "https://img.utdstc.com/icon/a4a/8a6/a4a8a6b50439dd0a020cc3b1b971df3af09ae118578014799abd16ac23be6649:200",
      }}
      style={styles.image}
      resizeMode="cover"
    />
  );
}
