import {  } from 'react-icons/ri'
import { Container, Profile } from "./styles";

export function Header(){
    return(
        <Container>


            
            <Profile>
               
                <div>
                    <h1>Isaque Rodrigues</h1>
                    <a href="">sair</a>
                </div>

                <img 
                src="https://github.com/shellookk.png" 
                alt="foto do usuário" 
                />
                
            </Profile>

        </Container>
    );
};
