var text1: string = "http://www.example.com/index/homePage/aboutus/";

function urlSplitter(text: string): any {
    const myArray1: string[] = text.split(".com"); //Array<string>
    const myArray: Array<string> = myArray1[1].split("/");
    var domain: string = myArray1[0] + ".com";
    console.log("Input: ", text);
    var breadCrumbString: string = "";
    for (var i: number = 0; i < myArray.length; i++) {
        if (myArray[i] == "") {
            myArray.splice(i, 1);  //(index,no of items to remove)
        }
    }
    var myPage: string = domain;
    var pages: string[] = [];
    var obj: any = { Folders: "", Url: "" };
    var res: string = "";
    for (var i: number = 0; i < myArray.length; i++) {
        myPage += "/" + myArray[i]; //myPage = http://www.example.com + / + index 
        obj.Folders = myArray[i];
        obj.Url = myPage;
        pages.push(obj);
        obj = { Folders: "", Url: "" };
        res += '<a href="' + pages[i]['Url'] + '"'+" " +'target="_blank"'+ '>' + pages[i]['Folders'] + '</a>'
        if (i != myArray.length - 1) {
            res += " > "
        }
    }
    return res;
}
var result: any= urlSplitter(text1);
console.log("Output: ", result);
