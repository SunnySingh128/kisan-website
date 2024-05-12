

function add_contact(){
    var fullname = document.getElementById("fullname").value;
    var pnum = document.getElementById("pnum").value;
    var snum = document.getElementById("snum").value;

    if (fullname!="" && pnum!="" && snum!=""){
        if(isNaN(pnum)){
            alert("please enter a valid primary number");
        }
        else{
            if(isNaN(snum)){
                alert("please enter a valid secondary number");
            }
            else{
                var user = {fullname:fullname,pnum:pnum,snum:snum};
                var user_details = JSON.stringify(user);
                localStorage.setItem(fullname+" contact",user_details);
                var form=document.getElementById("add-form");
                form.reset();
                document.getElementById("saved").style.display="block";
                setTimeout(function(){document.getElementById("saved").style.display="none";},2000);
            }
        }
    }
}

function show_contacts(){
    var i;
    for(i=1;i<=localStorage.length;i++)
    {
        var keys = localStorage.key(i);
        if(keys.match("contact"))
        {
            var json_text = localStorage.getItem(keys);
            var json_extract = JSON.parse(json_text);
            var con = document.getElementById("list");
            var fieldset = document.createElement("FIELDSET");
            var legend = document.createElement("LEGEND");
            var ol = document.createElement("OL");
            var li_one=document.createElement("LI");
            var li_two=document.createElement("LI");
            con.appendChild(fieldset);
            fieldset.appendChild(legend);
            fieldset.appendChild(ol);
            ol.appendChild(li_one);
            ol.appendChild(li_two);
            legend.appendChild(document.createTextNode(json_extract.fullname));
            li_one.appendChild(document.createTextNode(json_extract.pnum));
            li_two.appendChild(document.createTextNode(json_extract.snum));
        }
    }
}
show_contacts();






