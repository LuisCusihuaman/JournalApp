import { mount } from "enzyme";
import { Provider } from "react-redux";
import React from "react";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import "@testing-library/jest-dom";
import { MemoryRouter } from "react-router-dom";
import { Sidebar } from "../../components/journal/Sidebar";
import { logout } from "../../actions/auth";
import { startNewNote } from "../../actions/notes";

jest.mock("../../actions/auth", () => ({ logout: jest.fn() }));
jest.mock("../../actions/notes", () => ({ startNewNote: jest.fn() }));
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
		active: null,
		notes: [],
	},
};
let store = mockStore(initState);
store.dispatch = jest.fn();

const wrapper = mount(
	<Provider store={store}>
		<Sidebar />
	</Provider>
);
describe("Pruebas en <Sidebar/>", () => {
	beforeEach(() => {
		store = mockStore(initState);
		jest.clearAllMocks();
	});
	test("debe de mostrarse correctamente", () => {
		expect(wrapper).toMatchSnapshot();
	});
	test("debe de llamar el logout", () => {});
	test("debe de llamar el startNewNote", () => {});
});
