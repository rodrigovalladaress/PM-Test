import styles from "./selector.module.css";

export type SelectorOption<T extends string> = {
  id: T;
  label: string;
};

export function Selector<T extends string>({
  options,
  optionSelected,
  onSelectedOptionChange,
}: {
  options: SelectorOption<T>[];
  optionSelected: string;
  onSelectedOptionChange: (selectedOption: T) => void;
}) {
  return (
    <div className={`${styles.wrapper} withSeparator`}>
      {options.map(({ id, label }) => (
        <button
          key={id}
          className={`${styles.button} ${
            optionSelected == id ? styles.selected : ""
          }`}
          onClick={() => onSelectedOptionChange(id)}
        >
          <span>{label}</span>
          <span className={styles.border} />
        </button>
      ))}
    </div>
  );
}
