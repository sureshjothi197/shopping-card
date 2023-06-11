import { FOOTER_CONTENT, SOCIAL_DATA, TERMS } from "../../Utils/constant";
import "./footer.css";
const Footer = () => {
  return (
    <div className="footer-base">
    <div className="container">
      <footer class="pt-5">
        <div class="row">
          {FOOTER_CONTENT &&
            Object.keys(FOOTER_CONTENT).length > 0 &&
            Object.keys(FOOTER_CONTENT).map((key) => (
              <div class="col-2">
                <h5>{key}</h5>
                <ul class="nav flex-column">
                  {FOOTER_CONTENT[key].map((content) => (
                    <li class="nav-item mb-2">
                      <a
                        href={`/${content.name}`}
                        class="nav-link p-0 text-muted"
                      >
                        {content.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

          <div class="col-4 offset-1">
            <div className="d-flex justify-content-between align-items-center">
              {SOCIAL_DATA &&
                Object.keys(SOCIAL_DATA).length > 0 &&
                Object.keys(SOCIAL_DATA).map((key) => (
                  <div>
                    <div>
                      <strong>{key}</strong>
                    </div>
                    <div>
                      {SOCIAL_DATA[key].map((IconData) => (
                        <span className="p-1">
                          <IconData />
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
            </div>
            <form className="pt-5">
              <span>
                <strong>SIGN UP</strong>
              </span>
              <div class="d-flex w-100 gap-2">
                <label for="newsletter1" class="visually-hidden">
                  Email address
                </label>
                <input
                  id="newsletter1"
                  type="text"
                  class="form-control"
                  placeholder="Email address"
                />
                <button class="btn btn-secondary" type="button">
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>

        <div class="d-flex justify-content-between py-4 mt-4">
          <div>
            <p>©2010-2022 All Rights Reserved.</p>
            {Array.isArray(TERMS) &&
              TERMS.length > 0 &&
              TERMS.map((term) => (
                <div>
                  <ul class="list-unstyled d-flex">
                    {term.map((item)=>(
                    <li class="ms-2">
                    <a class="text-muted" href={`/${item}`}>
                      {item} 
                    </a>
                    {" |"}
                  </li>
                    ))}

                  </ul>
                </div>
              ))}
          </div>
        </div>
      </footer>
    </div>
    </div>
  );
};
export default Footer;
