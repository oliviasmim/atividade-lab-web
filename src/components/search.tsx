import { useState, useRef, useEffect } from "react";
import { TextField, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

interface Props {
  search: string;
  onChangeText: (name: string) => void;
}

export const Search = ({ onChangeText, search }: Props) => {
  const [visible, setVisible] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const toggleSearch = () => setVisible(!visible);

  useEffect(() => {
    if (visible && inputRef.current) {
      inputRef.current.focus();

      return;
    }

    onChangeText("");
  }, [visible, onChangeText]);

  return (
    <>
      {visible && (
        <TextField
          placeholder="Busca"
          ref={inputRef}
          style={{
            minWidth: 70,
            padding: "2%",
          }}
          value={search}
          onChange={({ target }) => onChangeText(target.value)}
        />
      )}
      <IconButton
        size="large"
        edge="start"
        color="inherit"
        aria-label="menu"
        sx={{ mr: 2 }}
        onClick={toggleSearch}
      >
        <SearchIcon />
      </IconButton>
    </>
  );
};
