import { Ajustes } from "../interfaces/userInterface";

export function ListaUsuarios({ cambiarColores, users, deleteUser }: Ajustes) {
  return (
    <table width="100%">
      <thead>
        <tr>
          <th>Foto</th>
          <th>Nombre</th>
          <th>Apellido</th>
          <th>País</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody className={cambiarColores ? 'cambioColor' : ''}>
        {users.map(user => (
          <tr key={user.email}>
            <td>
              <img src={user.picture.thumbnail} />
            </td>
            <td>{user.name.first}</td>
            <td>{user.name.last}</td>
            <td>{user.location.country}</td>
            <td>
              <button onClick={() => deleteUser(user.email)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
