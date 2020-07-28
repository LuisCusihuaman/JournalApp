import cloudinary from "cloudinary";
const { fileUpload } = require("../../helpers/fileUpload");

cloudinary.config({
	cloud_name: "luiscusihuaman",
	api_key: "854481769298257",
	api_secret: "L7tZjbaBtwfIdu5H0kqecOHkLJY",
});

describe("Pruebas en fileUpload", () => {
	test("debe de cargar un archivo y retornar el URL ", async (done) => {
		const imgUrl =
			"https://images.pexels.com/photos/4814081/pexels-photo-4814081.jpeg?crop=entropy&cs=srgb&dl=brown-and-white-crew-neck-shirt-4814081.jpg&fit=crop&fm=jpg&h=426&w=640";
		const resp = await fetch(imgUrl);
		const blob = await resp.blob();
		const file = new File([blob], "foto.jpg");
		const url = await fileUpload(file);
		expect(typeof url).toBe("string");

		//clean the image
		const segments = url.split("/");
		const imageId = segments[segments.length - 1].replace(".jpg", "");
		cloudinary.v2.api.delete_resources(imageId, {}, () => {
			done();
		});
	});
	test("debe de intentar cargar un archivo y retornar un error ", async () => {
		const file = new File([], "foto.jpg");
		const url = await fileUpload(file);
		expect(url).toBe(null);
	});
});
