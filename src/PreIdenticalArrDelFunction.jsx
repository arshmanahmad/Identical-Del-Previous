import React, { useState } from 'react'

const PreIdenticalArrDelFunction = () => {
    const [data, setData] = useState([
        [{ id: 1, name: "Arshman" }],
        [{ id: 2, name: "ali" }],
        [{ id: 2, name: "Shuja" }],
        [{ id: 4, name: "hassan" }],

    ]);
    const [fetchedItems, setFetchedItem] = useState([])
    const handleCheckFunction = (id) => {
        const fetchSame = data.map((item) => {
            const filteredItems = item.filter((dataItem) => dataItem.id === id);

            if (filteredItems.length > 0) {
                const areAllNamesSame = filteredItems.every(
                    (dataItem) => dataItem.name === filteredItems[0].name
                );

                if (areAllNamesSame) {
                    return filteredItems.map((matchingItem) => matchingItem.name[matchingItem.name.length - 1]);
                }
            }

            return null; // or any default value if the names are not the same
        });
        console.log(fetchSame);
        // const fetchSame = data.map((item) => {
        //     return item
        //         .filter((dataItem) => dataItem.id === id)
        //         .map((matchingItem) => matchingItem.name);
        // })
        // setFetchedItem(fetchSame);
        // console.log(fetchedItems)

    }

    return (
        <>
            <div>
                <table>
                    <thead>
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
            </div>
        </>
    )
}
{/* // item.map((dataItem, id) => (
//     <tr key={id}>
//         <td>{dataItem.id}</td>
//         <td>{dataItem.name}</td>
//     </tr>
// )) */}

export default PreIdenticalArrDelFunction