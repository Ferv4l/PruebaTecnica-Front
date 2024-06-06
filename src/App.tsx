import { useEffect, useMemo, useRef, useState } from 'react';
import './App.css';
import { ListaUsuarios } from './components/ListaUsuarios';
import { User } from './interfaces/userInterface';
import { fetchUsers } from './services/userService';

function App() {
  const [users, setUsers] = useState<User[]>([]);
  const [cambiarColores, setCambiarColores] = useState(false);
  const [sorting, setSorting] = useState('none');
  const usuariosOriginales = useRef<User[]>([]);

  useEffect(() => {
    traerUsuarios();
  }, []);

  const traerUsuarios = async () => {
    try {
      const tUsuarios = await fetchUsers(100);
      setUsers(tUsuarios);
      usuariosOriginales.current = tUsuarios;
    } catch {
      console.error('Error al traer los usuarios');
    }
  };

  const sortedUsers = useMemo(() => {
    if (sorting === 'none') return users;
    const extractProperty = (user: User) => user.location.country;
    return [...users].sort((a, b) => extractProperty(a).localeCompare(extractProperty(b)));
  }, [users, sorting]);

  return (
    <div className="App">
      <h1>Lista de usuarios</h1>
      <header>
        <button onClick={() => setCambiarColores(!cambiarColores)}>Colorear filas</button>
        <button onClick={() => setSorting(sorting === 'none' ? 'country' : 'none')}>
          {sorting === 'country' ? 'No ordenar por país' : 'Ordenar por país'}
        </button>
        <button onClick={() => setUsers(usuariosOriginales.current)}>Resetear Usuarios</button>
      </header>
      <main>
        <ListaUsuarios deleteUser={(email) => setUsers(users.filter((user) => user.email !== email))} 
                       cambiarColores={cambiarColores} 
                       users={sortedUsers} />
      </main>
    </div>
  );
}

export default App;
