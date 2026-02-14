function scrollToTools() {
    document.getElementById("tools").scrollIntoView({
        behavior: "smooth"
    });
}

/* Tool Click Handling */

const cards = document.querySelectorAll(".card");

cards.forEach(card => {
    card.addEventListener("click", () => {
        const tool = card.querySelector("h3").innerText;

        if (tool === "Word Counter") openWordCounter();
        else if (tool === "Case Converter") openCaseConverter();
        else if (tool === "UUID Generator") openUUIDGenerator();
        else alert(tool + " coming soon 🚀");
    });
});

/* Tool Renderers */

function openWordCounter() {
    document.body.innerHTML = `
        <div class="tool-page">
            <h2>Word Counter</h2>
            <textarea id="textInput" placeholder="Type or paste text..."></textarea>
            <div class="results">
                <p>Words: <span id="wordCount">0</span></p>
                <p>Characters: <span id="charCount">0</span></p>
            </div>
            <button onclick="goHome()">Back</button>
        </div>
    `;

    const input = document.getElementById("textInput");

    input.addEventListener("input", () => {
        const text = input.value.trim();

        const words = text === "" ? 0 : text.split(/\s+/).length;
        const chars = text.length;

        document.getElementById("wordCount").innerText = words;
        document.getElementById("charCount").innerText = chars;
    });
}

function openCaseConverter() {
    document.body.innerHTML = `
        <div class="tool-page">
            <h2>Case Converter</h2>
            <textarea id="caseInput" placeholder="Enter text..."></textarea>
            <div class="buttons">
                <button onclick="convertUpper()">UPPERCASE</button>
                <button onclick="convertLower()">lowercase</button>
                <button onclick="convertTitle()">Title Case</button>
            </div>
            <button onclick="goHome()">Back</button>
        </div>
    `;
}

function openUUIDGenerator() {
    document.body.innerHTML = `
        <div class="tool-page">
            <h2>UUID Generator</h2>
            <p id="uuidOutput">${generateUUID()}</p>
            <button onclick="newUUID()">Generate New</button>
            <button onclick="goHome()">Back</button>
        </div>
    `;
}

/* Tool Logic */

function convertUpper() {
    const input = document.getElementById("caseInput");
    input.value = input.value.toUpperCase();
}

function convertLower() {
    const input = document.getElementById("caseInput");
    input.value = input.value.toLowerCase();
}

function convertTitle() {
    const input = document.getElementById("caseInput");
    input.value = input.value.replace(/\w\S*/g, txt =>
        txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
    );
}

function generateUUID() {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, c => {
        const r = Math.random() * 16 | 0;
        const v = c === "x" ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}

function newUUID() {
    document.getElementById("uuidOutput").innerText = generateUUID();
}

/* Navigation */

function goHome() {
    location.reload();
}
