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
    servicesTitle: "A little more control. A private connection.",
    servicesLead:
      "Tools for your own devices, alongside our learning resources.",
    serviceStatus: "Private beta",
    serviceTitle: "Personal Device Hub",
    serviceText: "Private Tailscale device hub for your own computers.",
    servicePriceLabel: "One-time payment",
    servicePrice: "3000 THB",
    servicePriceNote:
      "Tailscale is required. Pay once for private beta setup access.",
    paymentReadyButton: "Ready to pay",
    paymentReadyNote:
      "This guide explains the app. The self-hosted package is sent after payment approval.",
    qrEyebrow: "Thai QR Payment",
    qrTitle: "Scan TrueMoney for the 3000 THB payment",
    qrText:
      "Tap the TrueMoney link or scan this fixed-amount QR, then upload your slip here. You do not need Telegram.",
    openTrueMoneyLink: "Open 3000 THB TrueMoney link",
    trueMoneyHelpText:
      "If TrueMoney does not work for you, message us on Telegram before paying.",
    trueMoneyHelpLink: "Message @zalon123",
    slipCheckTitle: "Slip review required",
    slipCheckText:
      "Access is approved only when the slip matches this TrueMoney account, exactly 3000 THB, and your name. Wrong or reused slips are denied.",
    downloadSetupGuide: "Download setup guide",
    buyerNameLabel: "Name",
    buyerNamePlaceholder: "Your name",
    buyerEmailLabel: "Gmail for delivery",
    buyerEmailPlaceholder: "yourname@gmail.com",
    slipImageLabel: "Payment slip picture",
    submitSlipButton: "Submit slip",
    submitSlipSending: "Sending slip...",
    submitSlipSuccess:
      "Slip sent. If approved, the install zip will arrive in your Gmail within one day.",
    submitSlipError: "Could not send the slip. Check the image and try again.",
    submitSlipInvalidEmail: "Enter a valid Gmail address for delivery.",
    submitSlipNotConfigured:
      "Slip form is not connected yet. Message @zalon123 after payment.",
    submitSlipFileLarge: "Slip image must be 4 MB or smaller.",
    paidDeliveryNotice:
      "After approval, the self-hosted install zip is sent to your Gmail within one day. It creates your own Tailscale URL.",
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
    paymentOnMainSite: "To submit a payment slip, use our main website.",
    paymentMainSiteLink: "Open the payment form on echtit.vercel.app",
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
    servicesTitle: "ကိုယ်ပိုင် Device များအတွက် သီးသန့်ချိတ်ဆက်မှု။",
    servicesLead: "လေ့လာစရာများအပြင် ကိုယ်ပိုင် Device များအတွက် ကိရိယာများ။",
    serviceStatus: "Private beta",
    serviceTitle: "Personal Device Hub",
    serviceText: "ကိုယ်ပိုင် computer များအတွက် private Tailscale device hub။",
    servicePriceLabel: "တစ်ကြိမ် payment",
    servicePrice: "3000 THB",
    servicePriceNote:
      "Tailscale လိုအပ်သည်။ Private beta setup access အတွက် တစ်ကြိမ်သာ ပေးချေရန်။",
    paymentReadyButton: "ပေးချေရန် အသင့်ဖြစ်ပြီ",
    paymentReadyNote:
      "ဤ guide သည် app အသုံးပြုပုံကို ရှင်းပြထားသည်။ Self-hosted package ကို payment approve ပြီးမှ ပို့ပါမည်။",
    qrEyebrow: "Thai QR Payment",
    qrTitle: "3000 THB payment အတွက် TrueMoney ကို Scan လုပ်ပါ",
    qrText:
      "TrueMoney link ကို နှိပ်ပါ သို့မဟုတ် fixed amount QR ကို scan လုပ်ပါ၊ ပြီးနောက် slip ပုံကို ဒီမှာ upload လုပ်ပါ။ Telegram မလိုပါ။",
    openTrueMoneyLink: "3000 THB TrueMoney link ဖွင့်ရန်",
    trueMoneyHelpText:
      "TrueMoney ဖြင့် ပေးချေမရပါက မပေးချေမီ Telegram တွင် message ပို့ပါ။",
    trueMoneyHelpLink: "@zalon123 သို့ message ပို့ရန်",
    slipCheckTitle: "Slip စစ်ဆေးပြီးမှ approve",
    slipCheckText:
      "Slip သည် ဤ TrueMoney account၊ 3000 THB အတိအကျ၊ နှင့် သင့်နာမည်တို့နှင့် ကိုက်ညီမှ access approve လုပ်ပါမည်။ မှားသော သို့မဟုတ် ပြန်သုံးထားသော slip များကို deny လုပ်ပါမည်။",
    downloadSetupGuide: "Setup guide download လုပ်ရန်",
    buyerNameLabel: "နာမည်",
    buyerNamePlaceholder: "သင့်နာမည်",
    buyerEmailLabel: "Delivery အတွက် Gmail",
    buyerEmailPlaceholder: "yourname@gmail.com",
    slipImageLabel: "Payment slip ပုံ",
    submitSlipButton: "Slip ပို့ရန်",
    submitSlipSending: "Slip ပို့နေပါသည်...",
    submitSlipSuccess:
      "Slip ပို့ပြီးပါပြီ။ Approve ဖြစ်ပါက install zip ကို သင့် Gmail သို့ တစ်ရက်အတွင်း ပို့ပါမည်။",
    submitSlipError: "Slip မပို့နိုင်ပါ။ ပုံကိုစစ်ပြီး ပြန်ကြိုးစားပါ။",
    submitSlipInvalidEmail: "Delivery အတွက် မှန်ကန်သော Gmail address ထည့်ပါ။",
    submitSlipNotConfigured:
      "Slip form မချိတ်ရသေးပါ။ ငွေပေးချေပြီးပါက @zalon123 သို့ message ပို့ပါ။",
    submitSlipFileLarge: "Slip ပုံသည် 4 MB သို့မဟုတ် ထက်နည်းရပါမည်။",
    paidDeliveryNotice:
      "Approve ဖြစ်ပါက self-hosted install zip ကို သင့် Gmail သို့ တစ်ရက်အတွင်း ပို့ပါမည်။ ၎င်းက သင့်ကိုယ်ပိုင် Tailscale URL ကို ဖန်တီးပေးပါမည်။",
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
    paymentOnMainSite:
      "Payment slip ပို့ရန် ကျွန်တော်တို့၏ အဓိက Website ကို အသုံးပြုပါ။",
    paymentMainSiteLink: "echtit.vercel.app မှ Payment form ကို ဖွင့်ရန်",
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

