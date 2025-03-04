import React from 'react'

export const searchbar = () => {
    let getvalue=(e)=>{
        setsearchdata(e.target.value)
      }
      let btn=()=>{
        // console.log(searchdata)
        setstop(true)
        // console.log(stop)
      }
  return (
    <div className='d-flex justify-content-center gap-2'>
    <div><input onChange={getvalue} placeholder='input'></input></div>
    <div><button  onClick={btn} className='ps-3 pe-3'>Click me</button></div>
    </div>
  )
}
