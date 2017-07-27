import React from 'react';

class FooterForm extends React.Component {
    
    constructor(){
        super();
        this.state = {
        }
    }
    
    render(){
        var crumIndex = this.state.activeCrums;
        return(
            <div className="footer-form">
                <div className="footer-title">
                    DOWNLOAD FREE BOOK
                </div>
                <div className="inputs">
                    <div className="input-form">
                        <div className="user-icon"></div>
                        <input type="text" placeholder="NAME"></input>
                    </div>
                    <div className="input-form">
                        <div className="email-icon"></div>
                        <input type="text" placeholder="EMAIL"></input>
                    </div>
                    <a href="#" className="form-button">DOWNLOAD BOOKS</a>
                </div>
            </div>
        );
    }
}

export default FooterForm;