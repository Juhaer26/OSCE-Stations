import { Play, Pause, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";

interface TimerProps {
  formattedTime: string;
  isRunning: boolean;
  seconds: number;
  onStart: () => void;
  onStop: () => void;
  onReset: () => void;
  colorClass: string;
}

export const Timer = ({
  formattedTime,
  isRunning,
  seconds,
  onStart,
  onStop,
  onReset,
  colorClass,
}: TimerProps) => {
  const isFinished = seconds === 0;

  return (
    <div className={`flex items-center gap-3 p-3 rounded-lg border ${colorClass}`}>
      <div
        className={`text-2xl font-mono font-bold ${
          isFinished ? "text-destructive" : isRunning ? "text-foreground" : "text-muted-foreground"
        }`}
      >
        {formattedTime}
      </div>
      <div className="flex gap-1">
        {!isRunning ? (
          <Button
            variant="outline"
            size="sm"
            onClick={onStart}
            disabled={isFinished}
            className="h-8 w-8 p-0"
          >
            <Play className="w-4 h-4" />
          </Button>
        ) : (
          <Button variant="outline" size="sm" onClick={onStop} className="h-8 w-8 p-0">
            <Pause className="w-4 h-4" />
          </Button>
        )}
        <Button variant="outline" size="sm" onClick={onReset} className="h-8 w-8 p-0">
          <RotateCcw className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );
};

