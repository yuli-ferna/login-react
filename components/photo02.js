import React, { useState } from "react";
import axios from 'axios';
import {Image, Video, Transformation, CloudinaryContext} from 'cloudinary-react';


function Photo02() {

    const url = 'https://api.cloudinary.com/v1_1/dqvbgvuoe/image/upload';
    const preset = 'imagesamerik'
    const cloudName = 'dqvbgvuoe'
  
    const [loading, setLoading] = useState(false)
    const [image, setImage] = useState("")
    const [showUrl, setUrl] = useState("")
    const [publicId, setPublicId] = useState("")

    const uploadImage = e => {
      const files = e.target.files
      const data = new FormData()
      data.append('file', files[0])
      data.append('upload_preset','imagesamerik')
      setLoading(true)

      const res = fetch("https://api.cloudinary.com/v1_1/dqvbgvuoe/image/upload",
      {
        method: 'POST',
        body: data
      })

      //const file = res.json()

      console.log(res)
     
    };

    const onChange = e => {
      setImage(e.target.files[0]);
    }; 

    const onSubmit = async () => {
      const formData = new FormData();
      formData.append('file', image);
      formData.append('upload_preset', preset);

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
        setUrl(imageUrl);
        setImage(image.data);
        setPublicId(publicIdData)
        console.log ("public Id ", publicIdData)
        console.log ("image data ", image.data)
        
      } catch (err) {
        console.error(err);
      }
    };

    return (
      
        <div>
          <h3>Upload Image to Cloudinary</h3>
          <input type="file" name="file" placeholder="Upload"
           onChange={onChange}/>

           <br></br>

          <div className='center'>
              <button onClick={onSubmit} className='btn center'>
                Upload Image
              </button>
          </div>

          <div>
            <a href={showUrl} target="_blank">Your URL Image</a>
            <Image cloudName="dqvbgvuoe" publicId={publicId} width="100" crop="scale" />
          </div><br></br>
          
        </div>
    );
  
}

export default (Photo02);