"use client"
import { MenuItem, Select} from "@mui/material";
import { useState } from "react";



export default function Home() {
  // Hooks Area
  const [celectedValue,setcelectedValue ] = useState( '')
  const [stockPrice,setStockPrice ] = useState( ' ')

  // Function Defination Area
  const handleChange = (e)=>{
    console.log(e.target.value);
    //Now Call the API
    // this is called promisschain
    fetch('/api/getstockprice').then((res)=>{
      return res.json()

      }).then((data)=>{
        // console.log(data)
        // console.log(data.price)
        setStockPrice(data.price);
      }).catch((err)=>{

      }).finally(()=>{

      })
  }


  return (
    <main>
      <h2>Corrent Price Of Below Stock Is {stockPrice}</h2>
        <Select value={celectedValue} onChange={handleChange}>
          <MenuItem value='idfc'>IDFCBANK</MenuItem>
          <MenuItem value='icici'>ICICIBANK</MenuItem>
          <MenuItem value='hdfc'>HDFCBANK</MenuItem>
        </Select>
    </main>
  )
}
