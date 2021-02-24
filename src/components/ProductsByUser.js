import axios from 'axios';
import React, {useState, useEffect} from 'react';
import ProductCards from './ProductCards';

const ProductsByUser = props => {
    const userId = props.match.params.userId;
    console.log(userId);

    const [data, setData] = useState({products:[]});

    useEffect(() => {
        axios.get(`http://localhost:8080/api/user/${userId}`)
            .then(res => setData(res.data));
    }, [])

    const productsByUser = data.products;
    const {firstName, lastName} = data;

    return (
        <React.Fragment>
            <h1 style={{margin: "2rem auto"}}>{`${firstName} ${lastName}'s products`}</h1>
            <div className="container" style={cardContainerStyle}>
                <div className="row">
                <ProductCards products={productsByUser} />
                </div>
            </div>
        </React.Fragment>
    )
}

const cardContainerStyle = {
    width: "80%",
    margin: "1rem auto",
  };

export default ProductsByUser

