import React, { useState } from "react";
import axios from 'axios';
import {Image, Video, Transformation, CloudinaryContext} from 'cloudinary-react';

function Images(){
    

        const url = 'https://api.cloudinary.com/v1_1/dqvbgvuoe/image/upload';
        const preset = 'imagesamerik'
        const tags = 'Amerik'
        const cloudName = 'dqvbgvuoe'

        const [image, setImage] = useState("")
        const [loading, setLoading] = useState(false)
        const [showUrl, setUrl] = useState("")
        const [publicId, setPublicId] = useState("")

        const onChange = e => {
            setImage(e.target.files[0]);
        };  

        const onSubmit = async () => {
            const formData = new FormData();
            formData.append('file', image);
            formData.append('upload_preset', preset);
            formData.append('tags', tags);

            try {
              setLoading(true);
              const res = await axios.post(url, formData);
              
              console.log("res ", res)
              const imageUrl = res.data.secure_url;
              const publicIdData = res.data.public_id;
              console.log("publicId ", publicIdData)
             /* const image = await axios.post('http://localhost:3000/upload', {
                imageUrl
              });*/

              setLoading(false);
              setImage(res.data.image);
             
              console.log("Images ", image)
              setUrl(imageUrl);
              setPublicId(publicIdData)
            } catch (err) {
              console.error(err);
            }
          };
         
        return(
            <div className='container'>
                <div className='file-field input-field'>
                    <div className='btn'>
                        <input type='file' name='image' onChange={onChange} />
                    </div>                   
                </div><br></br>

                <div className='center'>
                    <button onClick={onSubmit} className='btn center'>
                      Upload
                    </button>
                </div>
                <br></br>
                
            </div>
            
        )
    
}
export default (Images);