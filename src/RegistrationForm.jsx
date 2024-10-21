import React, { useRef } from 'react';

function RegistrationForm() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();
  const ownerRef = useRef();
  const buyerRef = useRef();
  const termsRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const confirmPassword = confirmPasswordRef.current.value;
    const isOwner = ownerRef.current.checked;
    const isBuyer = buyerRef.current.checked;
    const termsAccepted = termsRef.current.checked;

    if (!email || !password || !confirmPassword) {
      alert('Please fill in all fields.');
      return;
    }

    if (password !== confirmPassword) {
      alert('Passwords do not match.');
      return;
    }

    if (!termsAccepted) {
      alert('You must accept the Terms of Use and Privacy Policy.');
      return;
    }

    if (!isOwner && !isBuyer) {
      alert('Please select at least one checkbox (I own an allotment or I want to buy produce).');
      return;
    }

    alert('Form submitted successfully!');

    console.log({
      email,
      password,
      isOwner,
      isBuyer,
      termsAccepted
    });
  };

  return (
    <form onSubmit={handleSubmit} className="center" novalidate>
      <label className="textInput" htmlFor="name">Name:</label>
      <input type="text" id="name" name="name" required maxLength="50" /><br /><br />

      <label className="textInput" htmlFor="email">Email:</label>
      <input type="email" id="email" name="email" ref={emailRef} required /><br /><br />

      <label className="textInput" htmlFor="password">Password:</label>
      <input type="password" id="password" name="password" ref={passwordRef} required minLength="8" /><br /><br />

      <label className="textInput" htmlFor="repPassword">Re-type password:</label>
      <input type="password" id="repPassword" name="repPassword" ref={confirmPasswordRef} required minLength="8" /><br /><br />

      <input type="checkbox" id="buyer" name="buyer" ref={buyerRef} />
      <label htmlFor="buyer">I want to buy produce directly from allotment owners.</label><br />

      <input type="checkbox" id="owner" name="owner" ref={ownerRef} />
      <label htmlFor="owner">I own an allotment.</label><br /><br />

      <input type="checkbox" id="tos" name="tos" ref={termsRef} required />
      <label htmlFor="tos">I agree to the <a href="#">Terms of Use</a> and <a href="#">Privacy Policy</a>.</label><br /><br />

      <button type="submit">Register</button>
    </form>
  );
}

export default RegistrationForm;
