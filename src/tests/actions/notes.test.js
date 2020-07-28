import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import { startNewNote, startLoadingNotes } from "../../actions/notes";
import { db } from "../../firebase/firebase-config";
import { types } from "../../types/types";

const middlewares = [thunk]; // add your middlewares like `redux-thunk`
const mockStore = configureStore(middlewares);
const initState = {
	auth: {
		uid: "TESTING",
	},
};

let store = mockStore({ initState });

describe("Pruebas con las actiosn de notes", () => {
	beforeEach(() => {
		store = mockStore(initState);
	});
	test("debe de crear una nueva nota startNewNote", async () => {
		await store.dispatch(startNewNote());
		const actions = store.getActions();
		expect(actions[0]).toEqual({
			type: "[Notes] Set active note",
			payload: {
				id: expect.any(String),
				title: "",
				body: "",
				date: expect.any(Number),
			},
		});
		expect(actions[1]).toEqual({
			type: "[Notes] New note",
			payload: {
				id: expect.any(String),
				title: "",
				body: "",
				date: expect.any(Number),
			},
		});
		const docId = actions[0].payload.id;
		await db.doc(`TESTING/journal/notes/${docId}`).delete();
	});
	test("startLoadingNotes debe cargar las notas", async () => {
		await store.dispatch(startLoadingNotes("TESTING"));
		const actions = store.getActions();
		expect(actions[0]).toEqual({
			type: types.notesLoad,
			payload: expect.any(Array),
		});
		const expected = {
			id: expect.any(String),
			title: expect.any(String),
			body: expect.any(String),
			date: expect.any(Number),
		};
		expect(actions[0].payload[0]).toMatchObject(expected);
	});
});
