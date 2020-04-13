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

                <div className="row">
                    <div className="col s6">
                        
                    <b>Telefonnummer</b>
                    <br/>
                    <table>

                    <tbody>
                        <tr>
                            <td>07441 / 951828</td>
                        </tr>
                    </tbody>
                    </table>
                    <br/>
                    <b>Adresse</b>
                    <br/>
                    <table>

                    <tbody>
                        <tr>
                            <td>Alfredstraße 67
                                <br/>
                                72250 Freudenstadt
                            </td>
                            
                        </tr>
                        <tr>
                        
                        </tr>
                    </tbody>
                    </table>

                    </div>
                    <div className="col s6">
                        
                        <iframe src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d935.3759035735809!2d8.408487129995715!3d48.463387008235905!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m5!1s0x479734451fa8bf5b%3A0x684bc25758c81d06!2sAlfredstra%C3%9Fe+67%2C+72250+Freudenstadt!3m2!1d48.4635423!2d8.409170099999999!4m0!5e0!3m2!1sde!2sde!4v1563221952535!5m2!1sde!2sde" width="100%" height="300" frameborder="0"  allowfullscreen></iframe>

                    </div>
                </div>
    
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
