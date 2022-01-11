
let text: string = "http://www.example.com/index/homePage/aboutus/";

function urlSplitter(text: string): any {
    const myArray1: string[] = text.split(".com");     //Array<string>
    const myArray: Array<string> = myArray1[1].split("/");

    var domain: string = myArray1[0] + ".com";
    console.log("Input: ", text);

    for (var i: number = 0; i < myArray.length; i++) {
        if (myArray[i] == "") {
            myArray.splice(i, 1); //(index,no of items to remove)
        }
    }
    var myPage: string = domain;
    var pages: string[] = [];


    var obj: any = { "Folders": "", "Url": "" }

    for (var i: number = 0; i < myArray.length; i++) {
        myPage += "/" + myArray[i];
        obj.Folders = myArray[i];
        obj.Url = myPage;
        pages.push(obj);
        obj = { Folders: "", Url: "" };
    }
    var breadcrumbs: any = { breadcrumbs: pages };

    return breadcrumbs
}

var result = urlSplitter(text)

console.log("Output: ", result)
