CREATE TYPE "public"."project status" AS ENUM('PENDING', 'QUEUE', 'BUILDING', 'SUCESSFUL');--> statement-breakpoint
CREATE TABLE "deployed_project" (
	"user_id" integer,
	"github_url" text NOT NULL,
	"deployment_id" text,
	"status" "project status" DEFAULT 'PENDING'
);
--> statement-breakpoint
CREATE TABLE "users" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"email" text NOT NULL,
	"password" text NOT NULL,
	"is_active" boolean DEFAULT true,
	"time_stampt" timestamp with time zone
);
--> statement-breakpoint
ALTER TABLE "deployed_project" ADD CONSTRAINT "deployed_project_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE no action ON UPDATE no action;