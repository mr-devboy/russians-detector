export function getIP() {
  return fetch('https://api.ipify.org', { mode: 'cors' }).then((data) =>
    data.text()
  );
}

export function getCountryByIP(ip) {
  return fetch(`https://rdap.db.ripe.net/ip/${ip}`, { mode: 'cors' })
    .then((data) => data.json())
    .then(({ country }) => {
      if (!country) throw Error();
      return country;
    })
    .catch(() =>
      fetch(`https://ipapi.co/${ip}/country`, { mode: 'cors' }).then((data) =>
        data.text()
      )
    );
}
