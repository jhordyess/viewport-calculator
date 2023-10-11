import Calculator from './components/Calculator'

const Home = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-4">
      <header className="flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold">Viewport Calculator</h1>
        <h2 className="text-center text-lg font-bold">
          Estimate device's pixel ratio and calculate the viewport.
        </h2>
      </header>
      <main className="flex flex-1 flex-col items-center justify-center text-center">
        <Calculator />

        <hr className="my-8 w-full" />

        <span>
          Data used for the regression calculation from&nbsp;{' '}
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
