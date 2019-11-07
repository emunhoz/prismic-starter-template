import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    --primary-color: rgb(246, 190, 0);
  }

  a {
    color: #b8860b;
    font-weight: 600;
  }

  ul {
    list-style: none;
    li {
      font-weight: 100;
      font-size: 24px;
    }
  }
  
  input {
    padding: 10px;
    border-radius: 5px;
    border: 1px solid #d2d2d2;
    width: 100%;
    font-size: 24px;
    font-weight: 200;
  }

  body {
    margin: 0;
    font-family: 'Montserrat', sans-serif;
    font-size: 14px;
    font-variant: tabular-nums;
    -webkit-font-feature-settings: "tnum";
    font-feature-settings: "tnum";
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    line-height: 1.9;
    font-weight: 400;
    color: #333;
    height: 100%;
  }
`
export default GlobalStyles
