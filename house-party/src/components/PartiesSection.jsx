// import React, { useEffect, useState } from "react";
// import PartyCard from "./PartyCard";

// // Hardcoded fake data for posts
// const fakePosts = [
//   {
//     id: 1,
//     image_url:
//       "https://images.pexels.com/photos/1154189/pexels-photo-1154189.jpeg?auto=compress&cs=tinysrgb&w=600",
//     date: "Sept 13 | Fri",
//     location: "Malad East, Mumbai",
//     title: "Let's Make a Night to Remember",
//     username: "Shashank Richard",
//     price: "₹ 699",
//     caption: "An unforgettable night of fun and music!",
//   },
//   {
//     id: 2,
//     image_url:
//       "https://images.pexels.com/photos/3171837/pexels-photo-3171837.jpeg?auto=compress&cs=tinysrgb&w=600",
//     date: "Sept 14 | Sat",
//     location: "Mira Road, Mumbai",
//     title: "Can't Stop This Thing We Started",
//     username: "Dimple Joshi",
//     price: "₹ 799",
//     caption: "A party you won't want to miss!",
//   },
//   {
//     id: 3,
//     image_url:
//       "https://images.pexels.com/photos/1679824/pexels-photo-1679824.jpeg?auto=compress&cs=tinysrgb&w=600",
//     date: "Sept 15 | Sun",
//     location: "Bandra, Mumbai",
//     title: "Dance the Night Away",
//     username: "Anjali Verma",
//     price: "₹ 999",
//     caption: "A night filled with dance and drinks!",
//   },
//   {
//     id: 4,
//     image_url:
//       "https://images.pexels.com/photos/1679618/pexels-photo-1679618.jpeg?auto=compress&cs=tinysrgb&w=600",
//     date: "Sept 16 | Mon",
//     location: "Andheri West, Mumbai",
//     title: "Rock and Roll Party",
//     username: "Raj Malhotra",
//     price: "₹ 899",
//     caption: "Rock and roll music all night long!",
//   },
// ];

// function PartiesSection() {
//   const [posts, setPosts] = useState([]);

//   // Using useEffect to load the fake data on component mount
//   useEffect(() => {
//     setPosts(fakePosts); // Set the hardcoded data as posts
//   }, []);

//   return (
//     <section className="py-5 flex flex-col justify-center text-white bg-[#400061] px-4 sm:px-6 lg:px-8">
//       <div className="flex flex-col items-center w-full max-w-[1140px] mx-auto">
//         <h2 className="text-xl text-center">Events in Your City</h2>

//         <div className="flex flex-wrap justify-center mt-8 w-full gap-6">
//           {posts.map((event) => (
//             <PartyCard
//               key={event.id}
//               username={event.username}
//               title={event.title}
//               date={event.date}
//               price={event.price}
//               location={event.location}
//               caption={event.caption}
//               imageUrl={event.image_url}
//             />
//           ))}
//         </div>
//       </div>

//       {/* Uncomment this block if you plan to add the 'See all Parties' button */}
//       {/* <div className="flex justify-center items-center mt-6 w-full">
//         <button className="flex gap-4 justify-center items-center px-4 py-2.5 rounded-xl border-2 border-zinc-700">
//           <span>See all Parties</span>
//           <img
//             loading="lazy"
//             src="https://cdn.builder.io/api/v1/image/assets/TEMP/e06cd91e7d212f7581233142481ef147a768d7ae26b1b311986645335252b41c?placeholderIfAbsent=true&apiKey=d44aee9adfe64d97a8f6ddc2200f8808"
//             alt="See all parties icon"
//             className="w-5 h-auto"
//           />
//         </button>
//       </div> */}
//     </section>
//   );
// }

// export default PartiesSection;

import React, { useEffect, useState } from "react";
import PartyCard from "./PartyCard";
import { getPosts } from "../services/api";

//   {
//     image:
//       "https://cdn.builder.io/api/v1/image/assets/TEMP/9d42e037d8e14b22c7791b4c8501a356f964c9c09430803849985dde4cff7575?placeholderIfAbsent=true&apiKey=d44aee9adfe64d97a8f6ddc2200f8808",
//     date: "Sept 13 | Fri",
//     location: "Malad East, Mumbai",
//     title: "Let's Make a Night to Remember",
//     host: "Shashank Richard",
//     price: "₹ 699",
//   },
//   {
//     image:
//       "https://cdn.builder.io/api/v1/image/assets/TEMP/48fddf508dc0fdbfd532e433e1fce31c9bbf45bf786487c8d47a184c5596fee7?placeholderIfAbsent=true&apiKey=d44aee9adfe64d97a8f6ddc2200f8808",
//     date: "Sept 14 | Sat",
//     location: "Mira Road, Mumbai",
//     title: "Can't Stop This Thing We Started",
//     host: "Dimple Joshi",
//     price: "₹ 699",
//   },
// ];

function PartiesSection() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await getPosts();
        setPosts(response.data); // Make sure the response includes title, date, price, location
      } catch (error) {
        console.log("Failed to fetch posts", error);
      }
    };
    fetchPosts();
  }, []);
  return (
    <section className="py-5 flex flex-col justify-center text-white bg-[#400061] px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col items-center w-full max-w-[1140px] mx-auto">
        <h2 className="text-xl text-center">Events in Your City</h2>

        <div className="flex flex-wrap justify-center mt-8 w-full gap-6">
          {posts.map((event) => (
            <PartyCard
              key={event.id}
              username={event.username}
              title={event.title}
              date={event.date}
              price={event.price}
              location={event.location}
              caption={event.caption}
              imageUrl={event.image_url}
            />
          ))}
        </div>
      </div>

      {/* Uncomment this block if you plan to add the 'See all Parties' button */}
      {/* <div className="flex justify-center items-center mt-6 w-full">
    <button className="flex gap-4 justify-center items-center px-4 py-2.5 rounded-xl border-2 border-zinc-700">
      <span>See all Parties</span>
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/e06cd91e7d212f7581233142481ef147a768d7ae26b1b311986645335252b41c?placeholderIfAbsent=true&apiKey=d44aee9adfe64d97a8f6ddc2200f8808"
        alt="See all parties icon"
        className="w-5 h-auto"
      />
    </button>
  </div> */}
    </section>
  );
}

export default PartiesSection;
