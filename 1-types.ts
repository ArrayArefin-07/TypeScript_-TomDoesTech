// types and interfaces


// -----------interfaces---------

interface MyInterface {
    property1?: string;
    property2: number;
    property3: boolean;
}

interface MyInterfaceThree {
    property5?: boolean;
}

interface MyInterfaceTwo extends MyInterface, MyInterfaceThree {
    prppert4: string;
}

async function myFunction(input:MyInterfaceTwo): Promise<MyInterface> {
    return input;
    
}


// ------------- type----------

type MyType = {
    property1: string;

}

// can't extend interface randomly 
// we can include by using & symbol
type MyTypeTwo = {
    property2: boolean;
    property3: MyEnum
} & MyType;

//enumerators 
// enum are js object

enum MyEnum{
    enumOne = 'enumOne',
    enumTwo = 'enumTwo'
}


async function myFunction(input:MyTypeTwo): Promise<MyTypeTwo> {
    return input;
    
}

// enum is javascript object so call it in this way
Object.values(MyEnum).map