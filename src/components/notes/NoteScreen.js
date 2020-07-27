import React, { useEffect, useRef } from "react";
import { NotesAppBar } from "./NotesAppBar";
import { useSelector, useDispatch } from "react-redux";
import { useForm } from "../../hooks/useForm";
import { activeNote } from "../../actions/notes";

export const NoteScreen = () => {
	const dispatch = useDispatch();
	const { active: note } = useSelector((state) => state.notes);
	const [formValues, handleInputChange, reset] = useForm(note);
	const { body, title } = formValues;
	const activeId = useRef(note.id);
	useEffect(() => {
		if (note.id !== activeId.current) {
			reset(note);
			activeId.current = note.id;
		}
	}, [note, reset]);
	useEffect(() => {
		dispatch(activeNote(formValues.id, { ...formValues }));
	}, [formValues, dispatch]);
	return (
		<div className="notes__main-content">
			<NotesAppBar />
			<div className="notes__content">
				<input
					type="text"
					placeholder="Some awesome title"
					className="notes__title-input"
					autoComplete="off"
					name="title"
					value={title}
					onChange={handleInputChange}
				/>
				<textarea
					placeholder="What happened today"
					className="notes__textarea"
					name="body"
					value={body}
					onChange={handleInputChange}
				></textarea>
				{note.url && (
					<div className="notes__image">
						<img
							src="https://helpx.adobe.com/content/dam/help/en/stock/how-to/visual-reverse-image-search/jcr_content/main-pars/image/visual-reverse-image-search-v2_intro.jpg"
							alt="imagen"
						/>
					</div>
				)}
			</div>
		</div>
	);
};
