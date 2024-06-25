//Importações
import {Container} from "./styles";
import { Header } from "../../components/Header";
import { Tag } from "../../components/Tag"
import { Section } from "../../components/Section"
//Função Principal
export function MoviePreview(){
    return (
        <Container>
          <Header/>

          <Section>
            <Tag title="Ficção Científica"/>          
          </Section>

          
        </Container>   
      )
    };