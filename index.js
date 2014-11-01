module.exports = {
	parse: [
		require("./parse/strict"),
		require("./parse/loose")
	],
	compare: [
		require("./compare/comparison"),
		require("./compare/equality")
	]
};
