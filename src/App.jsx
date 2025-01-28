import React, { useState, useEffect, useRef } from 'react';

function Pro() {
  const emailInputRef = useRef(null);
  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');
  const [input3, setInput3] = useState('');
  const [input4, setInput4] = useState('');
  const [submissions, setSubmissions] = useState([]);  // Store each submission

  useEffect(() => {
    emailInputRef.current.focus();
    document.title = "TASK";
  }, []);

  const i1 = (e) => {
    setInput1(e.target.value);
  };
  const i2 = (e) => {
    setInput2(e.target.value);
  };
  const i3 = (e) => {
    setInput3(e.target.value);
  };
  const i4 = (e) => {
    setInput4(e.target.value);
  };

  const enterDetails = () => {
    // Add the new submission to the submissions array
    const newSubmission = {
      name: input1,
      email: input2,
      password: input3,
      mobile: input4,
    };
    setSubmissions((prevSubmissions) => [...prevSubmissions, newSubmission]);

    // Reset input fields after submission
    setInput1('');
    setInput2('');
    setInput3('');
    setInput4('');
    enterDe()
  };
  const enterDe = () => {
    const displayElement1 = document.querySelector('.form-container');
    if (displayElement1.style.display === "none") {
      displayElement1.style.display = "block";
    } else {
      displayElement1.style.display = "none";
    }
  };

  return (
    <>
      <div>
        <button className="display" onClick={enterDe}>Enter New Details</button>
      </div>
      <div className="form-container">
        <p className="title">Welcome</p>
        <form className="form" onSubmit={(e) => e.preventDefault()}>
          <input type="text" className="input1" placeholder="Enter your Name"
            ref={emailInputRef} value={input1} onChange={i1} />
          <input type="email" className="input2" placeholder="Enter your Email"
            autoComplete="email" value={input2} onChange={i2} />
          <input type="password" className="input3" placeholder="Enter New Password"
            value={input3} onChange={i3} />
          <input type="text" className="input4" placeholder="Enter your Mobile Number"
            value={input4} onChange={i4} />
          <button className="form-btn" type="button" onClick={enterDetails}>
            Submit
          </button>
        </form>
      </div>

      <div className="displayed-values-container">
        {submissions.map((submission, index) => (
          <div key={index} className="displayed-values">
            <h4 id="q">Name: <span id="w">{submission.name}</span></h4>
            <h4 id="q">Email: <span id="w">{submission.email}</span></h4>
            <h4 id="q">Password: <span id="w">{submission.password}</span></h4>
            <h4 id="q">Mobile Number: <span id="w">{submission.mobile}</span></h4>
          </div>
        ))}
      </div>
    </>
  );
}

export default Pro;
