import React, { useState } from 'react';
import styles from "@/app/css/filter.module.scss";

const ColorFilterOptions = ({ handleColorButtonClick, handleApplyButtonClick }) => {
    const [selectedColors, setSelectedColors] = useState([]);

    const handleColorClick = (event) => {
        const color = event.target.value;
        if (event.target.checked) {
            setSelectedColors(prevState => [...prevState, color]);
            handleColorButtonClick(selectedColors);
        } else {
            setSelectedColors(prevState => prevState.filter(c => c !== color));
            handleColorButtonClick(selectedColors);
        }
        console.log("selectedColors:", selectedColors); // Log the updated state value
    };

    const handleApplyClick = () => {
        handleApplyButtonClick(selectedColors); // Pass selectedColors to the handleApplyButtonClick function
    };

    return (
        <section className={styles.container}>
            <div className={styles.color_choices}>
                <h2>COLORS</h2>
                <label>
                    <input type="checkbox" value="Black" onChange={handleColorClick} />
                    Black
                </label>
                <label>
                    <input type="checkbox" value="White" onChange={handleColorClick} />
                    White
                </label>
                <label>
                    <input type="checkbox" value="Navy" onChange={handleColorClick} />
                    Navy
                </label>
                <label>
                    <input type="checkbox" value="Blue" onChange={handleColorClick} />
                    Blue
                </label>
                {/* Add checkboxes for other colors here */}
            </div>
  
            <div className={styles.buttons}>
                <button className={styles.clear}>CLEAR</button>
                <button className={styles.apply} onClick={handleApplyClick}>APPLY</button>
            </div>
        </section>
    );
};
export default ColorFilterOptions;
