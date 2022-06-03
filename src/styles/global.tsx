import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

    :root {
        --green-color: hsl(136, 65%, 51%);
        --darkblue-color: hsl(233, 26%, 24%);
        --cyan-color: hsl(192, 70%, 51%);
        --bg-color: #FFF;
    }
    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
        
    }

    body {
        font-family: 'Public Sans', sans-serif;
    }

    
`
