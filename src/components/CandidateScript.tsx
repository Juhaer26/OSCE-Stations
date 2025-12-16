import { OSCEScenario } from "@/data/osceScenarios";
import { Stethoscope } from "lucide-react";

interface CandidateScriptProps {
  scenario: OSCEScenario;
}

export const CandidateScript = ({ scenario }: CandidateScriptProps) => {
  return (
    <div className="space-y-6 animate-fade-in">
      {/* Header */}
      <div>
        <h2 className="font-serif text-2xl font-bold text-foreground mb-1">
          Candidate instructions <span className="text-muted-foreground font-normal">| {scenario.title}</span>
        </h2>
      </div>

      {/* Instructions Card */}
      <div className="bg-card rounded-lg p-6 shadow-soft border border-border">
        <ul className="space-y-3">
          {scenario.candidateInstructions.map((instruction, idx) => (
            <li
              key={idx}
              className="flex items-start gap-3 text-foreground"
            >
              <span className="text-muted-foreground mt-1">•</span>
              <span dangerouslySetInnerHTML={{ __html: instruction }} />
            </li>
          ))}
        </ul>
      </div>

      {/* Notes Section */}
      <div>
        <h3 className="font-serif text-xl font-semibold text-foreground mb-3">Your notes</h3>
        <div className="bg-secondary/30 rounded-lg p-4 border border-border">
          <p className="text-sm text-muted-foreground italic">
            You can write notes here, which will only be visible to you whenever you revisit this station.
          </p>
        </div>
      </div>
    </div>
  );
};
