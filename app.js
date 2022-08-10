// https://calculator.swiftutors.com/osmotic-pressure-calculator.html

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const v4 = document.getElementById('v4');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const osmoticPressureRadio = document.getElementById('osmoticPressureRadio');
const noofIonsProducedatDissociationofSoluteRadio = document.getElementById('noofIonsProducedatDissociationofSoluteRadio');
const osmoticCoefficientRadio = document.getElementById('osmoticCoefficientRadio');
const molarorMolalConcentrationRadio = document.getElementById('molarorMolalConcentrationRadio');
const absoluteTemperatureRadio = document.getElementById('absoluteTemperatureRadio');

let osmoticPressure;
const R = 0.083145;
let noofIonsProducedatDissociationofSolute = v1;
let osmoticCoefficient = v2;
let molarorMolalConcentration = v3;
let absoluteTemperature = v4;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');
const variable3 = document.getElementById('variable3');
const variable4 = document.getElementById('variable4');

osmoticPressureRadio.addEventListener('click', function() {
  variable1.textContent = '(i) No. of Ions Produced at Dissociation of Solute';
  variable2.textContent = '(Φ) Osmotic Coefficient';
  variable3.textContent = '(C) Molar or Molal Concentration (mol/L)';
  variable4.textContent = '(T) Absolute Temperature (K)';
  noofIonsProducedatDissociationofSolute = v1;
  osmoticCoefficient = v2;
  molarorMolalConcentration = v3;
  absoluteTemperature = v4;
  result.textContent = '';
});

noofIonsProducedatDissociationofSoluteRadio.addEventListener('click', function() {
  variable1.textContent = '(∏) Osmotic Pressure (Bar)';
  variable2.textContent = '(Φ) Osmotic Coefficient';
  variable3.textContent = '(C) Molar or Molal Concentration (mol/L)';
  variable4.textContent = '(T) Absolute Temperature (K)';
  osmoticPressure = v1;
  osmoticCoefficient = v2;
  molarorMolalConcentration = v3;
  absoluteTemperature = v4;
  result.textContent = '';
});

osmoticCoefficientRadio.addEventListener('click', function() {
  variable1.textContent = '(∏) Osmotic Pressure (Bar)';
  variable2.textContent = '(i) No. of Ions Produced at Dissociation of Solute';
  variable3.textContent = '(C) Molar or Molal Concentration (mol/L)';
  variable4.textContent = '(T) Absolute Temperature (K)';
  osmoticPressure = v1;
  noofIonsProducedatDissociationofSolute = v2;
  molarorMolalConcentration = v3;
  absoluteTemperature = v4;
  result.textContent = '';
});

molarorMolalConcentrationRadio.addEventListener('click', function() {
  variable1.textContent = '(∏) Osmotic Pressure (Bar)';
  variable2.textContent = '(i) No. of Ions Produced at Dissociation of Solute';
  variable3.textContent = '(Φ) Osmotic Coefficient';
  variable4.textContent = '(T) Absolute Temperature (K)';
  osmoticPressure = v1;
  noofIonsProducedatDissociationofSolute = v2;
  osmoticCoefficient = v3;
  absoluteTemperature = v4;
  result.textContent = '';
});

absoluteTemperatureRadio.addEventListener('click', function() {
  variable1.textContent = '(∏) Osmotic Pressure (Bar)';
  variable2.textContent = '(i) No. of Ions Produced at Dissociation of Solute';
  variable3.textContent = '(Φ) Osmotic Coefficient';
  variable4.textContent = '(C) Molar or Molal Concentration (mol/L)';
  osmoticPressure = v1;
  noofIonsProducedatDissociationofSolute = v2;
  osmoticCoefficient = v3;
  molarorMolalConcentration = v4;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(osmoticPressureRadio.checked)
    result.textContent = `Osmotic Pressure = ${computeOsmoticPressure().toFixed(2)} Bar`;

  else if(noofIonsProducedatDissociationofSoluteRadio.checked)
    result.textContent = `No. of Ions Produced at Dissociation of Solute = ${computeNoofIonsProducedatDissociationofSolute().toFixed(2)}`;

  else if(osmoticCoefficientRadio.checked)
    result.textContent = `Osmotic Coefficient = ${computeOsmoticCoefficient().toFixed(2)}`;

  else if(molarorMolalConcentrationRadio.checked)
    result.textContent = `Molar or Molal Concentration = ${computeMolarorMolalConcentration().toFixed(2)} mol/L`;

  else if(absoluteTemperatureRadio.checked)
    result.textContent = `Absolute Temperature = ${computeAbsoluteTemperature().toFixed(2)} K`;
})

// calculation

function computeOsmoticPressure() {
  return Number(noofIonsProducedatDissociationofSolute.value) * Number(osmoticCoefficient.value) * R * Number(absoluteTemperature.value) * Number(molarorMolalConcentration.value);
}

function computeNoofIonsProducedatDissociationofSolute() {
  return Number(osmoticPressure.value) / (Number(osmoticCoefficient.value) * R * Number(absoluteTemperature.value) * Number(molarorMolalConcentration.value));
}

function computeOsmoticCoefficient() {
  return Number(osmoticPressure.value) / (Number(noofIonsProducedatDissociationofSolute.value) * R * Number(absoluteTemperature.value) * Number(molarorMolalConcentration.value));
}

function computeMolarorMolalConcentration() {
  return Number(osmoticPressure.value) / (Number(noofIonsProducedatDissociationofSolute.value) * R * Number(osmoticCoefficient.value) * Number(absoluteTemperature.value));
}

function computeAbsoluteTemperature() {
  return Number(osmoticPressure.value) / (Number(noofIonsProducedatDissociationofSolute.value) * R * Number(osmoticCoefficient.value) * Number(molarorMolalConcentration.value));
}