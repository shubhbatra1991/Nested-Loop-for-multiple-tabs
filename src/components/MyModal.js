import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import Simple from "./Simple";
import Complex from "./Complex";

const MyModal = () => {
	const [formValues, setFormValues] = useState([]);
	const [fieldType, setFieldType] = useState("simple");
	const [show, setShow] = useState(false);
	const [parentId, setParentId] = useState(null);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	let handleChange = (i, e) => {
		let newFormValues = [...formValues];
		newFormValues[i][e.target.name] = e.target.value;
		setFormValues(newFormValues);
	};

	let addFormFields = () => {
		setShow(false);
		let newElement = {
			name: "",
			id: Date.now(),
			type: fieldType,
			childItems: [],
		};

		if (parentId) {
			parentId.childItems.push(newElement);
			setParentId(null);
		} else {
			setFormValues([...formValues, newElement]);
		}
	};

	let removeElement = (index) => {
		let newFormValues = formValues.filter((element) => element.id !== index);
		setFormValues(newFormValues);
	};

	let handleSubmit = (event) => {
		event.preventDefault();
		alert(JSON.stringify(formValues));
	};

	return (
		<>
			<div className="bgpaper">
				<div>
					<Button variant="primary" className="Network">
						Network
					</Button>
				</div>
				<div className="line-sep"></div>

				<Modal show={show} onHide={handleClose}>
					<Modal.Header closeButton>
						<Modal.Title>Choose your required selection:</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						<div>
							<input
								type="radio"
								value="simple"
								name="field"
								onChange={(e) => setFieldType(e.target.value)}
							/>{" "}
							Simple
							<input
								type="radio"
								value="complex"
								name="field"
								onChange={(e) => setFieldType(e.target.value)}
							/>{" "}
							Complex
						</div>
					</Modal.Body>
					<Modal.Footer>
						<Button variant="secondary" onClick={handleClose}>
							Close
						</Button>
						<Button variant="primary" onClick={() => addFormFields()}>
							Submit
						</Button>
					</Modal.Footer>
				</Modal>

				<form onSubmit={handleSubmit} className="timeline">
					<ul>
						{formValues.map((element, index) => {
							return (
								<li key={index}>
									<div className="component">
										<hr />
										<span className="and">And</span>
										{element.type === "simple" && (
											<Simple
												item={element}
												removeElement={(index) => removeElement(index)}
											/>
										)}

										{element.type === "complex" && (
											<Complex
												item={element}
												removeElement={(index) => removeElement(index)}
												addChildElement={(parentId) => {
													console.log(parentId, "adding Complex");
													setParentId(parentId);
													handleShow();
												}}
											/>
										)}
									</div>
								</li>
							);
						})}
					</ul>

					<div>
						<button className="button add" type="button" onClick={handleShow}>
							<FontAwesomeIcon icon={faCirclePlus} />
						</button>
					</div>
				</form>
			</div>
		</>
	);
};

export default MyModal;
