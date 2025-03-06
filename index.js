const classic = document.getElementById("classic");
const shorty = document.getElementById("shorty");
const frenzy = document.getElementById("frenzy");
const ghost = document.getElementById("ghost");
const sheriff = document.getElementById("sheriff");
const stinger = document.getElementById("stinger");
const specter = document.getElementById("specter");
const bucky = document.getElementById("bucky");
const judge = document.getElementById("judge");
const bulldog = document.getElementById("bulldog");
const guardian = document.getElementById("guardian");
const phantom = document.getElementById("phantom");
const vandal = document.getElementById("vandal");
const marshal = document.getElementById("marshal");
const outlaw = document.getElementById("outlaw");
const operator = document.getElementById("operator");
const ares = document.getElementById("ares");
const odin = document.getElementById("odin");
const melee = document.getElementById("melee");

const Astra = document.getElementById("Astra");
const Breach = document.getElementById("Breach");
const Brimstone = document.getElementById("Brimstone");
const Chamber = document.getElementById("Chamber");
const Clove = document.getElementById("Clove");
const Cypher = document.getElementById("Cypher");
const Deadlock = document.getElementById("Deadlock");
const Fade = document.getElementById("Fade");
const Gekko = document.getElementById("Gekko");
const Harbor = document.getElementById("Harbor");
const Iso = document.getElementById("Iso");
const Jett = document.getElementById("Jett");
const Kayo = document.getElementById("Kayo");
const Killjoy = document.getElementById("Killjoy");
const Neon = document.getElementById("Neon");
const Omen = document.getElementById("Omen");
const Phoenix = document.getElementById("Phoenix");
const Raze = document.getElementById("Raze");
const Reyna = document.getElementById("Reyna");
const Sage = document.getElementById("Sage");
const Skye = document.getElementById("Skye");
const Sova = document.getElementById("Sova");
const Tejo = document.getElementById("Tejo");
const Viper = document.getElementById("Viper");
const Vyse = document.getElementById("Vyse");
const Waylay = document.getElementById("Waylay");
const Yoru = document.getElementById("Yoru");


const selectAllWeaponsButton = document.getElementById("select-all-weapons");
const deselectAllWeaponsButton = document.getElementById("deselect-all-weapons");

const selectAllAgentsButton = document.getElementById("select-all-agents");
const deselectAllAgentsButton = document.getElementById("deselect-all-agents");

const allWeaponCheckboxes = [classic, shorty, frenzy, ghost, sheriff, stinger, specter,
     bucky, judge, bulldog, guardian, phantom, vandal, marshal, outlaw, operator, ares, odin, melee];
const allAgentCheckboxes = [Astra, Breach, Brimstone, Chamber, Clove, Cypher, Deadlock, Fade, Gekko,
    Harbor, Iso, Jett, Kayo, Killjoy, Neon, Omen, Phoenix, Raze, Reyna, Sage, Skye, Sova, Tejo, Viper,
    Vyse, Waylay, Yoru];

selectAllWeaponsButton.addEventListener("click", selectAllWeapons);
deselectAllWeaponsButton.addEventListener("click", deselectAllWeapons);
selectAllAgentsButton.addEventListener("click", selectAllAgents);
deselectAllAgentsButton.addEventListener("click", deselectAllAgents);

selectAllAgentsButton

function selectAllWeapons() {
    for (let i = 0; i < allWeaponCheckboxes.length; i++) {
        allWeaponCheckboxes[i].checked = true;
    }
}

function deselectAllWeapons() {
    for (let i = 0; i < allWeaponCheckboxes.length; i++) {
        allWeaponCheckboxes[i].checked = false;
    }
}

function selectAllAgents() {
    for (let i = 0; i < allAgentCheckboxes.length; i++) {
         allAgentCheckboxes[i].checked = true;
    }
}

function deselectAllAgents() {
    for (let i = 0; i < allAgentCheckboxes.length; i++) {
        allAgentCheckboxes[i].checked = false;
    }
}
