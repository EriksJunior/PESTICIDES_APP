import { InputCustom } from "@/components/UI/Inputs/InputText";

import { Container, Header } from "./styles";

export function Search() {
  return (
    <Container>
      <Header>
        <InputCustom showSearch/>
      </Header>
    </Container>
  )
}