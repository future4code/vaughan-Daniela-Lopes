import React from "react";
import axios from "axios";
import { Component } from "react/cjs/react.production.min";

export default class NovoCadastro extends React.Component {
    state = {
        nome: "",
        email: ""
    };

    onChangeNome = (event) => {
        this.setState({ nome: event.target.value })
    }

    onChangeEmail = (event) => {
        this.setState({ email: event.target.value })
    }

    onClick = () => {
        const pegaUrl = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"
        const body = { name: this.state.nome, email: this.state.email }
        const autorizacaoAxios = { Headers: { Authorization: "daniela-lopes-vaughan" } }
        axios
            .post(pegaUrl, body, autorizacaoAxios)
            .then(() => {
                alert("Usuario salvo com sucesso!")
                this.setState({ nome: "", email: "" })
            })
            .catch((err) => {
                alert("ERRO!");
            });
    };
    render() {
        return (
            <div>
                <input
                    placeholder="Nome"
                    type="text"
                    value={this.state.nome}
                    onChange={this.onChangeNome}
                />
                <input
                    placeholder="Email"
                    type="text"
                    value={this.state.email}
                    onChange={this.onChangeEmail}
                />
                <button onClick={this.onClick} >Adicionar</button>
            </div>
        )

    }

};