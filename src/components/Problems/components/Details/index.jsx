import { useContext, useEffect, useState } from "react";
import { View } from "react-native";
import { SimpleLineIcons } from "@expo/vector-icons";

import { GlobalContext } from "../../../../context";

import { FindProblemsDetails } from "../../../../services/ProblemsService";

import * as D from "./styles";
import { Subtitle, Title } from "../../../../styles/global";
import { Theme } from "../../../../styles/theme";
import { TextType } from "../../../../styles/types";

export function ProblemsDetails({ id, cultureId, pesticideId }) {
  const [details, setDetails] = useState(null);
  const { culture } = useContext(GlobalContext);

  const findProblemsDetails = async () => {
    const problemsDetails = await FindProblemsDetails(
      cultureId,
      pesticideId,
      id
    );

    setDetails(problemsDetails);
  };

  useEffect(() => {
    findProblemsDetails();
  }, [id]);

  return (
    <D.Container>
      <D.Img
        source={{
          uri: "https://www.agrolink.com.br/upload/problemas/Euphorbia_heterophylla95.jpg",
        }}
        imageStyle={{
          borderRadius: 25,
        }}
      >
        <D.HeaderImage>
          <D.ActionItem
            activeOpacity={0.6}
            onPress={() => console.log("voltar")}
          >
            <SimpleLineIcons name="arrow-left-circle" size={20} color="white" />
          </D.ActionItem>

          <D.ActionItem
            activeOpacity={0.6}
            style={{
              backgroundColor: "#00000092",
              width: 40,
              height: 40,
              borderRadius: 50,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <SimpleLineIcons name="star" size={18} color="white" />
          </D.ActionItem>
        </D.HeaderImage>

        <D.FooterImage>
          <D.ContentFooterImage>
            <Title $color="white" $fontSize={TextType.medium}>
              {details?.nome_cientifico} ({details?.nome_comum})
            </Title>

            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <Subtitle $color={"gray"} $fontSize={TextType.medium}>
                {details?.nome_agrotoxico}
              </Subtitle>
              <Subtitle $color={"gray"} $fontSize={TextType.medium}>
                {details?.nome_cultura}
              </Subtitle>
            </View>
          </D.ContentFooterImage>
        </D.FooterImage>
      </D.Img>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: 10,
        }}
      >
        <Title $color={"#62ff5a5a"}>Detalhes</Title>
      </View>

      <D.InfoContainer>
        <View style={{ gap: 20 }}>
          <View style={{ flexDirection: "row" }}>
            <View style={{ width: "60%" }}>
              <Title
                $color={Theme.dark.primaryText}
                $fontSize={TextType.medium}
              >
                Dose
              </Title>
              <Subtitle $fontSize={TextType.medium}>
                {details?.dose_minima} á {details?.dose_maxima}{" "}
                {details?.unidade_dose}
              </Subtitle>
            </View>

            <View style={{ flexShrink: 1 }}>
              <Title
                $color={Theme.dark.primaryText}
                $fontSize={TextType.medium}
              >
                Int. Segurança
              </Title>
              <Subtitle $fontSize={TextType.medium}>
                {culture?.intervalo_seguranca}
              </Subtitle>
            </View>
          </View>

          <View style={{ flexDirection: "row" }}>
            <View style={{ width: "60%" }}>
              <Title
                $color={Theme.dark.primaryText}
                $fontSize={TextType.medium}
              >
                Calda Aérea
              </Title>
              <Subtitle $fontSize={TextType.medium}>120 L de calda/ha</Subtitle>
            </View>

            <View style={{ flexShrink: 1 }}>
              <Title
                $color={Theme.dark.primaryText}
                $fontSize={TextType.medium}
              >
                Calda Terrestre
              </Title>
              <Subtitle $fontSize={TextType.medium}>
                {details?.dose_minima_volume_calda} á{" "}
                {details?.dose_maxima_volume_calda}{" "}
                {details?.unidade_volume_calda}
              </Subtitle>
            </View>
          </View>

          <View>
            <Title $color={Theme.dark.primaryText} $fontSize={TextType.medium}>
              Intervalo de aplicação
            </Title>
            <Subtitle $fontSize={TextType.medium}>
              Realizar no máximo 2 aplicações em um intervalo de 14 dias, de
              acordo com o monitoramento da praga.
            </Subtitle>
          </View>

          <View>
            <Title $color={Theme.dark.primaryText} $fontSize={TextType.medium}>
              Época de aplicação
            </Title>
            <Subtitle $fontSize={TextType.medium}>
              {culture?.descricao_aplicacao}
            </Subtitle>
          </View>
        </View>
      </D.InfoContainer>
    </D.Container>
  );
}
