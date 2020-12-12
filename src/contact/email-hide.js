setTimeout(() => {
    document.querySelector("#domain").innerHTML = location.hostname.replace(/o/g, "O").replace(/\./g, "&middot;").replace(/n/g, "ｎ");
}, 250);