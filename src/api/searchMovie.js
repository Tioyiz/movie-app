export async function searchMovie({ search }) {
  if (!search) return

  try {
    const res = await fetch(
      `https://imdb.iamidiotareyoutoo.com/search?q=${search}`
    )
    const result = await res.json()
    const movie = result.description

    const movieSearch = movie.map((mo) => ({
      actors: mo["#ACTORS"],
      aka: mo["#AKA"],
      imdbId: mo["#IMDB_ID"],
      imdbIv: mo["#IMDB_IV"],
      imdbUrl: mo["#IMDB_URL"],
      imgUrl: mo["#IMG_POSTER"],
      rank: mo["#RANK"],
      title: mo["#TITLE"],
      year: mo["#YEAR"],
      photoHeight: mo.photo_height,
      photoWidtmo: mo.photo_width
    }))

    return movieSearch
  } catch (error) {
    console.error(error)
  }
}
