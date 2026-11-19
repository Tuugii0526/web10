// Лаб 10 — цомгийн эхний өгөгдөл (Лаб 9-ийн 12 зураг).
// Зургууд: Wikimedia Commons (images/*/credits.json).

export const photos = [
  {
    id: 1, title: 'Наадмын морин уралдаан', place: 'Төв', date: '2025-07-11', likes: 14,
    tags: ['наадам', 'морь', 'зун'], src: 'images/my/photo1.jpg',
    desc: 'Хүүхэд уяачид наадмын үеэр хээр талд морио давхиулж байна.',
    credit: { author: 'user:InvictaHOG', license: 'Public domain', url: 'https://commons.wikimedia.org/wiki/File:Three_Naadam_riders.jpg' },
  },
  {
    id: 2, title: 'Гэр', place: 'Төв', date: '2025-06-02', likes: 9,
    tags: ['соёл', 'нүүдэл'], src: 'images/my/photo2.jpg',
    desc: 'Монгол нүүдэлчдийн уламжлалт сууц — эвхэж, зөөж болдог.',
    credit: { author: 'Mark Fischer', license: 'CC BY-SA 2.0', url: 'https://commons.wikimedia.org/wiki/File:Mongolian_Ger.jpg' },
  },
  {
    id: 3, title: 'Адуу сүрэг', place: 'Баян-Өлгий', date: '2025-08-19', likes: 11,
    tags: ['морь', 'гол', 'зун'], src: 'images/my/photo3.jpg',
    desc: 'Баруун Монголд ах дүү хоёр адуугаа голоор гатлуулж байна.',
    credit: { author: 'Bfreeproductions', license: 'CC BY-SA 4.0', url: 'https://commons.wikimedia.org/wiki/File:Two_brothers_lead_a_herd_of_horses_across_a_river_in_Western_Mongolia.jpg' },
  },
  {
    id: 4, title: 'Бүргэдчин', place: 'Баян-Өлгий', date: '2025-10-04', likes: 18,
    tags: ['соёл', 'бүргэд', 'намар'], src: 'images/my/photo4.jpg',
    desc: 'Баян-Өлгийн казах бүргэдчин алтан бүргэдтэйгээ.',
    credit: { author: 'Ceyhun Kavakci', license: 'CC BY-SA 2.0', url: 'https://commons.wikimedia.org/wiki/File:Kazakh_Eagle_Hunter_with_Golden_Eagle_in_Bayan_Olgii_region,_Mongolia.jpg' },
  },
  {
    id: 5, title: 'Улаанбаатар шөнө', place: 'Улаанбаатар', date: '2025-12-20', likes: 7,
    tags: ['хот', 'шөнө', 'өвөл'], src: 'images/my/photo5.jpg',
    desc: 'Нийслэл хотын шөнийн гэрэлтэй дүр төрх.',
    credit: { author: 'Sebacalka', license: 'CC BY-SA 4.0', url: 'https://commons.wikimedia.org/wiki/File:Ulaanbaatar_skyline_in_night.jpg' },
  },
  {
    id: 6, title: 'Гандантэгчэнлин хийд', place: 'Улаанбаатар', date: '2025-05-15', likes: 6,
    tags: ['хийд', 'хот', 'түүх'], src: 'images/my/photo6.jpg',
    desc: 'Улаанбаатарын хамгийн том, идэвхтэй буддын хийд.',
    credit: { author: 'Chongkian', license: 'CC BY-SA 4.0', url: 'https://commons.wikimedia.org/wiki/File:Gandantegchinlen_Monastery_(2024).jpg' },
  },
  {
    id: 7, title: 'Хөвсгөл нуур', place: 'Хөвсгөл', date: '2025-07-28', likes: 21,
    tags: ['нуур', 'байгаль', 'зун'], src: 'images/places/khuvsgul.jpg',
    desc: 'Монголын хамгийн том, гүн цэнгэг устай нуур. «Монголын хөх сувд» гэж нэрлэдэг.',
    credit: { author: 'Teo Romera', license: 'CC BY-SA 2.0', url: 'https://commons.wikimedia.org/wiki/File:Khuvsgul_Lake.jpg' },
  },
  {
    id: 8, title: 'Тэрэлж — Мэлхий хад', place: 'Төв', date: '2025-09-07', likes: 12,
    tags: ['хад', 'байгаль', 'намар'], src: 'images/places/terelj.jpg',
    desc: 'Горхи-Тэрэлжийн байгалийн цогцолборт газар, Улаанбаатараас ~70 км зайтай.',
    credit: { author: 'BáthoryPéter (talk)', license: 'CC BY-SA 4.0', url: 'https://commons.wikimedia.org/wiki/File:Turtle_Rock,_Gorkhi-Terelj_National_Park.jpg' },
  },
  {
    id: 9, title: 'Хонгорын элс', place: 'Өмнөговь', date: '2025-08-03', likes: 16,
    tags: ['говь', 'элс', 'зун'], src: 'images/places/khongor.jpg',
    desc: 'Өмнөговьд 100 гаруй км үргэлжилдэг «дуут манхан».',
    credit: { author: 'Josep Renalias Lohen11', license: 'CC BY 4.0', url: 'https://commons.wikimedia.org/wiki/File:Khongoryn_Els.jpg' },
  },
  {
    id: 10, title: 'Баянзаг', place: 'Өмнөговь', date: '2025-08-05', likes: 10,
    tags: ['говь', 'түүх', 'зун'], src: 'images/places/bayanzag.jpg',
    desc: 'Улаан эрэг. Үлэг гүрвэлийн өндөг анх олдсон газар.',
    credit: { author: 'Bernard Gagnon', license: 'CC0', url: 'https://commons.wikimedia.org/wiki/File:Bayanzag_07.jpg' },
  },
  {
    id: 11, title: 'Улаан цутгалан хүрхрээ', place: 'Өвөрхангай', date: '2025-07-20', likes: 8,
    tags: ['хүрхрээ', 'байгаль', 'зун'], src: 'images/places/tsutgalan.jpg',
    desc: 'Орхон голын хүрхрээ, Өвөрхангай аймаг.',
    credit: { author: 'Bernard Gagnon', license: 'CC0', url: 'https://commons.wikimedia.org/wiki/File:Ulaan_Tsutgalan_Waterfall.jpg' },
  },
  {
    id: 12, title: 'Эрдэнэ Зуу хийд', place: 'Өвөрхангай', date: '2025-07-22', likes: 13,
    tags: ['хийд', 'түүх'], src: 'images/places/erdenezuu.jpg',
    desc: '1585 онд Хархоринд байгуулагдсан, Монголын хамгийн эртний буддын хийдүүдийн нэг.',
    credit: { author: 'Виктор Пинчук', license: 'CC BY-SA 4.0', url: 'https://commons.wikimedia.org/wiki/File:Erdene_Zuu_Monastery.jpg' },
  },
];
