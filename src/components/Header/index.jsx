import {  } from 'react-icons/ri'
import { Container, Profile, Logo, Search, Logout } from "./styles";
import { Children } from 'react';


export function Header(){
    return(
        <Container>

            <Logo>
                <a href="/">
                    <h1>RocketMovies</h1>
                </a>
            </Logo>

            <Search>
                <input placeholder='Pesquisar pelo título'></input>
            </Search>
            
            <Profile>
                <div>
                  <span>Isaque Rodrigues</span>
                  <Logout>sair</Logout>
                </div>

                <img 
                src="https://github.com/shellookk.png" 
                alt="foto do usuário" 
                />
            </Profile>

        </Container>
    );
};
