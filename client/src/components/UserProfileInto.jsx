import React from "react";

const UserProfileInto = ({ user, posts, profileId, setShowEdit }) => {
   return (
      <div className="relative py4 md:px-8 bg-white">
         <div className="flex flex-col md:flex items-start gap-6">
            <div className="w-32 h-32 border-4 border-white absolute -top-16 rounded-full">
               <img
                  src={user.profile_picture}
                  alt=""
                  className="absoltue rounded-full z-2"
               />
            </div>
            <div className="w-full pt-16 md:pt-0 md:pl-36">
               <div className="flex flex-col md:flex-row items-start justify-between">
                  <div>
                     <div className="flex items-center gap-3">
                        <h1 className="text-2xl font-bold text-gray-900">
                           {user.full_name}
                        </h1>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default UserProfileInto;
