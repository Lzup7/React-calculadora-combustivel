import { useState } from "react";
import './App.css';

export default function CalcularCombustivel() {
  const [alcoolPrice, setAlcoolPrice] = useState(0);
  const [gasolinaPrice, setGasolinaPrice] = useState(0);
  const [message, setMessage] = useState("");

  const calcularMelhorOpcao = () => {
    const resultado = alcoolPrice / gasolinaPrice;
    if (isNaN(resultado)) {
      setMessage("");
    } else if (resultado < 0.7) {
      setMessage("Abastecer com Álcool");
    } else {
      setMessage("Abastecer com Gasolina");
    }
  };

  return (
    <div className="container">
   

      <h1>Qual a melhor opção de combustivel?</h1>

      <label>Álcool (preço.L):</label>
      <input
        type="number"
        step="0.01"
        value={alcoolPrice}
        onChange={(e) => setAlcoolPrice(parseFloat(e.target.value))}
      />

      <label>Gasolina (preço.L):</label>
      <input
        type="number"
        step="0.01"
        value={gasolinaPrice}
        onChange={(e) => setGasolinaPrice(parseFloat(e.target.value))}
      />
      
      <button onClick={calcularMelhorOpcao}>
        Calcular
      </button>

      {message && <p>{message}</p>}
    </div>
  );
}