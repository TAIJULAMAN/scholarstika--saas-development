import { AboutHero } from "@/components/about/about-hero"
import { MissionSection } from "@/components/about/mission-section"
import { VisionSection } from "@/components/about/vision-section"
import { TeamSection } from "@/components/about/team-section"
import { StatsSection } from "@/components/about/stats-section"

export default function AboutPage() {
    return (
        <div className="min-h-screen">
            <AboutHero />
            <MissionSection />
            <VisionSection />
            <TeamSection />
            <StatsSection />
        </div>
    )
}
