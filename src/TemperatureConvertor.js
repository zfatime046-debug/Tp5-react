import { useState } from 'react';
import TemperatureInput from './TemperatureInput';

function TemperatureConvertor() {
  const [tempValue, setTempValue] = useState('');

  return (
    <div>
      <TemperatureInput
        tempValue={tempValue}
        handleTempChange={setTempValue}
      />
      <p>
        {tempValue
          ? `Température saisie : ${tempValue} °C`
          : 'Aucune température saisie'}
      </p>
    </div>
  );
}

export default TemperatureConvertor;