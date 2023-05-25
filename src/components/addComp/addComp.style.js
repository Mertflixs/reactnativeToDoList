import { Dimensions, StyleSheet } from "react-native";

export default StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "gray",
		flexDirection: "column",
	},
	textInput: {

	},
	button: {
		marginTop: 3,
		marginRight: 10,
		marginRight: 10,
		borderWidth: 1,
		borderRadius: 3,
		width: Dimensions.get("window").width / 1.5,
		height: 30,
		textAlign: "center",
	},
	inputContainer: {
		padding: 5,
		margin: 8,
		borderBottomWidth: 1,
	},
	buttonCont: {
		alignItems: "center",
	}
})