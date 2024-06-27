//Importações
import {Container} from "./styles";
import { Header } from "../../components/Header"
import { ButtonText} from "../../components/ButtonText"
import { GoArrowLeft } from "react-icons/go";

//Função Principal
export function Details(){
    return (
        <Container>
          <Header/>

          
          <ButtonText>
            <GoArrowLeft/>
            Voltar
          </ButtonText>
          
        </Container>   
      );
    };