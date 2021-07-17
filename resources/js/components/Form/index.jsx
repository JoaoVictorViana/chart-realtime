import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Form extends Component {
    render() {
        return (
            <form className="Form" action="">
                <div className="Form_group">
                    <label htmlFor="">Nome:</label>
                    <input type="text" />
                </div>
                <div className="Form_group">
                    <label htmlFor="">Você gostou:</label>
                    <input type="checkbox" placeholder=""/>
                </div>

                <div className="Form_group">
                    <label htmlFor="">Outra estatistica:</label>
                    <input type="checkbox" />
                </div>
                <button>Salvar Informações</button>
            </form>
        );
    }
}

ReactDOM.render( <Form />, document.getElementById('Form') );