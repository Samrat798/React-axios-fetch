import { useEffect, useState } from "react";

const User = () => {
  const [searchInput, setSearchInput] = useState("");
  const [data, setDate] = useState([]);
  useEffect(() => {
    let url = "https://jsonplaceholder.typicode.com/users";
    fetch(url).then((res) => {
      res.json().then((res) => {
        // console.log(res);
        setDate(res);
      });
    });
  }, []);

  const serachItem = (e) => {
    const keyword = e.target.value;
    if (keyword !== "") {
      const result = data.filter((item) => {
        return Object.values(item)
          .join("")
          .toLowerCase()
          .includes(searchInput.toLowerCase());
      });
      setDate(result);
    } else {
      setDate(data);
    }
    setSearchInput(keyword);
  };

  return (
    <>
      <div>
        <input
          type="text"
          value={searchInput}
          placeholder="Search..."
          onChange={serachItem}
        />
        <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Email</th>
              <th>Address</th>
            </tr>
          </thead>
          <tbody>
            {data && data.length > 0 ? (
              data.map((item, index) => (
                <tr key={index}>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  <td>{item.address.street}</td>
                </tr>
              ))
            ) : (
              <h1>No result found</h1>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default User;
