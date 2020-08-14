import React from "react";
import { Modal } from 'antd';
// import { initSkyBoxSplitImage, getSkyboxPreviews } from "../../skyBox-manager";
import "./scss/ui.scss";
class SkyboxSelect extends React.Component {
    constructor(props) {
        super(props);
        this.state = { gallery: (this.props.items) }; 
        
    }
    
    
    render(){
        const topModel = {
        marginTop: -30
        };
        const {gallery} = this.state;
        
        return(
            <div>
                <Modal
                    keyboard={false}
                    maskClosable={false}
                    visible={this.props.visible}
                    onCancel={this.props.close}
                    destroyOnClose={true}
                    footer={null}
                    className='textAldrich'
                    style={topModel}
                    > 
                    
                    <div className="main">
                        <h1>Change the sky</h1>
                        <div className="iconsContainer">
                        {gallery.map(function(item, i) {
                            // item.url
                            return <img key={i} className="skyboxIcon" src={item.url} 
                            // onClick={() => initSkyBoxSplitImage(item.n)}
                            />
                        })}

                        </div>
                    </div>
                
                </Modal>
            </div>
        )
    }       
}


export default (SkyboxSelect);