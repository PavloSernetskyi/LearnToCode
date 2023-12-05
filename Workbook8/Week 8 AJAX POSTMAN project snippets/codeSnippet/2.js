function fetchData(_endpointResource) {
    const baseURL = "https://www.boredapi.com/api/";
    const endpointResource = _endpointResource;
    const searchValue = "";
    const api_key = "";
  
    fetch(baseURL + endpointResource).then((response) =>
      response.json().then((data) => displayData(data))
    );
  }
  
  function displayData(_data) {
    console.log(_data);
  }

//   fetchData("albums");
//   fetchData("todos");
//   fetchData("todos/1");
//   fetchData("albums");
// fetchData("comments");

fetchData("activity/");

