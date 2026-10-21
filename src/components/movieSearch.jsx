export function MovieSearch({ movie }) {
  return (
    <>
      <section
        style={{
          width: "400px",
          height: "auto",
          display: "flex",
          flexWrap: "wrap"
        }}
      >
        {movie.map((item) => (
          <div
            key={item.id}
            id="card"
            style={{ width: "100px", margin: "20px" }}
          >
            <img
              style={{
                width: "100px",
                height: "150px"
              }}
              id="poster"
              src={item.imgUrl}
            />
            <h1
              style={{
                fontSize: "15px",
                textOverflow: "clip",
                overflow: "hidden"
              }}
            >
              {item.aka}{" "}
            </h1>
          </div>
        ))}
      </section>
    </>
  )
}
