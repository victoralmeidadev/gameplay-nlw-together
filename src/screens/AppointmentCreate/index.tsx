import React, { useCallback, useState } from "react";
import { View, Text, ScrollView, KeyboardAvoidingView, Platform } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import { Feather } from "@expo/vector-icons";

import { theme } from "../../global/styles/theme";
import { styles } from "./styles";

import { CategorySelect } from "../../components/CategorySelect";
import { SmallInput } from "../../components/SmallInput";
import { GuildIcon } from "../../components/GuildIcon";
import { TextArea } from "../../components/TextArea";
import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import { ModalView } from "../../components/ModalView";
import { GuildProps } from "../../components/Guild";
import { Background } from "../../components/Background";
import { Guilds } from "../Guilds";

export function AppointmentCreate() {
  const [category, setCategory] = useState("");
  const [openGuildsModal, setOpenGuildsModal] = useState(false);
  const [guild, setGuild] = useState<GuildProps>({} as GuildProps);

  const handleOpenGuilds = useCallback(() => {
    setOpenGuildsModal(true);
  }, []);
  const handleCloseGuilds = useCallback(() => {
    setOpenGuildsModal(false);
  }, []);

  const handleGuildSelect = useCallback((guildSelected: GuildProps) => {
    setGuild(guildSelected);
    setOpenGuildsModal(false);
  }, []);

  const handleCategorySelect = useCallback((categoryId: string) => {
    setCategory(categoryId);
  }, []);

  return (
    <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={styles.container}>
      <Background>
        <ScrollView>
          <Header title="Detalhes" />
          <Text style={[styles.label, { marginLeft: 24, marginTop: 36, marginBottom: 18 }]}>Categoria</Text>
          <CategorySelect hasCheckBox setCategory={handleCategorySelect} categorySelected={category} />
          <View style={styles.form}>
            <RectButton onPress={handleOpenGuilds}>
              <View style={styles.select}>
                {guild.icon ? <GuildIcon /> : <View style={styles.image} />}
                <View style={styles.selectBody}>
                  <Text style={styles.label}>{guild.name ? guild.name : "Selecione um servidor"}</Text>
                </View>
                <Feather name="chevron-right" size={18} color={theme.colors.heading} />
              </View>
            </RectButton>

            <View style={styles.field}>
              <View>
                <Text style={[styles.label, { marginBottom: 12 }]}>Dia e mês</Text>
                <View style={styles.column}>
                  <SmallInput maxLength={2} />
                  <Text style={styles.divider}>/</Text>
                  <SmallInput maxLength={2} />
                </View>
              </View>
              <View>
                <Text style={[styles.label, { marginBottom: 12 }]}>Hora e minuto</Text>
                <View style={styles.column}>
                  <SmallInput maxLength={2} />
                  <Text style={styles.divider}>:</Text>
                  <SmallInput maxLength={2} />
                </View>
              </View>
            </View>

            <View style={[styles.field, { marginBottom: 12 }]}>
              <Text style={styles.label}>Descrição</Text>
              <Text style={styles.charLimit}>Max 100 caracteres</Text>
            </View>
            <TextArea multiline maxLength={100} numberOfLines={5} autoCorrect={false} />
            <View style={styles.footer}>
              <Button title="Agendar" />
            </View>
          </View>
        </ScrollView>
        <ModalView visible={openGuildsModal} closeModal={handleCloseGuilds}>
          <Guilds handleGuildSelect={handleGuildSelect} />
        </ModalView>
      </Background>
    </KeyboardAvoidingView>
  );
}
