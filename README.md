# Code Editor with Auto-Save Functionality

This repository contains a code editor application that allows users to write HTML, CSS, and JavaScript code and preview the output in real-time.
The main objective of this project is to implement auto-save functionality using the browser's localStorage API, which automatically saves the user's code and reloads it when the user revisits or refreshes the page.

## Implementation Details

The auto-save functionality is implemented using JavaScript and the localStorage API provided by the browser.
Here's a breakdown of the implementation:

- The code editor interface includes separate tabs for HTML, CSS, and JavaScript code.

- Whenever the user makes changes in the code editor, the `showPreview(editorId)` function is called.
  This function retrieves the current code from the editor and stores it in localStorage with a unique editorId.

- The `updatePreview(frame, htmlCode, cssCode, jsCode)` function is responsible for updating the preview window.
  It receives the frame (document) of the preview window, as well as the current HTML, CSS, and JavaScript code.
  It opens the frame, writes the combined code to the frame, and then closes it.

- When the window is loaded, the `window.addEventListener("load", ...)` function is triggered.
  It retrieves the saved code from localStorage (if available) or initializes it with default values.
  The code editor and preview window are then updated with the loaded code.

- Additionally, the code is automatically saved to localStorage whenever modifications are made.
  This ensures that the latest changes are persisted even if the user closes the browser or navigates away from the page.

Happy coding!
