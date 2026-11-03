export type Localized = { en: string; ta: string };

/** Printed in the PDF only. The website always asks the buyer to message for the figure. */
export const quotedPrice: Localized | null = null;

export const pdfPath = "/chakravarthy-nagar.pdf";

export const mapCenter = { latitude: 12.939267, longitude: 80.20343 };

export const whatsappMessage: Localized = {
  en: "Hello, I would like the current price for Flat F1 at Dwarak Chakravarthy Nagar, 5th Cross Street, Pallikaranai.",
  ta: "வணக்கம், பள்ளிக்கரணை சக்கரவர்த்தி நகர் 5-வது குறுக்குத் தெருவில் உள்ள துவாரக் சக்கரவர்த்தி நகர், F1 இல்லத்தின் தற்போதைய விலையை அறிய விரும்புகிறேன்.",
};

export const facts: { label: Localized; value: Localized; note: Localized }[] = [
  {
    label: { en: "Area", ta: "பரப்பளவு" },
    value: { en: "1,248 sq. ft.", ta: "1,248 சதுர அடி" },
    note: { en: "Including common area", ta: "பொதுப் பகுதியுடன்" },
  },
  {
    label: { en: "Home", ta: "இல்லம்" },
    value: { en: "Flat F1", ta: "F1" },
    note: { en: "First floor", ta: "முதல் மாடி" },
  },
  {
    label: { en: "Parking", ta: "வாகன நிறுத்தம்" },
    value: { en: "One car", ta: "ஒரு கார்" },
    note: { en: "Reserved bay F1", ta: "ஒதுக்கப்பட்ட இடம் F1" },
  },
  {
    label: { en: "Land share", ta: "நிலப் பங்கு" },
    value: { en: "627 sq. ft.", ta: "627 சதுர அடி" },
    note: { en: "Undivided share", ta: "பிரிக்கப்படாத பங்கு" },
  },
];

export const sections: { id: string; label: Localized }[] = [
  { id: "building", label: { en: "The building", ta: "கட்டிடம்" } },
  { id: "builder", label: { en: "The builder", ta: "கட்டுபவர்" } },
  { id: "home", label: { en: "The home", ta: "இல்லம்" } },
  { id: "around", label: { en: "Around you", ta: "சுற்றுப்புறம்" } },
  { id: "price", label: { en: "The price", ta: "விலை" } },
];

type SpecItem = { title: Localized; summary: Localized; spec: string };

export const qualities: SpecItem[] = [
  {
    title: { en: "A concrete frame", ta: "கான்கிரீட் சட்டகம்" },
    summary: {
      en: "The floors are carried by an RCC frame on column foundations, not by the brick walls alone.",
      ta: "மாடிகள் செங்கல் சுவரின் மீது அல்ல, தூண் அடித்தளத்தின் மேல் அமைந்த ஆர்.சி.சி. சட்டகத்தின் மீது நிற்கும்.",
    },
    spec: "Column foundation with an RCC framed structure. Quality burnt bricks are used for the structure.",
  },
  {
    title: { en: "Nine-inch outer walls", ta: "ஒன்பது அங்குல வெளிச்சுவர்" },
    summary: {
      en: "The outside wall is 9-inch burnt brick. Rooms are divided by 4.5-inch burnt-brick partitions.",
      ta: "வெளிச்சுவர் 9 அங்குல சுட்ட செங்கல். அறைப் பிரிவுகள் 4.5 அங்குல சுட்ட செங்கல்.",
    },
    spec: "Outer walls are 9-inch burnt brick in cement mortar, with plastering. Inner partition walls are 4.5-inch burnt brick.",
  },
  {
    title: { en: "Power with a safety breaker", ta: "பாதுகாப்பு சர்க்யூட் பிரேக்கருடன் மின்சாரம்" },
    summary: {
      en: "Three-phase supply, concealed wiring, and both an MCCB and an RCCB.",
      ta: "மூன்று ஃபேஸ் மின்சாரம், மறைமுக வயரிங், எம்.சி.சி.பி. மற்றும் ஆர்.சி.சி.பி.",
    },
    spec: "Three-phase supply with an MCCB and an RCCB, and concealed wiring.",
  },
  {
    title: { en: "Water, a stair, and a lift", ta: "தண்ணீர், படிக்கட்டு, லிஃப்ட்" },
    summary: {
      en: "A bore well, an underground sump, and an overhead tank. Granite stairs, a steel handrail, and a lift.",
      ta: "ஆழ்துளைக் கிணறு, நிலத்தடி தொட்டி, மேல்நிலைத் தொட்டி. கருங்கல் படிக்கட்டு, எஃகு கைப்பிடி, லிஃப்ட்.",
    },
    spec: "Bore well, underground RCC sump, and an overhead tank. Rainwater pipes are PVC. A jet motor serves the bore well, and a monoblock pump lifts water from the sump to the overhead tank. Lift. Stairs in Sadarahalli grey granite with stainless-steel handrails.",
  },
];

