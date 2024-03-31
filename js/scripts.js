window.onload = function () {
  const defaultTypeSpeed = 50;
  const defaultFadeSteps = 30;
  const defaultFadeDelay = 10;

  function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  const introAnimation = async function () {
    let iText = document.getElementById("introText");
    let subText = document.getElementById("hideUntilDone");
    let centeredDiv = document.getElementsByClassName("centered");
    let everythingElse = document.getElementsByClassName("everything");

    await delay(1500);
    await deleteCurrentText(iText);
    await delay(100);
    let msg = "My name is Corbin Stickley.";
    await typeInText(iText, msg);
    await delay(500);
    await deleteCurrentText(iText);
    await delay(100);
    msg = "Welcome to my portfolio!"
    await typeInText(iText, msg);
    await delay(200);

    // centeredDiv[0].style.display = "none";
    // everythingElse[0].style.display = "flex";

    // iText.style.visibility = "hidden";
    // iText.style.display = "none";
    // subText.style.opacity = 1.0;

    subText.style.opacity = 0.0;
    await fadeIn(subText);


  }
  introAnimation();


  async function deleteCurrentText(textContainer, letterDelay = defaultTypeSpeed) {
    for (let i = textContainer.textContent.length; i > 0; i--) {
      textContainer.textContent = textContainer.textContent.slice(0, i);
      await delay(letterDelay);
    }
  }

  async function typeInText(textContainer, newText, letterDelay = defaultTypeSpeed) {
    for (let i = 0; i < newText.length; i++) {
      textContainer.textContent = newText.slice(0, i + 1);
      await delay(letterDelay);
    }
  }

  async function fadeIn(htmlItem, fadeSteps = defaultFadeSteps, stepDelay = defaultFadeDelay) {
    let stepAmount = 1 / fadeSteps;
    let currentOpacity = Number(htmlItem.style.opacity);
    for (let i = 0; i < fadeSteps; i++) {
      currentOpacity = currentOpacity + stepAmount;
      htmlItem.style.opacity = currentOpacity;
      await delay(stepDelay)
    }
  }

}

function filterProjects(category) {
  let projects = document.querySelectorAll('.container .row .col-md-4.mb-5');
  projects.forEach(project => {
    let categories = project.getAttribute('project-categories').split(' ');
    if (category === 'all' || categories.includes(category)) {
      project.style.display = '';
    } else {
      project.style.display = 'none';
    }
  });
}
