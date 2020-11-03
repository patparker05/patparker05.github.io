/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function drop(clickedEle) {

    // console.log("clickedEle on next line");
    // console.log(clickedEle);

    // getElementsByClassName returns an array - add [0] to access the first element of that array.
    var nextEle = clickedEle.parentElement.getElementsByClassName("dropContent")[0];
    // console.log("nextEle on next line");
    // console.log(nextEle);

    if (nextEle.classList.contains("show")) {
        hide(nextEle);
    } else {
        show(nextEle);
    }


    /* Note: I could have just added and removed class "show" (and not even have a "hide" class) 
     * but I wanted to also animate the dropcontents as they leave the screen...  */
    function hide(ele) {
        ele.classList.remove("show");
        ele.classList.add("hide");
    }

    function show(ele) {
        ele.classList.remove("hide");
        ele.classList.add("show");
    }

} // end function dropdown

function inject(text, img) {
    document.getElementById("content").innerHTML = "";
    document.getElementById("content").appendChild(text);
    
    document.getElementsByClassName("column33")[0].innerHTML = "";
    document.getElementsByClassName("column33")[0].appendChild(img);
}

