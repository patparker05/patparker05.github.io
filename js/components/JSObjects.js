/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

"use strict";

function JSObjects() {

    function inject(what, id) {
        document.getElementsByClassName(id)[0].appendChild(what);
    }

    var teeTime1 = MakeTeeTime({
        course: "Jeffersonville Golf Club",
        time: new Date(),
        price: 45,
        image: "images/jeffersonville.jpg",
        style: "teeTimeStyle"
    });
    inject(teeTime1, "teeTimeStyle");

    var teeTime2 = MakeTeeTime({
        course: "Linfield National Golf Club",
        time: new Date(),
        price: 35,
        image: "images/linfield.jpg",
        style: "teeTimeStyle"
    });
    inject(teeTime2, "teeTimeStyle");

}

