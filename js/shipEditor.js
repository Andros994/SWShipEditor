var shipConfig = {
    "Minuscola":{
        "costo": 12500,
        "minWorkForce": 3,
        "maxWorkForce": 18,
        "tierCostModifier": 0.5,
        "equipaggioMinimo": 1,
        "cargo": 0,
        "AC": 18,
        "shieldRegen": "d4"
    },
    "Piccola":{
        "costo": 25000,
        "minWorkForce": 5,
        "maxWorkForce": 30,
        "tierCostModifier": 1,
        "equipaggioMinimo": 1,
        "cargo": 2,
        "AC": 16,
        "shieldRegen": "d6"
    },
    "Media": {
        "costo": 75000,
        "minWorkForce": 10,
        "maxWorkForce": 60,
        "tierCostModifier": 2,
        "equipaggioMinimo": 5,
        "cargo": 25,
        "AC": 14,
        "shieldRegen": "d8"
    },
    "Grande": {
        "costo": 500000,
        "minWorkForce": 100,
        "maxWorkForce": 600,
        "tierCostModifier": 10,
        "equipaggioMinimo": 50,
        "cargo": 500,
        "AC": 12,
        "shieldRegen": "d10"
    },
    "Enorme": {
        "costo": 100000000,
        "minWorkForce": 1000,
        "maxWorkForce": 6000,
        "tierCostModifier": 100,
        "equipaggioMinimo": 500,
        "cargo": 10000,
        "AC": 10,
        "shieldRegen": "d12"
    },
    "Gargantuesca": {
        "costo": 1000000000,
        "minWorkForce": 10000,
        "maxWorkForce": 60000,
        "tierCostModifier": 1000,
        "equipaggioMinimo": 5000,
        "cargo": 200000,
        "AC": 8,
        "shieldRegen": "d20"
    }
}

var tierConfig = {
    "0": {
        "cost": 0,
        "description": "Produzione di massa (Standard)"
    },
    "1": {
        "cost": 3900,
        "description": "Modificata (Premium)"
    },
    "2": {
        "cost": 77500,
        "description": "Completamente customizzata (Prototype)"
    },
    "3": {
        "cost": 297000,
        "description": "Altamente sofisticata e ingegnerizzata (Advanced)"
    },
    "4": {
        "cost": 620000,
        "description": "Stato dell'arte (Legendary)"
    },
    "5": {
        "cost": 1150000,
        "description": "Unica (Artifact)"
    },
}

