// document.getElementById('save').addEventListener('click', function () {
//     const profiles = [
//         'website',
//         'linkedin',
//         'medium',
//         'twitter',
//         'quora',
//         'codechef',
//         'facebook',
//         'stackoverflow',
//         'codeforces',
//         'github',
//         'spoj',
//         'atcoder',
//         'freecodecamp',
//         'leetcode',
//         'hackerrank'
//     ];

//     profiles.forEach(profile => {
//         const value = document.getElementById(profile).value;
//         if (value) {
//             chrome.storage.sync.set({ [profile]: value }, function () {
//                 console.log(`${profile} is set to ${value}`);
//             });
//         }
//     });

//     alert('Profiles saved!');
// });

// window.onload = function () {
//     const profiles = [
//         'website',
//         'linkedin',
//         'medium',
//         'twitter',
//         'quora',
//         'codechef',
//         'facebook',
//         'stackoverflow',
//         'codeforces',
//         'github',
//         'spoj',
//         'atcoder',
//         'freecodecamp',
//         'leetcode',
//         'hackerrank'
//     ];

//     profiles.forEach(profile => {
//         chrome.storage.sync.get([profile], function (result) {
//             if (result[profile]) {
//                 document.getElementById(profile).value = result[profile];
//             }
//         });
//     });
// };



document.getElementById('save').addEventListener('click', function () {
    const profiles = [
        'portfolio',
        'linkedin',
        'github',
        'stackoverflow',
        'twitter',
        'facebook',
        'medium',
        'hashnode',
        'quora',
        'leetcode',
        'codechef',
        'codeforces',
        'website1',
        'website2',
        'website3'
    ];

    profiles.forEach(profile => {
        const value = document.getElementById(profile).value;
        if (value) {
            chrome.storage.sync.set({ [profile]: value }, function () {
                console.log(`${profile} is set to ${value}`);
            });
        }
    });

    alert('Profiles saved!');
});

window.onload = function () {
    const profiles = [
        'portfolio',
        'linkedin',
        'github',
        'stackoverflow',
        'twitter',
        'facebook',
        'medium',
        'hashnode',
        'quora',
        'leetcode',
        'codechef',
        'codeforces',
        'website1',
        'website2',
        'website3'
    ];

    profiles.forEach(profile => {
        chrome.storage.sync.get([profile], function (result) {
            if (result[profile]) {
                document.getElementById(profile).value = result[profile];
            }
        });
    });
};
