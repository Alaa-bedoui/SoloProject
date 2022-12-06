var i=1
var pics=["","https://sneakernews.com/wp-content/uploads/2022/01/nike-air-more-uptempo-white-navy-dh8011-100-2.jpg","jordan2.png","jordan1.png",]
    function next(){
    i++
    if(i<pics.length){
    document.getElementById('nike1').src=pics[i]
    }
    else{
        i=0
    }
}

var i=1
var pics2=["","14030_01-1200x1200.png","Untitled-4.png","Untitled-9.png",     ]
function next2(){
    i++
    if(i<pics2.length){
    document.getElementById('nike2').src=pics2[i]
    }
    else{
        i=0
    }
}

var i=1
var pics3=["","nike zoom.png","nike zoom1.png","nike zoom2.png"]
function next3(){
    i++
    if(i<pics3.length){
    document.getElementById('nike3').src=pics3[i]
    }
    else{
        i=0
    }
}
var i=1
var pic4=["","Untitled-8.png","delta1.png","delta2.png"]
function next4(){
    i++
    if(i<4){
    document.getElementById('nike4').src=pic4[i]
    }
    else{
        i=0
    }
}



