import { useEffect, useState } from "react";
import { View, FlatList } from "react-native";

import { Details } from "./components/Details";
import { Skeleton } from "./components/Skeleton";

import { FindCultureDetails } from "../../services/CultureService";


export function Cultures({ pesticideId }) {
  const [isLoading, setIsLoading] = useState(false);
  const [cultures, setCultures] = useState([]);
  const [activeIdx, setActiveIdx] = useState(-1);

  const findCultureDetails = async () => {
    try {
      setIsLoading(true);

      const cultureDetails = await FindCultureDetails(pesticideId);
      setCultures(cultureDetails);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    findCultureDetails();
  }, [pesticideId]);

  return (
    <View style={{ flexDirection: "row", gap: 15 }}>
      {isLoading ? (
        <View style={{ flex: 1 }}>
          <Skeleton style={{ marginVertical: 20 }} />
        </View>
      ) : (
        <View style={{ flex: 1, height: "100%", width: "100%" }}>
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
            data={cultures}
            keyExtractor={(cultures) => cultures.id}
            renderItem={({ item: { cultura }, index }) => (
              <Details
                pesticideId={pesticideId}
                culture={cultura}
                key={cultura.id}
                onPress={() => setActiveIdx(activeIdx === index ? -1 : index)}
                isOpen={activeIdx === index}
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
          />
        </View>
      )}
    </View>
  );
}