var weaponInfo = {
    "tinyLarge": {
        "primary": [
            {
                "name": "Seleziona Arma",
                "cost": "",
                "damage": "",
                "description": ""
               },
            {
            "name": "Assault laser cannon",
            "cost": "4,150 cr",
            "damage": "2d6 energy",
            "description": "Power (range 1200\/4800), constitution 15, overheat 2"
           },
           {
            "name": "Blaster cannon",
            "cost": "4,000 cr",
            "damage": "1d8 energy",
            "description": "Power (range 600\/2400), hidden, overheat 18, rapid 9"
           },
           {
            "name": "Burst laser cannon",
            "cost": "4,500 cr",
            "damage": "2d4 energy",
            "description": "Power (range 200\/800), auto, burst 1, overheat 2, saturate"
           },
           {
            "name": "Double laser cannon",
            "cost": "4,500 cr",
            "damage": "2d4 energy",
            "description": "Power (range 800\/3200), overheat 8"
           },
           {
            "name": "Heavy blaster cannon",
            "cost": "4,150 cr",
            "damage": "1d8 energy",
            "description": "Power (range 600\/2400), heavy, overheat 12"
           },
           {
            "name": "Heavy ion cannon",
            "cost": "4,150 cr",
            "damage": "1d10 ion",
            "description": "Power (range 1000\/4000), constitution 17, heavy, ionizing, overheat 4"
           },
           {
            "name": "Heavy laser cannon",
            "cost": "4,150 cr",
            "damage": "1d12 energy",
            "description": "Power (range 1200\/4800), constitution 15, heavy, overheat 2"
           },
           {
            "name": "Ion cannon",
            "cost": "6,100 cr",
            "damage": "2d4 ion",
            "description": "Power (range 800\/3200), constitution 13, ionizing, overheat 8"
           },
           {
            "name": "Laser cannon",
            "cost": "4,000 cr",
            "damage": "1d10 energy",
            "description": "Power (range 1000\/4000), constitution 11, overheat 4"
           },
           {
            "name": "Light ion cannon",
            "cost": "6,100 cr",
            "damage": "1d8 ion",
            "description": "Power (range 800\/3200), overheat 16"
           },
           {
            "name": "Light laser cannon",
            "cost": "4,100 cr",
            "damage": "1d8 energy",
            "description": "Power (range 800\/3200), overheat 16"
           },
           {
            "name": "Quad laser cannon",
            "cost": "4,400 cr",
            "damage": "2d4 energy",
            "description": "Power (range 800\/3200), constitution 13, overheat 8, rapid 2"
           },
           {
            "name": "Quad pulse laser",
            "cost": "4,400 cr",
            "damage": "1d6 energy",
            "description": "Power (range 400\/1600), overheat 16, rapid 4"
           },
           {
            "name": "Plasburst laser cannon",
            "cost": "4,000 cr",
            "damage": "1d8 energy",
            "description": "Power (range 600\/2400), burst 12, overheat 12"
           },
           {
            "name": "Pulse laser cannon",
            "cost": "2,500 cr",
            "damage": "1d4 energy",
            "description": "Power (range 500\/2000), keen 1, piercing 1, overheat 20"
           },
           {
            "name": "Rapid-fire laser cannon",
            "cost": "4,600 cr",
            "damage": "1d6 energy",
            "description": "Power (range 400\/1600), auto, burst 16, overheat 16, rapid 4"
           },
           {
            "name": "Slug cannon",
            "cost": "4,000 cr",
            "damage": "1d8 kinetic",
            "description": "Power (range 600\/2400), constitution 11, dire 1, overheat 4"
           },
           {
            "name": "Sparkler ion cannon",
            "cost": "6,100 cr",
            "damage": "1d4 ion",
            "description": "Power (range 200\/800), auto, burst 1, ionizing, overheat 1, saturate"
           },
           {
            "name": "Thermite cannon",
            "cost": "6,300 cr",
            "damage": "1d12 fire",
            "description": "Power (range 1200\/4800), constitution 17, melt, overheat 2"
           },
           {
            "name": "Twin auto-blaster",
            "cost": "4,400 cr",
            "damage": "1d4 energy",
            "description": "Power (range 250\/1000), auto, burst 10, hidden, overheat 20, rapid 5"
           },
           {
            "name": "Twin laser cannon",
            "cost": "4,400 cr",
            "damage": "1d8 energy",
            "description": "Power (range 600\/2400), constitution 11, rapid 3, overheat 12"
           }
        ],
        "secondary": [
            {
                "name": "Seleziona Arma",
                "cost": "",
                "damage": "",
                "description": ""
               },
            {
             "name": "Ion railgun",
             "cost": "5,700 cr",
             "damage": "1d10 ion",
             "description": "Power (range 1000\/4000), constitution 17, ionizing, overheat 4"
            },
            {
             "name": "Particle beam",
             "cost": "5,750 cr",
             "damage": "2d4 energy",
             "description": "Power (range 800\/3200), constitution 11, overheat 4"
            },
            {
             "name": "Slug railgun",
             "cost": "5,150 cr",
             "damage": "1d12 kinetic",
             "description": "Power (range 1200\/4800), constitution 15, overheat 2"
            },
            {
             "name": "Thermite railgun",
             "cost": "5,400 cr",
             "damage": "1d10 fire",
             "description": "Power (range 1200\/4800), constitution 17, melt, overheat 2"
            },
            {
             "name": "Turbolaser",
             "cost": "5,000 cr",
             "damage": "1d10 energy",
             "description": "Power (range 1000\/4000), constitution 13, overheat 4"
            }
        ],
        "tertiary": [
            {
                "name": "Seleziona Arma",
                "cost": "",
                "damage": "",
                "description": ""
               },
            {
             "name": "Cluster pod launcher",
             "cost": "6,000 cr",
             "damage": "-",
             "description": "Ammunition, reload 12"
            },
            {
             "name": "Missile launcher",
             "cost": "6,250 cr",
             "damage": "-",
             "description": "Ammunition, reload 4"
            },
            {
             "name": "Torpedo launcher",
             "cost": "6,900 cr",
             "damage": "-",
             "description": "Ammunition reload 4"
            }
        ],
        "quaternary": [
            {
                "name": "Seleziona Arma",
                "cost": "",
                "damage": "",
                "description": ""
               },
            {
                "name": "Bomb deployer",
                "cost": "8,000 cr",
                "damage": "-",
                "description": "Ammunition, reload 4"
            }
        ]
    },
    "huge": {
        "primary": [
            {
                "name": "Seleziona Arma",
                "cost": "",
                "damage": "",
                "description": ""
               },
            {
             "name": "Blaster point-defense",
             "cost": "4,000 cr",
             "damage": "3d4 energy",
             "description": "Power (range 200\/800), saturate, zone"
            },
            {
             "name": "Ion cannon point-defense",
             "cost": "5,500 cr",
             "damage": "2d6 ion",
             "description": "Power (range 300\/1200), ionizing, saturate, zone"
            },
            {
             "name": "Laser cannon point-defense",
             "cost": "6,000 cr",
             "damage": "3d6 energy",
             "description": "Power (range 300\/1200), saturate, zone"
            },
            {
             "name": "Ordnance point-defense",
             "cost": "6,000 cr",
             "damage": "2d6 kinetic",
             "description": "Power (range 300\/1200), explosive, saturate, zone"
            }
           ],
        "secondary": [
            {
                "name": "Seleziona Arma",
                "cost": "",
                "damage": "",
                "description": ""
               },
            {
             "name": "Assault turbolaser battery",
             "cost": "4,150 cr",
             "damage": "6d6 energy",
             "description": "Power (range 1200\/4800), con. 15, overheat 2"
            },
            {
             "name": "Burst turbolaser battery",
             "cost": "4,500 cr",
             "damage": "6d4 energy",
             "description": "Power (range 200\/800), auto, burst 1, overheat 2, saturate"
            },
            {
             "name": "Double turbolaser battery",
             "cost": "4,500 cr",
             "damage": "6d4 energy",
             "description": "Power (range 800\/3200), overheat 8"
            },
            {
             "name": "Heavy ion battery",
             "cost": "4,150 cr",
             "damage": "3d10 ion",
             "description": "Power (range 1000\/4000), con. 17, heavy, ionizing, overheat 4"
            },
            {
             "name": "Heavy ion railgun",
             "cost": "5,700 cr",
             "damage": "3d10 ion",
             "description": "Power (range 2000\/8000), con. 19, ionizing, overheat 4"
            },
            {
             "name": "Heavy gun battery",
             "cost": "4,000 cr",
             "damage": "4d10 kinetic",
             "description": "Power (range 400\/1600), con. 17, overheat 1, vicious 1"
            },
            {
             "name": "Heavy slug railgun",
             "cost": "5,150 cr",
             "damage": "3d12 kinetic",
             "description": "Power (range 2400\/9600), con. 17, overheat 2"
            },
            {
             "name": "Heavy thermite railgun",
             "cost": "5,400 cr",
             "damage": "3d10 fire",
             "description": "Power (range 2400\/9600), con. 19, melt, overheat 2"
            },
            {
             "name": "Heavy turbolaser battery",
             "cost": "4,150 cr",
             "damage": "3d12 energy",
             "description": "Power (range 1200\/4800), con. 15, heavy, overheat 2"
            },
            {
             "name": "Ion battery",
             "cost": "6,100 cr",
             "damage": "6d4 ion",
             "description": "Power (range 800\/3200), con. 13, ionizing, overheat 8"
            },
            {
             "name": "Light ion battery",
             "cost": "6,100 cr",
             "damage": "3d8 ion",
             "description": "Power (range 800\/3200), overheat 16"
            },
            {
             "name": "Light turbolaser battery",
             "cost": "4,100 cr",
             "damage": "3d8 energy",
             "description": "Power (range 800\/3200), overheat 16"
            },
            {
             "name": "Long-range turbolaser battery",
             "cost": "4,000 cr",
             "damage": "3d10 energy",
             "description": "Power (range 2400\/9600), con. 15, overheat 2"
            },
            {
             "name": "Quad turbolaser battery",
             "cost": "4,400 cr",
             "damage": "6d4 energy",
             "description": "Power (range 800\/3200), con. 13, overheat 8, rapid 2"
            },
            {
             "name": "Quad pulse turbolaser battery",
             "cost": "4,400 cr",
             "damage": "2d6 energy",
             "description": "Power (range 400\/1600), overheat 16, rapid 4"
            },
            {
             "name": "Particle Cannon",
             "cost": "5,750 cr",
             "damage": "6d4 energy",
             "description": "Power (range 1600\/6400), con. 13, overheat 4"
            },
            {
             "name": "Plasburst turbolaser battery",
             "cost": "4,000 cr",
             "damage": "3d8 energy",
             "description": "Power (range 600\/2400), burst 12, overheat 12"
            },
            {
             "name": "Pulse turbolaser battery",
             "cost": "2,500 cr",
             "damage": "3d4 energy",
             "description": "Power (range 500\/2000), keen 1, piercing 1, overheat 20"
            },
            {
             "name": "Rapid-fire turbolaser battery",
             "cost": "4,600 cr",
             "damage": "3d6 energy",
             "description": "Power (range 400\/1600), auto, burst 16, overheat 16, rapid 4"
            },
            {
             "name": "Thermite battery",
             "cost": "6,300 cr",
             "damage": "3d12 fire",
             "description": "Power (range 1200\/4800), con. 17, melt, overheat 2"
            },
            {
             "name": "Turbolaser battery",
             "cost": "4,000 cr",
             "damage": "3d10 energy",
             "description": "Power (range 1000\/4000), con. 11, overheat 4"
            },
            {
             "name": "Twin turbolaser battery",
             "cost": "4,400 cr",
             "damage": "2d8 energy",
             "description": "Power (range 600\/2400), con. 11, rapid 3, overheat 12"
            }
           ],
        "tertiary": [
            {
                "name": "Seleziona Arma",
                "cost": "",
                "damage": "",
                "description": ""
               },
            {
             "name": "Assault cluster pod launcher",
             "cost": "6,000 cr",
             "damage": "-",
             "description": "Ammunition, reload 24"
            },
            {
             "name": "Assault missile launcher",
             "cost": "6,250 cr",
             "damage": "-",
             "description": "Ammunition, reload 8"
            },
            {
             "name": "Assault torpedo launcher",
             "cost": "6,900 cr",
             "damage": "-",
             "description": "Ammunition reload 8"
            }
           ],
        "quaternary": [
            {
             "name": "Seleziona Arma",
             "cost": "",
             "damage": "",
             "description": ""
            },
            {
             "name": "Bomb layer",
             "cost": "8,000 cr",
             "damage": "-",
             "description": "Ammunition, reload 8"
            }
           ]
    }
}

