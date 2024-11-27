import { useState, useEffect } from "react";
import { router } from "expo-router";
import {
  SimpleLineIcons,
  FontAwesome,
  FontAwesome5,
  Entypo,
} from "@expo/vector-icons";
import { View, TouchableOpacity, ScrollView, FlatList } from "react-native";

import * as D from "./styles";

import { Theme } from "../../../../styles/theme";
import { Card } from "../../../UI/Card";
import { FindPerticideDetails } from "../../../../services/pesticide";
import { TextType } from "../../../../styles/style";

export function Details({ pesticideId }) {
  const [details, setDetails] = useState({});

  const findPerticideDetails = async () => {
    const pesticeDetails = await FindPerticideDetails(pesticideId);
    setDetails(pesticeDetails);
  };

  const handleConcentration = (concentration, und) => {
    if (!concentration && !und) return "*N/A";

    return `${concentration} ${und}`;
  };

  useEffect(() => {
    findPerticideDetails();
  }, []);

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
        <View style={{ flex: 1 }}>
          <Card>
            <D.ProviderImage></D.ProviderImage>

            <D.PerticideDetails>
              <D.RegisterNumber>Nº {details.registro}</D.RegisterNumber>

              <View style={{ gap: 5 }}>
                <D.Title $fontSize={TextType.medium}>
                  {details?.nome_comum}
                </D.Title>
                <D.ProviderName numberOfLines={2}>
                  {details?.empresa?.razao_social}
                </D.ProviderName>
              </View>
            </D.PerticideDetails>
          </Card>
        </View>

        <D.LastReview>Revizado em 06/11/2024</D.LastReview>

        <D.Container>
          <D.Content $marginTop={30}>
            <D.Title>Downloads disponíveis</D.Title>
            <D.Subtitle>Realize downloads de BULA, FISQP e FET.</D.Subtitle>

            <D.ContentDownloads>
              <Card
                height={80}
                marginTop={0}
                justify={"center"}
                align={"center"}
              >
                <FontAwesome5
                  name="file-pdf"
                  size={40}
                  color={Theme.dark.primaryText}
                />
              </Card>

              <Card
                height={80}
                marginTop={0}
                justify={"center"}
                align={"center"}
              >
                <FontAwesome
                  name="warning"
                  size={40}
                  color={Theme.dark.primaryText}
                />
              </Card>

              <Card
                height={80}
                marginTop={0}
                justify={"center"}
                align={"center"}
              >
                <FontAwesome5
                  name="truck"
                  size={40}
                  color={Theme.dark.primaryText}
                />
              </Card>
            </D.ContentDownloads>
          </D.Content>

          <D.Content>
            <D.Title>Composição</D.Title>

            <View style={{ flex: 1 }}>
              <Card
                paddingHorizontal={15}
                paddingVertical={10}
                gap={10}
                height={"auto"}
              >
                <View
                  style={{
                    flexDirection: "column",
                    flex: 1,
                    width: "70%",
                  }}
                >
                  <D.Subtitle>Ingrediente Ativo</D.Subtitle>

                  <View style={{ gap: 3, marginTop: 5 }}>
                    <D.Title $fontSize={12}>
                      {details?.ingredientesAtivo?.nome_comum}
                    </D.Title>
                  </View>
                </View>

                <View
                  style={{
                    flexDirection: "column",
                    flexShrink: 1,
                  }}
                >
                  <D.Subtitle>Concentração</D.Subtitle>

                  <View style={{ gap: 3, marginTop: 5 }}>
                    <D.Title $fontSize={12}>
                      {handleConcentration(
                        details?.concentracao_ia,
                        details?.unidade_medida
                      )}
                    </D.Title>
                  </View>
                </View>
              </Card>
            </View>
          </D.Content>

          <D.Content>
            <D.Title>Classificação</D.Title>

            <View style={{ flex: 1 }}>
              <Card
                paddingHorizontal={15}
                paddingVertical={10}
                height={"auto"}
                justify="space-between"
                flexDirection="column"
                flexWrap
              >
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    flexWrap: "wrap",
                  }}
                >
                  <View style={{ width: "50%" }}>
                    <D.Subtitle>Grupos químicos</D.Subtitle>

                    <View style={{ gap: 3, marginTop: 5 }}>
                      <D.Title $fontSize={12}>
                        {details?.ingredientesAtivo?.gruposQuimico?.nome ||
                          "*N/A"}
                      </D.Title>
                    </View>
                  </View>

                  <View style={{ width: "50%" }}>
                    <D.Subtitle>Formulação</D.Subtitle>

                    <View style={{ gap: 3, marginTop: 5 }}>
                      <D.Title $fontSize={12}>
                        {details?.formulacoe?.nome || "*N/A"}
                      </D.Title>
                    </View>
                  </View>
                </View>

                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <View style={{ width: "50%" }}>
                    <D.Subtitle>Classe Agronômica</D.Subtitle>

                    <View style={{ gap: 3, marginTop: 5 }}>
                      <D.Title $fontSize={12}>Herbicida</D.Title>
                    </View>
                  </View>

                  <View style={{ width: "50%" }}>
                    <D.Subtitle>Modo de ação</D.Subtitle>

                    <View style={{ gap: 3, marginTop: 5 }}>
                      <D.Title $fontSize={12}>
                        {details?.ph_ideal || "*N/A"}
                      </D.Title>
                    </View>
                  </View>
                </View>

                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <View style={{ width: "50%" }}>
                    <D.Subtitle>Toxicológica</D.Subtitle>

                    <View style={{ gap: 3, marginTop: 5 }}>
                      <D.Title $fontSize={12}>
                        {details?.classesToxicologica?.nome || "*N/A"}
                      </D.Title>
                    </View>
                  </View>

                  <View style={{ width: "50%" }}>
                    <D.Subtitle>Ambiental</D.Subtitle>

                    <View style={{ gap: 3, marginTop: 5 }}>
                      <D.Title $fontSize={12}>
                        {details?.classesAmbientais?.nome || "*N/A"}
                      </D.Title>
                    </View>
                  </View>
                </View>
              </Card>
            </View>
          </D.Content>

          <D.Content>
            <D.Title>Indicações de Uso</D.Title>

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
                    alignItems: "center",
                  }}
                >
                  <D.Title $color={"rgb(149 149 149)"}>Feijão</D.Title>

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
                    <Entypo
                      name="leaf"
                      size={16}
                      color={Theme.dark.primaryText}
                    />
                    <D.Subtitle $color={Theme.dark.primaryText}>
                      Grãos
                    </D.Subtitle>
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
                  <D.DiagnosticName numberOfLines={1}>
                    Oryza sativa (Arroz vermelho) (Arroz vermelho) asd afd
                    dsfsdfsdf sdfsd
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
          </D.Content>
        </D.Container>

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
