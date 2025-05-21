import { Form, Link, useSearchParams, type MetaFunction } from "react-router";
import { Button } from "~/common/components/ui/button";
import { PERIOD_OPTIONS, SORT_OPTIONS } from "../constants";
import { Hero } from "~/common/components/hero";
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from "~/common/components/ui/dropdown-menu";
import { DropdownMenuCheckboxItem } from "@radix-ui/react-dropdown-menu";
import { ChevronDownIcon } from "lucide-react";
import { PostCard } from "../components/post-card";
import { Input } from "~/common/components/ui/input";
import { getPosts, getTopics } from "../queries";
import type { Route } from "./+types/community-page";

export const meta: MetaFunction = () => {
  return [
    { title: "Community | wemake" },
  ];
}

export const loader = async () => {
  const topics = await getTopics();
  const posts = await getPosts();
  
  return { topics, posts };
};
export default function CommunityPage({ loaderData }: Route.ComponentProps) {
  const [searchParams, setSearchParams] = useSearchParams();
  const sorting = searchParams.get("sorting") ?? SORT_OPTIONS[0];
  const period = searchParams.get("period") ?? PERIOD_OPTIONS[0];

  return (
    <div className="space-y-20">
      <Hero 
        title="Community" 
        subtitle="Ask questions, share ideas, and connect with other developers"
      />
      <div className="grid grid-cols-6 items-start gap-40">
        <div className="col-span-4 space-y-10">
          <div className="flex justify-between">
            <div className="space-y=5 w-full">
              <div className="flex items-center gap-5">
                <DropdownMenu>
                  <DropdownMenuTrigger className="flex items-center gap-1">
                    <span className="text-sm capitalize">{sorting}</span>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    {SORT_OPTIONS.map((option) => (
                      <DropdownMenuCheckboxItem
                        key={option}
                        className="capitalize cursor-pointer"
                        onCheckedChange={(checked: boolean) => {
                          if (checked) {
                            searchParams.set("sorting", option);
                            setSearchParams(searchParams);
                          }
                        }}                          
                      >
                        {option}
                      </DropdownMenuCheckboxItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
                {sorting === "popular" && (
                  <DropdownMenu>
                    <DropdownMenuTrigger className="flex items-center gap-1">
                      <span className="text-sm capitalize">{period}</span>
                      <ChevronDownIcon className="size-5" />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      {PERIOD_OPTIONS.map((option) => (
                        <DropdownMenuCheckboxItem
                          key={option}
                          className="capitalize cursor-pointer"
                          onCheckedChange={(checked: boolean) => {
                            if (checked) {
                              searchParams.set("period", option);
                              setSearchParams(searchParams);
                            }
                          }}
                        >
                          {option}
                        </DropdownMenuCheckboxItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                )}
              </div>
              <Form className="w-2/3">
                <Input 
                  type="text" 
                  name="search"
                  placeholder="Search for discussions" 
                />
              </Form>
            </div>
            <Button asChild>
              <Link to={`/community/submit`}>Create Discussion</Link>
            </Button>
          </div>
          <div className="space-y-5">
            {loaderData.posts.map((post) => (
              <PostCard
                key={post.post_id}
                id={post.post_id!}
                title={post.title!}
                author={post.author!}
                authorAvatarUrl={post.author_avatar}
                category={post.topic_name!}
                postedAt={post.created_at!}
                votesCount={post.upvotes!}               
              />
            ))}
          </div>
        </div>
        <aside className="col-span-2 space-y-5">
          <span className="text-sm font-bold text-muted-foreground uppercase">
            Topics
          </span>
          <div className="flex flex-col gap-2 items-start">
            {loaderData.topics.map((topic) => (
              <Button
                asChild
                variant={"link"}
                key={topic.slug}
                className="pl-0"
              >
                <Link to={`/community?topic=${topic.slug}`}>{topic.name}</Link>
              </Button>
            ))}
          </div>
        </aside>
      </div>        
    </div>
  );
} 