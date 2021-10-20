import React, { Component } from 'react';
import PropTypes from 'prop-types'

class User extends Component {

state = {
    isVisible : false
}

static defaultProps = {
    name : "Bilgi Yok",
    department : "Bilgi Yok",
    salary : "Bilgi Yok"
}

// constructor(props){
//     super(props);
//     this.state = {
//         isVisible : false
//     }
// }
    render() {
 
        const {name, department, salary} = this.props;
        const {isVisible} = this.state;


        return (
            <div className = "col-md-8 mb-4">

                <div className = "card">
                    
                    <div className = "card-header d-flex justify-content-between">
                        
                        <h4 className = "d-inline">{name}</h4>
                        <i className = "far fa-trash-alt" style = {{cursor : "pointer"}}></i>

                    </div>   

                    { 
                        isVisible ?  
                        <div className = "card-body">

                            <p className = "card-text">Departman : {department}</p>
                            <p className = "card-text">Maaş : {salary}</p>

                        </div>

                        : null
                    }


                   
 
                </div>        

        

                {/* <form>
                    <input type="text"></input>
                    <button>Gönder</button>

                </form> */}

                {/* <ul>
                    <li>İsim : {name} <i className="far fa-trash-alt"></i></li>
                    <li>Departman : {department}</li>
                    <li>Maaş : {salary}</li>
                </ul> */}



                
            </div>
        )
    }
}

User.propTypes = {
    name : PropTypes.string.isRequired,
    department : PropTypes.string.isRequired,
    salary : PropTypes.string.isRequired
}

export default User;

//rcc