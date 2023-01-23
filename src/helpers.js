export function getIP() {
  return fetch('https://api.ipify.org').then((data) => data.text());
}

export function getCountryByIP(ip) {
  return fetch(`https://rdap.db.ripe.net/ip/${ip}`)
    .then((data) => data.json())
    .then(({ country }) => {
      if (!country) throw Error();
      return country;
    })
    .catch(() =>
      fetch(`https://ipapi.co/${ip}/country`).then((data) => data.text())
    );
}
