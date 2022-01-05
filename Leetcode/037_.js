/**
 * @param {string[]} cpdomains
 * @return {string[]}
 */


var subdomainVisits = function(cpdomains) {
    
    let map = new Map();

    for(let i = 0; i < cpdomains.length; i++) {
        // console.log(cpdomains[i]);
        const [count, subdomain] = cpdomains[i].split(" ");
        // console.log(count, subdomain);

        let domainList = subdomain.split(".");
        // console.log(domainList);

        for(let j = 0; j < domainList.length; j++) {
            // console.log(domainList.slice(j).join("."));
            let domainName = domainList.slice(j).join(".");

            if(!map.has(domainName)) {
                map.set(domainName, Number(count));
            } else {
                map.set(domainName, map.get(domainName) + Number(count));
            }
        }
    }

    // console.log(map);

    let result = [];
    map.forEach((value, key) => {
        result.push(`${value} ${key}`)
    })

    return result;
};

console.log(subdomainVisits(["9001 discuss.leetcode.com"]));
console.log(subdomainVisits(["900 google.mail.com", "50 yahoo.com", "1 intel.mail.com", "5 wiki.org"]));