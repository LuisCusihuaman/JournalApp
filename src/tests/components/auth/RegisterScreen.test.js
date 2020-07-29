import "@testing-library/jest-dom";
import React from "react";
import { mount } from "enzyme";
import { MemoryRouter } from "react-router-dom";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import { RegisterScreen } from "../../../components/auth/RegisterScreen";
import { types } from "../../../types/types";

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
// store.dispatch = jest.fn();

const wrapper = mount(
	<Provider store={store}>
		<MemoryRouter>
			<RegisterScreen />
		</MemoryRouter>
	</Provider>
);

describe("Pruebas en <RegisterScreen />", () => {
	test("debe de mostrarse correctamente", () => {
		expect(wrapper).toMatchSnapshot();
	});

	test("deberia lanzar un error la accion cuando el correo es incorrecto", () => {
		const emailField = wrapper.find('input[name="email"]');

		emailField.simulate("change", {
			target: {
				value: "",
				name: "email",
			},
		});

		wrapper.find("form").simulate("submit", {
			preventDefault() {},
		});

		const actions = store.getActions();

		expect(actions[0]).toEqual({
			type: types.uiSetError,
			payload: "Email is not valid",
		});
	});
});
