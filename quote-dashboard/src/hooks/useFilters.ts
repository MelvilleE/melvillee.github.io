import { useState } from 'react';

const useFilters = () => {
    const [filters, setFilters] = useState({
        searchTerm: '',
        selectedClassification: '',
        dateRange: [null, null],
        savedBy: '',
    });

    const updateFilter = (filterName, value) => {
        setFilters((prevFilters) => ({
            ...prevFilters,
            [filterName]: value,
        }));
    };

    const resetFilters = () => {
        setFilters({
            searchTerm: '',
            selectedClassification: '',
            dateRange: [null, null],
            savedBy: '',
        });
    };

    return {
        filters,
        updateFilter,
        resetFilters,
    };
};

export default useFilters;