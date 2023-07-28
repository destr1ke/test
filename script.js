let currentStep = 1;

function openModal() {
  document.getElementById("overlay").style.display = "block";
  showStep(currentStep);
}

function showStep(stepNumber) {
  const steps = document.querySelectorAll(".step");
  steps.forEach((step) => {
    step.classList.remove("active");
  });

  steps[stepNumber - 1].classList.add("active");
}

function nextStep(stepNumber) {
  currentStep = stepNumber + 1;
  showStep(currentStep);

  if (currentStep === 4) {
    closeModal();
  }
}

function prevStep(stepNumber) {
  currentStep = stepNumber - 1;
  showStep(currentStep);
}

function closeModal() {
  document.getElementById("overlay").style.display = "none";
  currentStep = 1;
  showStep(currentStep);
}
