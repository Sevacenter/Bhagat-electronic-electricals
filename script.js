const productGrid = document.getElementById("productGrid");
const searchInput = document.getElementById("searchInput");




let products = [
    { name: "RGB Tower Speaker 4 Woofer", price: 5999, category: "appliances", image: "images/sound.jpg"},
    { name: "Bluetooth Party Speaker", price: 6500, category: "appliances", image: "images/sound3.jpg" },
    { name: "DJ Bass Speaker 12 Inch", price: 9800, category: "appliances", image: "images/sound4.jpg" },
    { name: "Home Theater System 5.1", price: 15500, category: "appliances", image: "images/sound2.jpg" },
    { name: "Portable Mini Speaker", price: 1500, category: "appliances", image: "images/minispeaker.jpg" },

    { name: "LED Emergency Light", price: 1200, category: "lighting", image: "images/emergencylight.jpg" },
    { name: "LED Bulb 12W", price: 120, category: "lighting", image: "images/bulb12w.jpg" },
    { name: "LED Tube Light 20W", price: 350, category: "lighting", image: "images/tubelight.jpg" },
    { name: "RGB Strip Light 5 Meter", price: 800, category: "lighting", image: "images/rgbstrip.jpg" },
    { name: "Solar Street Light", price: 7500, category: "lighting", image: "images/solarstreet.jpg" },

    { name: "Electric Drill Machine", price: 2500, category: "tools", image: "images/drill.jpg" },
    { name: "Angle Grinder Machine", price: 3200, category: "tools", image: "images/grinder.jpg" },
    { name: "Soldering Iron 25W", price: 450, category: "tools", image: "images/solderingiron.jpg" },
    { name: "Digital Multimeter", price: 650, category: "tools", image: "images/multimeter.jpg" },
    { name: "Wire Stripper Tool", price: 350, category: "tools", image: "images/wirestripper.jpg" },

    { name: "Ceiling Fan 48 Inch", price: 2200, category: "appliances", image: "images/fan.jpg" },
    { name: "Table Fan", price: 1800, category: "appliances", image: "images/tablefan.jpg" },
    { name: "Room Heater", price: 2000, category: "appliances", image: "images/heater.jpg" },
    { name: "Electric Iron", price: 1100, category: "appliances", image: "images/iron.jpg" },
    { name: "Mixer Grinder", price: 3500, category: "appliances", image: "images/mixer.jpg" },

    { name: "Extension Board 4 Socket", price: 450, category: "spares", image: "images/extension.jpg" },
    { name: "Electric Switch Board", price: 300, category: "spares", image: "images/switchboard.jpg" },
    { name: "MCB 32A", price: 280, category: "spares", image: "images/mcb.jpg" },
    { name: "PVC Electrical Wire 90m", price: 1800, category: "spares", image: "images/wire.jpg" },
    { name: "Plug Top 3 Pin", price: 60, category: "spares", image: "images/plug.jpg" },

    { name: "Smart LED TV 32 Inch", price: 14500, category: "appliances", image: "images/tv32.jpg" },
    { name: "Smart LED TV 43 Inch", price: 23500, category: "appliances", image: "images/tv43.jpg" },
    { name: "Set Top Box", price: 1500, category: "appliances", image: "images/setupbox.jpg" },
    { name: "WiFi Router", price: 2200, category: "appliances", image: "images/router.jpg" },
    { name: "CCTV Camera HD", price: 1200, category: "appliances", image: "images/cctv.jpg" },

    { name: "Inverter 850VA", price: 5500, category: "appliances", image: "images/inverter.jpg" },
    { name: "Inverter Battery 150Ah", price: 11500, category: "appliances", image: "images/battery.jpg" },
    { name: "UPS for Computer", price: 3200, category: "appliances", image: "images/ups.jpg" },
    { name: "Mobile Charger 18W", price: 350, category: "spares", image: "images/charger.jpg" },
    { name: "Type-C Data Cable", price: 180, category: "spares", image: "images/datacable.jpg" },

    { name: "Bluetooth Headphones", price: 1200, category: "appliances", image: "images/headphones.jpg" },
    { name: "Wired Earphones", price: 250, category: "appliances", image: "images/earphones.jpg" },
    { name: "Power Bank 10000mAh", price: 950, category: "appliances", image: "images/powerbank.jpg" },
    { name: "Laptop Cooling Pad", price: 750, category: "appliances", image: "images/coolingpad.jpg" },
    { name: "Keyboard + Mouse Combo", price: 850, category: "appliances", image: "images/keyboardmouse.jpg" },

    { name: "LED Flood Light 50W", price: 900, category: "lighting", image: "images/floodlight.jpg" },
    { name: "Panel Light 15W", price: 450, category: "lighting", image: "images/panellight.jpg" },
    { name: "Night Lamp", price: 250, category: "lighting", image: "images/nightlamp.jpg" },
    { name: "Rechargeable Torch", price: 600, category: "lighting", image: "images/torch.jpg" },
    { name: "Decorative String Lights", price: 300, category: "lighting", image: "images/stringlight.jpg" },

    { name: "Car Bluetooth FM Transmitter", price: 650, category: "appliances", image: "images/fmtransmitter.jpg" },
    { name: "Car Reverse Camera", price: 1800, category: "appliances", image: "images/reversecamera.jpg" },
    { name: "Electric Kettle", price: 1200, category: "appliances", image: "images/kettle.jpg" },
    { name: "Induction Cooktop", price: 2500, category: "appliances", image: "images/induction.jpg" },
    { name: "Water Pump Motor 1HP", price: 6500, category: "appliances", image: "images/waterpump.jpg" }
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
                    <a href="https://wa.me/918795391467?text=I want to enquire about ${product.name}" class="whatsapp-btn">Enquire</a>
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