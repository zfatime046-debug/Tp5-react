import { useState } from 'react';
import { UserContext } from './UtilisateurContext';
import FormulaireControle from './FormulaireControle';
import FormulaireNonControle from './FormulaireNonControle';
import TemperatureConvertor from './TemperatureConvertor';
import Profil from './Profil';
import './App.css';

function App() {
  const [user, setUser] = useState({
    nom: 'Alice',
    connecte: true
  });

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <div>
        <h1>TP React débutant</h1>
        <h2>Formulaire Contrôlé</h2>
        <FormulaireControle />
        <h2>Formulaire Non-Contrôlé</h2>
        <FormulaireNonControle />
        <h2>Lifting State Up</h2>
        <TemperatureConvertor />
        <h2>Profil Utilisateur</h2>
        <Profil />
      </div>
    </UserContext.Provider>
  );
}

export default App;