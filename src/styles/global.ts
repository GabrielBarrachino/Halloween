import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        text-decoration: none;
        list-style: none;
    }

    html{
        font-size: 62.5%;
    }

    body{
        background-color: ${props => props.theme['bgColor']};
        color: ${props => props.theme['whiteColorDois']};
        -webkit-font-smoothing: antialiased;
    }

    body, input, textarea, button, a{
        font: 400 1rem Jolly lodger, sans-serif;
        border: none;
    }
`