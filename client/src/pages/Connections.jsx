import React from "react";
import {
   Users,
   UserPlus,
   UserCheck,
   UserRoundPen,
   MesssageSquare,
} from "lucide-react";

import { useNavigate } from "react-router-dom";
import {
   dummyConnectionsData as connections,
   dummyFollowersData as followers,
   dummyFollowingData as following,
   dummyPendingConnectionsData as pendingConnections,
} from "../assets/assets";

const Connections = () => {
   const navigate = useNavigate();

   const dataArray = [
      { label: "Followers", value: followers, icons: Users },
      { label: "Following ", value: following, icons: UserCheck },
      { label: "Pending", value: pendingConnections, icons: UserRoundPen },
      { label: "Connections", value: connections, icons: UserPlus },
   ];

   return (
      <div className="min-h-screen bg-slate-50">
         <div className="max-w-6xl mx-auto p-6">
            {/* title */}
            <div className="mb-8">
               <h1 className="text-3xl font-bold text-slate-900 mb-2">
                  Messages
               </h1>
               <p className="text-slate-600">Talk to your friends and family</p>
            </div>
         </div>
      </div>
   );
};

export default Connections;
