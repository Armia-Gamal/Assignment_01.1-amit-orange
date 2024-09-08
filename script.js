var s1 = ["./OIP.jpeg","./th1.jpeg"]
var s2 = ["./R.jpeg","./th2.jpeg"]
var s3 = ["./s12.webp","./th3.jpeg"]

var x = 0
setInterval(()=>{
    document.getElementById('a5').src = s1[x]
    x++;
    if(x>=2){
        x=0
    }
},2000)


var y = 0
setInterval(()=>{
    document.getElementById('aa5').src = s2[y]
    y++;
    if(y>=2){
        y=0
    }
},2000)

var z = 0
setInterval(()=>{
    document.getElementById('aaa5').src = s3[z]
    z++;
    if(z>=2){
        z=0
    }
},2000)