import React, { useState } from "react";
import { Button, Icon } from 'antd';
import "./scss/ui.scss";


function ControlPanel(props) {
    // constructor(props) {
        // super(props);
        const [buttons, setButtons] = useState(
            [
                {name: 'Screenshare button 1', nEvent: 0, nButton: 1, disabled: false},
                {name: 'Screenshare button 2', nEvent: 0, nButton: 2, disabled: false},
                {name: 'Screenshare button 3', nEvent: 0, nButton: 3, disabled: false},
            
                {name: 'Launch animation 1', nEvent: 1, nButton: 1, disabled: false},
                {name: 'Launch animation 2', nEvent: 1, nButton: 2, disabled: false},
                {name: 'Launch animation 3', nEvent: 1, nButton: 3, disabled: false},

                {name: 'Change Sky', nEvent: 2, disabled: false},
                {name: 'Change World', nEvent: 3, disabled: false},
                {name: 'Kick out menu', nEvent: 4, disabled: false},
                {name: 'Ambient global', nEvent: 5, disabled: false},
                {name: 'Stream global', nEvent: 6, disabled: false},
                {name: 'Special effects', nEvent: 7, disabled: false},
            ]

        );
        
    // }
    
    const eventButton = (n, nButton) => {
        // console.log(n, nButton);
        switch (n) {
            case 0:
                //Screenshare button 1
                break;
            case 2:
                props.openSky();
                break;
            case 4:
                props.close();
                break;
            default:
                break;
        }
    };
    
    // render(){
        return(
            <div style={{display: props.visible ? 'block' : 'none'}} className="controlPanelContainer">
                <div style={{textAlign: 'right'}}>
                    <Icon type="close" onClick={props.close} />
                </div>

                <Button type="primary" style={{margin: '10px 0'}} block >Twitch Stream Change</Button>
                <div className="iconsContainer">
                    {buttons.map((item, i) => {
                        return  <Button key={i} className="circleButton"  disabled={item.disabled}
                                onClick={() => eventButton(item.nEvent, item.nButton)}>
                                    {item.name}
                                </Button>
                    })}
                </div>
                
            </div>
        )
    // }       
}


export default (ControlPanel);