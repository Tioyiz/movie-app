import { Moviebycategory } from "./movieByCategory"
import { Moviebytype } from "../components/movieByType.jsx"

export function Allmovies({ allmovies }) {
  return (
    <>
      <main
        style={{
          width: "400px",
          display: "flex",
          overflow: "hidden",
          overflowX: "scroll",
          scrollSnapType: " xMandatory",
          scrollBehavior: "smooth"
        }}
        id="main"
      >
        <section style={{ width: "400px", scrollSnapAlign: "start" }}>
          <Moviebycategory allmovies={allmovies} type={"Crime"} />
          <Moviebycategory allmovies={allmovies} type={"Fantasy"} />
          <Moviebycategory allmovies={allmovies} type={"Action"} />
          <Moviebycategory allmovies={allmovies} type={"Romance"} />
          <Moviebycategory allmovies={allmovies} type={"Drama"} />
          <Moviebycategory allmovies={allmovies} type={"Mystery"} />
          <Moviebycategory allmovies={allmovies} type={"Horror"} />
          <Moviebycategory allmovies={allmovies} type={"Adventure"} />
        </section>

        <section style={{ width: "400px", scrollSnapAlign: "start" }}>
          <Moviebytype allmovies={allmovies} type={"tvSeries"} />
        </section>

        <section style={{ width: "400px", scrollSnapAlign: "start" }}>
          <Moviebytype allmovies={allmovies} type={"movie"} />
        </section>

        <section style={{ width: "400px", scrollSnapAlign: "start" }}>
          <Moviebytype allmovies={allmovies} type={"tvMiniSeries"} />
        </section>
      </main>
    </>
  )
}
