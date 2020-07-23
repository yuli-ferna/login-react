import React, { Component } from 'react';
import { CloudinaryContext, Transformation, Image, Video } from 'cloudinary-react';
import axios from 'axios';
import { Row, Col } from 'antd';
import {DeleteOutlined} from '@ant-design/icons';
import Images from './images.js';

class GalleryByUser extends Component {

  state = { images: [] };

  getImages() {
    axios.get('http://res.cloudinary.com/dqvbgvuoe/image/list/Amerik.json')
          .then(res => {
            console.log(res.data.resources);
            this.setState({ images: res.data.resources});
    });
  }

  componentDidMount() {
    this.getImages();
  }

  render() {

    const onDeleteImage = async () => {
      try {
        
      } catch (err) {
        console.error(err);
      }
    };

    const { images }  = this.state;
    
   
    return (
      <div>
     
        <h3 className="text-center"> Latest Images </h3>
        <hr/>
        <Images/>
        <div className="col-sm-12">
          <CloudinaryContext cloudName="dqvbgvuoe">
            { images.map((data, index) => (
                
                <div className="col-sm-4" key={index}>
                  <div className="embed-responsive embed-responsive-4by3">
                    
                    <a target="_blank" href={`https://res.cloudinary.com/dqvbgvuoe/image/upload/${data.public_id}.jpg`}>
                      <Image publicId={data.public_id} width="100" height="100" controls></Image>
                    </a>
                    
                  </div>
                 
                  <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                    <Col className="gutter-row" span={6}>
                        <div >Created at {data.created_at}</div>
                    </Col>
                    <Col className="gutter-row" span={6}>
                        <div >Format {data.format}</div>
                    </Col>
                    <Col className="gutter-row" span={6}>
                        <DeleteOutlined  onClick={onDeleteImage} />
                    </Col>
                    
                  </Row>
                
                </div>
              ))
            }
          </CloudinaryContext>
        </div>
      </div>
    );
  }
}

export default GalleryByUser;