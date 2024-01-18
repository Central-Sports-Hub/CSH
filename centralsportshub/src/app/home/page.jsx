//landing page; everything for non authenticated viewers goes on this page everything else that calls needs to be behind authentication

import Home from "@/app/components/Home";

const page = () => {
  return (
    <>
      <Home />
    </>
  );
};

export default page;
