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
