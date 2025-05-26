// Set up the basic variables
var answer; // This will store the random answer
var message = "Shake the Magic 8-Ball!"; // Default message

function setup() {
  createCanvas(400, 400);
  textAlign(CENTER, CENTER);
  textSize(20);
  
  // Generate a random number between 1 and 5
  answer = floor(random(1, 6));
}

function draw() {
  background(200);
  
  // Display the Magic 8-Ball message based on the answer
  text(message, width / 2, height / 2);

  // Change the message based on the random number
  if (answer == 1) {
    message = "It is certain.";
    fill(0, 255, 0); // Green color for a positive message
  } else if (answer == 2) {
    message = "Ask again later.";
    fill(255, 255, 0); // Yellow for uncertain responses
  } else if (answer == 3) {
    message = "My sources say no.";
    fill(255, 0, 0); // Red for a negative message
  } else if (answer == 4) {
    message = "Very likely!";
    fill(0, 255, 255); // Cyan color
  } else if (answer == 5) {
    message = "Don't count on it.";
    fill(255, 165, 0); // Orange color for an ambiguous response
  }
  
}

function mousePressed() {
  // Generate a new random number when you click the mouse (to simulate shaking the 8-Ball)
  answer = floor(random(1, 6));
}