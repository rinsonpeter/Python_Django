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
    console.log("myArray: ", myArray);

    for (var i: number = 0; i < myArray.length; i++) {
        if(i!=myArray.length-1){
            breadCrumbString += myArray[i] + " > ";
        }
        else{
            breadCrumbString += myArray[i];
        }
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
    //console.log("breadcrumbs: ", breadcrumbs.breadcrumbs[0].Folders);

    return breadCrumbString;
}

var result = urlSplitter(text1);

console.log("Output: ", result);