var tagliaSelected = "";
var tagliaNave = "";
var tierSelected = "";
var tierNave = "";
var costoBaseNave, costoTierNave, costoTotale, baseDice;

$(document).ready(function(){
    $('.shipsClass').hide();
    popolaSelect(shipConfig);

    $('#tagliaNave, #tierNave').on('change', function(){
        $('.weaponSelect').empty();
        tagliaSelected = $('#tagliaNave').val();
        tierNave = $('#tierNave').val();
        if (tagliaSelected != ""){tagliaNave = tagliaSelected};
        if (tierSelected != ""){tierNave=tierSelected};
        if (tagliaNave != "" && tagliaNave != null){
            for (key in shipConfig){
                if (key == tagliaNave){
                    var singleShipConfig = shipConfig[key];
                }
            }
            aggiornaDatiNave(singleShipConfig);
            aggiornaArmiNave(tagliaNave, weaponInfo);
            updateWF(singleShipConfig);
            if (tierNave != "" && tierNave != null){
                for (key in tierConfig){
                    if (key == tierNave){
                        var singleTierConfig = tierConfig[key];
                    }
                }
                updateInfoTier(singleTierConfig, singleShipConfig);
                shipInfo(singleTierConfig, singleShipConfig);
            }
        }
    })

    $('#selectPrimaryWeapon').on('change', function(){
        var armaSelected = `<li class="mt-1"><div class="d-flex" style="justify-content: space-between;"><label>${$('#selectPrimaryWeapon option:selected').text()}</label><button type="button" class="btn btn-danger deleteWeapon"><i class="fa-solid fa-xmark"></i></button></button></button></div></li>`
        $('#listaPrimary').append(armaSelected);
    })
    $('#selectSecondaryWeapon').on('change', function(){
        var armaSelected = `<li class="mt-1"><div class="d-flex" style="justify-content: space-between;"><label>${$('#selectSecondaryWeapon option:selected').text()}</label><button type="button" class="btn btn-danger deleteWeapon"><i class="fa-solid fa-xmark"></i></button></button></button></div></li>`
        $('#listaSecondary').append(armaSelected);
    })
    $('#selectTertiaryWeapon').on('change', function(){
        var armaSelected = `<li class="mt-1"><div class="d-flex" style="justify-content: space-between;"><label>${$('#selectTertiaryWeapon option:selected').text()}</label><button type="button" class="btn btn-danger deleteWeapon"><i class="fa-solid fa-xmark"></i></button></button></button></div></li>`
        $('#listaTertiary').append(armaSelected);
    })
    $('#selectQuaternaryWeapon').on('change', function(){
        var armaSelected = `<li class="mt-1"><div class="d-flex" style="justify-content: space-between;"><label>${$('#selectQuaternaryWeapon option:selected').text()}</label><button type="button" class="btn btn-danger deleteWeapon"><i class="fa-solid fa-xmark"></i></button></button></button></div></li>`
        $('#listaQuaternay').append(armaSelected);
    })

    $(document).on('click', '.deleteWeapon', function(){
        $(this).parent().remove();
    })

    $(document).on('click', '#downloadButton', function(){
        generatePDF();
    })

})

