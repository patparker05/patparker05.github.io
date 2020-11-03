/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function MakeTeeTime (params) {
    
    var teeTimeObj = document.createElement("div");
    
    var course = params.course;
    var time = params.time || "None";
    teeTimeObj.price = params.price || 0;
    var image = params.image;
    teeTimeObj.classList.add(params.style);
    
    function display() {
        teeTimeObj.innerHTML = "Course: " + course + "<br> Time: " + time.toLocaleString() + "<br> Price: " + 
                formatCurrency(teeTimeObj.price) + "<br> <img src=" + image + ">" + "<br><br>";
    };
    
    teeTimeObj.setCourse = function(newCourse) {
        course = newCourse;
        display();
    };
    
    
    teeTimeObj.setTime = function(newTime) {
        time = newTime;
        display();
    };
    
    teeTimeObj.setPrice = function(newPrice) {
        teeTimeObj.price = newPrice;
        display();
    };
    
    teeTimeObj.onclick = function() {
        time.setMinutes(time.getMinutes() + 15);
        console.log("click");
        display();
    };
    
    function formatCurrency(num) {
        return num.toLocaleString("en-US", {style: "currency", currency: "USD", minimumFractionDigits: 2});
    }
    
    display();
    return teeTimeObj;
}
