export function put(url, req, updateFunction) {
  return (
    fetch(url, req)
      .then(res => res.ok ? res.json() : null)
      .then(artist => updateFunction(artist))
      .catch(err => console.error(err))
  )
}

export function get(url, updateFunction) {
  return (
    fetch(url)
      .then(res => res.ok ? res.json() : null)
      .then(found => updateFunction(found))
      .catch(err => console.error(err))
  )
}

export function post(url, req) {
  return (
    fetch(url, req)
      .then(res => res.ok ? res.json() : null)
      .catch(err => console.error(err))
  )
}

export function remove(url, req, updateFunction) {
  return (
    fetch(url, req)
      .then(res => res.ok)
      .then(updateFunction)
      .catch(err => console.error(err))
  )
}
