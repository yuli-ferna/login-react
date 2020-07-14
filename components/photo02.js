import React from "react";
import { Upload, Icon, message } from 'antd';



class Photo02 extends React.Component {
    onChange = (info) => {
        const reader = new FileReader();
        reader.onloadend = (obj) => {
          this.imageDataAsURL = obj.srcElement.result;
        };
        reader.readAsDataURL(info.file.originFileObj);
    
      };

      customRequest = ({ onSuccess, onError, file }) => {
        const checkInfo = () => {
          setTimeout(() => {
            if (!this.imageDataAsURL) {
              checkInfo();
            } else {
              this.uploadFile(file)
                .then(() => {
                  onSuccess(null, file);
                })
                .catch(() => {
                  // call onError();
                });
            }
          }, 100);
        };
    
        checkInfo();
      };

  render() {
    

      
     
   
    return (
        <Upload name="file" customRequest={this.customRequest} onChange={this.onChange}>
            <Button>
                <Icon type="upload" /> Click to Upload
            </Button>
        </Upload>
    );
  }
}

export default (Photo02);