import { LoginScreen } from "../../../components/auth/LoginScreen";
import { mount } from "enzyme";
import { Provider } from "react-redux";
import React from "react";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import "@testing-library/jest-dom";
import { MemoryRouter } from "react-router-dom";

const middlewares = [thunk];
const mockStore = configureStore(middlewares);
const initState = {
	auth: {},
	ui: {
		loading: false,
		msgError: null,
	},
};
let store = mockStore(initState);

const wrapper = mount(
	<Provider store={store}>
		<MemoryRouter>
			<LoginScreen />
		</MemoryRouter>
	</Provider>
);
describe("Pruebas en <LoginScreen/>", () => {
	beforeEach(() => {
		store = mockStore(initState);
	});
	test("debe de mostrarse correctamente", () => {
		expect(wrapper).toMatchSnapshot();
	});
});
