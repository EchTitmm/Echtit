document.documentElement.classList.add("js");

const translations = {
  en: {
    navServices: "Services",
    navWork: "Learning",
    navContact: "Get in touch",
    heroEyebrow: "INDEPENDENT CYBERSECURITY COMMUNITY",
    heroTitle: "Learn. Investigate.",
    heroText:
      "Cybersecurity makes more sense when we explore it together. We’re Echtit — sharing practical knowledge, investigations, and lessons from the lab.",
    heroWorkLink: "Explore our updates",
    courseStatus: "COURSE · COMING SOON",
    courseComingSoonText:
      "The next course schedule and enrollment details have not been announced. Get in touch for updates.",
    courseButton: "Ask about the course",
    servicesEyebrow: "04 / BUILT BY ECHTIT",
    servicesTitle: "Your devices. One private workspace.",
    servicesLead:
      "Tools for your own devices, alongside our learning resources.",
    serviceStatus: "Free, Plus & Team",
    serviceText:
      "Manage your devices, transfer files, and access Live Screen through your private Tailscale network.",
    workEyebrow: "03 / THE LEARNING LIBRARY",
    workTitle: "Notes from the hands-on side.",
    wiresharkTitle: "Finding Sensitive Data in Wireshark",
    browserTitle: "Browser Forensics",
    stegoVideoTitle: "Steganography File Hiding Demo",
    readWriteup: "Read walkthrough",
    contactEyebrow: "05 / STAY CONNECTED",
    contactTitle: "Let’s learn something together.",
    contactText:
      "A question, an idea, or something worth sharing? We’d like to hear from you.",
    contactButton: "Start a conversation",
    skipLink: "Skip to content",
    brandTagline: "KNOWLEDGE, SHARED.",
    navAbout: "About",
    navUpdates: "Updates",
    heroTitleAccent: "Share what you find.",
    heroCommunity: "Join the conversation",
    heroLocation: "From Myanmar · Open to everyone",
    heroLanguage: "BURMESE & ENGLISH RESOURCES",
    emblemCaption: "CURIOSITY IS THE STARTING POINT.",
    visualCaption: "A place to learn by doing.",
    scrollExplore: "SCROLL TO EXPLORE",
    aboutEyebrow: "01 / WHO WE ARE",
    aboutTitle: "Knowledge grows when it’s shared.",
    aboutAside: "An independent space for curious minds in cybersecurity.",
    aboutText:
      "Echtit brings together practical learning in red teaming, networking, and digital forensics. We share articles, walkthroughs, and learning sessions to help others understand the tools and the thinking behind them.",
    aboutTextTwo:
      "From a first CTF challenge to a deeper investigation, the idea stays the same: explore, document, and pass it on.",
    aboutLink: "Meet Echtit on LinkedIn",
    focusOneTitle: "Red teaming & CTF",
    focusOneText: "Understand attack paths. Practice in the lab.",
    focusTwoTitle: "Digital forensics & OSINT",
    focusTwoText: "Follow the evidence. Connect the clues.",
    focusThreeTitle: "Community learning",
    focusThreeText: "Writeups, demos, and conversations that help.",
    allArticles: "All articles on Medium",
    piggyText:
      "Follow the packets through a Blue Team Labs investigation with Wireshark.",
    stickerText:
      "A TryHackMe lab walkthrough exploring enumeration and cross-site scripting.",
    osintTitle: "Practicing geolocation with OSINT",
    osintText:
      "Use image search, metadata, and environmental clues to practice geolocation.",
    readArticle: "Read article",
    moreResources: "MORE TO EXPLORE",
    updatesEyebrow: "02 / FROM THE COMMUNITY",
    updatesTitle: "What we’re sharing.",
    updatesAside:
      "Cybersecurity stories, practical projects, and ideas worth discussing. Selected posts from our Facebook community.",
    facebookButton: "Follow Echtit on Facebook",
    postLanguage: "IN BURMESE",
    readFacebookPost: "Read the original post",
    communityFollow: "MORE POSTS. MORE CONVERSATIONS. KNOWLEDGE, SHARED.",
    quimaTitle: "QuimaRAT: a cross-platform threat",
    quimaText:
      "Our Burmese-language post on a malware-as-a-service threat targeting Windows, Linux, and macOS.",
    ethicsTitle: "When a security experiment goes too far",
    ethicsText:
      "A look at the University of Minnesota research controversy and the trust behind open-source contributions.",
    botTitle: "Cybersecurity updates, via Telegram",
    botText:
      "A bot project for cybersecurity news and certificate notifications. Join the post’s conversation and share your feedback.",
    pastAnnouncement: "PAST ANNOUNCEMENT",
    liveSession: "COMMUNITY LIVE SESSION",
    sessionText:
      "An introduction to hidden information, its history, and how steganography differs from cryptography. Announced with Han Soe Htet.",
    viewAnnouncement: "View on LinkedIn",
    facebookSocial: "Posts & community",
    linkedinSocial: "News & announcements",
    emailSocial: "Email us",
    footerTagline: "Curiosity. Practice. Shared knowledge.",
    backToTop: "Back to top",
    serviceBilling: "Monthly & yearly subscriptions",
    serviceBillingText: "Choose and manage your plan in OwnMesh.",
    planForever: "forever",
    planMonthly: "/ month",
    planFreeText:
      "2 registered devices, basic file transfer, and device discovery.",
    planPlusText:
      "Up to 10 devices, Live Screen, remote control, and CodexRelay.",
    planTeamText:
      "Shared devices, team members, admin controls, and access policies.",
    servicePricingNote:
      "Monthly prices shown in USD. Visit OwnMesh for current yearly pricing, billing options, and checkout.",
    openOwnMesh: "Open OwnMesh",
    viewOwnMeshPlans: "View plans & billing",
  },
  mm: {
    navServices: "Services",
    navWork: "လေ့လာရန်",
    navContact: "ဆက်သွယ်ရန်",
    heroEyebrow: "လွတ်လပ်သော CYBERSECURITY အသိုင်းအဝိုင်း",
    heroTitle: "လေ့လာမယ်။ စူးစမ်းမယ်။",
    heroText:
      "အတူတူ စူးစမ်းလေ့လာရင် Cybersecurity ကို ပိုနားလည်နိုင်ပါတယ်။ ကျွန်တော်တို့ Echtit က လက်တွေ့အသိပညာ၊ စုံစမ်းလေ့လာမှုတွေနဲ့ Lab အတွေ့အကြုံတွေကို မျှဝေပေးနေပါတယ်။",
    heroWorkLink: "မျှဝေမှုများကို ကြည့်ရန်",
    courseStatus: "သင်တန်း · မကြာမီလာမည်",
    courseComingSoonText:
      "နောက်သင်တန်းအချိန်ဇယားနဲ့ စာရင်းသွင်းရန် အသေးစိတ်ကို မကြေညာရသေးပါ။ သိရှိရန် ဆက်သွယ်နိုင်ပါတယ်။",
    courseButton: "သင်တန်းအကြောင်း မေးရန်",
    servicesEyebrow: "04 / ECHTIT မှ ဖန်တီးထားသည်",
    servicesTitle: "ကိုယ်ပိုင် Device များ။ သီးသန့် Workspace တစ်ခု။",
    servicesLead: "လေ့လာစရာများအပြင် ကိုယ်ပိုင် Device များအတွက် ကိရိယာများ။",
    serviceStatus: "Free၊ Plus နှင့် Team",
    serviceText:
      "သင့်ကိုယ်ပိုင် Tailscale network မှတစ်ဆင့် Device များ စီမံခြင်း၊ File လွှဲပြောင်းခြင်းနဲ့ Live Screen အသုံးပြုခြင်းတို့ကို လုပ်ဆောင်နိုင်ပါတယ်။",
    workEyebrow: "03 / လေ့လာစရာများ",
    workTitle: "လက်တွေ့လေ့လာမှုမှ မှတ်စုများ။",
    wiresharkTitle: "Wireshark ထဲတွင် Sensitive Data ရှာဖွေခြင်း",
    browserTitle: "Browser Forensics",
    stegoVideoTitle: "Steganography File Hiding Demo",
    readWriteup: "Walkthrough ဖတ်ရန်",
    contactEyebrow: "05 / အဆက်အသွယ်မပြတ်ရှိကြမယ်",
    contactTitle: "အတူတူ အသစ်တစ်ခု လေ့လာကြမယ်။",
    contactText:
      "မေးခွန်း၊ အကြံဉာဏ် ဒါမှမဟုတ် မျှဝေချင်တာရှိလား။ ကျွန်တော်တို့ကို ဆက်သွယ်နိုင်ပါတယ်။",
    contactButton: "စကားစပြောရန်",
    skipLink: "အကြောင်းအရာသို့ သွားရန်",
    brandTagline: "အသိပညာများ မျှဝေရာ",
    navAbout: "ကျွန်တော်တို့အကြောင်း",
    navUpdates: "မျှဝေမှုများ",
    heroTitleAccent: "သိရှိတာတွေ မျှဝေမယ်။",
    heroCommunity: "ဆွေးနွေးမှုမှာ ပါဝင်ရန်",
    heroLocation: "မြန်မာနိုင်ငံမှ · လူတိုင်းအတွက်",
    heroLanguage: "မြန်မာနှင့် အင်္ဂလိပ် လေ့လာစရာများ",
    emblemCaption: "စူးစမ်းလိုစိတ်ကနေ စတင်ပါ။",
    visualCaption: "လက်တွေ့လုပ်ရင်း အတူလေ့လာရာ။",
    scrollExplore: "ဆက်လေ့လာရန်",
    aboutEyebrow: "01 / ကျွန်တော်တို့အကြောင်း",
    aboutTitle: "မျှဝေရင်း အသိပညာတွေ တိုးပွားစေမယ်။",
    aboutAside: "Cybersecurity ကို စူးစမ်းလိုသူတွေအတွက် လွတ်လပ်သောနေရာ။",
    aboutText:
      "Echtit မှာ Red teaming၊ Networking နဲ့ Digital forensics ဆိုင်ရာ လက်တွေ့လေ့လာမှုတွေကို မျှဝေပါတယ်။ နည်းပညာကိရိယာတွေနဲ့ နောက်ကွယ်က စဉ်းစားပုံတွေကို နားလည်ဖို့ ဆောင်းပါး၊ Walkthrough နဲ့ လေ့လာဆွေးနွေးပွဲတွေ ပြုလုပ်ပါတယ်။",
    aboutTextTwo:
      "ပထမဆုံး CTF challenge ကနေ အသေးစိတ် စုံစမ်းလေ့လာမှုအထိ ရည်ရွယ်ချက်က တူညီပါတယ်။ စူးစမ်းမယ်၊ မှတ်တမ်းတင်မယ်၊ ပြန်မျှဝေမယ်။",
    aboutLink: "LinkedIn မှာ Echtit ကို သိရှိရန်",
    focusOneTitle: "Red teaming နှင့် CTF",
    focusOneText: "တိုက်ခိုက်မှုပုံစံတွေကို နားလည်ပြီး Lab မှာ လေ့ကျင့်မယ်။",
    focusTwoTitle: "Digital forensics နှင့် OSINT",
    focusTwoText: "သက်သေတွေကို လိုက်ရှာပြီး သဲလွန်စတွေ ဆက်စပ်မယ်။",
    focusThreeTitle: "အတူတကွ လေ့လာခြင်း",
    focusThreeText: "Writeup၊ Demo နဲ့ အထောက်အကူပြု ဆွေးနွေးမှုများ။",
    allArticles: "Medium မှ ဆောင်းပါးအားလုံး",
    piggyText:
      "Wireshark နဲ့ Blue Team Labs စုံစမ်းလေ့လာမှုထဲက Network packet တွေကို လိုက်လံလေ့လာမယ်။",
    stickerText:
      "Enumeration နဲ့ Cross-site scripting ကို လေ့လာထားတဲ့ TryHackMe Lab walkthrough။",
    osintTitle: "OSINT နည်းလမ်းဖြင့် တည်နေရာရှာဖွေခြင်း",
    osintText:
      "ပုံရှာဖွေမှု၊ Metadata နဲ့ ပတ်ဝန်းကျင်သဲလွန်စတွေကို သုံးပြီး တည်နေရာရှာဖွေမှု လေ့ကျင့်မယ်။",
    readArticle: "ဆောင်းပါးဖတ်ရန်",
    moreResources: "ထပ်မံလေ့လာရန်",
    updatesEyebrow: "02 / အသိုင်းအဝိုင်းမှ မျှဝေမှုများ",
    updatesTitle: "ကျွန်တော်တို့ မျှဝေထားတာတွေ။",
    updatesAside:
      "Cybersecurity အကြောင်းအရာ၊ လက်တွေ့ Project နဲ့ ဆွေးနွေးစရာများ။ ကျွန်တော်တို့ Facebook မှ ရွေးချယ်ထားသော Post များ။",
    facebookButton: "Facebook မှာ Echtit ကို Follow လုပ်ရန်",
    postLanguage: "မြန်မာဘာသာဖြင့်",
    readFacebookPost: "မူရင်း Post ကို ဖတ်ရန်",
    communityFollow:
      "အကြောင်းအရာများ။ ဆွေးနွေးမှုများ။ မျှဝေထားသော အသိပညာများ။",
    quimaTitle: "စနစ်မျိုးစုံကို ပစ်မှတ်ထားသည့် QuimaRAT",
    quimaText:
      "Windows၊ Linux နဲ့ macOS တို့ကို ပစ်မှတ်ထားတဲ့ Malware-as-a-Service အကြောင်း မြန်မာဘာသာနဲ့ မျှဝေထားပါတယ်။",
    ethicsTitle: "Security စမ်းသပ်မှုမှ တက္ကသိုလ်ပိတ်ပင်ခံရသည်အထိ",
    ethicsText:
      "University of Minnesota ရဲ့ သုတေသနအငြင်းပွားမှုနဲ့ Open-source မှာ ယုံကြည်မှုရဲ့ အရေးပါပုံ။",
    botTitle: "Telegram မှ Cybersecurity အသိပေးချက်များ",
    botText:
      "Cybersecurity သတင်းနဲ့ Certificate အသိပေးချက်တွေအတွက် ဖန်တီးထားတဲ့ Bot project။ မူရင်း Post မှာ အကြံပြုချက်တွေ မျှဝေနိုင်ပါတယ်။",
    pastAnnouncement: "ယခင်ကြေညာချက်",
    liveSession: "အတူတကွ လေ့လာသည့် LIVE SESSION",
    sessionText:
      "သတင်းအချက်အလက် ဖုံးကွယ်ခြင်း၊ သမိုင်းကြောင်းနဲ့ Cryptography နဲ့ ကွာခြားပုံတို့ကို မိတ်ဆက်ထားတဲ့ Session။ ကို Han Soe Htet နဲ့အတူ ပြုလုပ်ရန် ကြေညာခဲ့ပါတယ်။",
    viewAnnouncement: "LinkedIn တွင် ကြည့်ရန်",
    facebookSocial: "Post နှင့် အသိုင်းအဝိုင်း",
    linkedinSocial: "သတင်းနှင့် ကြေညာချက်များ",
    emailSocial: "Email ပို့ရန်",
    footerTagline: "စူးစမ်းမယ်။ လေ့ကျင့်မယ်။ မျှဝေမယ်။",
    backToTop: "အပေါ်သို့",
    serviceBilling: "လစဉ်နှင့် နှစ်စဉ် Subscription များ",
    serviceBillingText:
      "OwnMesh မှာ သင့် Plan ကို ရွေးချယ်ပြီး စီမံနိုင်ပါတယ်။",
    planForever: "အမြဲအခမဲ့",
    planMonthly: "/ လ",
    planFreeText:
      "Device ၂ လုံး စာရင်းသွင်းခြင်း၊ အခြေခံ File လွှဲပြောင်းခြင်းနဲ့ Device ရှာဖွေခြင်း။",
    planPlusText:
      "Device ၁၀ လုံးအထိ၊ Live Screen၊ Remote control နဲ့ CodexRelay။",
    planTeamText:
      "Device မျှဝေခြင်း၊ Team member များ၊ Admin control နဲ့ Access policy များ။",
    servicePricingNote:
      "ဖော်ပြထားသည်မှာ USD ဖြင့် လစဉ်ဈေးနှုန်းများဖြစ်ပါတယ်။ လက်ရှိ နှစ်စဉ်ဈေးနှုန်း၊ Billing ရွေးချယ်မှုနဲ့ ငွေပေးချေမှုတို့အတွက် OwnMesh သို့ ဝင်ကြည့်ပါ။",
    openOwnMesh: "OwnMesh ကို ဖွင့်ရန်",
    viewOwnMeshPlans: "Plan နှင့် Billing ကို ကြည့်ရန်",
  },
};