export const homeItems: SpecItem[] = [
  {
    title: { en: "Floors", ta: "தரை" },
    summary: {
      en: "Vitrified tiles in the hall and bedrooms. Anti-skid tiles in wet areas, included up to ₹55 per sq. ft.",
      ta: "ஹால் மற்றும் படுக்கையறைகளில் விட்ரிஃபைட் டைல்ஸ். நனைந்த இடங்களில் ஆன்டி-ஸ்கிட் டைல்ஸ். சதுர அடிக்கு ₹55 வரை சேர்க்கப்பட்டுள்ளது.",
    },
    spec: "2 ft × 2 ft vitrified tiles in the hall and bedrooms. 1 ft × 1 ft anti-skid tiles in the toilets, utility, and balconies. The basic rate for all tiles is ₹55 per sq. ft. A costlier tile is charged only as the difference.",
  },
  {
    title: { en: "Walls you see", ta: "காணும் சுவர்கள்" },
    summary: {
      en: "Putty and premium emulsion inside. Two coats of Apex paint on the outside.",
      ta: "உள்ளே புட்டி மற்றும் பிரிமியம் எமல்ஷன். வெளியே இரண்டு அடுக்கு அபெக்ஸ் பெயிண்ட்.",
    },
    spec: "Internal walls: two coats of premium emulsion over a coat of primer and two coats of putty. External walls: cement plaster, then two coats of Apex paint over a coat of primer.",
  },
  {
    title: { en: "Kitchen", ta: "சமையலறை" },
    summary: {
      en: "A raised platform, a granite top, and a stainless-steel sink. A tile band above the counter, plus a loft.",
      ta: "உயர்த்தப்பட்ட மேடை, கருங்கல் மேல்பரப்பு, ஸ்டெயின்லெஸ் சிங்க். கவுண்டருக்கு மேல் டைல், மற்றும் ஒரு லாஃப்ட்.",
    },
    spec: "Raised cooking platform with a granite top and a stainless-steel sink, without a drain board. Coloured tiles up to 2 ft above the kitchen slab. One open loft and one shelf, sized to the room. One grinder point, and a fridge point in the kitchen.",
  },
  {
    title: { en: "Doors and windows", ta: "கதவுகளும் ஜன்னல்களும்" },
    summary: {
      en: "A teak main door with a Godrej lock. UPVC windows with a safety grill.",
      ta: "தேக்கு பிரதான கதவு, காட்ரெஜ் பூட்டு. பாதுகாப்பு கிரில்லுடன் யூ.பி.வி.சி. ஜன்னல்கள்.",
    },
    spec: "Main entrance frame and shutter: first-quality teak, with a Godrej lock. Other frames: teak. Other shutters: 30 mm flush doors with ordinary mortise locks. Toilet shutters: water-resistant, with stainless-steel hinges. Windows: UPVC glazed, with an MS grill.",
  },
  {
    title: { en: "Bathrooms", ta: "குளியலறைகள்" },
    summary: {
      en: "White sanitaryware, tiles up to 7 ft, and separate hot and cold lines. A geyser point in each toilet.",
      ta: "வெள்ளை சானிட்டரி, 7 அடி வரை டைல்ஸ், தனி சூடு மற்றும் குளிர் குழாய்கள். ஒவ்வொரு கழிவறையிலும் கீசர் பாயிண்ட்.",
    },
    spec: "Glazed ceramic tiles up to 7 ft in toilets. White ceramic sanitaryware, Parryware or equivalent, with an EWC in every toilet. CP fittings are Jaguar or equivalent. Cold-water lines and the other water pipes are UPVC. Hot-water lines are CPVC. One geyser point in every toilet.",
  },
  {
    title: { en: "Power, loft, and connections", ta: "மின்சாரம், லாஃப்ட், இணைப்புகள்" },
    summary: {
      en: "Concealed points for daily use, a loft in the bedrooms, and a pipe for TV and phone in the hall and the main bedroom.",
      ta: "தினசரி பயன்பாட்டுக்கு மறைமுக பாயிண்ட்கள், படுக்கையறைகளில் லாஃப்ட், ஹால் மற்றும் பிரதான படுக்கையறையில் டிவி மற்றும் தொலைபேசி குழாய்.",
    },
    spec: "Light and fan points of standard quality. Switches: Legrand or equivalent. Cables: Kundan or equivalent. One fridge point in the hall. One open loft and one shelf in the bedrooms, sized to the room. Pipe provision for one TV and one telephone in the hall and the master bedroom.",
  },
];

