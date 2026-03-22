function TemperatureInput({ tempValue, handleTempChange }) {
  return (
    <input
      type="number"
      value={tempValue}
      onChange={(e) => handleTempChange(e.target.value)}
      placeholder="Température °C"
    />
  );
}

export default TemperatureInput;