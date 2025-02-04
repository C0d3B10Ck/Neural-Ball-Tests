/* 
Object for Neural network. This will be used for each player during runtime. 
Once every couple of iterations (or by button press) the brains will be stored in a file to be read later.
*/



// Input variables, data from Movement.js
let VelX = 0.0;
let VelY = 0.0;
let PosX = 0.0;
let PosY = 0.0;

let TVelX = 0.0;
let TVelY = 0.0;
let TPosX = 0.0;
let TPosY = 0.0;

//Output variables
let AccelX = 0;
let AccelY = 0;


//array containing the bias values for each level of the Neural network.
let BiasArray = [

]
// initaiate values from Movemnt.js
let NodesInput = [
VelX, VelY, PosX, PosY, TVelX, TVelY, TPosX, TPosY
]
let NodesOutput = [
Target 
]

let FirstNodes = [

]
let SecondNodes = [

]
let ThirdNodes = [

]

let ArrLengths = [NodesInput.length, FirstNodes.length, SecondNodes.length, ThirdNodes.length, NodesOutput.length]; // for the array length values
let ArrArraNodes = [NodesInput, FirstNodes, SecondNodes, ThirdNodes, NodesOutput];
let NeuralPosCount = 0; 

//ensures the loop doesnt over run. 
  

for (let step = 0; step > ArrLengths[NeuralPosCount]; step++) { 
  for (let SecondStep = 0; SecondStep > ArrLengths[NeuralPosCount + 1]; SecondStep++) {


  }
  NeuralPosCount++; 
  if (NeuralPosCount >= (ArrLengths.length - 1) ) {
    console.log('Man, check your loop logic, using break as a fallback is lame!');
    break; 
   };

}