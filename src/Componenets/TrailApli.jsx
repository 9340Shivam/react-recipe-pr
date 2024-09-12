import React, { useEffect, useState } from 'react'

const TrailApli = () => {

    const [items, setitems] = useState([]);
    console.log(items)

    const getData = async()=>{
        let res = await fetch('https://dummyjson.com/products')

        let data = await res.json()
        console.log(data.products)
        setitems(data.products)
    }
    useEffect(() => {
     getData()
      
    }, []);
    
  return (
    <div>
      this is trail

    </div>
  )
}

export default TrailApli
