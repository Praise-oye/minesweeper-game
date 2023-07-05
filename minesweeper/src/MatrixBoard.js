import React,{useState,useEffect} from 'react';
import CreateBoard from './component/requirements/CreateBoard';
import { revealed } from './component/requirements/Reveal';
import Box from './Box';
import { toast,ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 
import { Link } from 'react-router-dom';

//mat is used to store the current state of the board as a 2D array of objects, nonMine is used to store the number of non-mine cells remaining on the board, and minePos is used to store the positions of all the mines on the board.
//initialBoard is a function that is called in the useEffect hook when the component mounts. It initializes the board by calling the CreateBoard function, which generates a board with a specified number of rows, columns, and mines, and returns an object with the board and mineLocation properties.
//The newFlag function is called when a user right-clicks on a cell to place a flag. It updates the flagged property of the corresponding cell in the mat state.
//ToastContainer component is used to display toast messages for game over and victory conditions.


function MatrixBoard() {
	const [mat,setMat]=useState([]);
	const [nonMine,setNonMine]=useState(0);
	const [minePos,setMinePos]=useState([]);
	useEffect(()=>{
		initialBoard();
	},[]);
	const initialBoard = () => {
		const myBoard=CreateBoard(10,10,20);
		setNonMine(10*10-20);
		setMinePos(myBoard.mineLocation);
		setMat(myBoard.board);
	}
	const newFlag=(e,x,y)=>{
		e.preventDefault();
		let newMat=JSON.parse(JSON.stringify(mat));
		newMat[x][y].flagged=true;
		console.log(newMat[x][y]);
		setMat(newMat);
	}
	const restart=()=>{
		initialBoard();
	}
	const showCell=(x,y)=>{
		let newMat=JSON.parse(JSON.stringify(mat));
		if(newMat[x][y].value==="X"){
			toast.error(' Mine Exploded ,Game Over', { position: "top-right", autoClose: 2000, hideProgressBar: false, closeOnClick: true, pauseOnHover: true, draggable: true, progress: undefined, });

			for(let i=0;i<minePos.length;i++){
				newMat[minePos[i][0]][minePos[i][1]].revealed=true;
			}
			setMat(newMat);
			setTimeout(restart,500);
		}
		if(nonMine===0){
			toast.success('Congratulations!!,You won',{ position: "top-right", autoClose: 2000, hideProgressBar: false, closeOnClick: true, pauseOnHover: true, draggable: true, progress: undefined, });
			setTimeout(restart,500);
		}
		else{
			let revealedboard=revealed(newMat,x,y,nonMine);
			setMat(revealedboard.arr);
			setNonMine(revealedboard.newNonMines);
		}  
	}
	return (
		<div className="board">
			<div>
				<h4 className="status">To win - {nonMine} mines remaining</h4>
				<ToastContainer></ToastContainer>
				{mat.map((row,index)=>{
					return (
						<div className="rowstyle" key={index}>
							{row.map((col,idx)=>{
							return  <Box items={col} key={idx} newFlag={newFlag} showCell={showCell}/>
							})}
						</div>
					)
				})}
			<Link to= '/help' className= "help">Go to Help</Link>
			</div>
		</div>
	) 
}
export default MatrixBoard;