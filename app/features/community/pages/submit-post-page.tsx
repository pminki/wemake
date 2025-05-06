import { Form } from "react-router";
import { Button } from "~/common/components/ui/button";
import { Input } from "~/common/components/ui/input";
import { Textarea } from "~/common/components/ui/textarea";

export const meta = () => {
  return [
    { title: "Submit Post | wemake" },
  ];
}

export default function SubmitPostPage() {
  return (
    <div className="container py-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-2xl font-semibold mb-8">Submit Post</h1>
        <Form className="space-y-6">
          <div className="space-y-2">
            <label htmlFor="title" className="text-sm font-medium">
              Title
            </label>
            <Input
              id="title"
              name="title"
              placeholder="Enter post title"
              required
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="content" className="text-sm font-medium">
              Content
            </label>
            <Textarea
              id="content"
              name="content"
              placeholder="Write your post content"
              required
              className="min-h-[200px]"
            />
          </div>
          <Button type="submit" className="w-full">
            Submit Post
          </Button>
        </Form>
      </div>
    </div>
  );
} 