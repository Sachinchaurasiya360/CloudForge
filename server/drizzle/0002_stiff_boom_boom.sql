ALTER TABLE "deployed project" ALTER COLUMN "user id" SET DATA TYPE integer;--> statement-breakpoint
ALTER TABLE "deployed project" ALTER COLUMN "user id" DROP NOT NULL;--> statement-breakpoint
ALTER TABLE "deployed project" ADD COLUMN "deployment id" text NOT NULL;