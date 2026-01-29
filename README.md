# 🎰 BlackJack Game - Web-Based Card Game

A fully functional BlackJack card game built with vanilla JavaScript and Bootstrap, featuring object-oriented design, interactive gameplay, audio feedback, and chip management system.

**Type**: Web-Based Casino Game  
**Technology**: HTML5, CSS3, Vanilla JavaScript (ES6+)  
**Framework**: Bootstrap 4.3  
**Features**: Object-Oriented Programming, Game State Management, Audio System  
**Status**: Complete & Playable  

---

## 📋 Project Overview

**BlackJack Game** is an interactive web-based implementation of the classic casino card game. The project demonstrates professional web development practices with:

- Object-oriented JavaScript with proper encapsulation
- Responsive Bootstrap-based UI
- Real-time game state management
- Interactive chip betting system
- Dealer and player AI logic
- Sound effects and visual feedback
- Professional styling with custom CSS

### Project Vision

Create an engaging, fully-functional BlackJack game that combines entertainment with proper software engineering principles. The implementation showcases object-oriented design, DOM manipulation, game logic, and user interaction handling.

---

## 🎮 Game Rules & Objectives

### Basic Rules

**Goal**: Beat the dealer by achieving a hand value closer to 21 than the dealer without exceeding 21.

**Card Values**:
- Number cards (2-10): Face value (2 = 2 points, 5 = 5 points, etc.)
- Face cards (Jack, Queen, King): 10 points each
- Ace: 1 or 11 points (whichever is more beneficial)

**Game Flow**:
1. Player places a bet (10-current chip total, in increments of 10)
2. Dealer deals 2 cards to player and 2 cards to dealer (one face down)
3. Player decides to "Hit" (take another card) or "Stand" (keep current hand)
4. Dealer plays according to fixed rules (must hit on 16 or less, stand on 17+)
5. Hands are compared, winner determined

**Win Conditions**:
- Player hand > Dealer hand (without exceeding 21): Player wins 2× bet
- Player ≤ 21, Dealer busts (> 21): Player wins 2× bet
- Dealer hand > Player hand (without exceeding 21): Dealer wins, player loses bet
- Dealer ≤ 21, Player busts: Player loses bet

**Special Cases**:
- **Bust**: Hand exceeds 21 → Automatic loss
- **Ace Logic**: If total with Ace as 11 > 21, count Ace as 1 instead
- **Dealer Rules**: Dealer must hit on 16 or less, must stand on 17 or more

---

## 🏗️ Architecture

### System Architecture

```
┌─────────────────────────────────────────────┐
│        HTML INTERFACE (blackjack_oop.html)  │
├─────────────────────────────────────────────┤
│  • Game Board Display                       │
│  • Dealer Area (Cards)                      │
│  • Player Area (Cards)                      │
│  • Control Buttons (Hit, Stand, etc.)      │
│  • Betting Interface (Range Slider)         │
│  • Status Display (Chips, Messages)         │
└──────────────┬──────────────────────────────┘
               │
      ┌────────┴────────┐
      ▼                 ▼
┌──────────────┐  ┌──────────────────────┐
│ CSS Styling  │  │ JavaScript Logic     │
│(maiscss.css) │  │                      │
│              │  ├──────────────────────┤
│ • Colors     │  │ blackjack_object.js  │
│ • Animations │  │ (Game Logic Class)   │
│ • Layout     │  │                      │
│ • Effects    │  │ blackjack_manager.js │
└──────────────┘  │ (Game Manager)       │
                  └──────────────────────┘
                           │
                           ▼
                  ┌─────────────────────┐
                  │  Game State Engine  │
                  ├─────────────────────┤
                  │ • Card Deck         │
                  │ • Player Hand       │
                  │ • Dealer Hand       │
                  │ • Game Status       │
                  │ • Chip Management   │
                  └─────────────────────┘
```

### Class Structure

```
BlackJack (Game Logic Class)
├─ Constructor
│  ├─ dealerCards (array)
│  ├─ playerCards (array)
│  ├─ dealerTurn (boolean)
│  └─ state (game state object)
│
├─ Card Management
│  ├─ newDeck() → Creates 4 suits × 13 cards
│  └─ shuffle(deck) → Fisher-Yates shuffle
│
├─ Game Logic
│  ├─ getCardsValue(cards) → Calculate hand value
│  ├─ dealerMove() → Dealer draws card
│  ├─ playerMove() → Player draws card
│  └─ getGameState() → Check win/loss conditions
│
├─ Getters
│  ├─ getDealerCards() → Return dealer's cards
│  ├─ getPlayerCards() → Return player's cards
│  └─ getGameState() → Return current state
│
└─ Setters
   └─ setDealerTurn(boolean) → Set dealer turn flag
```

