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

import React from "react";

const Test = () => {
  return (
    <div className="relative text-2xl">
      <Select>
        <SelectTrigger className="w-[220px] py-5 border-black">
          <SelectValue placeholder="Default" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup className="text-2xl">
            <SelectItem value="apple">Apple</SelectItem>
            <SelectItem value="banana">Banana</SelectItem>
            <SelectItem value="blueberry">Blueberry</SelectItem>
            <SelectItem value="grapes">Grapes</SelectItem>
            <SelectItem value="pineapple">Pineapple</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
      <span className="text-xs absolute -top-[7px] right-4 bg-white block px-1 text-gray-500">
        Sort By
      </span>
    </div>
  );
};

export default Test;
