import { useState, useEffect } from "react";
import { View, ScrollView } from "react-native";
import { router } from "expo-router";
import { SimpleLineIcons, FontAwesome, FontAwesome5 } from "@expo/vector-icons";

import { Card } from "../../../UI/Card";
import { Cultures } from "../../../Cultures";

import * as D from "./styles";
import { Title, Subtitle, Header, ActionItem } from "../../../../styles/global";
import { Theme } from "../../../../styles/theme";
import { TextType } from "../../../../styles/types";

import { FindPerticideDetails } from "../../../../services/PesticideService";

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
      <Header>
        <ActionItem activeOpacity={0.6} onPress={() => router.back()}>
          <SimpleLineIcons name="arrow-left" size={15} color="white" />
        </ActionItem>

        <Title>Detalhes</Title>
      </Header>

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
                <Title $fontSize={TextType.medium} $color={"#62ff5a5a"}>
                  {details?.nome_comum}
                </Title>
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
            <Title $color={"#62ff5a5a"}>Downloads disponíveis</Title>
            <Subtitle>Realize downloads de BULA, FISQP e FET.</Subtitle>

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
            <Title $color={"#62ff5a5a"}>Composição</Title>

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
                  <Subtitle>Ingrediente Ativo</Subtitle>

                  <View style={{ gap: 3, marginTop: 5 }}>
                    <Title $fontSize={12}>
                      {details?.ingredientesAtivo?.nome_comum}
                    </Title>
                  </View>
                </View>

                <View
                  style={{
                    flexDirection: "column",
                    flexShrink: 1,
                  }}
                >
                  <Subtitle>Concentração</Subtitle>

                  <View style={{ gap: 3, marginTop: 5 }}>
                    <Title $fontSize={12}>
                      {handleConcentration(
                        details?.concentracao_ia,
                        details?.unidade_medida
                      )}
                    </Title>
                  </View>
                </View>
              </Card>
            </View>
          </D.Content>

          <D.Content>
            <Title $color={"#62ff5a5a"}>Classificação</Title>

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
                    <Subtitle>Grupos químicos</Subtitle>

                    <View style={{ gap: 3, marginTop: 5 }}>
                      <Title $fontSize={12}>
                        {details?.ingredientesAtivo?.gruposQuimico?.nome ||
                          "*N/A"}
                      </Title>
                    </View>
                  </View>

                  <View style={{ width: "50%" }}>
                    <Subtitle>Formulação</Subtitle>

                    <View style={{ gap: 3, marginTop: 5 }}>
                      <Title $fontSize={12}>
                        {details?.formulacoe?.nome || "*N/A"}
                      </Title>
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
                    <Subtitle>Classe Agronômica</Subtitle>

                    <View style={{ gap: 3, marginTop: 5 }}>
                      <Title $fontSize={12}>Herbicida</Title>
                    </View>
                  </View>

                  <View style={{ width: "50%" }}>
                    <Subtitle>Modo de ação</Subtitle>

                    <View style={{ gap: 3, marginTop: 5 }}>
                      <Title $fontSize={12}>
                        {details?.ph_ideal || "*N/A"}
                      </Title>
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
                    <Subtitle>Toxicológica</Subtitle>

                    <View style={{ gap: 3, marginTop: 5 }}>
                      <Title $fontSize={12}>
                        {details?.classesToxicologica?.nome || "*N/A"}
                      </Title>
                    </View>
                  </View>

                  <View style={{ width: "50%" }}>
                    <Subtitle>Ambiental</Subtitle>

                    <View style={{ gap: 3, marginTop: 5 }}>
                      <Title $fontSize={12}>
                        {details?.classesAmbientais?.nome || "*N/A"}
                      </Title>
                    </View>
                  </View>
                </View>
              </Card>
            </View>
          </D.Content>

          <D.Content>
            <Title $color={"#62ff5a5a"}>Indicações de Uso</Title>

            <Cultures pesticideId={pesticideId} />
          </D.Content>
        </D.Container>
      </ScrollView>
    </>
  );
}
