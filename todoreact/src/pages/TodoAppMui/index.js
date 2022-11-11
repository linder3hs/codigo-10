import {
	Container,
	Box,
	Card,
	CardContent,
	Typography,
	Paper,
	IconButton,
	InputBase,
	Divider,
} from "@mui/material";

import AddTaskIcon from "@mui/icons-material/AddTask";

function TodoApp() {
	return (
		<Container maxWidth="sm">
			<Box mt={5}>
				<Card>
					<CardContent>
						<Typography variant="h3">Todo App</Typography>
						<Divider
							variant="middle"
							sx={{
								marginTop: "1rem",
								borderColor: "red",
							}}
						/>
						<Paper
							component="form"
							sx={{
								p: "2px 4px",
								display: "flex",
								alignItems: "center",
								marginTop: "1rem",
							}}
						>
							<InputBase
								sx={{ ml: 1, flex: 1 }}
								placeholder="My new task"
								inputProps={{
									"aria-label": "search google maps",
								}}
							/>
							<IconButton
								type="button"
								sx={{ p: "10px" }}
								aria-label="search"
							>
								<AddTaskIcon color="primary" />
							</IconButton>
						</Paper>
					</CardContent>
				</Card>
			</Box>
		</Container>
	);
}

export default TodoApp;
