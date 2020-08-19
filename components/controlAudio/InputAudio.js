import React from "react";
import { Slider, Checkbox, Row, Col } from 'antd';

class InputAudio extends React.Component {
    constructor(props) {
        super(props);
        
    }
    
    render() {
        
        return (
            <Row>
                <Row justify={'center'}
                align='middle'>
                <p>{this.props.title}</p>
                </Row>
                <Row align='middle'>
                    <Col span={20}>
                        <Slider max={this.props.max} value={this.props.volume} onChange={this.props.onChange}/>
                    </Col>
                    <Col span={3}>
                        <Checkbox checked={this.props.mute} onChange={this.props.onChangeMute} style={{textAlign: 'center'}}>Mute</Checkbox>
                    </Col>
                </Row>
            </Row>
                
        )
    }

}

export default (InputAudio);