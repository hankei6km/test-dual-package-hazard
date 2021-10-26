const state = {
  loadedAt: new Date(),
  counter: 0
}

export function count(): number {
  return state.counter++
}

export function loadedAt() {
  return state.loadedAt
}
