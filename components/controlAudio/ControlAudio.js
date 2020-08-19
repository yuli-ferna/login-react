import React from "react";
import { Card, Avatar, Layout, Modal, Slider, Checkbox, Row, Col } from 'antd';
import InputAudio from "./InputAudio.js";
import StreamControls from "./StreamControls.js";
let config = {
    ambient: {
        volume: 100,
        mute: true
    },
    effects: {
        volume: 100,
        mute: false
    },
    positional: {
        volume: 100,
        mute: false    
    },
    multiplayer: {
        volume: 100,
        mute: false    
    },
};
class ControlAudio extends React.Component {
    constructor(props) {
        super(props);
        this.state = { ambientVolume: config.ambient.volume,
            effectsVolume: config.effects.volume,
            multiplayerVolume: config.multiplayer.volume,
            ambientMute: config.ambient.mute,
            effectsMute: config.effects.mute,
            multiplayerMute: config.multiplayer.mute,
        };  
    }

    onChangeEffects = (value) => {
        // console.log('onChange: ', value);
        // setVolumeEffects(value / 100);
        config.effects.volume = value;
        this.setState({ effectsVolume: value, effectsMute: config.effects.mute });
    }
    onChangeEffectsMute = (value) => {
        config.effects.mute = value.target.checked;
        // muteEffects();
        this.setState({ effectsMute: value.target.checked });
    }
    onChangeMultiplayer = (value) => {
        // console.log('onChange: ', value);
        // setVolumeMultiplayer(value / 100);
        config.multiplayer.volume = value;
        this.setState({ multiplayerVolume: value, multiplayerMute: config.multiplayer.mute });
    }
    onChangeMultiplayerMute = (value) => {
        config.multiplayer.mute = value.target.checked;
        // muteMultiplayer();
        this.setState({ multiplayerMute: value.target.checked });
    }
    onChangeAmbient = ( value) => {
        // setVolumeAmbient(value / 100);
        config.ambient.volume = value;
        this.setState({ ambientVolume: value, ambientMute: config.ambient.mute });
    }
    onChangeAmbientMute = (value) => {
        config.ambient.mute = value.target.checked;
        // muteAudio();
        this.setState({ ambientMute: value.target.checked });
    }
    
    render() {
        const topModel={
            marginTop: -30
        };
        const volumenMax = 200;
        
        return (
            <Modal
            visible={this.props.visible}
            onCancel={this.props.close}
            footer={null}
            className='textAldrich'
            style={topModel}>
                <InputAudio title='Ambiental' 
                    volume={this.state.ambientVolume} 
                    onChange={this.onChangeAmbient} 
                    mute={this.state.ambientMute} 
                    onChangeMute={this.onChangeAmbientMute} 
                    max={100}  />
                <InputAudio title='Effects' 
                    volume={this.state.effectsVolume} 
                    onChange={this.onChangeEffects} 
                    mute={this.state.effectsMute} 
                    onChangeMute={this.onChangeEffectsMute} 
                    max={volumenMax}  />
                <InputAudio title='Multiplayer' 
                    volume={this.state.multiplayerVolume} 
                    onChange={this.onChangeMultiplayer} 
                    mute={this.state.multiplayerMute} 
                    onChangeMute={this.onChangeMultiplayerMute} 
                    max={volumenMax}  />
                <StreamControls/>
            </Modal>
        )
    }

}

export default (ControlAudio);