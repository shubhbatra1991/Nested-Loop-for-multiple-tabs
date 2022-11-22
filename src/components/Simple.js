import React from "react";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

const Simple = (props) => {
	return (
		<div className="component">
			<div className="paper-shadow-z-1">
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
		</div>
	);
};

export default Simple;