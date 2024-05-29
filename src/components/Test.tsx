"use client";

const Test = () => {
  return (
    <select
      name="review-sort"
      id="review-sort"
      className="border-2 border-gray-200 rounded-md focus:outline-zinc-500 py-2.5 px-4 font-[600]"
      style={{
        appearance: "none",
        WebkitAppearance: "none",
        MozAppearance: "none",
        backgroundImage: "none",
      }}
    >
      <option value="newest" selected>
        Newest
      </option>
      <option value="oldest">Oldest</option>
      <option value="positive">Positive</option>
      <option value="critical">Critical</option>
    </select>
  );
};

export default Test;
