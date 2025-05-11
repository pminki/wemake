import { Hero } from "~/common/components/hero";
import type { Route } from "./+types/dashboard-ideas-page";

export const meta: Route.MetaFunction = () => [
  { title: "My Ideas | wemake" }
];

export default function DashboardIdeasPage() {
  return (
    <div className="space-y-20">
      <Hero title="My Ideas" subtitle="Manage your ideas and projects." />
      <div className="grid grid-cols-3 gap-6">
        {/* Ideas list will be rendered here */}
      </div>
    </div>
  );
}