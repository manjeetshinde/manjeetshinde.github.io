import ExploreMore from "@/components/ExploreMore";
import Introduction from "@/components/Introduction";
import Profile from "@/components/Profile";
import SocialLinks from "@/components/SocialLinks";

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
