/**
 * Copies semantically matched product images from the shared library
 * and downloads editorial Unsplash photography for homepage/category slots.
 * Does not modify the central image library.
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, "..");
const PUBLIC = path.join(ROOT, "public");
const LIBRARY = path.join(
  process.env.HOME,
  "Documents/Ecommerce-Product-Library/images"
);

const COPIES = [
  ["home-living/linen-bedding-set-001.jpg", "products/harbor-linen-bedding-1.jpg"],
  ["home-living/knit-throw-blanket-001.jpg", "products/heathered-wool-throw-1.jpg"],
  ["home-living/wooden-side-table-001.jpg", "products/low-profile-side-table-1.jpg"],
  ["home-living/patterned-woven-rug-001.jpg", "products/woven-wool-area-rug-1.jpg"],
  ["home-living/linen-cushion-cover-001.jpg", "products/soft-linen-cushion-1.jpg"],
  ["home-living/linen-cushion-cover-002.jpg", "products/soft-linen-cushion-2.jpg"],
  ["home-living/accent-armchair-001.jpg", "products/sculptural-accent-chair-1.jpg"],
  ["home-living/storage-box-001.jpg", "products/lidded-linen-storage-box-1.jpg"],

  ["kitchen-dining/stoneware-dinner-plate-001.jpg", "products/stoneware-dinner-plates-1.jpg"],
  ["kitchen-dining/stoneware-dinner-plate-002.jpg", "products/stoneware-dinner-plates-2.jpg"],
  ["kitchen-dining/ceramic-mug-001.jpg", "products/everyday-ceramic-mug-1.jpg"],
  ["kitchen-dining/ceramic-mug-002.jpg", "products/everyday-ceramic-mug-2.jpg"],
  ["kitchen-dining/tea-kettle-001.jpg", "products/brushed-steel-kettle-1.jpg"],
  ["kitchen-dining/wooden-cutting-board-001.jpg", "products/walnut-serving-board-1.jpg"],
  ["kitchen-dining/wooden-cutting-board-002.jpg", "products/walnut-serving-board-2.jpg"],
  ["kitchen-dining/cast-iron-skillet-001.jpg", "products/cast-iron-skillet-1.jpg"],
  ["kitchen-dining/coffee-grinder-001.jpg", "products/manual-coffee-mill-1.jpg"],
  ["kitchen-dining/glass-storage-jar-001.jpg", "products/glass-pantry-jars-1.jpg"],
  ["kitchen-dining/glass-storage-jar-002.jpg", "products/glass-pantry-jars-2.jpg"],
  ["kitchen-dining/kitchen-scale-001.jpg", "products/precision-kitchen-scale-1.jpg"],
  ["kitchen-dining/cutlery-set-001.jpg", "products/satin-flatware-set-1.jpg"],

  ["kitchen-dining/wine-glass-001.jpg", "products/stemmed-wine-glasses-1.jpg"],
  ["home-living/decorative-serving-tray-001.jpg", "products/wood-serving-tray-1.jpg"],
  ["kitchen-dining/serving-bowl-001.jpg", "products/generous-serving-bowl-1.jpg"],
  ["gifts-lifestyle/chess-set-001.jpg", "products/travel-chess-set-1.jpg"],
  ["gifts-lifestyle/playing-cards-001.jpg", "products/linen-playing-cards-1.jpg"],
  ["gifts-lifestyle/pour-over-coffee-set-001.jpg", "products/pour-over-coffee-set-1.jpg"],
  ["gifts-lifestyle/tea-gift-set-001.jpg", "products/afternoon-tea-set-1.jpg"],
  ["kitchen-dining/salt-pepper-shakers-001.jpg", "products/stone-shaker-set-1.jpg"],

  ["outdoor/camping-hammock-001.jpg", "products/canvas-garden-hammock-1.jpg"],
  ["outdoor/camping-hammock-002.jpg", "products/canvas-garden-hammock-2.jpg"],
  ["outdoor/picnic-blanket-001.jpg", "products/outdoor-picnic-blanket-1.jpg"],
  ["outdoor/picnic-blanket-002.jpg", "products/outdoor-picnic-blanket-2.jpg"],
  ["outdoor/picnic-basket-001.jpg", "products/wicker-picnic-hamper-1.jpg"],
  ["outdoor/fire-pit-001.jpg", "products/terrace-fire-bowl-1.jpg"],
  ["outdoor/watering-can-001.jpg", "products/enamel-watering-can-1.jpg"],
  ["outdoor/garden-tools-001.jpg", "products/garden-hand-tools-1.jpg"],
  ["outdoor/bird-feeder-001.jpg", "products/cedar-bird-feeder-1.jpg"],

  ["travel-bags/weekender-duffel-bag-001.jpg", "products/soft-weekender-duffel-1.jpg"],
  ["travel-bags/vintage-travel-suitcase-001.jpg", "products/structured-travel-case-1.jpg"],
  ["travel-bags/vintage-travel-suitcase-002.jpg", "products/structured-travel-case-2.jpg"],
  ["travel-bags/travel-backpack-001.jpg", "products/daily-travel-backpack-1.jpg"],
  ["travel-bags/travel-backpack-002.jpg", "products/daily-travel-backpack-2.jpg"],
  ["kitchen-dining/insulated-travel-tumbler-001.jpg", "products/insulated-travel-tumbler-1.jpg"],
  ["travel-bags/beach-bag-001.jpg", "products/canvas-market-tote-1.jpg"],
  ["travel-bags/luggage-tag-001.jpg", "products/leather-luggage-tag-1.jpg"],
  ["travel-bags/crossbody-bag-001.jpg", "products/crossbody-day-bag-1.jpg"],
  ["travel-bags/crossbody-bag-002.jpg", "products/crossbody-day-bag-2.jpg"],

  ["apparel/knit-sweater-001.jpg", "products/fine-knit-crew-sweater-1.jpg"],
  ["apparel/knit-sweater-002.jpg", "products/fine-knit-crew-sweater-2.jpg"],
  ["apparel/casual-overshirt-001.jpg", "products/washed-cotton-overshirt-1.jpg"],
  ["apparel/cotton-tshirt-001.jpg", "products/everyday-cotton-tee-1.jpg"],
  ["apparel/cotton-tshirt-002.jpg", "products/everyday-cotton-tee-2.jpg"],
  ["apparel/casual-shorts-001.jpg", "products/relaxed-cotton-shorts-1.jpg"],
  ["apparel/rain-jacket-001.jpg", "products/packable-rain-jacket-1.jpg"],
  ["apparel/cotton-trousers-001.jpg", "products/cotton-everyday-trousers-1.jpg"],

  ["accessories/sunglasses-001.jpg", "products/polarized-everyday-sunglasses-1.jpg"],
  ["accessories/sunglasses-002.jpg", "products/polarized-everyday-sunglasses-2.jpg"],
  ["accessories/leather-wallet-001.jpg", "products/slim-leather-wallet-1.jpg"],
  ["accessories/leather-wallet-002.jpg", "products/slim-leather-wallet-2.jpg"],
  ["accessories/wool-scarf-001.jpg", "products/soft-wool-wrap-1.jpg"],
  ["accessories/leather-belt-001.jpg", "products/classic-leather-belt-1.jpg"],
  ["accessories/wristwatch-001.jpg", "products/quiet-wristwatch-1.jpg"],
  ["accessories/wristwatch-002.jpg", "products/quiet-wristwatch-2.jpg"],
  ["accessories/gloves-001.jpg", "products/leather-everyday-gloves-1.jpg"],

  ["gifts-lifestyle/bath-towel-set-001.jpg", "products/cotton-bath-towel-set-1.jpg"],
  ["gifts-lifestyle/scented-candle-001.jpg", "products/scented-soy-candle-1.jpg"],
  ["gifts-lifestyle/scented-candle-002.jpg", "products/scented-soy-candle-2.jpg"],
  ["gifts-lifestyle/soap-bar-set-001.jpg", "products/botanical-soap-set-1.jpg"],
  ["gifts-lifestyle/perfume-bottle-001.jpg", "products/quiet-eau-de-parfum-1.jpg"],
  ["gifts-lifestyle/grooming-kit-001.jpg", "products/travel-grooming-kit-1.jpg"],
  ["home-living/reed-diffuser-001.jpg", "products/reed-home-diffuser-1.jpg"],
  ["gifts-lifestyle/gift-box-001.jpg", "products/linen-gift-box-1.jpg"],
  ["gifts-lifestyle/gift-box-002.jpg", "products/linen-gift-box-2.jpg"],

  ["fitness-wellness/yoga-mat-001.jpg", "products/studio-yoga-mat-1.jpg"],
  ["fitness-wellness/yoga-mat-002.jpg", "products/studio-yoga-mat-2.jpg"],
  ["fitness-wellness/yoga-block-001.jpg", "products/cork-yoga-block-1.jpg"],
  ["fitness-wellness/foam-roller-001.jpg", "products/recovery-foam-roller-1.jpg"],
  ["fitness-wellness/aluminium-sports-bottle-001.jpg", "products/insulated-sports-flask-1.jpg"],

  ["home-living/ceramic-table-lamp-001.jpg", "products/ceramic-table-lamp-1.jpg"],
  ["home-living/ceramic-table-lamp-002.jpg", "products/ceramic-table-lamp-2.jpg"],
  ["home-living/arc-floor-lamp-001.jpg", "products/arc-floor-lamp-1.jpg"],
  ["outdoor/camping-lantern-001.jpg", "products/patio-lantern-1.jpg"],
  ["outdoor/camping-lantern-002.jpg", "products/patio-lantern-2.jpg"],

  ["home-living/ceramic-vase-001.jpg", "products/stoneware-vase-1.jpg"],
  ["home-living/ceramic-vase-002.jpg", "products/stoneware-vase-2.jpg"],
  ["home-living/ceramic-plant-pot-001.jpg", "products/ceramic-planter-1.jpg"],
  ["home-living/ceramic-plant-pot-002.jpg", "products/ceramic-planter-2.jpg"],
  ["home-living/art-print-001.jpg", "products/limited-art-print-1.jpg"],
  ["home-living/round-wall-mirror-001.jpg", "products/round-wall-mirror-1.jpg"],
  ["home-living/minimal-wall-clock-001.jpg", "products/quiet-wall-clock-1.jpg"],
  ["home-living/glass-bud-vase-001.jpg", "products/glass-bud-vase-1.jpg"],
  ["home-living/glass-bud-vase-002.jpg", "products/glass-bud-vase-2.jpg"],
  ["home-living/brass-candle-holder-001.jpg", "products/brass-candle-holder-1.jpg"],

  ["office-desk/hardcover-notebook-001.jpg", "products/clothbound-notebook-1.jpg"],
  ["office-desk/hardcover-notebook-002.jpg", "products/clothbound-notebook-2.jpg"],
  ["office-desk/fountain-pen-001.jpg", "products/fountain-pen-1.jpg"],
  ["office-desk/weekly-planner-001.jpg", "products/weekly-desk-planner-1.jpg"],
  ["office-desk/laptop-stand-001.jpg", "products/aluminum-laptop-stand-1.jpg"],
  ["electronics/clip-desk-light-001.jpg", "products/clip-desk-light-1.jpg"],
  ["office-desk/pen-holder-001.jpg", "products/ceramic-pen-cup-1.jpg"],
  ["electronics/bluetooth-speaker-001.jpg", "products/compact-room-speaker-1.jpg"],
  ["electronics/bluetooth-speaker-002.jpg", "products/compact-room-speaker-2.jpg"],
  ["electronics/e-reader-001.jpg", "products/compact-e-reader-1.jpg"],

  ["home-living/woven-storage-basket-001.jpg", "products/seagrass-storage-basket-1.jpg"],
  ["home-living/woven-storage-basket-002.jpg", "products/seagrass-storage-basket-2.jpg"],
  ["home-living/coat-hooks-001.jpg", "products/entryway-coat-hooks-1.jpg"],
  ["home-living/laundry-hamper-001.jpg", "products/woven-laundry-hamper-1.jpg"],
];

const EDITORIAL = [
  { id: "photo-1600585154340-be6161a56a0c", file: "hero/hero-1.jpg", width: 2400 },
  { id: "photo-1600210492486-724fe5c67fb0", file: "banners/lifestyle-living.jpg", width: 2000 },
  { id: "photo-1600585152915-d208bec867a1", file: "banners/home-entertaining.jpg", width: 2000 },
  { id: "photo-1600607687644-c7171b42498b", file: "banners/seasonal.jpg", width: 2000 },
  { id: "photo-1600566753190-17fedebaa088", file: "banners/about.jpg", width: 1800 },
  { id: "photo-1600596542815-ffad4c1539a9", file: "banners/promo.jpg", width: 2000 },
  { id: "photo-1616486338812-3dadae4b4ace", file: "banners/philosophy.jpg", width: 1800 },
  { id: "photo-1586023496775-813d975d5192", file: "categories/home.jpg", width: 1200 },
  { id: "photo-1556912173-46c336c7fd55", file: "categories/kitchen-dining.jpg", width: 1200 },
  { id: "photo-1414235077428-338989a2e8c0", file: "categories/entertaining.jpg", width: 1200 },
  { id: "photo-1600210492493-94cb1735e002", file: "categories/outdoor-living.jpg", width: 1200 },
  { id: "photo-1469854523086-cc02fe5d8800", file: "categories/travel.jpg", width: 1200 },
  { id: "photo-1489987707025-afc232f7ea05", file: "categories/apparel.jpg", width: 1200 },
  { id: "photo-1523170335258-f5ed11844a49", file: "categories/accessories.jpg", width: 1200 },
  { id: "photo-1608571423902-eed4a9abfcfb", file: "categories/personal-essentials.jpg", width: 1200 },
  { id: "photo-1544367567-0f2fcb009e0b", file: "categories/fitness-wellness.jpg", width: 1200 },
  { id: "photo-1507473885765-e6ed557facc6", file: "categories/lighting.jpg", width: 1200 },
  { id: "photo-1513519245088-0e12902e35ca", file: "categories/decor.jpg", width: 1200 },
  { id: "photo-1497215728101-856f4ea42174", file: "categories/workspace.jpg", width: 1200 },
  { id: "photo-1512917774080-9991f1c4c750", file: "banners/featured-home.jpg", width: 1800 },
  { id: "photo-1501183638710-841dd1904471", file: "banners/editorial-showcase.jpg", width: 1800 },
];

function unsplashUrl(photoId, width) {
  return `https://images.unsplash.com/${photoId}?fm=jpg&q=85&w=${width}&auto=format&fit=crop`;
}

async function download(url) {
  const res = await fetch(url, {
    headers: { "User-Agent": "SummitShore/1.0 (editorial-images)" },
    redirect: "follow",
  });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  const buf = Buffer.from(await res.arrayBuffer());
  if (buf.length < 5000) throw new Error("File too small");
  return buf;
}

function copyFile(srcRel, destRel) {
  const src = path.join(LIBRARY, srcRel);
  const dest = path.join(PUBLIC, destRel);
  if (!fs.existsSync(src)) throw new Error(`Missing library file: ${srcRel}`);
  fs.mkdirSync(path.dirname(dest), { recursive: true });
  fs.copyFileSync(src, dest);
}

async function main() {
  if (!fs.existsSync(LIBRARY)) {
    throw new Error(`Image library not found at ${LIBRARY}`);
  }

  let copied = 0;
  for (const [src, dest] of COPIES) {
    copyFile(src, dest);
    copied++;
    console.log(`copied ${dest}`);
  }

  let downloaded = 0;
  let failed = 0;
  for (const item of EDITORIAL) {
    const dest = path.join(PUBLIC, item.file);
    fs.mkdirSync(path.dirname(dest), { recursive: true });
    try {
      const buf = await download(unsplashUrl(item.id, item.width));
      fs.writeFileSync(dest, buf);
      downloaded++;
      console.log(`downloaded ${item.file} ← ${item.id}`);
    } catch (err) {
      failed++;
      console.error(`failed ${item.file}: ${err.message}`);
    }
  }

  console.log(`\nCopied ${copied} product images. Downloaded ${downloaded} editorial images. Failed ${failed}.`);
  if (failed > 0) process.exit(1);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
