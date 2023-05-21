import { QRCode } from "react-qrcode-logo";

const WiFiQRCode = () => {
  const wifiInfo = {
    ssid: "U Than Myint Aung",
    password: "Aung44448",
    encryption: "WPA", // Choose the appropriate encryption type (WEP, WPA, or nopass)
  };

  const DZKWifi = {
    ssid: "DZK Office",
    password: "DZk21@E5",
    encryption: "WPA",
  };

  return (
    <div>
      <div>
        <p>WWA WifiQRCode</p>
        <QRCode
          value={`WIFI:S:${wifiInfo.ssid};T:${wifiInfo.encryption};P:${wifiInfo.password};;`}
        />
      </div>
      <br />
      <div>
        <p>DZK Office WifiQRCode</p>
        <QRCode
          value={`WIFI:S:${DZKWifi.ssid};T:${DZKWifi.encryption};P:${DZKWifi.password};;`}
          logoImage="../../assets/logo.png"
          logoHeight={200}
          logoWidth={200}
        />
      </div>

      <div className="flex">
        <div>
          <select name="" id="">
            <option value="WPA">WPA</option>
            <option value="WEP">WEP</option>
            <option value="No encryption">No encryption</option>
          </select>
        </div>
        <div>
          <label htmlFor="ssid">SSID</label>
          <input type="text" />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="password" />
        </div>
      </div>
    </div>
  );
};

export default WiFiQRCode;