function popolaSelect(json){
    for (key in json){
        var option = `<option id="option_${key} value="${key}">${key}</option>`;
        $('#tagliaNave').append(option);
    }
}

function aggiornaDatiNave(json){
    costoBaseNave = json.costo;
    $('#costoBaseNave').text('Costo Base: '+costoBaseNave+' cr');
    $('#descrizioneTaglia').text('La nave necessita di un equipaggio minimo di '+json.equipaggioMinimo)
    aggiornaWorkForce(json);
    $('#cargoNave').text('Cargo: '+json.cargo+' tonnellate');
}

function aggiornaArmiNave(taglia, json){
    if (taglia == "Minuscola" || taglia == "Piccola" || taglia == "Media"){
        var listaArmi = json.tinyLarge;
    } else {
        var listaArmi = json.huge;
    }
    popolaSelectArmi(listaArmi);
}

function popolaSelectArmi(listaArmi){
    // popolo lista armi primarie
    listaArmi.primary.forEach(element => {
        var option = `<option class="selectPrimary" value="${element.name}">${element.name} - ${element.damage} - ${element.cost} - ${element.description}</option>`
        $('#selectPrimaryWeapon').append(option);
    });
    // popolo lista armi secondarie
    listaArmi.secondary.forEach(element => {
        var option = `<option class="selectSecondary" value="${element.name}">${element.name} - ${element.damage} - ${element.cost} - ${element.description}</option>`
        $('#selectSecondaryWeapon').append(option);
    });
    // popolo lista armi terziarie
    listaArmi.tertiary.forEach(element => {
        var option = `<option class="selectTertiary" value="${element.name}">${element.name} - ${element.damage} - ${element.cost} - ${element.description}</option>`
        $('#selectTertiaryWeapon').append(option);
    });
    // popolo lista armi quaternarie
    listaArmi.quaternary.forEach(element => {
        var option = `<option class="selectQuaternary" value="${element.name}">${element.name} - ${element.damage} - ${element.cost} - ${element.description}</option>`
        $('#selectQuaternaryWeapon').append(option);
    });
}

