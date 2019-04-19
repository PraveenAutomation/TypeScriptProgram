/*
Enum allow us to declare a set of named constants i.e. a collection of related values that can be
numeric or string values.

There are three types of enums:
    1. Numeric enum
    2. String enum
    3. Heterogeneous enum
*/
// Numeric enum
var PrintMedia;
(function (PrintMedia) {
    PrintMedia[PrintMedia["Newspaper"] = 0] = "Newspaper";
    PrintMedia[PrintMedia["Newsletter"] = 1] = "Newsletter";
    PrintMedia[PrintMedia["Magazine"] = 2] = "Magazine";
    PrintMedia[PrintMedia["Book"] = 3] = "Book";
})(PrintMedia || (PrintMedia = {}));
console.log(PrintMedia);
// String enum
var PrintMedia2;
(function (PrintMedia2) {
    PrintMedia2["Newspaper"] = "NEWSPAPER";
    PrintMedia2["Newsletter"] = "NEWSLETTER";
    PrintMedia2["Magazine"] = "MAGAZINE";
    PrintMedia2["Book"] = "BOOK";
})(PrintMedia2 || (PrintMedia2 = {}));
console.log(PrintMedia2);
// Access String Enum 
PrintMedia.Newspaper; //returns NEWSPAPER
PrintMedia['Magazine']; //returns MAGAZINE
// Enum as Return Type
var PrintMedia1;
(function (PrintMedia1) {
    PrintMedia1[PrintMedia1["Newspaper"] = 1] = "Newspaper";
    PrintMedia1[PrintMedia1["Newsletter"] = 2] = "Newsletter";
    PrintMedia1[PrintMedia1["Magazine"] = 3] = "Magazine";
    PrintMedia1[PrintMedia1["Book"] = 4] = "Book";
})(PrintMedia1 || (PrintMedia1 = {}));
function getMedia(mediaName) {
    if (mediaName === 'Forbes' || mediaName === 'Outlook') {
        return PrintMedia.Magazine;
    }
}
var mediaType = getMedia('Forbes'); // returns Magazine
console.log(mediaType);
