import React, { Component } from 'react';
import axios from 'axios';
import { Modal} from "antd";
import { CloudinaryContext, Transformation, Image, Video } from 'cloudinary-react';

class Gallery extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: true,
            gallery: [],
            videos: [],
        }
    }

    componentDidMount() {
        // Request for images and videos tagged with Amerik01       
        axios.get('https://res.cloudinary.com/dqvbgvuoe/image/list/Amerik01.json')
            .then(res => {
                console.log("get images: ",res.data.resources);
                this.setState({gallery: res.data.resources});
            });

        axios.get('https://res.cloudinary.com/dqvbgvuoe/video/list/Amerik01.json')
        .then(res => {
            console.log("get videos: ", res.data.resources);
            this.setState({ videos: res.data.resources});
        });    
    }

   
    uploadWidget() {
        let _this = this;
        cloudinary.openUploadWidget({ 
            cloud_name: 'dqvbgvuoe', upload_preset: 'imagesamerik', tags:['Amerik01'],
            
        },
        function(error, result) {
            if (result && result.event === "success") {
                console.log("grabe imagen en cloudinary ",result);
                _this.setState({gallery: _this.state.gallery.concat(result.info)})

                // Campos para Gallery BD
                // result.info.secure_url
                // result.info.public_id
                // result.info.format
                // result.info.resource_type
                // result.info.tags[0]
            }
            
        });
    }

    onCancel(){
        this.setState({visible: false})
    }

    render(){
        const modalArea = {
            width: 900
          };  

        return (
            <div className="main">
                <Modal
                    visible={this.props.visible}
                    onCancel={this.props.close}
                    footer={null}
                    keyboard={false}
                    maskClosable={false}
                    mask={false}
                    className='textAldrich'
                    width="1200px"
                 
                >   
                
                    <h1>Gallery</h1>
                    <div >
                        <button onClick={this.uploadWidget.bind(this)} 
                         style={{
                            height: 50,
                            backgroundColor: 'rgba(99,37,201,1)',
                            borderColor: 'transparent' ,
                            fontSize: '14px',
                            color: "rgba(255,255,255)"              
                            }}
                            className={'textAldrich'}
                            type="primary">
                            Add Image
                        </button>
                    </div>
                    <br/>

                    <div className="gallery">
                        
                        <CloudinaryContext 
                            cloudName="dqvbgvuoe" 
                            style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center'}}>
                                
                            {
                                this.state.gallery.map(data => {
                                    return (
                                        <div className="responsive" key={data.public_id} style={{margin:"5px"}}>
                                            <div className="img">
                                                <a target="_blank" href={`https://res.cloudinary.com/dqvbgvuoe/image/upload/${data.public_id}.jpg`}>
                                                    <Image publicId={data.public_id}>
                                                        <Transformation
                                                            crop="fill"
                                                            gravity="faces"
                                                            width="150"
                                                            height="150"
                                                            dpr="auto"
                                                            responsive_placeholder="blank"
                                                        />
                                                    </Image>
                                                </a>
                                            </div>
                                        </div>
                                    )
                                    
                                })
                            }

                            {
                                this.state.videos.map(data => {
                                    return(
                                        <div className="responsive" key={data.public_id} style={{margin:"5px"}}>
                                            <div className="img">
                                                <a target="_blank" href={`https://res.cloudinary.com/dqvbgvuoe/video/upload/${data.public_id}.mov`}>
                                                    <Video publicId={data.public_id} width="150" height="150" controls></Video>
                                                </a>   
                                            </div>
                                        </div>
                                    )

                                })
                            }
                        </CloudinaryContext>
                        <div className="clearfix"></div>
                    </div>

                </Modal>     
            </div>
        );
    }
}

export default (Gallery);