function aggiornaWorkForce(json){

    $('#divForzaLavoro').empty();

    var minWorkForce = json.minWorkForce;
    var maxWorkForce = json.maxWorkForce;

    var element = `
    <center>
        <label class="col-12">Forza Lavoro</label>
        <div>
            <label class="col-2" id="forzaMin">${minWorkForce}</label>
            <input id="wfSelector" class="col-6" type="range" min="${minWorkForce}" max="${maxWorkForce}">
            <label class="col-2" id="forzaMin">${maxWorkForce}</label>
        </div>
        <div class="col-12">
            <label class="col-6" id="wfSelected">Forza Lavoro: </label>
        </div>
        <div class="col-12">
            <label class="col-6" id="constructionTime">Tempo di consegna: </label>
        </div>
    </center>
    `

    $('#divForzaLavoro').append(element);
}

function updateWF(json){
    $('#wfSelector').on('input', function(){
        $('#wfSelected').text('Forza lavoro: '+$(this).val()+' uomini');
        var shipTime = (json.costo / (500 * $(this).val())).toFixed(2); 
        $('#constructionTime').text('Tempo di consegna: '+shipTime+' giorni');
    })
}

function updateInfoTier(tier, ship){
    $('#descrizioneTier').text(tier.description);
    costoTierNave = tier.cost * ship.tierCostModifier;
    $('#costoTierNave').text('Costo modificatore di tier: '+costoTierNave+' cr');
    costoTotale = costoBaseNave+costoTierNave;
    $('#costoTotale').text('Costo totale: '+costoTotale+' cr');
}

