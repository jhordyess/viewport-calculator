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
      <section className="w-full text-left">
        <form onSubmit={handleCalculate}>
          <div className="">
            <label htmlFor="device-width" className="text-sm font-semibold">
              Device width
            </label>
            <input
              className="mt-2 w-full rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="number"
              id="device-width"
              placeholder="Enter device width"
              value={deviceWidth}
              onChange={onChangeDeviceWidth}
            />
          </div>

          <div className="mt-4">
            <label htmlFor="device-height" className="text-sm font-semibold">
              Device height
            </label>
            <input
              className="mt-2 w-full rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="number"
              id="device-height"
              placeholder="Enter device height"
              value={deviceHeight}
              onChange={onChangeDeviceHeight}
            />
          </div>

          <div className="mt-4">
            <label htmlFor="device-ppi" className="text-sm font-semibold">
              Device PPI
            </label>
            <input
              className="mt-2 w-full rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
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

      {viewportWidth && viewportHeight && pixelRatio && (
        <section className="pt-8">
          <dl>
            <dt className="font-semibold">Viewport width</dt>
            <dd className="mt-2 text-gray-600">{viewportWidth}px</dd>

            <dt className="mt-4 font-semibold">Viewport height</dt>
            <dd className="mt-2 text-gray-600">{viewportHeight}px</dd>

            <dt className="mt-4 font-semibold">Pixel ratio</dt>
            <dd className="mt-2 text-gray-600">{pixelRatio}</dd>
          </dl>
        </section>
      )}
    </>
  )
}

export default Calculator
