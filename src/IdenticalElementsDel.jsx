import React, { useState } from 'react'

const IdenticalElementsDel = () => {
    const [firstArr, setFirstArr] = useState([
        { id: 1, name: "Arshman" },
        { id: 2, name: "Shuja" },
        { id: 3, name: "Hasham" },
    ])
    const [secondArr, setSecondArr] = useState([
        { id: 1, name: "Ali" },
        { id: 4, name: "Asad" },
        { id: 5, name: "Hanan" },
    ])
    const filteredArr = (arr1, arr2) => {
        const filtered = arr1.filter((item) => {
            return item.id !== arr2[0].id
        })
        setFirstArr(filtered)
    }
    return (
        <>
            <div><button onClick={() => filteredArr(firstArr, secondArr)}>Filter</button></div>
            {
                firstArr.map((item) => {
                    return (
                        <li>{item.name}</li>
                    )
                })
            }
        </>
    )
}

export default IdenticalElementsDel