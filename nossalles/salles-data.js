/* =====================================================================
   The Bureau — Nos Salles · data, i18n & renderers
   Contenu réel (doc « Page location ») — 8 salles, 2 arrondissements.
   ===================================================================== */
(function () {
  "use strict";

  /* ---------- Equipment icons (1.4-stroke, geometric) ---------------- */
  var ICONS = {
    ecran:'<rect x="3" y="4" width="18" height="12" rx="1"/><path d="M9 20h6M12 16v4"/>',
    visio:'<rect x="2.5" y="6" width="13" height="12" rx="2"/><path d="M15.5 10l6-3v10l-6-3z"/>',
    projecteur:'<rect x="2" y="8" width="15" height="9" rx="1.5"/><circle cx="8.5" cy="12.5" r="2.6"/><path d="M19 11h2.5"/>',
    micro:'<rect x="9" y="3" width="6" height="11" rx="3"/><path d="M6 11a6 6 0 0 0 12 0M12 17v4M9 21h6"/>',
    cafe:'<path d="M4 8h13v4a5 5 0 0 1-5 5H9a5 5 0 0 1-5-5z"/><path d="M17 9h2.2a2.4 2.4 0 0 1 0 4.8H17"/><path d="M8 3.2v2M11 3.2v2"/>',
    wifi:'<path d="M2.5 8.5a15 15 0 0 1 19 0M5.5 12a10 10 0 0 1 13 0M8.5 15.4a5 5 0 0 1 7 0"/><circle cx="12" cy="19" r="1"/>',
    lumiere:'<circle cx="12" cy="12" r="3.6"/><path d="M12 2.5v2.4M12 19.1v2.4M2.5 12h2.4M19.1 12h2.4M5.2 5.2l1.7 1.7M17.1 17.1l1.7 1.7M18.8 5.2l-1.7 1.7M6.9 17.1l-1.7 1.7"/>',
    terrasse:'<path d="M12 21v-9M12 12c0-3.2 2.1-5.3 5.2-5.3 0 3.2-2.1 5.3-5.2 5.3zM12 14.5c0-2.4-1.8-4.2-4.6-4.2 0 2.4 1.8 4.2 4.6 4.2z"/><path d="M8 21h8"/>',
    cheminee:'<rect x="4" y="3" width="16" height="18" rx="0.5"/><path d="M4 8.5h16"/><path d="M12 18.5c1.6-.9 2.2-2.3 1.3-3.9 1.5.7 2.2 2.2 1.4 3.9 1.7-.9 1.8-3.4.2-5.1.3 1.7-.9 2.1-1.5 1-.9-1.6.6-2.8-.5-4.4-1.2 1.3-3 2.7-2.4 4.9.3 1.2 1.1 2 1.5 3.6z"/>',
    telephone:'<path d="M5 3.5h3.2l1.8 4.6-2.4 1.5a11 11 0 0 0 4.8 4.8l1.5-2.4 4.6 1.8V18a2.5 2.5 0 0 1-2.7 2.5A16.5 16.5 0 0 1 2.5 6.2 2.5 2.5 0 0 1 5 3.5z"/>',
    bar:'<path d="M4.5 4h15l-7.5 8.2zM12 12.2V20M8 20h8M6.2 6h11.6"/>',
    restauration:'<path d="M6 3v6.2a2 2 0 0 0 4 0V3M8 9.2V21"/><path d="M16.5 3c1.9 1.9 1.9 6.8 0 8.7V21"/>',
    vue:'<rect x="3" y="3.5" width="18" height="17" rx="1"/><path d="M3 12h18M12 3.5v17"/>',
    paperboard:'<rect x="5" y="6.5" width="14" height="10" rx="0.5"/><path d="M12 3v3.5M6.5 21l2.2-4.5M17.5 21l-2.2-4.5"/>',
    patio:'<path d="M12 2.5a6 6 0 0 0 0 12 6 6 0 0 0 0-12zM12 14.5V21M8 21h8"/><path d="M6.5 8.5H4M20 8.5h-2.5"/>'
  };
  function icon(n){ return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round">'+(ICONS[n]||'')+'</svg>'; }

  var EQUIP = {
    ecran:{fr:'Écran',en:'Screen'}, visio:{fr:'Visio',en:'Video'},
    projecteur:{fr:'Vidéoprojecteur',en:'Projector'}, micro:{fr:'Sonorisation',en:'Sound'},
    cafe:{fr:'Café',en:'Coffee'}, wifi:{fr:'Wi-Fi',en:'Wi-Fi'},
    lumiere:{fr:'Lumière naturelle',en:'Natural light'}, terrasse:{fr:'Terrasse',en:'Terrace'},
    cheminee:{fr:'Cheminée',en:'Fireplace'}, telephone:{fr:'Ligne directe',en:'Direct line'},
    bar:{fr:'Bar',en:'Bar'}, restauration:{fr:'Restauration',en:'Catering'},
    vue:{fr:'Vue sur la Seine',en:'Seine view'}, paperboard:{fr:'Paperboard',en:'Flip chart'},
    patio:{fr:'Accès patio',en:'Patio access'}
  };

  /* ---------- Arrondissements (groupes) ------------------------------ */
  var ARR = {
    '8e':{ fr:'Paris 8ᵉ', en:'Paris 8', sub:{fr:'Alma · bord de Seine, face à la Tour Eiffel',en:'Alma · riverside, facing the Eiffel Tower'} },
    '2e':{ fr:'Paris 2ᵉ', en:'Paris 2', sub:{fr:'Opéra · Bourse · Notre-Dame-des-Victoires',en:'Opéra · Bourse · Notre-Dame-des-Victoires'} }
  };
  var ARR_ORDER = ['8e','2e'];

  /* ---------- Rooms — contenu réel (descriptions complètes) ---------- */
  var ROOMS = [
    /* ----- Paris 8ᵉ ----- */
    { id:'board-8e-28', name:'The Board Room', arr:'8e', photo:'photos/board-room-8e-28.png',
      tag:{fr:'Conseil',en:'Board'},
      address:'28 Cours Albert 1ᵉʳ, 75008 Paris',
      where:{fr:'28 Cours Albert 1ᵉʳ · Paris 8ᵉ',en:'28 Cours Albert 1ᵉʳ · Paris 8'},
      cap:12, mode:'seat', equip:['ecran','visio','vue','lumiere'],
      price:{fr:'400 € HT / demi-journée · 800 € HT / journée',en:'From €400 excl. VAT / half-day · €800 / full day'},
      presta:{fr:'Petit-déjeuner, collation, afterwork sur demande · déjeuner au restaurant privé The Café à partir de 33 € HT / pers.',
              en:'Breakfast, refreshments, afterwork on request · lunch at the private restaurant The Café from €33 excl. VAT / guest.'},
      desc:{fr:[
        'Située au 28 Cours Albert 1ᵉʳ, dans le 8ᵉ arrondissement de Paris, The Board Room est une salle de réunion premium pensée pour les échanges confidentiels et les prises de décision stratégiques.',
        'Installée dans un cadre élégant, cette salle entièrement équipée accueille jusqu’à 12 personnes. Elle convient particulièrement aux comités de direction, réunions d’actionnaires, rendez-vous clients ou sessions de travail avec des équipes internationales.',
        'Son principal atout : un environnement soigné, bénéficiant d’une vue sur la Seine. La salle associe confort, confidentialité et équipement audiovisuel, dans l’une des adresses les plus prestigieuses de The Bureau.'],
      en:[
        'At 28 Cours Albert 1ᵉʳ, in the 8th arrondissement of Paris, The Board Room is a premium meeting room designed for confidential exchanges and strategic decision-making.',
        'Set in an elegant space, this fully equipped room seats up to 12. It is particularly suited to board committees, shareholder meetings, client appointments or working sessions with international teams.',
        'Its main asset: a refined setting with a view over the Seine. The room combines comfort, confidentiality and audiovisual equipment, at one of The Bureau’s most prestigious addresses.']} },

    { id:'deal-8e-16', name:'The Deal Room', arr:'8e', photo:'photos/deal-room-8e-16.png',
      tag:{fr:'Réunion',en:'Meeting'},
      address:'16 Cours Albert 1ᵉʳ, 75008 Paris',
      where:{fr:'16 Cours Albert 1ᵉʳ · Paris 8ᵉ',en:'16 Cours Albert 1ᵉʳ · Paris 8'},
      cap:8, mode:'seat', equip:['ecran','visio','vue','lumiere'],
      price:{fr:'400 € HT / demi-journée · 800 € HT / journée',en:'From €400 excl. VAT / half-day · €800 / full day'},
      presta:{fr:'Petit-déjeuner, collation, afterwork sur demande · déjeuner au restaurant privé The Café à partir de 33 € HT / pers.',
              en:'Breakfast, refreshments, afterwork on request · lunch at the private restaurant The Café from €33 excl. VAT / guest.'},
      desc:{fr:[
        'À l’étage du 16 Cours Albert 1ᵉʳ, The Deal Room offre un format plus intimiste, idéal pour les réunions en petit comité. Située à l’Alma, en bord de Seine et face à la Tour Eiffel, elle accueille jusqu’à 8 personnes dans un environnement élégant et équipé.',
        'Cette salle de réunion convient aux rendez-vous confidentiels, aux réunions d’équipe resserrées, aux points stratégiques ou aux présentations nécessitant un cadre calme et qualitatif.',
        'Sa décoration soignée, son matériel audiovisuel et sa vue sur la Seine en font un lieu particulièrement adapté aux moments professionnels où l’attention portée au cadre compte autant que la fonctionnalité.'],
      en:[
        'On the upper floor of 16 Cours Albert 1ᵉʳ, The Deal Room offers a more intimate format, ideal for small-committee meetings. At Alma, by the Seine and facing the Eiffel Tower, it seats up to 8 in an elegant, equipped setting.',
        'This meeting room suits confidential appointments, tight-knit team meetings, strategic check-ins or presentations that call for a calm, high-quality setting.',
        'Its careful décor, audiovisual equipment and Seine view make it especially well suited to professional moments where the setting matters as much as functionality.']} },

    { id:'cafe-8e-28', name:'The Café', arr:'8e', photo:'photos/cafe-8e-28.png',
      tag:{fr:'Restaurant privé',en:'Private restaurant'},
      address:'28 Cours Albert 1ᵉʳ, 75008 Paris',
      where:{fr:'28 Cours Albert 1ᵉʳ · Paris 8ᵉ',en:'28 Cours Albert 1ᵉʳ · Paris 8'},
      cap:null, mode:'venue', equip:['restauration','bar','cafe'],
      usage:{fr:'Déjeuner professionnel · cocktail · pause · événement',en:'Business lunch · cocktail · break · event'},
      price:null,
      presta:{fr:'Déjeuner, pause gourmande, cocktail ou privatisation en soirée.',en:'Lunch, gourmet break, cocktail or evening private hire.'},
      desc:{fr:[
        'The Café est le restaurant privé du 28 Cours Albert 1ᵉʳ. Pensé comme un lieu de rencontres et d’échanges, il prolonge l’expérience The Bureau au-delà de la salle de réunion classique.',
        'Cet espace peut accompagner vos événements professionnels, notamment pour un déjeuner, une pause gourmande, un cocktail ou une privatisation en soirée. The Café s’inscrit dans l’esprit The Bureau : un cadre élégant, convivial et épicurien, où la gastronomie occupe une place importante.',
        'Il s’adresse aux entreprises qui souhaitent organiser un moment professionnel plus informel, recevoir des invités dans un cadre chaleureux ou associer réunion de travail et expérience de restauration.'],
      en:[
        'The Café is the private restaurant of 28 Cours Albert 1ᵉʳ. Conceived as a place to meet and exchange, it extends the The Bureau experience beyond the traditional meeting room.',
        'This space can accompany your professional events — a lunch, a gourmet break, a cocktail or an evening private hire. The Café embodies the The Bureau spirit: an elegant, convivial and epicurean setting where gastronomy plays a central role.',
        'It is designed for companies wishing to host a more informal professional moment, to welcome guests in a warm setting, or to pair a working meeting with a dining experience.']} },

    { id:'conference-8e-28', name:'The Conference Room', arr:'8e', photo:'photos/conference-8e-28.png',
      tag:{fr:'Conférence',en:'Conference'},
      address:'28 Cours Albert 1ᵉʳ, 75008 Paris',
      where:{fr:'28 Cours Albert 1ᵉʳ · Paris 8ᵉ',en:'28 Cours Albert 1ᵉʳ · Paris 8'},
      cap:30, mode:'seat', equip:['projecteur','ecran','micro','terrasse'],
      price:{fr:'800 € HT / demi-journée · 1 200 € HT / journée',en:'From €800 excl. VAT / half-day · €1,200 / full day'},
      presta:{fr:'Petit-déjeuner, collation, afterwork sur demande · déjeuner au restaurant privé The Café à partir de 33 € HT / pers.',
              en:'Breakfast, refreshments, afterwork on request · lunch at the private restaurant The Café from €33 excl. VAT / guest.'},
      desc:{fr:[
        'Toujours au 28 Cours Albert 1ᵉʳ, The Conference Room est l’espace le plus adapté aux formats élargis dans le 8ᵉ arrondissement. Située au premier étage, cette salle de réunion entièrement équipée peut accueillir jusqu’à 30 personnes.',
        'Elle répond aux besoins des entreprises qui souhaitent organiser une présentation, une réunion d’équipe élargie, une conférence, un atelier, une formation ou une journée d’étude. Son environnement bénéficie d’une ouverture sur terrasse, ce qui apporte un confort supplémentaire lors des temps de pause.',
        'The Conference Room combine capacité, équipement audiovisuel et services sur mesure, dans un cadre premium à proximité de la Seine.'],
      en:[
        'Still at 28 Cours Albert 1ᵉʳ, The Conference Room is the space best suited to larger formats in the 8th arrondissement. On the first floor, this fully equipped meeting room can host up to 30 guests.',
        'It meets the needs of companies organising a presentation, a larger team meeting, a conference, a workshop, a training session or a study day. Its setting opens onto a terrace, adding extra comfort during breaks.',
        'The Conference Room combines capacity, audiovisual equipment and tailored services, in a premium setting close to the Seine.']} },

    /* ----- Paris 2ᵉ ----- */
    { id:'board-2e-42', name:'The Board Room', arr:'2e', photo:'photos/board-room-2e-42.png',
      tag:{fr:'Conseil',en:'Board'},
      address:'42 rue Notre-Dame des Victoires, 75002 Paris',
      where:{fr:'42 rue N.-D. des Victoires · Paris 2ᵉ',en:'42 rue N.-D. des Victoires · Paris 2'},
      cap:12, mode:'seat', equip:['ecran','visio','patio','lumiere'],
      price:{fr:'400 € HT / demi-journée · 800 € HT / journée',en:'From €400 excl. VAT / half-day · €800 / full day'},
      presta:{fr:'Petit-déjeuner, collation, afterwork sur demande · déjeuner au Floor à partir de 26 € HT / pers.',
              en:'Breakfast, refreshments, afterwork on request · lunch at Le Floor from €26 excl. VAT / guest.'},
      desc:{fr:[
        'Dans le 2ᵉ arrondissement de Paris, The Bureau propose une Board Room située au 42 rue Notre-Dame des Victoires, face au Palais Brongniart.',
        'Cet espace entièrement équipé se trouve au rez-de-chaussée du bâtiment et bénéficie d’un accès direct par le patio. Il offre un cadre confidentiel et soigné, propice aux réunions de direction, aux échanges stratégiques ou à l’accueil d’équipes internationales.',
        'La salle peut accueillir jusqu’à 12 personnes. Son atmosphère calme et son design maîtrisé en font une adresse idéale pour louer une salle de réunion à Paris dans un quartier central, entre Opéra, Bourse et les grands pôles d’affaires du 2ᵉ arrondissement.'],
      en:[
        'In the 2nd arrondissement of Paris, The Bureau offers a Board Room at 42 rue Notre-Dame des Victoires, facing the Palais Brongniart.',
        'This fully equipped space sits on the ground floor of the building, with direct access via the patio. It provides a confidential, refined setting, well suited to board meetings, strategic exchanges or hosting international teams.',
        'The room seats up to 12. Its calm atmosphere and considered design make it an ideal address to rent a meeting room in Paris in a central district, between Opéra, Bourse and the major business hubs of the 2nd arrondissement.']} },

    { id:'deal-2e-25', name:'The Deal Room', arr:'2e', photo:'photos/deal-room-2e-25.png',
      tag:{fr:'Réunion',en:'Meeting'},
      address:'25 rue du 4 Septembre, 75002 Paris',
      where:{fr:'25 rue du 4 Septembre · Paris 2ᵉ',en:'25 rue du 4 Septembre · Paris 2'},
      cap:8, mode:'seat', equip:['ecran','lumiere','cafe','paperboard'],
      price:{fr:'480 € HT / demi-journée · 960 € HT / journée',en:'From €480 excl. VAT / half-day · €960 / full day'},
      presta:{fr:'Petit-déjeuner, collation, afterwork sur demande · déjeuner au restaurant privé The Comptoir à partir de 33 € HT / pers.',
              en:'Breakfast, refreshments, afterwork on request · lunch at the private restaurant The Comptoir from €33 excl. VAT / guest.'},
      desc:{fr:[
        'Située au 25 rue du 4 Septembre, The Deal Room du 2ᵉ arrondissement se distingue par son décor haussmannien et sa lumière naturelle. Installée au deuxième étage du bâtiment, elle constitue un espace chaleureux et structuré pour les réunions de travail exigeantes.',
        'La salle accueille jusqu’à 8 personnes. Elle est aménagée autour de trois zones : un petit salon, une grande table de réunion et des bureaux en îlots. Cette configuration permet d’alterner les temps de présentation, d’échange et de travail collaboratif.',
        'The Deal Room est particulièrement adaptée aux réunions de comité restreint, aux séances de travail confidentielles, aux rendez-vous clients ou aux ateliers nécessitant un cadre élégant et flexible.'],
      en:[
        'At 25 rue du 4 Septembre, the 2nd-arrondissement Deal Room stands out for its Haussmannian décor and natural light. On the second floor of the building, it is a warm, structured space for demanding working meetings.',
        'The room seats up to 8. It is arranged around three zones: a small lounge, a large meeting table and cluster desks. This layout makes it easy to move between presentation, discussion and collaborative work.',
        'The Deal Room is especially suited to small-committee meetings, confidential working sessions, client appointments or workshops that call for an elegant, flexible setting.']} },

    { id:'board-2e-25', name:'The Board Room', arr:'2e', photo:'photos/board-room-2e-25.png',
      tag:{fr:'Conseil',en:'Board'},
      address:'25 rue du 4 Septembre, 75002 Paris',
      where:{fr:'25 rue du 4 Septembre · Paris 2ᵉ',en:'25 rue du 4 Septembre · Paris 2'},
      cap:12, mode:'seat', equip:['ecran','visio','cafe','lumiere'],
      price:{fr:'400 € HT / demi-journée · 800 € HT / journée',en:'From €400 excl. VAT / half-day · €800 / full day'},
      presta:{fr:'Petit-déjeuner, collation, afterwork sur demande · déjeuner au restaurant privé The Comptoir à partir de 33 € HT / pers.',
              en:'Breakfast, refreshments, afterwork on request · lunch at the private restaurant The Comptoir from €33 excl. VAT / guest.'},
      desc:{fr:[
        'Également située au 25 rue du 4 Septembre, cette Board Room accueille jusqu’à 12 personnes dans un espace entièrement équipé, situé au rez-de-chaussée du bâtiment.',
        'Elle convient parfaitement aux réunions de direction, aux rendez-vous professionnels, aux réunions d’actionnaires ou aux sessions de travail avec des équipes internes ou externes. Son design soigné et son emplacement central en font une solution pertinente pour louer une salle de réunion premium à Paris, dans un quartier vivant et stratégique.',
        'L’adresse se situe entre Opéra et Bourse, dans un secteur recherché du 2ᵉ arrondissement, facilement identifiable pour des invités venant de Paris, d’Île-de-France ou de plus loin.'],
      en:[
        'Also at 25 rue du 4 Septembre, this Board Room seats up to 12 in a fully equipped space on the ground floor of the building.',
        'It is perfectly suited to board meetings, business appointments, shareholder meetings or working sessions with internal or external teams. Its refined design and central location make it a strong option to rent a premium meeting room in Paris, in a lively, strategic district.',
        'The address sits between Opéra and Bourse, in a sought-after part of the 2nd arrondissement, easy to find for guests coming from Paris, the Île-de-France region or further afield.']} },

    { id:'floor-2e-42', name:'Le Floor', arr:'2e', photo:'photos/floor-2e-42.png',
      tag:{fr:'Coffee shop',en:'Coffee shop'},
      address:'42 rue Notre-Dame des Victoires, 75002 Paris',
      where:{fr:'42 rue N.-D. des Victoires · Paris 2ᵉ',en:'42 rue N.-D. des Victoires · Paris 2'},
      cap:null, mode:'venue', equip:['cafe','restauration','bar'],
      usage:{fr:'Pause café · déjeuner · afterwork · privatisation',en:'Coffee break · lunch · afterwork · private hire'},
      price:null,
      presta:{fr:'Carte coffee shop & bakery le midi · pauses, déjeuners et privatisations selon disponibilité.',en:'Coffee shop & bakery menu at midday · breaks, lunches and private hire subject to availability.'},
      desc:{fr:[
        'Le Floor est situé au 42 rue Notre-Dame des Victoires, dans le 2ᵉ arrondissement de Paris. Cet espace complète l’offre de réunion et d’événements The Bureau avec une atmosphère plus ouverte, conviviale et adaptée aux moments professionnels informels.',
        'Le Floor est présenté comme un coffee shop le matin, avec une carte de restauration coffee shop & bakery pour le déjeuner. Il peut également être envisagé pour des formats événementiels, notamment des temps de convivialité, des pauses, des déjeuners ou des privatisations selon disponibilité.',
        'C’est un lieu pertinent pour prolonger une réunion, organiser un moment d’échange ou accueillir un événement professionnel dans un cadre moins conventionnel qu’une salle de réunion classique.'],
      en:[
        'Le Floor is at 42 rue Notre-Dame des Victoires, in the 2nd arrondissement of Paris. This space rounds out The Bureau’s meeting and events offer with a more open, convivial atmosphere suited to informal professional moments.',
        'Le Floor works as a coffee shop in the morning, with a coffee shop & bakery menu at lunch. It can also be considered for event formats — convivial gatherings, breaks, lunches or private hire, subject to availability.',
        'It is a fitting place to extend a meeting, host a moment of exchange or hold a professional event in a less conventional setting than a traditional meeting room.']} }
  ];

  /* ---------- i18n strings ------------------------------------------- */
  var T = {
    quote:{fr:'Recevoir la documentation',en:'Request the brochure'},
    discover:{fr:'Découvrir',en:'Discover'},
    seats:{fr:'personnes',en:'guests'},
    upto:{fr:'jusqu’à',en:'up to'},
    countLabel:{fr:'salles & espaces',en:'rooms & spaces'},
    equipTitle:{fr:'Équipements',en:'Amenities'},
    address:{fr:'Adresse',en:'Address'},
    capacity:{fr:'Capacité',en:'Capacity'},
    price:{fr:'Tarifs',en:'Rates'},
    presta:{fr:'Prestations',en:'Services'},
    usageLabel:{fr:'Usage',en:'Use'}
  };

  function capText(r, lang){
    if(r.mode==='venue') return r.usage[lang];
    return T.upto[lang]+' '+r.cap+' '+T.seats[lang];
  }
  function capShort(r, lang){
    if(r.mode==='venue') return lang==='fr'?'Restauration · Événements':'Dining · Events';
    return r.cap+' '+T.seats[lang];
  }
  function equipHTML(r, lang, max){
    var list = max ? r.equip.slice(0,max) : r.equip;
    return list.map(function(k){
      return '<span class="equip__item">'+icon(k)+'<span>'+EQUIP[k][lang]+'</span></span>';
    }).join('');
  }
  function descHTML(r, lang){
    return r.desc[lang].map(function(p){ return '<p>'+p+'</p>'; }).join('');
  }
  /* version courte pour l'index : 1er paragraphe (vue d'ensemble sans défilement) */
  function leadHTML(r, lang){
    return '<p>'+r.desc[lang][0]+'</p>';
  }
  function num2(i){ return (i+1<10?'0':'')+(i+1); }
  function quoteLink(r, lang){
    return 'mailto:contact@thebureau.paris?subject='+encodeURIComponent((lang==='fr'?'Documentation — ':'Brochure — ')+r.name+' ('+r.address+')');
  }

  /* meta block (adresse / capacité / tarifs / prestations) */
  function metaHTML(r, lang){
    var rows = '';
    rows += '<div class="meta__row"><span class="meta__k">'+T.address[lang]+'</span><span class="meta__v">'+r.address+'</span></div>';
    rows += '<div class="meta__row"><span class="meta__k">'+(r.mode==='venue'?T.usageLabel[lang]:T.capacity[lang])+'</span><span class="meta__v">'+capText(r,lang)+'</span></div>';
    if(r.price) rows += '<div class="meta__row"><span class="meta__k">'+T.price[lang]+'</span><span class="meta__v">'+r.price[lang]+'</span></div>';
    if(r.presta) rows += '<div class="meta__row"><span class="meta__k">'+T.presta[lang]+'</span><span class="meta__v">'+r.presta[lang]+'</span></div>';
    return rows;
  }

  /* ---------- Renderers ---------------------------------------------- */
  function renderGalerie(mount, lang){
    mount.className = 'grid-galerie';
    mount.innerHTML = ROOMS.map(function(r,i){
      return '<a class="gcard reveal" href="'+quoteLink(r,lang)+'">'+
        '<img src="'+r.photo+'" alt="'+r.name+'">'+
        '<div class="gcard__overlay"></div>'+
        '<div class="gcard__content">'+
          '<div class="gcard__top">'+
            '<span class="gcard__num">'+num2(i)+'</span>'+
            '<span class="tag gcard__tag">'+r.tag[lang]+'</span>'+
          '</div>'+
          '<div class="gcard__bottom">'+
            '<span class="eyelet">'+r.where[lang]+'</span>'+
            '<div class="gcard__name">'+r.name+'</div>'+
            '<div class="gcard__foot">'+
              '<span class="gcard__cap"><b>'+capShort(r,lang)+'</b></span>'+
              '<span class="gcard__go">'+T.quote[lang]+' →</span>'+
            '</div>'+
            '<div class="equip" style="margin-top:14px">'+equipHTML(r,lang,4)+'</div>'+
          '</div>'+
        '</div></a>';
    }).join('');
  }

  function renderEditorial(mount, lang){
    mount.className = 'list-editorial';
    mount.innerHTML = ROOMS.map(function(r,i){
      return '<article class="erow reveal">'+
        '<div class="erow__media">'+
          '<img src="'+r.photo+'" alt="'+r.name+'">'+
          '<span class="erow__num">'+num2(i)+'</span>'+
          '<span class="tag erow__tag">'+r.tag[lang]+'</span>'+
        '</div>'+
        '<div class="erow__body">'+
          '<span class="eyelet">'+r.where[lang]+'</span>'+
          '<h3 class="erow__name">'+r.name+'</h3>'+
          '<div class="erow__desc">'+descHTML(r,lang)+'</div>'+
          '<div class="erow__cap"><b>'+capText(r,lang)+'</b></div>'+
          '<div class="equip erow__equip">'+equipHTML(r,lang)+'</div>'+
          '<a class="btn-ink" href="'+quoteLink(r,lang)+'">'+T.quote[lang]+' →</a>'+
        '</div>'+
      '</article>';
    }).join('');
  }

  function renderIndex(mount, lang){
    mount.className = 'index-wrap';

    /* left: list grouped by arrondissement */
    var listInner = '';
    ARR_ORDER.forEach(function(arr){
      var group = ARR[arr];
      listInner += '<div class="idx-group">'+
        '<span class="idx-group__arr">'+group[lang]+'</span>'+
        '<span class="idx-group__sub">'+group.sub[lang]+'</span>'+
      '</div>';
      ROOMS.forEach(function(r,i){
        if(r.arr!==arr) return;
        listInner += '<div class="idx-item'+(i===0?' is-active':'')+'" data-i="'+i+'">'+
          '<span class="idx-num">'+num2(i)+'</span>'+
          '<span class="idx-name">'+r.name+'</span>'+
          '<span class="idx-cap">'+capShort(r,lang)+'</span>'+
        '</div>';
      });
    });
    var list = '<div class="idx-list">'+listInner+'</div>';

    var imgs = ROOMS.map(function(r,i){
      return '<img src="'+r.photo+'" alt="'+r.name+'" class="'+(i===0?'is-shown':'')+'" data-i="'+i+'">';
    }).join('');

    var detail = '<div class="idx-detail">'+
      '<div class="idx-media">'+
        '<span class="tag idx-media__tag" id="idxTag">'+ROOMS[0].tag[lang]+'</span>'+imgs+
      '</div>'+
      '<div class="idx-info">'+
        '<span class="eyelet" id="idxWhere">'+ROOMS[0].where[lang]+'</span>'+
        '<div class="idx-info__name" id="idxName">'+ROOMS[0].name+'</div>'+
        '<div class="idx-info__desc" id="idxDesc">'+leadHTML(ROOMS[0],lang)+'</div>'+
        '<div class="equip idx-info__equip" id="idxEquip">'+equipHTML(ROOMS[0],lang)+'</div>'+
        '<div class="idx-meta" id="idxMeta">'+metaHTML(ROOMS[0],lang)+'</div>'+
        '<a class="btn-ink" id="idxCta" href="'+quoteLink(ROOMS[0],lang)+'">'+T.quote[lang]+' →</a>'+
      '</div>'+
    '</div>';

    mount.innerHTML = list + detail;

    var items = mount.querySelectorAll('.idx-item');
    function select(idx){
      var r = ROOMS[idx];
      items.forEach(function(el){ el.classList.toggle('is-active', +el.dataset.i===idx); });
      mount.querySelectorAll('.idx-media img').forEach(function(im){ im.classList.toggle('is-shown', +im.dataset.i===idx); });
      mount.querySelector('#idxTag').textContent = r.tag[lang];
      mount.querySelector('#idxWhere').textContent = r.where[lang];
      mount.querySelector('#idxName').textContent = r.name;
      mount.querySelector('#idxDesc').innerHTML = leadHTML(r,lang);
      mount.querySelector('#idxEquip').innerHTML = equipHTML(r,lang);
      mount.querySelector('#idxMeta').innerHTML = metaHTML(r,lang);
      mount.querySelector('#idxCta').setAttribute('href', quoteLink(r,lang));
      try{ mount.dispatchEvent(new CustomEvent('tb:select',{detail:{idx:idx}})); }catch(e){}
    }
    items.forEach(function(el){
      el.addEventListener('mouseenter', function(){ select(+el.dataset.i); });
      el.addEventListener('click', function(){ select(+el.dataset.i); });
    });
  }

  var RENDERERS = { galerie:renderGalerie, editorial:renderEditorial, index:renderIndex };

  /* ---------- Boot --------------------------------------------------- */
  function renderRooms(lang){
    var mount = document.getElementById('rooms-mount');
    if(!mount) return;
    var layout = mount.getAttribute('data-layout') || 'galerie';
    (RENDERERS[layout] || renderGalerie)(mount, lang);
    var countEl = document.getElementById('rooms-count');
    if(countEl) countEl.textContent = ROOMS.length + ' ' + T.countLabel[lang];
    observeReveal();
  }

  function setLang(lang){
    document.body.setAttribute('data-lang', lang);
    try{ localStorage.setItem('tb-salles-lang', lang); }catch(e){}
    document.querySelectorAll('.nav__lang button').forEach(function(b){
      b.classList.toggle('is-active', b.dataset.lang===lang);
    });
    renderRooms(lang);
  }

  var io;
  function observeReveal(){
    /* Si GSAP est présent, c'est lui qui anime les .reveal (voir salles-anim.js). */
    if(window.gsap) return;
    if(!('IntersectionObserver' in window)) {
      document.querySelectorAll('.reveal').forEach(function(el){ el.classList.add('is-in'); });
      return;
    }
    if(!io){
      io = new IntersectionObserver(function(entries){
        entries.forEach(function(e){ if(e.isIntersecting){ e.target.classList.add('is-in'); io.unobserve(e.target); } });
      }, { threshold:0.12, rootMargin:'0px 0px -8% 0px' });
    }
    document.querySelectorAll('.reveal:not(.is-in)').forEach(function(el){ io.observe(el); });
  }

  function boot(){
    var saved = 'fr';
    try{ saved = localStorage.getItem('tb-salles-lang') || 'fr'; }catch(e){}
    document.querySelectorAll('.nav__lang button').forEach(function(b){
      b.addEventListener('click', function(){ setLang(b.dataset.lang); });
    });
    setLang(saved);
    observeReveal();
  }
  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded', boot);
  else boot();

  window.TBSalles = { ROOMS:ROOMS, setLang:setLang };
})();
