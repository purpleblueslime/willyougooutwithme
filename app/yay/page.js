"use client";

export default function page() {
  const handleClick = () => {
    window.open("https://wa.me/?text=Yes%20Vuyo%20I%20love%20you");
  };

  return (
    <div className="box">
      <img alt="bugcat yayyy" className="image" src="/bugcat-yay.gif" />
      <div
        style={{
          width: "100%",
          paddingRight: "15px",
          textAlign: "center",
          fontSize: "25px"
        }}
      >
        lol I love You
      </div>
      <button onClick={handleClick}>Share to Vuyo</button>
    </div>
  );
}
