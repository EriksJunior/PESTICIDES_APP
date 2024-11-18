import { s } from "./styles";
import { InputCustom } from "../../../UI/Inputs/InputText";
import { PerticideCard } from "../Card";

import { View, Text, ScrollView, FlatList } from "react-native";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { Theme } from "../../../../styles/theme";
import { UseDebounce } from "../../../../utils/debounce";

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

  const findPerticide = (text) => {
    console.log(text);
  };

  const debouncedChanged = UseDebounce(findPerticide);

  const handleChange = (item) => {
    debouncedChanged(item);
  };

  return (
    <View style={s.container}>
      <View style={s.header}>
        <InputCustom
          handleChange={handleChange}
          rightIcon={
            <MaterialCommunityIcons
              name={"leaf"}
              color={Theme.dark.lightGreen}
              size={24}
            />
          }
        />
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: 16,
          paddingTop: 28,
          paddingBottom: 50,
        }}
      >
        <View style={{ paddingBottom: 16 }}>
          <Text style={{ color: "gray", fontWeight: 500, fontSize: 16 }}>
            Agrotoxicos
          </Text>
        </View>

        <FlatList
          data={pesticides}
          keyExtractor={(pesticide) => pesticide.value}
          renderItem={({ item }) => <PerticideCard pesticide={item} />}
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
    </View>
  );
}
