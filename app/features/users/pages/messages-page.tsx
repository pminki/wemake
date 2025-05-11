import { Hero } from "~/common/components/hero";
import type { Route } from "./+types/messages-page";

export const meta: Route.MetaFunction = () => [
  { title: "Messages | wemake" }
];

export default function MessagesPage() {
  return (
    <div className="space-y-20">
      <Hero title="Messages" subtitle="Your conversations." />
      <div className="grid grid-cols-1 gap-4">
        {/* Messages list will be rendered here */}
      </div>
    </div>
  );
} 