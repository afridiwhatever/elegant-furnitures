import { ChevronDown } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

// const Test = () => {
//   return (
<div className="relative">
  <select
    defaultValue={"newest"}
    name="review-sort"
    id="review-sort"
    className="border-2 border-gray-200 rounded-md focus:outline-zinc-500 py-2.5 px-4 font-[600] w-full md:w-48"
    style={{
      appearance: "none",
      WebkitAppearance: "none",
      MozAppearance: "none",
      backgroundImage: "none",
      background: "none",
    }}
  >
    <option value="newest">Newest</option>
    <option value="oldest">Oldest</option>
    <option value="positive">Positive</option>
    <option value="critical">Critical</option>
  </select>
  <ChevronDown className="h-5 w-5 absolute right-2 top-[50%] transform -translate-y-[50%] " />
</div>;
//   );
// };

// export default Test;

import React from "react";

const Test = () => {
  return (
    <div className="">
      <Select>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Select a fruit" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectItem value="apple">Apple</SelectItem>
            <SelectItem value="banana">Banana</SelectItem>
            <SelectItem value="blueberry">Blueberry</SelectItem>
            <SelectItem value="grapes">Grapes</SelectItem>
            <SelectItem value="pineapple">Pineapple</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
};

export default Test;
