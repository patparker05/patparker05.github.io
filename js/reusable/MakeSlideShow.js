/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function MakeSlideShow(picList) {

    var slideShow = document.createElement("div");

    var div = document.createElement("div");
    slideShow.appendChild(div);

    var myImage = document.createElement("img");
    div.appendChild((myImage));

    var caption = document.createElement("span");
    div.appendChild(caption);

    var backButton = document.createElement("button");
    backButton.innerHTML = " &lt; ";
    slideShow.appendChild(backButton);

    var fwdButton = document.createElement("button");
    fwdButton.innerHTML = " &gt; ";
    slideShow.appendChild(fwdButton);
    
    slideShow.className = "slideShow";

    var picNum = 0;
    setPic();
    setCaption();

    function setPic() {
        myImage.src = picList[picNum].pic;
    }

    function setCaption() {
        caption.innerHTML = picList[picNum].name;
    }

    function nextPic() {

        if (picNum < picList.length - 1) {
            picNum++;
        }
        setPic();
        setCaption();
    }

    function prevPic() {

        if (picNum > 0) {
            picNum--;
        }
        setPic();
        setCaption();
    }

    backButton.onclick = prevPic;
    fwdButton.onclick = nextPic;

    slideShow.setPicNum = function (newNum) {
        if ((newNum >= 0) && (newNum < picList.length)) {
            picNum = newNum;
            // change the src attribute of the image element to the desired new image)				
            setPic();
            setCaption();
        }
    };

    slideShow.addPic = function (newPic) {

    };

    return slideShow;
}