export const paperwork: Localized[] = [
  {
    en: "Flat F1 is on the first floor. The schedule records 1,248 sq. ft., including common area, and one reserved car park marked F1.",
    ta: "F1 முதல் மாடியில் உள்ளது. ஆவணப்படி 1,248 சதுர அடி, பொதுப் பகுதியுடன், மற்றும் F1 என்று குறிக்கப்பட்ட ஒரு ஒதுக்கப்பட்ட கார் இடம்.",
  },
  {
    en: "This home’s undivided share of land is 627 sq. ft. The land in the schedule measures 3,048 sq. ft., plus 451 sq. ft. as a share in the passage, 3,499 sq. ft. in all.",
    ta: "இந்த இல்லத்தின் பிரிக்கப்படாத நிலப் பங்கு 627 சதுர அடி. ஆவணத்தில் உள்ள நிலம் 3,048 சதுர அடி, பாதையில் 451 சதுர அடி பங்கும் சேர்த்து மொத்தம் 3,499 சதுர அடி.",
  },
  {
    en: "The passage leads to the 20-foot-wide 5th Cross Street. The property is in the Chennai South registration district, sub-registrar Chennai South Joint-I.",
    ta: "பாதை 20 அடி அகலமுள்ள 5-வது குறுக்குத் தெருவுக்குச் செல்கிறது. பதிவு மாவட்டம் சென்னை சவுத், சப்-ரஜிஸ்ட்ரார் சென்னை சவுத் ஜாயிண்ட்-I.",
  },
  {
    en: "Approval papers are shared when you ask for the price, so you can read them with the figure.",
    ta: "விலையைக் கேட்கும்போது அனுமதி ஆவணங்கள் பகிரப்படும். தொகையுடன் அவற்றையும் படிக்கலாம்.",
  },
];

export type Place = { name: string; meta: Localized };

