function showNowTime(){
    var nd = new Date();
    alert(nd);
    var year = nd.getFullYear();
    var month = ("0"+(nd.getMonth()+1)).slice(-2);
    var date = ("0"+nd.getDate()).slice(-2);
    var hours = ("0"+nd.getHours()).slice(-2);
    var minutes = ("0"+nd.getMinutes()).slice(-2);
    var seconds = ("0"+nd.getSeconds()).slice(-2);

    alert(year+"年"+month+"月"+date+"日"+hours+"時"+minutes+"分"+seconds+"秒");
}

function showLastModified(){
    var mod = document.lastModified;
    alert(mod);
    var mod_arr = mod.split(" ")[0].split("/");
    mod_arr = mod_arr.concat(mod.split(" ")[1].split(":"));
    var year = mod_arr[2];
    var month = mod_arr[0];
    var date = mod_arr[1];
    var hours = mod_arr[3];
    var minutes = mod_arr[4];
    var seconds = mod_arr[5];

    alert(year+"年"+month+"月"+date+"日"+hours+"時"+minutes+"分"+seconds+"秒");
}