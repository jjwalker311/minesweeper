import React, {Component} from 'react';

export default class Square extends React.Component {

    isMine(){
        return !!this.props.data.isMine;
    }

    renderDetails(){
        if (!this.isMine() && (this.props.data.surroundingMines > 0) && this.props.data.displayMode === 2){
            //NOT a mine and user has clicked twice, display
            return <div> {this.props.data.surroundingMines || ''} </div>
        } else if (this.props.data.displayMode === 1){
            //Square has been flagged
            return <div className='flagged'>F</div>
        } else {
            //vanilla state
            return <div className='vanilla'></div>
        }
    }

    render (){
        return (
            <th className={
                    this.isMine() ? 'mine' : ''
                }>
                {this.renderDetails()}
            </th>
        )
    }

}