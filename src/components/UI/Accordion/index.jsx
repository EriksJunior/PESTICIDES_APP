import { useState } from "react";
import { AccordionItem } from "./AccordionItem";
import { View } from "react-native";

export function Accordion({ items = [], onPress }) {
  const [activeIndex, setActiveIndex] = useState(-1);

  return (
    <>
      {items.length ?
        items.map((item, idx) => (
          <AccordionItem
            key={`acItem-${idx}`}
            item={item}
            isOpen={activeIndex === idx}
            onPress={onPress}
          />
        ))
        :
        <View></View>
      }
    </>
  );
}
