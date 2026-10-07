function AlumnosView({ alumnos, tarjetas }) {
  return (
    <div className="contenedor">
      <h1>Primer parcial</h1>

      <table>
        <thead>
          <tr><th>ID</th><th>Nombre</th><th>Materia</th><th>Calif.</th></tr>
        </thead>
        <tbody>
          {alumnos.map((a) => (
            <tr key={a.id}>
              <td>{a.id}</td><td>{a.nombre}</td><td>{a.materia}</td><td>{a.calif}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="tarjetas">
        {tarjetas.map((t) => (
          <div className="tarjeta" key={t}>
            <h3>{t}</h3>
            <p>Contenido de ejemplo</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AlumnosView;