import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, "..");

const products = [
  // HOME
  p("p1","harbor-linen-bedding","Harbor Linen Bedding Set","Home","home",["/products/harbor-linen-bedding-1.jpg"],
    "A breathable linen set with a washed, lived-in hand. Designed for cool nights and rooms that catch morning light.",
    ["Washed linen weave","Duvet cover, sham pair, and fitted sheet","Softens with every laundering","Neutral, light-catching tone"],
    { Material: "European flax linen", Includes: "Duvet, 2 shams, fitted sheet", Care: "Machine wash cold", Color: "Ivory" },
    189, 159, 4.8, 214, 42, { badge: "Sale", featured: true, bestseller: true, sku: "SAS-HM-001" }),
  p("p2","heathered-wool-throw","Heathered Wool Throw","Home","home",["/products/heathered-wool-throw-1.jpg"],
    "A substantial knit throw for the end of a sofa or the foot of a bed. Warm without feeling heavy.",
    ["Wool-blend knit","Fringed edge","Year-round weight","Folds compactly for storage"],
    { Material: "Wool blend", Size: "50 × 70 in", Care: "Dry clean", Color: "Heather grey" },
    98, 78, 4.7, 163, 55, { badge: "Sale", featured: true, sku: "SAS-HM-002" }),
  p("p3","low-profile-side-table","Low Profile Side Table","Home","home",["/products/low-profile-side-table-1.jpg"],
    "A compact wood side table with a quiet silhouette. Holds a lamp, a book, and a glass without crowding the room.",
    ["Solid wood top","Low, stable stance","Fits beside lounge seating","Natural grain finish"],
    { Material: "Solid wood", Dimensions: "18 × 18 × 20 in", Finish: "Natural oil", Color: "Warm oak" },
    164, undefined, 4.6, 88, 28, { newArrival: true, sku: "SAS-HM-003" }),
  p("p4","woven-wool-area-rug","Woven Wool Area Rug","Home","home",["/products/woven-wool-area-rug-1.jpg"],
    "A patterned wool rug with a low pile and a grounded palette. Adds texture underfoot without dominating the room.",
    ["Wool pile","Low, even weave","Suitable for living and dining","Subtle geometric pattern"],
    { Material: "Wool", Size: "5 × 8 ft", Pile: "Low", Color: "Sand / charcoal" },
    248, undefined, 4.7, 121, 18, { featured: true, sku: "SAS-HM-004" }),
  p("p5","soft-linen-cushion","Soft Linen Cushion","Home","home",["/products/soft-linen-cushion-1.jpg","/products/soft-linen-cushion-2.jpg"],
    "A linen cushion cover with a relaxed drape. Easy to layer on a sofa, bench, or window seat.",
    ["Stonewashed linen","Hidden zipper","Insert included","Neutral tonal weave"],
    { Material: "Linen", Size: "20 × 20 in", Fill: "Down alternative", Color: "Natural" },
    48, undefined, 4.8, 196, 80, { bestseller: true, sku: "SAS-HM-005" }),
  p("p6","sculptural-accent-chair","Sculptural Accent Chair","Home","home",["/products/sculptural-accent-chair-1.jpg"],
    "A compact lounge chair with a clean profile. Meant for reading corners and quiet conversation.",
    ["Upholstered seat","Supportive back","Fits smaller rooms","Neutral upholstery"],
    { Material: "Fabric and wood", Dimensions: "28 × 30 × 32 in", Color: "Ivory", Assembly: "Minimal" },
    429, undefined, 4.6, 74, 12, { featured: true, sku: "SAS-HM-006" }),
  p("p7","seagrass-storage-basket","Seagrass Storage Basket","Home","home",["/products/seagrass-storage-basket-1.jpg","/products/seagrass-storage-basket-2.jpg"],
    "A handwoven basket for throws, kindling, or entryway clutter. Natural texture that works in almost any room.",
    ["Seagrass weave","Sturdy handles","Open-top storage","Lightweight and durable"],
    { Material: "Seagrass", Size: "Large", Care: "Spot clean", Color: "Natural" },
    54, undefined, 4.7, 142, 64, { sku: "SAS-HM-007" }),
  p("p8","lidded-linen-storage-box","Lidded Linen Storage Box","Home","home",["/products/lidded-linen-storage-box-1.jpg"],
    "A fabric-covered box for seasonal layers, papers, or extra linens. Keeps surfaces clear without looking utilitarian.",
    ["Linen-blend cover","Fitted lid","Stackable profile","Reinforced sides"],
    { Material: "Linen blend over board", Dimensions: "15 × 11 × 8 in", Color: "Oatmeal", Care: "Wipe clean" },
    42, undefined, 4.5, 67, 48, { sku: "SAS-HM-008" }),

  // KITCHEN
  p("p9","fluted-celadon-plate","Fluted Celadon Plate","Kitchen & Dining","kitchen-dining",["/products/stoneware-dinner-plates-1.jpg"],
    "A scalloped stoneware plate in a quiet sea-glass glaze. Beautiful enough for the table, sturdy enough for every meal.",
    ["Fluted rim","Celadon glaze","Dishwasher safe","Works as dinner or serving plate"],
    { Material: "Stoneware", Diameter: "10.5 in", Finish: "Celadon glaze", Care: "Dishwasher safe" },
    36, undefined, 4.8, 188, 90, { featured: true, bestseller: true, sku: "SAS-KD-001" }),
  p("p10","everyday-ceramic-mug","Everyday Ceramic Mug","Kitchen & Dining","kitchen-dining",["/products/everyday-ceramic-mug-1.jpg","/products/everyday-ceramic-mug-2.jpg"],
    "A generous ceramic mug with a comfortable handle. Made for morning coffee and late tea in equal measure.",
    ["Comfortable handle","Chip-resistant glaze","Microwave safe","Generous 12 oz capacity"],
    { Material: "Ceramic", Capacity: "12 oz", Care: "Dishwasher safe", Color: "Warm white" },
    22, undefined, 4.7, 256, 120, { bestseller: true, sku: "SAS-KD-002" }),
  p("p11","hammered-copper-kettle","Hammered Copper Kettle","Kitchen & Dining","kitchen-dining",["/products/brushed-steel-kettle-1.jpg"],
    "A stovetop kettle in hammered copper. A useful object that earns its place on the hob.",
    ["Hammered copper body","Stovetop use","Whistling spout","Stay-cool handle"],
    { Material: "Copper", Capacity: "2 qt", Use: "Gas and electric", Color: "Copper" },
    84, 68, 4.6, 143, 36, { badge: "Sale", bestseller: true, sku: "SAS-KD-003" }),
  p("p12","walnut-serving-board","Walnut Serving Board","Kitchen & Dining","kitchen-dining",["/products/walnut-serving-board-1.jpg","/products/walnut-serving-board-2.jpg"],
    "A thick walnut board for bread, cheese, or a simple lunch. The grain does the decorating.",
    ["Solid walnut","Juice groove","Food-safe oil finish","Generous serving size"],
    { Material: "Walnut", Dimensions: "18 × 12 in", Finish: "Food-safe oil", Care: "Hand wash" },
    68, undefined, 4.8, 201, 52, { featured: true, sku: "SAS-KD-004" }),
  p("p13","cast-iron-skillet","Cast Iron Everyday Skillet","Kitchen & Dining","kitchen-dining",["/products/cast-iron-skillet-1.jpg"],
    "A seasoned cast iron skillet for searing, baking, and everything in between. Built to last decades of daily cooking.",
    ["Pre-seasoned surface","Oven safe","Even heat retention","Helper handle"],
    { Material: "Cast iron", Diameter: "10 in", Oven: "Up to 500°F", Color: "Black" },
    58, undefined, 4.9, 312, 70, { bestseller: true, sku: "SAS-KD-005" }),
  p("p14","manual-coffee-mill","Manual Coffee Mill","Kitchen & Dining","kitchen-dining",["/products/manual-coffee-mill-1.jpg"],
    "A hand grinder with consistent burrs for pour-over, French press, or espresso. Quiet, precise, and travel-ready.",
    ["Conical burrs","Adjustable grind","Compact body","No power required"],
    { Material: "Stainless and wood", Capacity: "30 g beans", Grind: "Adjustable", Color: "Natural wood" },
    64, undefined, 4.6, 119, 44, { sku: "SAS-KD-006" }),
  p("p15","glass-pantry-jars","Glass Pantry Jars","Kitchen & Dining","kitchen-dining",["/products/glass-pantry-jars-1.jpg","/products/glass-pantry-jars-2.jpg"],
    "Clear glass jars for grains, coffee, and dry goods. A simple way to keep the pantry ordered and visible.",
    ["Airtight lids","Clear glass","Set of three sizes","Stack-friendly silhouettes"],
    { Material: "Glass", Includes: "3 jars", Lids: "Airtight", Care: "Dishwasher safe" },
    38, undefined, 4.7, 154, 85, { sku: "SAS-KD-007" }),
  p("p16","precision-kitchen-scale","Precision Kitchen Scale","Kitchen & Dining","kitchen-dining",["/products/precision-kitchen-scale-1.jpg"],
    "A compact digital scale for baking, coffee, and measured cooking. Slim enough to store in a drawer.",
    ["1 g increments","Tare function","Slim profile","Auto shut-off"],
    { Capacity: "11 lb", Increment: "1 g", Power: "Battery", Color: "Stainless" },
    32, undefined, 4.5, 97, 60, { sku: "SAS-KD-008" }),
  p("p17","satin-flatware-set","Satin Flatware Set","Kitchen & Dining","kitchen-dining",["/products/satin-flatware-set-1.jpg"],
    "A five-piece place setting in a satin finish. Quiet on the table, balanced in the hand.",
    ["Satin stainless steel","Five-piece place setting","Dishwasher safe","Service for four"],
    { Material: "18/10 stainless", Pieces: "20", Finish: "Satin", Care: "Dishwasher safe" },
    96, undefined, 4.7, 134, 40, { featured: true, sku: "SAS-KD-009" }),

  // ENTERTAINING
  p("p18","stemmed-wine-glasses","Stemmed Wine Glasses","Entertaining","entertaining",["/products/stemmed-wine-glasses-1.jpg"],
    "A set of clear stemmed glasses with a slender bowl. Equally at home with a weeknight pour or a long table.",
    ["Lead-free crystal","Set of four","Fine rim","Dishwasher safe"],
    { Material: "Lead-free crystal", Includes: "4 glasses", Capacity: "16 oz", Care: "Dishwasher safe" },
    72, undefined, 4.8, 176, 48, { featured: true, bestseller: true, sku: "SAS-EN-001" }),
  p("p19","wood-serving-tray","Wood Serving Tray","Entertaining","entertaining",["/products/wood-serving-tray-1.jpg"],
    "A handled wood tray for coffee in the living room or drinks on the terrace. Simple, useful, and well-balanced.",
    ["Solid wood","Integrated handles","Raised rim","Serves indoors or out"],
    { Material: "Wood", Dimensions: "20 × 14 in", Finish: "Oil", Care: "Wipe clean" },
    58, undefined, 4.6, 109, 38, { sku: "SAS-EN-002" }),
  p("p20","generous-serving-bowl","Generous Serving Bowl","Entertaining","entertaining",["/products/generous-serving-bowl-1.jpg"],
    "A wide ceramic bowl for salads, fruit, or a shared meal. The scale is the point.",
    ["Wide ceramic bowl","Glazed interior","Family serving size","Oven and table ready"],
    { Material: "Ceramic", Diameter: "12 in", Care: "Dishwasher safe", Color: "Stone" },
    46, undefined, 4.7, 128, 50, { sku: "SAS-EN-003" }),
  p("p21","pour-over-coffee-set","Pour-Over Coffee Set","Entertaining","entertaining",["/products/pour-over-coffee-set-1.jpg"],
    "A dripper, carafe, and filters for a slower morning. The ritual is as considered as the cup.",
    ["Ceramic dripper","Glass carafe","Filters included","Serves two"],
    { Includes: "Dripper, carafe, filters", Capacity: "600 ml", Material: "Ceramic and glass", Color: "Ivory" },
    54, undefined, 4.6, 91, 34, { newArrival: true, sku: "SAS-EN-004" }),
  p("p22","afternoon-tea-set","Afternoon Tea Set","Entertaining","entertaining",["/products/afternoon-tea-set-1.jpg"],
    "A small tea service for two. Quiet enough for a weekday, special enough for guests.",
    ["Teapot and cups","For two","Glazed ceramic","Compact storage"],
    { Includes: "Teapot and 2 cups", Material: "Ceramic", Capacity: "24 oz teapot", Color: "Cream" },
    64, undefined, 4.5, 73, 29, { sku: "SAS-EN-005" }),
  p("p23","travel-chess-set","Travel Chess Set","Entertaining","entertaining",["/products/travel-chess-set-1.jpg"],
    "A compact chess set with a folding board. Made for porches, trains, and long evenings.",
    ["Folding board","Weighted pieces","Travel-ready case","Full 32-piece set"],
    { Material: "Wood", Board: "Folding", Pieces: "32", Color: "Natural / dark" },
    48, undefined, 4.7, 84, 41, { sku: "SAS-EN-006" }),
  p("p24","linen-playing-cards","Linen Playing Cards","Entertaining","entertaining",["/products/linen-playing-cards-1.jpg"],
    "A linen-finish deck with a classic face. Easy to shuffle, easy to leave on a table.",
    ["Linen finish","Standard poker size","Two-piece tuck box","Smooth shuffle"],
    { Finish: "Linen", Size: "Poker", Cards: "54", Color: "Ivory / navy" },
    16, undefined, 4.4, 58, 110, { sku: "SAS-EN-007" }),
  p("p25","stone-shaker-set","Stone Shaker Set","Entertaining","entertaining",["/products/stone-shaker-set-1.jpg"],
    "Salt and pepper in simple stone vessels. Unobtrusive on the table, easy to refill.",
    ["Stone bodies","Easy-fill tops","Pair set","Weighted base"],
    { Material: "Stone composite", Includes: "Salt and pepper", Height: "4 in", Color: "Off-white" },
    28, undefined, 4.5, 62, 75, { sku: "SAS-EN-008" }),

  // OUTDOOR
  p("p26","canvas-garden-hammock","Canvas Garden Hammock","Outdoor Living","outdoor-living",["/products/canvas-garden-hammock-1.jpg","/products/canvas-garden-hammock-2.jpg"],
    "A fringed canvas hammock for the garden, porch, or a quiet indoor corner. Soft enough to linger.",
    ["Cotton canvas","Fringed edges","Indoor or outdoor use","Hardware included"],
    { Material: "Cotton canvas", Capacity: "250 lb", Length: "78 in", Color: "Ivory stripe" },
    118, undefined, 4.7, 147, 32, { featured: true, sku: "SAS-OL-001" }),
  p("p27","outdoor-picnic-blanket","Outdoor Picnic Blanket","Outdoor Living","outdoor-living",["/products/outdoor-picnic-blanket-1.jpg","/products/outdoor-picnic-blanket-2.jpg"],
    "A water-resistant picnic blanket with a soft face. Packs small for the beach, the lawn, or a concert green.",
    ["Water-resistant backing","Soft woven face","Folds into carry strap","Sand-shedding weave"],
    { Size: "70 × 80 in", Material: "Woven blend", Backing: "Water-resistant", Color: "Natural stripe" },
    64, 52, 4.8, 203, 58, { badge: "Sale", bestseller: true, newArrival: true, sku: "SAS-OL-002" }),
  p("p28","wicker-picnic-hamper","Wicker Picnic Hamper","Outdoor Living","outdoor-living",["/products/wicker-picnic-hamper-1.jpg"],
    "A lidded wicker hamper for day trips and terrace lunches. Interior straps keep glassware and plates in place.",
    ["Wicker construction","Interior straps","Lidded close","Fits plates and glasses"],
    { Material: "Wicker", Interior: "Fitted straps", Size: "Medium", Color: "Natural" },
    88, undefined, 4.6, 79, 24, { sku: "SAS-OL-003" }),
  p("p29","terrace-fire-bowl","Terrace Fire Bowl","Outdoor Living","outdoor-living",["/products/terrace-fire-bowl-1.jpg"],
    "A low fire bowl for cool evenings on the terrace. Compact enough for a deck, generous enough for a gathering.",
    ["Steel bowl","Spark screen","Low profile","Wood-burning"],
    { Material: "Steel", Diameter: "30 in", Fuel: "Wood", Finish: "Matte black" },
    196, undefined, 4.5, 66, 16, { featured: true, sku: "SAS-OL-004" }),
  p("p30","enamel-watering-can","Enamel Watering Can","Outdoor Living","outdoor-living",["/products/enamel-watering-can-1.jpg"],
    "A classic watering can with a fine rose. Equally useful in the garden and beside indoor plants.",
    ["Enamel-coated steel","Fine rose spout","Balanced handle","Indoor and outdoor use"],
    { Material: "Enamel steel", Capacity: "2 gal", Color: "Ivory", Care: "Wipe dry" },
    44, undefined, 4.6, 93, 47, { sku: "SAS-OL-005" }),
  p("p31","garden-hand-tools","Garden Hand Tools","Outdoor Living","outdoor-living",["/products/garden-hand-tools-1.jpg"],
    "A three-piece hand tool set for beds, pots, and window boxes. Compact, well-balanced, and easy to store.",
    ["Trowel, fork, and transplanter","Hardwood handles","Rust-resistant heads","Canvas roll included"],
    { Includes: "3 tools + roll", Material: "Steel and wood", Use: "Beds and pots", Color: "Natural / steel" },
    36, undefined, 4.5, 81, 53, { sku: "SAS-OL-006" }),
  p("p32","cedar-bird-feeder","Cedar Bird Feeder","Outdoor Living","outdoor-living",["/products/cedar-bird-feeder-1.jpg"],
    "A simple cedar feeder for the garden edge. Weathered wood that looks at home among plantings.",
    ["Cedar construction","Covered seed tray","Hanging hardware","Weather-resistant"],
    { Material: "Cedar", Mount: "Hanging", Capacity: "2 lb seed", Color: "Natural cedar" },
    42, undefined, 4.4, 57, 39, { sku: "SAS-OL-007" }),

  // TRAVEL
  p("p33","soft-weekender-duffel","Soft Weekender Duffel","Travel","travel",["/products/soft-weekender-duffel-1.jpg"],
    "A canvas weekender with leather details. Packs a long weekend without looking overbuilt.",
    ["Heavy canvas","Leather handles","Interior pocket","Fits as a carry-on"],
    { Material: "Canvas and leather", Capacity: "45 L", Color: "Camel", Carry: "Handles and shoulder strap" },
    148, undefined, 4.8, 187, 31, { featured: true, bestseller: true, sku: "SAS-TR-001" }),
  p("p34","canvas-day-backpack","Canvas Day Backpack","Travel","travel",["/products/daily-travel-backpack-1.jpg","/products/daily-travel-backpack-2.jpg"],
    "A structured canvas backpack for day trips, markets, and light travel. Comfortable straps, a quiet silhouette.",
    ["Canvas body","Padded straps","Front pocket","Fits a 13-inch laptop"],
    { Material: "Canvas", Capacity: "22 L", Color: "Mustard", Laptop: "13 in sleeve" },
    98, undefined, 4.6, 142, 44, { sku: "SAS-TR-002" }),
  p("p35","insulated-travel-tumbler","Insulated Travel Tumbler","Travel","travel",["/products/insulated-travel-tumbler-1.jpg"],
    "A double-wall tumbler that keeps coffee hot and water cold. Slim enough for a cup holder, quiet on a desk.",
    ["Double-wall insulation","Leak-resistant lid","Cup-holder fit","Sweat-free exterior"],
    { Capacity: "16 oz", Material: "Stainless steel", Insulation: "12 hr cold / 6 hr hot", Color: "Matte sand" },
    32, undefined, 4.7, 221, 96, { bestseller: true, sku: "SAS-TR-003" }),
  p("p36","woven-weekend-tote","Woven Weekend Tote","Travel","travel",["/products/canvas-market-tote-1.jpg"],
    "An open woven tote with leather handles. Made for markets, the ferry, and everything that does not need a zipper.",
    ["Woven body","Leather handles","Open top","Roomy interior"],
    { Material: "Woven fiber and leather", Size: "Large", Color: "Natural", Care: "Spot clean" },
    78, undefined, 4.6, 118, 37, { sku: "SAS-TR-004" }),
  p("p37","leather-luggage-tag","Leather Luggage Tag","Travel","travel",["/products/leather-luggage-tag-1.jpg"],
    "A slim leather tag with a windowed ID. A small, useful detail that travels well.",
    ["Full-grain leather","ID window","Secure strap","Embossed edge"],
    { Material: "Leather", Size: "4 × 2.5 in", Color: "Tan", Includes: "ID insert" },
    24, undefined, 4.5, 76, 88, { sku: "SAS-TR-005" }),
  p("p38","crossbody-day-bag","Crossbody Day Bag","Travel","travel",["/products/crossbody-day-bag-1.jpg","/products/crossbody-day-bag-2.jpg"],
    "A compact crossbody for days that need hands free. Fits a phone, wallet, and the day's small essentials.",
    ["Adjustable strap","Secure zip","Interior slip pocket","Soft structured body"],
    { Material: "Leather", Size: "Compact", Color: "Taupe", Strap: "Adjustable" },
    128, undefined, 4.7, 154, 29, { featured: true, newArrival: true, sku: "SAS-TR-006" }),

  // APPAREL
  p("p39","fine-knit-crew-sweater","Fine Knit Crew Sweater","Apparel","apparel",["/products/fine-knit-crew-sweater-1.jpg"],
    "A fine-gauge crew in a year-round weight. Easy over a shirt, easy on its own.",
    ["Fine gauge knit","Crew neck","Year-round weight","Ribbed cuffs and hem"],
    { Material: "Cotton knit", Fit: "Regular", Care: "Hand wash or dry clean", Color: "Heather mix" },
    88, undefined, 4.6, 133, 46, { featured: true, sku: "SAS-AP-001" }),
  p("p40","open-knit-layering-top","Open Knit Layering Top","Apparel","apparel",["/products/washed-cotton-overshirt-1.jpg"],
    "A light open-knit top for layering over a tank or under a coat. Airy, unstructured, and easy.",
    ["Open knit","Relaxed fit","Layering weight","Long sleeve"],
    { Material: "Knit blend", Fit: "Relaxed", Care: "Hand wash", Color: "Olive" },
    72, undefined, 4.4, 61, 33, { sku: "SAS-AP-002" }),
  p("p41","cotton-knit-essentials","Cotton Knit Essentials","Apparel","apparel",["/products/everyday-cotton-tee-1.jpg","/products/everyday-cotton-tee-2.jpg"],
    "Soft cotton knits in a close stack of everyday colors. Meant to be worn on rotation.",
    ["Cotton knit","Everyday weight","Crew neck","Easy care"],
    { Material: "Cotton", Fit: "Regular", Care: "Machine wash cold", Color: "Mixed neutrals" },
    38, undefined, 4.5, 198, 92, { bestseller: true, sku: "SAS-AP-003" }),
  p("p42","drawstring-swim-shorts","Drawstring Swim Shorts","Apparel","apparel",["/products/relaxed-cotton-shorts-1.jpg"],
    "Quick-dry swim shorts with a drawstring waist. For the pool, the bay, and the long walk back.",
    ["Quick-dry cloth","Drawstring waist","Side pockets","Above-knee length"],
    { Material: "Nylon blend", Fit: "Relaxed", Length: "Above knee", Color: "Sea green" },
    58, 46, 4.5, 87, 51, { badge: "Sale", sku: "SAS-AP-004" }),

  // ACCESSORIES
  p("p43","acetate-everyday-sunglasses","Acetate Everyday Sunglasses","Accessories","accessories",["/products/polarized-everyday-sunglasses-2.jpg"],
    "Clear acetate frames with a classic wayfarer line. Understated enough for every day, polarized for glare.",
    ["Acetate frame","Polarized lenses","UV400 protection","Includes case"],
    { Frame: "Acetate", Lenses: "Polarized", Protection: "UV400", Color: "Clear / grey" },
    68, undefined, 4.5, 104, 62, { sku: "SAS-AC-001" }),
  p("p44","slim-leather-wallet","Slim Leather Wallet","Accessories","accessories",["/products/slim-leather-wallet-1.jpg","/products/slim-leather-wallet-2.jpg"],
    "A bifold wallet in smooth leather. Card slots, a bill compartment, and a profile that stays slim in a pocket.",
    ["Full-grain leather","Card slots and bill pocket","Slim bifold","Contrast stitching"],
    { Material: "Leather", Slots: "6 card + bill", Color: "Dark brown", Size: "Bifold" },
    54, undefined, 4.6, 171, 73, { bestseller: true, sku: "SAS-AC-002" }),
  p("p45","soft-wool-wrap","Soft Wool Wrap","Accessories","accessories",["/products/soft-wool-wrap-1.jpg"],
    "A generous wool wrap for cool evenings and travel days. Light enough to fold into a bag.",
    ["Wool blend","Generous drape","Fringed ends","Packs small"],
    { Material: "Wool blend", Size: "28 × 72 in", Care: "Dry clean", Color: "Natural" },
    62, undefined, 4.7, 95, 40, { sku: "SAS-AC-003" }),
  p("p46","classic-leather-belt","Classic Leather Belt","Accessories","accessories",["/products/classic-leather-belt-1.jpg"],
    "A simple leather belt with a quiet buckle. Cut to wear with trousers, denim, or a dress.",
    ["Vegetable-tanned leather","Polished buckle","Adjustable holes","1.25-inch width"],
    { Material: "Leather", Width: "1.25 in", Color: "Tan", Sizes: "S–XL" },
    48, undefined, 4.6, 112, 58, { sku: "SAS-AC-004" }),
  p("p47","quiet-wristwatch","Quiet Wristwatch","Accessories","accessories",["/products/quiet-wristwatch-1.jpg","/products/quiet-wristwatch-2.jpg"],
    "A slim analog watch with a leather strap. Unmarked enough for work, considered enough for evening.",
    ["Analog movement","Leather strap","Mineral crystal","Water resistant 30 m"],
    { Movement: "Quartz analog", Case: "38 mm", Strap: "Leather", Color: "Silver / brown" },
    164, undefined, 4.5, 89, 27, { featured: true, sku: "SAS-AC-005" }),
  p("p48","leather-everyday-gloves","Leather Everyday Gloves","Accessories","accessories",["/products/leather-everyday-gloves-1.jpg"],
    "Lined leather gloves for cold mornings and evening walks. Soft at the wrist, precise at the fingers.",
    ["Leather exterior","Soft lining","Touch-friendly fingertips","Classic length"],
    { Material: "Leather", Lining: "Knit", Color: "Brown", Sizes: "S–L" },
    58, undefined, 4.4, 64, 35, { sku: "SAS-AC-006" }),

  // PERSONAL
  p("p49","cotton-bath-towel-set","Cotton Bath Towel Set","Personal Essentials","personal-essentials",["/products/cotton-bath-towel-set-1.jpg"],
    "Hotel-weight cotton towels with a quiet stripe. Absorbent, substantial, and made for daily use.",
    ["Cotton terry","Hotel weight","Set of two bath towels","Quick to dry"],
    { Material: "100% cotton", Weight: "600 GSM", Includes: "2 bath towels", Color: "White / grey stripe" },
    64, 54, 4.8, 267, 74, { badge: "Sale", featured: true, bestseller: true, sku: "SAS-PE-001" }),
  p("p50","wood-wick-mason-candle","Wood Wick Mason Candle","Personal Essentials","personal-essentials",["/products/scented-soy-candle-1.jpg","/products/scented-soy-candle-2.jpg"],
    "A soy candle in a simple mason jar with a wood wick. A low, even burn and a quiet crackle.",
    ["Soy wax","Wood wick","Reusable jar","Even burn"],
    { Wax: "Soy", Wick: "Wood", Burn: "40 hours", Scent: "Cedar and sea salt" },
    28, 22, 4.7, 184, 91, { badge: "Sale", sku: "SAS-PE-002" }),
  p("p51","botanical-soap-set","Botanical Soap Set","Personal Essentials","personal-essentials",["/products/botanical-soap-set-1.jpg"],
    "A trio of botanical bars for the bath or guest powder room. Clean scent, simple wrapping.",
    ["Set of three bars","Botanical oils","Wrapped individually","Gentle lather"],
    { Includes: "3 bars", Weight: "4 oz each", Scent: "Botanical", Use: "Hands and body" },
    24, undefined, 4.6, 99, 68, { sku: "SAS-PE-003" }),
  p("p52","traditional-shave-set","Traditional Shave Set","Personal Essentials","personal-essentials",["/products/travel-grooming-kit-1.jpg"],
    "A straight razor, brush, and bowl for a slower morning. Tools with weight and a lasting finish.",
    ["Straight razor","Badger-style brush","Shave bowl","Travel-ready grouping"],
    { Includes: "Razor, brush, bowl", Blade: "Replaceable", Color: "Ivory / black", Use: "Wet shave" },
    86, undefined, 4.4, 52, 22, { sku: "SAS-PE-004" }),
  p("p53","reed-home-diffuser","Reed Home Diffuser","Personal Essentials","personal-essentials",["/products/reed-home-diffuser-1.jpg"],
    "A reed diffuser with a restrained scent. Fills a room without announcing itself.",
    ["Alcohol-based oil","Natural reeds","Lasts 8–10 weeks","Low-profile bottle"],
    { Volume: "4 oz", Duration: "8–10 weeks", Scent: "Fig leaf and vetiver", Color: "Clear / wood" },
    42, undefined, 4.5, 118, 49, { sku: "SAS-PE-005" }),

  // FITNESS
  p("p54","studio-yoga-mat","Studio Yoga Mat","Fitness & Wellness","fitness-wellness",["/products/studio-yoga-mat-1.jpg","/products/studio-yoga-mat-2.jpg"],
    "A closed-cell yoga mat with a reliable grip. Thick enough for joints, light enough to carry.",
    ["Closed-cell surface","6 mm cushion","Non-slip texture","Includes carry strap"],
    { Thickness: "6 mm", Size: "72 × 24 in", Material: "TPE", Color: "Sea glass" },
    48, undefined, 4.7, 241, 77, { bestseller: true, sku: "SAS-FW-001" }),
  p("p55","cork-yoga-block","Cork Yoga Block","Fitness & Wellness","fitness-wellness",["/products/cork-yoga-block-1.jpg"],
    "A dense cork block for supported practice. Stable, natural, and easy to wipe down.",
    ["Natural cork","Dense and stable","Standard studio size","Easy to clean"],
    { Material: "Cork", Size: "9 × 6 × 4 in", Color: "Natural", Care: "Wipe clean" },
    22, undefined, 4.6, 86, 64, { sku: "SAS-FW-002" }),
  p("p56","recovery-foam-roller","Recovery Foam Roller","Fitness & Wellness","fitness-wellness",["/products/recovery-foam-roller-1.jpg"],
    "A high-density roller for post-practice recovery. Firm, even, and built to keep its shape.",
    ["High-density foam","Even surface","18-inch length","Holds shape"],
    { Length: "18 in", Diameter: "6 in", Material: "EVA foam", Color: "Charcoal" },
    28, undefined, 4.5, 134, 71, { newArrival: true, sku: "SAS-FW-003" }),
  p("p57","insulated-sports-flask","Insulated Sports Flask","Fitness & Wellness","fitness-wellness",["/products/insulated-sports-flask-1.jpg"],
    "A slim insulated bottle for studio, walk, or travel. Keeps water cold without the bulk of a gym bottle.",
    ["Double-wall steel","Leak-resistant cap","Sweat-free","Fits most cup holders"],
    { Capacity: "20 oz", Material: "Stainless steel", Insulation: "24 hr cold", Color: "Graphite" },
    34, undefined, 4.6, 157, 83, { sku: "SAS-FW-004" }),

  // LIGHTING
  p("p58","brass-table-lamp","Brass Table Lamp","Lighting","lighting",["/products/ceramic-table-lamp-2.jpg"],
    "A slender brass lamp with a chevron shade. Warm light for a bedside, desk, or console.",
    ["Brass stem","Fabric shade","Inline switch","Standard bulb"],
    { Material: "Brass and fabric", Height: "22 in", Bulb: "E26, not included", Color: "Brass / ivory" },
    118, undefined, 4.5, 72, 26, { featured: true, sku: "SAS-LT-001" }),
  p("p59","tripod-floor-lamp","Tripod Floor Lamp","Lighting","lighting",["/products/arc-floor-lamp-1.jpg"],
    "A mid-century tripod lamp with a directional shade. Reads as furniture as much as lighting.",
    ["Tripod base","Adjustable shade","Warm metal finish","Weighted feet"],
    { Material: "Powder-coated steel", Height: "58 in", Bulb: "E26", Color: "Terracotta" },
    186, undefined, 4.6, 81, 19, { newArrival: true, sku: "SAS-LT-002" }),
  p("p60","patio-lantern","Patio Lantern","Lighting","lighting",["/products/patio-lantern-1.jpg","/products/patio-lantern-2.jpg"],
    "A portable lantern for the terrace and indoor shelves. Soft light without a cord.",
    ["Battery or candle use","Weather-ready housing","Carry handle","Indoor and outdoor"],
    { Material: "Metal and glass", Height: "10 in", Power: "Battery or candle", Color: "Black" },
    54, undefined, 4.5, 94, 43, { sku: "SAS-LT-003" }),

  // DECOR
  p("p61","pale-celadon-vase","Pale Celadon Vase","Decor","decor",["/products/stoneware-vase-1.jpg","/products/stoneware-vase-2.jpg"],
    "A small moon-jar vase in pale celadon. Beautiful empty, better with a single stem.",
    ["Celadon glaze","Compact moon-jar form","Handmade variation","Watertight"],
    { Material: "Stoneware", Height: "6 in", Finish: "Celadon", Color: "Pale celadon" },
    48, undefined, 4.8, 126, 38, { featured: true, sku: "SAS-DC-001" }),
  p("p62","ceramic-planter","Ceramic Planter","Decor","decor",["/products/ceramic-planter-1.jpg","/products/ceramic-planter-2.jpg"],
    "A simple ceramic planter with a drainage hole. Quiet enough to disappear behind the plant.",
    ["Ceramic body","Drainage hole","Saucer included","Indoor use"],
    { Material: "Ceramic", Diameter: "7 in", Drainage: "Yes", Color: "Warm white" },
    36, undefined, 4.6, 108, 56, { sku: "SAS-DC-002" }),
  p("p63","arts-and-crafts-print","Arts and Crafts Print","Decor","decor",["/products/limited-art-print-1.jpg"],
    "A framed-ready print after an early twentieth-century studio tile. Graphic, warm, and quietly historical.",
    ["Archival paper","Unframed","Standard square format","Matte finish"],
    { Size: "12 × 12 in", Paper: "Archival", Finish: "Matte", Frame: "Not included" },
    42, undefined, 4.4, 59, 31, { newArrival: true, sku: "SAS-DC-003" }),
  p("p64","round-wall-mirror","Round Wall Mirror","Decor","decor",["/products/round-wall-mirror-1.jpg"],
    "A round mirror with a slim frame. Brings light across a hallway, bath, or dining wall.",
    ["Slim metal frame","Beveled glass","Ready to hang","24-inch diameter"],
    { Diameter: "24 in", Frame: "Metal", Glass: "Beveled", Color: "Soft black" },
    128, undefined, 4.7, 97, 21, { sku: "SAS-DC-004" }),
  p("p65","glass-bud-vase","Glass Bud Vase","Decor","decor",["/products/glass-bud-vase-1.jpg","/products/glass-bud-vase-2.jpg"],
    "A slender glass vase for a single stem or a small cutting. Almost invisible, which is the point.",
    ["Clear glass","Narrow neck","Stable base","Hand-blown variation"],
    { Material: "Glass", Height: "8 in", Color: "Clear", Care: "Hand wash" },
    26, undefined, 4.6, 143, 67, { sku: "SAS-DC-005" }),
  p("p66","brass-candle-holder","Brass Candle Holder","Decor","decor",["/products/brass-candle-holder-1.jpg"],
    "A low brass holder for a taper. Polished just enough, left honest at the edges.",
    ["Solid brass","Taper size","Weighted base","Ages with use"],
    { Material: "Brass", Fits: "Standard taper", Height: "3 in", Color: "Brass" },
    32, undefined, 4.5, 71, 52, { sku: "SAS-DC-006" }),
  p("p67","quiet-wall-clock","Quiet Wall Clock","Decor","decor",["/products/quiet-wall-clock-1.jpg"],
    "A silent-sweep wall clock with a simple face. Time without the tick.",
    ["Silent sweep movement","Minimal face","Easy to hang","Battery included"],
    { Diameter: "12 in", Movement: "Silent quartz", Color: "Ivory / black", Power: "AA battery" },
    58, undefined, 4.4, 83, 34, { sku: "SAS-DC-007" }),

  // WORKSPACE
  p("p68","clothbound-notebook","Clothbound Notebook","Workspace","workspace",["/products/clothbound-notebook-1.jpg","/products/clothbound-notebook-2.jpg"],
    "A clothbound notebook with laid paper. For lists, letters, and the thoughts that should not live only on a screen.",
    ["Cloth cover","Lay-flat binding","Numbered pages","Ribbon marker"],
    { Pages: "192", Size: "A5", Paper: "Ivory laid", Color: "Sand" },
    28, undefined, 4.8, 176, 88, { bestseller: true, sku: "SAS-WS-001" }),
  p("p69","fountain-pen","Fountain Pen","Workspace","workspace",["/products/fountain-pen-1.jpg"],
    "A balanced fountain pen with a steel nib. Meant for daily writing, not a drawer.",
    ["Steel nib","Cartridge and converter","Balanced weight","Cap posts"],
    { Nib: "Medium steel", Fill: "Cartridge / converter", Color: "Black / gold", Length: "5.4 in" },
    64, undefined, 4.6, 92, 41, { sku: "SAS-WS-002" }),
  p("p70","weekly-desk-planner","Weekly Desk Planner","Workspace","workspace",["/products/weekly-desk-planner-1.jpg"],
    "An undated weekly planner with a linen cover. Space for the week without crowding the page.",
    ["Undated weeks","Linen cover","Lay-flat","Year of weeks"],
    { Format: "Weekly undated", Size: "A5", Cover: "Linen", Color: "Ivory" },
    32, undefined, 4.5, 104, 59, { sku: "SAS-WS-003" }),
  p("p71","aluminum-laptop-stand","Aluminum Laptop Stand","Workspace","workspace",["/products/aluminum-laptop-stand-1.jpg"],
    "A low aluminum stand that lifts a laptop to a better line of sight. Minimal, stable, and cool to the touch.",
    ["Aluminum body","Ventilated","Folds flat","Fits most laptops"],
    { Material: "Aluminum", Fit: "13–16 in laptops", Color: "Silver", Folds: "Yes" },
    58, undefined, 4.6, 138, 47, { sku: "SAS-WS-004" }),
  p("p72","clip-desk-light","Clip Desk Light","Workspace","workspace",["/products/clip-desk-light-1.jpg"],
    "A compact clip light for shelves, headboards, and crowded desks. Directs light without taking surface.",
    ["Clamp mount","Adjustable arm","Warm LED","USB powered"],
    { Mount: "Clamp", Power: "USB", Temp: "3000K", Color: "Black" },
    36, undefined, 4.5, 77, 54, { sku: "SAS-WS-005" }),
  p("p73","ceramic-pen-cup","Ceramic Pen Cup","Workspace","workspace",["/products/ceramic-pen-cup-1.jpg"],
    "A small ceramic cup for pens, scissors, and the day's pencils. Heavier than it looks, which is useful.",
    ["Ceramic body","Weighted base","Glazed interior","Desk scale"],
    { Material: "Ceramic", Height: "4 in", Color: "Ivory", Care: "Wipe clean" },
    18, undefined, 4.4, 63, 79, { sku: "SAS-WS-006" }),
  p("p74","compact-room-speaker","Compact Room Speaker","Workspace","workspace",["/products/compact-room-speaker-1.jpg","/products/compact-room-speaker-2.jpg"],
    "A small Bluetooth speaker with a clean, unshowy profile. For kitchens, desks, and quiet rooms.",
    ["Bluetooth 5.0","12-hour battery","Compact body","Aux option"],
    { Connectivity: "Bluetooth 5.0", Battery: "12 hours", Output: "10W", Color: "Graphite" },
    79, 64, 4.6, 198, 61, { badge: "Sale", sku: "SAS-WS-007" }),
  p("p75","compact-e-reader","Compact E-Reader","Workspace","workspace",["/products/compact-e-reader-1.jpg"],
    "A glare-free e-reader for travel and the evening chair. Light, long-lasting, and easy on the eyes.",
    ["E-ink display","Weeks of battery","Built-in light","Waterproof rating"],
    { Screen: "6 in e-ink", Storage: "8 GB", Battery: "Weeks", Color: "Graphite" },
    119, undefined, 4.7, 154, 28, { newArrival: true, sku: "SAS-WS-008" }),
];

