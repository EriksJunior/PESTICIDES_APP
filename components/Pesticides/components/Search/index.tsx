import { Text } from "react-native";
import { Container, Header, CustomInput } from "./styles";

export function Search() {
  return (
    <Container>
      <Header>
        <CustomInput>
          <Text style={{ color: 'white' }}>
            Search Pesticide
          </Text>
        </CustomInput>
      </Header>
    </Container>
  )
}