import { Hero } from "~/common/components/hero";
import type { Route } from "./+types/notifications-page";

export const meta: Route.MetaFunction = () => [
  { title: "Notifications | wemake" }
];

export default function NotificationsPage() {
  return (
    <div className="space-y-20">
      <Hero title="Notifications" subtitle="View your notifications." />
      <div className="max-w-2xl mx-auto space-y-4">
        {/* Notifications list will be rendered here */}
      </div>
    </div>
  );
} 