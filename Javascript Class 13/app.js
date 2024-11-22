// Constructor function to create hosting plans
function HostingPlan(name, price, features, support) {
    this.name = name;
    this.price = price;
    this.features = features;
    this.support = support;
}

// Create instances of the HostingPlan
const basicPlan = new HostingPlan(
    'Basic',
    5,
    ['10GB Storage', '100GB Bandwidth', '1 Domain'],
    'Email Support'
);

const proPlan = new HostingPlan(
    'Pro',
    15,
    ['50GB Storage', '500GB Bandwidth', '5 Domains'],
    'Email + Phone Support'
);

const businessPlan = new HostingPlan(
    'Business',
    25,
    ['Unlimited Storage', 'Unlimited Bandwidth', 'Unlimited Domains'],
    '24/7 Support'
);

// Function to handle the purchase action
function purchasePlan(name, price) {
    const messageText = `You have selected the ${name} Plan for $${price}/month.`;
    document.getElementById('message-text').innerText = messageText;
    document.getElementById('confirmation-message').style.display = 'block';
}

// Function to close the confirmation message
function closeMessage() {
    document.getElementById('confirmation-message').style.display = 'none';
}



const canvas = document.getElementById('cardCanvas');
const ctx = canvas.getContext('2d');

// Card dimensions
const cardWidth = 100;
const cardHeight = 150;

// Card positions (initially off the sides of the canvas)
let card1X = -cardWidth;
let card2X = canvas.width;

// Speeds
const speed = 3;

// Card objects with colors and effects
const card1 = {
  x: card1X,
  y: canvas.height / 2 - cardHeight / 2,
  width: cardWidth,
  height: cardHeight,
  color: 'blue'
};

const card2 = {
  x: card2X,
  y: canvas.height / 2 - cardHeight / 2,
  width: cardWidth,
  height: cardHeight,
  color: 'red'
};

// Clash effect flag
let clash = false;

// Draw a card function
function drawCard(card) {
  ctx.fillStyle = card.color;
  ctx.fillRect(card.x, card.y, card.width, card.height);
}

// Collision detection function
function isCollision(card1, card2) {
  return card1.x + card1.width >= card2.x && card1.x <= card2.x + card2.width;
}

// Main animation loop
function animate() {
  // Clear the canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Draw cards
  drawCard(card1);
  drawCard(card2);

  // Move cards towards each other
  if (card1.x < canvas.width / 2 - cardWidth / 2 && !clash) {
    card1.x += speed;
  }
  if (card2.x > canvas.width / 2 + cardWidth / 2 && !clash) {
    card2.x -= speed;
  }

  // Detect clash
  if (isCollision(card1, card2) && !clash) {
    clash = true;
    // Simulate clash effect (change colors and add a little shake)
    setTimeout(() => {
      card1.color = 'green';
      card2.color = 'yellow';
    }, 100);

    setTimeout(() => {
      card1.color = 'blue';
      card2.color = 'red';
      clash = false;  // Reset clash flag after animation
    }, 500);
  }
}
