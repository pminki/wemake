ALTER TABLE "posts" ADD COLUMN "upvotes" bigint DEFAULT 0;--> statement-breakpoint
ALTER TABLE "jobs" ADD COLUMN "company_logo" text NOT NULL;