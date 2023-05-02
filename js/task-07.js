const inputRef = document.querySelector("#font-size-control");
  const textRef = document.querySelector("#text");

 

  function handleInput() {
    textRef.style.fontSize = `${inputRef.value}px`;
  }
  
  handleInput();
  
  inputRef.addEventListener("input", handleInput);


