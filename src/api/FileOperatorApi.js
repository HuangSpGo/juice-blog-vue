import {baseApiUrl,$ajax} from './BaseApi';

const baseUrl = baseApiUrl + "/file";
const fileApi = {

  /**
   * 文件上传
   */
  fileUpload(fileList){
    let url = baseUrl + "/upload";
    let formData = new FormData();
    for (let i = 0; i < fileList.length; i++){
      formData.append("file",fileList[i]);
    }
    let config = {
      headers : {
        'Content-Type' : 'multipart/form-data'
      }
    };
    return axios.post(url,formData,config);
  },
  /**
   * 文件删除
   */
  deleteFiles(fileIds){
    let url = baseUrl + "/deleteFiles";
    let formData = new FormData();
    formData.append("fileIds",fileIds)
    return axios.post(url,formData,{
      headers : {'Content-Type' : 'application/x-www-form-urlencoded:charset=UTF-8'}
    });
  }
}


export {
  fileApi
}
