const randomButton = document.getElementById("random");
const contentElement = document.getElementById("content");
const nameElement = document.getElementById("name");
const imgElement = document.getElementById("img");

const champions = [
  {
    name: "aatrox",
    image:
      "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data/db39563458aa28c3f3aa8990f2c964a0f7645097-496x560.jpg?auto=format&fit=fill&q=80&w=289",
  },
  {
    name: "ahri",
    image:
      "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live_/55e7e901b1f69d72804665cfbeb1f4f59c8fa877-496x560.jpg?auto=format&fit=fill&q=80&w=289",
  },
  {
    name: "akali",
    image:
      "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/abbd173df157f943496abb0638add119f753e3b2-496x560.jpg?auto=format&fit=fill&q=80&w=289",
  },
  {
    name: "akshan",
    image:
      "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/9e5ea58123ac5a699700eec49f8412af11e563a0-496x560.jpg?auto=format&fit=fill&q=80&w=289",
  },
  {
    name: "alistar",
    image:
      "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/da8cefee5b85bca51360ccc1635ef5b0f6967767-496x560.jpg?auto=format&fit=fill&q=80&w=289",
  },
  {
    name: "amumu",
    image:
      "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/092febba8905cff35940d036fd20b7e3ad4f428f-496x560.jpg?auto=format&fit=fill&q=80&w=289",
  },
  {
    name: "anivia",
    image:
      "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/b9081057a6282c7c7f074dc9cec094b8d51df9bf-496x560.jpg?auto=format&fit=fill&q=80&w=289",
  },
  {
    name: "annie",
    image:
      "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/220684b035ca0a0dc0d93c17ee058872d7c2a4e9-496x560.jpg?auto=format&fit=fill&q=80&w=289",
  },
  {
    name: "aphelios",
    image:
      "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Aphelios_0.jpg",
  },
  {
    name: "ashe",
    image:
      "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/6311d8de67f55496be4886a353372c8da713dade-496x560.jpg?auto=format&fit=fill&q=80&w=289",
  },
  {
    name: "aurelion Sol",
    image:
      "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/b665be2e2ae732b20295424957c5e1dccdf07098-496x560.jpg?auto=format&fit=fill&q=80&w=289",
  },
  {
    name: "aurora",
    image:
      "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data/2984fc54c2eccfed432ac8a78e90757b574178c4-418x473.jpg?auto=format&fit=fill&q=80&w=289",
  },
  {
    name: "azir",
    image:
      "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/1636aeb5f8d604f7d3336428918146cac62c28e7-496x560.jpg?auto=format&fit=fill&q=80&w=289",
  },
  {
    name: "bard",
    image:
      "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/9679cce427dbc633348fc330806543a3ff2509a9-496x560.jpg?auto=format&fit=fill&q=80&w=289",
  },
  {
    name: "bel'veth",
    image:
      "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/63cbd4e3da7484ffde0130784bcc879b50652f53-496x560.jpg?auto=format&fit=fill&q=80&w=289",
  },
  {
    name: "blitzcrank",
    image:
      "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/c6db939c90bf8e10b1b9baf77bc99c9bcd2d6981-496x560.jpg?auto=format&fit=fill&q=80&w=289",
  },
  {
    name: "brand",
    image:
      "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/6dd885169af0eeb3d662923df8a87973ee13844f-496x560.jpg?auto=format&fit=fill&q=80&w=289",
  },
  {
    name: "braum",
    image:
      "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/9e0a1f3e48f9b6c7356e5efe17b23383ace41f76-496x560.jpg?auto=format&fit=fill&q=80&w=289",
  },
  {
    name: "briar",
    image:
      "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/8828f92a1ed9c410b5be0a5424f95b3a8f641e5a-496x560.jpg?auto=format&fit=fill&q=80&w=289",
  },
  {
    name: "caitlyn",
    image:
      "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/33eb2887813cb07d3b708800b93097a02182e98b-496x560.jpg?auto=format&fit=fill&q=80&w=289",
  },
  {
    name: "camille",
    image:
      "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data/78114603ab0495a965c63da0b1d8d9b1cdced67c-496x560.jpg?auto=format&fit=fill&q=80&w=289",
  },
  {
    name: "cassiopeia",
    image:
      "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/e6193f3ac760c4cf27a99c4adc0c116339c12c5a-496x560.jpg?auto=format&fit=fill&q=80&w=289",
  },
  {
    name: "cho'gath",
    image:
      "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/6b0fe9a40e625b72d4b97ee108a221abc7aa24fb-496x560.jpg?auto=format&fit=fill&q=80&w=289",
  },
  {
    name: "corki",
    image:
      "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/a01abe18e557c86721e8725ac36337a8839ac926-496x560.jpg?auto=format&fit=fill&q=80&w=289",
  },
  {
    name: "darius",
    image:
      "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/f606418621ccec569ab1ec87e1084dfd8e45e5f1-496x560.jpg?auto=format&fit=fill&q=80&w=289",
  },
  {
    name: "diana",
    image:
      "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/f7ad13d4cc98803ddfcf53c008a1a102b8e0f1a7-496x560.jpg?auto=format&fit=fill&q=80&w=289",
  },
  {
    name: "dr.Mundo",
    image:
      "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/3da8fcf480e236197eefa038f6f91a8e6ea6a451-496x560.jpg?auto=format&fit=fill&q=80&w=289",
  },
  {
    name: "draven",
    image:
      "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/374ea4cb505b1288172fd93d92064af5b7cbc298-496x560.jpg?auto=format&fit=fill&q=80&w=289",
  },
  {
    name: "ekko",
    image:
      "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/f46b8d63d3ed969469ab6c3d3e5827a70a6e826a-496x560.jpg?auto=format&fit=fill&q=80&w=289",
  },
  {
    name: "elise",
    image:
      "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/9d7c852f03f09bd32aab843a98f3a4c371afa3ba-496x560.jpg?auto=format&fit=fill&q=80&w=289",
  },
  {
    name: "evelynn",
    image:
      "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/e5cf98936e8b47a7909248518d7737dd610a137b-496x560.jpg?auto=format&fit=fill&q=80&w=289",
  },
  {
    name: "ezreal",
    image:
      "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/ecec8b919f053c1dd99602a06abe9b709ce14d5a-496x560.jpg?auto=format&fit=fill&q=80&w=289",
  },
  {
    name: "fiddlesticks",
    image:
      "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/4f49d9cf3f13075a79b25dbeb5657fb59742a4f1-496x560.jpg?auto=format&fit=fill&q=80&w=289",
  },
  {
    name: "fiora",
    image:
      "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/e76d371dc28d1bc79a3eb66df8597c12354cc69e-496x560.jpg?auto=format&fit=fill&q=80&w=289",
  },
  {
    name: "fizz",
    image:
      "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/d62b56e6f606e6e225a59879be46e0903a973dd0-496x560.jpg?auto=format&fit=fill&q=80&w=289",
  },
  {
    name: "galio",
    image:
      "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/28f2a8ca2e4422674275c5e2d077d6cb4f143d0c-496x560.jpg?auto=format&fit=fill&q=80&w=289",
  },
  {
    name: "gangplank",
    image:
      "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/9cb7c305070bc7ae1885483695d5272f85ee0c59-496x560.jpg?auto=format&fit=fill&q=80&w=289",
  },
  {
    name: "garen",
    image:
      "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/2acb7715797d4183b09fdbfb902ff52a0aa4e0cf-496x560.jpg?auto=format&fit=fill&q=80&w=289",
  },
  {
    name: "gnar",
    image:
      "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/5c0a5cedf2e21d887e83674d1c09099633e3cb4e-496x560.jpg?auto=format&fit=fill&q=80&w=289",
  },
  {
    name: "gragas",
    image:
      "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/804047489514e31ac95e7d74878a167327021f99-496x560.jpg?auto=format&fit=fill&q=80&w=289",
  },
  {
    name: "graves",
    image:
      "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/fb9afd4b5b55a46d91b7faae22abb91a9cf84c80-496x560.jpg?auto=format&fit=fill&q=80&w=289",
  },
  {
    name: "gwen",
    image:
      "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/dde9ede0cd3013a28dc29b98d25caf3e4b79348f-496x560.jpg?auto=format&fit=fill&q=80&w=289",
  },
  {
    name: "hacarim",
    image:
      "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/1be0f0e944bc9be2c15ebc782a3f69ea9e754499-496x560.jpg?auto=format&fit=fill&q=80&w=289",
  },
  {
    name: "heimerdinger",
    image:
      "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/8201aebd324836be730d1be4dd9d5d2e7aa4004c-496x560.jpg?auto=format&fit=fill&q=80&w=289",
  },
  {
    name: "hwei",
    image:
      "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/305ea48a1b1818c660b7e195ff47b097733031c7-496x560.jpg?auto=format&fit=fill&q=80&w=289",
  },
  {
    name: "illaoi",
    image:
      "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/da1325eb336bcf34ab3f83d554d34e76997eea06-496x560.jpg?auto=format&fit=fill&q=80&w=289",
  },
  {
    name: "irellia",
    image:
      "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/baa25073a0560dbfffa5fafa9eeebe3bd27c4206-496x560.jpg?auto=format&fit=fill&q=80&w=289",
  },
  {
    name: "ivern",
    image:
      "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/b4190dfb25a1248a60ae7ce362edfdf25638a497-496x560.jpg?auto=format&fit=fill&q=80&w=289",
  },
  {
    name: "janna",
    image:
      "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/51ae290a3a5b3ef613d1fbc52cb3d155c0491603-496x560.jpg?auto=format&fit=fill&q=80&w=289",
  },
  {
    name: "javan IV",
    image:
      "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/b0b935f8a12343ac6e0c9c9c0eb206b187a59122-496x560.jpg?auto=format&fit=fill&q=80&w=289",
  },
  {
    name: "jax",
    image:
      "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/241bbf174163f115aff498875f1aeb1ea1a65dcc-496x560.jpg?auto=format&fit=fill&q=80&w=289",
  },
  {
    name: "jayce",
    image:
      "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/5c281ddba910f68b6b3271262eb60ec5adce09e9-496x560.jpg?auto=format&fit=fill&q=80&w=289",
  },
  {
    name: "jhin",
    image:
      "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/c7bcc3ab59371041a1035c0447fba1b4d3253d9e-496x560.jpg?auto=format&fit=fill&q=80&w=289",
  },
  {
    name: "jinx",
    image:
      "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/e106881ea1263e6d13188d5d399c5b1f72849a3d-496x560.jpg?auto=format&fit=fill&q=80&w=289",
  },
  {
    name: "k'sante",
    image:
      "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/a0273729f9d2d9710089eea19716cbf86b455e1f-496x560.jpg?auto=format&fit=fill&q=80&w=289",
  },
  {
    name: "kai'sa",
    image:
      "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/516bc1d22979ed9a290321b3474363875a3c7b10-496x560.jpg?auto=format&fit=fill&q=80&w=289",
  },
  {
    name: "kalista",
    image:
      "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/2dc0f005113d17259f5a252f673b48195175c6ab-496x560.jpg?auto=format&fit=fill&q=80&w=289",
  },
  {
    name: "karma",
    image:
      "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/6070fe3be64810d5109a53c9812e1937202e45d8-496x560.jpg?auto=format&fit=fill&q=80&w=289",
  },
  {
    name: "karthus",
    image:
      "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/7c98b1b12c4473d305c793622b03c53e31dc93eb-496x560.jpg?auto=format&fit=fill&q=80&w=289",
  },
  {
    name: "kassadin",
    image:
      "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/8c1342c1dc213137f25d3553a04861c17ad63cca-496x560.jpg?auto=format&fit=fill&q=80&w=289",
  },
  {
    name: "katarina",
    image:
      "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/3a55002a6776651265ec7b8e6e9276cee39204f1-496x560.jpg?auto=format&fit=fill&q=80&w=289",
  },
  {
    name: "kayle",
    image:
      "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/71365704a7f4d83252b10fe4affb020225100ce3-496x560.jpg?auto=format&fit=fill&q=80&w=289",
  },
  {
    name: "kayn",
    image:
      "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/a926bba66a7fe3b1c207b790fd97075939ce58ee-496x560.jpg?auto=format&fit=fill&q=80&w=289",
  },
  {
    name: "kennen",
    image:
      "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/afcd9c81e4f3a9a86bc43bd9e6fb457dac1f5fe8-496x560.jpg?auto=format&fit=fill&q=80&w=289",
  },
  {
    name: "kha'zix",
    image:
      "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/be64a88691695dc3b5d81f4bbbe32a617957930c-496x560.jpg?auto=format&fit=fill&q=80&w=289",
  },
  {
    name: "kindred",
    image:
      "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/81ea60b4f073843586452253d30d1c3826759c21-496x560.jpg?auto=format&fit=fill&q=80&w=289",
  },
  {
    name: "kled",
    image:
      "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/e7fca39b04ecc83ff3e96b281aa39b385cd5faa3-496x560.jpg?auto=format&fit=fill&q=80&w=289",
  },
  {
    name: "kog'maw",
    image:
      "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/dce2ccb33c14f6598cd8509fa5c45cefe2c37222-496x560.jpg?auto=format&fit=fill&q=80&w=289",
  },
  {
    name: "leblanc",
    image:
      "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/069ada8fd3eb1ee76d0b8f579655e99dddeb6874-496x560.jpg?auto=format&fit=fill&q=80&w=289",
  },
  {
    name: "lee Sin",
    image:
      "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/ce638264ec40c028d3355852192d8feeb969880e-496x560.jpg?auto=format&fit=fill&q=80&w=289",
  },
  {
    name: "leona",
    image:
      "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/ca5514aba585f54d0f193189d5be105a3b2bc510-496x560.jpg?auto=format&fit=fill&q=80&w=289",
  },
  {
    name: "lillia",
    image:
      "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Lillia_0.jpg",
  },
  {
    name: "lissandra",
    image:
      "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/036bd75b51eb3ca4c1bae0054642ee2af5543b8a-496x560.jpg?auto=format&fit=fill&q=80&w=289",
  },
  {
    name: "lucian",
    image:
      "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/8ed4651535ff27aa19f06215fd608057c218f7e6-496x560.jpg?auto=format&fit=fill&q=80&w=289",
  },
  {
    name: "lulu",
    image:
      "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/fc33bd8b0b190bb820bbfc287f83836692b5c2c7-496x560.jpg?auto=format&fit=fill&q=80&w=289",
  },
  {
    name: "lux",
    image:
      "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/4238fe90dd74b08a6e8172c31e3b1ae609afb3cd-496x560.jpg?auto=format&fit=fill&q=80&w=289",
  },
  {
    name: "malphite",
    image:
      "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/afe536f3bd50d6f4862cc62dda9df824190a46f3-496x560.jpg?auto=format&fit=fill&q=80&w=289",
  },
  {
    name: "malzahar",
    image:
      "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/416cb8cd379b7bb71a2144c0ede5295f72d49cbc-496x560.jpg?auto=format&fit=fill&q=80&w=289",
  },
  {
    name: "maokai",
    image:
      "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/55afb8c9aaf08c143540a52f623d86fa5ec98e10-496x560.jpg?auto=format&fit=fill&q=80&w=289",
  },
  {
    name: "master Yi",
    image:
      "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/6843e7b0592caf9026f032161ddab664148a0232-496x560.jpg?auto=format&fit=fill&q=80&w=289",
  },
  {
    name: "milio",
    image:
      "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/28bcae8793c10de4c2e0fc85ff71b10d6d880d74-496x560.jpg?auto=format&fit=fill&q=80&w=289",
  },
  {
    name: "miss Fortune",
    image:
      "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/fb6f4d62835fa6e7ba97055baab49408c8c89273-496x560.jpg?auto=format&fit=fill&q=80&w=289",
  },
  {
    name: "mordekaiser",
    image:
      "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/1b94f6681d951a6618b4c2db1cc93825af1422eb-496x560.jpg?auto=format&fit=fill&q=80&w=289",
  },
  {
    name: "morgana",
    image:
      "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/5ba95b4c6faa6bc845471459aa298cb51142bfa7-496x560.jpg?auto=format&fit=fill&q=80&w=289",
  },
  {
    name: "naafiri",
    image:
      "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/e1edb620403defb893d04f7e8aedec554ec8bf52-496x560.jpg?auto=format&fit=fill&q=80&w=289",
  },
  {
    name: "nami",
    image:
      "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/2988b76577008ad86a492a18ab5d206580abe21e-496x560.jpg?auto=format&fit=fill&q=80&w=289",
  },
  {
    name: "nasus",
    image:
      "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/7ad20e92d0da55bcf2fca1a342774841bfa65383-496x560.jpg?auto=format&fit=fill&q=80&w=289",
  },
  {
    name: "nautilus",
    image:
      "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/624a37702a1e54b5f239a40157d42f32dd853b33-496x560.jpg?auto=format&fit=fill&q=80&w=289",
  },
  {
    name: "neeko",
    image:
      "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/19bcf3f8a2ef5006235be5b9c35931f323a03620-496x560.jpg?auto=format&fit=fill&q=80&w=289",
  },
  {
    name: "Ngộ Không",
    image:
      "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/769013a96f93d25ba79f5c9c9c2ee2caf7160a04-496x560.jpg?auto=format&fit=fill&q=80&w=289",
  },
  {
    name: "nidalee",
    image:
      "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/32b6045d73da3659586c80a1b043ba3975dc97ed-496x560.jpg?auto=format&fit=fill&q=80&w=289",
  },
  {
    name: "nilah",
    image:
      "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/22d46f952d019cb7500e4a952f93e67c9d7b5377-496x560.jpg?auto=format&fit=fill&q=80&w=289",
  },
  {
    name: "nocturne",
    image:
      "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/7b2172c259dcf0f2518b4395d466f6e2907d52b5-496x560.jpg?auto=format&fit=fill&q=80&w=289",
  },
  {
    name: "nunu & Willump",
    image:
      "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/6d9fd040ceab41dbe755f4ac1f6e11aa82548c1e-496x560.jpg?auto=format&fit=fill&q=80&w=289",
  },
  {
    name: "olaf",
    image:
      "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/0c89034a2608b5d628e3bf8cfedf655644e41391-496x560.jpg?auto=format&fit=fill&q=80&w=289",
  },
  {
    name: "orianna",
    image:
      "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/0a53fcc2e938af2fd80626142c34ce7d7a10802a-496x560.jpg?auto=format&fit=fill&q=80&w=289",
  },
  {
    name: "ornn",
    image:
      "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/4f7095a3826333552972bb0ebc30d8db4451e38e-496x560.jpg?auto=format&fit=fill&q=80&w=289",
  },
  {
    name: "pantheon",
    image:
      "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/b987382954c9a6acfd90661dc553964f6488c7f9-496x560.jpg?auto=format&fit=fill&q=80&w=289",
  },
  {
    name: "poppy",
    image:
      "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/2fea45326222c12a1520479c7fe1b171eaf95d10-496x560.jpg?auto=format&fit=fill&q=80&w=289",
  },
  {
    name: "pyke",
    image:
      "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/26db5e36b7212a5a6ea48ac39d5a686610332a43-496x560.jpg?auto=format&fit=fill&q=80&w=289",
  },
  {
    name: "qiyana",
    image:
      "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/c1455e502012e55c5746423efae861508d5bdff2-496x560.jpg?auto=format&fit=fill&q=80&w=289",
  },
  {
    name: "quinn",
    image:
      "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/ff9dea566dd446cc89a01ba1527e0f74d48ca170-496x560.jpg?auto=format&fit=fill&q=80&w=289",
  },
  {
    name: "rakan",
    image:
      "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/38173b98170a293d57659b7be573350f12442b91-496x560.jpg?auto=format&fit=fill&q=80&w=289",
  },
  {
    name: "rammus",
    image:
      "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/1457af1214e9d3992048a92fc576db2705e0f685-496x560.jpg?auto=format&fit=fill&q=80&w=289",
  },
  {
    name: "rek'sai",
    image:
      "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/617ff36121eb32334f5eadecb6a74da5c46e7041-496x560.jpg?auto=format&fit=fill&q=80&w=289",
  },
  {
    name: "rell",
    image:
      "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/599767a99c188ea397c933bcb67743e2fab96b78-496x560.jpg?auto=format&fit=fill&q=80&w=289",
  },
  {
    name: "renata Glasc",
    image:
      "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/f507ceaba050ab9c2b939fcb44935d49f7e80384-496x560.jpg?auto=format&fit=fill&q=80&w=289",
  },
  {
    name: "renekton",
    image:
      "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/d4650df7a5a7c35394ff0f861838f45028ddc247-496x560.jpg?auto=format&fit=fill&q=80&w=289",
  },
  {
    name: "rengar",
    image:
      "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/e75f1fa24a5acdd76e21594dd42c8728fe1a71be-496x560.jpg?auto=format&fit=fill&q=80&w=289",
  },
  {
    name: "riven",
    image:
      "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/0b9fbf46f30aa38d11f61d29430547279368c06a-496x560.jpg?auto=format&fit=fill&q=80&w=289",
  },
  {
    name: "rumble",
    image:
      "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/a02b3b301b201fcf2633cefd676ca609a25a7911-496x560.jpg?auto=format&fit=fill&q=80&w=289",
  },
  {
    name: "ryze",
    image:
      "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/e6b174c92f96fb06842f4aac2e417d0e27707c27-496x560.jpg?auto=format&fit=fill&q=80&w=289",
  },
  {
    name: "samira",
    image:
      "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Samira_0.jpg",
  },
  {
    name: "sejuani",
    image:
      "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/3d0c94dabcda10df81fac647ad5fda6cf16b1a42-496x560.jpg?auto=format&fit=fill&q=80&w=289",
  },
  {
    name: "senna",
    image:
      "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/719125ca9f21739ccb8d1a1fae91d7c943fe79dc-496x560.jpg?auto=format&fit=fill&q=80&w=289",
  },
  {
    name: "seraphine",
    image:
      "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Seraphine_0.jpg",
  },
  {
    name: "sett",
    image:
      "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Sett_0.jpg",
  },
  {
    name: "shaco",
    image:
      "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/e1e9185dbab454137bd62ae958a36856b5896690-496x560.jpg?auto=format&fit=fill&q=80&w=289",
  },
  {
    name: "shen",
    image:
      "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/28af24681f499bec551b898caa925c5ca18e84a7-496x560.jpg?auto=format&fit=fill&q=80&w=289",
  },
  {
    name: "shyvana",
    image:
      "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/49279f32616736aca748778c99c84bd2182f6695-496x560.jpg?auto=format&fit=fill&q=80&w=289",
  },
  {
    name: "singed",
    image:
      "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/ebe0ad435583fd9e32c44bc0bda05c126f95b496-496x560.jpg?auto=format&fit=fill&q=80&w=289",
  },
  {
    name: "sion",
    image:
      "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/523fbe02a6445674f3c7f8895e7433ede0e7fbdf-496x560.jpg?auto=format&fit=fill&q=80&w=289",
  },
  {
    name: "sivir",
    image:
      "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/cae117f8c64d4354c92d32b2f02a44969c11bca0-496x560.jpg?auto=format&fit=fill&q=80&w=289",
  },
  {
    name: "skarner",
    image:
      "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/c17a66d1b5d217b3c38e9bcad58a298bc956429d-496x560.jpg?auto=format&fit=fill&q=80&w=289",
  },
  {
    name: "smolder",
    image:
      "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/7cef5337e65fb08e2785896861c5ea76f983bea8-496x560.jpg?auto=format&fit=fill&q=80&w=289",
  },
  {
    name: "sona",
    image:
      "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/8f0b8b20ffcdab53ab33314cd82ea62c2f4cd902-496x560.jpg?auto=format&fit=fill&q=80&w=289",
  },
  {
    name: "soraka",
    image:
      "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/8a422facc9a83803afca14623ec9da507e07ee35-496x560.jpg?auto=format&fit=fill&q=80&w=289",
  },
  {
    name: "swain",
    image:
      "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/d01f2a33d48dc88ed4bf21adea7eb664b528e526-496x560.jpg?auto=format&fit=fill&q=80&w=289",
  },
  {
    name: "sylas",
    image:
      "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/6b3112e88d1135967c763e6362e7cfab680f58eb-496x560.jpg?auto=format&fit=fill&q=80&w=289",
  },
  {
    name: "syndra",
    image:
      "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data/757c0c3fffc811c1751f19b4ccbe7340becf0e81-418x473.jpg?auto=format&fit=fill&q=80&w=289",
  },
  {
    name: "tahm kench",
    image:
      "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/9ed7b9525c01d12ee744bbf3274803ce3f5299b2-496x560.jpg?auto=format&fit=fill&q=80&w=289",
  },
  {
    name: "taliyah",
    image:
      "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/d0e8f46f42002ca24b7a30f8a4d465d5778e90ea-496x560.jpg?auto=format&fit=fill&q=80&w=289",
  },
  {
    name: "talon",
    image:
      "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/b25f6325e2f6f0e35945b2d14edd792044e95beb-496x560.jpg?auto=format&fit=fill&q=80&w=289",
  },
  {
    name: "taric",
    image:
      "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/bb1089300ccc01a26cfaeb516f139344971827fa-496x560.jpg?auto=format&fit=fill&q=80&w=289",
  },
  {
    name: "teemo",
    image:
      "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data/64438d63b60f942297a010bf34ac30c2162ce98b-496x560.jpg?auto=format&fit=fill&q=80&w=289",
  },
  {
    name: "thresh",
    image:
      "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/dc18d5f07fcc968f28e850d46dc9632b7f8492fa-496x560.jpg?auto=format&fit=fill&q=80&w=289",
  },
  {
    name: "tristina",
    image:
      "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/03e864c901ae16c054f5afafa22b1fd68dfaf192-496x560.jpg?auto=format&fit=fill&q=80&w=289",
  },
  {
    name: "trundle",
    image:
      "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/d7636bd480ae8808200a4f9eff806cf997644152-496x560.jpg?auto=format&fit=fill&q=80&w=289",
  },
  {
    name: "tryndamere",
    image:
      "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/3da35104857a57eb001ac2ced3f41ec430de8e2e-496x560.jpg?auto=format&fit=fill&q=80&w=289",
  },
  {
    name: "twisted Fate",
    image:
      "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/c1a9aa77bfcc93fbe32e0f2d85168c875ae81bc7-496x560.jpg?auto=format&fit=fill&q=80&w=289",
  },
  {
    name: "twitch",
    image:
      "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/d7f78ff166e9234ea1a2f8837236b4d0c7e7bd28-496x560.jpg?auto=format&fit=fill&q=80&w=289",
  },
  {
    name: "udyr",
    image:
      "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/36dc5f7979391607c8d1ca380929a74c4476bf0a-496x560.jpg?auto=format&fit=fill&q=80&w=289",
  },
  {
    name: "urgot",
    image:
      "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/85f550818e4da59fdb2d2f5b2e535a89e35c5528-496x560.jpg?auto=format&fit=fill&q=80&w=289",
  },
  {
    name: "varus",
    image:
      "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/ccecd74b091fd7799fc42cfce7b7dabcc4d6e498-496x560.jpg?auto=format&fit=fill&q=80&w=289",
  },
  {
    name: "vayne",
    image:
      "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/5312fde4581bdcab2353b9bed68b6fc3ce919501-496x560.jpg?auto=format&fit=fill&q=80&w=289",
  },
  {
    name: "veigar",
    image:
      "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/c2c5a55ccd6d6778ddb77ce8082196f94972988b-496x560.jpg?auto=format&fit=fill&q=80&w=289",
  },
  {
    name: "vel'koz",
    image:
      "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/c4c034a4c79eb1cc0b306d72aa76b31ce27817ed-496x560.jpg?auto=format&fit=fill&q=80&w=289",
  },
  {
    name: "vex",
    image:
      "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/747fb0ce065ec65ee7c5fe1df418f24141684c3f-496x560.jpg?auto=format&fit=fill&q=80&w=289",
  },
  {
    name: "vi",
    image:
      "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/1d86e26e1b6ec9840b60d9386ae330d6eceacbf0-496x560.jpg?auto=format&fit=fill&q=80&w=289",
  },
  {
    name: "viego",
    image:
      "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/aae71b934d3e8fc201fad7bd0b53686f07c6156e-496x560.jpg?auto=format&fit=fill&q=80&w=289",
  },
  {
    name: "viktor",
    image:
      "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/cbd186d5916cf044d6f0b855c88121f9b28ce2ad-496x560.jpg?auto=format&fit=fill&q=80&w=289",
  },
  {
    name: "vladimir",
    image:
      "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/93d64dc58701a89a03c973879d966756f66b895a-496x560.jpg?auto=format&fit=fill&q=80&w=289",
  },
  {
    name: "volibear",
    image:
      "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Volibear_0.jpg",
  },
  {
    name: "warwick",
    image:
      "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/a82cc4bce6d685b81bf8b31098738a0c0188335b-496x560.jpg?auto=format&fit=fill&q=80&w=289",
  },
  {
    name: "xayah",
    image:
      "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/c781ef996d2bcaddd2b66eadf04af577f803b694-496x560.jpg?auto=format&fit=fill&q=80&w=289",
  },
  {
    name: "xerath",
    image:
      "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/b18fa515587a4dc70c52d0d5b6215e52ccab2385-496x560.jpg?auto=format&fit=fill&q=80&w=289",
  },
  {
    name: "xin Zhao",
    image:
      "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/0779f622717632f5a13c704a4bd97a8d472b50ac-496x560.jpg?auto=format&fit=fill&q=80&w=289",
  },
  {
    name: "yasuo",
    image:
      "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/bdbed4e6ca66f10b86f4dbc41db2d5c066ab9168-496x560.jpg?auto=format&fit=fill&q=80&w=289",
  },
  {
    name: "yone",
    image:
      "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Yone_0.jpg",
  },
  {
    name: "yorick",
    image:
      "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/38d1cc6f80ca931c894f36c222bad76cfe1a25da-496x560.jpg?auto=format&fit=fill&q=80&w=289",
  },
  {
    name: "yumi",
    image:
      "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/7a1e9d076808a8f08f7fd36d54e06da7ae36c363-496x560.jpg?auto=format&fit=fill&q=80&w=289",
  },
  {
    name: "zac",
    image:
      "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/cd71555dbeeba66f40163e195b244869d5846f55-496x560.jpg?auto=format&fit=fill&q=80&w=289",
  },
  {
    name: "zed",
    image:
      "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/790ff0f287533f90d2d02132c15f54fb85394fdc-496x560.jpg?auto=format&fit=fill&q=80&w=289",
  },
  {
    name: "zeri",
    image:
      "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/932a64c26ae1984205a2c3899f33ccf4828d2e23-496x560.jpg?auto=format&fit=fill&q=80&w=289",
  },
  {
    name: "ziggs",
    image:
      "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/78698b396af1dad5be4a076d1272025032b954f4-496x560.jpg?auto=format&fit=fill&q=80&w=289",
  },
  {
    name: "zilean",
    image:
      "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/de2a666cc2c21932e47ad80b865c5f2740001354-496x560.jpg?auto=format&fit=fill&q=80&w=289",
  },
  {
    name: "zoe",
    image:
      "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/1d06f0e8572e36ab5484458b9a63e40e26be902e-496x560.jpg?auto=format&fit=fill&q=80&w=289",
  },
  {
    name: "zyra",
    image:
      "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/814b13e8307739b0f8dc5b29029fb948932fe7b3-496x560.jpg?auto=format&fit=fill&q=80&w=289",
  },
];

randomButton.addEventListener("click", () => {
  const rd = Math.random();
  const nb = Math.round(rd * champions.length);
  contentElement.style.display = "block";
  nameElement.textContent = champions[nb].name;
  imgElement.src = champions[nb].image;
  alert("Good luck!!!");
});