### File Structure

```
BlackJack Project/
│
├─ HTML & UI
│  └─ blackjack_oop.html          (Main game interface)
│
├─ Styling
│  └─ maiscss.css                  (Custom styling)
│
├─ JavaScript
│  ├─ blackjack_object.js          (Game logic class)
│  └─ blackjack_manager.js         (Game manager & UI logic)
│
└─ Resources
   ├─ imgs/
   │  ├─ background.jpg            (Game table background)
   │  ├─ cartas/                   (Card images)
   │  │  ├─ espadas_*.png          (Spades)
   │  │  ├─ copas_*.png            (Hearts)
   │  │  ├─ ouros_*.png            (Diamonds)
   │  │  └─ paus_*.png             (Clubs)
   │  ├─ CardBack.jpg              (Hidden card)
   │  └─ whiskey.jpg               (Whiskey glass)
   │
   └─ music/                        (Audio files)
      ├─ win.wav                    (Victory sound)
      ├─ gameOver.wav               (Defeat sound)
      ├─ shuffle.wav                (Shuffle sound)
      ├─ nextCard.wav               (Card draw sound)
      ├─ theDropCoins.mp3           (Money sound)
      ├─ checkbet.mp3               (Bet confirmed)
      └─ drink.wav                  (Whiskey drink sound)
```

---

## 💻 Technology Stack

### Frontend Technologies

**HTML5**
- Semantic structure
- Form elements (range slider for betting)
- Image elements for card display
- Bootstrap grid system integration

**CSS3**
- Custom styling (maiscss.css)
- Bootstrap 4.3 framework
- Card rotation/positioning
- Hover animations
- Whiskey glass shake effect
- Responsive design

**JavaScript (ES6+)**
- Class-based OOP
- Array methods (map, filter, splice)
- DOM manipulation
- Event handling
- Audio API (Web Audio)
- Game state management

### Libraries & Frameworks

**Bootstrap 4.3**
- Grid layout system
- Button styling
- Form components
- Responsive utilities

**Font Awesome**
- Icons (money bill, question circle, arrow down, plus)
- Visual feedback and navigation

**Google Fonts**
- Poppins font family
- Professional typography

**jQuery** (included via Bootstrap)
- DOM utilities
- Event handling (Popovers for rules)

---

## 🎲 Game Mechanics & Features

### Chip Management System

**Starting Chips**: 10,000

**Betting System**:
- Range slider: 10 to current chip total (increments of 10)
- Minimum bet: 10 chips
- Maximum bet: Current chip total
- Last bet remembered for convenience

**Chip Flow**:
```
New Game: chips = 10,000
  ↓
Place Bet: chips -= bet
  ↓
Win Round: chips += (bet × 2)
  ↓
Lose Round: chips -= 0 (already deducted)
  ↓
Game Reset: chips = 10,000 (if < 10 chips)
```

### Card Deck System

**Deck Composition**:
- 4 suits (Spades, Hearts, Diamonds, Clubs)
- 13 ranks per suit (A, 2-10, J, Q, K)
- 52 total cards
- Single deck (no multi-deck games)

**Deck Operations**:
1. **Create**: Generate new deck with all 52 cards
   ```
   Card format: [value, suit]
   e.g., [11, 1] = Ace of Spades
   ```

2. **Shuffle**: Fisher-Yates shuffle algorithm
   - Creates array of indices
   - Randomly selects indices
   - Builds shuffled deck
   - No index repetition

3. **Deal**: Cards drawn from deck[0] position
   - Card removed from deck (splice)
   - Added to player/dealer hand
   - Visual card representation updated

### Hand Value Calculation

**Card Values**:
- 2-10: Face value
- J, Q, K: 10 points
- A: 1 or 11 (optimal value)

**Ace Logic**:
```
Count aces in hand
For each ace:
  if (current_total + 11) <= 21:
    ace_value = 11
  else:
    ace_value = 1
  total += ace_value
```

**Maximum**: 21 points (BlackJack)  
**Bust**: > 21 points (automatic loss)

### Game State Management

**State Object**:
```javascript
state = {
  gameEnded: false,      // Game complete?
  dealerWon: false,      // Dealer victory?
  playerBusted: false    // Player exceeded 21?
}
```

**State Transitions**:
```
Initial → Place Bet → Deal Cards → Player Turn →
Dealer Turn → Evaluate → Game Over
```

### Dealer AI

