// 角色数据
const characters = [
    { name: "余晖烁烁", image: "sunset_shimmer.jpg", link: "https://wen20070723.github.io/SunsetShimmer/" },
    { name: "暮光闪闪", image: "twilight_sparkle.jpg", link: "https://wen20070723.github.io/TwilightSparkle/" },
    { name: "音韵公主", image: "princess_cadence.jpg", link: "https://wen20070723.github.io/princessCadance/" },
    { name: "星光熠熠", image: "starlight_glimmer.jpg", link: "https://wen20070723.github.io/StarlightGlimmer/" }
];

// 渲染角色列表
function renderCharacters(charactersToRender) {
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = charactersToRender.map(character => `
    <div class="character" onclick="window.location.href='${character.link}'">
      <img src="images/${character.image}" alt="${character.name}">
      <p>${character.name}</p>
    </div>
  `).join('');
}

// 初始化渲染所有角色
renderCharacters(characters);

// 搜索功能
document.getElementById('searchInput').addEventListener('input', function() {
    const query = this.value.toLowerCase();
    const filteredCharacters = characters.filter(character =>
        character.name.toLowerCase().includes(query)
    );
    renderCharacters(filteredCharacters);
});