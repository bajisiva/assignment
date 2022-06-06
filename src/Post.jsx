import React from "react";

const Post = () => {
  const [email, setData] = React.useState();
  const [message, setData1] = React.useState();
  const [name, setData2] = React.useState();
  const [data3, setData3] = React.useState();

  const hanldeEmail = (e) => {
    setData(e.target.value);
  };
  const hanldeMessage = (e) => {
    setData1(e.target.value);
  };
  const hanldeName = (e) => {
    setData2(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    setData3({ email, message, name });
  };

  React.useEffect(() => {
    fetch("https://admin.srkprojects.com/web/api/client/v1/contact-us/", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data3),
    }).then((res) => console.log(res));
  }, []);
  const handleBlur = (e) => {
    if (e.target.value.length <= 6) {
      return <p style={{ color: "red" }}>"name should be 6 letters"</p>;
    } else {
      return null;
    }
  };
  return (
    <div className="mt-5">
      <form onSubmit={handleSubmit}>
        <input type="email" placeholder="email" onChange={hanldeEmail} />

        <br />
        <input type="text" placeholder="message" onChange={hanldeMessage} />
        <br />
        <input
          type="text"
          placeholder="name"
          onChange={hanldeName}
          onBlur={handleBlur}
        />

        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Post;
