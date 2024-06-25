//Importações
import {Container, Add, Content} from "./styles";
import { Header } from "../../components/Header"
import { Section } from "../../components/Section";
import { AiOutlinePlus } from "react-icons/ai";

//Função Principal
export function Home(){
    return (
        <Container>
          <Header/>
          
          <Content>
            
            <Section title="Meus filmes">

              <ul>
              <li></li>
              <li></li>
              <li></li>
              </ul>
              

            </Section>

            <Add>
              <AiOutlinePlus />
              <span>Adicionar Filme</span>
            </Add>

          </Content>
        </Container>   
      );
    };