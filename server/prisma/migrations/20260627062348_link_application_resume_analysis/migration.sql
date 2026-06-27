-- AlterTable
ALTER TABLE "Application" ADD COLUMN     "resumeAnalysisId" INTEGER,
ALTER COLUMN "status" SET DEFAULT 'Applied';

-- AddForeignKey
ALTER TABLE "Application" ADD CONSTRAINT "Application_resumeAnalysisId_fkey" FOREIGN KEY ("resumeAnalysisId") REFERENCES "ResumeAnalysis"("id") ON DELETE SET NULL ON UPDATE CASCADE;
