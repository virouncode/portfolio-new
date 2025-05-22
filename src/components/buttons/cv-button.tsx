"use client";

import { Button } from "@/components/ui/button";

const CVButton = () => {
  return (
    <Button
      variant="outline"
      className="bg-(--cream) min-w-[180px] px-6 py-5 rounded-full shadow-xl shadow-black/10  hover:bg-(--cream)/90 active:shadow-none active:scale-[98%] transition-all duration-300"
    >
      CV
    </Button>
  );
};

export default CVButton;
