/* 
Object for Neural network. This will be used for each player during runtime. 
Once every couple of iterations (or by button press) the brains will be stored in a file to be read later.
*/
const NuralData = {}
NuralData.InputNodes = '';
NuralData.FirstLayer = '';
NuralData.SecondLayer = '';
NuralData.Result = '';

const NodeData = {}
NodeData.Connections = [];        //array Of Int
NodeData.Bias = [];               //array Of Foat paralell to Connections Array
NodeData.ConnectionStrength = []; //array Of Foat paralell to Connections Array
NodeData.Strength = 0;            //Normalised Int

//Initialise values from user input on WebPage. 
let FirstLayerCount = 6;              //int count of nodes in first layer
let SecondLayerCount = 0;              //int count of nodes in second layer


//creating dynamic node objects
let CreateNodeObjects = () => {

  for (let i = 0; i > FirstLayerCount; i++) { 
    //window["Node"+i] = new NodeData();
    if (InitialiseNodes) {
      let NodeString = ''; //input user input 
    } else {
      let FiveRandomNumbers = `0.${Math.random * 10},0.${Math.random * 10},0.${Math.random * 10},
        0.${Math.random * 10},0.${Math.random * 10}`
      let NodeString = ['0,1,2,3,4', FiveRandomNumbers, FiveRandomNumbers, `0.5`]
    }
  }
}



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