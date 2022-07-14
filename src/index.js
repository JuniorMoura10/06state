import React from 'react';
import ReactDOM from 'react-dom';

class Componente extends React.Component {
    
    mensagem(nome){
        alert('Hello, ' + nome);
        console.log(this);
    }

    minhaArrouFunction = (curso) => {
        alert('Eu estou fazendo o curso de ' + curso);
    }

    teclado = (obj) => {
        console.log(obj.target.value);
    }

    render() {
        return(
            <div>
                <button onClick={this.mensagem.bind(this, 'Júnior Moura!')}>Clique aqui</button>
                <button onClick={() => this.minhaArrouFunction('ReactJS')}>Arrow Function</button>
                <hr/>

                <input type="password" onChange={this.teclado} />

            </div>
        ); 
    }
}

ReactDOM.render(<Componente />, document.getElementById('root'));
