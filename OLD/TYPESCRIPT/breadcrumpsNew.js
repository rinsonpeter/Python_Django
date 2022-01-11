var text1 = "http://www.example.com/index/homePage/aboutus/";
function urlSplitter(text) {
    var myArray1 = text.split(".com"); //Array<string>
    var myArray = myArray1[1].split("/");
    var domain = myArray1[0] + ".com";
    var myPage = domain;
    var pages = [];
    var obj = { Folders: "", Url: "" };
    var res = "";
    console.log("Input: ", text);
    console.log("myArray: ", myArray);
    var breadCrumbString = "";
    for (var i = 0; i < myArray.length; i++) {
        console.log("myArray[i]:::: ", myArray[i]);
        if (myArray[i] == "") {
            myArray.splice(i, 1); //(index,no of items to remove)
            if (i != myArray.length - 1) {
                i -= 1;
            }
            console.log("myArray: ", myArray);
            continue;
        }
        else {
            console.log("myArray[i]****", myArray[i]);
            myPage += "/" + myArray[i];
            res += '<a href="' + myPage + '"' + 'target="_blank"' + '>' + myArray[i] + '</a>';
        }
        if (i != myArray.length - 1 && myArray[i] != "") {
            res += " > ";
        }
    }
    return res;
}
var result = urlSplitter(text1);
console.log("Output: ", result);
