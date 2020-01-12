import * as React from "react";
import styled from "styled-components";
import {
  FormControl,
  TextField,
  InputAdornment,
  Select,
  MenuItem,
  Grid
} from "@material-ui/core";
import { Search } from "@material-ui/icons";
import { useDispatch } from "react-redux";
import { TaskStatus } from "../../store/interfaces";
import { getTasks } from "../../store/tasks/tasks.actions";
import { IFilter } from "../../services/interfaces";

const Filter = () => {
  const dispatch = useDispatch();

  const [filter, setFilter] = React.useState({
    search: "",
    status: ""
  });

  React.useEffect(() => {
    filterTasks(filter as IFilter);
  }, [filter]);

  const filterTasks = async (args: IFilter) => {
    dispatch(await getTasks(args));
  };

  const onChange = (e: any) =>
    setFilter({ ...filter, [e.target.name]: e.target.value });

  return (
    <FilterContainer>
      <Grid container spacing={1} justify="space-around">
        <Grid item xs={8}>
          <ControlContainer>
            <FormControl fullWidth>
              <TextField
                placeholder="Pesquisar..."
                name="search"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Search />
                    </InputAdornment>
                  )
                }}
                onChange={onChange}
              />
            </FormControl>
          </ControlContainer>
        </Grid>

        <Grid item xs={3}>
          <ControlContainer>
            <FormControl fullWidth>
              <Select
                displayEmpty
                onChange={onChange}
                name="status"
                value={filter.status}
              >
                <MenuItem value={""}>Nenhum status selecionado</MenuItem>
                <MenuItem value={TaskStatus.OPEN}>Aberta</MenuItem>
                <MenuItem value={TaskStatus.IN_PROGRESS}>Em progresso</MenuItem>
                <MenuItem value={TaskStatus.DONE}>Finalizada</MenuItem>
              </Select>
            </FormControl>
          </ControlContainer>
        </Grid>
      </Grid>
    </FilterContainer>
  );
};

const FilterContainer = styled.div`
  margin-top: 20px;
  width: 100%;
  max-width: 860px;
`;

const ControlContainer = styled.div`
  background-color: #c0cde0;
  border-radius: 5px;
  padding: 10px;
`;

export default Filter;
