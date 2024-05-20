"use client"
import React, { useState } from 'react';
import styles from "@/app/css/filter.module.scss";
import Collapsible from 'react-collapsible';

const FilterOptions = ({ products }) => {
    const [selectedColors, setSelectedColors] = useState([]);
    const [selectedTypes, setSelectedTypes] = useState([]);
    const [selectedPaintCombos, setSelectedPaintCombos] = useState([]);
    const [isFilterVisible, setFilterVisible] = useState(false);
    const [filteredProducts, setFilteredProducts] = useState(products);

    const toggleFilterVisibility = () => {
      setFilterVisible(!isFilterVisible);
    };

    const handleColorClick = (event) => {
        const color = event.target.value;
        setSelectedColors(prevState => {
            if (event.target.checked) {
                return [...prevState, color];
            } else {
                return prevState.filter(c => c !== color);
            }
        });
    };

    const handleTypeClick = (event) => {
        const type = event.target.value;
        setSelectedTypes(prevState => {
            if (event.target.checked) {
                return [...prevState, type];
            } else {
                return prevState.filter(c => c !== type);
            }
        });
    };

    const handlePaintComboClick = (event) => {
        const paintCombo = event.target.value;
        setSelectedPaintCombos(prevState => {
            if (event.target.checked) {
                return [...prevState, paintCombo];
            } else {
                return prevState.filter(c => c !== paintCombo);
            }
        });
    };

    const handleApplyButtonClick = () => {
        let filtered = products;

        if (selectedColors.length > 0) {
            filtered = filtered.filter(product => selectedColors.includes(product.color));
        }

        if (selectedTypes.length > 0) {
            filtered = filtered.filter(product => selectedTypes.includes(product.type));
        }

        if (selectedPaintCombos.length > 0) {
            filtered = filtered.filter(product => selectedPaintCombos.includes(product.paint_combo));
        }

        setFilteredProducts(filtered);
    };

    const handleApplyClick = () => {
        handleApplyButtonClick();
        toggleFilterVisibility();
    };

    return (
        <div>
        <h2 onClick={toggleFilterVisibility} style={{ cursor: 'pointer' }}>FILTER</h2>
  
        {isFilterVisible && (
          <section className={styles.container}>
            <div className={styles.filtercontainer}>
              <h2 className={styles.close_filter} onClick={toggleFilterVisibility} style={{ cursor: 'pointer' }}>CLOSE</h2>
  
              <div className={styles.options_container}>
            
            <div className={styles.color_choices}>
                <Collapsible className={styles.triggers}
                trigger="COLORS"
                triggerStyle={{ color: 'red', cursor: 'pointer', fontSize:'37px' }}
                contentContainerTagName="article"
                transitionTime={300}
                easing="ease-in-out"
                open={false}
                classParentString={styles.MyCollapsible} >
                <form action="">
                    <label>
                        <input type="checkbox" value="Black" onChange={handleColorClick} />
                        <span></span>
                        Black
                    </label>
                    <label>
                        <input type="checkbox" value="Green" onChange={handleColorClick} />
                        <span></span>
                        Green
                    </label>
                    <label>
                        <input type="checkbox" value="Grey" onChange={handleColorClick} />
                        <span></span>
                        Grey
                    </label>
                    <label>
                        <input type="checkbox" value="Pink" onChange={handleColorClick} />
                        <span></span>
                        Pink
                    </label>
                    <label>
                        <input type="checkbox" value="White" onChange={handleColorClick} />
                        <span></span>
                        White
                    </label>
                    <label>
                        <input type="checkbox" value="Navy" onChange={handleColorClick} />
                        <span></span>
                        Navy
                    </label>
                    <label>
                        <input type="checkbox" value="Blue" onChange={handleColorClick} />
                        <span></span>
                        Blue
                    </label>
                </form>
                </Collapsible >
            </div>
            <div className={styles.category_choices}>
                <Collapsible className={styles.triggers}
                trigger='CATEGORIES'
                triggerStyle={{ color: 'red', cursor: 'pointer', fontSize:'37px' }}
                contentContainerTagName="article"
                transitionTime={300}
                easing="ease-in-out"
                open={false}
                classParentString={styles.MyCollapsible} >
                <form action="">
                    <label>
                        <input type="checkbox" value="Hoodie" onChange={handleTypeClick} />
                        <span></span>
                        Hoodie
                    </label>
                    <label>
                        <input type="checkbox" value="T-shirt" onChange={handleTypeClick} />
                        <span></span>
                        T-shirt
                    </label>
                    <label>
                        <input type="checkbox" value="Jeans" onChange={handleTypeClick} />
                        <span></span>
                        Jeans
                    </label>
                </form>
                </Collapsible>
            </div>
            <div className={styles.paint_combo_choices}>
            <Collapsible className={styles.triggers}
            trigger='PAINT COMBINATIONS'
            triggerStyle={{ color: 'red', cursor: 'pointer', fontSize:'37px' }}
                contentContainerTagName="article"
                transitionTime={300}
                easing="ease-in-out"
                open={false}
                classParentString={styles.MyCollapsible}  >
                <form action="">
                    <label>
                        <input type="checkbox" value="Friend" onChange={handlePaintComboClick} />
                        <span></span>
                        Friend
                    </label>
                    <label>
                        <input type="checkbox" value="Ice" onChange={handlePaintComboClick} />
                        <span></span>
                        Ice
                    </label>
                    <label>
                        <input type="checkbox" value="Uni" onChange={handlePaintComboClick} />
                        <span></span>
                        Uni
                    </label>
                    <label>
                        <input type="checkbox" value="Cool" onChange={handlePaintComboClick} />
                        <span></span>
                        Cool
                    </label>
                </form>
                </Collapsible>
            </div>
            <div className={styles.sizes_choices}>
            <Collapsible className={styles.triggers}
            trigger='SIZES'
            triggerStyle={{ color: 'red', cursor: 'pointer', fontSize:'37px' }}
                contentContainerTagName="article"
                transitionTime={300}
                easing="ease-in-out"
                open={false}
                classParentString={styles.MyCollapsible}  >
                <form action="">
                    <label>
                        <input type="checkbox" value="XS" onChange={handlePaintComboClick} />
                        <span></span>
                        XS
                    </label>
                    <label>
                        <input type="checkbox" value="S" onChange={handlePaintComboClick} />
                        <span></span>
                        S
                    </label>
                    <label>
                        <input type="checkbox" value="M" onChange={handlePaintComboClick} />
                        <span></span>
                        M
                    </label>
                    <label>
                        <input type="checkbox" value="L" onChange={handlePaintComboClick} />
                        <span></span>
                        L
                    </label>
                    <label>
                        <input type="checkbox" value="XL" onChange={handlePaintComboClick} />
                        <span></span>
                        XL
                    </label>
                    <label>
                        <input type="checkbox" value="28" onChange={handlePaintComboClick} />
                        <span></span>
                        28
                    </label>
                    <label>
                        <input type="checkbox" value="30" onChange={handlePaintComboClick} />
                        <span></span>
                        30
                    </label>
                    <label>
                        <input type="checkbox" value="32" onChange={handlePaintComboClick} />
                        <span></span>
                        32
                    </label>
                    <label>
                        <input type="checkbox" value="34" onChange={handlePaintComboClick} />
                        <span></span>
                        34
                    </label>
                    <label>
                        <input type="checkbox" value="36" onChange={handlePaintComboClick} />
                        <span></span>
                        36
                    </label>
                </form>
                </Collapsible>
            </div>
        </div>
        
                    <div className={styles.buttons}>
                        <button className={styles.clear}>CLEAR</button>
                        <button className={styles.apply} onClick={handleApplyClick}>APPLY</button>
                    </div>
                    </div>
        
          </section>
        )}
      </div>
    );
};

export default FilterOptions;


/* 
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [filterVisible, setFilterVisible] = useState(false);

    setProducts(data);
    setFilteredProducts(data); 

    const handleFilterChange = (filter) => {
        if (filter === "ALL") {
            setFilteredProducts(products);
        } else {
            const filtered = products.filter(product => product.type.toLowerCase() === filter.toLowerCase());
            setFilteredProducts(filtered);
        }
    };

    const handleApplyButtonClick = (selectedColors, selectedTypes, selectedPaintCombos) => {
        let filtered = products;

        if (selectedColors.length > 0) {
            filtered = filtered.filter(product => selectedColors.includes(product.color));
        }

        if (selectedTypes.length > 0) {
            filtered = filtered.filter(product => selectedTypes.includes(product.type));
        }

        if (selectedPaintCombos.length > 0) {
            filtered = filtered.filter(product => selectedPaintCombos.includes(product.paint_combo));
        }

        setFilteredProducts(filtered);
    };

    const toggleFilterVisibility = () => {
        setFilterVisible(!filterVisible);
    };


*/