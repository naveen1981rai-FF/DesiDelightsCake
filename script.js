const modal = document.getElementById("orderModal");
const modalImg = document.getElementById("modalImg");
const modalTitle = document.getElementById("modalTitle");
const cakePrices = document.getElementById("cakePrices");
const muffinPrices = document.getElementById("muffinPrices");
const closeBtn = document.querySelector(".close-btn");

// Find all order buttons
const orderButtons = document.querySelectorAll(".order-trigger");

// Add pop-up functionality to gallery images
const galleryImages = document.querySelectorAll(".gallery-item img");

orderButtons.forEach(button => {
    button.addEventListener("click", () => {
        const name = button.getAttribute("data-name");
        const img = button.getAttribute("data-img");
        const type = button.getAttribute("data-type");

        // Set content
        modalTitle.innerText = name;
        modalImg.src = img;

        // Show/Hide relevant prices
        if (type === "cake") {
            cakePrices.style.display = "block";
            muffinPrices.style.display = "none";
        } else {
            cakePrices.style.display = "none";
            muffinPrices.style.display = "block";
        }

        // Show modal
        modal.style.display = "block";
    });
});

// Close when clicking X
closeBtn.onclick = () => {
    modal.style.display = "none";
};

// Close when clicking outside the box
window.onclick = (event) => {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};

galleryImages.forEach(img => {
    img.addEventListener("click", () => {
        // Use the existing modal elements from your previous script
        const modal = document.getElementById("orderModal");
        const modalImg = document.getElementById("modalImg");
        const modalTitle = document.getElementById("modalTitle");
        const cakePrices = document.getElementById("cakePrices");
        const muffinPrices = document.getElementById("muffinPrices");

        modalTitle.innerText = "Our Previous Work";
        modalImg.src = img.src;
        
        // Hide price lists for gallery viewing
        cakePrices.style.display = "none";
        muffinPrices.style.display = "none";
        
        modal.style.display = "block";
    });
});

