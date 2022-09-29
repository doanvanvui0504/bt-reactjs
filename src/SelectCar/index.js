import { useState } from "react";

export default function App() {
  const [selectedCar, setSelectedCar] = useState({
    car: "",
    color: "",
  });

  const handleSelect = (e) => {
    setSelectedCar((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className="App">
      <h2>Select your car</h2>
      <div>
        <label style={{ marginRight: 10 }}>Select a car</label>
        <select name="car" value={selectedCar.car} onChange={handleSelect}>
          <option value="RollRoyce">Roll Royce</option>
          <option value="Porche">Porche</option>
          <option value="Maybach">Maybach</option>
          <option value="Mazda">Mazda</option>
        </select>
      </div>
      <div style={{ marginTop: 10 }}>
        <label style={{ marginRight: 10 }}>Select a color</label>
        <select name="color" value={selectedCar.color} onChange={handleSelect}>
          <option value="Red">Red</option>
          <option value="Yellow">Yellow</option>
          <option value="Green">Green</option>
          <option value="Blue">Blue</option>
        </select>
      </div>
      {selectedCar.color && selectedCar.car && (
        <h4>
          You selected {selectedCar.color} - {selectedCar.car}
        </h4>
      )}
    </div>
  );
}
