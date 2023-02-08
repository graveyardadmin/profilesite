import styles from "../../styles/user/Valdemar.module.css";

export default function Valdemar() {
  return(
    <div className={styles.valdemar}>

      <div className={styles.overlayer}></div>

      <div className={styles.lists}>
          <div className={styles.list}>
              <h3>About me</h3>
              <div className={styles.list_content}>
                  <ul>
                      <li>
                          Name: Valdemar
                      </li>
                      <li>
                          Location: Finland
                      </li>
                      <li>
                          Age:  16
                      </li>
                      <li>
                          Gender: Male
                      </li>
                      <li>
                          Occupation: Web dev student & Web dev
                      </li>
                  </ul>
              </div>

          </div>

          <div className={styles.list}>
              <h3>Hobbies</h3>
              <div className={styles.list_content}>
                  <ul>
                      <li>
                          Photography: <a href="https://instagram.com/photosfromthenordic/">instagram</a>
                      </li>
                      <li>
                          Cooking: <a href="https://instagram.com/photosfromthenordic/">instagram</a>
                      </li>
                      <li>
                          Programming
                      </li>
                      <li>
                          Music

                          <ul>
                              <li>Guitar: 2 years</li>
                              <li>Piano: 9 years</li>
                          </ul>
                      </li>
                  </ul>
              </div>
          </div>

          <div className={styles.list}>
              <h3>Languages</h3>
              <div className={styles.list_content}>
                  <ol>
                      <li>JavaScript: 5 years</li>
                      <li>HTML & CSS: 5 years</li>
                      <li>Python: 3 years</li>
                      <li>C#: 1 year</li>
                  </ol>
              </div>
          </div>

          <div className={styles.list}>
              <h3>Sites</h3>
              <div className={styles.list_content}>
                  <ul>
                      <li>
                          <h4>
                              <a href="https://3x00.net/">3x00.net</a>
                          </h4>

                          <ul>
                              <li>
                                  <a href="https://u.3x00.net/">URL-shortener</a>
                              </li>
                              <li>
                                  <a href="https://valdemar.3x00.net/">Personal Page</a>
                              </li>
                          </ul>
                      </li>

                      <li>
                          <h4>
                              <a href="https://graveyardbot.xyz/">graveyardbot.xyz</a>
                          </h4>
                      </li>
                  </ul>
              </div>
          </div>

          <div className={styles.list}>
              <h3>Socials</h3>
              <div className={styles.list_content}>
                  <ul>
                      <li>Email: <a href="mailto:valdemar@3x00.net">valdemar@3x00.net</a></li>
                      <li>Instagram: <a href="https://instagram.com/photosfromthenordic/">photosfromthenordic</a></li>
                      <li>Discord: Valdemar#4341</li>
                      <li>Github: <a href="https://github.com/graveyardadmin/">graveyardadmin</a></li>
                  </ul>
              </div>
          </div>
      </div>
    </div>
  )
}