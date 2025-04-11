import ExploreMore from "./ExploreMore";
import Introduction from "./Introduction";
import Profile from "./Profile";
import SocialLinks from "./SocialLinks";

// TODO: Change mouse arrow to something fancy
// TODO: Add Skillset icons, JS, React, Node, etc

export default function AuthorPage() {
  return (
    <main className="grid grid-cols-1 gap-y-4 p-[4%] lg:h-screen lg:grid-cols-3 lg:gap-x-4">
      <div className="flex flex-col gap-4">
        <Introduction />
      </div>
      <div className="col-span-2 flex flex-col gap-4">
        <Profile />
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {/* <Latest /> */}
          <div className="flex flex-col gap-4">
            <ExploreMore />
          </div>
          <SocialLinks />
        </div>
      </div>
    </main>
  );
}
