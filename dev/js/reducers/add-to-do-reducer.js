/**
 * Created by alexis-toma.ghillis on 1/20/2017.
 */


export default function (state=null, action){

}


function createJsObject(classArray) {
    var jsonObj = [], item = {};

    var taskName = document.querySelector("input[class='" + classArray[0] +"']");
    var taskDescription= document.querySelector("input[class='" + classArray[1] +"']");

    item["name"] = taskName;
    item["description"] = taskDescription;

    return jsonObj.push(item);

}