export const placeGroups: {
  id: string;
  title: Localized;
  intro: Localized;
  visible: Place[];
  more: Place[];
  mapQuery: string;
}[] = [
  {
    id: "schools",
    title: { en: "Schools", ta: "பள்ளிகள்" },
    intro: {
      en: "The nearest school is inside the neighbourhood. The others are a short ride out.",
      ta: "அருகிலுள்ள பள்ளி இதே பகுதியில். மற்றவை சிறிது தூரத்தில்.",
    },
    visible: [
      { name: "St. Antony's School", meta: { en: "about 400 m", ta: "சுமார் 400 மீ" } },
      { name: "Infant Jesus High School", meta: { en: "about 1.1 km", ta: "சுமார் 1.1 கி.மீ" } },
    ],
    more: [
      { name: "Himayam Matriculation School", meta: { en: "about 1.2 km", ta: "சுமார் 1.2 கி.மீ" } },
      { name: "St. Peter's School", meta: { en: "about 1.2 km", ta: "சுமார் 1.2 கி.மீ" } },
      { name: "Netaji Vidyalaya", meta: { en: "about 1.2 km", ta: "சுமார் 1.2 கி.மீ" } },
      { name: "Asan Memorial College", meta: { en: "about 1.6 km", ta: "சுமார் 1.6 கி.மீ" } },
      { name: "Pallikaranai Government Higher Secondary School", meta: { en: "about 1.8 km", ta: "சுமார் 1.8 கி.மீ" } },
    ],
    mapQuery: "schools near Chakravarthy Nagar Pallikaranai",
  },
  {
    id: "care",
    title: { en: "Hospitals", ta: "மருத்துவமனைகள்" },
    intro: {
      en: "A clinic is on the next street. Larger hospitals are a short ride away.",
      ta: "அடுத்த தெருவில் ஒரு கிளினிக். பெரிய மருத்துவமனைகள் சிறிது தூரத்தில்.",
    },
    visible: [
      { name: "Delicare Clinic", meta: { en: "about 250 m", ta: "சுமார் 250 மீ" } },
      { name: "Inbam Hospital, Selvam Nagar", meta: { en: "about 600 m", ta: "சுமார் 600 மீ" } },
      { name: "Dr. Kamakshi Memorial Hospital", meta: { en: "about 1.3 km, Radial Road", ta: "சுமார் 1.3 கி.மீ, ரேடியல் சாலை" } },
    ],
    more: [
      { name: "Sneham Clinic", meta: { en: "about 400 m", ta: "சுமார் 400 மீ" } },
      { name: "Balagandhara Varma Nursing Home", meta: { en: "about 550 m", ta: "சுமார் 550 மீ" } },
      { name: "Deepam Medfirst Hospital", meta: { en: "about 850 m", ta: "சுமார் 850 மீ" } },
      { name: "Dr. Velmurugan Hospital", meta: { en: "about 1.1 km", ta: "சுமார் 1.1 கி.மீ" } },
      { name: "V Cure Hospital", meta: { en: "about 1.3 km", ta: "சுமார் 1.3 கி.மீ" } },
      { name: "Muthu Multi Speciality Hospital", meta: { en: "about 1.3 km", ta: "சுமார் 1.3 கி.மீ" } },
      { name: "Kauvery Hospital", meta: { en: "about 1.8 km", ta: "சுமார் 1.8 கி.மீ" } },
    ],
    mapQuery: "hospitals near Chakravarthy Nagar Pallikaranai",
  },
  {
    id: "food",
    title: { en: "Food", ta: "உணவு" },
    intro: {
      en: "An everyday mess is a short walk away. More restaurants are mapped along the main roads.",
      ta: "தினசரி மெஸ் நடந்து செல்லும் தூரத்தில். மேலும் உணவகங்கள் பிரதான சாலைகளில் உள்ளன.",
    },
    visible: [{ name: "Amma Mess", meta: { en: "about 250 m", ta: "சுமார் 250 மீ" } }],
    more: [
      { name: "Sangeetha Veg Restaurant", meta: { en: "about 1.5 km", ta: "சுமார் 1.5 கி.மீ" } },
      { name: "Faruuzi Multicuisine", meta: { en: "about 1.5 km", ta: "சுமார் 1.5 கி.மீ" } },
    ],
    mapQuery: "restaurants near Chakravarthy Nagar Pallikaranai",
  },
  {
    id: "open",
    title: { en: "Open ground", ta: "திறந்த வெளி" },
    intro: {
      en: "Two neighbourhood parks are close. The marsh, a protected wetland, is the large open land to the east.",
      ta: "இரண்டு பூங்காக்கள் அருகில். கிழக்கே உள்ள பாதுகாக்கப்பட்ட சதுப்பு நிலம் பெரிய திறந்த வெளி.",
    },
    visible: [
      { name: "IIT Colony Park", meta: { en: "about 600 m", ta: "சுமார் 600 மீ" } },
      { name: "Kammkottai Park", meta: { en: "about 1 km", ta: "சுமார் 1 கி.மீ" } },
      {
        name: "Pallikaranai Marsh",
        meta: { en: "about 2.8 km east", ta: "கிழக்கே சுமார் 2.8 கி.மீ" },
      },
    ],
    more: [],
    mapQuery: "parks near Chakravarthy Nagar Pallikaranai",
  },
  {
    id: "routes",
    title: { en: "Getting out", ta: "வெளியே செல்ல" },
    intro: {
      en: "Two bus stops are within a short walk. Velachery and the OMR corridor are the usual drives for work.",
      ta: "இரண்டு பேருந்து நிறுத்தங்கள் நடந்து செல்லும் தூரத்தில். வேலைக்கு வேளச்சேரியும் ஓ.எம்.ஆரும் வழக்கமான வழி.",
    },
    visible: [
      { name: "Narayanapuram bus stop", meta: { en: "about 300 m", ta: "சுமார் 300 மீ" } },
      { name: "Pallikaranai bus stop", meta: { en: "about 600 m", ta: "சுமார் 600 மீ" } },
    ],
    more: [
      { name: "Balaji Dental College bus stop", meta: { en: "about 750 m", ta: "சுமார் 750 மீ" } },
      { name: "Velachery", meta: { en: "about 4.5 km north, straight line", ta: "வடக்கே சுமார் 4.5 கி.மீ, நேர்கோடு" } },
      { name: "OMR at Perungudi", meta: { en: "about 5 km east, straight line", ta: "கிழக்கே சுமார் 5 கி.மீ, நேர்கோடு" } },
    ],
    mapQuery: "Chakravarthy Nagar Pallikaranai",
  },
];

