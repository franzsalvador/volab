export function sendFetch(url, req) {
  return (
    fetch(url, req)
      .then(res => res.ok ? res.json() : null)
      .catch(err => console.error(err))
  )
}

export function sendDelete(url, req) {
  return (
    fetch(url, req)
      .then(res => res.ok)
      .catch(err => console.error(err))
  )
}
