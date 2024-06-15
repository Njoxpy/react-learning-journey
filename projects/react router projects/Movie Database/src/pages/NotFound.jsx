import React from "react";
import { NavLink } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="p-8 bg-movieDatabase-backgroundMain">
      <h1 className="font-semibold mb-1">Not Found</h1>
      <p>
        Page Not Found return to <NavLink to="/" className="font-bold text-blue hover:underline">Homepage</NavLink>
      </p>
    </div>
  );
}
