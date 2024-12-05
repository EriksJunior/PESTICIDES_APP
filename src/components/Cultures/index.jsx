import { useEffect, useState } from "react";
import { View, FlatList, Text } from "react-native";

import { Skeleton } from "./components/Skeleton";

import { FindCultureDetails } from "../../services/CultureService";
import { Details } from "./components/Details";

export function Cultures({ pesticideId }) {
  const [isLoading, setIsLoading] = useState(false);
  const [cultures, setCultures] = useState([]);

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
            data={cultures}
            keyExtractor={(cultures) => cultures.id}
            renderItem={({ item: { cultura }, key }) => (
              <Details culture={cultura} key={key} />
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
      )}
    </View>
  );
}