function getActiveLanguage() {
  return activeLanguage;
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

function initPaymentFlow() {
  const toggle = document.querySelector("[data-payment-toggle]");
  const panel = document.querySelector("[data-payment-panel]");
  const closeControls = document.querySelectorAll("[data-payment-close]");
  const form = document.querySelector("[data-payment-form]");
  const status = document.querySelector("[data-payment-status]");

  if (!toggle || !panel) {
    return;
  }

  const qrImage = panel.querySelector("[data-qr-src]");
  const dialog = panel.querySelector(".payment-dialog");
  const background = [
    ...document.querySelectorAll(".skip-link, header, main > section, footer"),
  ];

  const closePanel = () => {
    panel.hidden = true;
    document.body.classList.remove("modal-open");
    background.forEach((element) => {
      element.inert = false;
    });
    toggle.setAttribute("aria-expanded", "false");
    toggle.focus();
  };

  toggle.addEventListener("click", () => {
    if (qrImage && !qrImage.getAttribute("src")) {
      qrImage.setAttribute("src", qrImage.dataset.qrSrc);
    }

    panel.hidden = false;
    document.body.classList.add("modal-open");
    background.forEach((element) => {
      element.inert = true;
    });
    toggle.setAttribute("aria-expanded", "true");
    if (dialog instanceof HTMLElement) {
      dialog.focus();
    }
  });

  closeControls.forEach((control) => {
    control.addEventListener("click", closePanel);
  });

  document.addEventListener("keydown", (event) => {
    if (panel.hidden) return;
    if (event.key === "Escape") {
      closePanel();
    }
    if (event.key === "Tab" && dialog instanceof HTMLElement) {
      const controls = [
        ...dialog.querySelectorAll(
          "a[href], button:not(:disabled), input:not([tabindex='-1'])",
        ),
      ].filter((element) => element.getClientRects().length);
      const first = controls[0];
      const last = controls[controls.length - 1];
      if (
        event.shiftKey &&
        (document.activeElement === first || document.activeElement === dialog)
      ) {
        event.preventDefault();
        last?.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first?.focus();
      }
    }
  });

  if (!(form instanceof HTMLFormElement)) {
    return;
  }

  // GitHub Pages serves static files; payment uploads need the Vercel API.
  if (window.location.hostname.endsWith(".github.io")) {
    form.hidden = true;
    const notice = document.createElement("p");
    notice.dataset.i18n = "paymentOnMainSite";
    const mainSite = document.createElement("a");
    mainSite.className = "text-link";
    mainSite.href = "https://echtit.vercel.app/#services";
    mainSite.dataset.i18n = "paymentMainSiteLink";
    form.after(notice, mainSite);
    applyLanguage(getActiveLanguage());
    return;
  }

  const submitButton = form.querySelector("button[type='submit']");
  const submitLabel = submitButton?.querySelector("[data-i18n]");
  const fileInput = form.querySelector("input[name='slip']");
  const emailInput = form.querySelector("input[name='email']");

  const setStatus = (key, mode = "neutral") => {
    if (!status) {
      return;
    }

    const language = getActiveLanguage();
    status.textContent =
      translations[language][key] || translations.en[key] || "";
    status.dataset.mode = mode;
  };

  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    if (!(fileInput instanceof HTMLInputElement) || !fileInput.files?.[0]) {
      setStatus("submitSlipError", "error");
      return;
    }

    if (
      !(emailInput instanceof HTMLInputElement) ||
      !/^[^\s@]+@gmail\.com$/i.test(emailInput.value.trim())
    ) {
      setStatus("submitSlipInvalidEmail", "error");
      return;
    }

    if (fileInput.files[0].size > 4 * 1024 * 1024) {
      setStatus("submitSlipFileLarge", "error");
      return;
    }

    const language = getActiveLanguage();

    if (submitButton instanceof HTMLButtonElement) {
      submitButton.disabled = true;
    }
    if (submitLabel) {
      submitLabel.textContent =
        translations[language].submitSlipSending ||
        translations.en.submitSlipSending;
    }
    setStatus("submitSlipSending");

    try {
      const response = await fetch("/api/payment-slip", {
        method: "POST",
        body: new FormData(form),
      });

      if (!response.ok) {
        const payload = await response.json().catch(() => ({}));
        if (payload.error === "service_not_configured") {
          setStatus("submitSlipNotConfigured", "error");
          return;
        }
        if (payload.error === "invalid_email") {
          setStatus("submitSlipInvalidEmail", "error");
          return;
        }
        throw new Error("Payment slip submit failed");
      }

      form.reset();
      setStatus("submitSlipSuccess", "success");
    } catch {
      setStatus("submitSlipError", "error");
    } finally {
      if (submitButton instanceof HTMLButtonElement) {
        submitButton.disabled = false;
      }
      if (submitLabel) {
        submitLabel.textContent =
          translations[getActiveLanguage()].submitSlipButton;
      }
    }
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
  initPaymentFlow();
});
