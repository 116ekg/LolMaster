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
  },
  splash: {
    type: Sequelize.STRING,
    allowNull: false
  }
})

User.sync()
Champion.sync({force: true})
  .then(function() {
    console.log('Champion table created...')
    return Champion.bulkCreate([
      {name: 'Aatrox', champId: 266, icon: '/LOLicons/AatroxSquare.png', splash: '/Wallpapers/Aatrox.jpg'},
      {name: 'Ahri', champId: 103, icon: '/LOLicons/AhriSquare.png', splash: '/Wallpapers/Ahri.jpg'},
      {name: 'Akali', champId: 84, icon: '/LOLicons/AkaliSquare.png', splash: '/Wallpapers/Akali.jpg'},
      {name: 'Alistar', champId: 12, icon: '/LOLicons/AlistarSquare.png', splash: '/Wallpapers/Alistar.jpg'},
      {name: 'Amumu', champId: 32, icon: '/LOLicons/AmumuSquare.png', splash: '/Wallpapers/Amumu.jpg'},
      {name: 'Anivia', champId: 34, icon: '/LOLicons/AniviaSquare.png', splash: '/Wallpapers/Anivia.jpg'},
      {name: 'Annie', champId: 1, icon: '/LOLicons/AnnieSquare.png', splash: '/Wallpapers/Annie.jpg'},
      {name: 'Ashe', champId: 22, icon: '/LOLicons/AsheSquare.png', splash: '/Wallpapers/Ashe.jpg'},
      {name: 'Aurelion Sol', champId: 136, icon: '/LOLicons/Aurelion_SolSquare.png', splash: '/Wallpapers/Aurelion_Sol.jpg'},
      {name: 'Azir', champId: 268, icon: '/LOLicons/AzirSquare.png', splash: '/Wallpapers/Azir.jpg'},
      {name: 'Bard', champId: 432, icon: '/LOLicons/BardSquare.png', splash: '/Wallpapers/Bard.jpg'},
      {name: 'Blitzcrank', champId: 53, icon: '/LOLicons/BlitzcrankSquare.png', splash: '/Wallpapers/Blitzcrank.jpg'},
      {name: 'Brand', champId: 63, icon: '/LOLicons/BrandSquare.png', splash: '/Wallpapers/Brand.jpg'},
      {name: 'Braum', champId: 201, icon: '/LOLicons/BraumSquare.png', splash: '/Wallpapers/Braum.jpg'},
      {name: 'Caitlyn', champId: 51, icon: '/LOLicons/CaitlynSquare.png', splash: '/Wallpapers/Caitlyn.jpg'},
      {name: 'Camille', champId: 164, icon: '/LOLicons/CamilleSquare.png', splash: '/Wallpapers/Camille.jpg'},
      {name: 'Cassiopeia', champId: 69, icon: '/LOLicons/CassiopeiaSquare.png', splash: '/Wallpapers/Cassiopeia.jpg'},
      {name: "Cho'Gath", champId: 31, icon: "/LOLicons/Cho'GathSquare.png", splash: "/Wallpapers/Cho'Gath.jpg"},
      {name: 'Corki', champId: 42, icon: '/LOLicons/CorkiSquare.png', splash: '/Wallpapers/Corki.jpg'},
      {name: 'Darius', champId: 122, icon: '/LOLicons/DariusSquare.png', splash: '/Wallpapers/Darius.jpg'},
      {name: 'Diana', champId: 131, icon: '/LOLicons/DianaSquare.png', splash: '/Wallpapers/Diana.jpg'},
      {name: 'Dr. Mundo', champId: 36, icon: '/LOLicons/Dr._MundoSquare.png', splash: '/Wallpapers/Dr_Mundo.jpg'},
      {name: 'Draven', champId: 119, icon: '/LOLicons/DravenSquare.png', splash: '/Wallpapers/Draven.jpg'},
      {name: 'Ekko', champId: 245, icon: '/LOLicons/EkkoSquare.png', splash: '/Wallpapers/Ekko.jpg'},
      {name: 'Elise', champId: 60, icon: '/LOLicons/EliseSquare.png', splash: '/Wallpapers/Elise.jpg'},
      {name: 'Evelynn', champId: 28, icon: '/LOLicons/EvelynnSquare.png', splash: '/Wallpapers/Evelynn.jpg'},
      {name: 'Ezreal', champId: 81, icon: '/LOLicons/EzrealSquare.png', splash: '/Wallpapers/Ezreal.jpg'},
      {name: 'Fiddlesticks', champId: 9, icon: '/LOLicons/FiddlesticksSquare.png', splash: '/Wallpapers/Fiddlesticks.jpg'},
      {name: 'Fiora', champId: 114, icon: '/LOLicons/FioraSquare.png', splash: '/Wallpapers/Fiora.jpg'},
      {name: 'Fizz', champId: 105, icon: '/LOLicons/FizzSquare.png', splash: '/Wallpapers/Fizz.jpg'},
      {name: 'Galio', champId: 3, icon: '/LOLicons/GalioSquare.png', splash: '/Wallpapers/Galio.jpg'},
      {name: 'Gangplank', champId: 41, icon: '/LOLicons/GangplankSquare.png', splash: '/Wallpapers/Gangplank.jpg'},
      {name: 'Garen', champId: 86, icon: '/LOLicons/GarenSquare.png', splash: '/Wallpapers/Garen.jpg'},
      {name: 'Gnar', champId: 150, icon: '/LOLicons/GnarSquare.png', splash: '/Wallpapers/Gnar.jpg'},
      {name: 'Gragas', champId: 79, icon: '/LOLicons/GragasSquare.png', splash: '/Wallpapers/Gragas.jpg'},
      {name: 'Graves', champId: 104, icon: '/LOLicons/GravesSquare.png', splash: '/Wallpapers/Graves.jpg'},
      {name: 'Hecarim', champId: 120, icon: '/LOLicons/HecarimSquare.png', splash: '/Wallpapers/Hecarim.jpg'},
      {name: 'Heimerdinger', champId: 74, icon: '/LOLicons/HeimerdingerSquare.png', splash: '/Wallpapers/Heimerdinger.jpg'},
      {name: 'Illaoi', champId: 420, icon: '/LOLicons/IllaoiSquare.png', splash: '/Wallpapers/Illaoi.jpg'},
      {name: 'Irelia', champId: 39, icon: '/LOLicons/IreliaSquare.png', splash: '/Wallpapers/Irelia.jpg'},
      {name: 'Ivern', champId: 427, icon: '/LOLicons/IvernSquare.png', splash: '/Wallpapers/Ivern.jpg'},
      {name: 'Janna', champId: 40, icon: '/LOLicons/JannaSquare.png', splash: '/Wallpapers/Janna.jpg'},
      {name: 'Jarvan IV', champId: 59, icon: '/LOLicons/Jarvan_IVSquare.png', splash: '/Wallpapers/Jarven.jpg'},
      {name: 'Jax', champId: 24, icon: '/LOLicons/JaxSquare.png', splash: '/Wallpapers/Jax.jpg'},
      {name: 'Jayce', champId: 126, icon: '/LOLicons/JayceSquare.png', splash: '/Wallpapers/Jayce.jpg'},
      {name: 'Jhin', champId: 202, icon: '/LOLicons/JhinSquare.png', splash: '/Wallpapers/Jhin.jpg'},
      {name: 'Jinx', champId: 222, icon: '/LOLicons/JinxSquare.png', splash: '/Wallpapers/Jinx.jpg'},
      {name: 'Kalista', champId: 429, icon: '/LOLicons/KalistaSquare.png', splash: '/Wallpapers/Kalista.jpg'},
      {name: 'Karma', champId: 43, icon: '/LOLicons/KarmaSquare.png', splash: '/Wallpapers/Karma.jpg'},
      {name: 'Karthus', champId: 30, icon: '/LOLicons/KarthusSquare.png', splash: '/Wallpapers/Karthus.jpg'},
      {name: 'Kassadin', champId: 38, icon: '/LOLicons/KassadinSquare.png', splash: '/Wallpapers/Kassadin.jpg'},
      {name: 'Katarina', champId: 55, icon: '/LOLicons/KatarinaSquare.png', splash: '/Wallpapers/Katarina.jpg'},
      {name: 'Kayle', champId: 10, icon: '/LOLicons/KayleSquare.png', splash: '/Wallpapers/Kayle.jpg'},
      {name: 'Kayn', champId: 141, icon: '/LOLicons/KaynSquare.png', splash: '/Wallpapers/Kayn.jpg'},
      {name: 'Kennen', champId: 85, icon: '/LOLicons/KennenSquare.png', splash: '/Wallpapers/Kennan.jpg'},
      {name: "Kha'Zix", champId: 121, icon: "/LOLicons/Kha'ZixSquare.png", splash: "/Wallpapers/Kha'Zix.jpg"},
      {name: 'Kindred', champId: 203, icon: '/LOLicons/KindredSquare.png', splash: '/Wallpapers/Kindred.jpg'},
      {name: 'Kled', champId: 240, icon: '/LOLicons/KledSquare.png', splash: '/Wallpapers/Kled.jpg'},
      {name: "Kog'Maw", champId: 40, icon: "/LOLicons/Kog'MawSquare.png", splash: "/Wallpapers/Kog'Maw.jpg"},
      {name: 'LeBlanc', champId: 7, icon: '/LOLicons/LeblancSquare.png', splash: '/Wallpapers/LeBlanc.jpg'},
      {name: 'Lee Sin', champId: 40, icon: '/LOLicons/Lee_SinSquare.png', splash: '/Wallpapers/Lee_Sin.jpg'},
      {name: 'Leona', champId: 89, icon: '/LOLicons/LeonaSquare.png', splash: '/Wallpapers/Leona.jpg'},
      {name: 'Lissandra', champId: 127, icon: '/LOLicons/LissandraSquare.png', splash: '/Wallpapers/Lissandra.jpg'},
      {name: 'Lucian', champId: 236, icon: '/LOLicons/LucianSquare.png', splash: '/Wallpapers/Lucian.jpg'},
      {name: 'Lulu', champId: 117, icon: '/LOLicons/LuluSquare.png', splash: '/Wallpapers/Lulu.jpg'},
      {name: 'Lux', champId: 99, icon: '/LOLicons/LuxSquare.png', splash: '/Wallpapers/Lux.jpg'},
      {name: 'Malphite', champId: 54, icon: '/LOLicons/MalphiteSquare.png', splash: '/Wallpapers/Malphite.jpg'},
      {name: 'Malzahar', champId: 90, icon: '/LOLicons/MalzaharSquare.png', splash: '/Wallpapers/Malzahar.jpg'},
      {name: 'Maokai', champId: 57, icon: '/LOLicons/MaokaiSquare.png', splash: '/Wallpapers/Maokai.jpg'},
      {name: 'Master Yi', champId: 11, icon: '/LOLicons/Master_YiSquare.png', splash: '/Wallpapers/Master_Yi.jpg'},
      {name: 'Miss Fortune', champId: 21, icon: '/LOLicons/Miss_FortuneSquare.png', splash: '/Wallpapers/Miss_Fortune.jpg'},
      {name: 'Wukong', champId: 62, icon: '/LOLicons/WukongSquare.png', splash: '/Wallpapers/Wukong.jpg'},
      {name: 'Mordekaiser', champId: 82, icon: '/LOLicons/MordekaiserSquare.png', splash: '/Wallpapers/Mordekeiser.jpg'},
      {name: 'Morgana', champId: 25, icon: '/LOLicons/MorganaSquare.png', splash: '/Wallpapers/Morgana.jpg'},
      {name: 'Nami', champId: 267, icon: '/LOLicons/NamiSquare.png', splash: '/Wallpapers/Nami.jpg'},
      {name: 'Nasus', champId: 75, icon: '/LOLicons/NasusSquare.png', splash: '/Wallpapers/Nasus.jpg'},
      {name: 'Nautilus', champId: 111, icon: '/LOLicons/NautilusSquare.png', splash: '/Wallpapers/Nautilus.jpg'},
      {name: 'Nidalee', champId: 76, icon: '/LOLicons/NidaleeSquare.png', splash: '/Wallpapers/Nidalle.jpg'},
      {name: 'Nocturne', champId: 56, icon: '/LOLicons/NocturneSquare.png', splash: '/Wallpapers/Nocturne.jpg'},
      {name: 'Nunu', champId: 20, icon: '/LOLicons/NunuSquare.png', splash: '/Wallpapers/Nunu.jpg'},
      {name: 'Olaf', champId: 2, icon: '/LOLicons/OlafSquare.png', splash: '/Wallpapers/Olaf.jpg'},
      {name: 'Orianna', champId: 61, icon: '/LOLicons/OriannaSquare.png', splash: '/Wallpapers/Orianna.jpg'},
      {name: 'Pantheon', champId: 80, icon: '/LOLicons/PantheonSquare.png', splash: '/Wallpapers/Pantheon.jpg'},
      {name: 'Poppy', champId: 78, icon: '/LOLicons/PoppySquare.png', splash: '/Wallpapers/Poppy.jpg'},
      {name: 'Quinn', champId: 133, icon: '/LOLicons/QuinnSquare.png', splash: '/Wallpapers/Quinn.jpg'},
      {name: 'Rakan', champId: 497, icon: '/LOLicons/RakanSquare.png', splash: '/Wallpapers/Rakan.jpg'},
      {name: 'Rammus', champId: 33, icon: '/LOLicons/RammusSquare.png', splash: '/Wallpapers/Rammus.jpg'},
      {name: "Rek'Sai", champId: 421, icon: "/LOLicons/Rek'SaiSquare.png", splash: "/Wallpapers/Rek'Sai.jpg"},
      {name: 'Renekton', champId: 58, icon: '/LOLicons/RenektonSquare.png', splash: '/Wallpapers/Renekton.jpg'},
      {name: 'Rengar', champId: 107, icon: '/LOLicons/RengarSquare.png', splash: '/Wallpapers/Rengar.jpg'},
      {name: 'Riven', champId: 92, icon: '/LOLicons/RivenSquare.png', splash: '/Wallpapers/Riven.jpg'},
      {name: 'Rumble', champId: 68, icon: '/LOLicons/RumbleSquare.png', splash: '/Wallpapers/Rumble.jpg'},
      {name: 'Ryze', champId: 13, icon: '/LOLicons/RyzeSquare.png', splash: '/Wallpapers/Ryze.jpg'},
      {name: 'Sejuani', champId: 113, icon: '/LOLicons/SejuaniSquare.png', splash: '/Wallpapers/Sejuani.jpg'},
      {name: 'Shaco', champId: 35, icon: '/LOLicons/ShacoSquare.png', splash: '/Wallpapers/Shaco.jpg'},
      {name: 'Shen', champId: 98, icon: '/LOLicons/ShenSquare.png', splash: '/Wallpapers/Shen.jpg'},
      {name: 'Shyvana', champId: 102, icon: '/LOLicons/ShyvanaSquare.png', splash: '/Wallpapers/Shyvana.jpg'},
      {name: 'Singed', champId: 27, icon: '/LOLicons/SingedSquare.png', splash: '/Wallpapers/Singed.jpg'},
      {name: 'Sion', champId: 14, icon: '/LOLicons/SionSquare.png', splash: '/Wallpapers/Sion.jpg'},
      {name: 'Sivir', champId: 15, icon: '/LOLicons/SivirSquare.png', splash: '/Wallpapers/Sivir.jpg'},
      {name: 'Skarner', champId: 72, icon: '/LOLicons/SkarnerSquare.png', splash: '/Wallpapers/Skarner.jpg'},
      {name: 'Sona', champId: 37, icon: '/LOLicons/SonaSquare.png', splash: '/Wallpapers/Sona.jpg'},
      {name: 'Soraka', champId: 16, icon: '/LOLicons/SorakaSquare.png', splash: '/Wallpapers/Soraka.jpg'},
      {name: 'Swain', champId: 50, icon: '/LOLicons/SwainSquare.png', splash: '/Wallpapers/Swain.jpg'},
      {name: 'Syndra', champId: 134, icon: '/LOLicons/SyndraSquare.png', splash: '/Wallpapers/Syndra.jpg'},
      {name: 'Tahm Kench', champId: 223, icon: '/LOLicons/Tahm_KenchSquare.png', splash: '/Wallpapers/Tahm_Kench.jpg'},
      {name: 'Taliyah', champId: 163, icon: '/LOLicons/TaliyahSquare.png', splash: '/Wallpapers/Taliyah.jpg'},
      {name: 'Talon', champId: 91, icon: '/LOLicons/TalonSquare.png', splash: '/Wallpapers/Talon.jpg'},
      {name: 'Taric', champId: 44, icon: '/LOLicons/TaricSquare.png', splash: '/Wallpapers/Taric.jpg'},
      {name: 'Teemo', champId: 17, icon: '/LOLicons/TeemoSquare.png', splash: '/Wallpapers/Teemo.jpg'},
      {name: 'Thresh', champId: 412, icon: '/LOLicons/ThreshSquare.png', splash: '/Wallpapers/Thresh.jpg'},
      {name: 'Tristana', champId: 18, icon: '/LOLicons/TristanaSquare.png', splash: '/Wallpapers/Tristana.jpg'},
      {name: 'Trundle', champId: 48, icon: '/LOLicons/TrundleSquare.png', splash: '/Wallpapers/Trundle.jpg'},
      {name: 'Tryndamere', champId: 23, icon: '/LOLicons/TryndamereSquare.png', splash: '/Wallpapers/Tryndamere.jpg'},
      {name: 'Twisted Fate', champId: 4, icon: '/LOLicons/Twisted_FateSquare.png', splash: '/Wallpapers/Twisted_Fate.jpg'},
      {name: 'Twitch', champId: 29, icon: '/LOLicons/TwitchSquare.png', splash: '/Wallpapers/Twitch.jpg'},
      {name: 'Udyr', champId: 77, icon: '/LOLicons/UdyrSquare.png', splash: '/Wallpapers/Udyr.jpg'},
      {name: 'Urgot', champId: 6, icon: '/LOLicons/UrgotSquare.png', splash: '/Wallpapers/Urgot.jpg'},
      {name: 'Varus', champId: 110, icon: '/LOLicons/VarusSquare.png', splash: '/Wallpapers/Varus.jpg'},
      {name: 'Vayne', champId: 67, icon: '/LOLicons/VayneSquare.png', splash: '/Wallpapers/Vayne.jpg'},
      {name: 'Veigar', champId: 45, icon: '/LOLicons/VeigarSquare.png', splash: '/Wallpapers/Veigar.jpg'},
      {name: "Vel'Koz", champId: 161, icon: "/LOLicons/Vel'KozSquare.png", splash: "/Wallpapers/Vel'Koz.jpg"},
      {name: 'Vi', champId: 254, icon: '/LOLicons/ViSquare.png', splash: '/Wallpapers/Vi.jpg'},
      {name: 'Viktor', champId: 112, icon: '/LOLicons/ViktorSquare.png', splash: '/Wallpapers/Victor.jpg'},
      {name: 'Vladimir', champId: 8, icon: '/LOLicons/VladimirSquare.png', splash: '/Wallpapers/Vladimir.jpg'},
      {name: 'Volibear', champId: 106, icon: '/LOLicons/VolibearSquare.png', splash: '/Wallpapers/Volibear.jpg'},
      {name: 'Warwick', champId: 19, icon: '/LOLicons/WarwickSquare.png', splash: '/Wallpapers/Warwick.jpg'},
      {name: 'Xayah', champId: 498, icon: '/LOLicons/XayahSquare.png', splash: '/Wallpapers/Xayah.jpg'},
      {name: 'Xerath', champId: 101, icon: '/LOLicons/XerathSquare.png', splash: '/Wallpapers/Xerath.jpg'},
      {name: 'Xin Zhao', champId: 5, icon: '/LOLicons/Xin_ZhaoSquare.png', splash: '/Wallpapers/Xin_Zhao.jpg'},
      {name: 'Yasuo', champId: 157, icon: '/LOLicons/YasuoSquare.png', splash: '/Wallpapers/Yasuo.jpg'},
      {name: 'Yorick', champId: 83, icon: '/LOLicons/YorickSquare.png', splash: '/Wallpapers/Yorick.jpg'},
      {name: 'Zac', champId: 154, icon: '/LOLicons/ZacSquare.png', splash: '/Wallpapers/Zac.jpg'},
      {name: 'Zed', champId: 238, icon: '/LOLicons/ZedSquare.png', splash: '/Wallpapers/Zed.jpg'},
      {name: 'Ziggs', champId: 115, icon: '/LOLicons/ZiggsSquare.png', splash: '/Wallpapers/Ziggs.jpg'},
      {name: 'Zilean', champId: 26, icon: '/LOLicons/ZileanSquare.png', splash: '/Wallpapers/Zilean.jpg'},
      {name: 'Zyra', champId: 143, icon: '/LOLicons/ZyraSquare.png', splash: '/Wallpapers/Zyra.jpg'},

    ])
  })
  .then(function() {
    console.log('seeded champion table....')
  })

module.exports = {
  User,
  Champion
}