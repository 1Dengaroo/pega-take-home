const Profile = () => {
  return (
    <div className="flex items-center">
      <div className="w-sidebar flex justify-center items-center flex-shrink-0">
        <img
          src={"avatar-fallback.svg"}
          alt={"alt"}
          className={`h-sidebar-avatar-dimensions w-sidebar-avatar-dimensions rounded-full object-cover bg-muted p-1`}
        />
      </div>

      <span className="whitespace-nowrap text-ellipsis font-semibold">
        Username
      </span>
    </div>
  );
};

export default Profile;
