import axios from 'axios'

const baseUrl = window.baseParam.baseApiUrl + "/file";
const fileApi = {

  /**
   * 文件上传
   */
  fileUpload(file,callback){
    let url = baseUrl + "/upload";
    let formData = new FormData();
    formData.append("file",file);
    let config = {
      headers : {
        'Content-Type' : 'multipart/form-data'
      }
    };
    axios.post(url,formData,config).then(res => {
      callback(res);
    })
  },
  /**
   * 文件删除
   */
  fileDelete(){

  }
}


export {
  fileApi
}
