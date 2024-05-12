let index = 0;
const intervalTime = 4000;
const aboutFertilizers = document.getElementById('aboutFertilizers');
const toggleButton = document.getElementById('toggleButton');
const popup = document.getElementById('popup');
const popupTitle = document.getElementById('popup-title');
const popupDescription = document.getElementById('popup-description');
const closeBtn = document.getElementById('close');

function showImage(index) {
  const images = document.querySelectorAll('.carousel-images img');
  images.forEach((img, i) => {
    if (i === index) {
      img.style.display = 'block';
    } else {
      img.style.display = 'none';
    }
  });
}

function nextImage() {
  const images = document.querySelectorAll('.carousel-images img');
  index = (index + 1) % images.length;
  showImage(index);
}

function prevImage() {
  const images = document.querySelectorAll('.carousel-images img');
  index = (index - 1 + images.length) % images.length;
  showImage(index);
}

function startCarousel() {
  setInterval(() => {
    nextImage();
  }, intervalTime);
}

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
    const fertilizerTitles = ['Nitrogen Fertilizer', 'Potassium Fertilizer', 'Phosphorus Fertilizer', 'Micronutrient Fertilizer'];
    const fertilizerDescriptions = [
      `Nitrogen fertilizer, while essential for crop growth, has both benefits and drawbacks: 
      Benefits: 
      1.	Promotes Growth: Nitrogen is a crucial component of chlorophyll, essential for photosynthesis, leading to lush foliage and vigorous plant growth. 
      2.	Increases Yield: Adequate nitrogen levels can boost crop yields significantly, especially in nitrogen-deficient soils. 
      3.	Improves Crop Quality: Nitrogen fertilization can enhance the quality of crops by increasing protein content, improving color, and boosting overall market value.  
      
      Here are a few examples of nitrogen fertilizers along with typical quantities used in agriculture: 
      1.	Urea (46-0-0): Urea is one of the most widely used nitrogen fertilizers. It contains 46% nitrogen and is often applied at rates ranging from 50 to 200 kilograms per hectare (kg/ha) depending on crop type, soil conditions, and desired yield. 
      2.	Ammonium Nitrate (34-0-0): Ammonium nitrate contains 34% nitrogen and is commonly used for its quick-release properties. Application rates typically range from 50 to 150 kg/ha. 
      3.	Ammonium Sulfate (21-0-0): Ammonium sulfate provides both nitrogen and sulfur, with nitrogen content around 21%. It's applied at rates of 50 to 200 kg / ha depending on sulfur requirements and soil conditions. 
      4.	Anhydrous Ammonia: Anhydrous ammonia is a gas under standard conditions but is commonly used as a nitrogen fertilizer.It's injected into the soil and applied at rates of around 50 to 200 kg/ha. 
      5.(27 - 0 - 0): Calcium ammonium nitrate contains 27 % nitrogen and is often used for its calcium content as well.Application rates range from 50 to 150 kg / ha. 
      
      Here are some common crop types along with typical quantities of nitrogen fertilizer applied per hectare:
      1.	Corn (Maize): Corn is a nitrogen-hungry crop, and nitrogen fertilizer is often applied at rates ranging from 120 to 250 kilograms per hectare (kg/ha), depending on factors such as soil type, climate, and expected yield.
      2.	Wheat: Wheat typically requires nitrogen fertilization to achieve optimal yields. Nitrogen rates for wheat can vary widely, but common application rates range from 50 to 150 kg/ha, with higher rates for high-yielding varieties and favorable growing conditions.
      3.	Rice: Rice cultivation often involves flooding fields, which can affect nitrogen availability. Nitrogen fertilizer is typically applied at rates of 80 to 200 kg/ha, with adjustments made based on soil fertility, water management practices, and rice variety.
      `,

      `Potassium fertilizer, often referred to as potash, is a type of fertilizer containing potassium, a vital nutrient for plant growth. Potassium is one of the three major nutrients essential for plants, along with nitrogen and phosphorus. It plays a crucial role in various physiological processes within plants, such as photosynthesis, water regulation, enzyme activation, and overall plant health.
      Potassium fertilizers come in various forms, including:
      1.	Potassium chloride (KCl): This is the most commonly used potassium fertilizer. It contains a high percentage of potassium and is relatively inexpensive. However, it can be detrimental to plants if applied in excessive amounts, particularly in soils with low cation exchange capacity (CEC).
      2.	Potassium sulfate (K2SO4): This fertilizer contains both potassium and sulfur, making it a good choice for soils deficient in both nutrients. It is more expensive than potassium chloride but can be beneficial for crops that are sensitive to chloride ions
      3.	Potassium nitrate (KNO3): In addition to potassium, this fertilizer also provides nitrogen. It is water-soluble and suitable for fertigation (application through irrigation systems).
      4.	Potassium magnesium sulfate (K-Mag): This fertilizer contains potassium, magnesium, and sulfur, providing a balanced nutrient profile. It is particularly useful for soils deficient in magnesium.
      
      Here are some common crop types along with typical quantities of potassium fertilizer applied per acre:
      1.	Tomatoes:
              •	Tomatoes require potassium for fruit development and overall plant health.
              •	Depending on soil test results, tomatoes may require around 80-120 pounds of actual potassium per acre, which could be supplied through potassium chloride, potassium sulfate, or other potassium-containing fertilizers.

     2.	Citrus (Oranges, Lemons, etc.):
         •	Citrus crops have moderate to high potassium requirements, particularly for fruit development and quality.
         •	Depending on soil test results, citrus crops may require around 80-120 pounds of actual potassium per acre, which could be supplied through potassium chloride, potassium sulfate, or other potassium-containing fertilizers.
      ...`,

      `Phosphorus fertilizer is a type of fertilizer specifically designed to provide plants with phosphorus, one of the essential nutrients they need for growth and development. Phosphorus is a vital component of nucleic acids, which are the building blocks of DNA and RNA, as well as ATP (adenosine triphosphate), which is the energy currency of cells.
      ,Phosphorus fertilizer typically comes in various forms, including:
      1.	Rock Phosphate: This is a naturally occurring mineral mined from phosphate rock deposits. It's processed into a form that plants can absorb.
      2.	Superphosphate: This is a manufactured fertilizer produced by treating rock phosphate with sulfuric acid or phosphoric acid. Superphosphate is water-soluble and provides an immediate source of phosphorus to plants.
      3.	Triple Superphosphate (TSP): Similar to superphosphate but treated further to increase the concentration of phosphorus. It's also water-soluble and quickly absorbed by plants.
      4.	Monoammonium Phosphate (MAP) and Diammonium Phosphate (DAP): These are water-soluble fertilizers containing phosphorus and nitrogen. They are often used as starter fertilizers because they provide both phosphorus and nitrogen, which are essential for early plant growth.
      5.	Phosphorus in Organic Fertilizers: Organic fertilizers like bone meal, fish meal, and compost also contain phosphorus, although in varying amounts and forms. These materials release phosphorus slowly as they decompose, providing a more long-term source of the nutrient.'
In summary, the quantity of phosphorus fertilizer required should be determined based on crop needs, soil test results, and environmental considerations, with the goal of optimizing plant growth while minimizing environmental impact.
`,


      `Micronutrient fertilizers are formulations designed to provide essential trace elements required for plant growth in small quantities. While macronutrients like nitrogen, phosphorus, and potassium are needed in larger amounts, plants also require micronutrients, such as iron, zinc, copper, manganese, molybdenum, boron, and chlorine, albeit in smaller quantities. These micronutrients are crucial for various biochemical processes within the plant, including enzyme activation, photosynthesis, and nutrient uptake.
      Micronutrient deficiencies can lead to stunted growth, reduced yields, and lower quality produce. Hence, micronutrient fertilizers are used to supplement soil and plant nutrient levels when deficiencies occur. They are available in various forms, including liquid, powder, and granular formulations, and can be applied to crops through soil application, foliar spraying, or fertigation (application through irrigation systems).
      The composition of micronutrient fertilizers varies depending on the specific needs of the crop and the deficiencies identified in the soil. It's essential to carefully assess soil nutrient levels and plant requirements before selecting and applying micronutrient fertilizers to ensure optimal plant health and productivity.
      The quantity of micronutrient fertilizer used in agriculture varies depending on several factors, including:
      1.	Crop Type: Different crops have varying nutrient requirements. For example, certain crops like tomatoes or spinach may have higher demands for specific micronutrients compared to others.
2.	Soil Nutrient Levels: Soil testing helps determine the existing levels of micronutrients in the soil. If the soil is deficient in certain micronutrients, farmers may need to apply more fertilizer to meet the crop's requirements.
3.	Crop Growth Stage: The nutrient requirements of crops change throughout their growth stages. For instance, micronutrient needs may be higher during the early growth stages or during periods of rapid growth and fruit development.
4.	Fertilizer Formulation: Micronutrient fertilizers come in different formulations and concentrations. Farmers must follow manufacturer recommendations and dosage instructions based on the specific product being used.
5.	Application Method: The method of fertilizer application, such as foliar spraying, soil application, or fertigation (application through irrigation), affects the quantity of micronutrient fertilizer needed.
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

