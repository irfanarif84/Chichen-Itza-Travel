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
import { useLocale } from "@/lib/i18n/useLocale";
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

const TourFilters = ({ onFilterChange, tourCount, className = "" }: TourFiltersProps) => {
  const { t } = useLocale();
  const [filters, setFilters] = useState<FilterState>(initialFilters);

  const priceRanges = [
    { value: "all", label: t("filter.allPrices") },
    { value: "0-60", label: t("filter.under60") },
    { value: "60-100", label: t("filter.60to100") },
    { value: "100-150", label: t("filter.100to150") },
    { value: "150+", label: t("filter.150plus") },
  ];

  const durations = [
    { value: "short", label: t("filter.halfDay") },
    { value: "full", label: t("filter.fullDay") },
    { value: "long", label: t("filter.extended") },
  ];

  const tourTypes: { value: TourType; label: string }[] = [
    { value: "group", label: t("filter.groupTour") },
    { value: "private", label: t("filter.privateTour") },
    { value: "luxury", label: t("filter.luxury") },
    { value: "budget", label: t("filter.budget") },
    { value: "family", label: t("filter.family") },
  ];

  const categories: { value: TourCategory; label: string }[] = [
    { value: "day-tours", label: t("tour.dayTours") },
    { value: "sunrise-tours", label: t("tour.sunriseTours") },
    { value: "cenote-tours", label: t("tour.cenoteTours") },
    { value: "private-tours", label: t("tour.privateTours") },
    { value: "night-tours", label: t("tour.nightTours") },
    { value: "combo", label: t("nav.comboTours") },
  ];

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
              {t("filter.duration")}
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
              {t("filter.tourType")}
              {filters.tourType.length > 0 && (
                <Badge variant="secondary" className="ml-1 h-5 w-5 p-0 justify-center">
                  {filters.tourType.length}
                </Badge>
              )}
              <ChevronDown className="h-3 w-3" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start">
            {tourTypes.map((tt) => (
              <DropdownMenuCheckboxItem
                key={tt.value}
                checked={filters.tourType.includes(tt.value)}
                onCheckedChange={() => toggleArrayFilter("tourType", tt.value)}
              >
                {tt.label}
              </DropdownMenuCheckboxItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>

        {/* Category filter */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="sm" className="gap-2">
              <Filter className="h-4 w-4" />
              {t("filter.category")}
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
            {t("filter.clear")} ({activeFilterCount})
          </Button>
        )}
      </div>

      {/* Results count */}
      <p className="text-sm text-muted-foreground">
        {t("filter.showing")} <strong className="text-foreground">{tourCount}</strong> {t("filter.tours")}
        {activeFilterCount > 0 && ` ${t("filter.matchingFilters")}`}
      </p>
    </div>
  );
};

export default TourFilters;
