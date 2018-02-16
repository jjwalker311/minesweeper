import {gameConstants} from '../constants';


// PRIVATE FUNCTIONS

/**
 * Creates a random array of mines, based on the squares available
 */
const _createRandomMineIds = () => {
    let arrayOfMines = [];

    const totalSquares = gameConstants.height * gameConstants.width,
    
    /**
     * Recursive function to add a random Id to Array
     * If it's already there, lets go round again
     */
    _addRandomMine = ()=> {
        const randomId = Math.floor(Math.random() * totalSquares);

        if (!arrayOfMines.includes(randomId)){
            //not added let, then add to the array
            arrayOfMines.push(randomId);
        } else {
            //it's already added, lets try again
            _addRandomMine();
        }
    }

    for (let i=0; i < gameConstants.numberOfMines; i++){
        //create a mine and add to the array 
        _addRandomMine();
    }

    return arrayOfMines;
},

/**
 * For a given square, itterate around 8 surrounding cells and increment the mines, return this value
 * @param  {} data
 * @param  {} i
 * @param  {} j
 */
_searchSurroundingMines = (data, i, j) => {
    let count = 0;

    //I.e. if i=1 and j=1, we check ->
    //data[0][0],[0][1],[0][2]
    //data[1][0],[1][0],[1][2]
    //data[2][0],[2][0],[2][2]

    //Note self can NEVER be a mine, so don't care

    for (let k = (i-1); k <= (i+1); k++){
        for (let l = (j-1); l <= (j+1); l++){

            if (!!data[k] && !!data[k][l] && (data[k][l].isMine === true)){
                count++;
            }
        }
    }   
    
    return count;
},

/**
 * @param  {} data
 */
/**
 * Itterates around all square, and updates the "surrounding mines"
 * @param  {} data
 */
_findSurroundingMines = (data) => {
    for (let i = 0; i < data.length; i++){
        for (let j = 0; j < data[i].length; j++){
            data[i][j].surroundingMines = _searchSurroundingMines(data, i, j);
        }
    }   
    
    return data;
},

// PUBLIC FUNCTIONS

/**
 * Function to create a random array of Mines
 * Create an array of Arrays for Squares in the game
 * Inidicate what is/is not a mine
 */
initialBoardData = () => {
    let data = [],uniqueId = 0;
    const randomMines = _createRandomMineIds(); 
    for (let i = 0; i < gameConstants.height; i++){
            //create given row, need to itterate to create collumn data
            data.push([])
            for (let j = 0; j < gameConstants.height; j++){
                //Add our square data
                data[i].push(
                    {
                        key : uniqueId,
                        isMine : !!randomMines.includes(uniqueId), 
                        surroundingMines : 0,
                        displayMode : 2
                    }
                );
                uniqueId++;
            } 
    }
    return _findSurroundingMines(data);
};

export  { initialBoardData }