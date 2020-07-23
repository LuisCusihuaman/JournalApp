import React from "react";
import { NotesAppBar } from "./NotesAppBar";

export const NoteScreen = () => {
	return (
		<div className="notes__main-content">
			<NotesAppBar />
			<div className="notes__content">
				<input
					type="text"
					placeholder="Some awesome title"
					className="notes__title-input"
					autoComplete="off"
				/>
				<textarea
					placeholder="What happened today"
					className="notes__textarea"
				></textarea>
				<div className="notes__image">
					<img
						src="https://helpx.adobe.com/content/dam/help/en/stock/how-to/visual-reverse-image-search/jcr_content/main-pars/image/visual-reverse-image-search-v2_intro.jpg"
						alt="imagen"
					/>
				</div>
			</div>
		</div>
	);
};
