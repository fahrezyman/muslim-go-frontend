// TeamMemberCard.jsx

import PropTypes from "prop-types";

const TeamMemberCard = ({ name, role, photoUrl }) => {
  return (
    <div className="border rounded p-4 mb-4">
      <img
        src={photoUrl}
        alt={`${name}'s photo`}
        className="rounded-full mb-2"
      />
      <h3 className="text-lg font-semibold">{name}</h3>
      <p className="text-gray-500">{role}</p>
    </div>
  );
};

TeamMemberCard.propTypes = {
  name: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  photoUrl: PropTypes.string.isRequired,
};

export default TeamMemberCard;
