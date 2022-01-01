// https://leetcode.com/problems/subdomain-visit-count/

/**
 * @param {string[]} cpdomains
 * @return {string[]}
 */

var subdomainVisits = function(cpdomains) {
    
    let map = new Map();

    for(let i = 0; i < cpdomains.length; i++) {

        // destructure each input array element into count and the domain name
        let [count, domain] = cpdomains[i].split(" ");

        // split doman name further with .
        let subdomain = domain.split(".");
        // console.log(subdomain);

        // for loop the subdomain list and join then with ., so we have each occurance
        for(let i = 0; i < subdomain.length; i++) {
            // console.log(subdomain.slice(i).join("."));

            let name = subdomain.slice(i).join(".");

            // if the map does not have the name, we set key as domain name, and value = count;
            if(!map.has(name)) {
                map.set(name, parseInt(count));
                console.log(map);
            } else {
                let previousCount = map.get(name);
                map.set(name, previousCount + parseInt(count));
                console.log(map);
            }
        }
    }

    let result = [];
    for(const [key, value] of map) {
        // console.log(key);
        // console.log(value);
        result.push(`${value} ${key}`);
    }
    return result;
};
// console.log(subdomainVisits(["9001 discuss.leetcode.com"]));        // ["9001 leetcode.com","9001 discuss.leetcode.com","9001 com"]
console.log(subdomainVisits(["900 google.mail.com", "50 yahoo.com", "1 intel.mail.com", "5 wiki.org"]));        // ["901 mail.com","50 yahoo.com","900 google.mail.com","5 wiki.org","5 org","1 intel.mail.com","951 com"]