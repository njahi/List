import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

export default function Search() {
  const [query, setQuery] = useState("lamborghini");
  const searchAssets = async () => {
    try {
      setQuery("");
      const res = await fetch("http://localhost:5000/api/asset");
      const data = await res.json();
      console.log(data);
    } catch (error) {
      toast.error("asset not found");
    }
  };
  useEffect(() => {
    searchAssets();
  }, [query]);
  return (
    <input
      className='search'
      type='text'
      placeholder={query}
    />
  );
}