let activeLanguage = "en";

function readSavedLanguage() {
  try {
    return localStorage.getItem("echtit-language") || "en";
  } catch {
    return "en";
  }
}

function applyLanguage(language) {
  activeLanguage = Object.hasOwn(translations, language) ? language : "en";
  document.documentElement.lang = activeLanguage === "mm" ? "my" : "en";
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    element.textContent =
      translations[activeLanguage][element.dataset.i18n] ||
      translations.en[element.dataset.i18n] ||
      element.textContent;
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
    element.placeholder =
      translations[activeLanguage][element.dataset.i18nPlaceholder] || "";
  });
  document.querySelectorAll("[data-lang-button]").forEach((button) => {
    const selected = button.dataset.langButton === activeLanguage;
    button.classList.toggle("active", selected);
    button.setAttribute("aria-pressed", String(selected));
  });
  try {
    localStorage.setItem("echtit-language", activeLanguage);
  } catch {
    /* Language switching also works without browser storage. */
  }
}

function initNavigation() {
  const header = document.querySelector("[data-header]");
  const toggle = document.querySelector("[data-menu-toggle]");
  const links = [...document.querySelectorAll("[data-nav-link]")];
  if (!header || !toggle) return;

  const setMenu = (open) => {
    header.classList.toggle("nav-open", open);
    toggle.setAttribute("aria-expanded", String(open));
    toggle.setAttribute(
      "aria-label",
      open ? "Close navigation" : "Open navigation",
    );
    toggle
      .querySelector("use")
      ?.setAttribute("href", open ? "#i-close" : "#i-menu");
  };
  toggle.addEventListener("click", () =>
    setMenu(!header.classList.contains("nav-open")),
  );
  links.forEach((link) => link.addEventListener("click", () => setMenu(false)));
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && header.classList.contains("nav-open")) {
      setMenu(false);
      toggle.focus();
    }
  });
  document.addEventListener("click", (event) => {
    if (event.target instanceof Node && !header.contains(event.target))
      setMenu(false);
  });
  const desktop = window.matchMedia("(min-width: 801px)");
  desktop.addEventListener("change", () => {
    if (desktop.matches) setMenu(false);
  });
  if (!("IntersectionObserver" in window)) return;
  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        links.forEach((link) => {
          const current = link.hash === `#${entry.target.id}`;
          link.classList.toggle("is-active", current);
          if (current) link.setAttribute("aria-current", "location");
          else link.removeAttribute("aria-current");
        });
      }
    },
    { rootMargin: "-20% 0px -60% 0px", threshold: 0 },
  );
  links.forEach((link) => {
    const section = document.getElementById(link.hash.slice(1));
    if (section) observer.observe(section);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  applyLanguage(readSavedLanguage());
  document.querySelectorAll("[data-lang-button]").forEach((button) => {
    button.addEventListener("click", () =>
      applyLanguage(button.dataset.langButton),
    );
  });
  const year = document.querySelector("[data-year]");
  if (year) year.textContent = String(new Date().getFullYear());
  initNavigation();
});
