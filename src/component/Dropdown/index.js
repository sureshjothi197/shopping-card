import "./dropdown.css";
const CustomDropDown = ({ data, value, label, onChange }) => {
  return (
    <div class="dropdown">
      <button
        class="btn border dropdown-toggle"
        type="button"
        id="dropdownMenuButton1"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        {value ? value : label}
      </button>
      <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
        {Array.isArray(data) &&
          data.length > 0 &&
          data.map((item) => (
            <li
              onClick={() => onChange(item)}
              className={value === item ? "drop-active" : ""}
            >
              <a
                class={
                  value === item ? "dropdown-item active-link" : "dropdown-item"
                }
                href="#"
              >
                {item}
              </a>
            </li>
          ))}
      </ul>
    </div>
  );
};
export default CustomDropDown;
