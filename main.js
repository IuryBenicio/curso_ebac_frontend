document.addEventListener("DOMContentLoaded", () => {
    var profileAvatarEl = document.querySelector('.profile-avatar')
    var profileNameEl = document.querySelector('.profile-name')
    var profileUserNameEl = document.querySelector('.profile-username')
    var repositorysEl = document.querySelector('.repository')
    var followersEl = document.querySelector('.followers')
    var followingEl = document.querySelector('.following')
    var profileLinkEl = document.querySelector('.profile-link')
    var urlAPI = 'https://api.github.com/users/IuryBenicio'

    fetch(urlAPI)
        .then((response) => {
            return response.json();
        })
        .then((json) => {
            profileAvatarEl.src = json.avatar_url
            profileNameEl.innerText = json.name
            profileUserNameEl.innerText = json.login
            repositorysEl.innerText = json.public_repos
            followersEl.innerText = json.followers
            followingEl.innerText = json.following
            profileLinkEl.href = json.html_url
        })
})
