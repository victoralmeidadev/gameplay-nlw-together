import React, { useCallback, useState } from "react";
import { View, FlatList, Text, TouchableOpacity } from "react-native";
import { useNavigation, useFocusEffect } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { useAuth } from "../../hooks/auth";

import { COLLECTION_APPOINTMENTS } from "../../configs";

import { Appointment, AppointmentProps } from "../../components/Appointment";
import { CategorySelect } from "../../components/CategorySelect";
import { ListDivider } from "../../components/ListDivider";
import { Background } from "../../components/Background";
import { ListHeader } from "../../components/ListHeader";
import { ModalSignout } from "../../components/ModalSignout";
import { ButtonAdd } from "../../components/ButtonAdd";
import { Profile } from "../../components/Profile";
import { Load } from "../../components/Load";

import { styles } from "./styles";

export function Home() {
  const navigation = useNavigation();
  const { signOut } = useAuth();
  const [category, setCategory] = useState("");
  const [loading, setLoading] = useState(true);
  const [signingOut, setSigningOut] = useState(false);
  const [appointments, setAppointments] = useState<AppointmentProps[]>([]);

  const handleAppointmentDetails = useCallback(
    (guildSelected: AppointmentProps) => {
      navigation.navigate("AppointmentDetails", { guildSelected });
    },
    [navigation]
  );
  const handleAppointmentCreate = useCallback(() => {
    navigation.navigate("AppointmentCreate");
  }, [navigation]);

  const handleCategorySelect = useCallback(
    (categoryId: string) => {
      categoryId === category ? setCategory("") : setCategory(categoryId);
    },
    [category]
  );

  const loadAppointments = useCallback(async () => {
    const response = await AsyncStorage.getItem(COLLECTION_APPOINTMENTS);
    const storage: AppointmentProps[] = response ? JSON.parse(response) : [];
    if (category) {
      setAppointments(storage.filter((item) => item.category === category));
    } else {
      setAppointments(storage);
    }

    setLoading(false);
  }, [category]);

  useFocusEffect(
    useCallback(() => {
      loadAppointments();
    }, [category])
  );

  const handleShowSignOut = useCallback(() => {
    setSigningOut(true);
  }, []);

  const handleCancelSignOut = useCallback(() => {
    setSigningOut(false);
  }, []);

  return (
    <Background>
      <View style={styles.header}>
        <Profile handleShowSignOut={handleShowSignOut} />
        <ButtonAdd onPress={handleAppointmentCreate} />
      </View>
      <CategorySelect categorySelected={category} setCategory={handleCategorySelect} />
      {loading ? (
        <Load />
      ) : (
        <>
          <ListHeader title="Partidas agendadas" subtitle={`Total ${appointments.length}`} />

          <FlatList
            data={appointments}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => <Appointment data={item} onPress={() => handleAppointmentDetails(item)} />}
            ItemSeparatorComponent={() => <ListDivider />}
            contentContainerStyle={{ paddingBottom: 69 }}
            style={styles.matches}
            showsVerticalScrollIndicator={false}
          />
        </>
      )}
      <ModalSignout visible={signingOut} closeModal={handleCancelSignOut}>
        <View style={styles.signoutWrapper}>
          <Text style={styles.signoutMessage}>
            Deseja sair do Game<Text style={styles.signoutMessagePrimary}>Play</Text>?
          </Text>
          <View style={styles.signoutButtonsWrapper}>
            <TouchableOpacity style={styles.cancelButton} activeOpacity={0.7} onPress={handleCancelSignOut}>
              <Text style={styles.buttonText}>Não</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.confirmButton} activeOpacity={0.7} onPress={signOut}>
              <Text style={styles.buttonText}>Sim</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ModalSignout>
    </Background>
  );
}
