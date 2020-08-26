import React from "react";
import { Menu, Dropdown, Button, Icon, message } from 'antd';
import "./scss/ui.scss";
import { relative } from "path";

class MenuMetaburn extends React.Component {
    constructor(props) {
      super(props);
      this.state = { 
        current: '',
      }
    }

    handleClick = e => {
        console.log('click ', e);
        this.setState({ current: e.key });
      };

    render(){
       
        const { current } = this.state;

        return(
            <div>
               <Menu onClick={this.handleClick} selectedKeys={[current]} mode="horizontal" className="backMenuMetaburn "
                    style={{ display: 'flex', alignItems: 'center', lineHeight: '64px' }}
               >
                   <Menu.Item >
                       <img style={{width: 50, height: 50}} src="https://kindling.burningman.org/wp-content/themes/kindling/img/logo.svg"></img>
                   </Menu.Item>
              
                    <Menu.Item key="gather">
                        <Button  className="buttonMetaburnNeu"  href="https://kindling.burningman.org/gather/" target="_blank" rel="noopener noreferrer">
                            GATHER
                        </Button>
                    </Menu.Item>
                   
                    <Menu.Item key="experience">
                        <Button className="buttonMetaburnNeu"  href="https://kindling.burningman.org/experience/" target="_blank" rel="noopener noreferrer">
                            EXPERIENCE
                        </Button>
                    </Menu.Item>
                    <Menu.Item key="play" >
                        <Button  className="buttonMetaburnNeu"  href="https://kindling.burningman.org/play/" target="_blank" rel="noopener noreferrer">
                            PLAY
                        </Button>
                    </Menu.Item>
                    <Menu.Item key="co-learn"> 
                        <Button  className="buttonMetaburnNeu"  href="https://kindling.burningman.org/co-learn/" target="_blank" rel="noopener noreferrer">
                            CO-LEARN
                        </Button>
                    </Menu.Item>
                    <Menu.Item key="ignite" > 
                        <Button  className="buttonMetaburnNeu"  href="https://kindling.burningman.org/ignite/" target="_blank" rel="noopener noreferrer">
                            IGNITE
                        </Button>
                    </Menu.Item>
                    <Menu.Item key="multiverse" >
                        <Button  className="buttonMetaburnNeu"  href="https://kindling.burningman.org/multiverse/" target="_blank" rel="noopener noreferrer">
                            MULTIVERSE
                        </Button>
                    </Menu.Item>
                    <Menu.Item key="metaburn" >
                        <Button  className="buttonMetaburnNeu"  href="https://kindling.burningman.org/">
                            METABURN
                        </Button>
                    </Menu.Item>
                    <Menu.Item key="donate" >
                        <Button  className="buttonMetaburnNeu" 
                            href="https://donate.burningman.org/?utm_source=bridge-experience&utm_medium=donate&utm_campaign=multiverse" target="_blank" rel="noopener noreferrer">
                            DONATE
                        </Button>
                    </Menu.Item>
                </Menu>
            </div>
        )
    }

}
export default (MenuMetaburn); 