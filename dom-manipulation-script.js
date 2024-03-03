// Step 1: Get a reference to the main tag
const main = document.querySelector('main');

// Step 2: Define three jokes as variables
const joke1 = "Why don't scientists trust atoms? Because they make up everything!";
const joke2 = "Parallel lines have so much in common. It's a shame they'll never meet.";
const joke3 = "I told my wife she was drawing her eyebrows too high. She looked surprised.";

// Step 3: Define an HTML template with the jokes
const jokesTemplate = `
    <h2>My Jokes</h2>
    <ul>
        <li>${joke1}</li>
        <li>${joke2}</li>
        <li>${joke3}</li>
    </ul>
`;

// Step 4: Insert the template inside the main tag
main.innerHTML = jokesTemplate;

// Step 5: Create a paragraph tag and add text content
const paragraph = document.createElement('p');
paragraph.textContent = "That's all folks!";

// Step 6: Append the paragraph tag to the body
document.body.appendChild(paragraph);
