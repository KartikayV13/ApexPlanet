const jokeContainer = document.querySelector(".jokes");
const btn = document.querySelector(".btn");
const URL =
  " https://v2.jokeapi.dev/joke/Programming,Dark?blacklistFlags=nsfw,religious,political,racist,sexist,explicit";

const getjoke = async () => {
  try {
    jokeContainer.textContent = "Loading...";

    const response = await fetch(URL);
    const data = await response.json();

    console.log("Jokes", data);

    if (data.type === "single") {
      jokeContainer.textContent = data.joke;
    } else if (data.type === "twopart") {
      jokeContainer.innerHTML = `${data.setup}<br><strong>${data.delivery}</strong>`;
    } else {
      jokeContainer.textContent = "Couldn't fetch a joke";
    }
  } catch (err) {
    console.error("Error fetching joke:", error);
    jokeContainer.textContent = "Failed to fetch joke. Try again.";
  }
};

getjoke();

btn.addEventListener("click", getjoke);