**Dealer Logic**:
1. Reveals hidden card after player finishes
2. Automatically hits on 16 or less
3. Automatically stands on 17 or more
4. No strategic decisions (fixed rules)
5. Cannot deviate from rules

**Implementation**:
```javascript
while (!dealerBusted && dealerPoints < 17) {
  dealerMove(); // Draw card
  dealerPoints = getCardsValue(dealerCards);
}
```

---

## 🎛️ User Interface Components

### Game Board Layout

**Left Column (Dealer)**:
```
┌─────────────────────┐
│  DEALER             │
├─────────────────────┤
│  [Card] [Card Back] │
│  [Card] [Card]      │
│  [Card] [Card]      │
└─────────────────────┘
```

**Center Column (Controls)**:
```
┌─────────────────────┐
│   DECK              │
├─────────────────────┤
│  [HIT Button]       │
│  [STAND Button]     │
│  [CHECK BET Button] │
│  [NEW GAME Button]  │
└─────────────────────┘
```

**Right Column (Player)**:
```
┌─────────────────────┐
│  PLAYER             │
├─────────────────────┤
│  [Card] [Card]      │
│  [Card] [Card]      │
│  [Card] [Card]      │
└─────────────────────┘
```

**Bottom (Betting)**:
```
┌─────────────────────────────────┐
│ Bet: [═══════●═════]   0 chips  │
│ [Check Bet]                     │
│ Status: "You have 10,000 chips" │
└─────────────────────────────────┘
```

### Control Buttons

**HIT Button**:
- Draws one card from deck
- Adds to player's hand
- Updates hand value
- Checks for bust
- Disabled during dealer turn

**STAND Button**:
- Completes player's turn
- Initiates dealer turn
- Dealer automatically plays
- Evaluates final hands
- Determines winner

**CHECK BET Button**:
- Confirms betting amount
- Enables game start
- Shows bet range validation
- Disabled until new game

**NEW GAME Button**:
- Resets game state
- Clears all cards
- Resets chip count (if needed)
- Re-enables betting
- Allows betting configuration

### Status Display

**Dealer Section**:
- Cards with suits (♠, ♣, ♥, ♦)
- Card count/value
- Status message after game

**Player Section**:
- Cards with suits
- Card count/value
- Status message (win/loss/bust)

**Chip Display**:
- Current chip total
- Last bet (for reference)
- Bet amount (0-10,000)
- Bet status message

---

## 🔊 Audio System

**Sound Effects**:

| Event | Sound File | Purpose |
|---|---|---|
| Win Hand | musicwin.wav | Victory feedback |
| Lose Hand | musicgameOver.wav | Defeat feedback |
| New Game | musicshuffle.wav | Deck shuffle sound |
| Draw Card | musicnextCard.wav | Card draw sound |
| Money Win | musictheDropCoins.mp3 | Chip collection sound |
| Bet Check | musiccheckbet.mp3 | Bet confirmation |
| Whiskey Hover | musicdrink.wav | Interactive effect |

**Audio Implementation**:
```javascript
let sndWin = new Audio("music/win.wav");
let sndLose = new Audio("music/gameOver.wav");
// ... more sounds

sndWin.play();  // Play sound effect
```

---

## 🎨 Visual Design

### Color Scheme

**Primary Colors**:
- **Green**: Game table background
- **Red/Brown**: Button backgrounds
- **Gold/Warning**: Text highlights
- **White**: Cards and text

**Button Styling**:
- Background: RGB(179, 42, 18) - Burnt orange
- Text: Floral white
- Hover: #2196F3 - Electric blue
- Glow effect on hover (box-shadow)

**Card Styling**:
- White background
- Rounded corners (5px)
- 2px border (top/left)
- Outset style (3D effect)
- ~90px max-width

### Animations

**Hover Effects**:
- Buttons: Color change + glow
- Question mark: Gold color
- Cards: Slight raise/shadow

**Whiskey Glass**:
- Shake animation on hover
- 0.5s duration
- Infinite loop
- Rotation + translation

**Bootstrap Responsiveness**:
- Mobile-friendly design
- Grid system auto-adjustment
- Touch-friendly buttons

---

## 🎯 Game Flow & User Experience

### Complete Game Cycle

