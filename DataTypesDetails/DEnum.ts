/*
Enum allow us to declare a set of named constants i.e. a collection of related values that can be 
numeric or string values.

There are three types of enums:
    1. Numeric enum
    2. String enum
    3. Heterogeneous enum
*/

// Numeric enum
enum PrintMedia {
    Newspaper,
    Newsletter,
    Magazine,
    Book
  }
  console.log(PrintMedia)

  // String enum

  enum PrintMedia2 {
    Newspaper = "NEWSPAPER",
    Newsletter = "NEWSLETTER",
    Magazine = "MAGAZINE",
    Book = "BOOK"
}
console.log(PrintMedia2)

// Access String Enum 
PrintMedia.Newspaper; //returns NEWSPAPER
PrintMedia['Magazine'];//returns MAGAZINE

  // Enum as Return Type

  enum PrintMedia1 {
    Newspaper = 1,
    Newsletter,
    Magazine,
    Book
}

function getMedia(mediaName: string): PrintMedia {
    if (  mediaName === 'Forbes' || mediaName === 'Outlook') {
        return PrintMedia.Magazine;
    }
 }

let mediaType: PrintMedia = getMedia('Forbes'); // returns Magazine
console.log(mediaType)