/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function home() {
    var content = `
        <h2>Welcome to Full Swing!</h2>
        <p>
            With Full Swing, you no longer have to worry about the hassle of trying to book a tee time
            weeks in advance. Full Swing offers thousands of tee times at golf courses around the world.
            In addition to our huge catalog of courses, we also get you the best deals on the hottest times.
            Start searching for your next tee time now!
        </p>
        `;
    

    var ele = document.createElement('div');
    ele.innerHTML = content;
    return ele;
}

function homeImage() {
    var image =`
        <img src="images/searchImg.jpg" />
        `;
    
    var imgEle = document.createElement('div');
    imgEle.innerHTML = image;
    return imgEle;
}
