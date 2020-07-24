import React, { Component } from 'react';
import axios from 'axios';
import { CloudinaryContext, Transformation, Image } from 'cloudinary-react';
import { render } from 'react-dom';

const apiKey = '577952861189382';
const apiSecret = 'vbEmB_N-S4DWERNfAykr6Zdp02A'
const cloudName = 'dqvbgvuoe'

const publicid01 = 'imagesamerik/ypgjl3r7makze9mv6oh4'
const publicid02 = 'imagesamerik/kdoawyhzfq6ouxxzqyy4'
const publicid03 = 'imagesamerik/rtedjuondq1evr2fbdik'
const publicid04 = 'imagesamerik/scs3wflisbk1zzlavs6l'


class Gallery extends Component {
    constructor(props) {
        super(props);
        this.state = {
            gallery: []
        }
    }
    componentDidMount() {
        // Request for images tagged xmas       
       // axios.get('https://res.cloudinary.com/dqvbgvuoe/image/list/xmas.json')
       // axios.get('https://res.cloudinary.com/v1_1/dqvbgvuoe/resources/image')
       /* axios.get('https:577952861189382:vbEmB_N-S4DWERNfAykr6Zdp02A@api.cloudinary.com/v1_1/dqvbgvuoe/resources/image')
            .then(res => {
                console.log(res.data.resources);
                this.setState({gallery: res.data.resources});
            });*/
    }
    uploadWidget() {
       // . . .
    }
    render(){
        return (
            <div className="main">
                <h1>Gallery</h1>
                
                <div className="gallery">
                <CloudinaryContext cloudName="dqvbgvuoe">
                    <div>
                        <Image publicId={publicid01} width="300" crop="scale" />
                        <Image publicId={publicid02} width="300" crop="scale" />
                        <Image publicId={publicid03} width="300" crop="scale" />
                        <Image publicId={publicid04} width="300" crop="scale" />
                    </div>
                                        
                </CloudinaryContext>
                <div className="clearfix"></div>
                </div>
            </div>

        );
    }
}


export default (Gallery);