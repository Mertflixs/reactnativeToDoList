import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import styles from "./toDoList.style";

const ToDoCard = (props) => {
	const [status, setStatus] = useState(props.item.status);
	const updateMission = () => {
		console.log(props.item.title);
		props.item.status = false;
		setStatus(false);
		props.item.counter = props.item.counter - 1;
	}

	return(
		<View style={status ? styles.container : styles.container1}>
			<TouchableOpacity onPress={updateMission}>
				<Text style={status ? styles.text : styles.text1}>{props.item.title}</Text>
			</TouchableOpacity>
		</View>
	);
}

export default ToDoCard;