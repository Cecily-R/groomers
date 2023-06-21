class GroomersClient {
  constructor () {
    this.baseURL = 'http://localhost:3001/'
  }

  fetchAllGroomers = (setGroomers) => {
    const URL = this.baseURL + "groomers/" 
    
    return fetch(URL)
      .then(response => { 
        return response.json()
      })
      .then((data) => {
        setGroomers(data);
      })
      // .catch((err) => {
      //   console.log(err.message);
      // });
  };
};

export default GroomersClient;