import React from "react";
import { startSaveNote } from "../../actions/notes";
import { useDispatch, useSelector } from "react-redux";

export const NotesAppBar = () => {
	const dispatch = useDispatch();
	const { active } = useSelector((state) => state.notes);
	const handleSave = () => {
		console.log(active);
		dispatch(startSaveNote(active));
	};
	return (
		<div className="notes__appbar">
			<span>23 de agosto 2020</span>
			<div>
				<button className="btn">Picture</button>
				<button className="btn" onClick={handleSave}>
					Save
				</button>
			</div>
		</div>
	);
};
