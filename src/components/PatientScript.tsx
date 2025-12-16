import { OSCEScenario } from "@/data/osceScenarios";
import { User, MessageCircle, Heart, Pill, Users, Home, Target } from "lucide-react";

interface PatientScriptProps {
  scenario: OSCEScenario;
}

const SectionHeader = ({ icon: Icon, title, color }: { icon: any; title: string; color: string }) => (
  <div className={`flex items-center gap-2 mb-3 pb-2 border-b border-border`}>
    <div className={`p-1.5 rounded-md ${color}`}>
      <Icon className="w-4 h-4" />
    </div>
    <h3 className="font-serif font-semibold text-foreground">{title}</h3>
  </div>
);

const QAItem = ({ question, answer }: { question: string; answer: string }) => (
  <div className="mb-3 last:mb-0">
    <p className="text-sm font-medium text-muted-foreground mb-1">{question}</p>
    <p className="text-foreground bg-secondary/50 rounded-md px-3 py-2 text-sm leading-relaxed">"{answer}"</p>
  </div>
);

export const PatientScript = ({ scenario }: PatientScriptProps) => {
  return (
    <div className="space-y-6 animate-fade-in">
      {/* Patient Details Card */}
      <div className="bg-patient-light border border-patient/20 rounded-lg p-5">
        <div className="flex items-start gap-4">
          <div className="p-3 bg-patient/10 rounded-full">
            <User className="w-6 h-6 text-patient" />
          </div>
          <div>
            <h2 className="font-serif text-xl font-semibold text-foreground mb-1">{scenario.patientName}</h2>
            <p className="text-sm text-muted-foreground">DOB: {scenario.patientDOB}</p>
            <p className="text-sm text-patient font-medium mt-2">"{scenario.reasonForVisit}"</p>
          </div>
        </div>
      </div>

      {/* Opening */}
      <div className="bg-card rounded-lg p-5 shadow-soft border border-border">
        <SectionHeader icon={MessageCircle} title="Opening Statements" color="bg-primary/10 text-primary" />
        <div className="space-y-2">
          {scenario.patientScript.opening.map((line, idx) => (
            <p key={idx} className="text-foreground bg-secondary/50 rounded-md px-3 py-2 text-sm">"{line}"</p>
          ))}
        </div>
      </div>

      {/* ICE */}
      <div className="bg-card rounded-lg p-5 shadow-soft border border-border">
        <SectionHeader icon={Target} title="Ideas, Concerns & Expectations" color="bg-info/10 text-info" />
        {scenario.patientScript.ideasConcernsExpectations.map((item, idx) => (
          <QAItem key={idx} question={item.question} answer={item.answer} />
        ))}
      </div>

      {/* Smoking History */}
      <div className="bg-card rounded-lg p-5 shadow-soft border border-border">
        <SectionHeader icon={MessageCircle} title="Smoking History" color="bg-warning/10 text-warning" />
        <div className="grid gap-3 md:grid-cols-2">
          {scenario.patientScript.smokingHistory.map((item, idx) => (
            <QAItem key={idx} question={item.question} answer={item.answer} />
          ))}
        </div>
      </div>

      {/* Past Medical History */}
      <div className="bg-card rounded-lg p-5 shadow-soft border border-border">
        <SectionHeader icon={Heart} title="Past Medical History" color="bg-destructive/10 text-destructive" />
        <div className="space-y-2">
          {scenario.patientScript.pastMedicalHistory.map((line, idx) => (
            <p key={idx} className="text-foreground bg-secondary/50 rounded-md px-3 py-2 text-sm">"{line}"</p>
          ))}
        </div>
      </div>

      {/* Medications */}
      <div className="bg-card rounded-lg p-5 shadow-soft border border-border">
        <SectionHeader icon={Pill} title="Medications" color="bg-success/10 text-success" />
        <div className="space-y-2">
          {scenario.patientScript.medications.map((line, idx) => (
            <p key={idx} className="text-foreground bg-secondary/50 rounded-md px-3 py-2 text-sm">"{line}"</p>
          ))}
        </div>
      </div>

      {/* Family History */}
      <div className="bg-card rounded-lg p-5 shadow-soft border border-border">
        <SectionHeader icon={Users} title="Family History" color="bg-patient/10 text-patient" />
        <div className="space-y-2">
          {scenario.patientScript.familyHistory.map((line, idx) => (
            <p key={idx} className="text-foreground bg-secondary/50 rounded-md px-3 py-2 text-sm">"{line}"</p>
          ))}
        </div>
      </div>

      {/* Social History */}
      <div className="bg-card rounded-lg p-5 shadow-soft border border-border">
        <SectionHeader icon={Home} title="Social History" color="bg-candidate/10 text-candidate" />
        <div className="grid gap-3 md:grid-cols-2">
          {scenario.patientScript.socialHistory.map((item, idx) => (
            <div key={idx} className="bg-secondary/50 rounded-md px-3 py-2">
              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-1">{item.category}</p>
              <p className="text-sm text-foreground">"{item.answer}"</p>
            </div>
          ))}
        </div>
      </div>

      {/* Motivation */}
      <div className="bg-card rounded-lg p-5 shadow-soft border border-border">
        <SectionHeader icon={Target} title="Motivation" color="bg-primary/10 text-primary" />
        {scenario.patientScript.motivation.map((item, idx) => (
          <QAItem key={idx} question={item.question} answer={item.answer} />
        ))}
      </div>

      {/* Ending */}
      <div className="bg-card rounded-lg p-5 shadow-soft border border-border">
        <SectionHeader icon={MessageCircle} title="Closing Statements" color="bg-success/10 text-success" />
        <div className="space-y-2">
          {scenario.patientScript.ending.map((line, idx) => (
            <p key={idx} className="text-foreground bg-secondary/50 rounded-md px-3 py-2 text-sm">"{line}"</p>
          ))}
        </div>
      </div>
    </div>
  );
};
