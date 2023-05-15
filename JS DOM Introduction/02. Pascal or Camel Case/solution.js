function solve() {

  let givenTextElement = document.getElementById('text').value;
  let namingConventionElement = document.getElementById('naming-convention').value;
  let result = '';
    if(namingConventionElement === 'Camel Case') {
      result = camelCase(givenTextElement);
      
    } else if(namingConventionElement === 'Pascal Case') {
      result = pascalCase(givenTextElement);
    } else {
      result = 'Error!';
    }

    let resultElement = document.getElementById('result');
    resultElement.textContent = result;

    function camelCase(text) {
      text = tex
      return text
      .replace(/\s(.)/g, function($1) { return $1.toUpperCase(); })
      .replace(/\s/g, '')
      .replace(/^(.)/, function($1) { return $1.toLowerCase(); });
    }
    function pascalCase(text) {
      return text.replace(/(\w)(\w*)/g,
      function(g0,g1,g2){return g1.toUpperCase() + g2.toLowerCase();})
      .replace(/\s/g, '');
    }
}