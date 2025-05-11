import { Hero } from "~/common/components/hero";
import type { Route } from "./+types/profile-page";

export const meta: Route.MetaFunction = ({ params }) => [
  { title: `${params.username} | wemake` }
];

export default function ProfilePage() {
  return (
    <div className="space-y-20">
      <Hero title="User Profile" subtitle="View user's profile and activities." />
      <div className="max-w-4xl mx-auto space-y-10">
        {/* Profile content will be rendered here */}
      </div>
    </div>
  );
}