import React, { useState, useEffect } from "react";

const Home = () => {
	const [todos, setTodos] = useState([]);
	const [newTodo, setNewTodo] = useState();

	const addTodo = (e) => {
		e.preventDefault();

		let body = [...todos, {"label": newTodo, "done": false}];

		fetch("https://playground.4geeks.com/apis/fake/todos/user/flallanroger", {
			method: 'PUT',
			body: JSON.stringify(body),
			headers: {
				'Content-Type': 'application/json'
			}
		})
		.then((response) => {
			if(!response.ok) throw Error ("Error response")
			return response.json()
		})
		.then((data) => {
			console.log(data)
			setTodos(body)
			setNewTodo("");
		})
		.catch((error) => {
			alert('Ha habido un Error! 😲')	
			console.log(error)
		});
	
	
	};

	const removeTodo = (index) => {

		let body = todos.filter((_, todoIndex) => todoIndex !== index)

		fetch("https://playground.4geeks.com/apis/fake/todos/user/flallanroger", {
			method: 'PUT',
			body: JSON.stringify(body),
			headers: {
				'Content-Type': 'application/json'
			}
		})
		.then((response) => {
			if(!response.ok) throw Error ("Error response")
			return response.json()
		})
		.then((data) => {
			console.log(data)
			setTodos(todos.filter((_, todoIndex) => todoIndex !== index));
		})
		.catch((error) => {
			alert(`Ha habido un Error! 😲 Error details: ${error.message}`)	
			console.log(error)
		});
	
	};


	useEffect(() => {
		fetch("https://playground.4geeks.com/apis/fake/todos/user/flallanroger", {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json'
			}
		})
		.then((response) => {
			if(!response.ok) throw Error ("Error response")
			return response.json()
		})
		.then((data) => {
			setTodos(data)
		})
		.catch((error) => {
			alert('Ha habido un Error! 😲')	
			console.log(error)
		});
	}, []);
	

	return (
		<div className="container">
			<h1>Todos</h1>
			<form onSubmit={addTodo}>
				<ul className="list-group">
					<li className="list-group-item"><input
						type="text"
						placeholder="What do you need to do?"
						value={newTodo}
						onChange={(e) => setNewTodo(e.target.value)}
					/>
						<button className="btnAdd" type="submit"></button>
					</li>
					{todos.map((tarea, index) => (
						<li className="list-group-item" key={index}>
							{tarea.label} <button className="btnRemove" onClick={() => removeTodo(index)}>X</button>
						</li>
					))}
					<li className="list-group-item">
						<p className="itemCounter">{todos.length} item left</p>
					</li>
				</ul>
			</form>
		</div>
	);
};

export default Home;