```
1. PAGE LOAD
   └─ New Game initialized
   └─ Deck created and shuffled
   └─ Betting interface enabled

2. BETTING PHASE
   ├─ Player selects bet amount (range slider)
   ├─ Player clicks "Check Bet"
   ├─ Bet validated
   └─ Initial cards dealt

3. PLAYER TURN
   ├─ Player sees own cards
   ├─ Dealer's first card hidden (CardBack.jpg)
   ├─ Player clicks "Hit" or "Stand"
   ├─ If Hit → Draw card, check bust, repeat
   ├─ If Stand → Player turn ends
   └─ Game moves to dealer turn

4. DEALER TURN
   ├─ Hidden card revealed
   ├─ Dealer automatically plays
   │  ├─ If hand < 17 → Hit
   │  ├─ If hand >= 17 → Stand
   │  └─ Repeat until stand or bust
   └─ Game evaluates winner

5. RESULT PHASE
   ├─ Compare hands
   ├─ Determine winner
   ├─ Update chip total
   ├─ Play sound effect
   ├─ Display result message
   └─ Show cards and final values

6. NEW GAME PHASE
   ├─ Player reviews results
   ├─ Clicks "New Game"
   ├─ Deck reshuffled
   ├─ Betting interface reset
   ├─ Chip count reset (if < 10)
   └─ Return to Betting Phase
```

### Win/Loss Conditions

**Player Wins** (chips += bet × 2):
- Player hand > Dealer hand (both ≤ 21)
- Dealer busts while player ≤ 21
- Player has BlackJack

**Player Loses** (chips -= bet):
- Player busts (> 21)
- Dealer hand > Player hand (dealer ≤ 21)
- Dealer BlackJack vs. Player non-BlackJack

**Push** (Tie - not implemented):
- Both have same value
- Would return bet in real casino

---

## 🧪 Code Structure & Implementation

### BlackJack Class (blackjack_object.js)

**Constructor**:
```javascript
class BlackJack {
  constructor() {
    this.dealerCards = [];        // Dealer's hand
    this.playerCards = [];        // Player's hand
    this.dealerTurn = false;      // Is it dealer's turn?
    this.state = {
      gameEnded: false,
      dealerWon: false,
      playerBusted: false
    };
    this.deck = this.shuffle(this.newDeck());
  }
}
```

**Key Methods**:

1. **newDeck()**
   - Generates 52 cards
   - Format: [value, suit]
   - Returns array of cards

2. **shuffle(deck)**
   - Fisher-Yates algorithm
   - Creates index array
   - Randomly samples indices
   - Builds shuffled deck

3. **getCardsValue(cards)**
   - Calculates total value
   - Handles aces properly
   - Returns max valid total ≤ 21

4. **dealerMove() / playerMove()**
   - Draws card from deck[0]
   - Removes card from deck (splice)
   - Adds to appropriate hand
   - Updates game state

5. **getGameState()**
   - Evaluates current game status
   - Checks for bust, win, loss
   - Returns state object

### Game Manager (blackjack_manager.js)

**Global Variables**:
```javascript
let game = null;                 // Current game instance
let playerChipsStart = 10000;    // Starting chips
let playerChipsTotal = 10000;    // Current chips
let bet = 0;                      // Current bet
let lastBet = 0;                  // Previous bet
```

**Key Functions**:

1. **newGame()**
   - Creates new BlackJack instance
   - Resets UI
   - Configures betting range
   - Starts game

2. **checkBet()**
   - Validates bet amount
   - Deals initial cards
   - Enables Hit/Stand buttons
   - Updates display

3. **playerNewCard()**
   - Draws card for player
   - Updates game state
   - Checks for bust
   - Updates UI

4. **dealerFinish()**
   - Initiates dealer turn
   - Dealer plays automatically
   - Evaluates result
   - Updates chips

5. **buttonsInitialization()**
   - Enables game buttons
   - Disables betting controls
   - Resets UI state

**Event Listeners**:
- onclick="playerNewCard()" → Hit button
- onclick="dealerFinish()" → Stand button
- onclick="checkBet()" → Check Bet button
- onclick="newGame()" → New Game button
- onInput="updateBetDisplay()" → Bet slider

---

## 📊 Game Statistics

| Metric | Value |
|---|---|
| Starting Chips | 10,000 |
| Minimum Bet | 10 chips |
| Card Deck | Single 52-card deck |
| Suits | 4 (Spades, Hearts, Diamonds, Clubs) |
| Ranks | 13 per suit (A-K) |
| Max Hand Value | 21 (BlackJack) |
| Dealer Stand Value | 17+ |
| Win Payout | 2× bet |
| Loss Cost | bet |
| Code Files | 2 JS + 1 HTML + 1 CSS |

---

## 🎓 Learning Outcomes

### JavaScript Concepts Demonstrated

✅ **Object-Oriented Programming**
- Class definition and instantiation
- Constructor method
- Instance properties and methods
- Encapsulation of game logic

