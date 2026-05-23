import React from 'react';

const FiltersPanel = ({ filters, onFilterChange }) => {
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        onFilterChange(name, value);
    };

    return (
        <div className="filters-panel">
            <h2>Filters</h2>
            <div className="filter-group">
                <label htmlFor="search">Search:</label>
                <input
                    type="text"
                    id="search"
                    name="search"
                    value={filters.search}
                    onChange={handleInputChange}
                />
            </div>
            <div className="filter-group">
                <label htmlFor="dateFrom">Date From:</label>
                <input
                    type="date"
                    id="dateFrom"
                    name="dateFrom"
                    value={filters.dateFrom}
                    onChange={handleInputChange}
                />
            </div>
            <div className="filter-group">
                <label htmlFor="dateTo">Date To:</label>
                <input
                    type="date"
                    id="dateTo"
                    name="dateTo"
                    value={filters.dateTo}
                    onChange={handleInputChange}
                />
            </div>
            <div className="filter-group">
                <label htmlFor="classification">Classification:</label>
                <select
                    id="classification"
                    name="classification"
                    value={filters.classification}
                    onChange={handleInputChange}
                >
                    <option value="">All</option>
                    <option value="type1">Type 1</option>
                    <option value="type2">Type 2</option>
                    <option value="type3">Type 3</option>
                </select>
            </div>
            <div className="filter-group">
                <label htmlFor="savedBy">Saved By:</label>
                <input
                    type="text"
                    id="savedBy"
                    name="savedBy"
                    value={filters.savedBy}
                    onChange={handleInputChange}
                />
            </div>
        </div>
    );
};

export default FiltersPanel;