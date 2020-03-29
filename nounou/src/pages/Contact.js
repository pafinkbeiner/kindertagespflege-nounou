import React from 'react'

import './Page.scss';

class Contact extends React.Component {

    componentDidMount(){
        document.title = "Kontakt";

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

        return (
            <div className="main-container">
    
                <h3>Kontakt</h3>
    
                <br/>
    
                  <div className="row">
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
                        <label htmlFor="textarea1">Nachricht</label>
                        </div>
                    </div>

                    <br/>

                    <button className="btn red darken-4">Abschicken</button>

                    </form>
                </div>
            </div>
        )
    }


}

export default Contact
