// https://leetcode.com/problems/subdomain-visit-count/

/**
 * @param {string[]} cpdomains
 * @return {string[]}

1. split the input array into count and domainName base on " "
2. count should be number, instead of string
3. domainName need to split further base on ".", so we have subdomain array
4. for loop the subdomain array, and slice,join them, check each occurance with the map
5. if map does not have it, we set the subdomain name as key, and count and value
6. otherwise we + count;
 */

var subdomainVisits = function(cpdomains) {
    
    let map = new Map();

    for(let i = 0; i < cpdomains.length; i++) {

        // destructure each input array element into count and the domain name
        let [count, domain] = cpdomains[i].split(" ");

        // split doman name further base dot .
        let subdomain = domain.split(".");
        // console.log(subdomain);

        // for loop the subdomain list and join then with ., so we have each occurance
        for(let i = 0; i < subdomain.length; i++) {
            // console.log(subdomain.slice(i).join("."));

            let name = subdomain.slice(i).join(".");

            // if the map does not have the name, we set key as domain name, and value = count;
            if(!map.has(name)) {
                map.set(name, parseInt(count));
                // console.log(map);
            } else {
                // otherwise, we add up the count
                let previousCount = map.get(name);
                map.set(name, previousCount + parseInt(count));
                // console.log(map);
            }
        }
    }

    let result = [];
    // for loop the map and push each key : value to result list
    for(const [key, value] of map) {
        // console.log(key);
        // console.log(value);
        result.push(`${value} ${key}`);
    }
    return result;
};
console.log(subdomainVisits(["9001 discuss.leetcode.com"]));        // ["9001 leetcode.com","9001 discuss.leetcode.com","9001 com"]
console.log(subdomainVisits(["900 google.mail.com", "50 yahoo.com", "1 intel.mail.com", "5 wiki.org"]));        // ["901 mail.com","50 yahoo.com","900 google.mail.com","5 wiki.org","5 org","1 intel.mail.com","951 com"]