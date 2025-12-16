import { useState } from "react";
import { osceScenarios } from "@/data/osceScenarios";
import { PatientScript } from "@/components/PatientScript";
import { CandidateScript } from "@/components/CandidateScript";
import { MarkingScheme } from "@/components/MarkingScheme";
import { StationSelector } from "@/components/StationSelector";
import { Timer } from "@/components/Timer";
import { useTimer } from "@/hooks/useTimer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { User, Stethoscope, ClipboardCheck, BookOpen } from "lucide-react";

const Index = () => {
  const [selectedScenarioId, setSelectedScenarioId] = useState(1);
  const [showTimerPopup, setShowTimerPopup] = useState(false);
  const [stationEnded, setStationEnded] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [finalScore, setFinalScore] = useState({ checked: 0, total: 0 });

  const handleExaminerTimeEnd = () => {
    setShowTimerPopup(true);
  };

  // 2 minute timer for candidate script
  const candidateTimer = useTimer({ initialSeconds: 2 * 60 });
  // 8 minute timer for marking scheme
  const examinerTimer = useTimer({ initialSeconds: 8 * 60, onTimeEnd: handleExaminerTimeEnd });
  const selectedScenario = osceScenarios.find((s) => s.id === selectedScenarioId) || osceScenarios[0];

  const handleContinueSession = () => {
    setShowTimerPopup(false);
    examinerTimer.reset();
  };

  const handleEndStation = () => {
    setShowTimerPopup(false);
    setStationEnded(true);
  };

  const handleSubmit = (checked: number, total: number) => {
    setFinalScore({ checked, total });
    setSubmitted(true);
  };

  const handleResetStation = () => {
    setStationEnded(false);
    setSubmitted(false);
    setFinalScore({ checked: 0, total: 0 });
    examinerTimer.reset();
    candidateTimer.reset();
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Timer Popup */}
      {showTimerPopup && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-[100]">
          <div className="bg-card rounded-lg p-6 shadow-xl border border-border max-w-md mx-4">
            <h3 className="font-serif text-xl font-bold text-foreground mb-2">Time's Up!</h3>
            <p className="text-muted-foreground mb-6">
              The 8 minute station time has ended. Would you like to end the station or continue your session?
            </p>
            <div className="flex gap-3">
              <Button
                variant="outline"
                onClick={handleContinueSession}
                className="flex-1"
              >
                Continue Session
              </Button>
              <Button
                onClick={handleEndStation}
                className="flex-1 bg-examiner hover:bg-examiner/90"
              >
                End Station
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Submitted Result Popup */}
      {submitted && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-[100]">
          <div className="bg-card rounded-lg p-6 shadow-xl border border-border max-w-md mx-4 text-center">
            <div className="w-16 h-16 rounded-full bg-examiner/20 flex items-center justify-center mx-auto mb-4">
              <ClipboardCheck className="w-8 h-8 text-examiner" />
            </div>
            <h3 className="font-serif text-xl font-bold text-foreground mb-2">Station Complete!</h3>
            <p className="text-3xl font-bold text-examiner mb-2">
              {finalScore.checked} / {finalScore.total}
            </p>
            <p className="text-muted-foreground mb-6">
              ({Math.round((finalScore.checked / finalScore.total) * 100)}%)
            </p>
            <Button onClick={handleResetStation} className="w-full">
              Start New Station
            </Button>
          </div>
        </div>
      )}

      {/* Header */}
      <header className="sticky top-0 z-50 bg-card/95 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-primary/10 rounded-lg">
                <BookOpen className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h1 className="font-serif text-xl font-bold text-foreground">OSCE Practice</h1>
                <p className="text-xs text-muted-foreground">Smoking Cessation Stations</p>
              </div>
            </div>
            <StationSelector selectedId={selectedScenarioId} onSelect={setSelectedScenarioId} />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-6">
        {/* Station Info */}
        <div className="mb-6">
          <div className="flex items-center gap-3 mb-2">
            <span className="px-3 py-1 bg-primary text-primary-foreground text-sm font-semibold rounded-full">
              Station {selectedScenario.stationNumber}
            </span>
            {stationEnded && (
              <span className="px-3 py-1 bg-destructive text-destructive-foreground text-sm font-semibold rounded-full">
                Station Ended
              </span>
            )}
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-foreground mb-2">
            {selectedScenario.title}
          </h2>
          <p className="text-muted-foreground">
            Patient: <span className="font-medium text-foreground">{selectedScenario.patientName}</span>
          </p>
        </div>

        {/* Tabs */}
        <Tabs defaultValue="patient" className="w-full">
          <TabsList className="w-full justify-start bg-secondary/50 p-1 rounded-lg mb-6 overflow-x-auto flex-nowrap">
            <TabsTrigger
              value="patient"
              className="flex items-center gap-2 data-[state=active]:bg-card data-[state=active]:text-patient data-[state=active]:shadow-soft rounded-md px-4 py-2.5 transition-all"
            >
              <User className="w-4 h-4" />
              <span className="hidden sm:inline">Patient Script</span>
              <span className="sm:hidden">Patient</span>
            </TabsTrigger>
            <TabsTrigger
              value="candidate"
              className="flex items-center gap-2 data-[state=active]:bg-card data-[state=active]:text-candidate data-[state=active]:shadow-soft rounded-md px-4 py-2.5 transition-all"
            >
              <Stethoscope className="w-4 h-4" />
              <span className="hidden sm:inline">Candidate Script</span>
              <span className="sm:hidden">Candidate</span>
            </TabsTrigger>
            <TabsTrigger
              value="marking"
              className="flex items-center gap-2 data-[state=active]:bg-card data-[state=active]:text-examiner data-[state=active]:shadow-soft rounded-md px-4 py-2.5 transition-all"
            >
              <ClipboardCheck className="w-4 h-4" />
              <span className="hidden sm:inline">Marking Scheme</span>
              <span className="sm:hidden">Marking</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="patient" className="mt-0">
            <PatientScript scenario={selectedScenario} />
          </TabsContent>

          <TabsContent value="candidate" className="mt-0">
            <div className="mb-4">
              <Timer
                formattedTime={candidateTimer.formattedTime}
                isRunning={candidateTimer.isRunning}
                seconds={candidateTimer.seconds}
                onStart={candidateTimer.start}
                onStop={candidateTimer.stop}
                onReset={candidateTimer.reset}
                colorClass="bg-candidate-light border-candidate/20"
              />
            </div>
            <CandidateScript scenario={selectedScenario} />
          </TabsContent>

          <TabsContent value="marking" className="mt-0">
            <div className="mb-4">
              <Timer
                formattedTime={examinerTimer.formattedTime}
                isRunning={examinerTimer.isRunning}
                seconds={examinerTimer.seconds}
                onStart={examinerTimer.start}
                onStop={examinerTimer.stop}
                onReset={examinerTimer.reset}
                colorClass="bg-examiner-light border-examiner/20"
              />
            </div>
            <MarkingScheme scenario={selectedScenario} onSubmit={handleSubmit} />
          </TabsContent>
        </Tabs>
      </main>

      {/* Footer */}
      <footer className="border-t border-border mt-12">
        <div className="container mx-auto px-4 py-6 text-center">
          <p className="text-sm text-muted-foreground">
            OSCE Practice Tool for PA Students • Smoking Cessation
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
