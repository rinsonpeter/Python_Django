var text1: string = "http://www.example.com/index/homePage/aboutus/";

function urlSplitter(text: string): any {
    const myArray1: string[] = text.split(".com"); //Array<string>
    const myArray: Array<string> = myArray1[1].split("/");

    var domain: string = myArray1[0] + ".com";
    var myPage: string = domain;
    var pages: string[] = [];
    var obj: any = { Folders: "", Url: "" };
    var res: string = "";

    console.log("Input: ", text);
    console.log("myArray: ", myArray);
    var breadCrumbString: string = "";
    for (var i: number = 0; i < myArray.length; i++) {
        console.log("myArray[i]:::: ", myArray[i]);
        if (myArray[i] == "") {
            myArray.splice(i, 1);   //(index,no of items to remove)
            if (i != myArray.length - 1) {
                i-=1;
            }
            console.log("myArray: ", myArray);
            continue;
        }
        else{
            console.log("myArray[i]****", myArray[i]);
            myPage += "/" + myArray[i];
            res += '<a href="' + myPage + '"' + 'target="_blank"' + '>' + myArray[i] + '</a>'
        }
        if (i != myArray.length - 1 && myArray[i] != "") {
            res += " > "
        }
    }
    return res;
}
var result: any = urlSplitter(text1);
console.log("Output: ", result);
