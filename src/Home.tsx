import Calculator from './components/Calculator'

const Home = () => {
  return (
    <div className="w-full bg-gray-100 py-8">
      <section className="mx-auto max-w-[24rem] rounded-lg border bg-white p-8 shadow-md">
        <header className="flex flex-col items-center justify-center gap-y-4 pb-10">
          <h1 className="text-2xl font-bold">Viewport Calculator</h1>
          <h2 className="text-center text-base">
            Estimate device's pixel ratio and calculate the viewport.
          </h2>
        </header>
        <main className="flex flex-1 flex-col items-center justify-center text-center">
          <Calculator />

          <hr className="my-8 w-full" />

          <span>
            Credits for the data:&nbsp;
            <a
              href="https://yesviz.com/mobiles.php"
              target="_blank"
              rel="noreferrer"
              className="text-blue-500 hover:underline"
            >
              Yesviz
            </a>
          </span>
        </main>
      </section>

      <footer className="w-full pt-6 text-center">
        Made with 💪 by&nbsp;
        <a
          href="https://www.jhordyess.com"
          target="_blank"
          className="text-blue-500 hover:underline"
        >
          Jhordyess
        </a>
        <br />
        👉&nbsp;
        <a
          href="https://github.com/jhordyess/viewport-calculator"
          target="_blank"
          className="text-blue-500 hover:underline"
        >
          View on GitHub
        </a>
      </footer>
    </div>
  )
}

export default Home
