/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function courses() {

    var tableDiv = document.createElement("div");
    tableDiv.className = "clickSort";

    ajax("json/courses.json", getCourses, tableDiv);

    function getCourses(courseList) {
        var table = makeTable(courseList);
        tableDiv.appendChild(table);
    }

    return tableDiv;
}