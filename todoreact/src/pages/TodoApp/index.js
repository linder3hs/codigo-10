import { useState, useRef } from "react";

import {
	Container,
	Card,
	CardContent,
	Typography,
	Paper,
	IconButton,
	InputBase,
	Divider,
} from "@mui/material";

import AddTaskIcon from "@mui/icons-material/AddTask";
import ClearIcon from "@mui/icons-material/Clear";

import { post } from "../../services";
import { TaskModel } from "../../models/TaskModel";

function TodoApp() {
	const [inputButtons, setInputButtons] = useState(true);
	const inputElement = useRef();

	const handleInputChange = (event) => {
		if (event.target.value !== "") {
			setInputButtons(false);
		} else {
			setInputButtons(true);
		}
	};

	const handleInputKeyPress = (event) => {
		if (event.key == "Enter") {
			addTask();
		}
	};

	const addTask = async () => {
		if (inputElement.current.value === "") return;
		const newtask = new TaskModel(null, inputElement.current.value);
		await post(newtask);
		inputElement.current.value = "";
	};

	return (
		<>
			<Container maxWidth="sm" sx={{ marginTop: "20px" }}>
				<Card variant="outlined">
					<CardContent>
						<Typography variant="h4" component="h1">
							Todo App
						</Typography>
						<Divider
							sx={{
								marginTop: 2,
								marginBottom: 2,
								borderColor: "red",
							}}
						/>
						<Paper
							sx={{
								p: "2px 4px",
								display: "flex",
								alignItems: "center",
							}}
						>
							<InputBase
								onChange={handleInputChange}
								onKeyPress={handleInputKeyPress}
								sx={{ ml: 2, flex: 1 }}
								placeholder="My new task..."
								inputRef={inputElement}
							/>
							{inputButtons || (
								<IconButton
									type="button"
									sx={{ p: "10px" }}
									aria-label="search"
									disabled={inputButtons}
								>
									<ClearIcon color="disabled" />
								</IconButton>
							)}
							<Divider
								sx={{ height: 28, m: 0.5 }}
								orientation="vertical"
							/>
							<IconButton
								color="primary"
								sx={{ p: "10px" }}
								aria-label="directions"
								disabled={inputButtons}
								onClick={addTask}
							>
								<AddTaskIcon />
							</IconButton>
						</Paper>
					</CardContent>
				</Card>
			</Container>
		</>
	);
}

export default TodoApp;
