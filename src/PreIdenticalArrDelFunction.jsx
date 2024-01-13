import React, { useState } from 'react'

const PreIdenticalArrDelFunction = () => {
    const [data, setData] = useState([
        [{ id: 1, name: "Arshman" }],
        [{ id: 2, name: "ali" }],
        [{ id: 2, name: "Shuja" }],
        [{ id: 2, name: "Ali" }],
        [{ id: 4, name: "hassan" }],

    ]);
    const [getFilter, setGetFilter] = useState([])
    const handleCheckFunction = (id) => {
        const fetchSame = data.map((item) => {
            return item
                .filter((dataItem) => dataItem.id === id)
        })
        const getFiltered = fetchSame
            .filter((item) => item.length > 0)
        const lastElement = getFiltered[getFiltered.length - 1];
        setGetFilter(lastElement)
    }

    return (
        <>
            <div>
                <table>
                    <thead>
                        <th>id</th>
                        <th>name</th>
                    </thead>
                    <tbody>
                        {data.map((item, index) => (
                            item.map((dataItem, id) => {
                                return (
                                    <>
                                        <tr key={dataItem.id}>
                                            <td>{dataItem.id}</td>
                                            <td>{dataItem.name}</td>
                                            <button onClick={() => handleCheckFunction(dataItem.id)}>filter</button>
                                        </tr>
                                    </>
                                )
                            })
                        ))}
                    </tbody>
                </table>
                <table>
                    <thead>
                        <th>Filtered name</th>
                    </thead>
                    <tbody>
                        {getFilter.map((item) => {
                            return (
                                <tr>
                                    <td>{item.name}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default PreIdenticalArrDelFunction