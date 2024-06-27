function toCase(text) {
  // If the input is an empty string, return "-"
  if (text === "") {
    return "-";
  }

  // Convert the input text to lowercase and uppercase
  const lowerCase = text.toLowerCase();
  const upperCase = text.toUpperCase();

  // Return the concatenated result
  return `${lowerCase}-${upperCase}`;
}

// DO not change the code below

const text = prompt("Enter text:");
alert(toCase(text));