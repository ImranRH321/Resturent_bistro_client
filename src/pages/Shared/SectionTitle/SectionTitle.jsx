import React from "react";

const SectionTitle = ({smallHeading, largeHeading}) => {
  return (
    <div className="text-center my-10">
      <p className="text-orange-400">{smallHeading}</p>
      <h2 className="uppercase  w-[320px] mx-auto border-t-4 border-b-4 my-2 sm:text-4xl">
        {largeHeading}
      </h2>
    </div>
  );
};

export default SectionTitle;
