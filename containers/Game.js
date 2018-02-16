import React, {Component} from 'react';
import * as utils from  '../utils';
import Square from '../components/Square';


export default class Board extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            squares : utils.initialBoardData()
        }        
    }

    makeSquares = ()=>{

        const renderSquare = (props, uniqueId)=> {
            console.log(JSON.stringify(props))
            return <Square data={props} key={props.key}/>
        }

        return (
            <table><tbody>
                    {this.state.squares.map(function(row, rowIndex){
                        return (
                            <tr key={rowIndex}>
                                {row.map(function(square, squareIndex){
                                    return renderSquare(square);
                                })}
                            </tr>
                        );
                    })}
            </tbody></table>
        )    
    }

    render (){
        return this.makeSquares();        
    }

}