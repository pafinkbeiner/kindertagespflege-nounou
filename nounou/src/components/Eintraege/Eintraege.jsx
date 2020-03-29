import React from 'react'

class Eintraege extends React.Component{

    state = {
        data: []    
    }

    componentDidMount(){
        this.setState({
            data: [
                {
                    vorname: "Paul",
                    nachname: "Finkbeiner",
                    text: "Klasse"
                }
            ]
        })
    }

    render(){

        const flex = {
            display: "flex",
            flexDirection: "column",
            flexWrap: "wrap",
            
        }

        return(
            <div style={flex}>
                {this.state.data.map((item) => {
                    return (
                        <div class="card red lighten-2">
                            <div class="card-content white-text" >
                                <span class="card-title">{item.vorname+" "}{item.nachname}</span>
                                <p>{item.text}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default Eintraege
