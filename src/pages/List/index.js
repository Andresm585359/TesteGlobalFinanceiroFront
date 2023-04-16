import React , { useEffect , useState} from "react";
import api from "../../services/api";


export default function List(){
    const [list, setList] = useState([]);
    const [searchName, setSearchName] = useState("");
    const [searchLevel, setSearchLevel] = useState("");

    useEffect(() => {
        api.get('list').then(response => {
            setList(response.data);
        })
    }, []);



    const SearchSubmit = (event) => {
        event.preventDefault();
        api
        .get("search", {
            params: {
                name: searchName,
                level: searchLevel,
            },
        })
        .then((response) => {
            setList(response.data);

        });
    };


    return (
        <div className="list-container">
         

        <form onSubmit={SearchSubmit}>
            <label>Buscar</label>
            <input
                className="Search"
                id="name"
                value={searchName}
                onChange={(event) => setSearchName(event.target.value)}
            ></input>
            <select
                className="ui compact selection dropdown"
                value={searchLevel}
                onChange={(event) => setSearchLevel(event.target.value)}
            >
            <option value="" >All</option>
            <option value="Fresh">Fresh</option>
            <option value="In Training">In Training</option>
            <option value="Training">Training</option>
            <option value="Rookie">Rookie</option>
            <option value="Champion">Champion</option>
            <option value="Ultimate">Ultimate</option>
            <option value="Mega">Mega</option>
            <option value="Armor">Armor</option>
            </select>
            <input type="submit"/>
        </form>
        <ul>
            {list.map(listItem => (
                <li key={listItem.id}>
                    <h2>Nome: {listItem.name}</h2>
                    <img src={listItem.img} width="200px"/>
                    <h3>Level: {listItem.level}</h3>
                    <br></br>
                </li>
            ))}
        </ul>

        
        </div>

    );
}