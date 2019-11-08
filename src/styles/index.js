import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    --primary-color: #f6be00;
    --secondary-color: #00aa55;
  }

  ul {
    list-style: none;
    li {
      font-weight: 100;
      font-size: 24px;
    }
  }

  img {
    max-width: 708px;
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
    color: var(--text);
    height: 100%;
    &.light {
      --body-bg: rgb(30, 39, 47);
      --text: #333;
      --text-highlight: #01aeff;
      --background-post: #fff;
      --primary-color: #f6be00;
      --secondary-color: #00aa55; 
    }
    &.dark {
      --body-bg: rgb(30, 39, 47);
      --text: #9ed4ff;
      --text-highlight: #01aeff;
      --background-post: #26343e;
      --primary-color: #f6be00;
      --secondary-color: #00aa55;
      background: var(--body-bg);
    }
  }
`
export default GlobalStyles
