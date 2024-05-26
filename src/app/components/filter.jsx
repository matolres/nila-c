// app/components/filter.js
"use client";
import React, { useState, useEffect } from 'react';
import styles from "@/app/css/filter.module.scss";
import Collapsible from 'react-collapsible';

const FilterOptions = ({ products = [], setFilteredProducts }) => {
  const [selectedFilters, setSelectedFilters] = useState({
    categories: [],
    colors: [],
    paintCombos: [],
    sizes: []
  });
  const [isFilterVisible, setFilterVisible] = useState(false);

  useEffect(() => {
    let filtered = products;

    if (selectedFilters.categories.length > 0) {
      filtered = filtered.filter(product => selectedFilters.categories.includes(product.category));
    }
    if (selectedFilters.colors.length > 0) {
      filtered = filtered.filter(product => selectedFilters.colors.includes(product.color));
    }
    if (selectedFilters.paintCombos.length > 0) {
      filtered = filtered.filter(product => selectedFilters.paintCombos.includes(product.paintCombo));
    }
    if (selectedFilters.sizes.length > 0) {
      filtered = filtered.filter(product => selectedFilters.sizes.includes(product.size));
    }

    setFilteredProducts(filtered);
  }, [selectedFilters, products, setFilteredProducts]);

  const handleFilterChange = (filterType, value, isChecked) => {
    setSelectedFilters(prevFilters => ({
      ...prevFilters,
      [filterType]: isChecked
        ? [...prevFilters[filterType], value]
        : prevFilters[filterType].filter(item => item !== value)
    }));
  };

  const toggleFilterVisibility = () => setFilterVisible(!isFilterVisible);

  return (
    <div>
      <h2 onClick={toggleFilterVisibility} style={{ cursor: 'pointer' }}>FILTER</h2>

      {isFilterVisible && (
        <section className={styles.container}>
          <div className={styles.filtercontainer}>
            <h2 className={styles.close_filter} onClick={toggleFilterVisibility} style={{ cursor: 'pointer' }}>CLOSE</h2>

            <div className={styles.options_container}>
              {[
                { label: 'CATEGORIES', filterType: 'categories', options: ['Hoodie', 'Jeans', 'T-shirt'] },
                { label: 'COLORS', filterType: 'colors', options: ['Blue', 'Navy', 'White', 'Black'] },
                { label: 'PAINT COMBINATIONS', filterType: 'paintCombos', options: ['Friend', 'Uni', 'Cool', 'Ice'] },
                { label: 'SIZES', filterType: 'sizes', options: ['S', 'M', 'L', '34', '36'] }
              ].map(({ label, filterType, options }) => (
                <div key={filterType} className={styles[`${filterType}_choices`]}>
                  <Collapsible
                    className={styles.triggers}
                    trigger={label}
                    triggerStyle={{ color: 'red', cursor: 'pointer', fontSize: '37px' }}
                    transitionTime={300}
                    easing="ease-in-out"
                    classParentString={styles.MyCollapsible}
                  >
                    <form>
                      {options.map(option => (
                        <label key={option}>
                          <input
                            type="checkbox"
                            value={option}
                            onChange={(e) =>
                              handleFilterChange(filterType, e.target.value, e.target.checked)
                            }
                          />
                          <span></span>
                          {option}
                        </label>
                      ))}
                    </form>
                  </Collapsible>
                </div>
              ))}
            </div>

            <div className={styles.buttons}>
              <button
                className={styles.clear}
                onClick={() => setSelectedFilters({ categories: [], colors: [], paintCombos: [], sizes: [] })}
              >
                CLEAR
              </button>
              <button className={styles.apply} onClick={toggleFilterVisibility}>
                APPLY
              </button>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default FilterOptions;
