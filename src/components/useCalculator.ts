import { type ChangeEvent, useMemo, useState, type FormEvent } from 'react'

type Data = {
  ppi: number
  ratio: number
}

export const useCalculator = () => {
  const [deviceWidth, setDeviceWidth] = useState('')
  const [deviceHeight, setDeviceHeight] = useState('')
  const [devicePPI, setDevicePPI] = useState('')

  const [viewportWidth, setViewportWidth] = useState('')
  const [viewportHeight, setViewportHeight] = useState('')
  const [pixelRatio, setPixelRatio] = useState('')

  const onChangeDeviceWidth = (e: ChangeEvent<HTMLInputElement>) => {
    setDeviceWidth(e.target.value)
  }

  const onChangeDeviceHeight = (e: ChangeEvent<HTMLInputElement>) => {
    setDeviceHeight(e.target.value)
  }

  const onChangeDevicePPI = (e: ChangeEvent<HTMLInputElement>) => {
    setDevicePPI(e.target.value)
  }

  const calculate = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const { a, b } = await params

    if (a != 0 && b != 0 && deviceWidth && deviceHeight && devicePPI) {
      const x = Number(devicePPI)
      const y = a * x + b

      setPixelRatio(y.toFixed(2))

      const width = Number(deviceWidth) / y
      setViewportWidth(width.toFixed(2))

      const height = Number(deviceHeight) / y
      setViewportHeight(height.toFixed(2))
    }
  }

  const params = useMemo(async (): Promise<{
    a: number
    b: number
  }> => {
    try {
      const response = await fetch('data.json')
      const data: Data[] = await response.json()

      if (data.length < 0) throw new Error('No data')

      const sumX = data.reduce((acc, point) => acc + point.ppi, 0)
      const sumY = data.reduce((acc, point) => acc + point.ratio, 0)
      const sumXY = data.reduce((acc, point) => acc + point.ppi * point.ratio, 0)
      const sumXSquare = data.reduce((acc, point) => acc + point.ppi ** 2, 0)
      const n = data.length

      const a = (n * sumXY - sumX * sumY) / (n * sumXSquare - sumX ** 2)
      const b = (sumY - a * sumX) / n

      return {
        a: a || 0,
        b: b || 0
      }
    } catch (e) {
      console.error(e)
      return {
        a: 0,
        b: 0
      }
    }
  }, [])

  return {
    deviceWidth,
    deviceHeight,
    devicePPI,
    viewportWidth,
    viewportHeight,
    pixelRatio,
    onChangeDeviceWidth,
    onChangeDeviceHeight,
    onChangeDevicePPI,
    calculate
  }
}
