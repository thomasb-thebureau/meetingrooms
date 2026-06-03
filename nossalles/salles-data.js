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
        'Pierre haussmannienne, lumière du jour, vue sur la Seine.',
        'La salle du conseil, pour les échanges confidentiels et les décisions qui comptent — dans l’une des adresses les plus prestigieuses de The Bureau.'],
      en:[
        'Haussmannian stone, daylight, a view over the Seine.',
        'The boardroom, for confidential exchanges and the decisions that matter — at one of The Bureau’s most prestigious addresses.']} },

    { id:'deal-8e-16', name:'The Deal Room', arr:'8e', photo:'photos/deal-room-8e-16.png',
      tag:{fr:'Réunion',en:'Meeting'},
      address:'16 Cours Albert 1ᵉʳ, 75008 Paris',
      where:{fr:'16 Cours Albert 1ᵉʳ · Paris 8ᵉ',en:'16 Cours Albert 1ᵉʳ · Paris 8'},
      cap:8, mode:'seat', equip:['ecran','visio','vue','lumiere'],
      price:{fr:'400 € HT / demi-journée · 800 € HT / journée',en:'From €400 excl. VAT / half-day · €800 / full day'},
      presta:{fr:'Petit-déjeuner, collation, afterwork sur demande · déjeuner au restaurant privé The Café à partir de 33 € HT / pers.',
              en:'Breakfast, refreshments, afterwork on request · lunch at the private restaurant The Café from €33 excl. VAT / guest.'},
      desc:{fr:[
        'Un format intimiste, en bord de Seine, face à la Tour Eiffel.',
        'Pour les rendez-vous confidentiels et les points stratégiques en petit comité — là où le cadre compte autant que la fonction.'],
      en:[
        'An intimate format, by the Seine, facing the Eiffel Tower.',
        'For confidential meetings and strategic check-ins in a small committee — where the setting matters as much as the function.']} },

    { id:'cafe-8e-28', name:'The Café', arr:'8e', photo:'photos/cafe-8e-28.png',
      tag:{fr:'Restaurant privé',en:'Private restaurant'},
      address:'28 Cours Albert 1ᵉʳ, 75008 Paris',
      where:{fr:'28 Cours Albert 1ᵉʳ · Paris 8ᵉ',en:'28 Cours Albert 1ᵉʳ · Paris 8'},
      cap:null, mode:'venue', equip:['restauration','bar','cafe'],
      usage:{fr:'Déjeuner professionnel · cocktail · pause · événement',en:'Business lunch · cocktail · break · event'},
      price:null,
      presta:{fr:'Déjeuner, pause gourmande, cocktail ou privatisation en soirée.',en:'Lunch, gourmet break, cocktail or evening private hire.'},
      desc:{fr:[
        'Le restaurant privé du 28 Cours Albert 1ᵉʳ.',
        'Déjeuner, pause gourmande, cocktail ou privatisation en soirée : l’esprit The Bureau prolongé à table, dans un cadre convivial et épicurien.'],
      en:[
        'The private restaurant of 28 Cours Albert 1ᵉʳ.',
        'Lunch, a gourmet break, a cocktail or an evening private hire: the The Bureau spirit extended to the table — convivial and epicurean.']} },

    { id:'conference-8e-28', name:'The Conference Room', arr:'8e', photo:'photos/conference-8e-28.png',
      tag:{fr:'Conférence',en:'Conference'},
      address:'28 Cours Albert 1ᵉʳ, 75008 Paris',
      where:{fr:'28 Cours Albert 1ᵉʳ · Paris 8ᵉ',en:'28 Cours Albert 1ᵉʳ · Paris 8'},
      cap:30, mode:'seat', equip:['projecteur','ecran','micro','terrasse'],
      price:{fr:'800 € HT / demi-journée · 1 200 € HT / journée',en:'From €800 excl. VAT / half-day · €1,200 / full day'},
      presta:{fr:'Petit-déjeuner, collation, afterwork sur demande · déjeuner au restaurant privé The Café à partir de 33 € HT / pers.',
              en:'Breakfast, refreshments, afterwork on request · lunch at the private restaurant The Café from €33 excl. VAT / guest.'},
      desc:{fr:[
        'Le grand format du 8ᵉ, au premier étage, ouvert sur terrasse.',
        'Présentations, conférences, formations ou journées d’étude : le volume, l’équipement et les services, à deux pas de la Seine.'],
      en:[
        'The large format of the 8th, on the first floor, opening onto a terrace.',
        'Presentations, conferences, training or study days: the volume, the equipment and the services, steps from the Seine.']} },

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
        'Face au Palais Brongniart, en rez-de-chaussée, accès direct par le patio.',
        'Une salle de direction confidentielle au cœur du 2ᵉ, entre Opéra et Bourse.'],
      en:[
        'Facing the Palais Brongniart, on the ground floor, with direct patio access.',
        'A confidential boardroom in the heart of the 2nd, between Opéra and Bourse.']} },

    { id:'deal-2e-25', name:'The Deal Room', arr:'2e', photo:'photos/deal-room-2e-25.png',
      tag:{fr:'Réunion',en:'Meeting'},
      address:'25 rue du 4 Septembre, 75002 Paris',
      where:{fr:'25 rue du 4 Septembre · Paris 2ᵉ',en:'25 rue du 4 Septembre · Paris 2'},
      cap:8, mode:'seat', equip:['ecran','lumiere','cafe','paperboard'],
      price:{fr:'480 € HT / demi-journée · 960 € HT / journée',en:'From €480 excl. VAT / half-day · €960 / full day'},
      presta:{fr:'Petit-déjeuner, collation, afterwork sur demande · déjeuner au restaurant privé The Comptoir à partir de 33 € HT / pers.',
              en:'Breakfast, refreshments, afterwork on request · lunch at the private restaurant The Comptoir from €33 excl. VAT / guest.'},
      desc:{fr:[
        'Décor haussmannien et lumière naturelle, au deuxième étage.',
        'Trois zones — petit salon, grande table, bureaux en îlots — pour alterner présentation, échange et travail en petit comité.'],
      en:[
        'Haussmannian décor and natural light, on the second floor.',
        'Three zones — a lounge, a large table, cluster desks — to move between presentation, discussion and small-group work.']} },

    { id:'board-2e-25', name:'The Board Room', arr:'2e', photo:'photos/board-room-2e-25.png',
      tag:{fr:'Conseil',en:'Board'},
      address:'25 rue du 4 Septembre, 75002 Paris',
      where:{fr:'25 rue du 4 Septembre · Paris 2ᵉ',en:'25 rue du 4 Septembre · Paris 2'},
      cap:12, mode:'seat', equip:['ecran','visio','cafe','lumiere'],
      price:{fr:'400 € HT / demi-journée · 800 € HT / journée',en:'From €400 excl. VAT / half-day · €800 / full day'},
      presta:{fr:'Petit-déjeuner, collation, afterwork sur demande · déjeuner au restaurant privé The Comptoir à partir de 33 € HT / pers.',
              en:'Breakfast, refreshments, afterwork on request · lunch at the private restaurant The Comptoir from €33 excl. VAT / guest.'},
      desc:{fr:[
        'En rez-de-chaussée, au cœur du quartier Opéra-Bourse.',
        'Une salle de direction au design soigné, à une adresse vivante et facile d’accès pour vos invités.'],
      en:[
        'On the ground floor, at the heart of the Opéra-Bourse district.',
        'A boardroom of considered design, at a lively address that’s easy for your guests to reach.']} },

    { id:'floor-2e-42', name:'Le Floor', arr:'2e', photo:'photos/floor-2e-42.png',
      tag:{fr:'Coffee shop',en:'Coffee shop'},
      address:'42 rue Notre-Dame des Victoires, 75002 Paris',
      where:{fr:'42 rue N.-D. des Victoires · Paris 2ᵉ',en:'42 rue N.-D. des Victoires · Paris 2'},
      cap:null, mode:'venue', equip:['cafe','restauration','bar'],
      usage:{fr:'Pause café · déjeuner · afterwork · privatisation',en:'Coffee break · lunch · afterwork · private hire'},
      price:null,
      presta:{fr:'Carte coffee shop & bakery le midi · pauses, déjeuners et privatisations selon disponibilité.',en:'Coffee shop & bakery menu at midday · breaks, lunches and private hire subject to availability.'},
      desc:{fr:[
        'Coffee shop le matin, carte coffee shop & bakery au déjeuner.',
        'Un cadre ouvert et convivial pour prolonger une réunion, une pause ou un événement — autrement.'],
      en:[
        'A coffee shop in the morning, a coffee shop & bakery menu at lunch.',
        'An open, convivial setting to extend a meeting, a break or an event — differently.']} }
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
    usageLabel:{fr:'Usage',en:'Use'},
    readMore:{fr:'Lire la suite',en:'Read more'},
    readLess:{fr:'Lire moins',en:'Read less'}
  };

  /* ---------- Formulaire de réservation (mail pré-rempli) ------------ */
  var FORM = {
    to:'contact@thebureau.paris',
    subject:{fr:'Demande de réservation — Salle de réunion · The Bureau',en:'Booking request — Meeting room · The Bureau'},
    fields:[
      {name:'date', type:'date', label:{fr:'Date',en:'Date'}},
      {name:'duree', type:'select', label:{fr:'Durée',en:'Duration'},
        options:[{fr:'Demi-journée',en:'Half-day'},{fr:'Journée',en:'Full day'},{fr:'Plusieurs jours',en:'Several days'}]},
      {name:'participants', type:'number', label:{fr:'Participants',en:'Guests'}, ph:{fr:'ex. 10',en:'e.g. 10'}},
      {name:'arrondissement', type:'select', label:{fr:'Arrondissement',en:'Arrondissement'},
        options:[{fr:'Indifférent',en:'No preference'},{fr:'Paris 8ᵉ — Alma',en:'Paris 8 — Alma'},{fr:'Paris 2ᵉ — Opéra · Bourse',en:'Paris 2 — Opéra · Bourse'}]},
      {name:'format', type:'select', label:{fr:'Format',en:'Format'},
        options:[{fr:'Réunion',en:'Meeting'},{fr:'Conseil / direction',en:'Board'},{fr:'Conférence',en:'Conference'},{fr:'Séminaire / formation',en:'Seminar / training'},{fr:'Événement / cocktail',en:'Event / cocktail'}]},
      {name:'prestations', type:'select', label:{fr:'Prestations',en:'Services'},
        options:[{fr:'—',en:'—'},{fr:'Petit-déjeuner',en:'Breakfast'},{fr:'Déjeuner',en:'Lunch'},{fr:'Pauses café',en:'Coffee breaks'},{fr:'Cocktail',en:'Cocktail'},{fr:'Afterwork',en:'Afterwork'}]},
      {name:'nom', type:'text', label:{fr:'Nom',en:'Name'}, ph:{fr:'Votre nom',en:'Your name'}},
      {name:'email', type:'email', label:{fr:'Email',en:'Email'}, ph:{fr:'vous@societe.com',en:'you@company.com'}}
    ],
    message:{fr:'Précisions',en:'Details'},
    messagePh:{fr:'Contexte, configuration souhaitée, restauration…',en:'Context, preferred setup, catering…'},
    gmail:{fr:'Préparer dans Gmail',en:'Open in Gmail'},
    outlook:{fr:'Préparer dans Outlook',en:'Open in Outlook'},
    other:{fr:'Autre messagerie',en:'Other mail app'},
    intro:{fr:'Bonjour,\n\nJe souhaite réserver une salle de réunion chez The Bureau. Voici les détails de ma demande :\n',
           en:'Hello,\n\nI would like to book a meeting room at The Bureau. Here are the details of my request:\n'},
    outro:{fr:'\nMerci de me confirmer les disponibilités et de m’adresser un devis.\nBien à vous,',
           en:'\nPlease confirm availability and send me a quote.\nBest regards,'}
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
        '<div class="idx-info__desc" id="idxDesc">'+descHTML(ROOMS[0],lang)+'</div>'+
        '<div class="equip idx-info__equip" id="idxEquip">'+equipHTML(ROOMS[0],lang)+'</div>'+
        '<div class="idx-meta" id="idxMeta">'+metaHTML(ROOMS[0],lang)+'</div>'+
        '<a class="btn-ink" id="idxCta" href="'+quoteLink(ROOMS[0],lang)+'">'+T.quote[lang]+' →</a>'+
      '</div>'+
    '</div>';

    mount.innerHTML = list + detail;

    var items = mount.querySelectorAll('.idx-item');
    var descEl = mount.querySelector('#idxDesc');
    function select(idx){
      var r = ROOMS[idx];
      items.forEach(function(el){ el.classList.toggle('is-active', +el.dataset.i===idx); });
      mount.querySelectorAll('.idx-media img').forEach(function(im){ im.classList.toggle('is-shown', +im.dataset.i===idx); });
      mount.querySelector('#idxTag').textContent = r.tag[lang];
      mount.querySelector('#idxWhere').textContent = r.where[lang];
      mount.querySelector('#idxName').textContent = r.name;
      descEl.innerHTML = descHTML(r,lang);
      mount.querySelector('#idxEquip').innerHTML = equipHTML(r,lang);
      mount.querySelector('#idxMeta').innerHTML = metaHTML(r,lang);
      mount.querySelector('#idxCta').setAttribute('href', quoteLink(r,lang));
      try{ mount.dispatchEvent(new CustomEvent('tb:select',{detail:{idx:idx}})); }catch(e){}
    }
    /* Sélection au clic uniquement : le panneau de droite reste verrouillé
       sur la salle choisie — aucun changement au survol. */
    items.forEach(function(el){
      el.addEventListener('click', function(){ select(+el.dataset.i); });
    });
  }

  var RENDERERS = { galerie:renderGalerie, editorial:renderEditorial, index:renderIndex };

  /* ---------- Logos messageries (repère visuel) --------------------- */
  var MAIL_ICON = {
    gmail:'<svg class="rform__ic" viewBox="0 0 24 24" aria-hidden="true"><path fill="#EA4335" d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z"/></svg>',
    outlook:'<svg class="rform__ic" viewBox="0 0 24 24" aria-hidden="true"><path fill="#0078D4" d="M7.88 12.04q0 .45-.11.87-.1.41-.32.74-.21.33-.53.53-.32.19-.73.19t-.74-.19-.53-.53-.31-.74-.1-.87q0-.46.1-.87.11-.41.31-.74.2-.33.53-.52.32-.19.74-.19t.73.19q.32.19.53.52.22.33.32.74.11.41.11.87zM24 12v9.38q0 .46-.33.8-.33.32-.8.32H7.13q-.46 0-.8-.33-.32-.33-.32-.8V18H1q-.41 0-.7-.3-.3-.29-.3-.7V7q0-.41.3-.7Q.58 6 1 6h6.5V2.55q0-.44.3-.75.3-.3.75-.3h12.9q.44 0 .75.3.3.3.3.75V10.85l1.24.72h.01q.1.07.18.18.07.12.07.25zm-6-8.25v3h3v-3zm0 4.5v3h3v-3zm0 4.5v1.83l3.05-1.83zm-5.25-9v3h3.75v-3zm0 4.5v3h3.75v-3zm0 4.5v2.03l2.41 1.5 1.34-.8v-2.73zM9 3.75V6h2l.13.01.12.04v-2.3zM5.98 15.98q.9 0 1.6-.3.7-.32 1.19-.86.48-.55.73-1.28.25-.74.25-1.6 0-.83-.25-1.55-.24-.71-.71-1.24t-1.15-.83q-.68-.3-1.55-.3-.9 0-1.61.3-.7.3-1.2.85-.48.54-.74 1.27-.25.74-.25 1.61 0 .85.26 1.57.26.73.74 1.26.49.53 1.18.83.69.3 1.51.3zM7.13 17H22.5v-7.43l-7.41 4.5q-.3.18-.66.18-.36 0-.65-.18L7.13 9.57V17z"/></svg>'
  };

  /* ---------- Formulaire : rendu + génération du mail ---------------- */
  function renderForm(lang){
    var form = document.getElementById('rform');
    if(!form) return;
    var html = '<div class="rform__grid">';
    FORM.fields.forEach(function(f){
      html += '<label class="rfield"><span class="rfield__lbl">'+f.label[lang]+'</span>';
      if(f.type==='select'){
        html += '<select class="rfield__in" name="'+f.name+'">'+
          f.options.map(function(o){ return '<option>'+o[lang]+'</option>'; }).join('')+'</select>';
      } else {
        html += '<input class="rfield__in" type="'+f.type+'" name="'+f.name+'"'+
          (f.ph?' placeholder="'+f.ph[lang]+'"':'')+'>';
      }
      html += '</label>';
    });
    html += '</div>';
    html += '<label class="rfield rfield--full"><span class="rfield__lbl">'+FORM.message[lang]+'</span>'+
      '<textarea class="rfield__in" name="message" rows="2" placeholder="'+FORM.messagePh[lang]+'"></textarea></label>';
    html += '<div class="rform__actions">'+
      '<button type="button" class="rform__send" data-to="gmail">'+MAIL_ICON.gmail+'<span>'+FORM.gmail[lang]+'</span></button>'+
      '<button type="button" class="rform__send" data-to="outlook">'+MAIL_ICON.outlook+'<span>'+FORM.outlook[lang]+'</span></button>'+
    '</div>';
    form.innerHTML = html;

    function buildBody(){
      var lines = [];
      FORM.fields.forEach(function(f){
        var el = form.querySelector('[name="'+f.name+'"]');
        var v = el ? (el.value||'').trim() : '';
        if(v && v!=='—') lines.push(f.label[lang]+' : '+v);
      });
      var msgEl = form.querySelector('[name="message"]');
      var msg = msgEl ? msgEl.value.trim() : '';
      var body = FORM.intro[lang] + '\n' + lines.join('\n');
      if(msg) body += '\n\n' + FORM.message[lang] + ' : ' + msg;
      body += '\n' + FORM.outro[lang];
      return body;
    }
    function compose(target){
      var subject = FORM.subject[lang], body = buildBody(), to = FORM.to;
      if(target==='gmail'){
        /* Gmail : composition web dans un nouvel onglet */
        window.open('https://mail.google.com/mail/?view=cm&fs=1&to='+encodeURIComponent(to)+
          '&su='+encodeURIComponent(subject)+'&body='+encodeURIComponent(body),'_blank','noopener');
      } else {
        /* Outlook / messagerie locale : mailto ouvre le client par défaut (Outlook installé) */
        window.location.href = 'mailto:'+to+'?subject='+encodeURIComponent(subject)+'&body='+encodeURIComponent(body);
      }
    }
    form.querySelectorAll('.rform__actions button').forEach(function(b){
      b.addEventListener('click', function(){ compose(b.getAttribute('data-to')); });
    });
  }

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
    renderForm(lang);
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
