import { TouchableOpacity, Text, TextInput } from "react-native";
import { Content } from "./styles";
import AntDesign from "@expo/vector-icons/AntDesign";

export function InputCustom({ showSearch = false }) {
  return (
    <Content>
      <TextInput style={{flex: 1, fontSize: 16, color: '#989898'}} placeholderTextColor={'#6a6262'} placeholder="Pesquise por nome ou código"/>

      {showSearch &&
        <TouchableOpacity style={{ backgroundColor: '#164a13', borderRadius: 5, height: 35, width: 35, justifyContent: 'center', alignItems: 'center' }}>
          <Text>
            <AntDesign name="search1" size={24} color="white" />
          </Text>
        </TouchableOpacity>
      }
    </Content>
  )
}