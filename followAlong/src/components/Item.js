import React, { useState } from 'react';

const Item = props => {
  // const [item, setItem] = useState({
  //   name: 'Bananas',
  //   id: 123,
  //   purchased: false
  // }) ;

  const handleClick = () => {
    console.log('Item Props',props)
    console.log('Item Name:'+ props.item.name)
    props.toggleItem(props.item.id);
    //whatever id im clicking on gets logged

    //tells us what item we are clicking on
    //changed purchased to true
    // setItem({
    //   ...item, //spread item
    //   purchased: !item.purchased // will turn it to the opposite
        // (item.purchased)?false:true

    // })

  }

  return (
    <div onClick={handleClick} className={`item${props.item.purchased ? ' purchased' : ''}`}>
      <p>{props.item.name}</p>
    </div>
  );
};

export default Item;