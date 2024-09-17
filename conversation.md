## write me html, css, javascript, for telegram for mining coin with bar with Earn, Tap, and reward bar, make it futuristic and show profile name, count the tap using js

While Telegram Web Apps don't directly support game mechanics like mining, we can create a visually appealing simulation that displays a "mining" experience. Here's the code with explanations:

**HTML (index.html):**

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Futuristic Coin Miner</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="container">
        <header class="header">
            <h1 class="profile-name">Your Profile Name</h1> <img src="logo.png" alt="Coin Miner Logo" class="logo"> </header>
        <main class="main">
            <div class="mining-bar">
                <div class="earn-bar" id="earnBar"></div>
                <div class="tap-button" id="tapButton">TAP TO MINE (0)</div>
                <div class="reward-bar" id="rewardBar"></div>
            </div>
            <div class="stats">
                <p>Coins Mined: <span id="minedCoins">0</span></p>
                <p>Mining Power: <span id="miningPower">1</span></p>
                </div>
        </main>
        <footer class="footer">
            <p>&copy; 2024 Futuristic Coin Miner</p>
        </footer>
    </div>

    <script src="script.js"></script>
</body>
</html>
```

**CSS (style.css):**

```css
body {
    font-family: sans-serif;
    margin: 0;
    padding: 0;
    background-color: #17171e;
    color: #fff;
}

.container {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
}

.header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
    background-color: #20202a;
}

.profile-name {
    font-size: 24px;
    font-weight: bold;
    text-transform: uppercase;
}

.logo {
    width: 50px;
    height: 50px;
    object-fit: cover;
}

.main {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.mining-bar {
    width: 80%;
    height: 50px;
    background-color: #2a2a35;
    border-radius: 10px;
    display: flex;
    align-items: center;
    position: relative;
    overflow: hidden;
}

.earn-bar,
.reward-bar {
    height: 100%;
    border-radius: 10px 0 0 10px; /* Green gradient */
    background-linear-gradient(to right, #00ff00, #90ee90);
}

.tap-button {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 10px 20px;
    background-color: #303040;
    color: #fff;
    font-size: 16px;
    font-weight: bold;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    opacity: 0.8; /* Semi-transparent button */
}

.reward-bar {
    flex-grow: 1; /* Fills remaining space in the bar */
}

.stats {
    margin-top: 30px;
    text-align: center;
}

.stats p {
    margin-bottom: 10px;
}
```

**JavaScript (script.js):**

```javascript
const tapButton = document

```
Sources:
1. https://medium.com/samsung-internet-dev/making-an-ar-game-with-aframe-529e03ae90cb
2. https://github.com/JonathanWbn/claimazon