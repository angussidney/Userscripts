// ==UserScript==
// @name        Github Notifications Opener
// @namespace   https://github.com/angussidney
// @description Adds a button to the notifications page which opens all visible notifications
// @author      angussidney
// @version     0.1
// @updateURL   https://raw.githubusercontent.com/angussidney/userscripts/master/github-notifications-opener/github-notifications-opener.user.js
// @downloadURL https://raw.githubusercontent.com/angussidney/userscripts/master/github-notifications-opener/github-notifications-opener.user.js
// @supportURL  https://github.com/angussidney/userscripts/issues
// @match       *://github.com/notifications
// @grant       none
// ==/UserScript==

(() => {
  function openAllNotifications() {
    repos = document.getElementsByClassName('notifications')
    for (let repo in repos) {
      notificationsList = repos[repo]
      for (let n in notificationsList.children) {
        notification = notifications[n]
        if (notification.classList.contains('js-notification')) {
          notificationURL = notification.querySelector('a.list-group-item-link').href
          // window.open(notificationURL)
          console.log(notificationURL)
        }
      }
    }
    // Refresh the page to clear notifications
    // window.location.reload()
  }

  // Init: Add button
  button = document.createElement('a')
  button.className = 'btn btn-sm'
  button.id = 'open-notifications'
  button.textContent = 'Open all in new tabs'
  navArea = document.querySelector('.tabnav > .float-right')
  navArea.prepend(button)

  // Button click handling
  document.getElementById('open-notifications').onclick = openAllNotifications

  // TODO: Only add button if notifications present
})()
