let index = 0;
const intervalTime = 4000;
const images = document.querySelectorAll('.carousel-images img');
const aboutFertilizers = document.getElementById('aboutorganic_farm');
const toggleButton = document.getElementById('toggleButton');
const popup = document.getElementById('popup');
const popupTitle = document.getElementById('popup-title');
const popupDescription = document.getElementById('popup-description');
const closeBtn = document.getElementById('close');

function showImage(index) {
    images.forEach((img, i) => {
        img.style.display = i === index ? 'block' : 'none';
    });
}

function nextImage() {
    index = (index + 1) % images.length;
    showImage(index);
}

function prevImage() {
    index = (index - 1 + images.length) % images.length;
    showImage(index);
}

function startCarousel() {
    setInterval(nextImage, intervalTime);
}

images.forEach((img, i) => {
    img.addEventListener('click', () => {
        index = i;
        showImage(index);
    });
});

showImage(index);
startCarousel();

toggleButton.addEventListener('click', function () {
    if (aboutFertilizers.classList.contains('hidden')) {
        aboutFertilizers.classList.remove('hidden');
        toggleButton.textContent = 'See less';
    } else {
        aboutFertilizers.classList.add('hidden');
        toggleButton.textContent = 'Know More';
    }
});

document.querySelectorAll('.bg_div img').forEach((img, index) => {
    img.addEventListener('click', () => {
        const fertilizerTitles = ['Vermicompost', 'Manures', 'Biofertilizers', 'Animal Husbandary','Crop rotation','Biological Management'];
        const fertilizerDescriptions = [
            `Vermicompost:
            Vermicompost, also known as worm compost or worm castings,
             is a nutrient-rich organic fertilizer and soil amendment produced through the process of composting organic materials with the help of worms, 
             typically species like Eisenia fetida or Lumbricus rubellus. 
             Vermicomposting harnesses the natural decomposition abilities of worms to break down organic matter into a nutrient-dense form that is beneficial for plants and soil.
             These worm castings are highly beneficial for soil health and plant growth, as they contain essential nutrients like nitrogen, phosphorus, potassium, and micronutrients, as well as beneficial microorganisms. Vermicompost improves soil structure, increases water retention, enhances microbial activity, and promotes healthy plant growth. It's often used in organic gardening, farming, and landscaping as a sustainable and eco-friendly alternative to chemical fertilizers.
             Vermicomposting involves feeding organic waste materials to worms in a controlled environment. Red wigglers or earthworms are the most commonly used species for vermicomposting due to their ability to process large amounts of organic matter efficiently. The worms consume the organic waste, breaking it down through their digestive system. As the organic matter passes through the worms, it undergoes chemical and microbial changes, eventually turning into nutrient-rich castings.
             Overall, vermicomposting is a sustainable and eco-friendly method of recycling organic waste while producing valuable fertilizer for plants and improving soil health.
            
        `,

            `Manures: Manures are organic materials, typically of animal or plant origin, that are used to fertilize and improve the soil. They are valuable sources of nutrients and organic matter, which help enhance soil fertility, structure, and overall health.
            Different types of manures:
            Animal Manures: Animal manures come from the waste products of livestock such as cows, pigs, poultry, and sheep.
            Green Manures: Green manures are plant materials, such as legumes or cover crops, that are grown specifically to be incorporated into the soil.
            Compost: Compost is a mixture of organic materials, including kitchen scraps, yard waste, and manures, that have decomposed into a nutrient-rich soil amendment.
            Fertilizer Manures: Some manures are processed into concentrated forms of organic fertilizer. These may include pelletized or dried forms of animal manures, which can be easier to handle and apply than raw manure.
            Benefits: Manures offer several benefits for soil health and plant growth, including:

            Nutrient Supply: They provide essential nutrients for plant growth, promoting healthy development.
            Soil Amendment: Manures improve soil structure, texture, and water retention capacity, leading to better aeration and drainage.
            Microbial Activity: They enhance microbial activity in the soil, promoting the decomposition of organic matter and nutrient cycling.
            pH Regulation: Some manures, like cow and sheep manure, have a neutral to slightly alkaline pH, which can help balance acidic soils.

        ...`,

            `Biofertilizers play a significant role in organic farming by providing a sustainable and environmentally friendly alternative to synthetic fertilizers. Here's an overview of biofertilizers and their applications in organic farming:
            Biofertilizers are biological agents containing living microorganisms, such as bacteria, fungi, or algae, that enhance nutrient availability and uptake by plants. They work symbiotically with plants, promoting growth and improving soil fertility.
            Types of Biofertilizers:

            Nitrogen-fixing Biofertilizers: These biofertilizers contain nitrogen-fixing bacteria, such as Rhizobium, Azotobacter, and Azospirillum, which convert atmospheric nitrogen into a form that plants can use.
            Phosphate-solubilizing Biofertilizers: Phosphate-solubilizing microorganisms, like certain strains of bacteria and fungi, release phosphorus from insoluble soil minerals, making it available to plants.
            Potassium-mobilizing Biofertilizers: Some microorganisms, such as Bacillus spp., help mobilize potassium from soil minerals, improving its uptake by plants.
            Mycorrhizal Biofertilizers: Mycorrhizal fungi form symbiotic relationships with plant roots, enhancing nutrient and water uptake, particularly phosphorus.
            Benefits:
                Improved Nutrient Availability: Biofertilizers enhance the availability of essential nutrients to plants, promoting healthy growth and development.
                Reduced Reliance on Chemical Fertilizers: Using biofertilizers reduces the need for synthetic fertilizers, thus minimizing environmental pollution and reducing production costs.
                Enhanced Soil Health: Biofertilizers contribute to soil health by increasing microbial activity, improving soil structure, and promoting nutrient cycling.
                Sustainable Agriculture: Biofertilizers support sustainable agricultural practices by reducing dependence on non-renewable resources and minimizing environmental degradation.
                Application in Organic Farming:
             Seed Treatment: Biofertilizers can be applied to seeds as seed coatings or seed treatments to enhance germination, root development, and early seedling growth.
             Soil Application: Biofertilizers are applied to the soil either directly or through irrigation systems to inoculate the soil with beneficial microorganisms. This improves soil fertility and plant nutrient uptake over time.
             Foliar Spray: In some cases, biofertilizers are applied as foliar sprays to provide nutrients directly to the leaves and promote plant growth and vigor.
           `,

            `Animal husbandary : Animal husbandry refers to the branch of agriculture concerned with the breeding, care, and management of domestic animals for various purposes, including food production, fiber, labor, and companionship. It encompasses a wide range of practices aimed at ensuring the health, welfare, and productivity of livestock.
            key aspects of animal husbandry:
            Breeding and Genetics
            Housing and Facilities
            Nutrition and Feeding
            Health Management
            Reproduction and Reproductive Management
            Handling and Behavior
            Waste Management
            Animal husbandry practices vary widely depending on factors such as species, geographic location, production system, and cultural preferences. Sustainable and ethical animal husbandry practices prioritize the welfare of animals, environmental stewardship, and social responsibility while meeting the needs of producers, consumers, and society as a whole. 
            Animal husbandry can play a crucial role in organic farming by providing several benefits that support the principles and practices of organic agriculture:
             Fertility Management: Livestock in organic farming systems can contribute to soil fertility through the production of manure. Animal manure is a valuable source of organic matter and nutrients, including nitrogen, phosphorus, and potassium, which can enhance soil health and promote crop growth without relying on synthetic fertilizers.
        Nutrient Cycling: Integrating livestock into organic farming allows for the recycling of nutrients within the farm ecosystem. Animals consume forages, crop residues, and other organic materials, converting them into manure that can be returned to the soil as a natural fertilizer. This closed-loop nutrient cycling reduces reliance on external inputs and supports sustainable nutrient management.
        Soil Health: Grazing animals can improve soil structure and fertility through their grazing and trampling activities. Managed grazing systems promote the development of healthy soil microbial communities, enhance soil aggregation, and increase organic matter content, leading to improved soil health and resilience to erosion and degradation.
        Pest and Weed Control: Some livestock species, such as poultry and certain breeds of cattle or goats, can help control pests and weeds in organic farming systems. For example, chickens can forage for insects and weed seeds in crop fields, reducing the need for chemical pesticides and herbicides.
        Diversification and Integration: Integrating livestock into organic farming systems diversifies farm enterprises and income sources, enhancing farm resilience and sustainability. Mixed farming systems that combine crop production with livestock grazing or forage production can optimize resource use, minimize environmental impacts, and improve overall farm productivity.         
 `,

     `Crop rotation : Crop rotation is a farming practice where different crops are planted in a sequential and systematic manner on the same land over a period of time. It's a fundamental principle of sustainable agriculture aimed at maintaining soil fertility, managing pests and diseases, and optimizing yields. Common crop rotation systems include alternating between cereals (such as corn, wheat, or barley) and legumes (such as peas or beans), or rotating between different families of vegetables. The specific rotation plan depends on factors such as climate, soil type, cropping system, and farmer's objectives. Overall, crop rotation is a sustainable practice that contributes to long-term agricultural productivity and environmental health.
     Crop rotation is a fundamental practice in organic farming that involves systematically changing the types of crops grown in a particular field over time. This agricultural technique offers several benefits that align with the principles of organic farming.
     Soil Health: Crop rotation helps maintain and improve soil health by reducing soil erosion, minimizing nutrient depletion, and enhancing soil structure and fertility. Different crops have varying root structures, nutrient requirements, and effects on soil microbiology, which contribute to overall soil health when rotated effectively.
     Nutrient Management: Rotating crops with different nutrient requirements helps balance soil fertility and reduce reliance on synthetic fertilizers in organic farming. Nitrogen-fixing legumes, such as peas, beans, and clover, enrich the soil with nitrogen through biological nitrogen fixation, benefiting subsequent crops in the rotation.
     Pest and Disease Management: Crop rotation disrupts pest and disease cycles by reducing the buildup of specific pests and pathogens associated with particular crops. Rotating crops helps break pest life cycles, decreases pest pressure, and reduces the need for chemical pesticides in organic farming. Additionally, certain crops have allelopathic effects that suppress weeds and inhibit the growth of weed seeds in the soil.
     Weed Control: Crop rotation can help manage weeds by disrupting their life cycles and reducing weed seed banks in the soil. Rotating crops with different growth habits, planting densities, and management practices can suppress weed growth and minimize the spread of herbicide-resistant weeds in organic farming systems.
     Water Management: Crop rotation can improve water use efficiency and reduce water-related stress on crops by diversifying root systems, enhancing soil structure, and reducing soil compaction. Deep-rooted crops in the rotation can help break up compacted soil layers, improve water infiltration, and mitigate soil erosion.
     Biodiversity: Crop rotation promotes agricultural biodiversity by diversifying the types of crops grown on a farm. This supports ecosystem resilience, enhances habitat diversity for beneficial organisms, and contributes to the conservation of genetic resources. Biodiversity in organic farming systems can increase ecosystem services, such as pollination, pest control, and soil fertility.
     Economic Viability: Effective crop rotation strategies can improve farm profitability and economic resilience by optimizing resource use, reducing input costs, and enhancing yields and crop quality over time. Rotating high-value crops with complementary market demands can diversify farm income streams and mitigate market risks in organic farming.
     Overall, crop rotation is a key management practice in organic farming that promotes soil health, nutrient management, pest and disease control, weed management, water efficiency, biodiversity, and economic viability. By implementing diverse and strategic crop rotations, organic farmers can enhance the sustainability, productivity, and resilience of their farming systems while minimizing environmental impacts.
      
     `,

     `Biological management, also known as biological control or biocontrol, is an approach to managing pests, diseases, and weeds using natural enemies, such as predators, parasites, pathogens, or competitor organisms. Unlike chemical pesticides, which can have negative effects on human health and the environment, biological management relies on the ecological relationships between organisms to regulate pest populations. Additionally, it is often used as part of an integrated pest management (IPM) approach, which combines multiple pest control strategies to achieve sustainable and effective pest management.
     Biological management, also known as biological control or biocontrol, plays a vital role in organic farming by harnessing the power of natural enemies, beneficial organisms, and ecological processes to manage pests, diseases, and weeds. Here's how biological management contributes to organic farming:
     Natural Pest Control: Biological control agents, such as predators, parasitoids, and pathogens, are used to control pest populations in organic farming systems. These natural enemies feed on or infect pests, reducing their numbers and preventing crop damage. Examples include ladybugs for aphid control, parasitic wasps for caterpillar control, and beneficial nematodes for soil-dwelling pests.
    Microbial Biopesticides: Biopesticides derived from naturally occurring microorganisms, such as bacteria, fungi, and viruses, are used to control pests and diseases in organic farming. Microbial biopesticides target specific pests or pathogens while minimizing harm to non-target organisms and the environment. Examples include Bacillus thuringiensis (Bt) for insect control and Trichoderma spp. for disease suppression.
    Allelopathy and Plant Volatiles: Some crops and plants produce allelopathic compounds or volatile chemicals that repel pests or inhibit their growth. Incorporating allelopathic plants or companion crops with pest-repellent properties into crop rotations or intercropping systems can help manage pests in organic farming without the need for synthetic pesticides.
    Soil Microbiology: Beneficial microorganisms, such as mycorrhizal fungi and rhizobacteria, play essential roles in soil health, nutrient cycling, and plant growth promotion. Harnessing the beneficial interactions between plants and soil microbes can improve crop resilience, nutrient uptake, and pest resistance in organic farming systems.
    Conservation Biological Control: Conservation biological control involves enhancing and preserving natural enemy populations in agricultural landscapes to suppress pest populations. Practices such as providing habitat diversity, maintaining hedgerows, planting flowering plants for pollinators, and reducing pesticide use support beneficial organisms and promote biological pest control in organic farming.
    Trap Cropping and Habitat Management: Trap cropping involves planting specific crops or varieties to attract pests away from main crops, reducing pest damage and the need for chemical controls. Habitat management practices that provide shelter, food, and breeding sites for natural enemies, such as flowering plants for pollinators and insectary plants for beneficial insects, enhance biological control in organic farming systems.
    Integrated Pest Management (IPM): Biological management is a key component of integrated pest management (IPM) strategies in organic farming. IPM combines multiple pest control tactics, including cultural, mechanical, biological, and chemical methods, to minimize pest damage while reducing reliance on synthetic pesticides. Biological management techniques are integrated with other IPM practices to create sustainable and effective pest management solutions in organic farming.
     Overall, biological management plays a critical role in organic farming by providing environmentally friendly and sustainable solutions for pest, disease, and weed management. By harnessing the power of nature's own mechanisms, organic farmers can promote ecological balance, enhance soil health, and produce healthy crops while minimizing environmental impacts and preserving biodiversity.
     `
        ];

        popupTitle.textContent = fertilizerTitles[index];
        popupDescription.textContent = fertilizerDescriptions[index];
        popup.style.display = 'block';
    });
});

closeBtn.addEventListener('click', () => {
    popup.style.display = 'none';
});