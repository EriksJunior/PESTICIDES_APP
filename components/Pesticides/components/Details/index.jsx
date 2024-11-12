import { router } from "expo-router";
import { SimpleLineIcons, FontAwesome, FontAwesome5 } from "@expo/vector-icons";
import { View, TouchableOpacity, Text } from "react-native";

import { s } from "./styles";
import { Theme } from "../../../../styles/theme";

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

      <View style={s.perticideCard}>
        <View style={s.providerImage}></View>

        <View style={s.perticideDetails}>
          <Text style={s.registerNumber}>Nº 15533</Text>

          <View style={{ gap: 5 }}>
            <Text style={s.title}>Roundup WG</Text>
            <Text style={s.providerName}>Fabricante teste bla bla</Text>
          </View>
        </View>
      </View>

      <Text style={s.lastReview}>Revizado em 06/11/2024</Text>

      <View style={s.content}>
        <Text style={s.title}>Downloads disponíveis</Text>
        <Text style={s.subTitle}>
          Realize downloads de BULA, FISQP e FET.
        </Text>
      </View>

      <View style={s.contentDownloads}>
        <View style={s.downloadItem}>
          <FontAwesome5
            name="file-pdf"
            size={40}
            color={Theme.dark.primaryText}
          />
        </View>

        <View style={s.downloadItem}>
          <FontAwesome
            name="warning"
            size={40}
            color={Theme.dark.primaryText}
          />
        </View>

        <View style={s.downloadItem}>
        <FontAwesome5
            name="truck"
            size={40}
            color={Theme.dark.primaryText}
          />
        </View>
      </View>

      <View style={s.content}>
        <Text style={s.title}>Culturas</Text>
      </View>
    </>
  );
}
