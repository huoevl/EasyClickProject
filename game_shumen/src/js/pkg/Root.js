function rootInit(){
    //action_timeout 找图找色动作的最大时间，超时后会自动返回避免阻塞
    // auto_click_request_dialog 是否自动点击截屏授权对话框，默认是true，自动点击
    // image.setInitParam({"action_timeout":1000});
    image.setInitParam(
        {
            "action_timeout": 10000,
            "auto_click_request_dialog": false
        }
    );
    image.setFindColorImageMode(2);
    let req=startEnv();
    if(!req){
        toast("申请自动化权限失败");
        return;
    }
    let request=image.requestScreenCapture(1000,0);
    if(request){
        toast("申请截图成功");
    }else {
        toast("申请截图失败");
    }
    let d=image.initOpenCV();
    loggerD(d);
    sleep(1000);
}