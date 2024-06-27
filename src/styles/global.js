import { createGlobalStyle } from "styled-components";


export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: "Roboto Slab", serif;
        -webkit-font-smoothing: antialiased;
        overflow: hidden;
        
    };

    body{
        background-color: ${({ theme }) => theme.COLORS.BACKGROUND_COLOR};
        color: ${({ theme }) => theme.COLORS.WHITE};
    };

    a{
        text-decoration: none;
    };

    button, a{
        cursor: pointer;
        transition: filter 0.2s;
    };

    button:hover, a:hover{
        filter: brightness(0.9);        
    };   
`;