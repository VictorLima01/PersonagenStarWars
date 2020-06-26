import React, {Component} from 'react';
import './App.css';

class CharInfo extends Component{
    constructor(props){
        super(props);
        this.state = {
            expanded: false, 
        }

        this.open = this.open.bind(this);
        this.close = this.close.bind(this);
    }
    open(){
        this.setState({expanded: !this.state.expanded })
    }
    close(){
        this.setState({expanded: !this.state.expanded })
    }
    render(){
        const info = this.props.charInfo;
        if(!this.state.expanded){
            return <p className="btn btn-info" onClick={this.open}>Info</p>
        }

        return(
            <div>
                <p className="btn btn-danger" onClick={this.close}>Esconder Info</p>
                <ul>
                    <li className="user-details"><h2 >Genero: {info.gender}</h2></li>
                    <li className="user-details"><h2>Data de Nascimento: {info.birth_year}</h2></li>
                    <li className="user-details"><h2>Cor Cabelo: {info.hair_color}</h2></li>
                </ul>
            </div>
        )
    }
}
export default CharInfo;