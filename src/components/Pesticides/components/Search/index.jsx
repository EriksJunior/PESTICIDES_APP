import { InputCustom } from "../../../UI/Inputs/InputText";
import { PerticideCard } from "../Card";

import { useState, useEffect } from "react";
import { View, Text, ScrollView, FlatList } from "react-native";
import { ActivityIndicator } from "react-native";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

import { SearchPerticide } from "../../../../services/pesticide";

import { Container, Header } from "./styles";
import { Theme } from "../../../../styles/theme";
import { UseDebounce } from "../../../../utils/debounce";

export function Search() {
  const [textToScroll, setTextToScroll] = useState("");
  const [pesticides, setPesticides] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingToScroll, setIsLoadingToScroll] = useState(false);
  const [page, setPage] = useState(1);

  const findPerticide = async (text) => {
    try {
      if (isLoading) return;
      setIsLoading(true);
      setTextToScroll(text);

      const result = await SearchPerticide(text || "", 1);
      setPesticides(result);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const debouncedChanged = UseDebounce(findPerticide);

  const loadingMorePesticides = async () => {
    try {
      if (isLoading) return;
      setIsLoadingToScroll(true);

      const newPage = page + 1;
      const result = await SearchPerticide(textToScroll || "", newPage);
      setPesticides((state) => [...state, ...result]);

      setPage(newPage);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoadingToScroll(false);
    }
  };

  const handleScroll = ({ nativeEvent }) => {
    const { contentOffset, contentSize, layoutMeasurement } = nativeEvent;

    const isNearBottom =
      contentOffset.y + layoutMeasurement.height >= contentSize.height - 50;

    if (isNearBottom && !isLoadingToScroll) {
      loadingMorePesticides();
    }
  };

  const handleChange = (item) => {
    debouncedChanged(item);
  };

  useEffect(() => {
    findPerticide();
  }, []);

  return (
    <Container>
      <Header>
        <InputCustom
          handleChange={handleChange}
          rightIcon={
            isLoading ? (
              <ActivityIndicator size="large" color={Theme.dark.lightGreen} />
            ) : (
              <MaterialCommunityIcons
                name={"leaf"}
                color={Theme.dark.lightGreen}
                size={24}
              />
            )
          }
        />
      </Header>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: 16,
          paddingTop: 28,
          paddingBottom: 100,
        }}
        onScroll={handleScroll}
        scrollEventThrottle={16}
      >
        <View style={{ paddingBottom: 16 }}>
          <Text style={{ color: "gray", fontWeight: 500, fontSize: 16 }}>
            Agrotoxicos
          </Text>
        </View>

        <FlatList
          data={pesticides}
          keyExtractor={(pesticide) => pesticide.id}
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
          removeClippedSubviews={true}
        />

        {isLoadingToScroll && (
          <ActivityIndicator
            size="large"
            color={Theme.dark.lightGreen}
            style={{ marginVertical: 20 }}
          />
        )}
      </ScrollView>
    </Container>
  );
}
