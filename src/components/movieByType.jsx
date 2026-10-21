export function Moviebytype({ allmovies, type }) {
  const movies = allmovies.filter((movie) => movie.type == type)

  return (
    <section
      style={{
        width: "400px",
        height: "auto",
        display: "flex",
        flexWrap: "wrap"
      }}
    >
      {movies.map((item) => (
        <div key={item.id} id="card" style={{ width: "100px", margin: "20px" }}>
          <img
            style={{
              width: "100px",
              height: "150px"
            }}
            id="poster"
            src={item.primaryImage.url}
          />
          <h1
            style={{
              fontSize: "15px",
              textOverflow: "clip",
              overflow: "hidden"
            }}
          >
            {item.primaryTitle}{" "}
          </h1>
        </div>
      ))}
    </section>
  )
}
