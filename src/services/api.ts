const BASE_URL = "https://api.themoviedb.org/3";

const TOKEN =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjZjcyMWZiMzk1OThmZjIzYzFlY2I4Njc3NzRlNTgzMiIsIm5iZiI6MTcyODM4NzU2Ni43NDIsInN1YiI6IjY3MDUxOWVlNGIwYzViOWQ3MTY5ZDQ3OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.behOp2elFCaCI-xDjG7GBmOHtkqiNulLy2rIu2n0fVM";

export async function getMovies() {
  try {
    const res = await fetch(`${BASE_URL}/movie/popular`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${TOKEN}`,
        Accept: "application/json",
      },
    });

    if (!res.ok) {
      throw new Error("API ishlamadi");
    }

    const data = await res.json();

    console.log("API DATA:", data); 

    return data.results;
  } catch (error) {
    console.error("Xatolik:", error);
    return [];
  }
}
