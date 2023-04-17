import React , { useEffect , useState} from "react";
import api from "../../services/api";
import './styles.css';


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

         
        <div className="container-global">



        <div>
        <form onSubmit={SearchSubmit}>
            <h1>Search</h1>
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
        </div>

        <div>
        <ul className="card-container">
            {list.map(listItem => (
                
                <div key={listItem.id}>
                    <div className="container">
                    <div class="wrapper">
                    
                    <div class="banner-image"><img src={listItem.img}/></div>
                    <h1>Name: {listItem.name}</h1>
                    
                    <p>Level: {listItem.level}</p>
                    <br></br>
                    </div>
                    </div>
                </div>
            ))}
        </ul>
        </div>
        
        </div>

    );
}