const DebugImgPath="/sdcard/001debug/";

function getXy(x,y){
    return {x:x,y:y};
}
function  saveToDebug(img,name){
    let url=DebugImgPath+name+".png";
   let result= image.saveTo(img,url);
   if(result){
       loggerD("保存截图成功："+url);
   }else {
       loggerD("保存截图失败："+result);
   }
}
function loggerD(msg){
    logd(msg);
}
function loggerE(msg){
    loge(msg);
}