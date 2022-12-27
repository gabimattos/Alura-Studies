import React from 'react';
import style from './Botao.module.scss';

// Exemplo de function component
interface Props{
    texto: String,
    type?:"button" | "submit" | "reset" | undefined,
    onClick?:() => void

}

function Botao({texto, onClick, type}: Props) {
    return (
        <button onClick={onClick}className = {style.botao} type = {type}>
            {texto}
        </button>
    )
}
// Exemplo de class component
// class Botao extends React.Component <{texto: string, type?:"button" | "submit" | "reset" | undefined, onClick?:() => void}> {
//     render(){
//         const {type = "button", onClick} = this.props;
//         return (
//             <button onClick={onClick}className = {style.botao} type = {type}>
//                 {this.props.texto}
//             </button>
//         )
//     }
// }

export default Botao;