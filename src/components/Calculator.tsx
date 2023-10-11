import { useCalculator } from './useCalculator'

const Calculator = () => {
  const {
    deviceHeight,
    devicePPI,
    deviceWidth,
    calculate: handleCalculate,
    onChangeDeviceHeight,
    onChangeDevicePPI,
    onChangeDeviceWidth,
    pixelRatio,
    viewportHeight,
    viewportWidth
  } = useCalculator()

  return (
    <>
      <section className="w-full">
        <form onSubmit={handleCalculate}>
          <div>
            <label htmlFor="device-width" className="block text-lg font-bold">
              Device width
            </label>
            <input
              className="mt-2 w-full rounded-md border border-gray-300 px-4 py-2 text-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="number"
              id="device-width"
              placeholder="Enter device width"
              value={deviceWidth}
              onChange={onChangeDeviceWidth}
            />
          </div>

          <div className="mt-4">
            <label htmlFor="device-height" className="block text-lg font-bold">
              Device height
            </label>
            <input
              className="mt-2 w-full rounded-md border border-gray-300 px-4 py-2 text-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="number"
              id="device-height"
              placeholder="Enter device height"
              value={deviceHeight}
              onChange={onChangeDeviceHeight}
            />
          </div>

          <div className="mt-4">
            <label htmlFor="device-ppi" className="block text-lg font-bold">
              Device PPI
            </label>
            <input
              className="mt-2 w-full rounded-md border border-gray-300 px-4 py-2 text-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="number"
              id="device-ppi"
              placeholder="Enter device PPI"
              value={devicePPI}
              onChange={onChangeDevicePPI}
            />
          </div>

          <div className="mt-4">
            <button
              className="w-full rounded-md bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="submit"
            >
              Calculate
            </button>
          </div>
        </form>
      </section>

      <section>
        <div className="mt-8">
          <span className="block text-lg font-bold">Viewport width</span>
          <output className="mt-2 w-full rounded-md border border-gray-300 px-4 py-2 text-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
            {viewportWidth}px
          </output>
        </div>

        <div className="mt-4">
          <span className="block text-lg font-bold">Viewport height</span>
          <output className="mt-2 w-full rounded-md border border-gray-300 px-4 py-2 text-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
            {viewportHeight}px
          </output>
        </div>

        <div className="mt-4">
          <span className="block text-lg font-bold">Pixel ratio</span>
          <output className="mt-2 w-full rounded-md border border-gray-300 px-4 py-2 text-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
            {pixelRatio}
          </output>
        </div>
      </section>
    </>
  )
}

export default Calculator
