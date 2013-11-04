module.exports = {
	parse: [
		require("./parse")
	],
	compare: [
		require("./compare/comparison"),
		require("./compare/equality")
	]
};
