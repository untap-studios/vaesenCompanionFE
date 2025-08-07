import React, { useState, useRef, useMemo } from "react";
import {
  TextField,
  Popper,
  Paper,
  List,
  ListItem,
  ListItemText,
  CircularProgress,
} from "@mui/material";
import { debounce } from "lodash";
import { UserTypes } from "../../types/user";
import { ChangeEvent } from "../../types/events";
import { callApi } from "../../utils/callApi";

const CustomUserAutocomplete = (gameId: {gameId: string}) => {
  const [inputValue, setInputValue] = useState("");
  const [results, setResults] = useState<UserTypes[]>([]);
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const anchorRef: any = useRef(null);

  const fetchUsers = async (query: string) => {
    if (!query) {
      setResults([]);
      setOpen(false);
      return;
    }
    setLoading(true);
    try {
      const res = await callApi(`users/search-users?q=${query}`, "GET");
      setResults(res.data);
      setOpen(true);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const debouncedFetch = useMemo(() => debounce(fetchUsers, 500), []);

  const handleChange = (e: ChangeEvent) => {
    const value = e.target.value;
    setInputValue(value);
    debouncedFetch(value);
  };

  const handleSelect = async (user: UserTypes) => {
    setInputValue(user._id);
    setOpen(false);
    
    const data = await callApi(`games/${gameId.gameId}/add-user`, "POST", {_id: user._id});

    console.log("User added to game:", data);
  };

  return (
    <div>
      <TextField
        label="Search users"
        variant="outlined"
        fullWidth
        inputRef={anchorRef}
        value={inputValue}
        onChange={handleChange}
      />

      <Popper
        open={open && results.length > 0}
        anchorEl={anchorRef.current}
        placement="bottom-start"
        style={{ zIndex: 1300 }}
      >
        <Paper style={{ width: anchorRef.current?.offsetWidth }}>
          {loading ? (
            <ListItem>
              <CircularProgress size={20} />
            </ListItem>
          ) : (
            <List dense>
              {results &&
                results.length > 0 &&
                results.map((user) => (
                  <ListItem
                    sx={{
                      "&:hover": {
                        backgroundColor: "primary.main",
                        color: "white",
                      },
                    }}
                    key={user._id}
                    onClick={() => handleSelect(user)}
                  >
                    <ListItemText primary={user.name} secondary={user.email} />
                  </ListItem>
                ))}
            </List>
          )}
        </Paper>
      </Popper>
    </div>
  );
};

export default CustomUserAutocomplete;
