import React, { useState } from 'react';
import Slider from 'rc-slider';
import Range from 'rc-slider';
import 'rc-slider/assets/index.css';

interface CollectionFiltersProps {
  onPriceRangeChange: (min: number, max: number) => void;
  onAvailabilityChange: (available: boolean) => void;
}

const CollectionFilters: React.FC<CollectionFiltersProps> = ({
  onPriceRangeChange,
  onAvailabilityChange,
}) => {
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 100]);

  const handlePriceChange = (value: number | number[]) => {
    if (Array.isArray(value)) {
      setPriceRange(value as [number, number]);
      onPriceRangeChange(value[0], value[1]);
    }
  };

  const handleAvailabilityToggle = (event: React.ChangeEvent<HTMLInputElement>) => {
    //...availability logic
  }

  return (
    <div className="collection-filters">
      <h2>Filter by Price</h2>
      <Range min={0} max={100} value={priceRange} onChange={handlePriceChange} />
      <p>Price Range: ${priceRange[0]} - ${priceRange[1]}</p>
      {/*... availability checkbox */}
    </div>
  );
};

export default CollectionFilters;