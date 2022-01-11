var text1 = "http://www.example.com/index/homePage/aboutus/";
function urlSplitter(text) {
    var myArray1 = text.split(".com"); //Array<string>
    var myArray = myArray1[1].split("/");
    var domain = myArray1[0] + ".com";
    console.log("Input: ", text);
    var breadCrumbString = "";
    for (var i = 0; i < myArray.length; i++) {
        if (myArray[i] == "") {
            myArray.splice(i, 1); //(index,no of items to remove)
        }
    }
    var myPage = domain;
    var pages = [];
    var obj = { Folders: "", Url: "" };
    var res = "";
    for (var i = 0; i < myArray.length; i++) {
        myPage += "/" + myArray[i]; //myPage = http://www.example.com + / + index 
        obj.Folders = myArray[i];
        obj.Url = myPage;
        pages.push(obj);
        obj = { Folders: "", Url: "" };
        res += '<a href="' + pages[i]['Url'] + '"' + " " + 'target="_blank"' + '>' + pages[i]['Folders'] + '</a>';
        if (i != myArray.length - 1) {
            res += " > ";
        }
    }
    return res;
}
var result = urlSplitter(text1);
console.log("Output: ", result);
