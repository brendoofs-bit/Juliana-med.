const fs = require('fs');
const path = require('path');

const productMapping = {
    'escalibur-mapeamento-tridimensional-medical-san': 'https://res.cloudinary.com/doqw5aqcf/image/upload/v1769022569/equipamento-escalibur_lfgwxq.png',
    'ultramed-9d-medical-san': 'https://res.cloudinary.com/doqw5aqcf/image/upload/v1769001778/ultramed_9d_ozant2.png',
};

for (const [folder, imageUrl] of Object.entries(productMapping)) {
    const indexPath = path.join(folder, 'index.html');
    if (!fs.existsSync(indexPath)) continue;

    let html = fs.readFileSync(indexPath, 'utf8');
    
    // Replace placeholder with actual imageUrl
    // The placeholder is like https://placehold.co/600x400?text=Name
    html = html.replace(/https:\/\/placehold\.co\/600x400\?text=.*?"/g, `${imageUrl}"`);
    html = html.replace(/https:\/\/placehold\.co\/600x400\?text=.*?'/g, `${imageUrl}'`);

    fs.writeFileSync(indexPath, html);
    console.log(`Atualizada imagem de ${folder}`);
}
