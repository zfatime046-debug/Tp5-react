import { useRef } from 'react';

function FormulaireNonControle() {
  const nameRef = useRef();
  const emailRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = nameRef.current.value;
    const userEmail = emailRef.current.value;
    alert(`Nom : ${name}, Email : ${userEmail}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" ref={nameRef} placeholder="Nom" />
      <input type="email" ref={emailRef} placeholder="Email" />
      <button type="submit">Envoyer</button>
    </form>
  );
}

export default FormulaireNonControle;