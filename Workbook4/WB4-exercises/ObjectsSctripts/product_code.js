"use strict"





function parsePartCode(_str) {

    //parsing before : .
    let colon = _str.indexOf(":");
    let _code = _str.slice(0, colon);

    let dash = _str.indexOf("-");
    let _pNumber = _str.slice(colon + 1, dash);

    let Size = _str.slice(dash + 1);

    let object1 = {
        supplierCode: _code,
        productNumber: _pNumber,
        size: Size
    }
    return object1;
}

//call func with different objects.
let dataSet1 = "XYZ:1234-Large";
let result = parsePartCode(dataSet1);
console.log(`
    Supplier code: ${result.supplierCode} 
    Product number: ${result.productNumber} 
    Size: ${result.size}`);