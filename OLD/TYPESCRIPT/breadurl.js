var text1 = "http://www.example.com/index/homePage/aboutus/";
function urlSplitter(text) {
    var myArray1 = text.split(".com"); //Array<string>
    var myArray = myArray1[1].split("/");
    var domain = myArray1[0] + ".com";
    console.log("Input: ", text);
    var breadCrumbString = "";
    for (var i = 0; i < myArray.length; i++) {
        if (myArray[i] == "") {
            myArray.splice(i, 1);
            //(index,no of items to remove)
        }
    }
    console.log("myArray: ", myArray);
    for (var i = 0; i < myArray.length; i++) {
        if (i != myArray.length - 1) {
            breadCrumbString += myArray[i] + " > ";
        }
        else {
            breadCrumbString += myArray[i];
        }
    }
    var myPage = domain;
    var pages = [];
    var obj = { Folders: "", Url: "" };
    for (var i = 0; i < myArray.length; i++) {
        myPage += "/" + myArray[i];
        obj.Folders = myArray[i];
        obj.Url = myPage;
        pages.push(obj);
        obj = { Folders: "", Url: "" };
    }
    var breadcrumbs = { breadcrumbs: pages };
    console.log("breadcrumbs: ", breadcrumbs.breadcrumbs[0].Folders);
    return breadCrumbString;
}
var result = urlSplitter(text1);
console.log("Output: ", result);
