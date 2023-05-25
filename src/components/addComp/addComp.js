import React from "react";
import { Button, Text, TextInput, TouchableOpacity, View } from "react-native";
import styles from "./addComp.style";

const AddComp = (props) => {
	return (
		<View style={styles.container}>
			<View style={styles.inputContainer}>
				<TextInput styles={styles.textInput}
					placeholder={"Let's Do It"}
					onChangeText={props.setText}
				/>
			</View>
			<View style={styles.buttonCont}>
				<TouchableOpacity style={styles.button} onPress={props.setList}>
					<Text>Add list</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
}

export default AddComp;