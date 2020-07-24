import React, { Component } from 'react';
import axios from 'axios';
import { CloudinaryContext, Transformation, Image } from 'cloudinary-react';

class SampleGallery extends Component {
    constructor(props) {
        super(props);
        this.state = {
            gallery: []
        }
    }

    componentDidMount() {
        // Request for images tagged xmas       
        axios.get('https://res.cloudinary.com/dqvbgvuoe/image/list/Amerik01.json')
            .then(res => {
                console.log(res.data.resources);
                this.setState({gallery: res.data.resources});
            });
    }

    uploadWidget() {
        let _this = this;
        cloudinary.openUploadWidget({ cloud_name: 'dqvbgvuoe', upload_preset: 'imagesamerik', tags:['Amerik01']},
            function(error, result) {
                console.log(result);
                _this.setState({gallery: _this.state.gallery.concat(result)})
            });
    }

    render(){
        return (
            <div className="main">
                <h1>Galleria</h1>
                <div className="upload">
                    <button onClick={this.uploadWidget.bind(this)} className="upload-button">
                        Add Image
                    </button>
                </div>
           

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
                                                        width="300"
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
                    </CloudinaryContext>
                    <div className="clearfix"></div>
                </div>
            </div>

        );
    }
}

export default (SampleGallery);