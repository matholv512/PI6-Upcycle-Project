import "./App.css";

function App() {
  return (
    <div className="App">
      <form
        method="post"
        encType="multipart/form-data"
        action="/upload"
        className="form"
      >
        <h1>Upload teste</h1>
        <label id="uploadLabel">
          Selecione o Arquivo
          <input
            required
            id="uploadFile"
            name="uploadFile"
            type="file"
          />
        </label>
        <br/>
        <button
          id="btn-enviar"
          type="submit"
        >
          Enviar
        </button>
      </form>
    </div>
  );
}

export default App;