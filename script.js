const productGrid = document.getElementById("productGrid");
const searchInput = document.getElementById("searchInput");




let products = [
    { name: "RGB Tower Speaker 4 Woofer", price: 850, category: "appliances", image: "images/sound.jpg"},
    { name: "Bluetooth Party Speaker", price: 700, category: "appliances", image: "images/sound3.jpg" },
    { name: "DJ Bass Speaker 12 Inch", price: 500, category: "appliances", image: "images/sound4.jpg" },
    { name: "Home Theater System 5.1", price: 900, category: "appliances", image: "images/sound2.jpg" },
    { name: "Portable Mini Speaker", price: 200, category: "appliances", image: "images/sound5.jpg" },

    { name: "LED Emergency Light", price: 200, category: "lighting", image: "images/light.jpg" },
    { name: "LED Bulb 9W", price: 50, category: "lighting", image: "images/bulb12w.jpg" },
    { name: "LED Tube Light 20W", price: 100, category: "lighting", image: "images/tubelight.jpg" },
    { name: "RGB Strip Light 5 Meter", price: 100, category: "lighting", image: "images/rgbstrip.jpg" },
    { name: "Laser bike light", price: 100, category: "lighting", image: "images/solarstreet.jpg" },

    { name: " Pliers", price: 15, category: "tools", image: "images/drill.jpg" },
    { name: "Nose Pliers", price: 80, category: "tools", image: "images/grinder.jpg" },
    { name: "Soldering Iron 25W", price: 75, category: "tools", image: "images/solderingiron.jpg" },
    { name: "Digital Multimeter", price: 150, category: "tools", image: "images/multimeter.jpg" },
    { name: "Wire Stripper Tool", price: 50, category: "tools", image: "images/wirestripper.jpg" },

    { name: "Celling Fan 48 Inch", price: 1250, category: "appliances", image: "images/fan.jpg" },
    { name: "Table Fan", price: 850, category: "appliances", image: "images/tablefan.jpg" },
    { name: "Room Heater", price: 600, category: "appliances", image: "images/heater.jpg" },
    { name: "Electric Iron", price: 250, category: "appliances", image: "images/iron.jpg" },
    { name: "Mixer Grinder", price: 1600, category: "appliances", image: "images/mixer.jpg" },

    { name: "Extension Board 4 Socket", price: 150, category: "spares", image: "images/extension.jpg" },
    { name: "Electric Switch Board", price: 80, category: "spares", image: "images/switchboard.jpg" },
    { name: "MCB 32A", price: 120, category: "spares", image: "images/mcb.jpg" },
    { name: "PVC Electrical Wire 90m", price: 7, category: "spares", image: "images/wire.jpg" },
    { name: "Plug Top 3 Pin", price: 10, category: "spares", image: "images/plug.jpg" },

    { name: "Smart LED TV 32 Inch", price: 8500, category: "appliances", image: "images/tv32.jpg" },
    { name: "Smart LED TV 43 Inch", price: 12500, category: "appliances", image: "images/tv43.jpg" },
    { name: "Set Top Box", price: 500, category: "appliances", image: "images/setupbox.jpg" },
    { name: "LNB", price: 90, category: "appliances", image: "images/router.jpg" },
    { name: "Dish antenna", price: 450, category: "appliances", image: "images/cctv.jpg" },

    { name: "Inverter 200VA", price: 300, category: "appliances", image: "images/inverter.jpg" },
    { name: "Inverter Battery 35Ah", price: 999, category: "appliances", image: "images/battery.jpg" },
    { name: "Mini battery", price: 40, category: "appliances", image: "images/ups.jpg" },
    { name: "Mobile Charger 18W", price: 220, category: "spares", image: "images/charger.jpg" },
    { name: "Type-C Data Cable", price: 50, category: "spares", image: "images/datacable.jpg" },

   

    { name: "LED Flood Light 50W", price: 350, category: "lighting", image: "images/floodlight.jpg" },
    { name: "Panel Light 15W", price: 60, category: "lighting", image: "images/panellight.jpg" },
    { name: "Night Lamp", price: 200, category: "lighting", image: "images/nightlamp.jpg" },
    { name: "Rechargeable Torch", price: 100, category: "lighting", image: "images/torch.jpg" },
    { name: "Decorative String Lights", price: 90, category: "lighting", image: "images/stringlight.jpg" },

    { name: "Car Bluetooth Speaker", price: 150, category: "appliances", image: "images/fmtransmitter.jpg" },
    { name: "Car mobile charger", price: 150, category: "appliances", image: "images/reversecamera.jpg" },
    { name: "Electric Kettle", price: 950, category: "appliances", image: "images/kettle.jpg" },
    { name: "Induction Cooktop", price: 2100, category: "appliances", image: "images/induction.jpg" },
    { name: " Cooler Water Pump Motor", price: 150, category: "appliances", image: "images/waterpump.jpg" }
    
];

function displayProducts(productList){
    productGrid.innerHTML = "";
    productList.forEach(product => {
        productGrid.innerHTML += `
            <div class="product-card">
                <img src="${product.image}">
                <div class="product-info">
                    <h3>${product.name}</h3>
                    <p class="price">₹${product.price}</p>
                    <a href="https://wa.me/919818231366?text=I want to enquire about ${product.name}" class="whatsapp-btn">Enquire</a>
                </div>
            </div>
        `;
    });
}

function filterProducts(category){
    if(category === "all"){
        displayProducts(products);
    } else {
        displayProducts(products.filter(p => p.category === category));
    }
}

searchInput.addEventListener("keyup", function(){
    const value = this.value.toLowerCase();
    displayProducts(products.filter(p => p.name.toLowerCase().includes(value)));
});

displayProducts(products);