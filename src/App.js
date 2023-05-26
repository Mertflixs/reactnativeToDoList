import React, { useState } from "react";
import { View, Text, StyleSheet, SafeAreaView, Dimensions, FlatList } from "react-native";
import AddComp from "./components/addComp/index";
import ToDoCard from "./components/toDoList/toDoList";

export default function App() {
	const [counter, setCounter] = useState(0);
	const [doList, setDoList] = useState("");
	const [list, setObj] = useState([]);

	const renderToDo= ({item}) => (<ToDoCard item={item} counter={counter} />);

	

	const setList = () => {
		const obj = {
			id: counter,
			title: doList,
			status: true,
		}
		setObj([...list, obj]);
		setCounter(counter + 1);
		setDoList("");
	}

	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.headerContainer}>
				<View style={styles.headerTitle}>
					<Text style={styles.headerTitle}>To Do List</Text>
				</View>
				<View style={styles.headerCounter}>
					<Text style={styles.headerCounter}>{counter}</Text>
				</View>
			</View>
			<View style={styles.listContainer}>
				<FlatList
					keyExtractor={item => item.id}
					data={list}
					renderItem={renderToDo}
				/>
			</View>
			<View style={styles.addListContainer}>
				<AddComp text={doList} setText={setDoList} setList={setList} />
			</View>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#112027",
	},
	headerContainer: {
		flex: 1,
		flexDirection: "row",
	},
	headerContainer: {
		flexDirection: "row",
	},
	headerCounter: {
		color: "#FFA500",
		fontSize: 50,
		fontWeight: "bold",
		margin: 10,
	},
	headerTitle: {
		color: "#FFA500",
		fontSize: 50,
		fontWeight: "bold",
		flex: 1,
		margin: 10,
	},
	listContainer: {
		flex: 1,
	},
	addListContainer: {
		height: 100,
	}
})
