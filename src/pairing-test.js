class grid {

  constructor(rows, columns){
    this.rowCount = rows;
    this.columnCount = columns;
    this.data = [];
    this.robot = [];
    this.create();
  }

  create(){
    for (let i = 0; i < this.rowCount; i++) {
      this.data[i] = [];
      for (let j = 0; j < this.columnCount; j++) {
        this.data[i].push(0);
      }
    }
  }

  addRobot(row, column) {
    if (this.robot.length > 0) {
      return false;
    }

    this.data[row][column] = 'X';
    this.robot = [row, column];
  }

  // fetchRobot() {
  //   let robotCoord = [];

  //   for (let i = 0; i < this.rowCount; i++) {
  //     for (let j = 0; j < this.columnCount; j++) {
  //       if (data[i][j] === 'X') {
  //         return [i, j];
  //       }
  //     }
  //   }     
  // }
  
  //N, E, S, W
  move(position) {

    if (position === 'N') {
      if (this.robot[0] == 0) {
        return false;
      } else {
        this.data[this.robot[0]][this.robot[1]] = 0;

        let newRowCord = this.robot[0]+1;
        console.log('-----this.data---', this.data[newRowCord]);
        this.data[newRowCord][this.robot[1]] = 'X';
        this.robot[0] += 1;
      } 
    }

    if (position === 'S') {
      if (this.robot[0] == 9) {
        return false;
      } else {
        this.data[this.robot[0]][this.robot[1]] = 0;
        this.data[this.robot[0]-1][this.robot[1]] = 'X';
        this.robot[0] -= 1;
      } 
    }

    if (position === 'E') {
      if (this.robot[1] == 9) {
        return false;
      } else {
        this.data[this.robot[0]][this.robot[1]] = 0;
        this.data[this.robot[0]][this.robot[1]+1] = 'X';
        this.robot[1] += 1;
      } 
    }

    if (position === 'W') {
      if (this.robot[1] == 0) {
        return false;
      } else {
        this.data[this.robot[0]][this.robot[1]] = 0;
        this.data[this.robot[0]][this.robot[1]-1] = 'X';
        this.robot[1] -= 1;
      } 
    }

  }

}

// //SET CONSTANTS HERE FOR MY TEST
// const classParamOne = false, classParamTwo = true;

// //INITIATE INSTANCE OF CLASS
let newWarehouse = new grid(10, 10);
let command = 'N E N E N E N E';

//FUNCTION TO DEFINE TEST
executeFunction = () => {
    
    newWarehouse.addRobot(9, 0);
    
    let commandArray = command.split('');
    
    for (let i = 0; i < commandArray.length; i++) {
      newWarehouse.moveRobot(commandArray[i]);
    } 

    return [newWarehouse.robot[0], newWarehouse.robot[1]];

    //N E S W = string
    // return newClass.classFunction();
}

const finishPositionOfRobot = executeFunction();


module.exports = {
    grid
};
