import { Checkbox, Paper, IconButton, Typography } from "@mui/material";
import { Tarefa } from "../domain/model/tarefa";

interface Props {
	tarefa: Tarefa;
	onDelete: (id: string) => void;
	toggleDone: (id: string) => void;
	goToTarefa: (id: string) => void;
}

function hasDatePassed(date: Date) {
	const currentDate = new Date();
	return date < currentDate;
}

export const TarefaItem = ({
	tarefa,
	onDelete,
	toggleDone,
	goToTarefa,
}: Props) => {
	const opacity = tarefa.done ? 0.5 : 1;
	const hasReachedUntilDate = hasDatePassed(tarefa.untilDate) && !tarefa.done;
	const backgroundColor = hasReachedUntilDate ? "beige" : "white";
	return (
		<Paper
			style={{
				padding: "1%",
				display: "flex",
				marginTop: "4%",
				flexDirection: "row",
				justifyContent: "space-between",
				alignItems: "center",
				opacity,
				backgroundColor,
			}}
			elevation={1}
		>
			<Checkbox checked={tarefa.done} onClick={() => toggleDone(tarefa.id)} />

			<Typography
				variant="h4"
				style={{ textAlign: "left", cursor: "pointer", width: "100%" }}
				onClick={() => goToTarefa(tarefa.id)}
			>
				{tarefa.name}
			</Typography>

			<IconButton onClick={() => onDelete(tarefa.id)} />
		</Paper>
	);
};
