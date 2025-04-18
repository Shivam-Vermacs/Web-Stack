const loadjoke = async () => {
  try {
    const data = await fetch("https://api.chucknorris.io/jokes/random", {
      header: {
        accept: "application/json",
      },
    });
    const jokeValue = await data.json();
    document.getElementById("loadingjoke").innerHTML = jokeValue.value;
  } catch (error) {
    console.error(error);
  }
};

document.getElementById("loadbtn").addEventListener("click", loadjoke);
