const string = "http://www.example.info/index/homePage/aboutus/";
const substring = ['.com', '.net', '.org', '.info','ca'];

mainSplitter="";

//check if the string contains the substring    
for (var i = 0; i < substring.length; i++) {
    if (string.indexOf(substring[i]) != -1) {
        mainSplitter = substring[i];
        break;
    }
}
console.log("mainSlptter: ",mainSplitter);

// const string = "foo";
// const substring = "oo";

// console.log(string.includes(substring)); // true







