import React, { useState, useEffect } from "react";

const Home = () => {
	const [todos, setTodos] = useState([""]);
	const [newTodo, setNewTodo] = useState("");

	const addTodo = (e) => {
		e.preventDefault();
		setTodos([...todos, newTodo]);
		setNewTodo("");
	};

	const removeTodo = (index) => {
		setTodos(todos.filter((_, todoIndex) => todoIndex !== index));
	};

let body = todos.concat ([{"label": inputText, "done": false}])

	const updateTodos = (updatedTodos) => {
		fetch('https://playground.4geeks.com/apis/fake/todos/user/flallanroger?Content-Type=application/json', {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(updatedTodos)
		})
		.then((body) => {
				e.preventDefault();
				setTodos([...todos, newTodo]);
				setNewTodo("");
			};
		})
		.then((data) => {setTodos(data)})
		.catch((error) => {
			alert('Error')	
			console.log(error)
		});
	}, []);

	useEffect(() => {
		fetch("https://playground.4geeks.com/apis/fake/todos/user/flallanroger", {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json'
			}
		})
		.then((response) => {
			if(!response.ok) throw Error ("error")
			return response.json()
		})
		.then((data) => {setTodos(data)})
		.catch((error) => {
			alert('Error')	
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
					{todos.map((todo, index) => (
						<li className="list-group-item" key={index}>
							{todo.label} <button className="btnRemove" onClick={() => removeTodo(index)}>X</button>
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



// import React, { useState, useEffect } from "react";

// const Home = () => {
// 	const [todos, setTodos] = useState([]);
// 	const [newTodo, setNewTodo] = useState("");

// 	useEffect(() => {
// 		fetch("https://playground.4geeks.com/apis/fake/todos/user/flallanroger", {
// 			method: 'GET',
// 			headers: {
// 				'Content-Type': 'application/json'
// 			}
// 		})
// 		.then((response) => 
// if(!response.ok) thow Error ("error")
// return response.json())
// 		.then((data) => {setTodos(data)})
// 		.catch((error) => {
// alert()	
// console.log(error)});
// 	}, []);

// 	const updateTodos = (updatedTodos) => {
// 		fetch('https://playground.4geeks.com/apis/fake/todos/user/flallanroger', {
// 			method: 'PUT',
// 			headers: {
// 				'Content-Type': 'application/json',
// 			},
// 			body: JSON.stringify(updatedTodos)
// 		})
// 		.then((response) => response.json())
// 		.then((data) => {
// 			console.log(data);
// 			setTodos(updatedTodos);
// 		})
// 		.catch((error) => console.error('Error:', error));
// 	};
	
// 	const addTodo = (e) => {
// 		e.preventDefault();
// 		const updatedTodos = [...todos, { label: newTodo, done: false }];
// 		updateTodos(updatedTodos);
// 		setNewTodo("");
// 	};

// 	const removeTodo = (todoId) => {
// 		const updatedTodos = todos.filter((todo) => todo.id !== todoId);
// 		updateTodos(updatedTodos);
// 	};

// 	return (
// 		<div className="container">
// 			<h1>Todos</h1>
// 			<form onSubmit={addTodo}>
// 				<ul className="list-group">
// 					<li className="list-group-item">
// 						<input
// 							type="text"
// 							placeholder="What do you need to do?"
// 							value={newTodo}
// 							onChange={(e) => setNewTodo(e.target.value)}
// 						/>
// 						<button className="btnAdd" type="submit">Add</button>
// 					</li>
// 					{todos.map((todo) => (
// 						<li className="list-group-item" key={todo.id}>
// 							{todo.label} <button className="btnRemove" onClick={() => removeTodo(todo.id)}>X</button>
// 						</li>
// 					))}
// 					<li className="list-group-item">
// 						<p className="itemCounter">{todos.length} item left</p>
// 					</li>
// 				</ul>
// 			</form>
// 		</div>
// 	);
// };

// export default Home;


