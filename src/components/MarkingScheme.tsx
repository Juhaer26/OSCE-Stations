import { useState, useEffect } from "react";
import { OSCEScenario, MarkingSection } from "@/data/osceScenarios";
import { ClipboardCheck, RotateCcw, Check, Send } from "lucide-react";
import { Button } from "@/components/ui/button";

interface MarkingSchemeProps {
  scenario: OSCEScenario;
  onSubmit?: (checked: number, total: number) => void;
}

export const MarkingScheme = ({ scenario, onSubmit }: MarkingSchemeProps) => {
  const [checkedItems, setCheckedItems] = useState<Set<string>>(new Set());

  // Reset when scenario changes
  useEffect(() => {
    setCheckedItems(new Set());
  }, [scenario.id]);

  const totalItems = scenario.markingScheme.reduce((acc, section) => acc + section.items.length, 0);
  const checkedCount = checkedItems.size;
  const progressPercentage = Math.round((checkedCount / totalItems) * 100);

  const toggleItem = (itemId: string) => {
    setCheckedItems((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(itemId)) {
        newSet.delete(itemId);
      } else {
        newSet.add(itemId);
      }
      return newSet;
    });
  };

  const resetAll = () => {
    setCheckedItems(new Set());
  };

  const handleSubmit = () => {
    onSubmit?.(checkedCount, totalItems);
  };

  const getSectionProgress = (section: MarkingSection) => {
    const checked = section.items.filter((item) => checkedItems.has(item.id)).length;
    return { checked, total: section.items.length };
  };

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Header Card with Progress */}
      <div className="bg-examiner-light border border-examiner/20 rounded-lg p-5">
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-examiner/10 rounded-full">
              <ClipboardCheck className="w-6 h-6 text-examiner" />
            </div>
            <div>
              <h2 className="font-serif text-xl font-semibold text-foreground mb-1">Examiner Marking Scheme</h2>
              <p className="text-sm text-muted-foreground">
                Tick each item as the candidate demonstrates it
              </p>
            </div>
          </div>
          <Button
            variant="outline"
            size="sm"
            onClick={resetAll}
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground"
          >
            <RotateCcw className="w-4 h-4" />
            Reset
          </Button>
        </div>

        {/* Progress Bar */}
        <div className="mt-5">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-foreground">Progress</span>
            <span className="text-sm font-semibold text-examiner">
              {checkedCount} / {totalItems} ({progressPercentage}%)
            </span>
          </div>
          <div className="progress-medical">
            <div
              className="progress-medical-fill bg-examiner"
              style={{ width: `${progressPercentage}%` }}
            />
          </div>
        </div>
      </div>

      {/* Marking Sections */}
      {scenario.markingScheme.map((section, sectionIdx) => {
        const progress = getSectionProgress(section);
        const isComplete = progress.checked === progress.total;

        return (
          <div
            key={sectionIdx}
            className={`bg-card rounded-lg shadow-soft border transition-colors duration-200 ${
              isComplete ? "border-success/50 bg-success/5" : "border-border"
            }`}
          >
            {/* Section Header */}
            <div className="px-5 py-4 border-b border-border flex items-center justify-between">
              <h3 className="font-serif font-semibold text-foreground flex items-center gap-2">
                {isComplete && (
                  <span className="w-5 h-5 rounded-full bg-success flex items-center justify-center animate-check-bounce">
                    <Check className="w-3 h-3 text-success-foreground" />
                  </span>
                )}
                {section.title}
              </h3>
              <span className="text-xs font-medium text-muted-foreground bg-secondary px-2 py-1 rounded-full">
                {progress.checked}/{progress.total}
              </span>
            </div>

            {/* Checklist Items */}
            <div className="p-3">
              {section.items.map((item, itemIdx) => {
                const isChecked = checkedItems.has(item.id);
                return (
                  <label
                    key={item.id}
                    className={`flex items-center gap-3 px-3 py-2.5 rounded-md cursor-pointer transition-all duration-150 hover:bg-secondary/50 ${
                      isChecked ? "bg-success/10" : ""
                    }`}
                    style={{ animationDelay: `${itemIdx * 30}ms` }}
                  >
                    <div className="relative flex items-center justify-center">
                      <input
                        type="checkbox"
                        checked={isChecked}
                        onChange={() => toggleItem(item.id)}
                        className="sr-only"
                      />
                      <div
                        className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-all duration-200 ${
                          isChecked
                            ? "bg-success border-success"
                            : "border-border hover:border-muted-foreground"
                        }`}
                      >
                        {isChecked && (
                          <Check className="w-3 h-3 text-success-foreground animate-check-bounce" />
                        )}
                      </div>
                    </div>
                    <span
                      className={`text-sm transition-colors duration-150 ${
                        isChecked ? "text-muted-foreground line-through" : "text-foreground"
                      }`}
                    >
                      {item.text}
                    </span>
                  </label>
                );
              })}
            </div>
          </div>
        );
      })}

      {/* Summary Card */}
      {progressPercentage === 100 && (
        <div className="bg-gradient-to-br from-success/10 to-candidate/10 border border-success/30 rounded-lg p-5 text-center animate-fade-in">
          <div className="w-12 h-12 rounded-full bg-success/20 flex items-center justify-center mx-auto mb-3">
            <Check className="w-6 h-6 text-success" />
          </div>
          <h3 className="font-serif font-semibold text-foreground mb-1">Marking Complete!</h3>
          <p className="text-sm text-muted-foreground">
            All {totalItems} items have been checked for this station.
          </p>
        </div>
      )}

      {/* Submit Button */}
      <div className="pt-4">
        <Button
          onClick={handleSubmit}
          className="w-full bg-examiner hover:bg-examiner/90 text-white py-6 text-lg font-semibold"
        >
          <Send className="w-5 h-5 mr-2" />
          Submit Marking ({checkedCount}/{totalItems})
        </Button>
      </div>
    </div>
  );
};
