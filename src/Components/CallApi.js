import React, { useEffect, useState } from "react";
import Axios from "axios";

function CallApi() {
  const [list, setList] = useState([]);

  useEffect(() => {
    Axios({ url: "https://jsonplaceholder.typicode.com/posts" })
      .then((response) => setList(response.data))
      .catch((error) => console.log(error));
  }, [setList]);
  return (
    <div>
      {list.map((item) => (
        <div key={item.id}>
          <h3>{item.title}</h3>
          <p>{item.body}</p>
        </div>
      ))}
    </div>
  );
}

export default CallApi;
