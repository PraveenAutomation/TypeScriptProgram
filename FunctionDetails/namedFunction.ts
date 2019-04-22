// Named function:
function display()
{
    console.log("Named Function in TS")
}

display();

// Function with Parameter and Return Types
function sum(a:number,b:number)
{
    return a+b
}
console.log(sum(2,3))

function getNumber(): number {
    return Math.random();
  }
  
  // calling
  console.log("Random number: " + getNumber());

  //  Anonymous Function
  let greeting = function()
  {
      console.log("Fun without name!")
  }
  greeting()

  //  Anonymous Function with Paramter and Return Types
  let subSum = function(x:number,y:number)
  {
      if(x>y)
      {
          return x-y
      }
      else
      {
        return x+y
      }
  }
  console.log(subSum(5,10))

  // Optional parameter
  function optionalpara(Name1:string,Name2:string,Name3?:string,Name4?:string):string
  {
    return Name1+' '+Name2+' '+Name3+' '+Name4
  }
  console.log(optionalpara('Jai','Mata','Di!!'))