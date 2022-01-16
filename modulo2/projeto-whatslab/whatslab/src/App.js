import styled from "styled-components";
import './App.css';
import React from 'react';

const CardMensagem = styled.div`
display: flex;
border 1px solid black;
margin: 5px 0;
padding: 0 5px;
`;


class App extends React.Component {
  state = [
  {
    nome: '',
    mensagem: ''
  }
];

  guardaNome = (event) => {
    this.setState({ inputNome: event.target.value });
  };

  guardaMensagem = (event) => {
    this.setState({ inputMensagem: event.target.value });
  };

  adicionaMensagens = () => {
    const novaMensagem = {
      usuario: this.state.inputNome,
      mensagem: this.state.inputMensagem
    };
    this.setState({inputNome:'', inputMensagem:''});
  }
  render() {
    const listaComponentes = this.state.nome.mensagem.map((listaMensagens) => {
      return (
    <CardMensagem>
    
    </CardMensagem>
    
      )
    })
      };
      
    }
    
    export default App;