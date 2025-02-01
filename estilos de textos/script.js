// Seleccionamos los elementos
const inputText = document.getElementById("inputText");
const fontSize = document.getElementById("fontSize");
const fontColor = document.getElementById("fontColor");
const fontFamily = document.getElementById("fontFamily");
const fontWeight = document.getElementById("fontWeight");
const fontStyle = document.getElementById("fontStyle");
const preview = document.getElementById("preview");
const cssCode = document.getElementById("cssCode");
const button_top = document.getElementById("button_top");

// Función para actualizar el estilo del texto
function updateTextStyle() {
    preview.textContent = inputText.value; // Actualiza el texto
    preview.style.fontSize = fontSize.value + "px"; // Aplica tamaño
    preview.style.color = fontColor.value; // Aplica color
    preview.style.fontFamily = fontFamily.value; // Aplica fuente
    preview.style.fontWeight = fontWeight.checked ? "bold" : "normal"; // Negrita
    preview.style.fontStyle = fontStyle.checked ? "italic" : "normal"; // Cursiva

    // Generar código CSS
    cssCode.value = `
    font-size: ${fontSize.value}px;
    color: ${fontColor.value};
    font-family: ${fontFamily.value};
    font-weight: ${fontWeight.checked ? "bold" : "normal"};
    font-style: ${fontStyle.checked ? "italic" : "normal"};
    `;
}

// Agregamos eventos para actualizar en tiempo real
inputText.addEventListener("input", updateTextStyle);
fontSize.addEventListener("input", updateTextStyle);
fontColor.addEventListener("input", updateTextStyle);
fontFamily.addEventListener("change", updateTextStyle);
fontWeight.addEventListener("change", updateTextStyle);
fontStyle.addEventListener("change", updateTextStyle);

// Función para copiar CSS al portapapeles
button_top.addEventListener("click", () => {
    cssCode.select();
    document.execCommand("copy");
    alert("Código CSS copiado al portapapeles!");
});

// Inicializar con valores iniciales
updateTextStyle();