Diese kleine Funktion dient zum reinen Lernen von Encode/Decode!

Explanation in German.

1. encodeHTML(str)
Zweck: Diese Funktion wandelt einen Text in eine HTML-sichere Form um.


Ablauf:
var div = document.createElement("div");
// ein neues <div>-Element wird erstellt. Dies ist ein Container, der verwendet wird um den Text sicher zu verarbeiten.

div.appendChild(document.createTextnode(str));
// Ein Textknoten wird aus dem üvergebenen String str erstellt. Das Hinzufügen dieses Textknotens zum <div> sorgt dafür, dass spezielle 
	HTML-Zeichen wie < und > nicht als HTML-Tags, sondern als Text behandelt werden.


return div. innerHTML;
// Der innere HTML-Inhalt des <div> wird zurückgegeben. Da der Text als reiner Text hinzugefügt wurde,
	werden die speziellen Zeichen in HTML-Entitäten umgewandelt (z.b. < wird zu &lt;).


2. decodeHTML(str)
Zweck: Diese Funktion wandelt einen HTML-encodierten String zurück in seinen ursprünglichen Text.

Ablauf:
var div = document.createElement("div");
// Ein neues <div>-Element wird wieder erstellt.

div.innerHTML = str;
// Der encodierte String str wird als innerHTML des <div> gesetzt. Das <div> interpretiert
	nun die HTML-Entitäten (z.B. &lt;) und wandelt sie in die entsprechenden Zeichen um (z.b <).

return div.textContent || div.innerText;
// Der reine Textinhalt des <div> wird zurückgegeben, wodurch alle HTML-Tags entfernt werden.
	textContent wird bevorzugt, weil es effizienter ist. innerText wird nur verwendet, 
	wenn textContent nicht verfügbar ist.


3. evaluateComparison(expression)
Zweck: Diese Funktion führt einen Vergleich auf der Grundlage eines gegebenen Ausdrucks (z.B. 3 < 5) druch.

Ablauf:
const parts = expression.split("");
// Der übergebene Ausdruck wird an den Leerzeichen aufgeteilt. Das Ergebnis ist ein Array mit drei Elementen:
	die linke Zahl(3), der Operator(<) und die rechte Zahl(5).
	
const left = parseInt(parts[0], 10);
// Der erste Teil des Arrays (die Linke Zahl(3)) wird in eine Ganzzahl umgewandelt.

const operator = parts[1];
// Der Zweite Teil des Arrays ist der Operator(<))

const right = parseInt(parts[2], 10);
	Der dritte Teil des Arrays (die Rechte Zahl(5)) wird ebenfalls in eine Ganzzahl umgewandelt.
	
switch (operator) {...}:
// Ein switch - Statement wird verwendet, um je nach Operator den entsprechenden vergleich durchzuführen:
	case "<": :Gibt true zurück, wenn left kleiner als right ist.
	case ">": :Gibt true zurück, wenn left größer als right ist.
	case "===": :Gibt true zurück, wenn left gleich right ist.
	default: :Wenn der Operator nicht unterstützt wird, wird ein Fehler geworfen.
	
	
Verwndung im Hauptcode:

1. let originalText = "3 < 5";
// Hier wird der Original Text definiert.

2. let uncodedText = encodeHTML(originalText);
// Der Originaltext wird encodiert.

3. console.log("Kodiert:", encodeText);
// Der Kodierte Text wird in der Konsole ausgegeben.

4. let decoded Text = decodeHTML(encodedText);
// Der kodierte Text wird dekodiert.

5. console.log("Dekodiert:",decodedText);
// Der dekodierte Text wird in der Konsole ausgegeben.

6. let comparisonResult = evaluateComparison(decodedText.replace(/<[^>]*>/g, ""));
// Vor dem Vergleich wird der dekodierte Text von HTML-Tags befreit. Der vergleich wird dann durchgeführt
	und das Ergebnis gespeichert.

7. console.log("Vergleichsergebnis:", comparisonResult);
// Das ergebnis des vergleichs wird in der konsole ausgegeben.

8. Ergebnisse auf der auf der Site ausgeben:
// Die ergbenisse werden auf der HTML-Seite in den entsprechenden <span>-Elementen angezeigt.
