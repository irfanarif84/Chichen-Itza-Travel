import { useState } from "react";
import { Filter, X, ChevronDown, DollarSign, Clock, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuCheckboxItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import type { TourType, TourCategory } from "@/types/tour";

interface TourFiltersProps {
  onFilterChange: (filters: FilterState) => void;
  tourCount: number;
  className?: string;
}

export interface FilterState {
  priceRange: string;
  duration: string[];
  tourType: TourType[];
  category: TourCategory[];
}

const initialFilters: FilterState = {
  priceRange: "all",
  duration: [],
  tourType: [],
  category: [],
};

const priceRanges = [
  { value: "all", label: "All Prices" },
  { value: "0-60", label: "Under $60" },
  { value: "60-100", label: "$60 - $100" },
  { value: "100-150", label: "$100 - $150" },
  { value: "150+", label: "$150+" },
];

const durations = [
  { value: "short", label: "Half Day (<8 hrs)" },
  { value: "full", label: "Full Day (8-12 hrs)" },
  { value: "long", label: "Extended (12+ hrs)" },
];

const tourTypes: { value: TourType; label: string }[] = [
  { value: "group", label: "Group Tour" },
  { value: "private", label: "Private Tour" },
  { value: "luxury", label: "Luxury" },
  { value: "budget", label: "Budget" },
  { value: "family", label: "Family" },
];

const categories: { value: TourCategory; label: string }[] = [
  { value: "day-tours", label: "Day Tours" },
  { value: "sunrise-tours", label: "Sunrise Tours" },
  { value: "cenote-tours", label: "Cenote Tours" },
  { value: "private-tours", label: "Private Tours" },
  { value: "night-tours", label: "Night Tours" },
  { value: "combo", label: "Combo Tours" },
];

const TourFilters = ({ onFilterChange, tourCount, className = "" }: TourFiltersProps) => {
  const [filters, setFilters] = useState<FilterState>(initialFilters);

  const updateFilters = (newFilters: Partial<FilterState>) => {
    const updated = { ...filters, ...newFilters };
    setFilters(updated);
    onFilterChange(updated);
  };

  const toggleArrayFilter = <T extends string>(
    key: keyof FilterState,
    value: T
  ) => {
    const current = filters[key] as T[];
    const updated = current.includes(value)
      ? current.filter((v) => v !== value)
      : [...current, value];
    updateFilters({ [key]: updated });
  };

  const clearFilters = () => {
    setFilters(initialFilters);
    onFilterChange(initialFilters);
  };

  const activeFilterCount =
    (filters.priceRange !== "all" ? 1 : 0) +
    filters.duration.length +
    filters.tourType.length +
    filters.category.length;

  return (
    <div className={`${className}`}>
      <div className="flex flex-wrap items-center gap-3 mb-4">
        {/* Price filter */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="sm" className="gap-2">
              <DollarSign className="h-4 w-4" />
              {priceRanges.find((p) => p.value === filters.priceRange)?.label}
              <ChevronDown className="h-3 w-3" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start">
            {priceRanges.map((range) => (
              <DropdownMenuCheckboxItem
                key={range.value}
                checked={filters.priceRange === range.value}
                onCheckedChange={() => updateFilters({ priceRange: range.value })}
              >
                {range.label}
              </DropdownMenuCheckboxItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>

        {/* Duration filter */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="sm" className="gap-2">
              <Clock className="h-4 w-4" />
              Duration
              {filters.duration.length > 0 && (
                <Badge variant="secondary" className="ml-1 h-5 w-5 p-0 justify-center">
                  {filters.duration.length}
                </Badge>
              )}
              <ChevronDown className="h-3 w-3" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start">
            {durations.map((d) => (
              <DropdownMenuCheckboxItem
                key={d.value}
                checked={filters.duration.includes(d.value)}
                onCheckedChange={() => toggleArrayFilter("duration", d.value)}
              >
                {d.label}
              </DropdownMenuCheckboxItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>

        {/* Tour type filter */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="sm" className="gap-2">
              <Users className="h-4 w-4" />
              Tour Type
              {filters.tourType.length > 0 && (
                <Badge variant="secondary" className="ml-1 h-5 w-5 p-0 justify-center">
                  {filters.tourType.length}
                </Badge>
              )}
              <ChevronDown className="h-3 w-3" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start">
            {tourTypes.map((t) => (
              <DropdownMenuCheckboxItem
                key={t.value}
                checked={filters.tourType.includes(t.value)}
                onCheckedChange={() => toggleArrayFilter("tourType", t.value)}
              >
                {t.label}
              </DropdownMenuCheckboxItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>

        {/* Category filter */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="sm" className="gap-2">
              <Filter className="h-4 w-4" />
              Category
              {filters.category.length > 0 && (
                <Badge variant="secondary" className="ml-1 h-5 w-5 p-0 justify-center">
                  {filters.category.length}
                </Badge>
              )}
              <ChevronDown className="h-3 w-3" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start">
            {categories.map((c) => (
              <DropdownMenuCheckboxItem
                key={c.value}
                checked={filters.category.includes(c.value)}
                onCheckedChange={() => toggleArrayFilter("category", c.value)}
              >
                {c.label}
              </DropdownMenuCheckboxItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>

        {/* Clear filters */}
        {activeFilterCount > 0 && (
          <Button
            variant="ghost"
            size="sm"
            onClick={clearFilters}
            className="text-muted-foreground hover:text-foreground"
          >
            <X className="h-4 w-4 mr-1" />
            Clear ({activeFilterCount})
          </Button>
        )}
      </div>

      {/* Results count */}
      <p className="text-sm text-muted-foreground">
        Showing <strong className="text-foreground">{tourCount}</strong> tours
        {activeFilterCount > 0 && " matching your filters"}
      </p>
    </div>
  );
};

export default TourFilters;
