interface MyInterface1 {
    property11: string;
    property22?: number;
    property33?: boolean;
}

const obj: Partial<MyInterface1> = {};

const objTwo: Omit<MyInterface1, 'property3' | 'property2'> = {
    
}

