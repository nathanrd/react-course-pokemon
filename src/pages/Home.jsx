import React, {Component, useState} from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

export default function Home() {
    const [text, setText] = useState("");
    const [pokemon, setPokemon] = useState({});
    const [loading, setLoading] = useState(false);

    const handleChange = ({currentTarget}) => {
        setText(currentTarget.value);
    }
    const handleSearch = () => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${text}`)
        .then(res => res.json())
        .then((result) => {
            setPokemon(result);
            setLoading(true);
        })
    }
        return (
            <div className="container">
                <TextField
                    id="outlined-search"
                    label="Search field"
                    type="search"
                    margin="normal"
                    variant="outlined"
                    onChange={handleChange}
                />
                <Button variant="contained" color="primary" onClick={handleSearch}>
                SØK
                </Button>
                {!loading ?
                <p>Awaiting pokemon.</p>
                : 
                <Paper className="paper">
                <Typography variant="h5" component="h3" className="paper-title">
                  {pokemon.name}
                </Typography>
                <Typography component="p">
                    <img src={pokemon.sprites.front_default} />
                </Typography>
                <Typography component="p">
                    <h3>Abilities</h3>
                        {pokemon.abilities.map(p => {
                            return ( 
                                <p>{p.ability.name}</p>
                            )
                        })}
                </Typography>
                </Paper>
                }
            </div>
        )
}