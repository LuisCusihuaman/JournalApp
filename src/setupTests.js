import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { createSerializer } from "enzyme-to-json";
import { fire, close } from "sweetalert2";
Enzyme.configure({ adapter: new Adapter() });
expect.addSnapshotSerializer(createSerializer({ mode: "deep" }));

const noop = () => {};
Object.defineProperty(window, "scrollTo", { value: noop, writable: true });

jest.mock("sweetalert2", () => ({ fire: jest.fn(), close: jest.fn() }));
