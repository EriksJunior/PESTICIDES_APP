import { useState } from "react";

import { Entypo, SimpleLineIcons } from "@expo/vector-icons";
import { View, ActivityIndicator, FlatList } from "react-native";

import { Card } from "../../../UI/Card";
import { Problems } from "../Problems";

import * as C from "./styles";
import { Theme } from "../../../../styles/theme";
import { Title, Subtitle } from "../../../../styles/global";
import { FindProblemsByCultureId } from "../../../../services/ProblemsService";

export function Details({ pesticideId, culture, isOpen = false, onPress }) {
  const [isLoading, setIsLoading] = useState(false);
  const [problems, setProblems] = useState([]);

  const findProblems = async () => {
    setIsLoading(true);

    const result = await FindProblemsByCultureId(culture.id, pesticideId);
    setProblems(result);

    setIsLoading(false);
  };

  return (
    <Card
      paddingHorizontal={15}
      paddingVertical={10}
      gap={10}
      flexDirection="column"
      height={"auto"}
      minHeight={50}
      isTouchable
      onPress={() => {
        onPress(), findProblems();
      }}
    >
      <C.Header>
        <Title
          $color={"rgb(149 149 149)"}
          style={{ flex: 1 }}
          numberOfLines={1}
        >
          {culture?.nome}
        </Title>

        <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
          <C.Leaf>
            <Entypo name="leaf" size={16} color={Theme.dark.primaryText} />

            <Subtitle $color={Theme.dark.primaryText}>Grãos</Subtitle>
          </C.Leaf>

          <View style={{ width: 15 }}>
            {isLoading ? (
              <ActivityIndicator size="small" color={Theme.dark.primaryText} />
            ) : !isOpen ? (
              <SimpleLineIcons name="arrow-right" size={15} color="gray" />
            ) : (
              <SimpleLineIcons name="arrow-down" size={15} color="gray" />
            )}
          </View>
        </View>
      </C.Header>

      {isOpen && !isLoading ? (
        <>
          <FlatList
            // onEndReached={loadingMorePesticides}
            onEndReachedThreshold={1.5}
            scrollEventThrottle={16}
            // onViewableItemsChanged={onViewableItemsChanged}
            initialNumToRender={15}
            maxToRenderPerBatch={8}
            windowSize={15}
            showsVerticalScrollIndicator={false}
            removeClippedSubviews={true}
            scrollEnabled={false}
            data={problems}
            keyExtractor={(problem) => problem.id}
            renderItem={({ item, key }) => (
              <Problems
                problem={item}
                key={key}
                pesticideId={pesticideId}
                cultureId={culture.id}
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
            // ListFooterComponent={
            //   <ActivityIndicator
            //     size="large"
            //     color={Theme.dark.lightGreen}
            //     style={{ marginVertical: 20 }}
            //   />
            // }
          />
        </>
      ) : (
        <></>
      )}
    </Card>
  );
}
