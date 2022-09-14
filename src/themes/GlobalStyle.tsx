import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *,*::after,*::before{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html{
    font-size: 62.5%;
  }

  body{
    position: relative;
    font-size: 1.6rem;
    font-family: 'Montserrat', sans-serif;
    background-color: ${({ theme }) => theme.whitePrimary};
    color: ${({ theme }) => theme.secondary};
    font-weight: 400;
    padding-top: 80px;
    min-height: 2000px;
  }

  h1, h2, h3, h4, h5{
    color: ${({ theme }) => theme.secondary};
    margin: 0;
    padding: 0;
    font-weight: 500;
  }

  h1{
    font-size: 2.6rem;

    @media (min-width: 768px){
      font-size: 2.8rem;
    }
  }

  h2{
    font-size: 2.2rem;

    @media (min-width: 768px){
      font-size: 2.4rem;
    }
  }

  h3{
    font-size: 2rem;

    @media (min-width: 768px){
      font-size: 2.2rem;
    }
  }

  p{
    margin-bottom: 16px;

    &:last-child{
      margin-bottom: none;
    }
  }

  a{
    color: ${({ theme }) => theme.secondary};
    text-decoration: none;
  }

  input,
  label,
  select,
  button,
  textarea{
    margin:0;
    border:0;
    padding:0;
    display:inline-block;
    vertical-align:middle;
    white-space:normal;
    background:none;
    line-height:1;
    font-size: 1.6rem;
    font-family: 'Montserrat', sans-serif;

    &:focus,
    &:active,
    &:hover{
      outline: 0;
    }
  }
`;

export default GlobalStyle;
