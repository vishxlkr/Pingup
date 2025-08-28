import { BadgeCheck, Heart } from "lucide-react";
import moment from "moment";
import React from "react";
import { dummyUserData } from "../assets/assets";

const PostCard = ({ post }) => {

    const [like , setLikes] = useState(post.like_count);
    const currentUser = dummyUserData;

   const postWithHashtags = post.content.replace(
      /(#\w+)/g,
      '<span class ="text-indigo-600">$1</span>'
   );

   return (
      <div className="bg-white rounded-xl shadow p-4 space-y-4 w-full max-w-2xl">
         {/* user info */}
         <div className="inline-flex items-center gap-3 cursor-pointer">
            <img
               src={post.user.profile_picture}
               alt=""
               className="w-10 h-10 rounded-full shadow"
            />
            <div>
               <div className="flex items-center space-x-1">
                  <span>{post.user.full_name}</span>
                  <BadgeCheck className="w-4 h-4 text-blue-500" />
               </div>
               <div className="text-gray-500 text-sm">
                  @{post.user.username} • {moment(post.createdAt).fromNow}{" "}
               </div>
            </div>
         </div>

         {/* content */}
         {post.content && (
            <div
               className="text-gray-800 text-sm whitespace-pre-line"
               dangerouslySetInnerHTML={{ __html: postWithHashtags }}
            />
         )}
         {/* images */}
         <div className="grid grid-cols-2 gap-2">
            {post.image_urls.map((img, index) => (
               <img
                  src={img}
                  key={index}
                  className={`w-full h-48 object-cover rounded-lg ${
                     post.image_urls.length === 1 && "col-span-2 h-auto"
                  }`}
               />
            ))}
         </div>

         {/* actions */}
         <div className="flex items-center gap-4 text-gray-600 text-sm pt-2 border-t border-gray-300">
            <div>
               <Heart className={`w-4 h-4 cursor-pointer ${}`} />
            </div>
         </div>
      </div>
   );
};

export default PostCard;
