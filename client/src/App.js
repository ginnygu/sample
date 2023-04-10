import { useState, useEffect } from "react";

function App() {
	const [categories, setCategories] = useState([]);
	const [selectedCategory, setSelectedCategory] = useState("chocolate");
	const [hasSubCategories, setHasSubCategories] = useState(false);
	const [subCategories, setSubCategories] = useState([]);
	const [selectSub, setSelectedSub] = useState("");
	const [input, setInput] = useState("");
	useEffect(() => {
		const fetchData = async () => {
			const response = await fetch("http://localhost:3001/candy");
			const data = await response.json();
			console.log(data);
			setCategories(data.categories);
		};
		fetchData();
	}, []);
	const handleSelectCategory = (e) => {
		console.log(e.target.value);
		if (e.target.value === "64345ada5bdaf0d3d2585462") {
			setHasSubCategories(true);
			const findSub = categories.find((cat) => {
				return cat._id === "64345ada5bdaf0d3d2585462";
			});
			setSubCategories(findSub.subCategories);
			setSelectedCategory(e.target.value);
		} else {
			setHasSubCategories(false);
			setSelectedCategory(e.target.value);
		}
	};
	const handleOnSubmit = async () => {
		const dataToSubmit = {
			name: input,
			category: selectedCategory,
			subCategories: selectSub,
		};
		const response = await fetch("http://localhost:3001/candy/add-new", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				// 'Content-Type': 'application/x-www-form-urlencoded',
			},
			body: JSON.stringify(dataToSubmit),
		});
		console.log(response);
	};
	return (
		<div className="App">
			<input
				type="text"
				value={input}
				onChange={(e) => setInput(e.target.value)}
			/>
			<select value={selectedCategory} onChange={handleSelectCategory}>
				{categories.map((category) => {
					return (
						<option key={category._id} value={category._id}>
							{category.name}
						</option>
					);
				})}
			</select>
			{hasSubCategories && (
				<select
					value={selectSub}
					onChange={(e) => {
						setSelectedSub(e.target.value);
					}}
				>
					{subCategories.map((category) => {
						return (
							<option key={category} value={category}>
								{category}
							</option>
						);
					})}
				</select>
			)}
			<button onClick={handleOnSubmit}>Submit</button>
		</div>
	);
}

export default App;
