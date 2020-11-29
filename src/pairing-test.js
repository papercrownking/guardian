
class exampleClass {

  constructor(param1, param2){
    this.param1 = param1;
    this.param2 = param2;
  }

  classFunction(){
    return true;
  }
}

//SET CONSTANTS HERE FOR MY TEST
const classParamOne = false, classParamTwo = true;

//INITIATE INSTANCE OF CLASS
let newClass = new exampleClass(classParamOne, classParamTwo);

//FUNCTION TO DEFINE TEST
executeFunction = () => {
    return newClass.classFunction();
}

executeFunction();

module.exports = {
    exampleClass,
    executeFunction
};
