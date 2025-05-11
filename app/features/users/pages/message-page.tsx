import { Hero } from "~/common/components/hero";
import type { Route } from "./+types/message-page";

export const meta: Route.MetaFunction = ({ params }) => [
  { title: `Message ${params.messageId} | wemake` }
];

export default function MessagePage() {
  return (
    <div className="space-y-20">
      <Hero title="Message" subtitle="View your conversation." />
      <div className="max-w-3xl mx-auto space-y-6">
        {/* Message content will be rendered here */}
      </div>
    </div>
  );
} 