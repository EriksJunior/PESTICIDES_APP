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
  ScrollView,
  FlatList,
} from "react-native";

import * as D from "./styles";

import { Theme } from "../../../../styles/theme";
import { Card } from "../../../UI/Card";

export function Details() {
  return (
    <>
      <D.Header>
        <D.GoBack
          activeOpacity={0.6}
          onPress={() => router.navigate("/(search)")}
        >
          <SimpleLineIcons name="arrow-left" size={15} color="white" />
        </D.GoBack>

        <D.Title>Detalhes</D.Title>
      </D.Header>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingTop: 18,
          paddingBottom: 50,
          paddingHorizontal: 20,
        }}
      >
        <Card>
          <D.ProviderImage></D.ProviderImage>

          <D.PerticideDetails>
            <D.RegisterNumber>Nº 15533</D.RegisterNumber>

            <View style={{ gap: 5 }}>
              <D.Title>Roundup WG</D.Title>
              <D.ProviderName numberOfLines={2}>Fabricante teste bla bla</D.ProviderName>
            </View>
          </D.PerticideDetails>
        </Card>

        <D.LastReview>Revizado em 06/11/2024</D.LastReview>

        <D.Content>
          <D.Title>Downloads disponíveis</D.Title>
          <D.Subtitle>Realize downloads de BULA, FISQP e FET.</D.Subtitle>
        </D.Content>

        <D.ContentDownloads>
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
        </D.ContentDownloads>

        <D.Content>
          <D.Title>Indicações de Uso</D.Title>
        </D.Content>

        <View style={{ flexDirection: "row", gap: 15 }}>
          <Card
            paddingHorizontal={15}
            paddingVertical={10}
            gap={10}
            flexDirection="column"
            height={"auto"}
          >
            <View
              style={{
                width: "100%",
                justifyContent: "space-between",
                flexDirection: "row",
                alignItems: "flex-start",
              }}
            >
              <D.Title>Feijão</D.Title>

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
                <D.Subtitle $color={Theme.dark.primaryText}>Grãos</D.Subtitle>
              </View>
            </View>

            <TouchableOpacity
              activeOpacity={0.6}
              style={{
                flex: 1,
                backgroundColor: Theme.dark.primary,
                padding: 10,
                borderRadius: 10,
                gap: 10,
                elevation: 10,
              }}
            >
              <D.DiagnosticName
                numberOfLines={1}
              >
                Oryza sativa (Arroz vermelho) (Arroz vermelho) asd afd dsfsdfsdf
                sdfsd
              </D.DiagnosticName>

              <View
                style={{
                  flexDirection: "row",
                  gap: 15,
                  flex: 1,
                  flexShrink: 1,
                }}
              >
                <View style={{ gap: 5 }}>
                  <View
                    style={{
                      flexDirection: "row",
                      gap: 5,
                      alignItems: "center",
                    }}
                  >
                    <D.Subtitle $color={Theme.dark.primaryText}>
                      Dose:
                    </D.Subtitle>

                    <D.Subtitle style={{ marginTop: 1.3 }}>
                      2 á 3 L p.c/ha
                    </D.Subtitle>
                  </View>

                  <View
                    style={{
                      flexDirection: "row",
                      gap: 5,
                      alignItems: "center",
                    }}
                  >
                    <D.Subtitle $color={Theme.dark.primaryText}>
                      Calda Terrestre:
                    </D.Subtitle>

                    <D.Subtitle style={{ marginTop: 1.3 }}>
                      120 L de calda/ha
                    </D.Subtitle>
                  </View>

                  <View
                    style={{
                      flexDirection: "row",
                      gap: 5,
                      alignItems: "center",
                    }}
                  >
                    <D.Subtitle $color={Theme.dark.primaryText}>
                      Calda Aérea:
                    </D.Subtitle>

                    <D.Subtitle style={{ marginTop: 1.3 }}>
                      20 á 40 L calda/ha (aéreo)
                    </D.Subtitle>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          </Card>
        </View>

        {/* <FlatList
          data={pesticides}
          keyExtractor={(pesticide) => pesticide.value}
          renderItem={({ item }) => <PerticideCard pesticide={item} />}r
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
