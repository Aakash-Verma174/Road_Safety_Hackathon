const canvas = document.getElementById("chatCanvas");
const input = document.getElementById("chatInput");
const sendBtn = document.getElementById("sendBtn");

// add message
function addMessage(text, type){

    const msg = document.createElement("div");

    msg.classList.add("msg");

    msg.classList.add(type === "user" ? "user" : "bot");

    msg.innerText = text;

    canvas.appendChild(msg);

    canvas.scrollTop = canvas.scrollHeight;
}

// send
function send(){

    const text = input.value.trim();

    if(text === "") return;

    addMessage(text, "user");

    input.value = "";

    setTimeout(() => {
        addMessage("📡 Echo: " + text, "bot");
    }, 600);

}

sendBtn.addEventListener("click", send);

input.addEventListener("keypress", (e) => {
    if(e.key === "Enter"){
        send();
    }
});

input.addEventListener("focus", () => {

    setTimeout(() => {
        canvas.scrollTop = canvas.scrollHeight;
    }, 300);

});