import React, {useState} from 'react'

const CounterDiv = () => {

    const [Count, setCount] = useState(0);
    const clickBtn1 = () => {
        setCount(Count+1)
        console.log(Count);
    }
    const clickBtn2 = () => {
        if(Count <= 0) {
            alert("Count can't be negative")
        }
        else {
            setCount(Count-1);
        }
    }

  return (
    <div className="flex items-end justify-center bg-slate-900">
        <div className="bg-indigo-300 py-7 px-6 w-1/4 h-52 my-64 border rounded-md">
            <h1 className="text-2xl font-medium mb-2">Counter App</h1>
            <p className="text-2xl font-bold">{Count}</p>
            <div className="flex my-4 mx-28 w-1/12 space-x-10">
                <button onClick={clickBtn1} className="border-black bg-blue-500 active:bg-blue-800 border px-2 py-1 text-xl rounded-md">+</button>
                <button onClick={clickBtn2} className="border-black bg-blue-500 active:bg-blue-800 border px-3 py-1 text-xl rounded-md">-</button>    
            </div>
        </div>
    </div>
  )
}

export default CounterDiv
