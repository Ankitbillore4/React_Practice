import React from "react";
function Card() {
  const data = [
    {
      image:
        "https://plus.unsplash.com/premium_photo-1664201890375-f8fa405cdb7d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Amazon",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus porro repudiandae dolor!",
    },
    {
      image:
        "https://plus.unsplash.com/premium_photo-1724249989963-9286e126af81?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Apple",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus porro repudiandae dolor!",
    },
    {
      image:
        "https://plus.unsplash.com/premium_photo-1724255863045-2ad716767715?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "mango",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus porro repudiandae dolor!",
    },
  ];

  return (
    <div className="h-screen w-full bg-zinc-500 px-4 py-4 flex items-center justify-center gap-10">
      {data.map((elem, index) => (
        <div
          key={index}
          className="card w-52 bg-zinc-300  rounded-lg overflow-hidden"
        >
          <div className="h-32 w-full bg-zinc-100">
            <img
              className="w-full h-full object-cover"
              src={elem.image}
              alt=""
            />
          </div>
          <div className="w-full px-3 py-4">
            <h2 className="font-semibold">{elem.name}</h2>
            <p className="text-xs mt-3">{elem.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Card;
