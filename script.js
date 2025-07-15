// Step 1: Array of users
const users = [
  { name: "Nikita Tanwar", branch: "CSE", email: "nikita@jecrc.com", year: 2025 },
  { name: "Pratiksha Agarwal", branch: "ECE", email: "pratiksha@jecrc.com", year: 2024 },
  { name: "Ramta Chhipa", branch: "IT", email: "ramta@jecrc.com", year: 2023 },
  { name: "Navya Gupta", branch: "CSE", email: "navya@jecrc.com", year: 2025 },
  { name: "Riya Jain", branch: "ME", email: "riya@jecrc.com", year: 2022 },
  { name: "Ritika Pareek", branch: "CSE", email: "ritika@jecrc.com", year: 2023 }
];

// Step 2: Get elements
const userList = document.getElementById("userList");
const searchInput = document.getElementById("searchInput");

// Step 3: Function to display user cards
function showUsers(userArray) {
  userList.innerHTML = ""; // Clear previous list

  userArray.forEach(user => {
    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
      <h3>${user.name}</h3>
      <p><strong>Branch:</strong> ${user.branch}</p>
      <p><strong>Email:</strong> ${user.email}</p>
      <p><strong>Year:</strong> ${user.year}</p>
    `;

    userList.appendChild(card);
  });
}

// Step 4: Show all users initially
showUsers(users);

// Step 5: Search functionality
searchInput.addEventListener("input", () => {
  const searchValue = searchInput.value.toLowerCase();

  const filtered = users.filter(user =>
    user.name.toLowerCase().includes(searchValue) ||
    user.branch.toLowerCase().includes(searchValue)
  );

  showUsers(filtered);
});

// Step 6: Sort by year
function sortByYear() {
  const sorted = [...users].sort((a, b) => a.year - b.year);
  showUsers(sorted);
}
