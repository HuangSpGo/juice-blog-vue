const utils = {
  showMessage(type,message){
    this.$message({
      showClose: true,
      message: message,
      type : type
    });
  },
  showSuccess(){
    this.$message({
      showClose: true,
      message: '这是一条消息提示',
      type:"success"
    });
  }



}

export default utils;
