import React, {useState, useEffect} from 'react';
import { Link } from "react-router-dom";


function SearchBox() {
    const [searchWord, setSearchWord] = useState('');
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8080/api/product/")
            .then(response => response.json())
            .then(json => setData(json));
    }, []);

    const searchPattern = (event) => {
        setSearchWord(event.target.value);
    }

    return (
        <div>
            <input
                style={styled}
                type="text"
                placeholder="Search..."
                onChange={searchPattern}
            />
            {data
                .filter((value) => {
                    if (searchWord === "") {
                        return "";
                    } else if (value.title
                        .toLowerCase()
                        .includes(searchWord.toLowerCase())
                    ) {
                        return value
                    };
                })
                .map((value, key) => {
                    return (
                        <div className="user" key={key}>
                            <p>
                                <Link to={`/product/${value.id}`}>{value.title}</Link>
                            </p>
                        </div>
                    );
                })}
        </div>
    );
}

const styled = {
    marginTop: "20px",
    marginBottom: "15px",
    width: "350px",
    height: "40px",
    borderRadius: "2px",
    border: "2px dotted pink",
    color: "#2F4858",
    fontSize: "20px",
    paddingLeft: "10px"
}

export default SearchBox;