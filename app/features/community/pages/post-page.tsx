import { Form } from "react-router";
import { Button } from "~/common/components/ui/button";

export const meta = () => {
  return [
    { title: "Post | wemake" },
  ];
}

export default function PostPage() {
  return (
    <div className="container py-8">
      <div className="max-w-3xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-semibold mb-4">Post Title</h1>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <span>Author Name</span>
            <span>•</span>
            <span>Posted 2 days ago</span>
          </div>
        </div>
        <div className="prose max-w-none">
          {/* Post content will be added here */}
        </div>
      </div>
    </div>
  );
} 