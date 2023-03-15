// Opening Functions

function goIntro() {
  document.getElementById("widget-intro").style.visibility = "visible";
  document.getElementById("hero-holder").style.visibility = "hidden";
}

function goAbout() {
  console.log("About");
}

function goWork() {
  console.log("Work");
}

function goGallery() {
  document.getElementById("widget-gallery").style.visibility = "visible";
  document.getElementById("hero-holder").style.visibility = "hidden";
}

function goContact() {
  document.getElementById("widget-contact").style.visibility = "visible";
  document.getElementById("hero-holder").style.visibility = "hidden";
}

// Closing Functions

function closeIntro() {
  document.getElementById("widget-intro").style.visibility = "hidden";
  document.getElementById("hero-holder").style.visibility = "visible";
}

function closeContact() {
  document.getElementById("widget-contact").style.visibility = "hidden";
  document.getElementById("hero-holder").style.visibility = "visible";
}

function closeGallery() {
  document.getElementById("widget-gallery").style.visibility = "hidden";
  document.getElementById("hero-holder").style.visibility = "visible";
}

// Gallery Functions

let current_pic = 1;
let total_pics = 20;

function nextPic() {
  if (current_pic != total_pics) {
    current_pic += 1;
  } else {
    current_pic = 1;
  }
  document.getElementById("gallery-img").src = "Gallery" + current_pic + ".jpg";
}

function prevPic() {
  if (current_pic != 1) {
    current_pic -= 1;
  } else {
    current_pic = total_pics;
  }
  document.getElementById("gallery-img").src = "Gallery" + current_pic + ".jpg";
}
