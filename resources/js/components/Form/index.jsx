import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            like: false,
            other: false
        }

        this.handleCreateFeedback = this.handleCreateFeedback.bind(this);
    }

    async handleCreateFeedback() {
        const response = await fetch(
            '/api/feedback',
            {
                method: 'POST',
                cache: 'no-cache',
                headers: {
                    'Content-Type': 'application/json',
                    'X-CSRF-Token': this.props.token
                },
                body: JSON.stringify(
                    {
                        name: this.state.name,
                        like: this.state.like,
                        other: this.state.other,
                    }
                )
            }
        )

        if (await response.status === 200) {
            alert("Feedback cadastrado com sucesso!");
        } else {
            alert("Feedback não foi cadastrado!");
        }
    }

    render() {
        // const { name, like, other } = this.state;

        return (
            <form className="Form" action="">
                <div className="Form_group">
                    <label htmlFor="">Nome:</label>
                    <input type="text" onChange={(e => { this.setState({ name: e.target.value }) } ).bind(this)}/>
                </div>
                <div className="Form_group">
                    <label htmlFor="">Você gostou:</label>
                    <input type="checkbox" value={this.state.like} placeholder="" onClick={(() => { this.setState({ like: !this.state.like }) } ).bind(this)}/>
                </div>

                <div className="Form_group">
                    <label htmlFor="">Outra estatistica:</label>
                    <input type="checkbox" value={this.state.other} onClick={(() => { this.setState({ other: !this.state.other }) } ).bind(this)}/>
                </div>
                <button type="button" className="Form__button" onClick={this.handleCreateFeedback}>Salvar Informações</button>
            </form>
        );
    }
}

const form = document.getElementById('Form');
ReactDOM.render( <Form token={form.dataset.token} />, form );