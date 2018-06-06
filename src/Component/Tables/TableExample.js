import React from 'react';

export default class TableExample extends React.Component {

createTable = () => {
    let table = []
    var tdKey = 0;
    // Outer loop to create parent
    for (let i = 0; i < 5; i++) {
        let children = []
        //Inner loop to create children
        for (let j = 0; j < 3; j++) {
        children.push(<td key={tdKey}>{`Column ${j + 1}`}</td>)
        tdKey++;
        }
        //Create the parent and add the children
        table.push(<tr key={tdKey}>{children}</tr>)
    }
    return table
}


    render(){
        return(
            <tbody>{this.createTable()}</tbody>    
        )
    }
}