import css from "./Description.module.css";

const Description = () => {
  return (
    <div className={css.descWrapper}>
      <h2 className={css.descTitle}>Sip Happens Café</h2>
      <p className={css.deskText}>
        Please leave your feedback about our service by selecting one of the
        options below.
      </p>
    </div>
  );
};

export default Description;
