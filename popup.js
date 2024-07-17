// const links = [
//     { id: 'website_link', name: 'website' },
//     { id: 'linkedin_link', name: 'linkedin' },
//     { id: 'medium_link', name: 'medium' },
//     { id: 'twitter_link', name: 'twitter' },
//     { id: 'quora_link', name: 'quora' },
//     { id: 'codechef_link', name: 'codechef' },
//     { id: 'facebook_link', name: 'facebook' },
//     { id: 'stackoverflow_link', name: 'stackoverflow' },
//     { id: 'codeforces_link', name: 'codeforces' },
//     { id: 'github_link', name: 'github' },
//     { id: 'spoj_link', name: 'spoj' },
//     { id: 'atcoder_link', name: 'atcoder' },
//     { id: 'freecodecamp_link', name: 'freecodecamp' },
//     { id: 'leetcode_link', name: 'leetcode' },
//     { id: 'hackerrank_link', name: 'hackerrank' }
// ];

// links.forEach(link => {
//     chrome.storage.sync.get([link.name], function (result) {
//         if (result[link.name]) {
//             document.getElementById(link.id).href = result[link.name];
//         }
//     });
// });

const links = [
    { id: 'portfolio_link', name: 'portfolio' },
    { id: 'linkedin_link', name: 'linkedin' },
    { id: 'github_link', name: 'github' },
    { id: 'stackoverflow_link', name: 'stackoverflow' },
    { id: 'twitter_link', name: 'twitter' },
    { id: 'facebook_link', name: 'facebook' },
    { id: 'medium_link', name: 'medium' },
    { id: 'hashnode_link', name: 'hashnode' },
    { id: 'quora_link', name: 'quora' },
    { id: 'leetcode_link', name: 'leetcode' },
    { id: 'codechef_link', name: 'codechef' },
    { id: 'codeforces_link', name: 'codeforces' },
    { id: 'website_link1', name: 'website1' },
    { id: 'website_link2', name: 'website2' },
    { id: 'website_link3', name: 'website3' }
];

links.forEach(link => {
    chrome.storage.sync.get([link.name], function (result) {
        if (result[link.name]) {
            document.getElementById(link.id).href = result[link.name];
        }
    });
});
