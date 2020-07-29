import { mount } from "enzyme";
import { Provider } from "react-redux";
import React from "react";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import "@testing-library/jest-dom";
import { NoteScreen } from "../../../components/notes/NoteScreen";
import { activeNote, startNewNote } from "../../../actions/notes";

jest.mock("../../../actions/notes", () => ({ activeNote: jest.fn() }));
const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const initState = {
	auth: {
		uid: "1",
		name: "Luis",
	},
	ui: {
		loading: false,
		msgError: null,
	},
	notes: {
		active: {
			id: 1234,
			title: "Hola",
			body: "mundo",
			date: 0,
		},
		notes: [],
	},
};
let store = mockStore(initState);
store.dispatch = jest.fn();

const wrapper = mount(
	<Provider store={store}>
		<NoteScreen />
	</Provider>
);
describe("Pruebas en <NoteScreen />", () => {
	beforeEach(() => {
		store = mockStore(initState);
		jest.clearAllMocks();
	});
	test("debe de mostrarse correctamente", () => {
		expect(wrapper).toMatchSnapshot();
	});
	test("debe de disparar el active note cuando seleciona una active note", () => {
		wrapper.find("input[name='title']").simulate("change", {
			target: {
				name: "title",
				value: "Hola denuevo",
			},
		});
		expect(activeNote).toHaveBeenLastCalledWith(1234, {
			body: "mundo",
			date: 0,
			id: 1234,
			title: "Hola denuevo",
		});
	});
});
