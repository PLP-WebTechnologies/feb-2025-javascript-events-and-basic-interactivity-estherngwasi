// Event Handling

// Button Click
document.getElementById("clickBtn").addEventListener("click", function() {
    alert("Button was clicked! This is an interactive element created by Esther.");
  });
  
  // Hover Effects
  const hoverDiv = document.getElementById("hoverDiv");
  hoverDiv.addEventListener("mouseover", () => {
    hoverDiv.style.backgroundColor = "lightblue";
  });
  hoverDiv.addEventListener("mouseout", () => {
    hoverDiv.style.backgroundColor = "";
  });
  
  // Keypress Detection
  document.addEventListener("keypress", function(event) {
    console.log(`Key pressed: ${event.key}`);
  });
  
  // Bonus: Secret Action for Double-Click or Long Press
  document.getElementById("clickBtn").addEventListener("dblclick", function() {
    alert("You double-clicked the button! Hidden action triggered by Esther.");
  });
  
  let timer;
  document.getElementById("clickBtn").addEventListener("mousedown", function() {
    timer = setTimeout(function() {
      alert("Long press detected! Esther's secret action.");
    }, 1000); // 1 second long press
  });
  
  document.getElementById("clickBtn").addEventListener("mouseup", function() {
    clearTimeout(timer); // Clear the timer if mouse is released before 1 second
  });
  
  // Interactive Elements
  
  // Button that Changes Text or Color
  document.getElementById("colorBtn").addEventListener("click", function() {
    this.style.backgroundColor = "green";
    this.textContent = "Color Changed! You did it!";
  });
  
  // Image Gallery
  let images = ["https://images.pexels.com/photos/56866/garden-rose-red-pink-56866.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
     "https://images.pexels.com/photos/68507/spring-flowers-flowers-collage-floral-68507.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/673857/pexels-photo-673857.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"];
  let currentIndex = 0;
  
  document.getElementById("prev").addEventListener("click", function() {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : images.length - 1;
    document.getElementById("gallery").src = images[currentIndex];
  });
  
  document.getElementById("next").addEventListener("click", function() {
    currentIndex = (currentIndex < images.length - 1) ? currentIndex + 1 : 0;
    document.getElementById("gallery").src = images[currentIndex];
  });
  
  // Tabs or Accordion-style Content
  const tabs = document.querySelectorAll(".tab");
  tabs.forEach(tab => {
    tab.addEventListener("click", function() {
      const tabId = this.getAttribute("data-tab");
      document.querySelectorAll(".tab-content").forEach(content => {
        content.style.display = "none";
      });
      document.getElementById("tab" + tabId).style.display = "block";
    });
  });
  
  // Form Validation
  document.getElementById("myForm").addEventListener("submit", function(event) {
    // Required Field Checks
    if (document.getElementById("name").value === "") {
      event.preventDefault();
      alert("Name is required!");
    }
    
    // Email Format Validation
    const email = document.getElementById("email").value;
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
      event.preventDefault();
      alert("Please enter a valid email address!");
    }
    
    // Password Validation
    const password = document.getElementById("password").value;
    if (password.length < 8) {
      event.preventDefault();
      alert("Password must be at least 8 characters long!");
    }
  });
  
  // Bonus: Real-time Feedback While Typing
  document.getElementById("realTimeInput").addEventListener("input", function() {
    document.getElementById("feedback").textContent = "You typed: " + this.value;
  });
  