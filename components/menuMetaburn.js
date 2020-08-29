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
               <Menu onClick={this.handleClick} selectedKeys={[current]} mode="horizontal" 
                    className="backMenuMetaburn "
                    // theme="dark"
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
                    {/*<Menu.Item key="donate" >
                        <Button  className="buttonMetaburnNeu" 
                            href="https://donate.burningman.org/?utm_source=bridge-experience&utm_medium=donate&utm_campaign=multiverse" target="_blank" rel="noopener noreferrer">
                            DONATE
                        </Button>
                    </Menu.Item>*/}
                    <Menu.Item >
                        <img  src="https://cdn-sharing.adobecc.com/id/urn:aaid:sc:US:610f6250-1ed9-475b-9ba2-c2990e12dc3f;version=0?component_id=737763eb-7161-4e2c-88ca-e4cbb6422eff&api_key=CometServer1&access_token=1598690432_urn%3Aaaid%3Asc%3AUS%3A610f6250-1ed9-475b-9ba2-c2990e12dc3f%3Bpublic_7f39624b0614740867694e76f080b03891b56093"
                              style={{width: "100%", height: "100px", backgroundColor: "#ffffff", margin: "10px -10px" }}
                        ></img>    
                    </Menu.Item>
                </Menu >
                <marquee style={{color: "#ff0000", fontSize: "16px", fontWeight: "bold"}}>
                    You may experience performance issues depending on your hardware & internet speed. 
                    If you do: Reload the page. Close tabs and Application. Restart the computer if needed.
                    Visit our FAQ's or LIVE TECH SUPPORT page. Enjoy the Burn!
                </marquee>
            </div>
        )
    }

}
export default (MenuMetaburn); 