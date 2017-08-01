const Sequelize = require('sequelize')
const db = require('./config')

const User = db.define('user', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  summonerId: {
    type: Sequelize.INTEGER,
    allowNull: false
  }
})

const Champion = db.define('champion', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  champId: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  icon: {
    type: Sequelize.STRING,
    allowNull: false
  }
})

User.sync()
Champion.sync({force: true})
  .then(function() {
    console.log('Champion table created...')
    return Champion.bulkCreate([
      {name: 'Aatrox', champId: 266, icon: '/LOLicons/AatroxSquare.png'},
      {name: 'Ahri', champId: 103, icon: '/LOLicons/AhriSquare.png'},
      {name: 'Akali', champId: 84, icon: '/LOLicons/AkaliSquare.png'},
      {name: 'Alistar', champId: 12, icon: '/LOLicons/AlistarSquare.png'},
      {name: 'Amumu', champId: 32, icon: '/LOLicons/AmumuSquare.png'},
      {name: 'Anivia', champId: 34, icon: '/LOLicons/AniviaSquare.png'},
      {name: 'Annie', champId: 1, icon: '/LOLicons/AnnieSquare.png'},
      {name: 'Ashe', champId: 22, icon: '/LOLicons/AsheSquare.png'},
      {name: 'Aurelion Sol', champId: 136, icon: '/LOLicons/Aurelion_SolSquare.png'},
      {name: 'Azir', champId: 268, icon: '/LOLicons/AzirSquare.png'},
      {name: 'Bard', champId: 432, icon: '/LOLicons/BardSquare.png'},
      {name: 'Blitzcrank', champId: 53, icon: '/LOLicons/BlitzcrankSquare.png'},
      {name: 'Brand', champId: 63, icon: '/LOLicons/BrandSquare.png'},
      {name: 'Braum', champId: 201, icon: '/LOLicons/BraumSquare.png'},
      {name: 'Caitlyn', champId: 51, icon: '/LOLicons/CaitlynSquare.png'},
      {name: 'Camille', champId: 164, icon: '/LOLicons/CamilleSquare.png'},
      {name: 'Cassiopeia', champId: 69, icon: '/LOLicons/CassiopeiaSquare.png'},
      {name: "Cho'Gath", champId: 31, icon: "/LOLicons/Cho'GathSquare.png"},
      {name: 'Corki', champId: 42, icon: '/LOLicons/CorkiSquare.png'},
      {name: 'Darius', champId: 122, icon: '/LOLicons/DariusSquare.png'},
      {name: 'Diana', champId: 131, icon: '/LOLicons/DianaSquare.png'},
      {name: 'Dr. Mundo', champId: 36, icon: '/LOLicons/Dr._MundoSquare.png'},
      {name: 'Draven', champId: 119, icon: '/LOLicons/DravenSquare.png'},
      {name: 'Ekko', champId: 245, icon: '/LOLicons/EkkoSquare.png'},
      {name: 'Elise', champId: 60, icon: '/LOLicons/EliseSquare.png'},
      {name: 'Evelynn', champId: 28, icon: '/LOLicons/EvelynnSquare.png'},
      {name: 'Ezreal', champId: 81, icon: '/LOLicons/EzrealSquare.png'},
      {name: 'Fiddlesticks', champId: 9, icon: '/LOLicons/FiddlesticksSquare.png'},
      {name: 'Fiora', champId: 114, icon: '/LOLicons/FioraSquare.png'},
      {name: 'Fizz', champId: 105, icon: '/LOLicons/FizzSquare.png'},
      {name: 'Galio', champId: 3, icon: '/LOLicons/GalioSquare.png'},
      {name: 'Gangplank', champId: 41, icon: '/LOLicons/GangplankSquare.png'},
      {name: 'Garen', champId: 86, icon: '/LOLicons/GarenSquare.png'},
      {name: 'Gnar', champId: 150, icon: '/LOLicons/GnarSquare.png'},
      {name: 'Gragas', champId: 79, icon: '/LOLicons/GragasSquare.png'},
      {name: 'Graves', champId: 104, icon: '/LOLicons/GravesSquare.png'},
      {name: 'Hecarim', champId: 120, icon: '/LOLicons/HecarimSquare.png'},
      {name: 'Heimerdinger', champId: 74, icon: '/LOLicons/HeimerdingerSquare.png'},
      {name: 'Illaoi', champId: 420, icon: '/LOLicons/IllaoiSquare.png'},
      {name: 'Irelia', champId: 39, icon: '/LOLicons/IreliaSquare.png'},
      {name: 'Ivern', champId: 427, icon: '/LOLicons/IvernSquare.png'},
      {name: 'Janna', champId: 40, icon: '/LOLicons/JannaSquare.png'},
      {name: 'Jarvan IV', champId: 59, icon: '/LOLicons/Jarvan_IVSquare.png'},
      {name: 'Jax', champId: 24, icon: '/LOLicons/JaxSquare.png'},
      {name: 'Jayce', champId: 126, icon: '/LOLicons/JayceSquare.png'},
      {name: 'Jhin', champId: 202, icon: '/LOLicons/JhinSquare.png'},
      {name: 'Jinx', champId: 222, icon: '/LOLicons/JinxSquare.png'},
      {name: 'Kalista', champId: 429, icon: '/LOLicons/KalistaSquare.png'},
      {name: 'Karma', champId: 43, icon: '/LOLicons/KarmaSquare.png'},
      {name: 'Karthus', champId: 30, icon: '/LOLicons/KarthusSquare.png'},
      {name: 'Kassadin', champId: 38, icon: '/LOLicons/KassadinSquare.png'},
      {name: 'Katarina', champId: 55, icon: '/LOLicons/KatarinaSquare.png'},
      {name: 'Kayle', champId: 10, icon: '/LOLicons/KayleSquare.png'},
      {name: 'Kayn', champId: 141, icon: '/LOLicons/KaynSquare.png'},
      {name: 'Kennen', champId: 85, icon: '/LOLicons/KennenSquare.png'},
      {name: "Kha'Zix", champId: 121, icon: "/LOLicons/Kha'ZixSquare.png"},
      {name: 'Kindred', champId: 203, icon: '/LOLicons/KindredSquare.png'},
      {name: 'Kled', champId: 240, icon: '/LOLicons/KledSquare.png'},
      {name: "Kog'Maw", champId: 40, icon: "/LOLicons/Kog'MawSquare.png"},
      {name: 'LeBlanc', champId: 7, icon: '/LOLicons/LeblancSquare.png'},
      {name: 'Lee Sin', champId: 40, icon: '/LOLicons/Lee_SinSquare.png'},
      {name: 'Leona', champId: 89, icon: '/LOLicons/LeonaSquare.png'},
      {name: 'Lissandra', champId: 127, icon: '/LOLicons/LissandraSquare.png'},
      {name: 'Lucian', champId: 236, icon: '/LOLicons/LucianSquare.png'},
      {name: 'Lulu', champId: 117, icon: '/LOLicons/LuluSquare.png'},
      {name: 'Lux', champId: 99, icon: '/LOLicons/LuxSquare.png'},
      {name: 'Malphite', champId: 54, icon: '/LOLicons/MalphiteSquare.png'},
      {name: 'Malzahar', champId: 90, icon: '/LOLicons/MalzaharSquare.png'},
      {name: 'Maokai', champId: 57, icon: '/LOLicons/MaokaiSquare.png'},
      {name: 'Master Yi', champId: 11, icon: '/LOLicons/Master_YiSquare.png'},
      {name: 'Miss Fortune', champId: 21, icon: '/LOLicons/Miss_FortuneSquare.png'},
      {name: 'Wukong', champId: 62, icon: '/LOLicons/WukongSquare.png'},
      {name: 'Mordekaiser', champId: 82, icon: '/LOLicons/MordekaiserSquare.png'},
      {name: 'Morgana', champId: 25, icon: '/LOLicons/MorganaSquare.png'},
      {name: 'Nami', champId: 267, icon: '/LOLicons/NamiSquare.png'},
      {name: 'Nasus', champId: 75, icon: '/LOLicons/NasusSquare.png'},
      {name: 'Nautilus', champId: 111, icon: '/LOLicons/NautilusSquare.png'},
      {name: 'Nidalee', champId: 76, icon: '/LOLicons/NidaleeSquare.png'},
      {name: 'Nocturne', champId: 56, icon: '/LOLicons/NocturneSquare.png'},
      {name: 'Nunu', champId: 20, icon: '/LOLicons/NunuSquare.png'},
      {name: 'Olaf', champId: 2, icon: '/LOLicons/OlafSquare.png'},
      {name: 'Orianna', champId: 61, icon: '/LOLicons/OriannaSquare.png'},
      {name: 'Pantheon', champId: 80, icon: '/LOLicons/PantheonSquare.png'},
      {name: 'Poppy', champId: 78, icon: '/LOLicons/PoppySquare.png'},
      {name: 'Quinn', champId: 133, icon: '/LOLicons/QuinnSquare.png'},
      {name: 'Rakan', champId: 497, icon: '/LOLicons/RakanSquare.png'},
      {name: 'Rammus', champId: 33, icon: '/LOLicons/RammusSquare.png'},
      {name: "Rek'Sai", champId: 421, icon: "/LOLicons/Rek'SaiSquare.png"},
      {name: 'Renekton', champId: 58, icon: '/LOLicons/RenektonSquare.png'},
      {name: 'Rengar', champId: 107, icon: '/LOLicons/RengarSquare.png'},
      {name: 'Riven', champId: 92, icon: '/LOLicons/RivenSquare.png'},
      {name: 'Rumble', champId: 68, icon: '/LOLicons/RumbleSquare.png'},
      {name: 'Ryze', champId: 13, icon: '/LOLicons/RyzeSquare.png'},
      {name: 'Sejuani', champId: 113, icon: '/LOLicons/SejuaniSquare.png'},
      {name: 'Shaco', champId: 35, icon: '/LOLicons/ShacoSquare.png'},
      {name: 'Shen', champId: 98, icon: '/LOLicons/ShenSquare.png'},
      {name: 'Shyvana', champId: 102, icon: '/LOLicons/ShyvanaSquare.png'},
      {name: 'Singed', champId: 27, icon: '/LOLicons/SingedSquare.png'},
      {name: 'Sion', champId: 14, icon: '/LOLicons/SionSquare.png'},
      {name: 'Sivir', champId: 15, icon: '/LOLicons/SivirSquare.png'},
      {name: 'Skarner', champId: 72, icon: '/LOLicons/SkarnerSquare.png'},
      {name: 'Sona', champId: 37, icon: '/LOLicons/SonaSquare.png'},
      {name: 'Soraka', champId: 16, icon: '/LOLicons/SorakaSquare.png'},
      {name: 'Swain', champId: 50, icon: '/LOLicons/SwainSquare.png'},
      {name: 'Syndra', champId: 134, icon: '/LOLicons/SyndraSquare.png'},
      {name: 'Tahm Kench', champId: 223, icon: '/LOLicons/Tahm_KenchSquare.png'},
      {name: 'Taliyah', champId: 163, icon: '/LOLicons/TaliyahSquare.png'},
      {name: 'Talon', champId: 91, icon: '/LOLicons/TalonSquare.png'},
      {name: 'Taric', champId: 44, icon: '/LOLicons/TaricSquare.png'},
      {name: 'Teemo', champId: 17, icon: '/LOLicons/TeemoSquare.png'},
      {name: 'Thresh', champId: 412, icon: '/LOLicons/ThreshSquare.png'},
      {name: 'Tristana', champId: 18, icon: '/LOLicons/TristanaSquare.png'},
      {name: 'Trundle', champId: 48, icon: '/LOLicons/TrundleSquare.png'},
      {name: 'Tryndamere', champId: 23, icon: '/LOLicons/TryndamereSquare.png'},
      {name: 'Twisted Fate', champId: 4, icon: '/LOLicons/Twisted_FateSquare.png'},
      {name: 'Twitch', champId: 29, icon: '/LOLicons/TwitchSquare.png'},
      {name: 'Udyr', champId: 77, icon: '/LOLicons/UdyrSquare.png'},
      {name: 'Urgot', champId: 6, icon: '/LOLicons/UrgotSquare.png'},
      {name: 'Varus', champId: 110, icon: '/LOLicons/VarusSquare.png'},
      {name: 'Vayne', champId: 67, icon: '/LOLicons/VayneSquare.png'},
      {name: 'Veigar', champId: 45, icon: '/LOLicons/VeigarSquare.png'},
      {name: "Vel'Koz", champId: 161, icon: "/LOLicons/Vel'KozSquare.png"},
      {name: 'Vi', champId: 254, icon: '/LOLicons/ViSquare.png'},
      {name: 'Viktor', champId: 112, icon: '/LOLicons/ViktorSquare.png'},
      {name: 'Vladimir', champId: 8, icon: '/LOLicons/VladimirSquare.png'},
      {name: 'Volibear', champId: 106, icon: '/LOLicons/VolibearSquare.png'},
      {name: 'Warwick', champId: 19, icon: '/LOLicons/WarwickSquare.png'},
      {name: 'Xayah', champId: 498, icon: '/LOLicons/XayahSquare.png'},
      {name: 'Xerath', champId: 101, icon: '/LOLicons/XerathSquare.png'},
      {name: 'Xin Zhao', champId: 5, icon: '/LOLicons/Xin_ZhaoSquare.png'},
      {name: 'Yasuo', champId: 157, icon: '/LOLicons/YasuoSquare.png'},
      {name: 'Yorick', champId: 83, icon: '/LOLicons/YorickSquare.png'},
      {name: 'Zac', champId: 154, icon: '/LOLicons/ZacSquare.png'},
      {name: 'Zed', champId: 238, icon: '/LOLicons/ZedSquare.png'},
      {name: 'Ziggs', champId: 115, icon: '/LOLicons/ZiggsSquare.png'},
      {name: 'Zilean', champId: 26, icon: '/LOLicons/ZileanSquare.png'},
      {name: 'Zyra', champId: 143, icon: '/LOLicons/ZyraSquare.png'},

    ])
  })
  .then(function() {
    console.log('seeded champion table....')
  })

module.exports = {
  User,
  Champion
}