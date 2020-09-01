function func1(){

    // Expend "Show More" botton
    document.getElementsByClassName("more-button style-scope ytd-video-secondary-info-renderer")[0].click()
    setTimeout(func2, 4000)

}

function func2(){
    layer1 = document.getElementsByClassName("sticky style-scope ytd-video-secondary-info-renderer")

    layer2 = layer1.querySelector("#collapsible");

    layer3 = layer2.querySelector(".style-scope ytd-metadata-row-renderer");

    content = layer3.querySelector("#content");

    video_class = content.children

    console.log("Found: "+video_class[0].innerText); // show the class of current video

    // If the video is no in the class of education, redirect to no waste time website
    if(video_class[0].innerText!="Education"){
        window.location.href='https://www.azquotes.com/quotes/topics/not-wasting-time.html';
        alert("Stop watching video! Don't waste your time!");
    }
}

setTimeout(func1, 5000)
