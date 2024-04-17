export const makeBatchCall = async (contractInstance, methods) => {
    let result = [];
    for (const method of methods) {
        let methodToCall;
        if (method.args) {
            methodToCall = await contractInstance.methods[method.methodName].apply(null, method.args);
        } else {
            methodToCall = await contractInstance.methods[method.methodName]();
        }
        try {
            const response = await methodToCall.call(method.opts);    
            result.push(response);
        }catch (error) {
            console.log('error :', error)
        }
        // console.log("response",method.methodName,response,method.opts);
    }
    return result;
}