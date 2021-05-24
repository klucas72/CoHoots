const signupFormHandler = async (event) => {
  event.preventDefault();

  const username = document
    .querySelector("#username-input-signup")
    .value.trim();
  const password = document
    .querySelector("#password-input-signup")
    .value.trim();
  const firstName = document.querySelector("#first-name-signup").value.trim();
  const lastName = document.querySelector("#last-name-signup").value.trim();
  const streetAddress = document.querySelector("#street-address-signup").value;
  const city = document.querySelector("#city-signup").value.trim();
  const state = document.querySelector("#state-signup").value.trim();
  const zip = document.querySelector("#zip-signup").value.trim();
  const email = document.querySelector("#email-signup").value.trim();

  if (
    (username,
    password,
    firstName,
    lastName,
    streetAddress,
    city,
    state,
    zip,
    email)
  ) {
    const response = await fetch("/api/users", {
      method: "POST",
      body: JSON.stringify({
        username,
        password,
        firstName,
        lastName,
        streetAddress,
        city,
        state,
        zip,
        email,
      }),
      headers: { "Content-Type": "application/json" },
    });
    if (response.ok) {
      document.location.replace("/dashboard");
    } else {
      alert("Failed to sign up.");
    }
  }
};

document
  .querySelector("#signup-form")
  .addEventListener("submit", signupFormHandler);
