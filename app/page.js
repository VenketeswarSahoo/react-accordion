"use client";
import AccordionItem from "@/Components/AccordionItem";
import React, { useState } from "react";

const page = () => {
  const [open, setopen] = useState(false);

  const toggle = index => {
    if (open == index) {
      return setopen(null);
    } else {
      setopen(index);
    }
  };

  const accordionData = [
    {
      title: "This is First FAQ",
      desc:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident repellat ullam, possimus placeat corrupti alias minus adipisci eius iure tenetur. Similique nemo veniam ex tenetur. Quibusdam eligendi recusandae aperiam expedita ducimus veniam enim dolore voluptas aliquam. Officia ex fugiat possimus! Ut eos doloremque voluptate dolor enim, repellendus ab, quod esse illo quaerat pariatur maiores incidunt, itaque nesciunt accusantium asperiores obcaecati? Saepe sequi recusandae harum. Ullam amet commodi ipsa in quae dolore molestiae deleniti ad quia adipisci quo dolorem dolor laudantium cumque laboriosam qui ratione illum vitae numquam facere ab, quos, quam ipsum? Dolorum, similique eaque! Ut debitis deleniti optio quisquam."
    },
    {
      title: "This is second FAQ",
      desc:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident repellat ullam, possimus placeat corrupti alias minus adipisci eius iure tenetur. Similique nemo veniam ex tenetur. Quibusdam eligendi recusandae aperiam expedita ducimus veniam enim dolore voluptas aliquam. Officia ex fugiat possimus! Ut eos doloremque voluptate dolor enim, repellendus ab, quod esse illo quaerat pariatur maiores incidunt, itaque nesciunt accusantium asperiores obcaecati? Saepe sequi recusandae harum. Ullam amet commodi ipsa in quae dolore molestiae deleniti ad quia adipisci quo dolorem dolor laudantium cumque laboriosam qui ratione illum vitae numquam facere ab, quos, quam ipsum? Dolorum, similique eaque! Ut debitis deleniti optio quisquam."
    },
    {
      title: "This is second FAQ",
      desc:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident repellat ullam, possimus placeat corrupti alias minus adipisci eius iure tenetur. Similique nemo veniam ex tenetur. Quibusdam eligendi recusandae aperiam expedita ducimus veniam enim dolore voluptas aliquam. Officia ex fugiat possimus! Ut eos doloremque voluptate dolor enim, repellendus ab, quod esse illo quaerat pariatur maiores incidunt, itaque nesciunt accusantium asperiores obcaecati? Saepe sequi recusandae harum. Ullam amet commodi ipsa in quae dolore molestiae deleniti ad quia adipisci quo dolorem dolor laudantium cumque laboriosam qui ratione illum vitae numquam facere ab, quos, quam ipsum? Dolorum, similique eaque! Ut debitis deleniti optio quisquam."
    }
  ];
  return (
    <div className="h-screen grid place-items-center">
      <div className="px-[40px] max-w-[800px]">
        {accordionData.map((data, index) => {
          return (
            <AccordionItem
              key={index}
              open={index === open}
              title={data.title}
              desc={data.desc}
              toggle={() => toggle(index)}
            />
          );
        })}
      </div>
    </div>
  );
};

export default page;
