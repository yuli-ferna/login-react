import React from "react";
import {  Slider, Checkbox, Row, Col } from 'antd';

class StreamControls extends React.Component {
    constructor(props) {
        super(props);
        let vol = 100;
        let mute = false;
        this.state = {
            volume: vol ? vol * 100 : 0.0,
            mute: mute !== null ? mute : true,
            visible: vol ? true : false
        }
    }
    onChangeVolume = (value) => {
        // setVolumePlayer( value / 100 );
        // setMutePlayer( false );

        this.setState({volume: value, mute: false});
    };
    onChangeMute= (value) => {
        // setMutePlayer( value.target.checked );
        this.setState({mute: value.target.checked});
    }
    render() {
        return(
            <div>
                { this.state.visible && 
                    <Row>
                        <Row justify={'center'}
                        align='middle'>
                        <p>Stream</p>
                        </Row>
                        <Row align='middle'>
                            <Col span={20}>
                                <Slider max={100} value={this.state.volume} onChange={this.onChangeVolume}/>
                            </Col>
                            <Col span={3}>
                                <Checkbox checked={this.state.mute} onChange={this.onChangeMute}
                                style={{textAlign: 'center'}}>Mute</Checkbox>
                            </Col>
                        </Row>
                        
                    </Row>
                }

            </div>
        )
    }
}

export default (StreamControls)