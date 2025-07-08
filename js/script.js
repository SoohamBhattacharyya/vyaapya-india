// Full product array with categories added
const products = [
  { name: "Idli Rice", img: "images/idlirice.jpeg", desc: "Short-grain, parboiled rice ideal for idlis.", category: "Grains" },
  { name: "Sona Mansoori Rice", img: "images/sonamansooririce.webp", desc: "Lightweight, aromatic rice widely used in South India.", category: "Grains" },
  { name: "Kolam Rice", img: "images/kolamrice.webp", desc: "Medium-grain, soft-textured rice perfect for daily meals.", category: "Grains" },
  { name: "Jeera Kasala Rice", img: "images/jeerakasala.jpg", desc: "Short-grain, aromatic rice ideal for festive dishes.", category: "Grains" },
  { name: "Onion (Nashik)", img: "images/nashik.jpg", desc: "Firm, reddish-purple onions from Maharashtra with long shelf life.", category: "Vegetables" },
  { name: "Mango", img: "images/mango.jpg", desc: "Juicy, fragrant tropical fruit.", category: "Fruits" },
  { name: "Chickpeas", img: "images/chickpea.jpg", desc: "Protein-rich legumes.", category: "Pulses" },
  { name: "Mustard Seeds", img: "images/mustardseeds.webp", desc: "Essential tempering spice.", category: "Spices" },
  { name: "Jowar", img: "images/jowar.webp", desc: "Gluten-free whole grain.", category: "Grains" },
  { name: "Turmeric", img: "images/turmeric.jpg", desc: "Earthy yellow spice rich in curcumin.", category: "Spices" },
  { name: "Cumin (Whole)", img: "images/cumins.jpg", desc: "Nutty whole spice.", category: "Spices" },
  { name: "Cumin Powder", img: "images/cuminpowder.webp", desc: "Ground cumin spice.", category: "Spices" },
  { name: "Coriander (Whole)", img: "images/coriander.jpg", desc: "Citrusy dried seeds.", category: "Spices" },
  { name: "Coriander Powder", img: "images/corianderpowder.jpg", desc: "Ground coriander spice.", category: "Spices" },
  { name: "Chilli", img: "images/chili.jpg", desc: "Pungent, spicy flavor enhancer.", category: "Spices" },
  { name: "Green Cardamom (Exported)", img: "images/cardamomexported.jpg", desc: "Premium aromatic spice.", category: "Spices" },
  { name: "Green Cardamom (Domestic)", img: "images/cardamomindia.jpg", desc: "Everyday cardamom.", category: "Spices" },
  { name: "Foxnut", img: "images/foxnut.jpg", desc: "Crunchy roasted lotus seeds.", category: "Dry Fruits" },
  { name: "Peanut", img: "images/peanuts.webp", desc: "Nutrient-dense legumes.", category: "Dry Fruits" },
  { name: "Cashew (Whole)", img: "images/cashewwhole.jpg", desc: "Creamy nuts used in sweets.", category: "Dry Fruits" },
  { name: "Cashew (Broken)", img: "images/cashewbroken.jpg", desc: "Affordable cooking cashew.", category: "Dry Fruits" },
  { name: "Fennel Seeds", img: "images/fennelseeds.jpg", desc: "Sweet-tasting digestive seeds.", category: "Spices" },
  { name: "Bayleaf (Tejpatta)", img: "images/bayleaf.jpg", desc: "Fragrant leaf spice.", category: "Spices" },
  { name: "Lakadong Turmeric", img: "images/lakadongturmeric.jpg", desc: "High-curcumin turmeric.", category: "Spices" },
  { name: "Naga King Chilli", img: "images/nagakingchilli.jpg", desc: "Extremely hot chilli.", category: "Spices" },
  { name: "Ginger (Nadia & Ing Makhir)", img: "images/makhirginger.jpg", desc: "Aromatic ginger roots.", category: "Spices" },
  { name: "Black Pepper", img: "images/blackpepper.jpg", desc: "Classic spice for flavor.", category: "Spices" },
  { name: "Large Cardamom", img: "images/largecardamom.jpg", desc: "Smoky spice pods.", category: "Spices" },
  { name: "Star Anise", img: "images/staranise.jpg", desc: "Licorice-flavored spice.", category: "Spices" },
  { name: "Sichuan Pepper", img: "images/sichuanpepper.jpg", desc: "Tongue-tingling spice.", category: "Spices" },
  { name: "Black Turmeric", img: "images/blackturmeric.jpg", desc: "Rare root with medicinal use.", category: "Spices" },
  { name: "Black Ginger", img: "images/blackginger.jpg", desc: "Energy-boosting root.", category: "Spices" },
  { name: "Cinnamon", img: "images/cinnamon.jpg", desc: "Sweet and warm spice.", category: "Spices" },
  { name: "Long Pepper (Pipalli)", img: "images/longpipali.jpg", desc: "Ancient pungent spice.", category: "Spices" },
  { name: "Stone Flower", img: "images/stoneflower.jpg", desc: "Unique spice lichen.", category: "Spices" },
  { name: "Black Rice", img: "images/blackrice.jpg", desc: "Nutty antioxidant rice.", category: "Grains" },
  { name: "Red Rice", img: "images/redrice.jpg", desc: "Earthy high-fiber rice.", category: "Grains" }
];


const container = document.querySelector(".product-grid");
const searchInput = document.getElementById("searchBar");
let itemsPerPage = 12;
let currentPage = 1;

function renderProducts(productList) {
  container.innerHTML = "";
  const start = (currentPage - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  const pageItems = productList.slice(start, end);

  pageItems.forEach(p => {
    const card = document.createElement("div");
    card.className = "product-card";
    card.innerHTML = `
      <div data-aos="zoom-in">
        <img src="${p.img}" alt="${p.name}" />
        <h3>${p.name}</h3>
        <p>${p.desc}</p>
      </div>
    `;
    container.appendChild(card);
  });
}

function setupPagination(productList) {
  const totalPages = Math.ceil(productList.length / itemsPerPage);
  const footer = document.querySelector("footer");
  let pagination = document.getElementById("pagination");
  if (!pagination) {
    pagination = document.createElement("div");
    pagination.id = "pagination";
    pagination.style.margin = "30px auto";
    pagination.style.textAlign = "center";
    footer.before(pagination);
  }
  pagination.innerHTML = "";
  for (let i = 1; i <= totalPages; i++) {
    const btn = document.createElement("button");
    btn.textContent = i;
    btn.className = "pagination-btn";
    btn.onclick = () => {
      currentPage = i;
      renderProducts(filtered);
    };
    pagination.appendChild(btn);
  }
}

// Filter by category + search
let filtered = products;
function filterProducts() {
  const searchQuery = searchInput.value.toLowerCase();
  const selectedCategory = document.getElementById("categoryFilter").value;
  filtered = products.filter(p =>
    (p.name.toLowerCase().includes(searchQuery) || p.desc.toLowerCase().includes(searchQuery)) &&
    (selectedCategory === "All" || p.category === selectedCategory)
  );
  currentPage = 1;
  renderProducts(filtered);
  setupPagination(filtered);
}

searchInput.addEventListener("input", filterProducts);
document.getElementById("categoryFilter").addEventListener("change", filterProducts);

renderProducts(products);
setupPagination(products);
