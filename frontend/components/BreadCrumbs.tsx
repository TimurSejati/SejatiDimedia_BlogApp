import Link from "next/link";
import React from "react";

interface BreadCrumbsProps {
  data: { name: string; link: string }[];
}

const BreadCrumbs: React.FC<BreadCrumbsProps> = ({ data }) => {
  return (
    <div className="flex items-center py-4 overflow-x-auto whitespace-nowrap">
      {data.map((item, index) => (
        <div
          key={index}
          className="text-black opacity-50 text-xs font-roboto md:text-sm"
        >
          <Link href={item.link}>{item.name}</Link>
          {index !== data.length - 1 && <span className="px-3">/</span>}
        </div>
      ))}
    </div>
  );
};

export default BreadCrumbs;
