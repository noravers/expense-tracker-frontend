import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        list-style: none;
        scroll-behavior: smooth;
    }

    :root{
        --primary-color: #222260;
        --primary-color2: 'color: rgba(34, 34, 96, .6)';
        --primary-color3: 'color: rgba(34, 34, 96, .4)'; 
        --color-green: #42AD00;
        --color-grey: #aaa;
        --color-accent: #F56692; 
        --color-delete: #FF0000;
    }

    body{
        font-family: 'Nunito', sans-serif;
        font-size: clamp(1rem, 1.5vw, 1.2rem)
        overflow: hidden;
        color: rgba(34, 34, 96, .6);
        
    }

    h1, h2, h3, h4, h5, h6 {
        color: var(--primary-color)
    }
    ::-webkit-scrollbar {
    width: .6rem;
    border-radius: .5rem;
    background-color: #f2f2f2;
    }

    ::-webkit-scrollbar-thumb {
        background-color: #ccc;
        border-radius: .5rem;
    }

    ::-webkit-scrollbar-thumb:hover {
        background-color: #bbb;
    }


`
