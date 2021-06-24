import React, { useCallback, useState } from "react";
import { View, FlatList, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { ButtonAdd } from "../../components/ButtonAdd";
import { Profile } from "../../components/Profile";
import { CategorySelect } from "../../components/CategorySelect";
import { ListHeader } from "../../components/ListHeader";
import { Appointment } from "../../components/Appointment";
import { ListDivider } from "../../components/ListDivider";
import { Background } from "../../components/Background";

import { styles } from "./styles";

export function Home() {
  const navigation = useNavigation();
  const [category, setCategory] = useState("");

  const appointments = [
    {
      id: "1",
      guild: { id: "1", name: "Wakanda", icon: null, owner: true },
      category: "1",
      date: "22/06 as 20:40",
      description: "É hoje que vamos chegar ao challenger sem perder uma partida da md10",
    },
    {
      id: "2",
      guild: { id: "1", name: "Wakanda", icon: null, owner: true },
      category: "1",
      date: "22/06 as 20:40",
      description: "É hoje que vamos chegar ao challenger sem perder uma partida da md10",
    },
  ];

  const handleAppointmentDetails = useCallback(() => {
    navigation.navigate("AppointmentDetails");
  }, [navigation]);
  const handleAppointmentCreate = useCallback(() => {
    navigation.navigate("AppointmentCreate");
  }, [navigation]);

  const handleCategorySelect = useCallback(
    (categoryId: string) => {
      categoryId === category ? setCategory("") : setCategory(categoryId);
    },
    [category]
  );
  return (
    <Background>
      <View style={styles.header}>
        <Profile />
        <ButtonAdd onPress={handleAppointmentCreate} />
      </View>
      <CategorySelect categorySelected={category} setCategory={handleCategorySelect} />
      <View style={styles.content}>
        <ListHeader title="Partidas agendadas" subtitle="Total 6" />
        <FlatList
          data={appointments}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <Appointment data={item} onPress={handleAppointmentDetails} />}
          ItemSeparatorComponent={() => <ListDivider />}
          style={styles.matches}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </Background>
  );
}
