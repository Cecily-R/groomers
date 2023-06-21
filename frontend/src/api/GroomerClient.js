class GroomerClient {
  constructor () {
    this.baseURL = 'http://localhost:3000/'
  }

  fetchAllGroomers = () => {
    const URL = this.baseURL + "groomers/" 
    
    let promise = fetch(URL)
      .then(response => response.json())
      .then((data) => {useCallback(data)})
    return promise
  }
}