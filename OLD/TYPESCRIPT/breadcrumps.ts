var text1: string = "http://www.example.com/index/homePage/aboutus/";

function urlSplitter(text: string): any {
    const myArray1: string[] = text.split(".com"); //Array<string>
    const myArray: Array<string> = myArray1[1].split("/");

    var domain: string = myArray1[0] + ".com";
    console.log("Input: ", text);
    var breadCrumbString: string = "";
    for (var i: number = 0; i < myArray.length; i++) {
        if (myArray[i] == "") {
            myArray.splice(i, 1);
            //(index,no of items to remove)
        }
    }
    for (var i: number = 0; i < myArray.length; i++) {
        breadCrumbString += myArray[i] + " > ";
    }
    if (breadCrumbString[breadCrumbString.length - 2] == ">") {
        breadCrumbString = breadCrumbString.slice(0, -3);
    }

    var myPage: string = domain;
    var pages: string[] = [];

    var obj: any = { Folders: "", Url: "" };

    for (var i: number = 0; i < myArray.length; i++) {
        myPage += "/" + myArray[i];
        obj.Folders = myArray[i];
        obj.Url = myPage;
        pages.push(obj);
        obj = { Folders: "", Url: "" };
    }
    var breadcrumbs: any = { breadcrumbs: pages };

    return breadCrumbString;
}

var result = urlSplitter(text1);

console.log("Output: ", result);
