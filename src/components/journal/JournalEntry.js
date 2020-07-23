import React from "react";

export const JournalEntry = () => {
	return (
		<div className="journal__entry pointer">
			<div
				className="journal__entry-picture"
				style={{
					backgroundColor: "cover",
					backgroundImage:
						"url(https://helpx.adobe.com/content/dam/help/en/stock/how-to/visual-reverse-image-search/jcr_content/main-pars/image/visual-reverse-image-search-v2_intro.jpg)",
				}}
			></div>
			<div className="journal__entry-body">
				<p className="journal__entry-title">Un mariposa</p>
				<p className="journal__entry-content">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
				</p>
			</div>
			<div className="journal__entry-date-box">
				<span>Monday</span>
				<h4>28</h4>
			</div>
		</div>
	);
};
