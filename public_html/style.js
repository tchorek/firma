/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function zmien(motyw) {
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", "newXMLDocument.xml", true);
    xhttp.send();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200)
        {
            cz(this, motyw);
        }
    };
}

function cz(xml, motyw) {
    var i;
    var xmlDoc = xml.responseXML;
    var x = xmlDoc.getElementsByTagName(motyw);
    for (i = 0; i < x.length; i++) {
        var div = document.getElementById('strona');
        div.style.background = x[i].getElementsByTagName("backgroundColor")[0].childNodes[0].nodeValue;
        div.style.color = x[i].getElementsByTagName("fontColor")[0].childNodes[0].nodeValue;
        div.style.fontFamily = x[i].getElementsByTagName("fontFamily")[0].childNodes[0].nodeValue;
        div.style.fontSize = x[i].getElementsByTagName("fontSize")[0].childNodes[0].nodeValue;
    }

    for (j = 0; j < x.length; j++) {
        var div = document.getElementById('h');
        div.style.color = x[j].getElementsByTagName("fontColor")[1].childNodes[0].nodeValue;
        div.style.fontSize = x[j].getElementsByTagName("fontSize")[1].childNodes[0].nodeValue;
    }
}