function shipInfo(tier, ship){

    // modifica di pf, scudo e AC in base al tier in base alla nave
    $('#shieldRegen').text(ship.shieldRegen);
    switch (tagliaNave){
        case "Minuscola":
            $('.cardSize').hide();
            $('#tinyShip').show();
            baseDice = 4;
            switch (tierNave){
                case "0":
                    $('#ac').text(ship.AC);
                    $('#pf').text(baseDice);
                    $('#scudo').text(baseDice);
                    $('#acBonus').text("0");
                    break;
                case "1":
                    $('#ac').text(ship.AC);
                    $('#pf').text(baseDice*2);
                    $('#scudo').text(baseDice*2);
                    $('#acBonus').text("0");
                    $('#cardTiny1').show();
                    break;
                case "2":
                    $('#ac').text(ship.AC+1);
                    $('#pf').text(baseDice*3);
                    $('#scudo').text(baseDice*3);
                    $('#acBonus').text("+1");
                    $('#cardTiny1').show();
                    $('#cardTiny2').show();
                    break;
                    case "3":
                    $('#ac').text(ship.AC+2);
                    $('#pf').text(baseDice*4);
                    $('#scudo').text(baseDice*4);
                    $('#acBonus').text("+2");
                    $('#cardTiny1').show();
                    $('#cardTiny2').show();
                    $('#cardTiny3').show();
                    $('#cardTiny4').show();
                    break;
                    case "4":
                    $('#ac').text(ship.AC+3);
                    $('#pf').text(baseDice*5);
                    $('#scudo').text(baseDice*5);
                    $('#acBonus').text("+3");
                    $('#cardTiny1').show();
                    $('#cardTiny2').show();
                    $('#cardTiny3').show();
                    $('#cardTiny4').show();
                    $('#cardTiny5').show();
                    break;
                    case "5":
                    $('#ac').text(ship.AC+4);
                    $('#pf').text(baseDice*6);
                    $('#scudo').text(baseDice*6);
                    $('#acBonus').text("+4");
                    $('#cardTiny1').show();
                    $('#cardTiny2').show();
                    $('#cardTiny3').show();
                    $('#cardTiny4').show();
                    $('#cardTiny5').show();
                    $('#cardTiny6').show();
                    break;
                default: ""
            }
            break;
        case "Piccola":
            $('.cardSize').hide();
            $('#smallShip').show();
            baseDice = 6;
            switch (tierNave){
                case "0":
                    $('#ac').text(ship.AC);
                    $('#pf').text(baseDice*3);
                    $('#scudo').text(baseDice*3);
                    $('#acBonus').text("0");
                    break;
                case "1":
                    $('#ac').text(ship.AC);
                    $('#pf').text(baseDice*4);
                    $('#scudo').text(baseDice*4);
                    $('#acBonus').text("0");
                    $('#cardSmall1').show();
                    break;
                case "2":
                    $('#ac').text(ship.AC+1);
                    $('#pf').text(baseDice*5);
                    $('#scudo').text(baseDice*5);
                    $('#acBonus').text("+1");
                    $('#cardSmall1').show();
                    $('#cardSmall2').show();
                    break;
                case "3":
                    $('#ac').text(ship.AC+2);
                    $('#pf').text(baseDice*6);
                    $('#scudo').text(baseDice*6);
                    $('#acBonus').text("+2");
                    $('#cardSmall1').show();
                    $('#cardSmall2').show();
                    $('#cardSmall3').show();
                    $('#cardSmall4').show();
                    break;
                case "4":
                    $('#ac').text(ship.AC+3);
                    $('#pf').text(baseDice*7);
                    $('#scudo').text(baseDice*7);
                    $('#acBonus').text("+3");
                    $('#cardSmall1').show();
                    $('#cardSmall2').show();
                    $('#cardSmall3').show();
                    $('#cardSmall4').show();
                    $('#cardSmall5').show();
                    break;
                    case "5":
                    $('#ac').text(ship.AC+4);
                    $('#pf').text(baseDice*8);
                    $('#scudo').text(baseDice*8);
                    $('#acBonus').text("+4");
                    $('#cardSmall1').show();
                    $('#cardSmall2').show();
                    $('#cardSmall3').show();
                    $('#cardSmall4').show();
                    $('#cardSmall5').show();
                    $('#cardSmall6').show();
                    break;
                default: ""
            }
            break;
        case "Media":
            $('.cardSize').hide();
            $('#mediumShip').show();
            baseDice = 8;
            switch (tierNave){
                case "0":
                    $('#ac').text(ship.AC);
                    $('#pf').text(baseDice*5);
                    $('#scudo').text(baseDice*5);
                    $('#acBonus').text("0");
                    break;
                case "1":
                    $('#ac').text(ship.AC);
                    $('#pf').text(baseDice*6);
                    $('#scudo').text(baseDice*6);
                    $('#acBonus').text("0");
                    $('#cardmedium1').show();
                    break;
                case "2":
                    $('#ac').text(ship.AC+1);
                    $('#pf').text(baseDice*7);
                    $('#scudo').text(baseDice*7);
                    $('#acBonus').text("+1");
                    $('#cardmedium1').show();
                    $('#cardmedium2').show();
                    break;
                case "3":
                    $('#ac').text(ship.AC+2);
                    $('#pf').text(baseDice*8);
                    $('#scudo').text(baseDice*8);
                    $('#acBonus').text("+2");
                    $('#cardmedium1').show();
                    $('#cardmedium2').show();
                    $('#cardmedium3').show();
                    $('#cardmedium4').show();
                    break;
                case "4":
                    $('#ac').text(ship.AC+3);
                    $('#pf').text(baseDice*9);
                    $('#scudo').text(baseDice*9);
                    $('#acBonus').text("+3");
                    $('#cardmedium1').show();
                    $('#cardmedium2').show();
                    $('#cardmedium3').show();
                    $('#cardmedium4').show();
                    $('#cardmedium5').show();
                    break;
                case "5":
                    $('#ac').text(ship.AC+4);
                    $('#pf').text(baseDice*10);
                    $('#scudo').text(baseDice*10);
                    $('#acBonus').text("+4");
                    $('#cardmedium1').show();
                    $('#cardmedium2').show();
                    $('#cardmedium3').show();
                    $('#cardmedium4').show();
                    $('#cardmedium5').show();
                    $('#cardmedium6').show();
                    $('#cardmedium7').show();
                    break;
                default: ""
            }
            break;
        case "Grande":
            $('.cardSize').hide();
            $('#bigShip').show();
            baseDice = 10;
            switch (tierNave){
                case "0":
                    $('#ac').text(ship.AC);
                    $('#pf').text(baseDice*7);
                    $('#scudo').text(baseDice*7);
                    $('#acBonus').text("0");
                    break;
                case "1":
                    $('#ac').text(ship.AC);
                    $('#pf').text(baseDice*8);
                    $('#scudo').text(baseDice*8);
                    $('#acBonus').text("0");
                    $('#cardBig1').show();
                    break;
                case "2":
                    $('#ac').text(ship.AC+1);
                    $('#pf').text(baseDice*9);
                    $('#scudo').text(baseDice*9);
                    $('#acBonus').text("+1");
                    $('#cardBig1').show();
                    $('#cardBig2').show();
                    break;
                case "3":
                    $('#ac').text(ship.AC+2);
                    $('#pf').text(baseDice*10);
                    $('#scudo').text(baseDice*10);
                    $('#acBonus').text("+2");
                    $('#cardBig1').show();
                    $('#cardBig2').show();
                    $('#cardBig3').show();
                    $('#cardBig4').show();
                    break;
                case "4":
                    $('#ac').text(ship.AC+3);
                    $('#pf').text(baseDice*11);
                    $('#scudo').text(baseDice*11);
                    $('#acBonus').text("+3");
                    $('#cardBig1').show();
                    $('#cardBig2').show();
                    $('#cardBig3').show();
                    $('#cardBig4').show();
                    $('#cardBig5').show();
                    break;
                case "5":
                    $('#ac').text(ship.AC+4);
                    $('#pf').text(baseDice*12);
                    $('#scudo').text(baseDice*12);
                    $('#acBonus').text("+4");
                    $('#cardBig1').show();
                    $('#cardBig2').show();
                    $('#cardBig3').show();
                    $('#cardBig4').show();
                    $('#cardBig5').show();
                    $('#cardBig6').show();
                    $('#cardBig7').show();
                    break;
                default: ""
            }
            break;
        case "Enorme":
            $('.cardSize').hide();
            $('#enormeShip').show();
            baseDice = 12;
            switch (tierNave){
                case "0":
                    $('#ac').text(ship.AC);
                    $('#pf').text(baseDice*9);
                    $('#scudo').text(baseDice*9);
                    $('#acBonus').text("0");
                    break;
                case "1":
                    $('#ac').text(ship.AC);
                    $('#pf').text(baseDice*11);
                    $('#scudo').text(baseDice*11);
                    $('#acBonus').text("0");
                    $('#cardEnorme1').show();
                    break;
                case "2":
                    $('#ac').text(ship.AC+1);
                    $('#pf').text(baseDice*13);
                    $('#scudo').text(baseDice*13);
                    $('#acBonus').text("+1");
                    $('#cardEnorme1').show();
                    $('#cardEnorme2').show();
                    break;
                case "3":
                    $('#ac').text(ship.AC+2);
                    $('#pf').text(baseDice*15);
                    $('#scudo').text(baseDice*15);
                    $('#acBonus').text("+2");
                    $('#cardEnorme1').show();
                    $('#cardEnorme2').show();
                    $('#cardEnorme3').show();
                    $('#cardEnorme4').show();
                    break;
                case "4":
                    $('#ac').text(ship.AC+3);
                    $('#pf').text(baseDice*17);
                    $('#scudo').text(baseDice*17);
                    $('#acBonus').text("+3");
                    $('#cardEnorme1').show();
                    $('#cardEnorme2').show();
                    $('#cardEnorme3').show();
                    $('#cardEnorme4').show();
                    $('#cardEnorme5').show();
                    break;
                case "5":
                    $('#ac').text(ship.AC+4);
                    $('#pf').text(baseDice*19);
                    $('#scudo').text(baseDice*19);
                    $('#acBonus').text("+4");
                    $('#cardEnorme1').show();
                    $('#cardEnorme2').show();
                    $('#cardEnorme3').show();
                    $('#cardEnorme4').show();
                    $('#cardEnorme5').show();
                    $('#cardEnorme6').show();
                    $('#cardEnorme7').show();
                    break;
                default: ""
            }
            break;
        case "Gargantuesca":
            $('.cardSize').hide();
            $('#gargShip').show();
            baseDice = 20;
            switch (tierNave){
                case "0":
                    $('#ac').text(ship.AC);
                    $('#pf').text(baseDice*11);
                    $('#scudo').text(baseDice*11);
                    $('#acBonus').text("0");
                    break;
                case "1":
                    $('#ac').text(ship.AC);
                    $('#pf').text(baseDice*13);
                    $('#scudo').text(baseDice*13);
                    $('#acBonus').text("0");
                    $('#cardGarg1').show();
                    break;
                case "2":
                    $('#ac').text(ship.AC+1);
                    $('#pf').text(baseDice*15);
                    $('#scudo').text(baseDice*15);
                    $('#acBonus').text("+1");
                    $('#cardGarg1').show();
                    $('#cardGarg2').show();
                    break;
                case "3":
                    $('#ac').text(ship.AC+2);
                    $('#pf').text(baseDice*17);
                    $('#scudo').text(baseDice*17);
                    $('#acBonus').text("+2");
                    $('#cardGarg1').show();
                    $('#cardGarg2').show();
                    $('#cardGarg3').show();
                    $('#cardGarg4').show();
                    break;
                case "4":
                    $('#ac').text(ship.AC+3);
                    $('#pf').text(baseDice*19);
                    $('#scudo').text(baseDice*19);
                    $('#acBonus').text("+3");
                    $('#cardGarg1').show();
                    $('#cardGarg2').show();
                    $('#cardGarg3').show();
                    $('#cardGarg4').show();
                    $('#cardGarg5').show();
                    break;
                case "5":
                    $('#ac').text(ship.AC+4);
                    $('#pf').text(baseDice*21);
                    $('#scudo').text(baseDice*21);
                    $('#acBonus').text("+4");
                    $('#cardGarg1').show();
                    $('#cardGarg2').show();
                    $('#cardGarg3').show();
                    $('#cardGarg4').show();
                    $('#cardGarg5').show();
                    $('#cardGarg6').show();
                    $('#cardGarg7').show();
                    break;
                default: ""
            }
            break;
            
        default: "" 
    }

    $('#shipInfo').show();
}

function generatePDF() {
    window.print();
}