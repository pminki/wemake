import { Hero } from "~/common/components/hero";
import type { Route } from "./+types/dashboard-page";

export const meta: Route.MetaFunction = () => [
  { title: "Dashboard | wemake" }
];

export default function DashboardPage() {
  return (
    <div className="space-y-20">
      <Hero title="Dashboard" subtitle="Welcome to your dashboard." />
      <div className="grid grid-cols-3 gap-6">
        {/* Dashboard content will be rendered here */}
      </div>
    </div>
  );
} 