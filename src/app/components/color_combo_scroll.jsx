import styles from "@/app/css/color_combo_scroll.module.scss";
import Image from "next/image";

export default function ColorCombo() {
    return(
        <div className={styles.combo_container}>
            <Image className={styles.combo_image} alt=""
            height={200}
            width={200}
            />
            <h4>prop.combo_name</h4>
        </div>
    )
}