✅ **Array Methods**
- push(), splice(), slice()
- Array iteration (for loops)
- Index-based access

✅ **DOM Manipulation**
- getElementById() for element selection
- innerHTML for content updates
- src attribute for image changes
- CSS class manipulation

✅ **Event Handling**
- onclick event handlers
- onInput event listeners
- Event callback functions

✅ **Game Logic**
- State management
- Conditional logic (if/else)
- Game flow control
- Win/loss evaluation

✅ **Web APIs**
- Audio API (Web Audio)
- Math.random() for shuffling
- Math.floor() for calculations

### Software Engineering Principles

✅ Separation of Concerns (Game class vs Manager)  
✅ Encapsulation (Private game state)  
✅ Single Responsibility Principle  
✅ DRY (Don't Repeat Yourself)  
✅ Clean Code (Readable variable names)  
✅ Modular Design (Separate JS files)  

---

## 🚀 How to Run

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- No server required (pure client-side)
- JavaScript enabled

### Setup & Execution

1. **Create Project Structure**:
   ```
   BlackJack/
   ├─ blackjack_oop.html
   ├─ css/
   │  └─ maiscss.css
   ├─ js/
   │  ├─ blackjack_object.js
   │  └─ blackjack_manager.js
   ├─ imgs/
   │  └─ (card images)
   └─ music/
      └─ (audio files)
   ```

2. **Open in Browser**:
   - Double-click `blackjack_oop.html`
   - Or right-click → Open with Browser
   - Or via local server (recommended)

3. **Start Playing**:
   - Page loads with new game
   - Select bet amount via slider
   - Click "Check Bet" to start
   - Click "Hit" or "Stand" to play
   - Click "New Game" for next round

### Local Server (Optional)

**Using Python**:
```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

**Using Node.js**:
```bash
npx http-server
```

Access at: `http://localhost:8000/blackjack_oop.html`

---

## 🐛 Known Limitations & Future Improvements

### Current Limitations

⚠ Single deck (no shoe/multi-deck)  
⚠ No insurance bet  
⚠ No split functionality  
⚠ No double down  
⚠ No persistence (chip data lost on refresh)  
⚠ No multiplayer support  
⚠ No game history/statistics tracking  
⚠ Audio files must be in music/ folder  

### Potential Enhancements

**Short-term**:
- [ ] LocalStorage for chip persistence
- [ ] Game statistics (wins/losses/profit)
- [ ] Sound toggle option
- [ ] Difficulty levels (dealer behavior)
- [ ] Keyboard controls (spacebar for Hit, etc.)

**Medium-term**:
- [ ] Split hand functionality
- [ ] Double down option
- [ ] Insurance bet
- [ ] Multiple decks/shoe
- [ ] Chip animations
- [ ] Better dealer AI

**Long-term**:
- [ ] Multiplayer (WebSocket)
- [ ] Tournament mode
- [ ] Leaderboard system
- [ ] Progressive betting strategies
- [ ] Mobile app version
- [ ] Real-time multiplayer

---

## 📚 File Details

| File | Size | Purpose |
|---|---|---|
| blackjack_oop.html | 8.4 KB | Main game interface |
| blackjack_object.js | 4.1 KB | Game logic class |
| blackjack_manager.js | 7.5 KB | Game manager & UI |
| maiscss.css | 1.8 KB | Custom styling |

**Total**: ~21.8 KB (very lightweight)

---

## 🎯 Conclusion

This BlackJack game successfully demonstrates:

✅ **Professional Web Development**
- Clean, organized code structure
- Object-oriented design principles
- Responsive, visually appealing UI
- Complete game implementation

✅ **JavaScript Mastery**
- ES6+ class syntax
- DOM manipulation
- Event handling
- Game state management

✅ **User Experience**
- Intuitive interface
- Responsive feedback
- Audio-visual effects
- Smooth gameplay

The project serves as both an educational tool for learning JavaScript and a fully functional, entertaining casino game. It demonstrates how to build complex interactive applications using vanilla JavaScript and modern web technologies.

---

## 👤 Author

**Created**: January 29, 2026  
**Status**: Complete & Playable  
**License**: Open Source  

---

## 🔗 Related Files

- HTML Interface: `blackjack_oop.html`
- Game Logic: `blackjack_object.js`
- Game Manager: `blackjack_manager.js`
- Styling: `maiscss.css`

---

## 🎲 Have Fun!

Experience the thrill of BlackJack with this professional web-based implementation. Challenge the dealer, manage your chips strategically, and test your luck!

**Good luck at the tables! 🍀**

