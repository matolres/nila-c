import React, { useState, useEffect, useRef } from 'react';
import styles from "@/app/css/filter.module.scss";
import Collapsible from 'react-collapsible';
import gsap from 'gsap';

const filterOptions = [
  { label: 'CATEGORIES', filterType: 'categories', options: ['Hoodie', 'Jeans', 'T-shirt'] },
  { label: 'COLORS', filterType: 'colors', options: ['Blue', 'Navy', 'White', 'Black'] },
  { label: 'PAINT COMBINATIONS', filterType: 'paintCombos', options: ['Friend', 'Uni', 'Cool', 'Ice'] },
  { label: 'SIZES', filterType: 'sizes', options: ['S', 'M', 'L', '34', '36'] }
];

const FilterOptions = ({ products, setFilteredProducts, isFilterVisible, toggleFilterVisibility }) => {
  const [selectedFilters, setSelectedFilters] = useState({
    categories: [],
    colors: [],
    paintCombos: [],
    sizes: []
  });
  const [tempSelectedFilters, setTempSelectedFilters] = useState(selectedFilters);
  const [overlayVisible, setOverlayVisible] = useState(false);
  const filterRef = useRef(null);

  useEffect(() => {
    const updatePosition = () => {
      const translateXValue = window.innerWidth > 768 ? '0%' : '0%';
      gsap.to(filterRef.current, {
        x: isFilterVisible ? translateXValue : '100%',
        duration: 0.5,
        ease: isFilterVisible ? 'power2.out' : 'power2.in',
      });
    };

    updatePosition();
    window.addEventListener('resize', updatePosition);
    return () => window.removeEventListener('resize', updatePosition);
  }, [isFilterVisible]);

  useEffect(() => {
    if (isFilterVisible) {
      setOverlayVisible(true);
      gsap.to(`.${styles.op_overlay}`, {
        opacity: 0.5,
        duration: 0.005,
        ease: 'power2.inOut',
      });
    } else {
      gsap.to(`.${styles.op_overlay}`, {
        opacity: 0,
        duration: 0.005,
        ease: 'power2.inOut',
        onComplete: () => setOverlayVisible(false),
      });
    }
  }, [isFilterVisible]);

  useEffect(() => {
    let filtered = products;
    Object.keys(selectedFilters).forEach(filterType => {
      if (selectedFilters[filterType].length > 0) {
        filtered = filtered.filter(product => selectedFilters[filterType].includes(product[filterType.slice(0, -1)]));
      }
    });
    setFilteredProducts(filtered);
  }, [selectedFilters, products, setFilteredProducts]);

  const handleFilterChange = (filterType, value, isChecked) => {
    setTempSelectedFilters(prevFilters => ({
      ...prevFilters,
      [filterType]: isChecked
        ? [...prevFilters[filterType], value]
        : prevFilters[filterType].filter(item => item !== value)
    }));
  };

  const applyFilters = () => {
    setSelectedFilters(tempSelectedFilters);
    toggleFilterVisibility();
  };

  const clearFilters = () => {
    setTempSelectedFilters({
      categories: [],
      colors: [],
      paintCombos: [],
      sizes: []
    });
  };

  return (
    <>
    <span className={styles.open_filter} onClick={toggleFilterVisibility} style={{ cursor: 'pointer' }}>FILTER</span>
      <div className={`${styles.op_overlay} ${overlayVisible ? styles.visible_overlay : ''}`}></div>
      <section className={`${styles.container} ${isFilterVisible ? styles.visible : ''}`} ref={filterRef}>
        <div className={styles.filtercontainer}>
          <span className={styles.close_filter} onClick={toggleFilterVisibility} style={{ cursor: 'pointer' }}>CLOSE</span>
          <div className={styles.options_container}>
            {filterOptions.map(({ label, filterType, options }) => (
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
                          checked={tempSelectedFilters[filterType].includes(option)}
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
            <button className={styles.clear} onClick={clearFilters}>
              CLEAR
            </button>
            <button className={styles.apply} onClick={applyFilters}>
              APPLY
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default FilterOptions;
