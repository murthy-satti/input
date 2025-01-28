import React, { useState } from "react"

function App() {
  const [count, setCount] = useState(0)
  const increment = () => setCount(count + 1)
  const decrement = () => setCount(count - 1)
  const [name, setName] = useState()
  function done(e) {
    setName(e.target.value);
  }
  const [pay, setPay] = useState()
  function paymemtType(e) {
    setPay(e.target.value)

  }
  const [colo , setColo]= useState("#FFFFFF");
  function coloChange(e){
    setColo(e.target.value)
  }

  return (
    <>
      <p className="data">Name : <span className="val">{name}</span></p>

      <input type="text" placeholder="Enter your name" onChange={done} />
      <p className="data">Count : <span className="val">{count}</span></p>
      <button onClick={increment} className="btn"> Increment</button>
      <button onClick={decrement} className="btn"> Decrement</button><br /><br />

      <p className="data">Payment type : <span className="val">{pay}</span></p>

      <select value="payment" onChange={paymemtType} id="ggh" >

        <option >select one value</option>
        <option>Visa</option>
        <option>Paytm</option>
        <option>PhonePay</option>
        <option>Google Pay</option>
      </select> <br /><br />
      <input type="color" id="color" onChange={coloChange}/>
      <p className="data">Selected color  :<span className="val"> {colo}</span></p>
    </>
  )
}


export default App
