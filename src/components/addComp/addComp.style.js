import { Dimensions, StyleSheet } from "react-native";

export default StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#36474F",
		flexDirection: "column",
	},
	textInput: {
		color: "gray",
	},
	button: {
		marginTop: 3,
		marginRight: 10,
		marginRight: 10,
		borderRadius: 5,
		width: Dimensions.get("window").width / 1.5,
		textAlign: "center",
		alignItems: "center",
		backgroundColor: "#808080",
	},
	inputContainer: {
		padding: 5,
		margin: 8,
		borderBottomWidth: 1,
		borderColor: "#788F9C",
	},
	buttonCont: {
		alignItems: "center",
	},
	text: {
		textAlign: "center",
		padding: 5,
		color: "white",
	}
})