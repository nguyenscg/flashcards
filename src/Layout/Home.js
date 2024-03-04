import React from "react"; // import React
// The Home Screen is the first page the user sees. It is displayed at '/';
// Has the following features:
// 1) A Create Deck button is shown, and clicking it brings the user to the Create Deck screen.
// 2) Existing decks are each shown with the deck name, the number of cards, and a Study, View, and Delete button.
// 3) Clicking the Study button brings the user to the Study screen.
// 4) Clicking the View button brings the user to the Deck screen.
// 5) Clicking the Delete button shows a warning message before deleting the deck.
// Delete Deck Prompt: When the user clicks the Delete button, a warning message is shown and the user can click OK or Cancel
// If the user clicks OK, the deck is deleted and the deleted deck is no longer visible on the Home Screen.
// You can use window.confirm() to create the modal dialog shown 'Delete this deck? You will not be able to recover it.'

// Two datasets: Decks and Cards

function Home() {
    return (
        <>
            <button type="button" class="btn btn-secondary">+ Create Deck</button>
            <p>This is the Home Screen.</p>
        </>
    );
}

export default Home;