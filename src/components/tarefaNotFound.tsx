import notFound from "/404.jpg";
import { IconButton, Typography } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { MyAppBar } from "./appBar";
import { NavigateFunction } from "react-router-dom";

export const TarefaNotFound = ({ navigate }: { navigate: NavigateFunction; }) => (
  <>
    <MyAppBar>
      <IconButton
        size="large"
        edge="start"
        color="inherit"
        aria-label="menu"
        sx={{ mr: 2 }}
        onClick={() => {
          navigate("/");
        }}
      >
        <ArrowBackIcon />
      </IconButton>

      <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
        Tarefa não encontrada
      </Typography>
    </MyAppBar>

    <main
      style={{
        padding: "2%",
        justifyContent: "space-around",
        alignItems: "center",
        alignContent: "center",
        flex: 1,
      }}
    >
      <Typography variant="h2" style={{ textAlign: 'center', color: '#1976d2' }}>Tarefa não encontrada</Typography>
      <img
        src={notFound}
        alt="Tarefa não encontrada"
        style={{ width: "80vw" }} />
    </main>
  </>
);
