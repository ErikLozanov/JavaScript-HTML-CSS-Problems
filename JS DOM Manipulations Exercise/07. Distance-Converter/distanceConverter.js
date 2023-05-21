function attachEventsListeners() {
    let convertBtn = document.getElementById('convert');

    convertBtn.addEventListener('click', convert);

    function convert() {
        let fromInput = Number(document.querySelector('input[type="text"]').value);
        let outputText = document.getElementById('outputDistance');
        let inputUnits = document.getElementById('inputUnits');
        let selectedInputUnit = inputUnits.options[inputUnits.selectedIndex].value;
        let selectedOutput = document.getElementById('outputUnits');
        let selectedOutputUnit = selectedOutput.options[selectedOutput.selectedIndex].value;
        let convertedValue =  0;
        switch (selectedInputUnit) {
            case 'km': convertedValue = fromInput * 1000; break;
            case 'm': convertedValue = fromInput * 1; break;
            case 'cm': convertedValue = fromInput * 0.01; break;
            case 'mm': convertedValue = fromInput * 0.001; break;
            case 'mi': convertedValue = fromInput * 1609.34; break;
            case 'yrd': convertedValue = fromInput * 0.9144; break;
            case 'ft': convertedValue = fromInput * 0.3048; break;
            case 'in': convertedValue = fromInput * 0.0254; break;
        }
        console.log(convertedValue);
        switch (selectedOutputUnit) {
            case 'km': convertedValue *= 0.001; break;
            case 'm': convertedValue; break;
            case 'cm': convertedValue /= 0.01; break;
            case 'mm': convertedValue /= 0.001; break;
            case 'mi': convertedValue /= 1609.34; break;
            case 'yrd': convertedValue/= 0.9144; break;
            case 'ft': convertedValue/= 0.3048; break;
            case 'in': convertedValue/= 0.0254; break;
        }
        outputText.value = convertedValue
    }
}