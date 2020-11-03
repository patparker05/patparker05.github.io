/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function users() {

    var tableDiv = document.createElement("div");
    tableDiv.className = "clickSort";

    ajax("json/users.json", getUsers, tableDiv);

    function getUsers(userList) {
        var tableList = [];
        for (var i = 0; i < userList.length; i++) {
            tableList[i] = {};
            tableList[i].Image = "<img  src='" + userList[i].image + "' style='width:12rem'>";
            tableList[i].UserEmail = userList[i].userEmail;
            tableList[i].Birthday = userList[i].birthday;
            tableList[i].MembershipFee = userList[i].membershipFee;
            tableList[i].Role = userList[i].userRoleId + " " + userList[i].userRoleType;
        }

        var table = makeTable(tableList);
        tableDiv.appendChild(table);
    }

    return tableDiv;
}

