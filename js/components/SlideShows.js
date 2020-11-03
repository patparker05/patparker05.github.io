/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function SlideShows() {

    var slideShowDiv = document.createElement("div");
    slideShowDiv.className = "slideShowContainer";

    ajax("json/cars.json", getCarItems, slideShowDiv);

    function getCarItems(carList) {
        for (var i = 0; i < carList.length; i++) {
            carList[i].pic = carList[i].image;
            carList[i].name = carList[i].make;
            console.log("image " + i + " " + carList[i].image);
            console.log("name " + i + " " + carList[i].make);
        }
        var slideShow = MakeSlideShow(carList);
        slideShowDiv.appendChild(slideShow);
        slideShow.setPicNum(0);
    }

    ajax("json/users.json", getUserItems, slideShowDiv);

    function getUserItems(userList) {
        for (var i = 0; i < userList.length; i++) {
            userList[i].pic = userList[i].image;
            userList[i].name = userList[i].userEmail;
        }
        var slideShow = MakeSlideShow(userList);
        slideShowDiv.appendChild(slideShow);
        slideShow.setPicNum(0);
    }
    
    return slideShowDiv;
}
