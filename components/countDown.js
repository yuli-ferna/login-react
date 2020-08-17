import React from "react";
import moment from 'moment';
import { Form, Input, Button, Modal, Tooltip} from "antd";

class CountDown extends React.Component {
    constructor(props) {
      super(props);
      this.state = { 
        countdown: [
          {
            unit: 'Months',
            value: ''
          },
          {
            unit: 'Days',
            value: ''
          },
          {
            unit: 'Hours',
            value: ''
          },
          {
            unit: 'Mins',
            value: ''
          },
          {
            unit: 'Secs',
            value: ''
          }
        ],
      };

    var  eventTime = moment('31-08-2020 00:00:00', 'DD-MM-YYYY HH:mm:ss').unix();
    var  currentTime = moment().unix();
    var  diffTime = eventTime - currentTime;
    this.duration = moment.duration(diffTime * 1000, 'milliseconds');
    this.interval = 1000;
    }
  
   
    setInterval() {
      this.duration = moment.duration(this.duration.asMilliseconds() - this.interval, 'milliseconds')
      var mth = moment.duration(this.duration).months()
      var d = moment.duration(this.duration).days()
      var h = moment.duration(this.duration).hours()
      var m = moment.duration(this.duration).minutes()
      var s = moment.duration(this.duration).seconds()

      if (s == '59'){
        clearInterval(this.intervalId);
      }

      this.setState({countdown:  {0: {unit: 'Months', value: mth},
                                  1: {unit: 'Days',value: d}, 
                                  2: {unit: 'Hours',value: h},
                                  3: {unit: 'Mins',value: m}, 
                                  4: {unit: 'Secs',value: s}
      
      }}) 
    }
  
    componentDidMount() {
      this.intervalId = setInterval(() => this.setInterval(), 1000);
    }
  
    componentWillUnmount() {
      clearInterval(this.intervalId);
    }
  
    render() {
      const styleButton = {
        height: 50,
        width: '8%',
        color: "rgba(255, 255, 255, 0.5);",
        fontWeight: "bold",
        backgroundColor: "transparent",
        boxShadow: ' 6px 6px 10px 0 rgba(0, 0, 0, 0.2), -6px -6px 10px 0 rgba(255, 255, 255, 0.5)',
        borderRadius: '20',
        borderColor: 'transparent'
      };

      const count = this.state.countdown
      return (
        <div style={{textAlign: "center"}}>
          <div style={{fontWeight: "bold"}}>
              <p>August 31 2020 Countdown ends in...</p>
          </div>

          <>
            <Button style={styleButton}> {count[0].unit}
                <p>{count[0].value}</p>
            </Button>
            <Button style={styleButton}> {count[1].unit}
                <p>{count[1].value}</p>
            </Button>
            <Button style={styleButton}> {count[2].unit}
                <p>{count[2].value}</p>
            </Button>
            <Button style={styleButton}> {count[3].unit}
                <p>{count[3].value}</p>
             </Button>
            <Button style={styleButton}> {count[4].unit}
                <p>{count[4].value}</p>
             </Button>
          </>
        </div>
        
        
      );
    }
  }
  export default (CountDown); 