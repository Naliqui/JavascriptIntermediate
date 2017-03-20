var isPlay = false , isMute = false, hour = 0, min = 0, sec = 0;
$("video").addEventListener('timeupdate', clock); 
$("video").onended = function(){
    isPlay = false;
    $("video-replay").style.display = "block"; 
    $("video-poster").style.display = "block";        
}
$("video").onerror = function() {
    $("video-error").style.display = "block"; 
};
function $(item){
    var itemback = document.getElementById(item);
    return itemback;
}

function toggle() {
    if(isPlay){
        $("video").pause();
        isPlay = false;
        $("video-play").style.opacity = "1"; 
        $("play-btn").className = "fa fa-pause fa-lg"; 
    }else{
        $("video").play();
        isPlay = true;
        $("video-play").style.opacity = "0";        
        $("video-poster").style.display = "none";   
        $("video-replay").style.display = "none";      
        $("play-btn").className = "fa fa-play fa-lg";
    }
}

function stop(){
    $("video").load();
    $("progress-bar").value = 0;  
    $("video-play").style.opacity = "1"; 
    $("video-poster").style.display = "block";        
    isPlay = false;     
}

function replay(){
    $("video").load();
    $("video").play();
    $("progress-bar").value = 0;  
    $("video-poster").style.display = "none";   
    $("video-replay").style.display = "none";      
     isPlay = true;     
}

function mute(){
    if(isMute){
        $("video").volume = 1;
        $("mute-btn").className = "fa fa-volume-up fa-lg";        
        isMute = false;
    }else{
        $("video").volume = 0;
        $("mute-btn").className = "fa fa-volume-off fa-lg";        
        isMute = true;        
    }
}

function clock(){
    sec++;
    if(sec === 60){min++; sec = 0}
    if(min === 60){hour++}
    $("video-timer").innerHTML = ("0" + hour).slice(-2)+":"+("0" + min).slice(-2)+":"+("0" + sec).slice(-2);
    $("progress-bar").value = Math.round((100/$("video").duration)*$("video").currentTime);
    $("progress-bar").disabled = true;
}