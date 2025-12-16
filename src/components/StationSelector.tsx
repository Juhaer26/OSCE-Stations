import { osceScenarios } from "@/data/osceScenarios";
import { ChevronDown } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface StationSelectorProps {
  selectedId: number;
  onSelect: (id: number) => void;
}

export const StationSelector = ({ selectedId, onSelect }: StationSelectorProps) => {
  return (
    <Select value={selectedId.toString()} onValueChange={(val) => onSelect(parseInt(val))}>
      <SelectTrigger className="w-full sm:w-[320px] bg-card border-border">
        <SelectValue placeholder="Select a station" />
      </SelectTrigger>
      <SelectContent>
        {osceScenarios.map((scenario) => (
          <SelectItem key={scenario.id} value={scenario.id.toString()}>
            <span className="flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-xs font-semibold text-primary">
                {scenario.stationNumber}
              </span>
              <span className="truncate">{scenario.title}</span>
            </span>
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};
