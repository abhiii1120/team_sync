import { cn } from "@/lib/utils";
import { Search } from "lucide-react";
import React from "react";

const SearchBar = ({ placeholder, className }) => {
  return (
    <div className={cn("flex relative h-fit border w-fit", className)}>
      <input type="text" placeholder={placeholder} className="pl-8 p-2" />
      <Search className="absolute top-2 left-1" />
    </div>
  );
};

export default SearchBar;
