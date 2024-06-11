// Generics 

// generics are defined with <>  symbol

function myFunc<T>(input: T): T {
    return input;
}

// ue can specify the input interface manually if we need
const result = myFunc<{
    name: string;
}>({
    name:"Arefin",
})

const resultTwo = myFunc<string[]>(["Arefin"]);

// generics is really powerfull specially when we creating own libraries 
