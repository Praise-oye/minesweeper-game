import React from 'react'

//handleClick function is called when the user clicks on the div element with the className of "box". 
//It invokes the showCell function with the x and y coordinates of the current items prop.
//this renders a clickable and right-clickable div element with the ability to show the cell and flag it in the game.
const Box=({items,newFlag,showCell})=> {
  const handleClick=()=>{
    showCell(items.x,items.y);  
  }    
  const handleRightClick=(e)=>{
    newFlag(e,items.x,items.y)
  }    
  return (
    <div className="box" style={{backgroundColor:items.revealed && items.value!==0?items.value==='X'?'red':' green':items.revealed&&items.value===0?'#00ff60ad':'darkblue'}} onClick={handleClick} onContextMenu={handleRightClick}>
        {!items.revealed && items.flagged ? ("🚩") : items.revealed && items.value !== 0 ? (items.value === "X" ? ("💣") : (items.value)) : ("")}
    </div>
  )
}
export default Box;