function p(id, slug, name, category, categorySlug, images, description, features, specifications, price, salePrice, rating, reviews, stock, extra) {
  return { id, slug, name, category, categorySlug, images, description, features, specifications, price, salePrice, rating, reviews, stock, ...extra };
}

function tsValue(v) {
  if (Array.isArray(v)) return `[${v.map((x) => JSON.stringify(x)).join(", ")}]`;
  if (v && typeof v === "object") {
    const inner = Object.entries(v)
      .map(([k, val]) => `${/^[A-Za-z_][A-Za-z0-9_]*$/.test(k) ? k : JSON.stringify(k)}: ${JSON.stringify(val)}`)
      .join(", ");
    return `{ ${inner} }`;
  }
  return JSON.stringify(v);
}

function productBlock(prod) {
  const lines = [
    `    id: ${tsValue(prod.id)},`,
    `    slug: ${tsValue(prod.slug)},`,
    `    name: ${tsValue(prod.name)},`,
    `    category: ${tsValue(prod.category)},`,
    `    categorySlug: ${tsValue(prod.categorySlug)},`,
    `    images: ${tsValue(prod.images)},`,
    `    description: ${tsValue(prod.description)},`,
    `    features: ${tsValue(prod.features)},`,
    `    specifications: ${tsValue(prod.specifications)},`,
    `    price: ${prod.price},`,
  ];
  if (prod.salePrice != null) lines.push(`    salePrice: ${prod.salePrice},`);
  lines.push(`    rating: ${prod.rating},`);
  lines.push(`    reviews: ${prod.reviews},`);
  lines.push(`    stock: ${prod.stock},`);
  if (prod.badge) lines.push(`    badge: ${tsValue(prod.badge)},`);
  if (prod.featured) lines.push(`    featured: true,`);
  if (prod.bestseller) lines.push(`    bestseller: true,`);
  if (prod.newArrival) lines.push(`    newArrival: true,`);
  lines.push(`    sku: ${tsValue(prod.sku)},`);
  return `  {\n${lines.join("\n")}\n  }`;
}

