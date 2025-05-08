const modelMessages = {
    "bart-mnli": [
      "Loading BART-MNLI model...",
      "Puzzle 1: Evaluating...",
      "Prediction: Entailment with high confidence.",
      "Result: Correct ✅"
    ],
    "ada-002": [
      "Loading ADA-002...",
      "Puzzle 1: Running inference...",
      "Prediction: Possibly related.",
      "Result: Partially correct ⚠️"
    ],
    "all-mpnet-base-v2": [
      "Loading All-MPNet Base-v2...",
      "Puzzle 1: Matching patterns...",
      "Prediction: Strong match.",
      "Result: Correct ✅"
    ],
    "flan-ul2": [
      "Loading Flan-UL2...",
      "Puzzle 1: Generating response...",
      "Prediction: High confidence output.",
      "Result: Correct ✅"
    ],
    "llama-2": [
      "Loading LLAMA-2...",
      "Puzzle 1: Thinking...",
      "Prediction: Incomplete reasoning.",
      "Result: Incorrect ❌"
    ],
    "gpt-4": [
      "Loading GPT-4...",
      "Puzzle 1: Analyzing context...",
      "Prediction: Logically sound conclusion.",
      "Result: Correct ✅"
    ]
  };
  
  const evaluateButton = document.querySelector(".submit");
  const chatbox = document.querySelector(".chatbox");
  const modelSelect = document.getElementById("model-select");
  
  evaluateButton.addEventListener("click", () => {
    const selectedModel = modelSelect.value;
    const messages = modelMessages[selectedModel] || ["No messages for this model."];
  
    chatbox.innerHTML = "";
  
    messages.forEach(message => {
      const msgElem = document.createElement("p");
      msgElem.textContent = message;
      chatbox.appendChild(msgElem);
    });
  });
  