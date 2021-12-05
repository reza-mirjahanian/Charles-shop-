import React, {useEffect, useState} from "react";
import axios from 'axios';


export default function List() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);

    useEffect(() => {
        (async () => {
            try {
                let productId = `2021 BMW X1`;
                const {data} = await axios(
                    `${process.env.REACT_APP_API_URL}/sales/${productId}`,
                );

                setItems(data);
                setIsLoaded(true);
            } catch (e) {
                console.log(e);
                setError(true)
            }

        })()
    }, []);

    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>;
    } else {
        return (
            <table border="1">
                <thead>
                <tr>
                    <th>Car Model</th>
                    <th>Customer ID</th>
                    <th>Price</th>
                    <th>Comment</th>
                    <th>Create Date</th>
                </tr>
                </thead>

                <tbody>
                {items.map(item => (
                    <tr key={item._id}>
                        <td>{item.product_id}</td>
                        <td>{item.customer_id}</td>
                        <td>{item.price.toLocaleString()}</td>
                        <td>{item.comment}</td>
                        <td>{item.createdAt}</td>
                    </tr>

                ))}
                </tbody>

            </table>
        );
    }
}
