import { Entypo, SimpleLineIcons } from "@expo/vector-icons";
import { View } from "react-native";

import { Card } from "../../../UI/Card";
import { Problems } from "../Problems";

import * as C from "./styles";
import { Theme } from "../../../../styles/theme";
import { Title, Subtitle } from "../../../../styles/global";

export function Details({ culture }) {
  return (
    <Card
      paddingHorizontal={15}
      paddingVertical={10}
      gap={10}
      flexDirection="column"
      height={"auto"}
      isTouchable
    >
      <C.Header>
        <Title $color={"rgb(149 149 149)"} style={{flex: 1}} numberOfLines={1} >{culture?.nome}</Title>

        <View style={{flexDirection: 'row', alignItems: 'center', gap: 10}}>
          <C.Leaf>
            <Entypo name="leaf" size={16} color={Theme.dark.primaryText} />
            <Subtitle $color={Theme.dark.primaryText}>Grãos</Subtitle>
          </C.Leaf>

          <View>
            <SimpleLineIcons name="arrow-right" size={15} color="gray" />
          </View>
        </View>
      </C.Header>

      {/* <FlatList
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
        data={culture.problemas}
        keyExtractor={(problem) => problem.id}
        renderItem={({ item, key }) => <Problems problem={item} key={key} />}
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
      /> */}
    </Card>
  );
}
