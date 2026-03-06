CREATE TYPE "public"."project status" AS ENUM('PENDING', 'QUEUE', 'BUILDING', 'SUCESSFUL');--> statement-breakpoint
CREATE TABLE "deployed project" (
	"user id" serial NOT NULL,
	"id" serial PRIMARY KEY NOT NULL,
	"githhub url" text NOT NULL,
	"status" "project status" DEFAULT 'PENDING'
);
--> statement-breakpoint
ALTER TABLE "users" ADD COLUMN "is_active" boolean DEFAULT true;--> statement-breakpoint
ALTER TABLE "users" ADD COLUMN "time_stampt" timestamp with time zone;--> statement-breakpoint
ALTER TABLE "deployed project" ADD CONSTRAINT "deployed project_user id_users_id_fk" FOREIGN KEY ("user id") REFERENCES "public"."users"("id") ON DELETE no action ON UPDATE no action;