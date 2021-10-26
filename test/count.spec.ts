import { resolve } from 'path/posix'
import { count, loadedAt } from '../src/count.js'

describe('count()', () => {
  it('should count 0, 1, 2, 3...', () => {
    expect(count()).toEqual(0)
    expect(count()).toEqual(1)
    expect(count()).toEqual(2)
    expect(count()).toEqual(3)
    expect(count()).toEqual(4)
    expect(count()).toEqual(5)
  })
})

describe('count()', () => {
  it('should return the time loaded', async () => {
    const l = loadedAt().toISOString()
    const sleep = async (timeout: number) => {
      await new Promise((resolve) => setTimeout(() => resolve(0), timeout))
    }
    await sleep(10)
    expect(loadedAt().toISOString()).toEqual(l)
    await sleep(10)
    expect(loadedAt().toISOString()).toEqual(l)
    await sleep(10)
    expect(loadedAt().toISOString()).toEqual(l)
  })
})
