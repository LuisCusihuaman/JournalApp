const { authReducer } = require("../../reducers/authReducer");
import { types } from "../../types/types";
describe("Pruebas en el authReducer", () => {
	test("debe de realizar el login", () => {
		const initState = {};
		const action = {
			type: types.login,
			payload: {
				uid: "abc",
				displayName: "Luis",
			},
		};
		const state = authReducer(initState, action);
		expect(state).toEqual({
			uid: "abc",
			name: "Luis",
		});
	});
	test("debe de realizar el logout", () => {
		const initState = {
			uid: "abc",
			name: "Luis",
		};
		const action = {
			type: types.logout,
		};
		const state = authReducer(initState, action);
		expect(state).toEqual({});
	});
	test("no debe de hacer cambios en el state", () => {
		const initState = {
			uid: "abc",
			name: "Luis",
		};
		const action = {
			type: "sdadss",
		};
		const state = authReducer(initState, action);
		expect(state).toEqual(initState);
	});
});
