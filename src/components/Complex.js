import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

import Simple2 from "./Simple2";

const Complex = (props) => {
	const [count, setCount] = useState(0);
	return (
		<div className="paper-shadow-z-2">
			<ul>
				<div class="rectangle-cables">
					<input type="text" placeholder="Cables" id="cables" />

					<button
						type="button"
						className="ExtraButton"
						onClick={() => props.removeElement(props.item.id)}
					>
						<DeleteOutlineIcon />
					</button>
				</div>
				{props.item.childItems.map((ci) => {
					return (
						<li key={ci.id}>
							<div className="component2">
								<hr />
								<span className="or">Or</span>
								{ci.type === "simple" ? (
									<Simple2
										item={ci}
										removeElement={() => {
											let children = props.item.childItems;
											let updatedChildren = children.filter(
												(c) => c.id !== ci.id
											);
											props.item.childItems = updatedChildren;
											setCount((count) => count + 1);
										}}
									/>
								) : ci.type === "complex" ? (
									<Complex
										item={ci}
										removeElement={() => {
											let children = props.item.childItems;
											let updatedChildren = children.filter(
												(c) => c.id !== ci.id
											);
											props.item.childItems = updatedChildren;
											setCount((count) => count + 1);
										}}
										addChildElement={(parentId) => {
											props.addChildElement(parentId);
											setCount((count) => count + 1);
										}}
									/>
								) : (
									<span>invalid</span>
								)}
							</div>
						</li>
					);
				})}
				<div>
					<button
						className="button2 add"
						type="button"
						onClick={() => {
							console.log(props.item);
							props.addChildElement(props.item);
						}}
					>
						<FontAwesomeIcon icon={faCirclePlus} />
					</button>
				</div>
			</ul>
		</div>
	);
};

export default Complex;
