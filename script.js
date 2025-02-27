document.addEventListener("DOMContentLoaded", function () {
  const radialGradientContainer = document.querySelector(
    ".radial-gradient-container"
  );

  document.addEventListener("mousemove", function (e) {
    const x = e.clientX;
    const y = e.clientY;

    const radialGradientStyle = `radial-gradient(600px at ${x}px ${y}px, rgba(29, 78, 216, 0.15), transparent 80%)`;
    radialGradientContainer.style.background = radialGradientStyle;
  });
});

let skillsContainers = document.getElementsByClassName("skills");

for (let i = 0; i < skillsContainers.length; i++) {
  let skillsContainer = skillsContainers[i];
  let skillsText = skillsContainer.innerText;

  let coloredText = "";
  let insideQuotes = false;
  let secondary = false;
  let cmt = false;

  for (let j = 0; j < skillsText.length; j++) {
    let char = skillsText[j];
    let color = "#fff";

    if ((char === "," || char === "]" || char === "//") && secondary)
      secondary = false;

    if (cmt && (char === '"' || char === "]")) cmt = 0;
    if (char === "/") {
      cmt = 1;
    }

    if (!secondary && char === '"') {
      secondary = 1;
    }

    if (char === "“") {
      insideQuotes = !insideQuotes;
    }

    if (insideQuotes) {
      color = "#C81F70";
    }
    if (secondary) {
      color = "#50A459";
    }

    if (cmt) {
      color = "#777";
    }

    if (char === "”") {
      insideQuotes = !insideQuotes;
    }

    coloredText += `<span style="color: ${color};">${char}</span>`;
  }
  skillsContainer.innerHTML = `<pre>${coloredText}</pre>`;
}

var pre_skill = document.getElementById("skill");
var skill = document.getElementById("code");

pre_skill.addEventListener("mousedown", function () {
  if (window.innerWidth > 600) {
    pre_skill.style.display = "none";
    skill.style.display = "block";
  }
});

pre_skill.addEventListener("mouseover", function () {
  pre_skill.style.opacity = 1;
});

if (window.innerWidth > 600) {
  preSkill.style.opacity = 0.5;
}

skill.addEventListener("mouseup", function () {
  pre_skill.style.display = "block";
  skill.style.display = "none";
});

document.addEventListener("scroll", function () {
  let bar = document.getElementById("mobile-b");
  if (window.scrollY > 120) {
    bar.style.transform = "translateY(-200px)";
  } else {
    bar.style.transform = "translateY(0)";
  }
  if (window.scrollY > 300) {
    var skillElement = document.getElementById("skill");
    if (skillElement) {
      skillElement.style.marginTop = "10%";
    }
  }
  if (window.scrollY > 900) {
    var skillElement = document.getElementById("product");
    if (skillElement) {
      skillElement.style.marginTop = "0%";
    }
  }
});

document.addEventListener("scroll", function () {
  var bar = document.getElementById("mobile-b");
  var scrollPosition = window.scrollY;

  var maxScroll = document.documentElement.scrollHeight - window.innerHeight;
  var percentage = (scrollPosition / maxScroll) * 100;

  var startColor = "#93cdd9";
  var endColor = "#0f172a";

  var newColor = interpolateColor(startColor, endColor, percentage / 100);

  bar.style.backgroundColor = newColor;
});

function interpolateColor(start, end, percentage) {
  var startColor = hexToRgb(start);
  var endColor = hexToRgb(end);

  var r = Math.round(startColor.r + percentage * (endColor.r - startColor.r));
  var g = Math.round(startColor.g + percentage * (endColor.g - startColor.g));
  var b = Math.round(startColor.b + percentage * (endColor.b - startColor.b));

  return rgbToHex(r, g, b);
}

function hexToRgb(hex) {
  var bigint = parseInt(hex.slice(1), 16);
  var r = (bigint >> 16) & 255;
  var g = (bigint >> 8) & 255;
  var b = bigint & 255;
  return { r, g, b };
}

function rgbToHex(r, g, b) {
  return "#" + ((1 << 24) | (r << 16) | (g << 8) | b).toString(16).slice(1);
}
