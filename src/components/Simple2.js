import React from "react";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

const Simple2 = (props) => {
	return (
            <>
			<div className="rectangle">
				<input
					type="text"
					placeholder="Access Structure"
					id="access-structures"
					value={props.item.name}
				/>
			</div>
			<button
				type="button"
				className="button SimpleBtn"
				onClick={() => {
					console.log("Deleteing ", props.item.id);
					props.removeElement(props.item.id);
				}}
			>
				<DeleteOutlineIcon />
			</button>
            </>

	);
};

export default Simple2;