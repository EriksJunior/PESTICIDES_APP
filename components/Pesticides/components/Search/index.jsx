import { InputCustom } from "@/components/UI/Inputs/InputText";

import { Container, Header, PesticidesList } from "./styles";
import { PerticideCard } from "../Card";
import { View, Text, ScrollView } from "react-native";

export function Search() {
  const pesticides = [
    { text: "Roundup", value: "1" },
    { text: "Game", value: "2" },
    { text: "Roundup WG", value: "3" },
    { text: "Roundup Ultra", value: "4" },
    { text: "Mega BR", value: "5" },
    { text: "Gaxtoxin", value: "6" },
    { text: "Gaxtoxin", value: "7" },
    { text: "Gaxtoxin", value: "8" },
    { text: "Gaxtoxin", value: "9" },
    { text: "Gaxtoxin", value: "10" },
    { text: "Gaxtoxin", value: "11" },
    { text: "Gaxtoxin", value: "12" },
    { text: "Gaxtoxin", value: "13" },
    { text: "Gaxtoxin", value: "14" },
    { text: "Gaxtoxin", value: "15" },
    { text: "Gaxtoxin", value: "16" },
    { text: "Gaxtoxin", value: "17" },
    { text: "Gaxtoxin", value: "18" },
    { text: "Gaxtoxin", value: "19" },
    { text: "Gaxtoxin", value: "20" },
    { text: "Gaxtoxin", value: "21" },
    { text: "Gaxtoxin", value: "22" },
    { text: "Gaxtoxin", value: "23" },
    { text: "Gaxtoxin", value: "24" },
    { text: "Gaxtoxin", value: "25" },
    { text: "Gaxtoxin", value: "26" },
    { text: "Gaxtoxin", value: "27" },
    { text: "Gaxtoxin", value: "28" },
    { text: "Gaxtoxin", value: "29" },
    { text: "Gaxtoxin", value: "30" },
    { text: "Gaxtoxin", value: "31" },
    { text: "Gaxtoxin", value: "32" },
    { text: "Gaxtoxin", value: "33" },
  ];
  return (
    <Container>
      <Header>
        <InputCustom showSearch />
      </Header>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: 12,
          paddingTop: 28,
          paddingBottom: 50,
        }}
      >
        <View style={{ paddingBottom: 16, paddingLeft: 8 }}>
          <Text style={{ color: "gray", fontWeight: 500, fontSize: 16 }}>
            Agrotoxicos
          </Text>
        </View>

        <PesticidesList
          data={pesticides}
          keyExtractor={(pesticide) => pesticide.value}
          renderItem={({ item, index }) => (
            <PerticideCard
              pesticide={item}
              idx={index}
              lastIdx={pesticides.length - 1}
            />
          )}
          ItemSeparatorComponent={() => (
            <View
              style={{
                flex: 1,
                height: 5,
              }}
            ></View>
          )}
          scrollEnabled={false}
          showsVerticalScrollIndicator={false}
        />
      </ScrollView>
    </Container>
  );
}
