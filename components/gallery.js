import React from "react";
import { Modal} from 'antd';
import {Image, Video, Transformation, CloudinaryContext} from 'cloudinary-react';

const publicid01 = 'imagesamerik/ypgjl3r7makze9mv6oh4'
const publicid02 = 'imagesamerik/kdoawyhzfq6ouxxzqyy4'
const publicid03 = 'imagesamerik/rtedjuondq1evr2fbdik'
const publicid04 = 'imagesamerik/scs3wflisbk1zzlavs6l'

class Gallery extends React.Component {
    constructor(props) {
        super(props);
        this.state = { visible: true, gallery: []};  
    }
    
    handleCancel = () => {
        this.setState({ visible: false});    
    };

    render(){
        const topModel = {
        marginTop: -30
        };
        
        return(
            <div>
                <Modal
                    keyboard={false}
                    maskClosable={false}
                    visible={this.state.visible}
                    onCancel={this.props.close}
                    destroyOnClose={true}
                    footer={null}
                    className='textAldrich'
                    style={topModel}
                    > 
                    
                    <div className="main">
                        <h1>Gallery</h1>
                        
                        <div className="gallery">
                            <CloudinaryContext cloudName="dqvbgvuoe">
                                <div>
                                    <Image publicId={publicid01} width="200" crop="scale" />
                                    <Image publicId={publicid02} width="200" crop="scale" />
                                    <Image publicId={publicid03} width="200" crop="scale" />
                                    <Image publicId={publicid04} width="200" crop="scale" />
                                </div>
                                                    
                            </CloudinaryContext>
                            <div className="clearfix"></div>
                        </div>
                    </div>
                
                </Modal>
            </div>
        )
    }       
}


export default (Gallery);