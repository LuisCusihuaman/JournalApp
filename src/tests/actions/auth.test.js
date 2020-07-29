import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import {
	login,
	logout,
	startLogout,
	startLoginEmailPassword,
} from "../../actions/auth";
import { types } from "../../types/types";

const middlewares = [thunk]; // add your middlewares like `redux-thunk`
const mockStore = configureStore(middlewares);
const initState = {
	auth: {
		uid: "TESTING",
	},
	notes: {
		active: {
			id: "2s6vAD4ycd57Vwux8Gc8",
			title: "Hola",
			body: "Mundo",
		},
	},
};

let store = mockStore(initState);
describe("Pruebas con las acciones de Auth", () => {
	beforeEach(() => {
		store = mockStore(initState);
	});
	test("login y logout deben de crear la accion respectiva", () => {
		const uid = "ABC123";
		const displayName = "Luis";
		const loginAction = login(uid, displayName);
		const logoutAction = logout();
		expect(loginAction).toEqual({
			type: types.login,
			payload: { uid, displayName },
		});
		login();
		expect(logoutAction).toEqual({ type: types.logout });
	});
	test("debe de realizar el startLogout", async () => {
		await store.dispatch(startLogout());
		const actions = store.getActions();
		expect(actions[0]).toEqual({
			type: types.logout,
		});
		expect(actions[1]).toEqual({ type: types.notesLogoutCleaning });
	});
	test("debe de iniciar el startLoginEmailPassword ", async () => {
		await store.dispatch(
			startLoginEmailPassword("test@test.com", "123456")
		);
		const actions = store.getActions();
		expect(actions[1]).toEqual({
			type: types.login,
			payload: { uid: "haPczeMhJ1gh7zgfnTDD2cNDUwv1", displayName: null },
		});
	});
});
