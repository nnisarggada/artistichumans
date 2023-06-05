// Opening Functions

function goIntro() {
  document.getElementById("widget-intro").style.visibility = "visible";
  document.getElementById("hero-holder").style.visibility = "hidden";
}

function goAbout() {
  document.getElementById("widget-about").style.visibility = "visible";
  document.getElementById("hero-holder").style.visibility = "hidden";
}

function goWork() {
  document.getElementById("widget-work").style.visibility = "visible";
  document.getElementById("hero-holder").style.visibility = "hidden";
}

function goGallery() {
  document.getElementById("widget-gallery").style.visibility = "visible";
  document.getElementById("hero-holder").style.visibility = "hidden";
}

function goShowcase() {
  document.getElementById("widget-showcase").style.visibility = "visible";
  document.getElementById("hero-holder").style.visibility = "hidden";
}

function goContact() {
  document.getElementById("widget-contact").style.visibility = "visible";
  document.getElementById("hero-holder").style.visibility = "hidden";
}

function goAM75() {
  document.getElementById("widget-am75").style.visibility = "visible";
  document.getElementById("hero-holder").style.visibility = "hidden";
}

function goPartners() {
  document.getElementById("widget-partners").style.visibility = "visible";
  document.getElementById("widget-am75").style.visibility = "hidden";
  document.getElementById("hero-holder").style.visibility = "hidden";
}

function goBlog() {
  document.getElementById("widget-blog").style.visibility = "visible";
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

function closeShowcase() {
  document.getElementById("widget-showcase").style.visibility = "hidden";
  document.getElementById("hero-holder").style.visibility = "visible";
}

function closeAbout() {
  document.getElementById("widget-about").style.visibility = "hidden";
  document.getElementById("hero-holder").style.visibility = "visible";
}

function closeWork() {
  document.getElementById("widget-work").style.visibility = "hidden";
  document.getElementById("hero-holder").style.visibility = "visible";
}

function closeAM75() {
  document.getElementById("widget-am75").style.visibility = "hidden";
  document.getElementById("hero-holder").style.visibility = "visible";
}

function closePartners() {
  document.getElementById("widget-partners").style.visibility = "hidden";
  document.getElementById("hero-holder").style.visibility = "visible";
}

function closeBlog() {
  document.getElementById("widget-blog").style.visibility = "hidden";
  document.getElementById("hero-holder").style.visibility = "visible";
}

// Gallery Functions

let gallery_current_pic = 1;
let gallery_total_pics = 20;

function nextPic() {
  if (gallery_current_pic != gallery_total_pics) {
    gallery_current_pic += 1;
  } else {
    gallery_current_pic = 1;
  }
  document.getElementById("gallery-img").src =
    "Gallery" + gallery_current_pic + ".jpg";
}

function prevPic() {
  if (gallery_current_pic != 1) {
    gallery_current_pic -= 1;
  } else {
    gallery_current_pic = gallery_total_pics;
  }
  document.getElementById("gallery-img").src =
    "Gallery" + gallery_current_pic + ".jpg";
}

// Showcase Functions

let showcase_current_pic = 1;
let showcase_total_pics = 12;

function nextShowcasePic() {
  if (showcase_current_pic != showcase_total_pics) {
    showcase_current_pic += 1;
  } else {
    showcase_current_pic = 1;
  }
  document.getElementById("showcase-img").src =
    "Showcase" + showcase_current_pic + ".jpg";
}

function prevShowcasePic() {
  if (showcase_current_pic != 1) {
    showcase_current_pic -= 1;
  } else {
    showcase_current_pic = showcase_total_pics;
  }
  document.getElementById("showcase-img").src =
    "Showcase" + showcase_current_pic + ".jpg";
}

// Blog Functions

let blogs = {};

let current_blog = 1;
let total_blogs = Object.keys(blogs).length;

if (total_blogs == 0) {
  document.getElementById("blog-tab").style.display = "none";
} else {
  document.getElementById("blog-tab").style.display = "auto";
}

let blog_title = document.getElementById("blog-title");
let blog_content = document.getElementById("blog-content");

blog_title.innerText = Object.keys(blogs)[current_blog - 1];
blog_content.innerText = Object.values(blogs)[current_blog - 1];

function nextBlog() {
  if (current_blog != total_blogs) {
    current_blog += 1;
  } else {
    current_blog = 1;
  }

  blog_title.innerText = Object.keys(blogs)[current_blog - 1];
  blog_content.innerText = Object.values(blogs)[current_blog - 1];
}

function prevBlog() {
  if (current_blog != 1) {
    current_blog -= 1;
  } else {
    current_blog = total_blogs;
  }

  blog_title.innerText = Object.keys(blogs)[current_blog - 1];
  blog_content.innerText = Object.values(blogs)[current_blog - 1];
}

function addBlog() {
  let add_blog_title = document.getElementById("add-blog-title").innerText;
  let add_blog_content = document.getElementById("add-blog-content").innerText;

  blogs[add_blog_title] = add_blog_content;

  const blog_string = JSON.stringify(blogs);

  fs.writeFile("blogs.json", blog_string, (error) => {
    if (error) {
      console.error(error);
      throw error;
    }
    console.log("Blog added correctly");
  });
}

// Typed.js

var typed = new Typed("#element", {
  strings: ["Institutions", "Shows", "Locations"],
  loop: true,
  loopCount: Infinity,
  typeSpeed: 150,
  backSpeed: 50,
});
