import React from "react";
import { Box } from "@mui/material";
import { Grid } from "@mui/material";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Autocomplete from "@mui/material/Autocomplete";
import Checkbox from "@mui/material/Checkbox";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import { useStyles } from "./styles.js";

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

function FilterBar() {
  const classes = useStyles();
  const numbers = [1];
  return (
    <>
      <Box sx={{ p: 3 }}>
        <Box>
          <Grid container spacing={2}>
            <Grid item xs={3}>
              <img
                width="50"
                height="50"
                src="https://images.godsunchained.com/misc/gu-sigel.png"
                alt="HMS"
              />
            </Grid>
            <Grid item xs={9} sx={{ mt: 1 }}>
              <Typography variant="h4">Collection Name</Typography>
            </Grid>
          </Grid>
        </Box>
        <Divider sx={{ mt: 1, mb: 5 }} />
        {numbers.map((number) => {
          return (
            <Box sx={{ mt: 2 }}>
              <Box>
                <Stack spacing={3}>
                  <Autocomplete
                    multiple
                    id="tags-outlined"
                    options={SearchNFTs}
                    getOptionLabel={(option) => option.label}
                    defaultValue={[SearchNFTs[2]]}
                    filterSelectedOptions
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        label="List of Attribute"
                        placeholder={"Attributes"}
                      />
                    )}
                  />
                </Stack>
              </Box>
              <Box sx={{ mt: 2 }}>
                <Autocomplete
                  multiple
                  id="checkboxes-tags-demo"
                  options={SearchNFTs}
                  disableCloseOnSelect
                  getOptionLabel={(option) => option.label}
                  defaultValue={[SearchNFTs[2]]}
                  renderOption={(props, option, { selected }) => (
                    <li {...props}>
                      <Checkbox
                        icon={icon}
                        checkedIcon={checkedIcon}
                        style={{ marginRight: 8 }}
                        checked={selected}
                      />
                      {option.label}
                    </li>
                  )}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label="List of Attribute"
                      placeholder="Attributes"
                    />
                  )}
                />
              </Box>
            </Box>
          );
        })}
      </Box>
    </>
  );
}

export default FilterBar;

const SearchNFTs = [
  { label: "ABC", value: 1 },
  { label: "ABC", value: 2 },
  { label: "ABC", value: 3 },
  { label: "ABC", value: 4 },
  { label: "ABC", value: 5 },
  { label: "ABC", value: 6 },
  { label: "ABC", value: 7 },
];
