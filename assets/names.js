// The 99 Names of Allah (Al-Asma ul-Husna)
const ALLAH_NAMES = [
    {
        arabic: "الرَّحْمَنُ",
        english: "Ar-Rahman",
        meaning: "The Most Compassionate"
    },
    {
        arabic: "الرَّحِيمُ",
        english: "Ar-Raheem",
        meaning: "The Most Merciful"
    },
    {
        arabic: "الْمَلِكُ",
        english: "Al-Malik",
        meaning: "The King, The Sovereign"
    },
    {
        arabic: "الْقُدُّوسُ",
        english: "Al-Quddus",
        meaning: "The Most Holy"
    },
    {
        arabic: "السَّلاَمُ",
        english: "As-Salam",
        meaning: "The Source of Peace"
    },
    {
        arabic: "الْمُؤْمِنُ",
        english: "Al-Mu'min",
        meaning: "The Guardian of Faith"
    },
    {
        arabic: "الْمُهَيْمِنُ",
        english: "Al-Muhaymin",
        meaning: "The Protector"
    },
    {
        arabic: "الْعَزِيزُ",
        english: "Al-Aziz",
        meaning: "The Mighty"
    },
    {
        arabic: "الْجَبَّارُ",
        english: "Al-Jabbar",
        meaning: "The Compeller"
    },
    {
        arabic: "الْمُتَكَبِّرُ",
        english: "Al-Mutakabbir",
        meaning: "The Greatest"
    },
    {
        arabic: "الْخَالِقُ",
        english: "Al-Khaliq",
        meaning: "The Creator"
    },
    {
        arabic: "الْبَارِئُ",
        english: "Al-Bari",
        meaning: "The Maker"
    },
    {
        arabic: "الْمُصَوِّرُ",
        english: "Al-Musawwir",
        meaning: "The Fashioner"
    },
    {
        arabic: "الْغَفَّارُ",
        english: "Al-Ghaffar",
        meaning: "The Forgiver"
    },
    {
        arabic: "الْقَهَّارُ",
        english: "Al-Qahhar",
        meaning: "The Subduer"
    },
    {
        arabic: "الْوَهَّابُ",
        english: "Al-Wahhab",
        meaning: "The Bestower"
    },
    {
        arabic: "الرَّزَّاقُ",
        english: "Ar-Razzaq",
        meaning: "The Provider"
    },
    {
        arabic: "الْفَتَّاحُ",
        english: "Al-Fattah",
        meaning: "The Opener"
    },
    {
        arabic: "اَلْعَلِيْمُ",
        english: "Al-Alim",
        meaning: "The All-Knowing"
    },
    {
        arabic: "الْقَابِضُ",
        english: "Al-Qabid",
        meaning: "The Constrictor"
    },
    {
        arabic: "الْبَاسِطُ",
        english: "Al-Basit",
        meaning: "The Expander"
    },
    {
        arabic: "الْخَافِضُ",
        english: "Al-Khafid",
        meaning: "The Abaser"
    },
    {
        arabic: "الرَّافِعُ",
        english: "Ar-Rafi",
        meaning: "The Exalter"
    },
    {
        arabic: "الْمُعِزُّ",
        english: "Al-Mu'izz",
        meaning: "The Bestower of Honors"
    },
    {
        arabic: "المُذِلُّ",
        english: "Al-Mudhill",
        meaning: "The Humiliator"
    },
    {
        arabic: "السَّمِيعُ",
        english: "As-Sami",
        meaning: "The All-Hearing"
    },
    {
        arabic: "الْبَصِيرُ",
        english: "Al-Basir",
        meaning: "The All-Seeing"
    },
    {
        arabic: "الْحَكَمُ",
        english: "Al-Hakam",
        meaning: "The Judge"
    },
    {
        arabic: "الْعَدْلُ",
        english: "Al-Adl",
        meaning: "The Just"
    },
    {
        arabic: "اللَّطِيفُ",
        english: "Al-Latif",
        meaning: "The Subtle One"
    },
    {
        arabic: "الْخَبِيرُ",
        english: "Al-Khabir",
        meaning: "The All-Aware"
    },
    {
        arabic: "الْحَلِيمُ",
        english: "Al-Halim",
        meaning: "The Forbearing"
    },
    {
        arabic: "الْعَظِيمُ",
        english: "Al-Azim",
        meaning: "The Magnificent"
    },
    {
        arabic: "الْغَفُورُ",
        english: "Al-Ghafur",
        meaning: "The Forgiving"
    },
    {
        arabic: "الشَّكُورُ",
        english: "Ash-Shakur",
        meaning: "The Appreciative"
    },
    {
        arabic: "الْعَلِيُّ",
        english: "Al-Ali",
        meaning: "The Most High"
    },
    {
        arabic: "الْكَبِيرُ",
        english: "Al-Kabir",
        meaning: "The Greatest"
    },
    {
        arabic: "الْحَفِيظُ",
        english: "Al-Hafiz",
        meaning: "The Preserver"
    },
    {
        arabic: "المُقيِت",
        english: "Al-Muqit",
        meaning: "The Sustainer"
    },
    {
        arabic: "الْحسِيبُ",
        english: "Al-Hasib",
        meaning: "The Reckoner"
    },
    {
        arabic: "الْجَلِيلُ",
        english: "Al-Jalil",
        meaning: "The Majestic"
    },
    {
        arabic: "الْكَرِيمُ",
        english: "Al-Karim",
        meaning: "The Generous"
    },
    {
        arabic: "الرَّقِيبُ",
        english: "Ar-Raqib",
        meaning: "The Watchful"
    },
    {
        arabic: "الْمُجِيبُ",
        english: "Al-Mujib",
        meaning: "The Responsive"
    },
    {
        arabic: "الْوَاسِعُ",
        english: "Al-Wasi",
        meaning: "The All-Encompassing"
    },
    {
        arabic: "الْحَكِيمُ",
        english: "Al-Hakim",
        meaning: "The Wise"
    },
    {
        arabic: "الْوَدُودُ",
        english: "Al-Wadud",
        meaning: "The Loving"
    },
    {
        arabic: "الْمَجِيدُ",
        english: "Al-Majid",
        meaning: "The Glorious"
    },
    {
        arabic: "الْبَاعِثُ",
        english: "Al-Ba'ith",
        meaning: "The Resurrector"
    },
    {
        arabic: "الشَّهِيدُ",
        english: "Ash-Shahid",
        meaning: "The Witness"
    },
    {
        arabic: "الْحَقُّ",
        english: "Al-Haqq",
        meaning: "The Truth"
    },
    {
        arabic: "الْوَكِيلُ",
        english: "Al-Wakil",
        meaning: "The Trustee"
    },
    {
        arabic: "الْقَوِيُّ",
        english: "Al-Qawiyy",
        meaning: "The Strong"
    },
    {
        arabic: "الْمَتِينُ",
        english: "Al-Matin",
        meaning: "The Firm"
    },
    {
        arabic: "الْوَلِيُّ",
        english: "Al-Waliyy",
        meaning: "The Protector"
    },
    {
        arabic: "الْحَمِيدُ",
        english: "Al-Hamid",
        meaning: "The Praiseworthy"
    },
    {
        arabic: "الْمُحْصِي",
        english: "Al-Muhsi",
        meaning: "The Accounter"
    },
    {
        arabic: "الْمُبْدِئُ",
        english: "Al-Mubdi",
        meaning: "The Originator"
    },
    {
        arabic: "الْمُعِيدُ",
        english: "Al-Mu'id",
        meaning: "The Restorer"
    },
    {
        arabic: "الْمُحْيِي",
        english: "Al-Muhyi",
        meaning: "The Giver of Life"
    },
    {
        arabic: "اَلْمُمِيتُ",
        english: "Al-Mumit",
        meaning: "The Taker of Life"
    },
    {
        arabic: "الْحَيُّ",
        english: "Al-Hayy",
        meaning: "The Ever-Living"
    },
    {
        arabic: "الْقَيُّومُ",
        english: "Al-Qayyum",
        meaning: "The Self-Subsisting"
    },
    {
        arabic: "الْوَاجِدُ",
        english: "Al-Wajid",
        meaning: "The Finder"
    },
    {
        arabic: "الْمَاجِدُ",
        english: "Al-Majid",
        meaning: "The Noble"
    },
    {
        arabic: "الْواحِدُ",
        english: "Al-Wahid",
        meaning: "The One"
    },
    {
        arabic: "اَلاَحَدُ",
        english: "Al-Ahad",
        meaning: "The Unique"
    },
    {
        arabic: "الصَّمَدُ",
        english: "As-Samad",
        meaning: "The Eternal"
    },
    {
        arabic: "الْقَادِرُ",
        english: "Al-Qadir",
        meaning: "The Capable"
    },
    {
        arabic: "الْمُقْتَدِرُ",
        english: "Al-Muqtadir",
        meaning: "The Powerful"
    },
    {
        arabic: "الْمُقَدِّمُ",
        english: "Al-Muqaddim",
        meaning: "The Expediter"
    },
    {
        arabic: "الْمُؤَخِّرُ",
        english: "Al-Mu'akhkhir",
        meaning: "The Delayer"
    },
    {
        arabic: "الأوَّلُ",
        english: "Al-Awwal",
        meaning: "The First"
    },
    {
        arabic: "الآخِرُ",
        english: "Al-Akhir",
        meaning: "The Last"
    },
    {
        arabic: "الظَّاهِرُ",
        english: "Az-Zahir",
        meaning: "The Manifest"
    },
    {
        arabic: "الْبَاطِنُ",
        english: "Al-Batin",
        meaning: "The Hidden"
    },
    {
        arabic: "الْوَالِي",
        english: "Al-Wali",
        meaning: "The Governor"
    },
    {
        arabic: "الْمُتَعَالِي",
        english: "Al-Muta'ali",
        meaning: "The Most Exalted"
    },
    {
        arabic: "الْبَرُّ",
        english: "Al-Barr",
        meaning: "The Source of Goodness"
    },
    {
        arabic: "التَّوَابُ",
        english: "At-Tawwab",
        meaning: "The Acceptor of Repentance"
    },
    {
        arabic: "الْمُنْتَقِمُ",
        english: "Al-Muntaqim",
        meaning: "The Avenger"
    },
    {
        arabic: "العَفُوُّ",
        english: "Al-'Afuww",
        meaning: "The Pardoner"
    },
    {
        arabic: "الرَّؤُوفُ",
        english: "Ar-Ra'uf",
        meaning: "The Compassionate"
    },
    {
        arabic: "مَالِكُ الْمُلْكِ",
        english: "Malik-ul-Mulk",
        meaning: "Owner of All Sovereignty"
    },
    {
        arabic: "ذُوالْجَلاَلِ وَالإكْرَام",
        english: "Dhul-Jalali wal-Ikram",
        meaning: "Lord of Majesty and Honor"
    },
    {
        arabic: "الْمُقْسِطُ",
        english: "Al-Muqsit",
        meaning: "The Equitable"
    },
    {
        arabic: "الْجَامِعُ",
        english: "Al-Jami",
        meaning: "The Gatherer"
    },
    {
        arabic: "الْغَنِيُّ",
        english: "Al-Ghani",
        meaning: "The Self-Sufficient"
    },
    {
        arabic: "الْمُغْنِي",
        english: "Al-Mughni",
        meaning: "The Enricher"
    },
    {
        arabic: "اَلْمَانِعُ",
        english: "Al-Mani'",
        meaning: "The Preventer"
    },
    {
        arabic: "الضَّارَّ",
        english: "Ad-Darr",
        meaning: "The Distressor"
    },
    {
        arabic: "النَّافِعُ",
        english: "An-Nafi",
        meaning: "The Benefactor"
    },
    {
        arabic: "النُّورُ",
        english: "An-Nur",
        meaning: "The Light"
    },
    {
        arabic: "الْهَادِي",
        english: "Al-Hadi",
        meaning: "The Guide"
    },
    {
        arabic: "الْبَدِيعُ",
        english: "Al-Badi",
        meaning: "The Originator"
    },
    {
        arabic: "اَلْبَاقِي",
        english: "Al-Baqi",
        meaning: "The Everlasting"
    },
    {
        arabic: "الْوَارِثُ",
        english: "Al-Warith",
        meaning: "The Inheritor"
    },
    {
        arabic: "الرَّشِيدُ",
        english: "Ar-Rashid",
        meaning: "The Guide to the Right Path"
    },
    {
        arabic: "الصَّبُورُ",
        english: "As-Sabur",
        meaning: "The Patient"
    }
];
