import React from "react";

const UserReviewCard = ({ user }) => {
  return (
    <div
      className="bg-gradient-to-b from-[#f9f9f9] via-[#efe9e9] to-[#a0a8b3] md:h-auto lg:h-[450px] h-auto w-auto p-4 sm:p-[50px] sm:pb-[40px] sm:pt-[40px]  flex flex-col rounded-[20px] m-4 transform hover:scale-105 transition-transform duration-300 ease-in-out"
      style={{ boxShadow: "0px 8px 24px rgba(0, 0, 0, 0.05)" }}
    >
      <div className="h-[10%] flex justify-center text-center mb-5">
        <div className="sm:text-[24px] text-[18px] font-bold ">{user.lineofApp}</div>
      </div>
      <div className="h-[20%] flex flex-row mb-1">
        {/* User's pic */}
        <div className="w-20% mr-2">
          <div className="w-[80px] h-[80px] rounded-full flex justify-center">
            <img
              src={user.pic}
              alt="User Pic"
              className="h-full rounded-full  w-full object-fit"
            />
          </div>
        </div>
        {/* User's name and profession */}
        <div className="flex flex-col justify-center ml-3">
          <div className="text-[18px] font-semibold">{user.name}</div>
          <div className="text-[14px]">{user.profession}</div>
        </div>
      </div>
      {/* User's review */}
      <div
        className="h-[70%] pt-5 text-[#464646] text-md"
        style={{ fontWeight: "400" }}
      >
        {user.review}
      </div>
    </div>
  );
};

export default UserReviewCard;
