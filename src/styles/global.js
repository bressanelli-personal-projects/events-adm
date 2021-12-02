import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: sans-serif;
    text-decoration: none;
}

:root {
    --border-card-color: #A98743;
    --background-card-color: #F8AFA6;
    --drinkscard-background-color: #F6F1D1;
    --primary-nav-button-color: #F79489;
    --secondary-nav-button-color: #fff;
    --del-button-primary-color: #B95C50;
    --del-button-hover-color: #F6F1D1;
    --scrollbar-color: #B95C50;
    --scrollbar-background-color: #b30000;
    --text-color: #ffffff;
    --home-icon-hover-color: #F8AFA6;
    --homepage-drinkscard-back-color: #f6f1d1;
    --eventscard-background-color: #b6a6ca;
    --homecards-main-title-color: #0c0a3e;
}

body {  
    background-color: #8BC6EC;
    background-image: linear-gradient(90deg, #8BC6EC 0%, #9599E2 100%);

    position: relative;   
}

button {
    cursor: pointer;
}

@media only screen and (min-width: 400px) {}

@media only screen and (min-width: 800px) {}

`;

export default GlobalStyle;

