import React, { useState } from 'react';

const Item = props => {
  // const [item, setItem] = useState({
  //   name: 'Bananas',
  //   id: 123,
  //   purchased: false
  // }) ;

  const handleClick = () => {
    console.log('item props',props)
    console.log('item:'+ props.item.name)
    props.toggleItem(props.item.id);
    //whatever id im clicking on gets logged

    //tells us what item we are clicking on
    //changed purchased to true
    // setItem({
    //   ...item,
    //   purchased: !item.purchased
    // })

  }

  return (
    <div onClick={handleClick} className={`item${props.item.purchased ? ' purchased' : ''}`}>
      <p>{props.item.name}</p>
    </div>
  );
};

export default Item;