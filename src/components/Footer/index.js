import styled from 'styled-components';
import { FaLinkedinIn } from 'react-icons/fa';

// src/components/Footer/index.js
const FooterWrapper = styled.footer`
  background-color: #00000070;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px; 
  img {
    /* width: 58px; */
    height: 2rem;
    width:auto;
    margin: 0 1rem;
    /* margin-right: 23px; */
  }
  a {
    color: white;
    text-decoration: none;
    transition: .3s;
    &:hover,
    &:focus {
      opacity: .5;
    }
  }
`;

const styleIcon = {
  width: 'auto',
  height: '2rem',
  margin: '0 1rem',

};

export default function Footer(props) {
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <FooterWrapper {...props}>
      <a href="https://www.alura.com.br/">
        <img src="https://www.alura.com.br/assets/img/alura-logo-white.1570550707.svg" alt="Logo Alura" />
      </a>
      <a href="https://www.linkedin.com/in/tayna-martins-ramos/">
        <FaLinkedinIn style={styleIcon} />
      </a>
    </FooterWrapper>
  );
}
