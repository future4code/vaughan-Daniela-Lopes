import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';
import { SecaoComentario } from './components/SecaoComentario/SecaoComentario';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

class App extends React.Component {

  state = {
    postsPessoas: [
      {
        nomeUsuario: "paulinha",
        fotoUsuario: "https://picsum.photos/50/50",
        fotoPost: "https://picsum.photos/200/150"
      },
      {
        nomeUsuario: "Anna",
        fotoUsuario: "https://picsum.photos/50/51",
        fotoPost: "https://picsum.photos/200/151"
      },
      {
        nomeUsuario: "Gabriella",
        fotoUsuario: "https://picsum.photos/50/52",
        fotoPost: "https://picsum.photos/200/152"

      }
    ],
    valorImputUsuario: '',
    valorImputFotoUsuario: '',
    valorImputFotoPost: ''
  };


adicionaPost = () => {
  const novoPost = {
    usuario: this.state.valorImputFotoUsuario,
    fotoUsuario: this.state.valorImputFotoUsuario,
   fotoPost: this.state.valorImputFotoPost
  }
  const novosPosts = [...this.state.postsPessoas, novoPost];
  this.setState({postsPessoas: novosPosts });
}

onChangeImputUsario = (event) => {
  this.setState({valorImputUsuario: event.target.value});
}

onChangeImputFotoUsuario = (event) => {
  this.setState({valorImputFotoUsuario: event.target. value});
}

onChangeImputFotoPost = (event) => {
  this.setState({valorImputFotoPost: event.target.value});
}

  render() {
    const listaDeComponentes = this.state.postsPessoas.map((postsPessoa) => {
      return (

        <Post
          nomeUsuario={postsPessoa.nomeUsuario}
          fotoUsuario={postsPessoa.fotoUsuario}
          fotoPost={postsPessoa.fotoPost}
        />

      );
    });

    return (
      <MainContainer>
        <input
        value={this.state.valorImputUsuario}
        onChange={this.onChangeImputUsario}
        placeholder={"Nome"}
        />
        <input
        value={this.state.valorImputFotoUsuario}
        onChange={this.onChangeImputFotoUsuario}
        placeholder={"Perfil"}
        />
        <input
        value={this.state.valorImputFotoPost}
        onChange={this.onChangeImputFotoPost}
        placeholder={"Publicar"}
        />
        <button onClick={this.adicionaPost}>Adicionar</button>
        {listaDeComponentes}
        {SecaoComentario}
      </MainContainer>


    );
  }
}

export default App;
