// execution context test
function baseFunction(testFunc2){
    let a = 20;
    {
        let b = 30;
 
        function testFunc1(c) {
            let d = 50;
            console.log(d);
            console.log(c);
            console.log(b);
            console.log(a);
        }
 
        console.log('before execution');
        testFunc1(40);
        testFunc2(40);
    }
}
 
baseFunction(testFunc2);
 
function testFunc2(c){
    let d = 50;
    console.log(d);
    console.log(c);
    console.log(b);
    console.log(a);
}
 
// execution context example structure
let globalExecutionContext = {};
let baseFunctionExecutionContext = {
    variableObj: {
        a: 20,
        testFunc1: function () { }, // location of testFunc1 in memory, parsed in creation step
        testFunc2: function () { }, // location of testFunc2 in memory
        arguments: {
            0: testFunc2, // then location of testFunc2 in memory
            length: 1
        }
    },
    scopeChain: [globalExecutionContext],
    this: global
}
 
let testFunc1ExecutionContext = {
    variableObj: {
        c: 40,
        d: undefined, // not defined -> then 50
        arguments: {
            0: 40,
            length: 1
        }
    },
    // the scopeChain is built AT FUNCTION DECLARATION, NOT EXECUTION
    scopeChain: [
        baseFunctionExecutionContext, // technically this is baseFunctionExecutionContext.variableObj
        globalExecutionContext
    ],
    // Arrow functions, do not have 'this', instead they check up the scope chain for 'this'
    // 'this' is EVALUATED AT EXECUTION, NOT DECLARATION
    this: global
}
 
let testFunc2ExecutionContext = {
    variableObj: {
        c: 40,
        d: undefined, // not defined -> then 50
        arguments: {
            0: 40,
            length: 1
        }
    },
    scopeChain: [
        globalExecutionContext
    ],
    this: global
}