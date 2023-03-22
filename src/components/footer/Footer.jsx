import "./Footer.css";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import ANPC1 from '../../logo/ANPC1.png'
import SOL from '../../logo/SOL.png'
import CopyrightIcon from '@mui/icons-material/Copyright';

function Footer() {
  return (
    <div className="footer">
      <div id="footer-line"></div>
      <div id="footer-setup">
      <div id="muna-footer">
          <div> <CopyrightIcon/></div>
          <div>MUNA</div>
        </div>
      <div id="social-icons">
          <table><tbody>
            <tr>
              <th>
                <a href="https://www.facebook.com/munawebadv/">
                  <FacebookIcon />
                </a>
              </th>
              <th>
                <a href="https://www.instagram.com/_m_u_n_a_t_m_/">
                <InstagramIcon />
                </a>
              </th>
          {/*    <th>
                <TwitterIcon />
  </th>*/}
            </tr></tbody>
          </table>
        </div>
        <div id="opc">
          <table><tbody>
            <tr>
              <th>
                <a href="https://anpc.ro/ce-este-sal/">
                  <img src={ANPC1} alt="SAL icon" />
                </a>
              </th>
              <th>
                <a href="https://ec.europa.eu/consumers/odr/main/index.cfm?event=main.home2.show&lng=RO">
                <img src={SOL} alt="SOL icon" />
                </a>
              </th>
            </tr></tbody>
          </table>
        </div>
        <div className="company">
          <table><tbody>
            <tr>
              <th>SC DINA & MUSZURIAK SRL</th>
            </tr>
            <tr>
              <td>CUI RO33543640</td>
            </tr>
            <tr>
              <td>Nr. Reg. Com: J35/2058/2014</td>
            </tr></tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Footer;
