(function () {
  var PHOTO = "2026/photos/";
  var FALLBACK = "Surabhi_Yuvasena_Logo.png";

  // Roster from spreadsheet tab "SPL - 2026 2026-11-15 2326".
  // teamName matches the captain for now and can be renamed later.
  var teams = [
    {
      teamName: "Nallapati Rajaram",
      captain: "Nallapati Rajaram",
      serial: 11,
      photo: "11.jpg",
      players: [
        { serial: 1, name: "VANARASA SAI SREEKAR", photo: "1.png" },
        { serial: 19, name: "V Chiranjeevi Remo", photo: "19.png" },
        { serial: 24, name: "Nallapati dasarath sai abhilash", photo: "24.jpg" },
        { serial: 25, name: "Satish raj", photo: "25.jpg" },
        { serial: 30, name: "V Mohan", photo: "30.png" },
        { serial: 33, name: "R Venkatesh", photo: "33.jpg" },
        { serial: 36, name: "R Srinivas", photo: "36.jpg" },
        { serial: 39, name: "Muvvapati koushik", photo: "39.jpg" },
        { serial: 42, name: "R koushik", photo: "42.jpg" },
        { serial: 57, name: "V Revanth", photo: "57.jpeg" },
        { serial: 58, name: "G Suresh", photo: "58.jpg" },
        { serial: 72, name: "V Vinod Kumar", photo: "72.jpg" },
        { serial: 78, name: "V Rahul", photo: "78.jpg" }
      ]
    },
    {
      teamName: "SA GNANA SAI MOHAN",
      captain: "SA GNANA SAI MOHAN",
      serial: 18,
      photo: "18.jpeg",
      players: [
        { serial: 16, name: "T Gopi krishna", photo: "16.jpg" },
        { serial: 20, name: "Y PRAVEEN KUMAR", photo: "20.jpeg" },
        { serial: 45, name: "R Kalyan", photo: "45.jpg" },
        { serial: 46, name: "Vijay Neeraj Kumar Surabhi Aveti", photo: "46.jpg" },
        { serial: 48, name: "V Jayavardhan", photo: "48.jpg" },
        { serial: 52, name: "S A Sai Dheeraj kumar", photo: "52.jpeg" },
        { serial: 56, name: "S A Raghava", photo: "56.jpeg" },
        { serial: 60, name: "R Pruthvi Achyut", photo: "60.jpg" },
        { serial: 62, name: "V Uday", photo: "62.jpg" },
        { serial: 67, name: "VANARASA CHENNAKESHAVA RAO", photo: "67.jpg" },
        { serial: 76, name: "Rekender Sharath", photo: "76.jpg" },
        { serial: 81, name: "M Santhosh", photo: "81.jpg" }
      ]
    },
    {
      teamName: "R Charan",
      captain: "R Charan",
      serial: 26,
      photo: "26.jpg",
      players: [
        { serial: 2, name: "V MANJUNAATH", photo: "2.jpg" },
        { serial: 3, name: "S A Prakash", photo: "3.jpg" },
        { serial: 8, name: "R Jayanand", photo: "8.jpg" },
        { serial: 9, name: "R Chandramohan", photo: "9.jpg" },
        { serial: 12, name: "S SHARATH", photo: "12.jpg" },
        { serial: 14, name: "M Sai", photo: "14.png" },
        { serial: 21, name: "V Shivasaketh", photo: "21.jpg" },
        { serial: 28, name: "A Sai Chand", photo: "28.jpg" },
        { serial: 29, name: "V Sairohith", photo: "29.jpeg" },
        { serial: 40, name: "V MOHANA KRISHNA", photo: "40.jpg" },
        { serial: 49, name: "V JITHENDER REDDY", photo: "49.jpg" },
        { serial: 69, name: "Rekandar srinivas", photo: "69.jpg" },
        { serial: 79, name: "Hem Harshith Reddy", photo: "79.jpeg" }
      ]
    },
    {
      teamName: "V Sai Subhakar",
      captain: "V Sai Subhakar",
      serial: 32,
      photo: "32.jpg",
      players: [
        { serial: 4, name: "Rekandar Yashwanth", photo: "04.jpg" },
        { serial: 5, name: "Rekandar chakri", photo: "5.jpg" },
        { serial: 7, name: "V Rajeev", photo: "7.jpeg" },
        { serial: 10, name: "V Giri", photo: "10.jpg" },
        { serial: 22, name: "R Laxmi Narasimha Rao", photo: "22.jpg" },
        { serial: 23, name: "Vanarasa Sreenivasa Rao", photo: "23.jpg" },
        { serial: 27, name: "S A Revanth", photo: "27.jpg" },
        { serial: 35, name: "V Manimohan", photo: "35.jpg" },
        { serial: 43, name: "V Surya Kumar", photo: "43.jpeg" },
        { serial: 55, name: "R Bhanuprasad", photo: "55.jpg" },
        { serial: 61, name: "Vadde Harikumar", photo: "61.jpg" },
        { serial: 71, name: "S Sravan kumar", photo: "71.jpeg" }
      ]
    },
    {
      teamName: "V Sairam",
      captain: "V Sairam",
      serial: 47,
      photo: "47.jpg",
      players: [
        { serial: 17, name: "R Venkatreddy", photo: "17.jpg" },
        { serial: 31, name: "Bobby", photo: "31.jpeg" },
        { serial: 44, name: "VANARASA SANJAY", photo: "44.jpeg" },
        { serial: 54, name: "V Srikanth", photo: "54.jpg" },
        { serial: 63, name: "Sindhuri venkat", photo: "63.jpg" },
        { serial: 65, name: "Surya teja", photo: "65.jpg" },
        { serial: 66, name: "V Maharshi", photo: "66.jpg" },
        { serial: 68, name: "R Sai Teja", photo: "68.jpg" },
        { serial: 70, name: "Rekandar Saikiran", photo: "70.jpg" },
        { serial: 73, name: "V Manohar", photo: "73.jpeg" },
        { serial: 80, name: "R Karthik", photo: "80.jpeg" },
        { serial: 82, name: "Sindhe Avinash", photo: "82.jpeg" },
        { serial: 83, name: "DJ NANI", photo: "83.jpg" }
      ]
    },
    {
      teamName: "CV BHANU",
      captain: "CV BHANU",
      serial: 59,
      photo: "59.jpg",
      players: [
        { serial: 6, name: "V Ajay Kumar", photo: "6.jpeg" },
        { serial: 15, name: "V Raghava Sai", photo: "15.jpeg" },
        { serial: 34, name: "R Vamsi Krishna", photo: "34.jpg" },
        { serial: 37, name: "Ajay Rekandar", photo: "37.jpg" },
        { serial: 38, name: "S A MANOHAR", photo: "38.jpg" },
        { serial: 41, name: "R Rajesh", photo: "41.jpg" },
        { serial: 50, name: "V PAVAN", photo: "50.jpg" },
        { serial: 51, name: "V SAI KUMAR", photo: "51.jpg" },
        { serial: 53, name: "S A Saman Prashanth", photo: "53.jpg" },
        { serial: 64, name: "Harishivakrishna", photo: "64.jpg" },
        { serial: 74, name: "CV Yashwanth", photo: "74.jpeg" },
        { serial: 75, name: "Satya Sreenadh", photo: "75.jpg" },
        { serial: 77, name: "R Venkat rao", photo: "77.jpg" }
      ]
    }
  ];

  function esc(value) {
    return String(value).replace(/[&<>"']/g, function (ch) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[ch];
    });
  }

  function image(file, alt, className) {
    return '<img class="' + className + '" src="' + PHOTO + file + '" alt="' + esc(alt) + '" onerror="this.onerror=null;this.src=\'' + FALLBACK + '\'">';
  }

  function renderList() {
    var grid = document.getElementById("teams-grid");
    if (!grid) return;
    grid.innerHTML = teams.map(function (team) {
      var count = team.players.length + 1;
      return '<button type="button" class="captain-card" data-serial="' + team.serial + '">' +
        image(team.photo, team.captain, "captain-photo") +
        '<div class="captain-name">' + esc(team.captain) + '</div>' +
        '<div class="team-name">' + esc(team.teamName) + '</div>' +
        '<div class="team-count">' + count + " Players</div>" +
      "</button>";
    }).join("");
    grid.querySelectorAll(".captain-card").forEach(function (card) {
      card.addEventListener("click", function () {
        showTeam(Number(card.getAttribute("data-serial")));
      });
    });
  }

  function showTeam(serial) {
    var team = null;
    for (var i = 0; i < teams.length; i++) {
      if (teams[i].serial === serial) team = teams[i];
    }
    if (!team) return;
    document.getElementById("teams-list").hidden = true;
    document.getElementById("team-detail").hidden = false;
    document.getElementById("team-detail-title").textContent = team.teamName;
    var people = [{ name: team.captain, photo: team.photo, captain: true }].concat(
      team.players.slice().sort(function (a, b) { return a.serial - b.serial; })
    );
    document.getElementById("players-grid").innerHTML = people.map(function (player) {
      return '<div class="player-card' + (player.captain ? " captain" : "") + '">' +
        image(player.photo, player.name, "player-photo") +
        '<div class="player-name">' + esc(player.name) + "</div>" +
        (player.captain ? '<div class="player-role">Captain</div>' : "") +
      "</div>";
    }).join("");
    window.scrollTo(0, 0);
  }

  var back = document.getElementById("teams-back");
  if (back) {
    back.addEventListener("click", function () {
      document.getElementById("team-detail").hidden = true;
      document.getElementById("teams-list").hidden = false;
      window.scrollTo(0, 0);
    });
  }
  renderList();
})();
