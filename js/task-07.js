const inputRef = document.querySelector("#font-size-control");
  const textRef = document.querySelector("#text");

  function handleInput() {
    textRef.style.fontSize = `${inputRef.value}px`;
  }

  inputRef.addEventListener("input", handleInput);


