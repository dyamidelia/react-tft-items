import React, { Component } from 'react';
import logo from './images/logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
     
      <div className="App">
        <div className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        23123123123123123</p> */}

          <h2>TeamFight Tactics Items</h2>
      </div>
          
          {/*<div class="dropdown"> <span>This is a DropDown for Builds</span>
          <div class="dropdown-content">
          <p>Demons</p>
          <p>Demons</p>
          <p>Demons</p>
          <p>Demons</p>
          </div>
          </div>*/}

          {/*<h2>BF Sword</h2>
          <img src="https://vignette.wikia.nocookie.net/leagueoflegends/images/a/ab/B._F._Sword_item.png/revision/latest?cb=20171221055309" className="App-logo" alt="logo" />
          
          <table>
          <thead>
          <tr><th>Item Combo</th><th>Final Item</th><th>Effects</th></tr>
          </thead>
          <tbody>
          <tr><td>B.F. Sword</td><td>Infinity Edge</td><td>Critical Strike Damage is increased by 100%</td></tr>
          <tr><td>Recurve Bow</td><td>Sword of the Divine</td><td>5% chance each second to gain 100% crit</td></tr>
          <tr><td>Needlessly Large Rod</td><td>Hextech Gunblade</td><td>Heal 25% of damage dealt</td></tr>
          <tr><td>Tear of the Goddess</td><td>Spear of Shojin</td><td>After casting an ability, recover 15% of remaining maximum Mana per attack</td></tr>
          <tr><td>Chain Vest</td><td>Guardian Angel</td><td>Revive with 500HP</td></tr>
          <tr><td>Negatron Cloak</td><td>The Bloodthirster</td><td>35% Lifesteal</td></tr>
          <tr><td>Giant’s Belt</td><td>Zeke’s Herald</td><td>Adjacent allies gain +10% Attack Speed</td></tr>
          <tr><td>Spatula</td><td>Youmuu’s Ghostblade</td><td>Wearer is also an Assassin</td></tr>
          </tbody>
          </table> */}

        {/*
          <table>
          <thead>
            <tr>
              <th></th>
              <th>BF Sword</th>
              <th>Chain Mail</th>
              <th>Giants Belt</th>
              <th>Needlessly Large Rod</th>
              <th>Cloak</th>
              <th>Recurve Bow</th>
              <th>Spatula</th>
              <th>Tear</th>
            </tr>
          </thead>
          <tbody>
          <tr><th>B.F. Sword</th><td>Infinity Edge</td><td>Guardian Angel</td><td>Zeke’s Herald</td><td>Hextech Gunblade</td><td>The Bloodthirster</td><td>Sword of the Divine</td><td>Youmuu’s Ghostblade</td><td> Spear of Shojin</td></tr>
          <tr><th>Chain Vest</th><td>Guardian Angel</td><td>ThornMail</td><td>Red Buff</td><td>Locket</td><td>Sword Breaker</td><td>Phantom Dancer</td><td>Knight's Vow</td><td>Frozen Heart</td></tr>
          <tr><th>Giant’s Belt</th><td>Zeke’s Herald</td><td>Red Buff</td><td>Warmog's Armor</td><td>Morello's</td><td>Zephr</td><td>Titanic Hydra</td><td>Frozen Mallet</td><td>Redemption</td></tr>
          <tr><th>Needlessly Large Rod</th><td>Hextech Gunblade</td><td>Locket</td><td>Morello's</td><td>Death Cap</td><td>Ionic Spark</td><td>Guinsoo's RageBlade</td><td>Yummi</td><td>Luden's Echo</td></tr>
          <tr><th>Negatron Cloak</th><td>The Bloodthirster</td><td>Sword Breaker</td><td>Zephr</td><td>Ionic Spark</td><td>Dragon's Claw</td><td>Cursed Blade</td><td>Runan's Hurricane</td><td>Silence</td></tr>
          <tr><th>Recurve Bow</th><td>Sword of the Divine</td><td>Phantom Dancer</td><td>Titanic Hydra</td><td>Guinsoo's RageBlade</td><td>Cursed Blade</td><td>Rapid Fire Cannon</td><td>Blade of the Ruined King</td><td>Static Shiv</td></tr>
          <tr><th>Spatula </th><td>Youmuu’s Ghostblade</td><td>Knight's Vow</td><td>Frozen Mallet</td><td> Yuumi </td><td>Runan's Hurricane</td><td>Blade of the Rune King</td><td>Leviathan</td><td>Demon</td></tr>
          <tr><th>Tear of the Goddess </th><td> Spear of Shojin</td><td>Frozen Heart</td><td>Redemption</td><td>Luden's Echo</td><td>Silence</td><td>Static Shiv</td><td>Demon</td><td>Seraph's Embrace</td></tr>
          </tbody>
        </table> */}

          
          <table>
          <thead>
            <tr>
              <th><img src={logo}></img></th>
              <th><img src="http://ddragon.leagueoflegends.com/cdn/6.24.1/img/item/1038.png"></img></th> {/*BF Sword */}
              <th><img src="http://ddragon.leagueoflegends.com/cdn/6.24.1/img/item/1031.png"></img></th>
              <th><img src="http://ddragon.leagueoflegends.com/cdn/6.24.1/img/item/1011.png"></img></th>
              <th><img src="http://ddragon.leagueoflegends.com/cdn/6.24.1/img/item/1058.png"></img></th>
              <th><img src="http://ddragon.leagueoflegends.com/cdn/6.24.1/img/item/1057.png"></img></th> {/*Cloack*/}
              <th><img src="http://ddragon.leagueoflegends.com/cdn/6.24.1/img/item/1043.png"></img></th>{/*R Bow*/}
              <th><img src="https://vignette.wikia.nocookie.net/leagueoflegends/images/d/dc/Spatula_item.png/revision/latest/scale-to-width-down/46?cb=20190618214319"></img></th>{/*Spat*/}
              <th><img src="http://ddragon.leagueoflegends.com/cdn/6.24.1/img/item/3070.png"></img></th>{/*Tear*/}
            </tr>
          </thead>
          <tbody>
          <tr><th><img src="http://ddragon.leagueoflegends.com/cdn/6.24.1/img/item/1038.png"></img></th><td><img src="https://vignette.wikia.nocookie.net/leagueoflegends/images/1/15/Infinity_Edge_item.png/revision/latest?cb=20180531105945"></img></td><td><img src="https://gamepedia.cursecdn.com/lolesports_gamepedia_en/d/da/Guardian_Angel.png?version=773faf5e7e62bb0da153e9ab11852145"></img></td><td><img src="https://gamepedia.cursecdn.com/lolesports_gamepedia_en/3/36/Zeke%27s_Herald.png?version=430b04d74c6f1bda39638c42051a7ada"></img></td><td><img src="http://ddragon.leagueoflegends.com/cdn/6.24.1/img/item/3146.png"></img></td><td><img src="http://ddragon.leagueoflegends.com/cdn/6.24.1/img/item/3072.png"></img></td><td><img src="https://vignette.wikia.nocookie.net/leagueoflegends/images/9/9c/Sword_of_the_Divine_item.png/revision/latest?cb=20171223020826"></img></td><td><img src="http://ddragon.leagueoflegends.com/cdn/6.24.1/img/item/3142.png"></img></td><td> <img src="https://vignette.wikia.nocookie.net/leagueoflegends/images/1/1c/Spear_of_Shojin_item.png/revision/latest?cb=20180601205626"></img></td></tr>
          <tr><th><img src="http://ddragon.leagueoflegends.com/cdn/6.24.1/img/item/1031.png"></img></th><td><img src="https://gamepedia.cursecdn.com/lolesports_gamepedia_en/d/da/Guardian_Angel.png?version=773faf5e7e62bb0da153e9ab11852145"></img></td><td><img src="http://ddragon.leagueoflegends.com/cdn/6.24.1/img/item/3075.png"></img></td><td><img src="https://vignette.wikia.nocookie.net/leagueoflegends/images/e/e7/Red_BramblebackSquare.png/revision/latest/scale-to-width-down/46?cb=20140620025406"></img></td><td><img src="http://ddragon.leagueoflegends.com/cdn/6.24.1/img/item/3190.png"></img></td><td><img src="https://vignette.wikia.nocookie.net/leagueoflegends/images/e/e8/Sword_Breaker_item.png/revision/latest/scale-to-width-down/46?cb=20190618223710"></img></td><td><img src="http://ddragon.leagueoflegends.com/cdn/6.24.1/img/item/3046.png"></img></td><td><img src="http://ddragon.leagueoflegends.com/cdn/6.24.1/img/item/3109.png"></img></td><td><img src="http://ddragon.leagueoflegends.com/cdn/6.24.1/img/item/3110.png"></img></td></tr>
          <tr><th><img src="http://ddragon.leagueoflegends.com/cdn/6.24.1/img/item/1011.png"></img></th><td><img src="https://gamepedia.cursecdn.com/lolesports_gamepedia_en/3/36/Zeke%27s_Herald.png?version=430b04d74c6f1bda39638c42051a7ada"></img></td><td><img src="https://vignette.wikia.nocookie.net/leagueoflegends/images/e/e7/Red_BramblebackSquare.png/revision/latest/scale-to-width-down/46?cb=20140620025406"></img></td><td><img src="http://ddragon.leagueoflegends.com/cdn/6.24.1/img/item/3083.png"></img></td><td><img src="https://vignette.wikia.nocookie.net/leagueoflegends/images/7/7b/Morellonomicon_item.png/revision/latest?cb=20180220141954"></img></td><td><img src="https://gamepedia.cursecdn.com/lolesports_gamepedia_en/3/3e/Zephyr.png?version=cb0a396bbd0d809749734ad7e4b71f38"></img></td><td><img src="http://ddragon.leagueoflegends.com/cdn/6.24.1/img/item/3748.png"></img></td><td><img src="http://ddragon.leagueoflegends.com/cdn/6.24.1/img/item/3022.png"></img></td><td><img src="http://ddragon.leagueoflegends.com/cdn/6.24.1/img/item/3107.png"></img></td></tr>
          <tr><th><img src="http://ddragon.leagueoflegends.com/cdn/6.24.1/img/item/1058.png"></img></th><td><img src="http://ddragon.leagueoflegends.com/cdn/6.24.1/img/item/3146.png"></img></td><td><img src="http://ddragon.leagueoflegends.com/cdn/6.24.1/img/item/3190.png"></img></td><td><img src="https://vignette.wikia.nocookie.net/leagueoflegends/images/7/7b/Morellonomicon_item.png/revision/latest?cb=20180220141954"></img></td><td><img src="http://ddragon.leagueoflegends.com/cdn/6.24.1/img/item/3089.png"></img></td><td><img src="https://vignette.wikia.nocookie.net/leagueoflegends/images/9/9c/Ionic_Spark_item.png/revision/latest?cb=20171223001148"></img></td><td><img src="http://ddragon.leagueoflegends.com/cdn/6.24.1/img/item/3124.png"></img></td><td><img src="https://vignette.wikia.nocookie.net/leagueoflegends/images/2/2b/You_and_Me%21.png/revision/latest/scale-to-width-down/46?cb=20190426210438"></img></td><td><img src="http://ddragon.leagueoflegends.com/cdn/6.24.1/img/item/3285.png"></img></td></tr>
          <tr><th><img src="http://ddragon.leagueoflegends.com/cdn/6.24.1/img/item/1057.png"></img></th><td><img src="http://ddragon.leagueoflegends.com/cdn/6.24.1/img/item/3072.png"></img></td><td><img src="https://vignette.wikia.nocookie.net/leagueoflegends/images/e/e8/Sword_Breaker_item.png/revision/latest/scale-to-width-down/46?cb=20190618223710"></img></td><td><img src="https://gamepedia.cursecdn.com/lolesports_gamepedia_en/3/3e/Zephyr.png?version=cb0a396bbd0d809749734ad7e4b71f38"></img></td><td><img src="https://vignette.wikia.nocookie.net/leagueoflegends/images/9/9c/Ionic_Spark_item.png/revision/latest?cb=20171223001148"></img></td><td><img src="http://ddragon.leagueoflegends.com/cdn/6.24.1/img/item/3124.png"></img></td><td><img src="https://gamepedia.cursecdn.com/lolesports_gamepedia_en/c/ce/Dervish_Blade.png?version=dc4633bb0ec12011d3aad0b06656cc8e"></img></td><td><img src="http://ddragon.leagueoflegends.com/cdn/6.24.1/img/item/3085.png"></img></td><td><img src="https://vignette.wikia.nocookie.net/leagueoflegends/images/6/66/Hush_item.png/revision/latest?cb=20190618223755"></img></td></tr>
          <tr><th><img src="http://ddragon.leagueoflegends.com/cdn/6.24.1/img/item/1043.png"></img></th><td><img src="https://vignette.wikia.nocookie.net/leagueoflegends/images/9/9c/Sword_of_the_Divine_item.png/revision/latest?cb=20171223020826"></img></td><td><img src="http://ddragon.leagueoflegends.com/cdn/6.24.1/img/item/3046.png"></img></td><td><img src="http://ddragon.leagueoflegends.com/cdn/6.24.1/img/item/3748.png"></img></td><td><img src="http://ddragon.leagueoflegends.com/cdn/6.24.1/img/item/1038.png"></img></td><td><img src="https://gamepedia.cursecdn.com/lolesports_gamepedia_en/c/ce/Dervish_Blade.png?version=dc4633bb0ec12011d3aad0b06656cc8e"></img></td><td><img src="http://ddragon.leagueoflegends.com/cdn/6.24.1/img/item/3094.png"></img></td><td><img src="http://ddragon.leagueoflegends.com/cdn/6.24.1/img/item/3153.png"></img></td><td><img src="http://ddragon.leagueoflegends.com/cdn/6.24.1/img/item/3087.png"></img></td></tr>
          <tr><th><img src="https://vignette.wikia.nocookie.net/leagueoflegends/images/d/dc/Spatula_item.png/revision/latest/scale-to-width-down/46?cb=20190618214319"></img></th><td><img src="http://ddragon.leagueoflegends.com/cdn/6.24.1/img/item/3142.png"></img></td><td><img src="http://ddragon.leagueoflegends.com/cdn/6.24.1/img/item/3109.png"></img></td><td><img src="http://ddragon.leagueoflegends.com/cdn/6.24.1/img/item/3022.png"></img></td><td><img src="https://vignette.wikia.nocookie.net/leagueoflegends/images/2/2b/You_and_Me%21.png/revision/latest/scale-to-width-down/46?cb=20190426210438"></img></td><td><img src="http://ddragon.leagueoflegends.com/cdn/6.24.1/img/item/3085.png"></img></td><td><img src="http://ddragon.leagueoflegends.com/cdn/6.24.1/img/item/3153.png"></img></td><td><img src="https://vignette.wikia.nocookie.net/leagueoflegends/images/d/dd/Gladiator%27s_Pride_item.png/revision/latest?cb=20190630225143"></img></td><td><img src="https://vignette.wikia.nocookie.net/leagueoflegends/images/d/de/World_Ender.png/revision/latest?cb=20180612213606"></img></td></tr>
          <tr><th><img src="http://ddragon.leagueoflegends.com/cdn/6.24.1/img/item/3070.png"></img></th><td><img src="https://vignette.wikia.nocookie.net/leagueoflegends/images/1/1c/Spear_of_Shojin_item.png/revision/latest?cb=20180601205626"></img></td><td><img src="http://ddragon.leagueoflegends.com/cdn/6.24.1/img/item/3110.png"></img></td><td><img src="http://ddragon.leagueoflegends.com/cdn/6.24.1/img/item/3107.png"></img></td><td><img src="http://ddragon.leagueoflegends.com/cdn/6.24.1/img/item/3285.png"></img></td><td><img src="https://vignette.wikia.nocookie.net/leagueoflegends/images/6/66/Hush_item.png/revision/latest?cb=20190618223755"></img></td><td><img src="http://ddragon.leagueoflegends.com/cdn/6.24.1/img/item/3087.png"></img></td><td><img src="https://vignette.wikia.nocookie.net/leagueoflegends/images/d/de/World_Ender.png/revision/latest?cb=20180612213606"></img></td><td><img src="http://ddragon.leagueoflegends.com/cdn/6.24.1/img/item/3007.png"></img></td></tr>
          </tbody>
          </table>

    
      </div>
    );
  }
}

export default App;
