import { mount } from "enzyme";
import { Provider } from "react-redux";
import React from "react";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import "@testing-library/jest-dom";
import { NoteScreen } from "../../../components/notes/NoteScreen";
import { activeNote } from "../../../actions/notes";

jest.mock("../../../actions/auth", () => ({ activeNote: jest.fn() }));
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
});
