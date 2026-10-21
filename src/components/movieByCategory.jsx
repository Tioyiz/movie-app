export function Moviebycategory({ allmovies, type }) {
  const typemovie = allmovies.filter((movie) => movie.genres.includes(type))

  return (
    <section>
      <p>{type}</p>
      <div
        style={{
          width: "400px",
          height: "auto",
          display: "flex",
          overflow: "hidden",
          overflowX: "scroll",
          gap: "40px",
          padding: "10px",
          margiTop: "15px"
        }}
      >
        {typemovie.map((movie) => (
          <div key={movie.id} id="card">
            <img
              style={{
                width: "100px",
                height: "150px"
              }}
              id="poster"
              src={movie.primaryImage.url}
            />
            <h1
              style={{
                fontSize: "12px",
                textOverflow: "clip",
                overflow: "hidden"
              }}
            >
              {movie.primaryTitle}
            </h1>
          </div>
        ))}
      </div>
    </section>
  )
}
