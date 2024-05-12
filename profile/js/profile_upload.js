function upload(){
    var btn1 = document.getElementById("btn");
    var freader = new FileReader();
    freader.readAsDataURL(btn1.files[0]);

    freader.onload=function(){
        var file_name=freader.result;
        var profile = document.getElementById("profile");
        profile.style.background="url("+file_name+")";
        profile.style.backgroundSize="cover";
        
        var next_btn= document.getElementById("next-btn");
        next_btn.style.display="block";

        var upload_txt = document.getElementById("upload-txt");
        upload_txt.style.display="none";

        localStorage.setItem("image_url",file_name);
    }
}
function profile_name(){
    var result=document.getElementById("result");
    var user_mail=sessionStorage.getItem("user_mail");
    var user_detail=localStorage.getItem(user_mail);
    var user_data=JSON.parse(user_detail);
    result.innerHTML=user_data.name;
}
profile_name();