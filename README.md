
# **Tic Tac Toe Game**

## **Overview**
This is a simple **Tic Tac Toe** game built using **HTML, CSS, and JavaScript**. It allows two players to take turns marking `X` and `O` on a **3x3 grid**. The game keeps track of scores, highlights the winning combination, includes **crown icons for winners**, and offers both **light mode and dark mode**.

---

## **✨ Features**
✅ **Two-player mode** (`X` vs `O`)  
✅ **Win detection** with predefined patterns  
✅ **Winning boxes glow on victory**  
✅ **Crown Icon Appears on the Leading Player** 👑  
✅ **Score tracking for both players**  
✅ **Draw condition fixed (No draw when a winner is declared on the last move)**  
✅ **"Reset Game" and "New Game" buttons**  
✅ **Dark Mode Toggle** (Click the heading to switch themes)  
✅ **Mobile Responsive Design**  

---

## **🛠 Technologies Used**
- **HTML** → Game structure  
- **CSS** → Styling, layout, animations  
- **JavaScript** → Game logic, event handling  

---

## **🎮 How to Play**
1️⃣ **Player 1 starts with `O`**, Player 2 plays with `X`.  
2️⃣ Players take turns clicking an empty box.  
3️⃣ First player to **align three marks (`X` or `O`)** in a row, column, or diagonal wins.  
4️⃣ The **winning boxes glow** and the score updates.  
5️⃣ **A crown icon 👑 appears next to the leading player’s score.**  
6️⃣ If all boxes are filled **without a winner**, the game ends in a draw.  
7️⃣ Click **"New Game"** to restart the match.  
8️⃣ Click **"Reset Game"** to reset scores and restart.  
9️⃣ **Click the heading to toggle Dark Mode**.  

---

## **🚀 Installation & Usage**
1. Download or **clone** this repository.
2. Open `index.html` in any **modern web browser**.

---

## **📂 Project Structure**
```
📂 Tic-Tac-Toe
├── index.html     # Main game UI
├── style.css      # Game styling
├── mobile.css     # Mobile responsiveness
├── darkmode.css   # Dark Mode styling
└── app.js         # Game logic
```

---

## **💻 Code Explanation**
### **🔹 HTML (`index.html`)**
- Creates the **game board** with buttons for each cell.
- Adds **score tracking panels** for both players.
- Includes **Reset, New Game, and Dark Mode toggle**.
- **FontAwesome icons** used for displaying crowns on the leading player.

### **🔹 CSS (`style.css`, `mobile.css`, `darkmode.css`)**
- Styles the board, buttons, and winner display.
- Uses **flexbox & media queries** for **mobile responsiveness**.
- Implements **glowing animation** for winning moves.
- **Dark Mode styling** added.
- **Hides crown icons initially and displays them dynamically for the leading player**.

### **🔹 JavaScript (`app.js`)**
- Defines **winning patterns** for checking victory.
- Implements **click event listeners** to update the board.
- Tracks **turns, score**, and disables the board after a win.
- Provides functions to **reset** and **restart** the game.
- **Fixes the draw condition** (No draw when the last move is a winning move).
- **Adds a Crown 👑 icon for the leading player.**
- **Adds Dark Mode toggle** when clicking the heading.

---

## **🚀 Future Improvements**
🎯 **Single-Player Mode (AI Opponent)** – Implement AI using the **Minimax Algorithm**.  
🎯 **Leaderboard & Score Saving** – Store scores using **Local Storage**.  
🎯 **Multiplayer Online Mode** – Play Tic Tac Toe with a friend **over the internet**.  

---

## **📜 License**
This project is open-source and can be freely modified and distributed.

---

🎉 Enjoy playing **Tic Tac Toe**! 🚀🔥  

---

### **🔄 What's New in This Update?**
✔ **Dark Mode** added.  
✔ **Winning glow effect improved**.  
✔ **Better mobile responsiveness**.  
✔ **Crown icons added for the winner**.  
✔ **Fixed draw condition bug (No draw when a player wins on the last move)**.  
✔ **Updated project structure in the README**.  