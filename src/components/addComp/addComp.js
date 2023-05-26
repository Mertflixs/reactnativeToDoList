import React from "react";
import { Button, Text, TextInput, TouchableOpacity, View } from "react-native";
import styles from "./addComp.style";

const AddComp = (props) => {
	return (
		<View style={styles.container}>
			<View style={styles.inputContainer}>
				<TextInput styles={styles.textInput}
					placeholder={"Let's Do It"}
					placeholderTextColor={"white"}
					onChangeText={props.setText}
					value={props.text}
				/>
			</View>
			<View style={styles.buttonCont}>
				<TouchableOpacity style={styles.button} onPress={props.setList}>
					<Text style={styles.text}>Add list</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
}

export default AddComp;