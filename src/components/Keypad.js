// Code Keypad Component Here

function Keypad() {
  function inputPassword() {
    console.log("Entering password...");
  }
  return <input type="password" onChange={inputPassword} />;
}

export default Keypad;