const counts = {};
for (const prod of products) {
  counts[prod.categorySlug] = (counts[prod.categorySlug] || 0) + 1;
}

const file = `import { Product } from "@/types";
import { categories } from "./categories";

export const products: Product[] = [
${products.map(productBlock).join(",\n")}
];

for (const category of categories) {
  category.productCount = products.filter((p) => p.categorySlug === category.slug).length;
}

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getProductById(id: string): Product | undefined {
  return products.find((p) => p.id === id);
}

export function getProductsByCategory(categorySlug: string): Product[] {
  return products.filter((p) => p.categorySlug === categorySlug);
}

export function getProductsBySlugs(slugs: readonly string[]): Product[] {
  return slugs
    .map((slug) => products.find((p) => p.slug === slug))
    .filter((p): p is Product => p !== undefined);
}

export function getFeaturedProducts(): Product[] {
  return products.filter((p) => p.featured);
}

export function getBestsellerProducts(): Product[] {
  return products.filter((p) => p.bestseller);
}

export function getNewArrivals(): Product[] {
  return products.filter((p) => p.newArrival);
}

export function getDealProducts(): Product[] {
  return products.filter((p) => p.salePrice);
}

export function searchProducts(query: string): Product[] {
  const q = query.toLowerCase().trim();
  if (!q) return products;
  return products.filter(
    (p) =>
      p.name.toLowerCase().includes(q) ||
      p.category.toLowerCase().includes(q) ||
      p.description.toLowerCase().includes(q)
  );
}

export function getRelatedProducts(product: Product, limit = 8): Product[] {
  return products
    .filter((p) => p.categorySlug === product.categorySlug && p.id !== product.id)
    .slice(0, limit);
}

export function getEffectivePrice(product: Product): number {
  return product.salePrice ?? product.price;
}
`;

fs.writeFileSync(path.join(ROOT, "data/products.ts"), file);
console.log(`Wrote ${products.length} products`);
console.log(counts);
const missing = [];
for (const prod of products) {
  for (const img of prod.images) {
    const abs = path.join(ROOT, "public", img.replace(/^\//, ""));
    if (!fs.existsSync(abs)) missing.push(img);
  }
}
if (missing.length) {
  console.error("MISSING IMAGES", missing);
  process.exit(1);
}
console.log("All product images exist.");
