import { InputCustom } from "../../../UI/Inputs/InputText";
import { PesticideCard } from "../Card";
import { Skeleton } from "./components/Skeleton";

import { useState, useEffect, useRef } from "react";
import { View, Text, FlatList } from "react-native";
import { ActivityIndicator } from "react-native";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

import { SearchPerticide } from "../../../../services/PesticideService";

import { Container, Header } from "./styles";
import { Theme } from "../../../../styles/theme";
import { UseDebounce } from "../../../../utils/debounce";

export function Search() {
  const [textToScroll, setTextToScroll] = useState("");
  const [pesticides, setPesticides] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingToScroll, setIsLoadingToScroll] = useState(false);
  const [viewableItems, setViewableItems] = useState([]);
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
    if (isLoadingToScroll) return;

    setIsLoadingToScroll(true);

    const newPage = page + 1;
    const result = await SearchPerticide(textToScroll || "", newPage);

    setPesticides((state) => [...state, ...result]);
    setIsLoadingToScroll(false);

    setPage(newPage);
  };

  const handleChange = (item) => {
    debouncedChanged(item);
  };

  const onViewableItemsChanged = useRef(({ viewableItems }) => {
    setViewableItems(viewableItems.map((item) => item.key));
  }).current;

  const renderItem = ({ item, key }) => {
    if (!viewableItems.includes(item?.id)) {
      return <Skeleton style={{ marginVertical: 20 }} key={key} />;
    }

    return <PesticideCard pesticide={item} />;
  };

  useEffect(() => {
    findPerticide();

    return () => {
      setPesticides([]);
      setPage(1);
    };
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

      <FlatList
        onEndReached={loadingMorePesticides}
        onEndReachedThreshold={1.5}
        scrollEventThrottle={16}
        onViewableItemsChanged={onViewableItemsChanged}
        initialNumToRender={15}
        maxToRenderPerBatch={8}
        windowSize={15}
        showsVerticalScrollIndicator={false}
        removeClippedSubviews={true}
        contentContainerStyle={{
          paddingHorizontal: 16,
          paddingTop: 28,
          paddingBottom: 20,
        }}
        ListHeaderComponent={
          <View style={{ paddingBottom: 16 }}>
            <Text style={{ color: "gray", fontWeight: 500, fontSize: 16 }}>
              Agrotoxicos
            </Text>
          </View>
        }
        data={pesticides}
        keyExtractor={(pesticide) => pesticide.id}
        renderItem={renderItem}
        ItemSeparatorComponent={() => (
          <View
            style={{
              flex: 1,
              height: 5,
            }}
          ></View>
        )}
        // ListFooterComponent={
        //   <ActivityIndicator
        //     size="large"
        //     color={Theme.dark.lightGreen}
        //     style={{ marginVertical: 20 }}
        //   />
        // }
      />
    </Container>
  );
}
