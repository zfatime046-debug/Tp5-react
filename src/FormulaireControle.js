import { useState } from 'react';

function FormulaireControle() {
  const [name, setName] = useState('');
  const [userEmail, setUserEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Nom : ${name}, Email : ${userEmail}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Nom"
      />
      <input
        type="email"
        value={userEmail}
        onChange={(e) => setUserEmail(e.target.value)}
        placeholder="Email"
      />
      <button type="submit">Envoyer</button>
    </form>
  );
}

export default FormulaireControle;