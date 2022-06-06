import React from "react";

const Get = () => {
  const [data, setData] = React.useState([]);
  React.useEffect(() => {
    fetch("https://gorest.co.in/public/v1/todos").then((res) =>
      res.json().then((data) => setData([...data.data]))
    );
  }, []);
  return (
    <div className="d-flex flex-wrap w2">
      {data &&
        data.map((d, i) => (
          <div key={i} className="border wi">
            <li>{d.id}</li>
            <li>{d.user_id}</li>
            <li>{d.title}</li>
            <li>{d.status}</li>
            <li>{d.due_on}</li>
          </div>
        ))}
    </div>
  );
};

export default Get;
