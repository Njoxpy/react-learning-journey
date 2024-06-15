import React, { useState } from "react";

export default function () {
  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const [course, setCourse] = useState("computer science");
  const [isPending, setIsPending] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    const student = { name, title, course };

    setIsPending(true);
    // making a post request
    fetch("http://localhost:8888/students", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(student),
    }).then(() => {
        console.log("new student registered");
        setIsPending(false);
    });
  };

  return (
    <div>
      <div className="p-8">
        <h1 className="font-bold lg:text-3xl">Create</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label
              htmlFor="name"
              className="text-movieDatabase-textSecondary p-2 ml-2"
            >
              Name
            </label>
            <input
              type="text"
              name=""
              id=""
              required
              placeholder="Enter name"
              className="border focus:to-blue-700 border-blue-700"
              value={name}
              onChange={(event) => {
                console.log(name.length);
                setName(event.target.value);
              }}
            />
          </div>

          <div>
            <label
              htmlFor="name"
              className="text-movieDatabase-textSecondary ml-2"
            >
              Title
            </label>
            <input
              type="text"
              name=""
              id=""
              required
              placeholder="Enter Title"
              className="border focus:to-blue-700 border-blue-700"
              value={title}
              onChange={(event) => {
                setTitle(event.target.value);
              }}
            />
          </div>

          <div>
            <label htmlFor="" className="text-movieDatabase-textSecondary ml-2">
              Course
            </label>
            <select
              name=""
              id=""
              className="border focus:to-blue-700 border-blue-700"
              value={course}
              onChange={(event) => {
                setCourse(event.target.value);
              }}
            >
              <option value="computer science">Computer Science</option>
              <option value="computer engneering">Computer Engneering</option>
            </select>
          </div>

          {!isPending && <button className="ml-2 font-bold bg-movieDatabase-buttonPrimary hover:bg-movieDatabase-buttonPrimary-hover text-white p-2 rounded">
            Create
          </button>}

          {isPending && <button className="ml-2 font-bold bg-movieDatabase-buttonPrimary hover:bg-movieDatabase-buttonPrimary-hover text-white p-2 rounded" disabled>
            Creating Account....
          </button>}
        </form>
      </div>
    </div>
  );
}

/*
- when a user tries to exit page withoud submitting the page should ask the user you wan to exit 
*/
