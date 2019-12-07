export default function throttle(fn: any, interval: number) {
  let pending = true
  setTimeout(() => (pending = false), interval)
  return (...args) => {
    if (pending) return
    pending = true
    fn(...args)
    setTimeout(() => (pending = false), interval)
  }
}
