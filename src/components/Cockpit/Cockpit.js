import React from 'react';
import Radium from 'radium';

const cockpit = (props) => {
    const style = {
        backgroundColor: 'green',
        color: 'white',
        font: 'inherit',
        border: '6x solid blue',
        padding: '8px',
        cursor: 'pointer',
        ':hover': {
           backgroundColor: 'lightgreen',
           color: 'black'
        }
      }

      if (props.showPersons) {
        style.backgroundColor = 'red';
        style[':hover'] = {
         backgroundColor: 'lightred',
         color: 'black'
        }
      }

    let classes = []
   
    if (props.persons.length <=2){
      classes.push('red');
    }
 
    if (props.persons.length <=1){
     classes.push('bold');
   }

    return( 
    <div> 
        <h1>React App using AWS Amplify</h1>
        <p className={classes.join(' ')}>check it out!</p>
        <button style={style} onClick={props.clicked}>Toggle Persons</button>
    </div>)
}

export default Radium(cockpit);