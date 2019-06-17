import {Box, Button, Chip, Grid, Input, makeStyles, Paper, Typography} from "@material-ui/core";
import React, {useState} from "react";
import "./App.css";
import logo from "./logo.svg";
// import axios, {AxiosError, AxiosResponse} from "axios";

interface NumberButtonType {
  number: number;
  letters: string[];
}

const useButtonStyles = makeStyles((theme) => ({
  control: {
    padding: theme.spacing(4),
  },
}));

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(10),
    border: '1px solid',
  },
  root: {
    // flexGrow: 1,
    maxWidth: '500',
  },
  chip: {
    padding: theme.spacing(1),
    margin: theme.spacing(1),
  }
}));

const App: React.FC = () => {
  const classes = useStyles();
  const [numbers, setNumbers] = useState("");
  const [words, setWords] = useState<string[]>([]);


  interface Words {
    words: string[]
  }
  const retrieveWords = async(numbers: string): Promise<Words> => {
    const response = await fetch(`http://localhost:3000/api/v1/${numbers}`);
    const body = await response.json();

    if (response.status !== 200) {
      return { words: [] };
    }
    return body;
  };

  const retrieve = async(numberToRetrieve: string) => {
    if (numberToRetrieve === "") {
      setWords([]);
      setNumbers("");
      return;
    }

    setNumbers(numberToRetrieve);
    const { words } = await retrieveWords(numberToRetrieve);
    setWords(words && words.slice(0,10) || []);
  };

  const NumberButton = ({ number, letters }: NumberButtonType) => {
    const classes = useButtonStyles();
    return (
      <Grid item xs={4}>
        <Box maxWidth={130}>
          <Button className={classes.control} onClick={() => retrieve(`${numbers}${number}`)}>
            <Typography align="center" variant="h2">{ number }</Typography>
          </Button>
          <Typography align="center" className={classes.control}>{ letters.join(' ') }</Typography>
        </Box>
      </Grid>
    );
  };

  const DeleteButton = () => {
    const classes = useButtonStyles();
    return (
      <Grid item xs={4}>
        <Button className={classes.control} onClick={() => retrieve(numbers.slice(0, numbers.length - 1))}>
          <Typography align="center" variant="h2">DEL</Typography>
        </Button>
      </Grid>
    );
  }

  return (
    <Box className={classes.root} justifyContent="flex-start">
      <Grid container spacing={6} className={classes.container} justify="flex-start">
        <Grid item xs={12}>
          <Input value={numbers} disabled />
        </Grid>
        <Grid item xs={12}>
          {words.map((word) => (
            <Chip key={word} label={word} className={classes.chip} />
          ))}
          {words.length === 0 &&
            <Chip key="_" label="Enter numbers to get words" className={classes.chip} />
          }
        </Grid>
        <NumberButton number={1} letters={[]} />
        <NumberButton number={2} letters={['a', 'b', 'c']} />
        <NumberButton number={3} letters={['d', 'e', 'f']}  />
        <NumberButton number={4} letters={['g', 'h', 'i']}  />
        <NumberButton number={5} letters={['j', 'k', 'l']}  />
        <NumberButton number={6} letters={['m', 'n', 'o']}  />
        <NumberButton number={7} letters={['p', 'q', 'r', 's']}  />
        <NumberButton number={8} letters={['t', 'u', 'v']}  />
        <NumberButton number={9} letters={['w', 'x', 'y', 'z']}  />
        <Grid item xs={4} />
        <Grid item xs={4} />
        <DeleteButton />
      </Grid>
    </Box>
  );
};
export default App;
