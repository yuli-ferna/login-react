import React, { Component } from 'react';
import axios from 'axios';
import { Modal} from "antd";
import { CloudinaryContext, Transformation, Image, Video } from 'cloudinary-react';

class SampleGallery extends Component {
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
        
        return (
            <div className="main">
                <Modal
                    visible={this.state.visible}
                    onCancel={this.onCancel.bind(this)}
                    footer={null}
                    keyboard={false}
                    maskClosable={false}
                    className='textAldrich'
                >   
                
                    <h1>Gallery</h1>
                    <div className="upload">
                        <button onClick={this.uploadWidget.bind(this)} className="upload-button">
                            Add Image
                        </button>
                    </div>
                    <br/>

                    <div className="gallery">
                        
                        <CloudinaryContext cloudName="dqvbgvuoe">
                            {
                                this.state.gallery.map(data => {
                                    return (
                                        <div className="responsive" key={data.public_id}>
                                            <div className="img">
                                                <a target="_blank" href={`https://res.cloudinary.com/dqvbgvuoe/image/upload/${data.public_id}.jpg`}>
                                                    <Image publicId={data.public_id}>
                                                        <Transformation
                                                            crop="scale"
                                                            width="200"
                                                            height="200"
                                                            dpr="auto"
                                                            responsive_placeholder="blank"
                                                        />
                                                    </Image>
                                                </a>
                                                <div className="desc">Created at {data.created_at}</div>
                                            </div>
                                        </div>
                                    )
                                    
                                })
                                
                            }

                            {
                                this.state.videos.map(data => {
                                    return(
                                        <div className="responsive" key={data.public_id}>
                                            <div className="img">
                                                <a target="_blank" href={`https://res.cloudinary.com/dqvbgvuoe/video/upload/${data.public_id}.wmv`}>
                                                    <Video publicId={data.public_id}>
                                                        <Transformation
                                                            crop="scale"
                                                            width="200"
                                                            height="200"
                                                            dpr="auto"
                                                            responsive_placeholder="blank"
                                                            controls
                                                        />
                                                    </Video>
                                                </a>   
                                                <div className="desc">Created at {data.created_at}</div>
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

export default (SampleGallery);