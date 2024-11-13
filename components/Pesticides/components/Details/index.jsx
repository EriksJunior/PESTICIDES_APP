import { router } from "expo-router";
import {
  SimpleLineIcons,
  FontAwesome,
  FontAwesome5,
  Entypo,
} from "@expo/vector-icons";
import {
  View,
  TouchableOpacity,
  Text,
  ScrollView,
  FlatList,
} from "react-native";

import { s } from "./styles";
import { Theme } from "../../../../styles/theme";
import { Card } from "../../../UI/Card";

export function Details() {
  return (
    <>
      <View style={s.header}>
        <TouchableOpacity
          activeOpacity={0.6}
          onPress={() => router.navigate("/(search)")}
          style={s.goBack}
        >
          <SimpleLineIcons name="arrow-left" size={15} color="white" />
        </TouchableOpacity>

        <Text style={s.title}>Detalhes</Text>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingTop: 18,
          paddingBottom: 50,
          paddingHorizontal: 20,
        }}
      >
        <Card>
          <View style={s.providerImage}></View>

          <View style={s.perticideDetails}>
            <Text style={s.registerNumber}>Nº 15533</Text>

            <View style={{ gap: 5 }}>
              <Text style={s.title}>Roundup WG</Text>
              <Text style={s.providerName}>Fabricante teste bla bla</Text>
            </View>
          </View>
        </Card>

        <Text style={s.lastReview}>Revizado em 06/11/2024</Text>

        <View style={s.content}>
          <Text style={s.title}>Downloads disponíveis</Text>
          <Text style={s.subTitle}>
            Realize downloads de BULA, FISQP e FET.
          </Text>
        </View>

        <View style={s.contentDownloads}>
          <Card height={80} marginTop={0} justifyCenter alignCenter>
            <FontAwesome5
              name="file-pdf"
              size={40}
              color={Theme.dark.primaryText}
            />
          </Card>

          <Card height={80} marginTop={0} justifyCenter alignCenter>
            <FontAwesome
              name="warning"
              size={40}
              color={Theme.dark.primaryText}
            />
          </Card>

          <Card height={80} marginTop={0} justifyCenter alignCenter>
            <FontAwesome5
              name="truck"
              size={40}
              color={Theme.dark.primaryText}
            />
          </Card>
        </View>

        <View style={s.content}>
          <Text style={s.title}>Culturas</Text>
        </View>

        <View style={{ flexDirection: "row", gap: 15 }}>
          <Card paddingHorizontal={15} paddingVertical={10}>
            <View
              style={{
                width: "100%",
                justifyContent: "space-between",
                flexDirection: "row",
                alignItems: "flex-start",
              }}
            >
              <Text style={s.title}>Algodão</Text>

              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 5,
                  backgroundColor: "#62ff5a5a",
                  borderRadius: 50,
                  paddingVertical: 5,
                  paddingHorizontal: 10,
                }}
              >
                <Entypo name="leaf" size={16} color={Theme.dark.primaryText} />
                <Text style={[s.subTitle, { color: Theme.dark.primaryText }]}>
                  Folha
                </Text>
              </View>
            </View>
          </Card>
        </View>

        {/* <FlatList
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
        /> */}
      </ScrollView>
    </>
  );
}
