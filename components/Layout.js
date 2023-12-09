import styles from "../styles/Common.module.css";

export default function Layout({ children, style }) {
  return (
    <div className={styles.layout} style={{ ...style }}>
      {children}
    </div>
  );
}
