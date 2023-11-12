import PropTypes from "prop-types";
import {
  FaMapMarkerAlt,
  FaRegBuilding,
  FaLink,
  FaTwitter,
} from "react-icons/fa";

const getThreeWordsMonth = (month) => {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  return months[month];
};

const formattedDate = (isoData) => {
  const date = new Date(isoData);
  const day = date.getDate();
  const month = getThreeWordsMonth(date.getMonth());
  const year = date.getFullYear();

  return `${day} ${month} ${year}`;
};

const checkBio = (bio) => {
  if (bio) {
    return <p className="text-white whitespace-normal text-sm pb-8 lg:pb-12">{bio}</p>;
  } else {
    return <p className="cursor-not-allowed  pb-12">This profile has no bio</p>;
  }
};

const checkX = (x) => {
  if (x) {
    return <a href={`https://twitter.com/${x}`}>@{x}</a>;
  } else {
    return <p className="cursor-not-allowed">Not available</p>;
  }
};

function UserItem({
  user: {
    avatar_url,
    name,
    location,
    followers,
    created_at,
    bio,
    blog,
    login,
    following,
    html_url,
    public_repos,
    twitter_username,
    company,
  },
}) {
  const formalDate = formattedDate(created_at);
  const bioCheck = checkBio(bio);
  const xCheck = checkX(twitter_username);

  return (
    <div className="font-spaceMono  lg:mb-0 sm:flex  md:items-start md:flex-row sm:flex-col lg:flex lg:flex-row shadow-2xl p-6 md:p-12 lg:p-12 gap-4 bg-darkBg rounded-2xl w-full">
      <div className="md:w-44 md:h-32 lg:w-44 lg:h-32 w-full flex items-center justify-around">
        <img src={avatar_url} className="rounded-full w-32 h-32" alt="" />
      </div>
      <div className="flex flex-col w-full ">
        <div className="flex text-white w-full pb-8">
          <div className="flex justify-between w-full ">
            <div className="flex flex-col">
              <h2 className="text-3xl font-semibold">{name}</h2>
              <a href={html_url} className="text-[#0077FF]">
                @{login}
              </a>
            </div>
            <p className="text-sm">Joined {formalDate}</p>
          </div>
        </div>
        {bioCheck}
        <div className=" flex bg-[#151c2e] pt-4 pb-4 pl-12 pr-24 justify-between rounded-lg text-white">
          <div className="flex flex-col">
            <p className="pb-4 text-xs"> Repos</p>
            <p className="text-2xl font-extrabold">{public_repos}</p>
          </div>
          <div className="flex flex-col">
            <p className="pb-4 text-xs"> Followers</p>
            <p className="text-2xl font-extrabold">{followers}</p>
          </div>
          <div className="flex flex-col">
            <p className="pb-4 text-xs"> Followings</p>
            <p className="text-2xl font-extrabold">{following}</p>
          </div>
        </div>
        <div className=" p-4 pr-16 pl-0 text-base justify-between items-center text-white sm:flex-col sm:items-start lg:flex lg:flex-row lg:gap-y-0">
          <div className="flex flex-col  gap-y-2">
            <div className="flex gap-2 items-center">
              <FaMapMarkerAlt />
              {location}
            </div>
            <div className="flex gap-2 items-center">
              <FaLink />
              <a href={`https://${blog}`}>{blog}</a>
            </div>
          </div>
          <div className="flex flex-col gap-y-2 mt-2 lg:mt-0">
            <div className="flex gap-2 items-center">
              <FaTwitter />
              {xCheck}
            </div>
            <div className="flex gap-2 items-center">
              <FaRegBuilding />
              {company}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

UserItem.propTypes = {
  user: PropTypes.object.isRequired,
};

export default UserItem;

// const getThreeWordsMonth = (month) => {
//     const months = [
//         'Jan',
//         'Feb',
//         'Mar',
//         "Apr",
//         "May",
//         "Jun",
//         "Jul",
//         "Aug",
//         "Sep",
//         "Oct",
//         "Nov",
//         "Dec"
//     ]

//     return months[month]
// }

// const formattedDate = (isoData) => {
//     const date = new Datae(isoData)
//     const day = date.getDate()
//     const month = getThreeWordsMonth(date.getMonth())
//     const year = data.getYear()

//     return `${day} ${month} ${year}`
// }
