import React, { useRef, useState } from 'react'

const ExpenseTracker = () => {
    const [clicked, setclicked] = useState(false);
    let snoRef = useRef()
    let placeRef = useRef()
    let travelRef = useRef()
    let dinerRef = useRef()

    // let haadingRef= useRef();
    const [arr, setarr] = useState([
        {
            id: 1,
            place: "lucknow",
            travel: 5226,
            diner: 546
        },
        {
            id: 2,
            place: "hdsf",
            travel: 6546,
            diner: 465
        },
        {
            id: 3,
            place: "kjdbvj",
            travel: 54165,
            diner: 554546
        },
        {
            id: 4,
            place: "jbvj",
            travel: 16,
            diner: 662
        },
        {
            id: 5,
            place: "jfjr",
            travel: 662,
            diner: 13
        },
    ]);


    const handleSubmit = (e) => {
       e.preventDefault()
        let obj = {
            id:snoRef.current.value,
            place:placeRef.current.value,
            travel:travelRef.current.value,
            diner:dinerRef.current.value,

        }
        console.log(obj)
        // console.log(handleRef.current.innerHTML)
        if (obj.id && obj.place && obj.travel && obj.diner) {
            setarr([...arr,obj])
        }
        else {
            alert("not filled all required ")
        }
        //arr.push(obl)
        // console.log(arr)
    }

    const handleDelete = (ans, index) => {
        // method -1 
        // console.log(ans, index)
        // let copyArr = [...arr]

        // // console.log(copyArr)
        // copyArr.splice(index, 1)
        // console.log(copyArr)
        // setarr(copyArr)

        // indexing for second method

        let i = arr.findIndex((e) =>e.id === ans.id)
        console.log(i)


        // method-2

        let filteredArr = arr.filter((e)=>e.id != ans.id)
        setarr(filteredArr)
    }
    return (
        <div>
            <h1 className='text-center'>ExpenseTracker App</h1>
            {/* method.1     */}
            {/* {
        <p>{arr[0].place}</p>
        <p>{arr[0].travel}</p>
        <p>{arr[0].diner}</p>
        <p>{arr[1].place}</p>
        <p>{arr[1].travel}</p>
        <p>{arr[1].diner}</p>
        }  */}
            {/* method.2 */}
            {/* {
            arr.map((obj)=>{
                return <div>
                    <p>{obj.place}</p>
                    <p>{obj.travel}</p>
                    <p>{obj.diner}</p>
                </div>
            })
        } */}
            <div className='text-center'>
                <button onClick={() => setclicked(true)} className='btn btn-info my-2 '>AddExpense</button>
            </div>
            {
                clicked && <form style={{ width: "max-Content" }} action='' className='expenseFrom d-flex gap-2 bg-dark my-3 mx-auto p-3'>

                    <input className='text-center' type='number' id='name' placeholder='enter sno' ref={snoRef} />
                    <input className='text-center' type='text' id='name' placeholder='enter place' ref={placeRef} />
                    <input className='text-center' type='number' id='name' placeholder='enter travel' ref={travelRef} />
                    <input className='text-center' type='number' id='name' placeholder='enter diner' ref={dinerRef} />
                    <button onClick={handleSubmit} className='bg-danger rounded-5 py-1'>AddItems</button>
                    <button onClick={() => setclicked(false)} type="button" className="btn-close bg-white" aria-label="Close" ></button>


                </form>
            }

            <table className="table table-dark w-75 m-auto text-center">
                <thead>
                    <tr>
                        <th scope="col">sno</th>
                        <th scope="col">place</th>
                        <th scope="col">travel</th>
                        <th scope="col">diner</th>
                        <th scope="col">DeleteItem</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        arr.map((obj, i) => {
                            return <tr
                                key={obj.id}>
                                <th>{i + 1}</th>
                                <td>{obj.place}</td>
                                <td>{obj.travel}</td>
                                <td>{obj.diner}</td>
                                <td><button onClick={() => handleDelete(obj, i)} className='btn btn-warning'>Delete</button></td>
                            </tr>
                        })
                    }

                </tbody>
            </table>


        </div>
    )
}

export default ExpenseTracker
