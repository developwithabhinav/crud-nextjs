"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { createItem } from "../../utils/crud";
export default function CreatePage() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const router = useRouter();
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    createItem({ name, description });
    router.push("/");
  };
  return (
    <div>
      {" "}
      <h1>Create New Item</h1>{" "}
      <form onSubmit={handleSubmit}>
        {" "}
        <label>
          {" "}
          Name:{" "}
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />{" "}
        </label>{" "}
        <label>
          {" "}
          Description:{" "}
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />{" "}
        </label>{" "}
        <button type="submit">Create</button>{" "}
      </form>{" "}
    </div>
  );
}