export const included: Localized[] = [
  { en: "RCC framed structure on column foundations, and quality burnt brick", ta: "தூண் அடித்தளத்தின் மேல் ஆர்.சி.சி. சட்டகம், தரமான சுட்ட செங்கல்" },
  { en: "9-inch outer walls and 4.5-inch inner walls", ta: "9 அங்குல வெளிச்சுவர், 4.5 அங்குல உட்சுவர்" },
  { en: "Putty, premium emulsion inside, and Apex paint outside", ta: "உள்ளே புட்டி மற்றும் பிரிமியம் எமல்ஷன், வெளியே அபெக்ஸ் பெயிண்ட்" },
  { en: "Vitrified and anti-skid tiles, included up to ₹55 per sq. ft.", ta: "விட்ரிஃபைட் மற்றும் ஆன்டி-ஸ்கிட் டைல்ஸ், சதுர அடிக்கு ₹55 வரை" },
  { en: "Granite kitchen platform and a stainless-steel sink", ta: "கருங்கல் சமையல் மேடை, ஸ்டெயின்லெஸ் சிங்க்" },
  { en: "Teak main door with a Godrej lock, and flush doors to the rooms", ta: "காட்ரெஜ் பூட்டுடன் தேக்கு பிரதான கதவு, அறைகளுக்கு ஃப்ளஷ் கதவுகள்" },
  { en: "UPVC windows with a safety grill", ta: "பாதுகாப்பு கிரில்லுடன் யூ.பி.வி.சி. ஜன்னல்கள்" },
  { en: "Bathroom tiles to 7 ft, white sanitaryware, Jaguar or equivalent fittings", ta: "7 அடி வரை குளியலறை டைல்ஸ், வெள்ளை சானிட்டரி, ஜாகுவார் அல்லது இணையான பிட்டிங்குகள்" },
  { en: "Concealed three-phase wiring, MCCB, RCCB, and a geyser point in each toilet", ta: "மறைமுக மூன்று ஃபேஸ் வயரிங், எம்.சி.சி.பி., ஆர்.சி.சி.பி., ஒவ்வொரு கழிவறையிலும் கீசர் பாயிண்ட்" },
  { en: "Bore well, underground sump, and overhead tank", ta: "ஆழ்துளைக் கிணறு, நிலத்தடி தொட்டி, மேல்நிலைத் தொட்டி" },
  { en: "Lift, Sadarahalli granite stair, and a stainless-steel handrail", ta: "லிஃப்ட், சடரஹள்ளி கருங்கல் படிக்கட்டு, ஸ்டெயின்லெஸ் கைப்பிடி" },
  { en: "One reserved car park, 1,248 sq. ft. including common area, and 627 sq. ft. of undivided land", ta: "ஒரு ஒதுக்கப்பட்ட கார் இடம், பொதுப் பகுதியுடன் 1,248 சதுர அடி, 627 சதுர அடி பிரிக்கப்படாத நிலம்" },
];

export const limits: { title: Localized; text: Localized }[] = [
  {
    title: { en: "The kitchen is not modular", ta: "சமையலறை மாடுலர் அல்ல" },
    text: {
      en: "It is a raised platform with a granite top and a stainless-steel sink, without a drain board.",
      ta: "கருங்கல் மேல்பரப்புடன் உயர்த்தப்பட்ட மேடை, ஸ்டெயின்லெஸ் சிங்க். டிரெய்ன் போர்டு இல்லை.",
    },
  },
  {
    title: { en: "Wardrobes are not included", ta: "அலமாரி சேர்க்கப்படவில்லை" },
    text: {
      en: "Bedrooms and the kitchen have one open loft and a shelf, sized to the room.",
      ta: "படுக்கையறைகளிலும் சமையலறையிலும் அறையின் அளவுக்கு ஒரு திறந்த லாஃப்டும் ஒரு ஷெல்ஃபும்.",
    },
  },
  {
    title: { en: "Bedroom locks are ordinary mortise locks", ta: "படுக்கையறை பூட்டுகள் சாதாரண மார்டைஸ்" },
    text: {
      en: "The Godrej lock is on the main door.",
      ta: "காட்ரெஜ் பூட்டு பிரதான கதவில்.",
    },
  },
  {
    title: { en: "A costlier tile is only the difference", ta: "அதிக விலை டைல் என்றால் வித்தியாசம் மட்டும்" },
    text: {
      en: "Tiles are included up to ₹55 per sq. ft. Anything above that is the extra you choose.",
      ta: "டைல்ஸ் சதுர அடிக்கு ₹55 வரை சேர்க்கப்பட்டுள்ளது. அதற்கு மேல் நீங்கள் தேர்ந்தெடுக்கும் வித்தியாசம்.",
    },
  },
];
