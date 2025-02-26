document.addEventListener("DOMContentLoaded", function () {
    const langLinks = document.querySelectorAll(".para a");
    const searchInput = document.getElementById("searchInput");
    const buttons = document.querySelectorAll(".btn button");

    const translations = {
        l1: {
            searchPlaceholder: "Google खोजें या URL टाइप करें",
            searchButton: "Google खोज",
            luckyButton: "मैं भाग्यशाली महसूस कर रहा हूँ"
        },
        l2: {
            searchPlaceholder: "Google অনুসন্ধান করুন বা একটি URL টাইপ করুন",
            searchButton: "Google অনুসন্ধান",
            luckyButton: "আমি ভাগ্যবান অনুভব করছি"
        },
        l3: {
            searchPlaceholder: "Google వెతకండి లేదా URL టైప్ చేయండి",
            searchButton: "Google వెతకండి",
            luckyButton: "నేను అదృష్టవంతుడిని అనుకుంటున్నాను"
        },
        l4: {
            searchPlaceholder: "Google शोधा किंवा URL टाइप करा",
            searchButton: "Google शोधा",
            luckyButton: "मी भाग्यवान आहे असे वाटते"
        },
        l5: {
            searchPlaceholder: "Google தேடுக அல்லது URL ஐ உள்ளிடுக",
            searchButton: "Google தேடல்",
            luckyButton: "நான் அதிர்ஷ்டசாலி என உணர்கிறேன்"
        },
        l6: {
            searchPlaceholder: "Google શોધો અથવા URL ટાઇપ કરો",
            searchButton: "Google શોધ",
            luckyButton: "હું નસીબદાર છું"
        },
        l7: {
            searchPlaceholder: "Google ಹುಡುಕಿ ಅಥವಾ URL ಟೈಪ್ ಮಾಡಿ",
            searchButton: "Google ಹುಡುಕಿ",
            luckyButton: "ನಾನು ಅದೃಷ್ಟಶಾಲಿ ಎಂದು ಭಾವಿಸುತ್ತೇನೆ"
        },
        l8: {
            searchPlaceholder: "Google തിരയുക അല്ലെങ്കിൽ URL ടൈപ്പ് ചെയ്യുക",
            searchButton: "Google തിരയുക",
            luckyButton: "ഞാൻ ഭാഗ്യവാൻ എന്നു തോന്നുന്നു"
        },
        l9: {
            searchPlaceholder: "Google ਖੋਜੋ ਜਾਂ URL ਟਾਈਪ ਕਰੋ",
            searchButton: "Google ਖੋਜ",
            luckyButton: "ਮੈਂ ਖੁਸ਼ਕਿਸਮਤ ਮਹਿਸੂਸ ਕਰ ਰਿਹਾ ਹਾਂ"
        }
    };

    function changeLanguage(lang) {
        if (translations[lang]) {
            searchInput.placeholder = translations[lang].searchPlaceholder;
            buttons[0].textContent = translations[lang].searchButton;
            buttons[1].textContent = translations[lang].luckyButton;
        }
    }

    langLinks.forEach(link => {
        link.addEventListener("click", function () {
            const selectedLang = this.getAttribute("data_lang");
            changeLanguage(selectedLang);
        });
    });
});