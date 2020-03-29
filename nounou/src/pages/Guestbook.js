import React from 'react'

import './Page.scss';

import Eintraege from '../components/Eintraege/Eintraege'

class Guestbook extends React.Component {

    componentDidMount(){
        document.title = "Guestbook";

        this.state = {
            vorname: "",
            nachname: "",
            text: "",
            email: ""
        }
    }

    render(){

        const submit = (e) => {
            e.preventDefault();
            /* HIER KANN DER STATE LOSGESCHICKT WERDEN */
            console.log(this.state);
        }

        const InputForm = {
            display: "none"
        }

        return (
            <div className="main-container">
    
                <h3>Gästebuch</h3>

                <button id="igjr398g38gj" className="btn red darken-4" onClick={() => {document.getElementById("ijge8g43894mek2d9").style.display = ""; document.getElementById("igjr398g38gj").style.display="none"}}>Eintragen</button>

                <br/>

                  <div style={InputForm} id="ijge8g43894mek2d9" className="row">
                    <form className="col s12" onSubmit={submit}>
                    <div className="row">
                        <div className="input-field col s6">
                        <input id="first_name" type="text" onChange={(e) => this.setState({...this.state,vorname: e.target.value})}/>
                        <label htmlFor="first_name">Vorname</label>
                        </div>
                        <div className="input-field col s6">
                        <input id="last_name" type="text" onChange={(e) => this.setState({...this.state,nachname: e.target.value})}/>
                        <label htmlFor="last_name">Nachname</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                        <input id="email" type="email" onChange={(e) => this.setState({...this.state,email: e.target.value})}/>
                        <label htmlFor="email">Email</label>
                        </div>
                    </div>
 
                    <div className="row">
                        <div className="input-field col s12">
                        <textarea id="textarea1" className="materialize-textarea" onChange={(e) => this.setState({...this.state,text: e.target.value})}></textarea>
                        <label htmlFor="textarea1">Text</label>
                        </div>
                    </div>
                    <p>
                    <label>
                        <input type="checkbox" />
                        <span>Veröffentlichen</span>
                    </label>
                    </p>

                    <br/><br/>

                    <button className="btn red darken-4">Abschicken</button>

                    </form>
                </div>

                <br/>

                <Eintraege/>

            </div>
        )
    }


}

export default Guestbook
