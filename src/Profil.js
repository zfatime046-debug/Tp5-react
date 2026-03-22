import { useContext } from 'react';
import { UserContext } from './UtilisateurContext';

function Profil() {
  const { user, setUser } = useContext(UserContext);

  const handleLogout = () => {
    setUser({ nom: '', connecte: false });
  };

  return (
    <div>
      {user.connecte ? (
        <>
          <p>Bienvenue, {user.nom}</p>
          <button onClick={handleLogout}>Se déconnecter</button>
        </>
      ) : (
        <p>Veuillez vous connecter.</p>
      )}
    </div>
  );
}

export default Profil;