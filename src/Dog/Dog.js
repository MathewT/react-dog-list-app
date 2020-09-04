import React from 'react';


const dog = (props) => {

  return (
    <div>
      <p>hello, my name is {props.name}.</p> 
      <p>I am {props.age} years old. </p>
      <p>I am the {props.breed} dog.</p>
      <button onClick={props.deleteClick}>Delete {props.name}</button>
      <input type="text" onChange={props.nameChangedHandler} value={props.name} />
    </div>
  );
};

export default dog;