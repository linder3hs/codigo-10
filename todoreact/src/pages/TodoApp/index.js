import { useState } from "react";

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

function TodoApp() {
	const [inputButtons, setInputButtons] = useState(true);

	const handleInputChange = (event) => {
		if (event.target.value !== "") {
			setInputButtons(false);
		} else {
			setInputButtons(true);
		}
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
							component="form"
							sx={{
								p: "2px 4px",
								display: "flex",
								alignItems: "center",
							}}
						>
							<InputBase
								onChange={handleInputChange}
								sx={{ ml: 1, flex: 1 }}
								placeholder="My new task..."
								inputProps={{
									"aria-label": "search google maps",
								}}
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
