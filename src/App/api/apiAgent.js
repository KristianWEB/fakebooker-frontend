export default {
  get: ({ url, query = {} }) => {
    const queryUrl = Object.keys(query).forEach(key =>
      url.searchParams.append(key, query[key])
    );
    fetch(queryUrl)
      .then(response => {
        return response;
      })
      .catch(error => {
        return Promise.reject(Error(error.message));
      });
  },
  post: ({ url, data = {} }) => {
    console.log(url, "url");
    console.log(data, "data");
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })
      .then(response => {
        return response.json();
      })
      .catch(error => {
        console.log(error, "error");
        return Promise.reject(Error(error.message));
      });
  }
};
