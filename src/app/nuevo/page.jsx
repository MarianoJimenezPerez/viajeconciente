import "./Nuevo.css";
export default function NuevoPage() {
  return (
    <div className="new__page">
      <div className="container">
        <div className="left">
          <input
            type="text"
            placeholder="Título de post"
            id="titulo"
            required
          />
          <div className="editor__container"></div>
        </div>
        <div className="right">
          <div className="box">
            <input
              style={{ display: "none" }}
              type="file"
              name="imagen"
              id="imagen"
              required
            />
            <label htmlFor="imagen" style={{ cursor: "pointer" }}>
              Subir imagen
            </label>
          </div>
          <div className="box">
            <h2>Categoría</h2>
            <div className="cat">
              <input
                type="radio"
                name="cat"
                value={"Tecnología"}
                id="tecnologia"
              />
              <label htmlFor="tecnologia">Tecnología</label>
            </div>

            <div className="cat">
              <input type="radio" name="cat" value={"Ciencia"} id="ciencia" />
              <label htmlFor="ciencia">Ciencia</label>
            </div>

            <div className="cat">
              <input type="radio" name="cat" value={"Viajes"} id="viajes" />
              <label htmlFor="viajes">Viajes</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
