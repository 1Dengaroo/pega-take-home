const Profile = () => {
  return (
    <div className="flex items-center">
      <div className="w-sidebar flex flex-shrink-0 items-center justify-center">
        <img
          src={'/avatar-fallback.svg'}
          alt={'alt'}
          className={`h-sidebar-avatar-dimensions w-sidebar-avatar-dimensions bg-muted rounded-full object-cover p-1`}
        />
      </div>

      <span className="font-semibold text-ellipsis whitespace-nowrap">Username</span>
    </div>
  );
};

export default Profile;
