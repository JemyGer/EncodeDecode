function encodeHTML(str) {
  var div = document.createElement("div");
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
}

function decodeHTML(str) {
  var div = document.createElement("div");
  div.innerHTML = str;
  return div.textContent || div.innerText;
}

function evaluateComparison(expression) {
  const parts = expression.split(" ");
  const left = parseInt(parts[0], 10);
  const operator = parts[1];
  const right = parseInt(parts[2], 10);

  switch (operator) {
    case "<":
      return left < right;
    case ">":
      return left > right;
    case "===":
      return left === right;
    default:
      throw new Error("Unsupported operator");
  }
}

// Originaltext
let originalText = "3 < 5";

// HTML encodieren
let encodedText = encodeHTML(originalText);
console.log("Kodiert:", encodedText);

// HTML decodieren
let decodedText = decodeHTML(encodedText);
console.log("Dekodiert:", decodedText);

// Vergleich ausführen
let comparisonResult = evaluateComparison(decodedText.replace(/<[^>]*>/g, "")); // Entferne HTML-Tags
console.log("Vergleichsergebnis:", comparisonResult);

// Ergebnisse auf der Seite ausgeben
document.getElementById("original").textContent = originalText;
document.getElementById("encoded").textContent = encodedText;
document.getElementById("decoded").textContent = decodedText;
document.getElementById("comparisonResult").textContent = comparisonResult;
