import "./Footer.css";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";

function Footer() {
  return (
    <div className="footer">
      <div id="footer-line"></div>
      <div id="footer-setup">
      <div id="social-icons">
          <table>
            <tr>
              <th>
                <a href="https://www.facebook.com/munawebadv/">
                  <FacebookIcon />
                </a>
              </th>
              <th>
                <InstagramIcon />
              </th>
              <th>
                <TwitterIcon />
              </th>
            </tr>
          </table>
        </div>
        <div>
          <div> MUNA</div>
        </div>
        <div className="company">
          <table>
            <tr>
              <th>SC DINA & MUSZURIAK SRL</th>
            </tr>
            <tr>
              <td>CUI RO33543640</td>
            </tr>
            <tr>
              <td>Nr. Reg. Com: J35/2058/2014</td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Footer;
